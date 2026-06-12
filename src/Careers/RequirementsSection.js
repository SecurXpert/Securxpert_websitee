import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

export default function RequirementsSection({ isExpanded, onToggle }) {
  const [techSkill, setTechSkill] = useState("");
  const [softSkill, setSoftSkill] = useState("");
  const [isQualificationsExpanded, setIsQualificationsExpanded] = useState(true);

  return (
    <>
      {/* Box 1: Requirements */}
      <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-6">
        <div 
          className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
          onClick={onToggle}
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-[16px] font-semibold text-slate-800">Requirements</h2>
            <span className="text-[14px] font-semibold text-slate-500">Technical and soft skills required</span>
          </div>
          <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {isExpanded && (
          <div className="p-6 bg-white space-y-6">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Technical Skills
              </label>
              <div className="flex items-center gap-3 w-full max-w-lg">
                <input
                  type="text"
                  placeholder="e.g. Selenium, Java, TestNG"
                  value={techSkill}
                  onChange={(e) => setTechSkill(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <button className="px-5 py-2.5 bg-[#5A73FF] hover:bg-indigo-600 text-white text-[14px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Soft Skills
              </label>
              <div className="flex items-center gap-3 w-full max-w-lg">
                <input
                  type="text"
                  placeholder="e.g. Communication, Leadership"
                  value={softSkill}
                  onChange={(e) => setSoftSkill(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <button className="px-5 py-2.5 bg-[#5A73FF] hover:bg-indigo-600 text-white text-[14px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Box 2: Preferred Qualifications */}
      <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-8">
        <div 
          className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
          onClick={() => setIsQualificationsExpanded(!isQualificationsExpanded)}
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-[16px] font-bold text-slate-800">Preferred Qualifications</h2>
            <span className="text-[13px] text-slate-500">Optional certifications and requirements</span>
          </div>
          <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
            {isQualificationsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {isQualificationsExpanded && (
          <div className="p-6 bg-white space-y-4">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Qualifications
              </label>
              <textarea
                placeholder="List preferred certifications, education, or industry experience..."
                className="w-full min-h-[140px] p-4 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-y"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
