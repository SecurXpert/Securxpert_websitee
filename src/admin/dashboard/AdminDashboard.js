"use client";
import React, { useState } from "react";
import { Eye, Edit, Trash2, Plus, LogOut, FileText, Briefcase, X, ChevronRight } from "lucide-react";
import AdminBlogForm from "../blogs/AdminBlogForm";
import CreateJobPosting from "../carrers/CreateJobPosting";
import { API_BASE_URL } from "../config";

const dummyBlogs = [
  { id: 1, title: "Top 10 Cybersecurity Trends in 2025", category: "Cyber Security", author: "Ravi Kumar", status: "Published", date: "2025-06-15", excerpt: "Explore the most critical cybersecurity trends shaping the industry this year, from AI-driven threats to zero-trust architectures.", content: "Full blog content about cybersecurity trends..." },
  { id: 2, title: "How AI is Transforming IT Operations", category: "AI & Automation", author: "Priya Sharma", status: "Published", date: "2025-06-20", excerpt: "Artificial Intelligence is revolutionizing the way IT teams operate, enabling faster incident response and predictive maintenance.", content: "Detailed content about AI in IT operations..." },
  { id: 3, title: "Cloud Security Best Practices for 2025", category: "Cloud & DevOps", author: "Ankit Verma", status: "Draft", date: "2025-07-01", excerpt: "Securing cloud infrastructure requires a multi-layered approach. Learn best practices from industry experts.", content: "Cloud security best practices content..." },
  { id: 4, title: "The Rise of Zero Trust Architecture", category: "Cyber Security", author: "Meena Patel", status: "Published", date: "2025-07-05", excerpt: "Zero Trust is no longer optional — it is the foundation of modern enterprise security. Here's what you need to know.", content: "Zero trust architecture detailed content..." },
];



function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><X className="w-5 h-5 text-slate-500" /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function DeleteConfirm({ item, type, onConfirm, onClose }) {
  return (
    <Modal title="Confirm Delete" onClose={onClose}>
      <p className="text-slate-600 mb-6">Are you sure you want to delete <span className="font-bold text-slate-800">"{item?.title}"</span>? This action cannot be undone.</p>
      <div className="flex gap-3 justify-end">
        <button onClick={onClose} className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors">Delete</button>
      </div>
    </Modal>
  );
}

