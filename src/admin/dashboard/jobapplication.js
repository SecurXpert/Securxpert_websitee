"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2, Search, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function JobApplicationDashboard() {
  const [applications, setApplications] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  
  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/job-applications/", {
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
        setApplications(rawList.sort((a, b) => b.id - a.id));
      } else {
        setApplications([]);
      }
    } catch (err) {
      console.warn("API Error", err);
      setApplications([]);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}/job-applications/${deleteItem.id}`, {
        method: "DELETE",
        headers: { ...(token && { "Authorization": `Bearer ${token}` }) }
      });
      if (res.ok) {
        setApplications(p => p.filter(a => a.id !== deleteItem.id));
      } else {
        console.error("Failed to delete application");
      }
    } catch (error) {
      console.error("Delete request failed", error);
    }
    setDeleteItem(null);
  };

  const filteredApplications = applications.filter(a => {
    const search = searchTerm.toLowerCase();
    return (
      (a.candidate_name && a.candidate_name.toLowerCase().includes(search)) ||
      (a.enter_email && a.enter_email.toLowerCase().includes(search)) ||
      (a.current_location && a.current_location.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage) || 1;
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Job Applications</h1>
          <p className="text-sm text-slate-400">{filteredApplications.length} records found</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Name, Email or Location..." 
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
                  {["Name", "Email", "Phone", "Experience", "Location", "Applied Date", "Actions"].map(h => (
                    <th key={h} className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {paginatedApplications.length > 0 ? (
                  paginatedApplications.map(a => (
                    <tr key={a.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">{a.candidate_name}</td>
                      <td className="py-4 px-6 text-slate-600">{a.enter_email}</td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{a.contact_number || "N/A"}</td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{a.total_experience || 0} Yrs</td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{a.current_location || "N/A"}</td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">{a.created_at ? new Date(a.created_at).toLocaleDateString() : "N/A"}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          {a.upload_your_latest_resume && (
                            <a href={API_BASE_URL + "/" + a.upload_your_latest_resume} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="View/Download Resume">
                              <Download className="w-4 h-4" />
                            </a>
                          )}
                          <button onClick={() => setViewItem(a)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Details"><Eye className="w-4 h-4" /></button>
                          <button onClick={() => setDeleteItem(a)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-500">
                      No job applications found.
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredApplications.length)} of {filteredApplications.length} entries
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
        <Modal title="Job Application Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Candidate Name", viewItem.candidate_name], 
                ["Email", viewItem.enter_email], 
                ["Phone", viewItem.contact_number || "N/A"], 
                ["Total Exp.", (viewItem.total_experience || 0) + " Yrs"], 
                ["Relevant Exp.", (viewItem.relevant_experience || 0) + " Yrs"], 
                ["Location", viewItem.current_location || "N/A"],
                ["Current CTC", (viewItem.current_ctc || 0) + " LPA"],
                ["Expected CTC", (viewItem.expected_ctc || 0) + " LPA"],
                ["Applied Date", viewItem.created_at ? new Date(viewItem.created_at).toLocaleString() : "N/A"]
              ].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p>
                  <p className="text-sm font-semibold text-slate-700 truncate" title={v}>{v}</p>
                </div>
              ))}
            </div>
            
            {viewItem.linkedin_profile_url && (
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2">LinkedIn Profile</p>
                <a href={viewItem.linkedin_profile_url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline break-all">
                  {viewItem.linkedin_profile_url}
                </a>
              </div>
            )}
            
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-400 uppercase font-bold mb-2">Technical Proficiency</p>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{viewItem.technical_proficiency || "N/A"}</p>
            </div>
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="job application" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
