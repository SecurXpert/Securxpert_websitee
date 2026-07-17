import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, CheckCircle2, Trash2 } from "lucide-react";
import { FormInput } from "./FormComponents";
import axios from "axios";
import { API_BASE_URL } from "../config";

const parseInitialResponsibilities = (data) => {
  let list = [];
  if (Array.isArray(data)) {
    list = data;
  } else if (data && data.responsibilities) {
    list = data.responsibilities;
  }
  
  if (!list || list.length === 0) {
    return [{ id: Date.now(), title: "", description: "", dbId: null }];
  }
  return list.map((item, i) => {
    if (typeof item === "string") {
      return { id: i, title: item, description: "", dbId: null };
    }
    return {
      id: item.id || i,
      title: item.title || "",
      description: item.description || "",
      dbId: item.id || null
    };
  });
};

export default function RolesResponsibilitiesSection({ isExpanded, onToggle, initialData, jobId, onSaveSection, isReadOnly = false }) {
  const [responsibilities, setResponsibilities] = useState(parseInitialResponsibilities(initialData));
  const [isSaved, setIsSaved] = useState(!!initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [deletedRespIds, setDeletedRespIds] = useState([]);

  React.useEffect(() => {
    if (initialData) {
      setResponsibilities(parseInitialResponsibilities(initialData));
      setIsSaved(true);
    }
  }, [initialData]);

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, { id: Date.now(), title: "", description: "", dbId: null }]);
    setIsSaved(false);
  };

  const removeResponsibility = (id, dbId) => {
    if (dbId) {
      setDeletedRespIds(prev => [...prev, dbId]);
    }
    setResponsibilities(responsibilities.filter(r => r.id !== id));
    setIsSaved(false);
  };

  const isFormValid = responsibilities.length > 0 && responsibilities.every(r => r.title.trim() !== "");

  const handleSave = async () => {
    if (!isFormValid) return;
    if (!jobId) {
      alert("Please save the 'Job Basic Information' section first to generate a Job ID.");
      return;
    }
    setIsLoading(true);
    try {
      const token =
        typeof window !== "undefined"
          ? (localStorage.getItem("super_admin_token") ||
            localStorage.getItem("superadmin_token") ||
            localStorage.getItem("access_token") ||
            localStorage.getItem("token") ||
            "")
          : "";

      const headers = { 
        "accept": "application/json", 
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` 
      };

      // 1. Delete removed responsibilities
      if (deletedRespIds.length > 0) {
        console.log("Deleting removed responsibilities:", deletedRespIds);
        await Promise.all(
          deletedRespIds.map(dbId =>
            axios.delete(`${API_BASE_URL}/jobs/${jobId}/responsibilities/${dbId}`, { headers })
          )
        );
        setDeletedRespIds([]);
      }

      // 2. Save/Update current responsibilities
      const savedResps = [];
      await Promise.all(
        responsibilities.map(async (r) => {
          const payload = {
            title: r.title.trim(),
            description: r.description?.trim() || ""
          };

          if (r.dbId) {
            console.log(`Updating responsibility ${r.dbId}...`, payload);
            const res = await axios.patch(
              `${API_BASE_URL}/jobs/${jobId}/responsibilities/${r.dbId}`,
              payload,
              { headers }
            );
            savedResps.push({ ...r, dbId: res.data?.id || r.dbId });
          } else {
            console.log("Creating new responsibility...", payload);
            const res = await axios.post(
              `${API_BASE_URL}/jobs/${jobId}/responsibilities`,
              payload,
              { headers }
            );
            savedResps.push({ ...r, id: res.data?.id || r.id, dbId: res.data?.id });
          }
        })
      );

      // Sort to preserve stable visual order
      savedResps.sort((a, b) => {
        const idxA = responsibilities.findIndex(r => r.id === a.id);
        const idxB = responsibilities.findIndex(r => r.id === b.id);
        return idxA - idxB;
      });

      setResponsibilities(savedResps);
      setIsSaved(true);
      if (onSaveSection) onSaveSection('rolesAndResponsibilities', savedResps);
    } catch (err) {
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save roles & responsibilities to the server.";
      if (Array.isArray(details)) {
        errorMsg = details.map(d => `${d.loc.join('.')}: ${d.msg}`).join('\n');
      } else if (typeof details === "string") {
        errorMsg = details;
      } else if (err.message) {
        errorMsg = err.message;
      }
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-8">
      <div
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-slate-800">Roles & Responsibilities</h2>
            {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
          </div>
          <span className="text-[14px] font-semibold text-[#475569]">Key responsibilities for this position</span>
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 bg-white space-y-6">
          {responsibilities.map((resp, index) => (
            <div key={resp.id} className="bg-slate-50/50 border border-slate-200 rounded-xl p-5 space-y-4 relative">
              {responsibilities.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeResponsibility(resp.id, resp.dbId)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <FormInput
                label="Responsibility Title"
                placeholder="e.g. Automation Framework Development"
                value={resp.title}
                onChange={(e) => {
                  const newResps = [...responsibilities];
                  newResps[index].title = e.target.value;
                  setResponsibilities(newResps);
                  setIsSaved(false);
                }}
              />
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[14px] font-bold text-slate-700 font-sans">Description</label>
                <textarea
                  placeholder="Describe this responsibility..."
                  value={resp.description}
                  onChange={(e) => {
                    const newResps = [...responsibilities];
                    newResps[index].description = e.target.value;
                    setResponsibilities(newResps);
                    setIsSaved(false);
                  }}
                  className="w-full min-h-[120px] px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-y"
                />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={addResponsibility}
              className="px-5 py-2.5 bg-slate-100 text-slate-700 text-[14px] font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Add Responsibility
            </button>
            {!isReadOnly && <button
              onClick={handleSave}
              disabled={!isFormValid || isLoading}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 ${isFormValid && !isLoading
                ? "bg-[#5A73FF] text-white hover:bg-blue-600"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
            >
              {isLoading ? "Saving..." : isSaved ? <><CheckCircle2 className="w-4 h-4" />Saved</> : "Save Section"}
            </button>}
          </div>
        </div>
      )}
    </div>
  );
}