export default function AdminDashboard() {
  const [activeModule, setActiveModule] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [careers, setCareers] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [careerEditItem, setCareerEditItem] = useState(null);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/blogs/", {
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();

        // Ensure data is an array
        const rawList = Array.isArray(data) ? data : (data?.data || []);

        // Sort descending so the most recent blogs appear first
        rawList.sort((a, b) => b.id - a.id);

        // Map backend fields to the frontend table format
        const formatted = rawList.map(b => ({
          id: b.id,
          title: b.title || "Untitled",
          category: b.category || "Uncategorized",
          author: b.author || "Admin",
          status: b.status || "Draft",
          date: b.publish_date || b.created_at ? new Date(b.publish_date || b.created_at).toISOString().split("T")[0] : "N/A",
          excerpt: b.slug, // fallback for excerpt if not available
        }));

        setBlogs(formatted);
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const fetchCareers = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/jobs/", {
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = Array.isArray(data) ? data : (data?.data || []);
        rawList.sort((a, b) => b.id - a.id);
        const formatted = rawList.map(j => ({
          id: j.id,
          title: j.job_title || "Untitled",
          department: j.department || "N/A",
          type: j.employment_type || "Full-Time",
          location: j.job_location || "N/A",
          status: j.job_status || "Draft",
          openings: j.number_of_openings || 1,
          experience: j.experience_level || "",
          mode: j.work_mode || "",
          description: j.job_description || "",
        }));
        setCareers(formatted);
      }
    } catch (err) {
      console.error("Failed to fetch careers", err);
    }
  };

  React.useEffect(() => {
    if (activeModule === "blogs") {
      fetchBlogs();
    } else if (activeModule === "careers") {
      fetchCareers();
    }
  }, [activeModule]);

  const handleBlogPublish = () => {
    fetchBlogs();
    setShowBlogForm(false);
  };

  const data = activeModule === "blogs" ? blogs : careers;

  const handleDelete = async () => {
    if (activeModule === "blogs") {
      try {
        const token = localStorage.getItem("access_token");
        const slugId = deleteItem.excerpt || deleteItem.id;

        const res = await fetch(`${API_BASE_URL}/blogs/${slugId}`, {
          method: "DELETE",
          headers: { ...(token && { "Authorization": `Bearer ${token}` }) }
        });

        if (res.ok) {
          setBlogs(p => p.filter(b => b.id !== deleteItem.id));
        } else {
          alert("Failed to delete the blog from the server.");
        }
      } catch (error) {
        alert("Network error while trying to delete.");
      }
    } else {
      setCareers(p => p.filter(c => c.id !== deleteItem.id));
    }
    setDeleteItem(null);
  };

  const openEdit = (item) => {
    if (activeModule === "blogs") {
      setEditItem(item);
      setShowBlogForm(true);
    } else {
      setCareerEditItem(item);
      setShowCareerForm(true);
    }
  };

  const handleEditSave = () => {
    setCareers(p => p.map(c => c.id === editItem.id ? { ...c, ...editForm } : c));
    setEditItem(null);
  };

  const statusColor = (s) => s === "Published" || s === "Active"
    ? "bg-green-50 text-green-700 border border-green-200"
    : "bg-amber-50 text-amber-700 border border-amber-200";

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar — fixed, full height */}
      <aside className="w-64 bg-[#210A4A] text-white flex flex-col shrink-0 fixed inset-y-0 left-0 z-30">
        <div className="p-6 border-b border-white/10">
          <img src="/securxpertslogo.png" alt="SecurXpert" className="h-9 w-auto object-contain brightness-0 invert" />
          <p className="text-xs text-slate-400 mt-2 font-medium">Admin Dashboard</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[{ id: "blogs", label: "Blogs", icon: FileText }, { id: "careers", label: "Careers", icon: Briefcase }].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveModule(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeModule === id ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
              <Icon className="w-4 h-4" />{label}
              {activeModule === id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/admin" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-white/10 hover:text-white transition-all">
            <LogOut className="w-4 h-4" />Sign Out
          </a>
        </div>
      </aside>

      {/* Main area — offset by sidebar width */}
      <main className="flex-1 flex flex-col ml-64 h-screen overflow-hidden">
        {/* Topbar — sticky within main */}
        <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
          <div>
            <h1 className="text-xl font-bold text-slate-800 capitalize">{activeModule} Management</h1>
            <p className="text-sm text-slate-400">{data.length} records found</p>
          </div>
          <button
            onClick={() => {
              if (activeModule === "blogs") { setEditItem(null); setShowBlogForm(true); }
              else { setCareerEditItem(null); setShowCareerForm(true); }
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow transition-all">
            <Plus className="w-4 h-4" />Add {activeModule === "blogs" ? "Blog" : "Job"}
          </button>
        </header>

        {/* Blog Form OR Table */}
        {showBlogForm && activeModule === "blogs" ? (
          <AdminBlogForm
            onBack={() => { setShowBlogForm(false); setEditItem(null); }}
            onPublish={handleBlogPublish}
            editItem={editItem}
          />
        ) : showCareerForm && activeModule === "careers" ? (
          <div className="flex-1 overflow-y-auto">
            <CreateJobPosting
              job={careerEditItem ? {
                id: careerEditItem.id,
                basicInfo: careerEditItem,
                hero: null,
                jobDescription: careerEditItem.description || "",
                rolesAndResponsibilities: null,
                requirements: null
              } : null}
              onSave={(savedJob) => {
                fetchCareers();
                setShowCareerForm(false);
                setCareerEditItem(null);
              }}
              onCancel={() => { setShowCareerForm(false); setCareerEditItem(null); }}
            />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    {activeModule === "blogs"
                      ? ["Title", "Category", "Author", "Status", "Date", "Actions"].map(h => <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>)
                      : ["Title", "Department", "Type", "Location", "Status", "Openings", "Actions"].map(h => <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {activeModule === "blogs" ? blogs.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => window.open(`/blogs/${b.excerpt || b.id}`, '_blank')}>{b.title}</span>
                      </td>
                      <td className="py-4 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">{b.category}</span></td>
                      <td className="py-4 px-6 text-slate-500 text-xs font-medium">{b.author}</td>
                      <td className="py-4 px-6"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColor(b.status)}`}>{b.status}</span></td>
                      <td className="py-4 px-6 text-slate-400 text-xs">{b.date}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1">
                          <button onClick={() => window.open(`/blogs/${b.excerpt || b.id}`, '_blank')} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                          <button onClick={() => openEdit(b)} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Edit"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => setDeleteItem(b)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  )) : careers.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(c)}>{c.title}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{c.experience}</p>
                      </td>
                      <td className="py-4 px-6 text-slate-500 text-xs font-medium">{c.department}</td>
                      <td className="py-4 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{c.type}</span></td>
                      <td className="py-4 px-6 text-slate-500 text-xs">{c.location} · {c.mode}</td>
                      <td className="py-4 px-6"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColor(c.status)}`}>{c.status}</span></td>
                      <td className="py-4 px-6 text-slate-600 font-bold text-sm">{c.openings}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1">
                          <button onClick={() => setViewItem(c)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                          <button onClick={() => openEdit(c)} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Edit"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => setDeleteItem(c)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* View Modal */}
      {viewItem && (
        <Modal title="Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{viewItem.title}</h2>
            {activeModule === "blogs" ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {[["Category", viewItem.category], ["Author", viewItem.author], ["Status", viewItem.status], ["Date", viewItem.date]].map(([k, v]) => (
                    <div key={k} className="bg-slate-50 p-3 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p><p className="text-sm font-semibold text-slate-700">{v}</p></div>
                  ))}
                </div>
                <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Excerpt</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.excerpt}</p></div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {[["Department", viewItem.department], ["Type", viewItem.type], ["Location", viewItem.location], ["Mode", viewItem.mode], ["Status", viewItem.status], ["Openings", viewItem.openings], ["Experience", viewItem.experience], ["Category", viewItem.category]].map(([k, v]) => (
                    <div key={k} className="bg-slate-50 p-3 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p><p className="text-sm font-semibold text-slate-700">{v}</p></div>
                  ))}
                </div>
                <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Description</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.description}</p></div>
              </>
            )}
          </div>
        </Modal>
      )}

      {/* Edit Modal */}
      {editItem && activeModule !== "blogs" && (
        <Modal title="Edit Record" onClose={() => setEditItem(null)}>
          <div className="space-y-4">
            <>
              {[["title", "Title"], ["department", "Department"], ["type", "Employment Type"], ["location", "Location"], ["mode", "Work Mode"], ["status", "Status"], ["openings", "Openings"], ["experience", "Experience"]].map(([k, l]) => (
                <div key={k}>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{l}</label>
                  <input value={editForm[k] || ""} onChange={e => setEditForm(p => ({ ...p, [k]: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                <textarea value={editForm.description || ""} onChange={e => setEditForm(p => ({ ...p, description: e.target.value }))} rows={3}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all resize-none" />
              </div>
            </>
            <div className="flex gap-3 justify-end pt-2">
              <button onClick={() => setEditItem(null)} className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">Cancel</button>
              <button onClick={handleEditSave} className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">Save Changes</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteItem && <DeleteConfirm item={deleteItem} type={activeModule} onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
