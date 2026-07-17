"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";

export default function AppointmentDashboard() {
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
      const res = await fetch("https://poise-crouch-plating.ngrok-free.dev/products/list-bookings", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "accept": "application/json"
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

  const handleDelete = () => {
    const updated = appointments.filter(a => a.id !== deleteItem.id);
    setAppointments(updated);
    setDeleteItem(null);
  };

  const filteredAppointments = appointments.filter(a => {
    const search = searchTerm.toLowerCase();
    return (
      (a.product_name && a.product_name.toLowerCase().includes(search)) ||
      (a.full_name && a.full_name.toLowerCase().includes(search)) ||
      (a.email_address && a.email_address.toLowerCase().includes(search))
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
          <h1 className="text-lg font-bold text-slate-800 capitalize">Product Appointments</h1>
          <p className="text-xs text-slate-400">{loading ? "Loading..." : `${filteredAppointments.length} records found`}</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Product, Name or Email..." 
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
                  {["S.No.", "Product", "Full Name", "Email", "Company Details", "Contact Details", "Date & Time", "Actions"].map(h => (
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
                      <td className="py-2 px-3 border border-slate-200">
                        <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer whitespace-nowrap" onClick={() => setViewItem(a)}>{a.product_name || "Unknown"}</span>
                      </td>
                      <td className="py-2 px-3 border border-slate-200">
                        <span className="font-semibold text-slate-700 whitespace-nowrap">{a.full_name}</span>
                      </td>
                      <td className="py-2 px-3 text-slate-500 font-medium border border-slate-200">
                        {a.email_address}
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] border border-slate-200">
                        <span className="truncate max-w-[110px] font-medium block" title={a.enter_company_details}>{a.enter_company_details || "N/A"}</span>
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] border border-slate-200">
                        <span className="truncate max-w-[110px] font-medium block" title={a.enter_contact_details}>{a.enter_contact_details || "N/A"}</span>
                      </td>
                      <td className="py-2 px-3 text-slate-500 text-[11px] font-medium whitespace-nowrap border border-slate-200">{a.booking_date} <br/> {a.booking_time}</td>
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
                    <td colSpan="8" className="py-8 text-center text-slate-500 border border-slate-200">
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
            <h2 className="text-lg font-bold text-slate-800">{viewItem.product_name} Demo</h2>
            <div className="grid grid-cols-2 gap-3">
              {[["Full Name", viewItem.full_name], ["Email", viewItem.email_address], ["Date", viewItem.booking_date], ["Time", viewItem.booking_time]].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-2.5 rounded-lg"><p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">{k}</p><p className="text-xs font-semibold text-slate-700">{v}</p></div>
              ))}
            </div>
            {viewItem.enter_company_details && (
              <div className="bg-slate-50 p-3 rounded-lg"><p className="text-[10px] text-slate-400 uppercase font-bold mb-1.5">Company Details</p><p className="text-xs text-slate-600 leading-relaxed">{viewItem.enter_company_details}</p></div>
            )}
            {viewItem.enter_contact_details && (
              <div className="bg-slate-50 p-3 rounded-lg"><p className="text-[10px] text-slate-400 uppercase font-bold mb-1.5">Contact Details</p><p className="text-xs text-slate-600 leading-relaxed">{viewItem.enter_contact_details}</p></div>
            )}
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="appointments" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
