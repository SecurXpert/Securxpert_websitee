"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2, Search, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function JobApplicationDashboard() {
  const [applications, setApplications] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [previewResumeUrl, setPreviewResumeUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}job-applications/get_all_applications`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "accept": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data?.data || []);
        const normalized = list.map(item => ({
          id: item.id,
          full_name: item.candidate_name || item.full_name || "N/A",
          email: item.enter_email || item.email || "N/A",
          phone_number: item.contact_number || item.phone_number || "N/A",
          country_code: item.country_code || "",
          skills: item.technical_proficiency || item.skills || "N/A",
          resume_url: item.upload_your_latest_resume || item.resume_url || "",
          job_title: item.job_title || "Job Applicant",
          total_experience: item.total_experience !== undefined ? item.total_experience : "N/A",
          relevant_experience: item.relevant_experience !== undefined ? item.relevant_experience : "N/A",
          current_location: item.current_location || "N/A",
          current_ctc: item.current_ctc !== undefined ? item.current_ctc : "N/A",
          expected_ctc: item.expected_ctc !== undefined ? item.expected_ctc : "N/A",
          linkedin_profile_url: item.linkedin_profile_url || "N/A"
        }));
        setApplications(normalized.reverse());
      }
    } catch (err) {
      console.warn("Failed to fetch applications", err);
      if (err.status === 401 || err.response?.status === 401) {
        const token = localStorage.getItem("access_token");
        if (token && token !== "master-bypass-token") {
          localStorage.removeItem("access_token");
          alert("Session expired. Please log in again.");
          window.location.href = "/admin";
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}job-applications/delete-job-application/${deleteItem.id}`, {
        method: "DELETE",
        headers: { 
          "accept": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` }) 
        }
      });
      if (res.ok) {
        setApplications(p => p.filter(a => a.id !== deleteItem.id));
        alert("Job application deleted successfully!");
      } else {
        alert("Failed to delete application.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
    setDeleteItem(null);
  };

  const filteredApplications = applications.filter(a => {
    const search = searchTerm.toLowerCase();
    return (
      (a.full_name && a.full_name.toLowerCase().includes(search)) ||
      (a.email && a.email.toLowerCase().includes(search)) ||
      (a.job_title && a.job_title.toLowerCase().includes(search))
    );
  });

  if (previewResumeUrl) {
    return (
      <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden">
        {/* Top Header of the Resume Preview */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setPreviewResumeUrl(null)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Applications
            </button>
            <h1 className="text-base font-bold text-slate-800">Resume Preview</h1>
          </div>
          
          <a 
            href={previewResumeUrl} 
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </header>

        {/* Iframe content occupying full body below the header */}
        <div className="flex-1 p-5 overflow-hidden flex flex-col">
          <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden relative">
            <iframe 
              src={previewResumeUrl.toLowerCase().endsWith(".doc") || previewResumeUrl.toLowerCase().endsWith(".docx")
                ? `https://docs.google.com/gview?url=${encodeURIComponent(previewResumeUrl)}&embedded=true`
                : previewResumeUrl
              } 
              className="w-full h-full border-0"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage) || 1;
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-lg font-bold text-slate-800 capitalize">Job Applications</h1>
          <p className="text-xs text-slate-400">{loading ? "Loading..." : `${filteredApplications.length} records found`}</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Name, Email or Job Title..." 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs outline-none focus:border-blue-500 focus:bg-white transition-all w-[260px] text-slate-700" 
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-xs text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  {[
                    "S.No.",
                    "Full Name",
                    "Job Title",
                    "Email",
                    "Phone",
                    "Location",
                    "Total Exp",
                    "Relevant Exp",
                    "Current CTC",
                    "Expected CTC",
                    "LinkedIn",
                    "Technical Proficiency",
                    "Resume",
                    "Actions"
                  ].map(h => (
                    <th key={h} className="py-2 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap border border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedApplications.length > 0 ? (
                   paginatedApplications.map((a, i) => (
                    <tr key={a.id || i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 px-3 text-slate-400 font-medium text-[11px] border border-slate-200">
                        {(currentPage - 1) * itemsPerPage + i + 1}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-800 whitespace-nowrap border border-slate-200">
                        <span className="hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(a)}>{a.full_name}</span>
                      </td>
                      <td className="py-2 px-3 text-slate-600 font-medium border border-slate-200">{a.job_title || "N/A"}</td>
                      <td className="py-2 px-3 text-slate-500 font-medium border border-slate-200">{a.email}</td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] font-medium whitespace-nowrap border border-slate-200">{(a.country_code || "") + " " + (a.phone_number || "N/A")}</td>
                      <td className="py-2 px-3 text-slate-500 border border-slate-200 whitespace-nowrap">{a.current_location || "N/A"}</td>
                      <td className="py-2 px-3 text-slate-500 border border-slate-200 whitespace-nowrap">{a.total_experience !== "N/A" ? `${a.total_experience} Years` : "N/A"}</td>
                      <td className="py-2 px-3 text-slate-500 border border-slate-200 whitespace-nowrap">{a.relevant_experience !== "N/A" ? `${a.relevant_experience} Years` : "N/A"}</td>
                      <td className="py-2 px-3 text-slate-500 border border-slate-200 whitespace-nowrap">{a.current_ctc || "N/A"}</td>
                      <td className="py-2 px-3 text-slate-500 border border-slate-200 whitespace-nowrap">{a.expected_ctc || "N/A"}</td>
                      <td className="py-2 px-3 border border-slate-200 whitespace-nowrap">
                        {a.linkedin_profile_url !== "N/A" && a.linkedin_profile_url ? (
                          <a href={a.linkedin_profile_url.startsWith('http') ? a.linkedin_profile_url : `https://${a.linkedin_profile_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                            View Profile
                          </a>
                        ) : "N/A"}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] max-w-[150px] truncate border border-slate-200" title={a.skills}>
                        {a.skills || "N/A"}
                      </td>
                      <td className="py-2 px-3 border border-slate-200">
                        {a.resume_url ? (
                          <button 
                            onClick={() => setPreviewResumeUrl(a.resume_url)}
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" /> Preview Resume
                          </button>
                        ) : (
                          <span className="text-slate-400">N/A</span>
                        )}
                      </td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200">
                        <div className="flex items-center gap-0.5">
                          <button onClick={() => setViewItem(a)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all cursor-pointer" title="View"><Eye className="w-3.5 h-3.5" /></button>
                          <button onClick={() => setDeleteItem(a)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all cursor-pointer" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="14" className="py-8 text-center text-slate-500 border border-slate-200">
                      {loading ? "Loading applications..." : "No job applications found."}
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredApplications.length)} of {filteredApplications.length} entries
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

      {viewItem && (
        <Modal title="Job Application Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-1">
            <div>
              <h2 className="text-base font-bold text-[#364BC0]">{viewItem.job_title || "Job Application"}</h2>
              <p className="text-xs text-slate-400 mt-0.5">Application ID: #{viewItem.id}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Full Name", viewItem.full_name],
                ["Email", viewItem.email],
                ["Phone Number", (viewItem.country_code || "") + " " + (viewItem.phone_number || "N/A")],
                ["Location", viewItem.current_location],
                ["Total Experience", `${viewItem.total_experience} Years`],
                ["Relevant Experience", `${viewItem.relevant_experience} Years`],
                ["Current CTC", viewItem.current_ctc],
                ["Expected CTC", viewItem.expected_ctc],
                ["LinkedIn Profile", viewItem.linkedin_profile_url !== "N/A" && viewItem.linkedin_profile_url ? (
                  <a href={viewItem.linkedin_profile_url.startsWith('http') ? viewItem.linkedin_profile_url : `https://${viewItem.linkedin_profile_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Profile
                  </a>
                ) : "N/A"]
              ].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">{k}</p>
                  <div className="text-xs font-semibold text-slate-700">{v}</div>
                </div>
              ))}
            </div>
            {viewItem.skills && viewItem.skills !== "N/A" && (
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Technical Proficiency</p>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{viewItem.skills}</p>
              </div>
            )}
            {viewItem.resume_url && (
              <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-between border border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Resume File</p>
                  <p className="text-xs text-slate-700 font-semibold">Attached Resume Document</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPreviewResumeUrl(viewItem.resume_url)}
                    className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100 font-bold text-xs px-3.5 py-1.5 rounded-lg cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </button>
                  <a 
                    href={viewItem.resume_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="job applications" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
