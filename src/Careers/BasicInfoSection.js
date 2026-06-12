import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormInput, FormSelect } from "./FormComponents";

export default function BasicInfoSection({ isExpanded, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden">
      <div 
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] font-semibold text-slate-800">Job Basic Information</h2>
          <span className="text-[14px] font-semibold text-[#64748B]">Essential details about the job position</span>
        </div>
        <button className="text-[#64748B] p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 bg-white">
          <div className="md:col-span-2">
            <FormInput label="Job Title" placeholder="e.g. Senior QA Automation Engineer" required />
          </div>
          <FormInput label="Job Category" placeholder="e.g. Quality Assurance" required />
          <FormInput label="Department" placeholder="e.g. Engineering" required />
          
          <FormSelect label="Employment Type" placeholder="Select" required options={["Full-time", "Part-time", "Contract", "Internship"]} />
          <FormInput label="Job Location" placeholder="e.g. Bangalore, India" required />
          
          <FormSelect label="Work Mode" placeholder="Select" required options={["On-site", "Hybrid", "Remote"]} />
          <FormSelect label="Experience Level" placeholder="Select" required options={["Entry Level", "Mid-Senior Level", "Director", "Executive"]} />
          
          <FormInput label="Years of Experience" placeholder="e.g. 5" type="number" required />
          <FormInput label="Number of Openings" placeholder="1" type="number" required />
          
          <FormSelect label="Job Status" placeholder="Draft" required options={["Draft", "Published", "Closed"]} />
          <FormInput label="Job Expiry Date" placeholder="Select date" type="date" />
        </div>
      )}
    </div>
  );
}
