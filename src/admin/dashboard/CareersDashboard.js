"use client";
import React, { useState, useEffect } from "react";
import { Eye, Edit, Trash2, Plus, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, DeleteConfirm, statusColor } from "./SharedUI";
import CreateJobPosting from "../carrers/CreateJobPosting";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function CareersDashboard() {
  const [jobs, setJobs] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${API_BASE_URL}jobs/`, {
        headers: {
          "accept": "application/json",
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      const rawList = Array.isArray(res.data) ? res.data : (res.data?.data || []);
      
      const formatted = rawList.map(j => ({
        id: j.id,
        title: j.job_title || "Untitled Position",
        department: j.department || "General",
        location: j.job_location || "Remote",
        type: j.employment_type || "Full-Time",
        openings: j.number_of_openings || 1,
        status: j.job_status || "Draft",
        experience: j.experience_level || "Entry Level",
        basicInfo: {
          id: j.id,
          jobTitle: j.job_title,
          jobCategory: j.job_category,
          department: j.department,
          employmentType: j.employment_type,
          jobLocation: j.job_location,
          workMode: j.work_mode,
          experienceLevel: j.experience_level,
          yearsOfExperience: j.years_of_experience,
          numberOfOpenings: j.number_of_openings,
          jobStatus: j.job_status,
          jobExpiryDate: j.job_expiry_date
        }
      }));
      setJobs(formatted.reverse());
    } catch (err) {
      console.warn("Failed to fetch jobs", err);
      if (err.response?.status === 401) {
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
    fetchJobs();
  }, []);

  const handleSaveJob = (savedJob) => {
    fetchJobs();
    setShowCreateForm(false);
    setEditItem(null);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.delete(`${API_BASE_URL}jobs/${deleteItem.id}`, {
        headers: {
          "accept": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.status === 200 || res.status === 204) {
        setJobs(p => p.filter(j => j.id !== deleteItem.id));
        alert("Job deleted successfully!");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete job posting from backend.");
    }
    setDeleteItem(null);
  };

  const filteredJobs = jobs.filter(j => {
    const search = searchTerm.toLowerCase();
    return (
      (j.title && j.title.toLowerCase().includes(search)) ||
      (j.department && j.department.toLowerCase().includes(search)) ||
      (j.location && j.location.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage) || 1;
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (showCreateForm || editItem) {
    return (
      <CreateJobPosting
        job={editItem}
        onSave={handleSaveJob}
        onCancel={() => { setShowCreateForm(false); setEditItem(null); }}
      />
    );
  }

  if (viewItem) {
    return (
      <CreateJobPosting
        job={viewItem}
        isReadOnly={true}
        onSave={() => {}}
        onCancel={() => setViewItem(null)}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-lg font-bold text-slate-800 capitalize">Careers Management</h1>
          <p className="text-xs text-slate-400">{filteredJobs.length} records found</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Title, Department or Location..." 
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
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow transition-all cursor-pointer">
            <Plus className="w-3.5 h-3.5" />Create Job
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-xs text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  {["S.No.", "Job Title", "Department", "Location & Type", "Openings", "Experience", "Status", "Actions"].map(h => (
                    <th key={h} className="py-2 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap border border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedJobs.length > 0 ? (
                  paginatedJobs.map((j, i) => (
                    <tr key={j.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 px-3 text-slate-400 font-medium text-[11px] border border-slate-200">
                        {(currentPage - 1) * itemsPerPage + i + 1}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-800 border border-slate-200">
                        <span className="hover:text-blue-600 cursor-pointer block max-w-[200px] truncate" onClick={() => setViewItem(j)} title={j.title}>{j.title}</span>
                      </td>
                      <td className="py-2 px-3 border border-slate-200"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">{j.department}</span></td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] border border-slate-200">
                        <div className="font-semibold text-slate-700 whitespace-nowrap">{j.location}</div>
                        <div className="text-[10px] text-slate-400">{j.type}</div>
                      </td>
                      <td className="py-2 px-3 text-slate-600 font-semibold border border-slate-200">{j.openings}</td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] font-medium border border-slate-200">{j.experience}</td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200"><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor(j.status)}`}>{j.status}</span></td>
                      <td className="py-2 px-3 whitespace-nowrap border border-slate-200">
                        <div className="flex items-center gap-0.5">
                          <button onClick={() => setViewItem(j)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all cursor-pointer" title="View Details"><Eye className="w-3.5 h-3.5" /></button>
                          <button onClick={() => setEditItem(j)} className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-all cursor-pointer" title="Edit"><Edit className="w-3.5 h-3.5" /></button>
                          <button onClick={() => setDeleteItem(j)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all cursor-pointer" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-slate-500 border border-slate-200">
                      {loading ? "Loading jobs..." : "No job postings found."}
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredJobs.length)} of {filteredJobs.length} entries
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

      {deleteItem && <DeleteConfirm item={deleteItem} type="jobs" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
