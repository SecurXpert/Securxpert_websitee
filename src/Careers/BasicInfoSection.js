import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FormInput, FormSelect } from "./FormComponents";

export default function BasicInfoSection({ isExpanded, onToggle }) {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "",
    department: "",
    jobLocation: "",
    yearsOfExperience: "",
    numberOfOpenings: "",
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (isSaved) setIsSaved(false);
  };

  const isFormValid = 
    formData.jobTitle.trim() !== '' && 
    formData.jobCategory.trim() !== '' && 
    formData.department.trim() !== '' && 
    formData.jobLocation.trim() !== '' && 
    formData.yearsOfExperience.trim() !== '' && 
    formData.numberOfOpenings.trim() !== '';

  const handleSave = () => {
    if (isFormValid) {
      setIsSaved(true);
      // Optional: onToggle() if you want it to collapse after saving
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
            <h2 className="text-[18px] font-semibold text-slate-800">Job Basic Information</h2>
            {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
          </div>
          <span className="text-[14px] font-semibold text-[#64748B]">Essential details about the job position</span>
        </div>
        <button className="text-[#64748B] p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <div className="md:col-span-2">
              <FormInput 
                label="Job Title" 
                placeholder="e.g. Senior QA Automation Engineer" 
                required 
                value={formData.jobTitle}
                onChange={(e) => handleChange('jobTitle', e.target.value)}
              />
            </div>
            <FormInput 
              label="Job Category" 
              placeholder="e.g. Quality Assurance" 
              required 
              value={formData.jobCategory}
              onChange={(e) => handleChange('jobCategory', e.target.value)}
            />
            <FormInput 
              label="Department" 
              placeholder="e.g. Engineering" 
              required 
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
            />
            
            <FormSelect label="Employment Type" placeholder="Select" required options={["Full-time", "Part-time", "Contract", "Internship"]} />
            <FormInput 
              label="Job Location" 
              placeholder="e.g. Bangalore, India" 
              required 
              value={formData.jobLocation}
              onChange={(e) => handleChange('jobLocation', e.target.value)}
            />
            
            <FormSelect label="Work Mode" placeholder="Select" required options={["On-site", "Hybrid", "Remote"]} />
            <FormSelect label="Experience Level" placeholder="Select" required options={["Entry Level (0-2 Years)", "Mid Level (2-5 Years)", "Senior Level (5+ Years)"]} />
            
            <FormInput 
              label="Years of Experience" 
              placeholder="e.g. 5" 
              type="number" 
              required 
              value={formData.yearsOfExperience}
              onChange={(e) => handleChange('yearsOfExperience', e.target.value)}
            />
            <FormInput 
              label="Number of Openings" 
              placeholder="1" 
              type="number" 
              required 
              value={formData.numberOfOpenings}
              onChange={(e) => handleChange('numberOfOpenings', e.target.value)}
            />
            
            <FormSelect label="Job Status" placeholder="Draft" required options={["Draft", "Published", "Closed"]} />
            <FormInput label="Job Expiry Date" placeholder="Select date" type="date" />
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
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
