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
      const res = await fetch(API_BASE_URL + "/book-appointment/", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "accept": "application/json"
        }
      });
      if (res.ok) {
        const data = await res.json();
        // Handle response format: { success: true, count: 4, data: [...] }
        const list = data?.data || (Array.isArray(data) ? data : []);
        // Reverse array to show newest first
        setAppointments(list.reverse());
      }
    } catch (err) {
      console.warn("Failed to fetch BPO appointments", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = () => {
    // Note: Local delete as backend doesn't provide a delete endpoint
    const updated = appointments.filter(a => a.id !== deleteItem.id);
    setAppointments(updated);
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
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">BPO Appointments</h1>
          <p className="text-sm text-slate-400">{loading ? "Loading..." : `${filteredAppointments.length} records found`}</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Name, Email or Service..." 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:border-blue-500 focus:bg-white transition-all w-[300px] text-slate-700" 
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  {["Name", "Email", "Service Type", "Phone Number", "Message", "Actions"].map(h => (
                    <th key={h} className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {paginatedAppointments.length > 0 ? (
                  paginatedAppointments.map((a, i) => (
                    <tr key={a.id || i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">{a.name}</td>
                      <td className="py-4 px-6 text-slate-600">{a.email}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 whitespace-nowrap">
                          {a.service_type || "N/A"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500 whitespace-nowrap">
                        {(a.country_code || "") + " " + (a.phone_number || "")}
                      </td>
                      <td className="py-4 px-6 text-slate-500 max-w-[200px] truncate" title={a.message}>
                        {a.message || "No message provided"}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <button onClick={() => setViewItem(a)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View Details"><Eye className="w-4 h-4" /></button>
                          <button onClick={() => setDeleteItem({ ...a, title: a.name })} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-500">
                      {loading ? "Loading appointments..." : "No BPO appointments found."}
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
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredAppointments.length)} of {filteredAppointments.length} entries
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
        <Modal title="BPO Appointment Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Name", viewItem.name], 
                ["Email", viewItem.email], 
                ["Phone Number", (viewItem.country_code || "") + " " + (viewItem.phone_number || "")], 
                ["Service Type", viewItem.service_type || "N/A"]
              ].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p>
                  <p className="text-sm font-semibold text-slate-700">{v}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-400 uppercase font-bold mb-2">Message</p>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{viewItem.message || "No message provided"}</p>
            </div>
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="BPO appointment" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
