import React, { useState } from "react";
import { ChevronDown, ChevronUp, Eye, Bold, Italic, Link2, List, ListOrdered, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function JobDescriptionSection({ isExpanded, onToggle, initialData, jobId, onSaveSection, isReadOnly = false }) {
  const [description, setDescription] = useState("");
  const [isSaved, setIsSaved] = useState(!!initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [hasDescInDb, setHasDescInDb] = useState(false);

  React.useEffect(() => {
    if (initialData !== undefined && initialData !== null) {
      const descText = typeof initialData === 'object' ? (initialData.job_description || initialData.jobDescription || "") : initialData;
      setDescription(descText);
      setIsSaved(true);
      setHasDescInDb(!!descText);
    }
  }, [initialData]);

  const isFormValid = description.trim() !== "";

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

      const payload = { job_description: description };

      let res;
      if (hasDescInDb) {
        res = await axios.patch(`${API_BASE_URL}jobs/${jobId}/description`, payload, {
          headers: { "accept": "application/json", "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        });
      } else {
        res = await axios.post(`${API_BASE_URL}jobs/${jobId}/description`, payload, {
          headers: { "accept": "application/json", "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        });
      }

      setHasDescInDb(true);
      setIsSaved(true);

      if (onSaveSection) {
        onSaveSection('jobDescription', description);
      }
    } catch (err) {
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save job description to the server.";
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
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden">
      <div
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-slate-800">Job Description</h2>
            {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
          </div>
          <span className="text-[14px] font-semibold text-[#475569]">Detailed description of the role</span>
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 bg-white">
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            {/* Toolbar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2 text-slate-500">
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors text-[13px] font-bold">H1</button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors text-[13px] font-bold">H2</button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Bold className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Italic className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><List className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><ListOrdered className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Link2 className="w-4 h-4" /></button>
              </div>
              <button className="flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-indigo-600 transition-colors pr-2">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
            {/* Text Area */}
            <textarea
              className="w-full min-h-[280px] p-4 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none resize-y font-mono sm:font-sans"
              placeholder="Write your content here... Use markdown for formatting."
              value={description}
              onChange={(e) => { setDescription(e.target.value); setIsSaved(false); }}
            ></textarea>
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
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

