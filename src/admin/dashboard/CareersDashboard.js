"use client";
import React, { useState, useEffect } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { Modal, DeleteConfirm, statusColor } from "./SharedUI";
import CreateJobPosting from "../carrers/CreateJobPosting";
import { API_BASE_URL } from "../config";

export default function CareersDashboard() {
  const [careers, setCareers] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [editForm, setEditForm] = useState({});

  const fetchCareers = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(API_BASE_URL + "/jobs/", {
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        const data = await res.json();
        const rawList = Array.isArray(data) ? data : (data?.data || []);
        rawList.sort((a, b) => b.id - a.id);
        const formatted = rawList
          .filter(j => j.job_status?.toLowerCase() === "active" || j.job_status?.toLowerCase() === "published")
          .map(j => ({
            id: j.id,
            title: j.job_title || "Untitled",
            department: j.department || "N/A",
            type: j.employment_type || "Full-Time",
            location: j.job_location || "N/A",
            status: j.job_status || "Draft",
            openings: j.number_of_openings || 1,
            experience: j.experience_level || "",
            mode: j.work_mode || "",
            description: j.job_description || "",
          }));
        setCareers(formatted);
      }
    } catch (err) {
      console.error("Failed to fetch careers", err);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleDelete = () => {
    setCareers(p => p.filter(c => c.id !== deleteItem.id));
    setDeleteItem(null);
  };

  const handleEditSave = () => {
    setCareers(p => p.map(c => c.id === editItem.id ? { ...c, ...editForm } : c));
    setEditItem(null);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setEditForm(item);
  };

  if (showCareerForm) {
    return (
      <div className="flex-1 overflow-y-auto">
        <CreateJobPosting
          job={editItem ? {
            id: editItem.id,
            basicInfo: editItem,
            hero: null,
            jobDescription: editItem.description || "",
            rolesAndResponsibilities: null,
            requirements: null
          } : null}
          onSave={(savedJob) => {
            fetchCareers();
            setShowCareerForm(false);
            setEditItem(null);
          }}
          onCancel={() => { setShowCareerForm(false); setEditItem(null); }}
        />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-xl font-bold text-slate-800 capitalize">Careers Management</h1>
          <p className="text-sm text-slate-400">{careers.length} records found</p>
        </div>
        <button
          onClick={() => { setEditItem(null); setShowCareerForm(true); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow transition-all">
          <Plus className="w-4 h-4" />Add Job
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Title", "Department", "Type", "Location", "Status", "Openings", "Actions"].map(h => (
                  <th key={h} className="text-left py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {careers.map(c => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer" onClick={() => setViewItem(c)}>{c.title}</span>
                    <p className="text-xs text-slate-400 mt-0.5">{c.experience}</p>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs font-medium">{c.department}</td>
                  <td className="py-4 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">{c.type}</span></td>
                  <td className="py-4 px-6 text-slate-500 text-xs">{c.location} · {c.mode}</td>
                  <td className="py-4 px-6"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColor(c.status)}`}>{c.status}</span></td>
                  <td className="py-4 px-6 text-slate-600 font-bold text-sm">{c.openings}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setViewItem(c)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => openEdit(c)} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Edit"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => setDeleteItem(c)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {viewItem && (
        <Modal title="Details" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{viewItem.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {[["Department", viewItem.department], ["Type", viewItem.type], ["Location", viewItem.location], ["Mode", viewItem.mode], ["Status", viewItem.status], ["Openings", viewItem.openings], ["Experience", viewItem.experience], ["Category", viewItem.category]].map(([k, v]) => (
                <div key={k} className="bg-slate-50 p-3 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-1">{k}</p><p className="text-sm font-semibold text-slate-700">{v}</p></div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 rounded-xl"><p className="text-xs text-slate-400 uppercase font-bold mb-2">Description</p><p className="text-sm text-slate-600 leading-relaxed">{viewItem.description}</p></div>
          </div>
        </Modal>
      )}

      {editItem && !showCareerForm && (
        <Modal title="Edit Record" onClose={() => setEditItem(null)}>
          <div className="space-y-4">
            <>
              {[["title", "Title"], ["department", "Department"], ["type", "Employment Type"], ["location", "Location"], ["mode", "Work Mode"], ["status", "Status"], ["openings", "Openings"], ["experience", "Experience"]].map(([k, l]) => (
                <div key={k}>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{l}</label>
                  <input value={editForm[k] || ""} onChange={e => setEditForm(p => ({ ...p, [k]: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                <textarea value={editForm.description || ""} onChange={e => setEditForm(p => ({ ...p, description: e.target.value }))} rows={3}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all resize-none" />
              </div>
            </>
            <div className="flex gap-3 justify-end pt-2">
              <button onClick={() => setEditItem(null)} className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">Cancel</button>
              <button onClick={handleEditSave} className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">Save Changes</button>
            </div>
          </div>
        </Modal>
      )}

      {deleteItem && <DeleteConfirm item={deleteItem} type="careers" onConfirm={handleDelete} onClose={() => setDeleteItem(null)} />}
    </div>
  );
}
