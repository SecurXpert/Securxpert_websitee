import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FormInput, FormSelect } from "./FormComponents";
import axios from "axios";
import { API_BASE_URL } from "../config";

const mapEmploymentType = (type) => {
  if (!type) return "Full-Time";
  const t = type.toLowerCase();
  if (t === "full-time" || t === "fulltime") return "Full-Time";
  if (t === "part-time" || t === "parttime") return "Part-Time";
  if (t === "contract") return "Contract";
  if (t === "internship") return "Internship";
  return "Full-Time";
};

const mapWorkMode = (mode) => {
  if (!mode) return "Onsite";
  const m = mode.toLowerCase();
  if (m === "on-site" || m === "onsite") return "Onsite";
  if (m === "hybrid") return "Hybrid";
  if (m === "remote") return "Remote";
  return "Onsite";
};

const mapExperienceLevel = (level) => {
  if (!level) return "Entry";
  const l = level.toLowerCase();
  if (l.includes("entry")) return "Entry";
  if (l.includes("mid")) return "Mid";
  if (l.includes("senior")) return "Senior";
  return "Entry";
};

const mapJobStatus = (status) => {
  if (!status) return "Draft";
  const s = status.toLowerCase();
  if (s === "published" || s === "active") return "Active";
  if (s === "draft") return "Draft";
  if (s === "closed") return "Closed";
  if (s === "paused") return "Paused";
  return "Draft";
};

export default function BasicInfoSection({ isExpanded, onToggle, initialData, onSaveSection }) {
  const [formData, setFormData] = useState(initialData || {
    id: "",
    jobTitle: "",
    jobCategory: "",
    department: "",
    employmentType: "Full-time",
    jobLocation: "",
    workMode: "Hybrid",
    experienceLevel: "Mid Level (2-5 Years)",
    yearsOfExperience: "",
    numberOfOpenings: "1",
    jobStatus: "Draft",
    jobExpiryDate: ""
  });

  const [isSaved, setIsSaved] = useState(!!initialData);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setIsSaved(true);
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (isSaved) setIsSaved(false);
  };

  const isFormValid =
    formData.jobTitle?.trim() !== '' &&
    formData.jobCategory?.trim() !== '' &&
    formData.department?.trim() !== '' &&
    formData.jobLocation?.trim() !== '' &&
    formData.yearsOfExperience?.toString().trim() !== '' &&
    formData.numberOfOpenings?.toString().trim() !== '';

  const handleSave = async () => {
    if (!isFormValid) return;
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

      const payload = {
        job_title: formData.jobTitle,
        job_category: formData.jobCategory,
        department: formData.department,
        employment_type: mapEmploymentType(formData.employmentType),
        job_location: formData.jobLocation,
        work_mode: mapWorkMode(formData.workMode),
        experience_level: mapExperienceLevel(formData.experienceLevel),
        years_of_experience: parseInt(formData.yearsOfExperience || "0", 10),
        number_of_openings: parseInt(formData.numberOfOpenings || "1", 10),
        job_status: mapJobStatus(formData.jobStatus),
        job_expiry_date: formData.jobExpiryDate ? new Date(formData.jobExpiryDate).toISOString() : null
      };

      let res;
      if (formData.id) {
        res = await axios.patch(`${API_BASE_URL}/jobs/${formData.id}`, payload, {
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      } else {
        res = await axios.post(API_BASE_URL + "/jobs/", payload, {
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      }

      const savedId = res.data?.id;
      const updatedFormData = { ...formData, id: savedId || formData.id };

      setIsSaved(true);
      if (onSaveSection) {
        onSaveSection('basicInfo', updatedFormData);
      }
    } catch (err) {
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save job basic info to the server.";
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
            <FormInput label="Job Category" placeholder="e.g. Quality Assurance" required value={formData.jobCategory} onChange={(e) => handleChange('jobCategory', e.target.value)} />
            <FormInput label="Department" placeholder="e.g. Engineering" required value={formData.department} onChange={(e) => handleChange('department', e.target.value)} />
            <FormSelect label="Employment Type" placeholder="Select" required options={["Full-time", "Part-time", "Contract", "Internship"]} value={formData.employmentType} onChange={(e) => handleChange('employmentType', e.target.value)} />
            <FormInput label="Job Location" placeholder="e.g. Bangalore, India" required value={formData.jobLocation} onChange={(e) => handleChange('jobLocation', e.target.value)} />
            <FormSelect label="Work Mode" placeholder="Select" required options={["On-site", "Hybrid", "Remote"]} value={formData.workMode} onChange={(e) => handleChange('workMode', e.target.value)} />
            <FormSelect label="Experience Level" placeholder="Select" required options={["Entry Level (0-2 Years)", "Mid Level (2-5 Years)", "Senior Level (5+ Years)"]} value={formData.experienceLevel} onChange={(e) => handleChange('experienceLevel', e.target.value)} />
            <FormInput label="Years of Experience" placeholder="e.g. 5" type="number" required value={formData.yearsOfExperience} onChange={(e) => handleChange('yearsOfExperience', e.target.value)} />
            <FormInput label="Number of Openings" placeholder="1" type="number" required value={formData.numberOfOpenings} onChange={(e) => handleChange('numberOfOpenings', e.target.value)} />
            <FormSelect label="Job Status" placeholder="Draft" required options={["Draft", "Published", "Closed"]} value={formData.jobStatus} onChange={(e) => handleChange('jobStatus', e.target.value)} />
            <FormInput label="Job Expiry Date" placeholder="Select date" type="date" value={formData.jobExpiryDate} onChange={(e) => handleChange('jobExpiryDate', e.target.value)} />
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={handleSave}
              disabled={!isFormValid || isLoading}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 ${isFormValid && !isLoading
                ? "bg-[#5A73FF] text-white hover:bg-blue-600"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
            >
              {isLoading ? "Saving..." : isSaved ? <><CheckCircle2 className="w-4 h-4" />Saved</> : "Save Section"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
