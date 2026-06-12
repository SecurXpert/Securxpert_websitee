import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FormInput, ToggleSwitch } from "./FormComponents";

export default function HeroSectionBuilder({ isExpanded, onToggle }) {
  const [toggles, setToggles] = useState({
    showBackButton: true,
    jobCategory: true,
    employmentType: true,
    experience: true,
    location: true,
    openings: true
  });
  const [isSaved, setIsSaved] = useState(false);
  const [heroTitle, setHeroTitle] = useState("");

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    setIsSaved(false);
  };

  const handleSave = () => setIsSaved(true);

  return (
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden">
      <div 
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-[16px] font-semibold text-slate-800">Hero Section Builder</h2>
              {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
            <span className="text-[14px] font-semibold text-[#64748B]">Customize the top section of your job page</span>
          </div>
        </div>
        <button className="text-[#64748B] p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 space-y-6 bg-white">
          <FormInput 
            label="Hero Title" 
            placeholder="Custom hero section title (leave empty for job title)" 
            value={heroTitle}
            onChange={(e) => {
              setHeroTitle(e.target.value);
              setIsSaved(false);
            }}
          />
          
          <div className="flex items-center gap-3 py-2 border-b border-slate-100 pb-6">
            <div className={`w-11 h-6 rounded-full relative transition-colors duration-300 cursor-pointer ${toggles.showBackButton ? 'bg-[#5A73FF]' : 'bg-[#CBD5E1]'}`} onClick={() => handleToggle('showBackButton')}>
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${toggles.showBackButton ? 'left-6' : 'left-1'}`} />
            </div>
            <span className="text-[14px] font-medium text-[#64748B]">Show Back Button</span>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-sm"></div>
                </div>
                Job Summary Cards
              </h3>
              <p className="text-[13px] text-slate-500">Toggle and reorder the information cards displayed in the job header</p>
            </div>
            
            <div className="space-y-3">
              {[
                { key: 'jobCategory', label: 'Job Category', desc: 'Not set' },
                { key: 'employmentType', label: 'Employment Type', desc: 'Not set' },
                { key: 'experience', label: 'Experience', desc: 'Not set' },
                { key: 'location', label: 'Location', desc: 'Not set' },
                { key: 'openings', label: 'Openings', desc: '1' },
              ].map((item) => {
                const isActive = toggles[item.key];
                return (
                  <div 
                    key={item.key} 
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-colors border ${isActive ? 'border-[#5A73FF]' : 'border-[#E2E8F0]'}`}
                    onClick={() => handleToggle(item.key)}
                  >
                    <div className={`w-11 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${isActive ? 'bg-[#5A73FF]' : 'bg-[#CBD5E1]'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isActive ? 'left-6' : 'left-1'}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#1E1B4B]">{item.label}</span>
                      <span className="text-[13px] font-medium text-[#64748B]">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
            <button 
              onClick={handleSave}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 bg-[#5A73FF] text-white hover:bg-blue-600`}
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
