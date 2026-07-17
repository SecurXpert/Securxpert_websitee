"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, DeleteConfirm } from "../dashboard/SharedUI";
import { API_BASE_URL } from "../config";

export default function ContactDashboard() {
  const [contacts, setContacts] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  
  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/contact/contact-us", {
        headers: {
          "accept": "application/json",
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = Array.isArray(data) ? data : (data?.data || []);
        // Reverse to show latest first
        setContacts(rawList.sort((a, b) => b.id - a.id));
      } else {
        setContacts([]);
      }
    } catch (err) {
      console.warn("API Error", err);
      setContacts([]);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}/contact/${deleteItem.id}`, {
        method: "DELETE",
        headers: { ...(token && { "Authorization": `Bearer ${token}` }) }
      });
      if (res.ok) {
        setContacts(p => p.filter(c => c.id !== deleteItem.id));
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Delete request failed", error);
    }
    setDeleteItem(null);
  };

  const filteredContacts = contacts.filter(c => {
    const search = searchTerm.toLowerCase();
    return (
      (c.name && c.name.toLowerCase().includes(search)) ||
      (c.email && c.email.toLowerCase().includes(search)) ||
      (c.purpose && c.purpose.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage) || 1;
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Contact Form Submissions</h1>
          <p className="text-sm text-slate-400">{filteredContacts.length} records found</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Name, Email or Purpose..." 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-blue-500 focus:bg-white transition-all w-[300px] text-slate-700" 
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  {["Name", "Email", "Purpose", "Phone", "Location", "Message", "Actions"].map(h => (
                    <th key={h} className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {paginatedContacts.length > 0 ? (
                  paginatedContacts.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">{c.name}</td>
                      <td className="py-4 px-6 text-slate-600">{c.email}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 whitespace-nowrap">
                          {c.purpose || "General"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{(c.country_code || "") + " " + (c.phone_number || "N/A")}</td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{c.location || "N/A"}</td>
                      <td className="py-4 px-6 text-slate-500 max-w-[200px] truncate">{c.message}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <button onClick={() => setViewItem(c)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Details"><Eye className="w-4 h-4" /></button>
                          <button onClick={() => setDeleteItem(c)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-500">
                      No contact submissions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-auto border-t border-slate-100 p-4 flex items-center justify-between bg-slate-50/50">
              <span className="text-xs font-medium text-slate-500">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} entries
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-semibold text-slate-700 px-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {viewItem && (
        <Modal title="Contact Submission Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Name", viewItem.name], 
                ["Email", viewItem.email], 
                ["Phone", (viewItem.country_code || "") + " " + (viewItem.phone_number || "N/A")], 
                ["Location", viewItem.location || "N/A"], 
                ["Purpose", viewItem.purpose || "N/A"],
                ["Date", viewItem.created_at ? new Date(viewItem.created_at).toLocaleString() : "N/A"]
              ].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p>
                  <p className="text-sm font-semibold text-slate-700">{v}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-400 uppercase font-bold mb-2">Message</p>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{viewItem.message}</p>
            </div>
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="contact submissions" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
