import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, CheckCircle2 } from "lucide-react";
import { FormInput } from "./FormComponents";

export default function RolesResponsibilitiesSection({ isExpanded, onToggle }) {
  const [responsibilities, setResponsibilities] = useState([
    { id: 1, title: "", description: "" }
  ]);

  const [isSaved, setIsSaved] = useState(false);

  const addResponsibility = () => {
    setResponsibilities([...responsibilities, { id: Date.now(), title: "", description: "" }]);
    setIsSaved(false);
  };

  // Valid if we have at least one responsibility and ALL of them have title & description
  const isFormValid = responsibilities.length > 0 && responsibilities.every(r => r.title.trim() !== "" && r.description.trim() !== "");

  const handleSave = () => {
    if (isFormValid) setIsSaved(true);
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
            <div key={resp.id} className="bg-slate-50/50 border border-slate-200 rounded-xl p-5 space-y-4">
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
                <label className="text-[14px] font-bold text-slate-700 font-sans">
                  Description
                </label>
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

            <button 
              onClick={handleSave}
              disabled={!isFormValid}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 ${
                isFormValid 
                  ? "bg-[#5A73FF] text-white hover:bg-blue-600" 
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Saved
                </>
              ) : (
                "Save Section"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
