import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FormInput, ToggleSwitch } from "./FormComponents";
import axios from "axios";
import { API_BASE_URL } from "../config";

const getInitialToggles = (data) => {
  const defaultToggles = {
    showBackButton: true,
    jobCategory: true,
    employmentType: true,
    experience: true,
    location: true,
    openings: true
  };
  if (!data) return defaultToggles;
  if (data.toggles) return data.toggles;
  if (Array.isArray(data.card_order)) {
    const cardOrder = data.card_order;
    return {
      showBackButton: data.show_back_button !== undefined ? data.show_back_button : true,
      jobCategory: cardOrder.includes("jobCategory") || cardOrder.includes("job_category"),
      employmentType: cardOrder.includes("employmentType") || cardOrder.includes("employment_type"),
      experience: cardOrder.includes("experience") || cardOrder.includes("experience_level") || cardOrder.includes("years_of_experience"),
      location: cardOrder.includes("location") || cardOrder.includes("job_location"),
      openings: cardOrder.includes("openings") || cardOrder.includes("number_of_openings")
    };
  }
  return defaultToggles;
};

export default function HeroSectionBuilder({ isExpanded, onToggle, initialData, jobId, onSaveSection, isReadOnly = false }) {
  const [toggles, setToggles] = useState(getInitialToggles(initialData));
  const [isSaved, setIsSaved] = useState(!!initialData);
  const [heroTitle, setHeroTitle] = useState(initialData?.heroTitle || initialData?.hero_title || "");
  const [isLoading, setIsLoading] = useState(false);
  const [hasHeroInDb, setHasHeroInDb] = useState(!!(initialData?.heroTitle || initialData?.hero_title || initialData?.card_order));

  React.useEffect(() => {
    if (initialData) {
      setToggles(getInitialToggles(initialData));
      setHeroTitle(initialData.heroTitle || initialData.hero_title || "");
      setIsSaved(true);
      setHasHeroInDb(true);
    }
  }, [initialData]);

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    setIsSaved(false);
  };

  const handleSave = async () => {
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

      const cardOrder = [];
      if (toggles.jobCategory) cardOrder.push("jobCategory");
      if (toggles.employmentType) cardOrder.push("employmentType");
      if (toggles.experience) cardOrder.push("experience");
      if (toggles.location) cardOrder.push("location");
      if (toggles.openings) cardOrder.push("openings");

      const payload = {
        hero_title: heroTitle.trim() || null,
        card_order: cardOrder
      };

      let res;
      if (hasHeroInDb) {
        res = await axios.patch(`${API_BASE_URL}/jobs/${jobId}/hero-section`, payload, {
          headers: { "accept": "application/json", "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        });
      } else {
        res = await axios.post(`${API_BASE_URL}/jobs/${jobId}/hero-section`, payload, {
          headers: { "accept": "application/json", "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        });
      }

      setHasHeroInDb(true);
      setIsSaved(true);

      if (onSaveSection) {
        onSaveSection('hero', {
          heroTitle: res.data?.hero_title || heroTitle,
          toggles,
          card_order: res.data?.card_order || cardOrder
        });
      }
    } catch (err) {
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save job hero section to the server.";
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
            onChange={(e) => { setHeroTitle(e.target.value); setIsSaved(false); }}
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
              <p className="text-[13px] text-slate-500">Toggle the information cards displayed in the job header</p>
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
            {!isReadOnly && <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 bg-[#5A73FF] text-white hover:bg-blue-600 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Saving..." : isSaved ? <><CheckCircle2 className="w-4 h-4" />Saved</> : "Save Section"}
            </button>}
          </div>
        </div>
      )}
    </div>
  );
}

