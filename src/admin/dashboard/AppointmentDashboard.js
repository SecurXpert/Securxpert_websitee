"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2 } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";

export default function AppointmentDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [loading, setLoading] = useState(true);

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
        // Handle if response is an array or an object containing a data array
        const list = Array.isArray(data) ? data : (data?.data || []);
        // Reverse array to show newest first
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
    // Note: To actually delete from backend, you would make a DELETE request here.
    // For now, we update local state.
    const updated = appointments.filter(a => a.id !== deleteItem.id);
    setAppointments(updated);
    setDeleteItem(null);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Product Appointments</h1>
          <p className="text-sm text-slate-400">{loading ? "Loading..." : `${appointments.length} records found`}</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Product", "Full Name", "Email", "Company Details", "Contact Details", "Date & Time", "Actions"].map(h => (
                  <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointments.map((a, i) => (
                <tr key={a.id || i} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(a)}>{a.product_name || "Unknown"}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-700">{a.full_name}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {a.email_address}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    <span className="truncate max-w-[120px] font-medium block" title={a.enter_company_details}>{a.enter_company_details || "N/A"}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    <span className="truncate max-w-[120px] font-medium block" title={a.enter_contact_details}>{a.enter_contact_details || "N/A"}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs font-medium">{a.booking_date} <br/> {a.booking_time}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setViewItem(a)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => setDeleteItem(a)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {appointments.length === 0 && !loading && (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-slate-400">No appointments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {viewItem && (
        <Modal title="Appointment Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{viewItem.product_name} Demo</h2>
            <div className="grid grid-cols-2 gap-4">
              {[["Full Name", viewItem.full_name], ["Email", viewItem.email_address], ["Date", viewItem.booking_date], ["Time", viewItem.booking_time]].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p><p className="text-sm font-semibold text-slate-700">{v}</p></div>
              ))}
            </div>
            {viewItem.enter_company_details && (
              <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Company Details</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.enter_company_details}</p></div>
            )}
            {viewItem.enter_contact_details && (
              <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Contact Details</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.enter_contact_details}</p></div>
            )}
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="appointments" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
