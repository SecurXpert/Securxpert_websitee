"use client";
import React, { useState, useEffect } from "react";
import { Eye, Trash2 } from "lucide-react";
import { Modal, DeleteConfirm } from "./SharedUI";

export default function AppointmentDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const fetchAppointments = () => {
    try {
      const data = JSON.parse(localStorage.getItem("product_appointments") || "[]");
      setAppointments(data);
    } catch (err) {
      console.error("Failed to parse appointments", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = () => {
    const updated = appointments.filter(a => a.id !== deleteItem.id);
    setAppointments(updated);
    localStorage.setItem("product_appointments", JSON.stringify(updated));
    setDeleteItem(null);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Appointments Management</h1>
          <p className="text-sm text-slate-400">{appointments.length} records found</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Product", "Customer", "Date & Time", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointments.map(a => (
                <tr key={a.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(a)}>{a.product}</span>
                    <p className="text-xs text-slate-400 mt-0.5">Booked: {new Date(a.bookedAt).toLocaleDateString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-700">{a.name}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{a.email}</p>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs font-medium">{a.date} <br/> {a.time}</td>
                  <td className="py-4 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700">{a.status}</span></td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setViewItem(a)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => setDeleteItem(a)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {viewItem && (
        <Modal title="Appointment Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{viewItem.product} Demo</h2>
            <div className="grid grid-cols-2 gap-4">
              {[["Customer Name", viewItem.name], ["Email", viewItem.email], ["Date", viewItem.date], ["Time", viewItem.time], ["Status", viewItem.status]].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p><p className="text-sm font-semibold text-slate-700">{v}</p></div>
              ))}
            </div>
            {viewItem.companyDetails && (
              <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Company Details</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.companyDetails}</p></div>
            )}
            {viewItem.contactDetails && (
              <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Contact & Size Details</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.contactDetails}</p></div>
            )}
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="appointments" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
