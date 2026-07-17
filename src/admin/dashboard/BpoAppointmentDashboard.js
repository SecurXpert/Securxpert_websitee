"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function BpoAppointmentDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search and Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}/book-appointment/`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "accept": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data?.data || []);
        setAppointments(list.reverse());
      }
    } catch (err) {
      console.warn("Failed to fetch appointments", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}/book-appointment/${deleteItem.id}`, {
        method: "DELETE",
        headers: { 
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` }) 
        }
      });
      if (res.ok) {
        setAppointments(p => p.filter(a => a.id !== deleteItem.id));
        alert("Appointment deleted successfully!");
      } else {
        alert("Failed to delete appointment.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
    setDeleteItem(null);
  };

  const filteredAppointments = appointments.filter(a => {
    const search = searchTerm.toLowerCase();
    return (
      (a.name && a.name.toLowerCase().includes(search)) ||
      (a.email && a.email.toLowerCase().includes(search)) ||
      (a.service_type && a.service_type.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage) || 1;
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-lg font-bold text-slate-800 capitalize">BPO Service Appointments</h1>
          <p className="text-xs text-slate-400">{loading ? "Loading..." : `${filteredAppointments.length} records found`}</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Service, Name or Email..." 
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
                  {["S.No.", "Service Type", "Full Name", "Email", "Phone Number", "Message", "Actions"].map(h => (
                    <th key={h} className="py-2 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap border border-slate-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedAppointments.length > 0 ? (
                  paginatedAppointments.map((a, i) => (
                    <tr key={a.id || i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2 px-3 text-slate-400 font-medium text-[11px] border border-slate-200">
                        {(currentPage - 1) * itemsPerPage + i + 1}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-800 whitespace-nowrap border border-slate-200">
                        <span className="hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(a)}>{a.service_type || "N/A"}</span>
                      </td>
                      <td className="py-2 px-3 border border-slate-200">
                        <span className="font-semibold text-slate-700 whitespace-nowrap">{a.name}</span>
                      </td>
                      <td className="py-2 px-3 text-slate-500 font-medium border border-slate-200">
                        {a.email}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] font-medium whitespace-nowrap border border-slate-200">
                        {(a.country_code || "") + " " + (a.phone_number || "N/A")}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] max-w-[180px] truncate border border-slate-200" title={a.message}>
                        {a.message || "N/A"}
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
                    <td colSpan="7" className="py-8 text-center text-slate-500 border border-slate-200">
                      {loading ? "Loading appointments..." : "No appointments found."}
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredAppointments.length)} of {filteredAppointments.length} entries
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
        <Modal title="Appointment Details" onClose={() => setViewItem(null)}>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800">{viewItem.service_type} Appointment</h2>
            <div className="grid grid-cols-2 gap-3">
              {[["Full Name", viewItem.name], ["Email", viewItem.email], ["Phone Number", (viewItem.country_code || "") + " " + (viewItem.phone_number || "N/A")]].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-2.5 rounded-lg"><p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">{k}</p><p className="text-xs font-semibold text-slate-700">{v}</p></div>
              ))}
            </div>
            {viewItem.message && (
              <div className="bg-slate-50 p-3 rounded-lg"><p className="text-[10px] text-slate-400 uppercase font-bold mb-1.5">Message</p><p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{viewItem.message}</p></div>
            )}
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="appointments" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
