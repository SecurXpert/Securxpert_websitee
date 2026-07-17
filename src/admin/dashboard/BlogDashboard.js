"use client";
import React, { useState, useEffect } from "react";
import { Eye, Edit, Trash2, Plus, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, DeleteConfirm, statusColor } from "./SharedUI";
import AdminBlogForm from "../blogs/AdminBlogForm";
import ViewBlog from "../blogs/ViewBlog";
import { API_BASE_URL } from "../config";

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [showBlogForm, setShowBlogForm] = useState(false);

  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/blogs/", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = Array.isArray(data) ? data : (data?.data || []);
        rawList.sort((a, b) => b.id - a.id);
        const formatted = rawList
          .filter(b => b.status?.toLowerCase() !== "in_active")
          .map(b => ({
            id: b.id,
            title: b.title || "Untitled",
            category: b.category || "Uncategorized",
            author: b.author || "Admin",
            status: b.status || "Draft",
            date: b.publish_date || b.created_at ? new Date(b.publish_date || b.created_at).toISOString().split("T")[0] : "N/A",
            excerpt: b.slug,
          }));
        setBlogs(formatted);
      }
    } catch (err) {
      console.warn("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleBlogPublish = () => {
    fetchBlogs();
    setShowBlogForm(false);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}/blogs/${deleteItem.id}/all`, {
        method: "DELETE",
        headers: { 
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` }) 
        }
      });
      if (res.ok) {
        setBlogs(p => p.filter(b => b.id !== deleteItem.id));
        alert("Blog deleted successfully!");
      } else {
        alert("Failed to delete the blog from the server.");
      }
    } catch (error) {
      alert("Network error while trying to delete.");
    }
    setDeleteItem(null);
  };

  const filteredBlogs = blogs.filter(b => {
    const search = searchTerm.toLowerCase();
    return (
      (b.title && b.title.toLowerCase().includes(search)) ||
      (b.category && b.category.toLowerCase().includes(search)) ||
      (b.author && b.author.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage) || 1;
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (viewItem) {
    return <ViewBlog blogId={viewItem.id} onBack={() => setViewItem(null)} />;
  }

  if (showBlogForm) {
    return (
      <AdminBlogForm
        onBack={() => { setShowBlogForm(false); setEditItem(null); }}
        onPublish={handleBlogPublish}
        editItem={editItem}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-lg font-bold text-slate-800 capitalize">Blogs Management</h1>
          <p className="text-xs text-slate-400">{filteredBlogs.length} records found</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Title, Category or Author..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs outline-none focus:border-blue-500 focus:bg-white transition-all w-[260px] text-slate-700" 
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>
          <button
            onClick={() => { setEditItem(null); setShowBlogForm(true); }}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow transition-all cursor-pointer">
            <Plus className="w-3.5 h-3.5" />Add Blog
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-xs text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  {["S.No.", "Title", "Category", "Author", "Status", "Date", "Actions"].map(h => (
                    <th key={h} className="py-2 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap border border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedBlogs.length > 0 ? (
                  paginatedBlogs.map((b, i) => (
                    <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 px-3 text-slate-400 font-medium text-[11px] border border-slate-200">
                        {(currentPage - 1) * itemsPerPage + i + 1}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-800 border border-slate-200">
                        <span className="hover:text-blue-600 cursor-pointer block max-w-[280px] truncate" onClick={() => setViewItem(b)} title={b.title}>{b.title}</span>
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">{b.category}</span></td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] font-medium whitespace-nowrap border border-slate-200">{b.author}</td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200"><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor(b.status)}`}>{b.status}</span></td>
                      <td className="py-2 px-3 text-slate-400 text-[11px] whitespace-nowrap border border-slate-200">{b.date}</td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200">
                        <div className="flex items-center gap-0.5">
                          <button onClick={() => setViewItem(b)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all cursor-pointer" title="View"><Eye className="w-3.5 h-3.5" /></button>
                          <button onClick={() => { setEditItem(b); setShowBlogForm(true); }} className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-all cursor-pointer" title="Edit"><Edit className="w-3.5 h-3.5" /></button>
                          <button onClick={() => setDeleteItem(b)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all cursor-pointer" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-500 border border-slate-200">
                      No blogs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-auto border-t border-slate-200 p-3.5 flex items-center justify-between bg-slate-50/50">
              <span className="text-[11px] font-medium text-slate-500">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length} entries
              </span>
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1 rounded-md border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-semibold text-slate-700 px-1">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1 rounded-md border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {deleteItem && <DeleteConfirm item={deleteItem} type="blogs" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
