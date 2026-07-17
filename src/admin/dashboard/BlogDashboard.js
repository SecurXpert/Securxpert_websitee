"use client";
import React, { useState, useEffect } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
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
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Blogs Management</h1>
          <p className="text-sm text-slate-400">{blogs.length} records found</p>
        </div>
        <button
          onClick={() => { setEditItem(null); setShowBlogForm(true); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow transition-all">
          <Plus className="w-4 h-4" />Add Blog
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Title", "Category", "Author", "Status", "Date", "Actions"].map(h => (
                  <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {blogs.map(b => (
                <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(b)}>{b.title}</span>
                  </td>
                  <td className="py-4 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">{b.category}</span></td>
                  <td className="py-4 px-6 text-slate-500 text-xs font-medium">{b.author}</td>
                  <td className="py-4 px-6"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColor(b.status)}`}>{b.status}</span></td>
                  <td className="py-4 px-6 text-slate-400 text-xs">{b.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setViewItem(b)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => { setEditItem(b); setShowBlogForm(true); }} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Edit"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => setDeleteItem(b)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteItem && <DeleteConfirm item={deleteItem} type="blogs" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
