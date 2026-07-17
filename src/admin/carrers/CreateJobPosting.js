"use client";

import React, { useState } from "react"; 
import axios from "axios";
import { API_BASE_URL } from "../config";
import {
  ChevronLeft,
  CheckCircle2,
  Circle,
  Eye,
  Save,
  Calendar,
  Users,
  AlertCircle,
} from "lucide-react";  
import { LuClock4 } from "react-icons/lu";

import BasicInfoSection from "./BasicInfoSection";
import HeroSectionBuilder from "./HeroSectionBuilder"; 
import JobDescriptionSection from "./JobDescriptionSection";
import RolesResponsibilitiesSection from "./RolesResponsibilitiesSection";
import RequirementsSection from "./RequirementsSection";

export default function CreateJobPosting({ job, onSave, onCancel, isReadOnly = false }) {
  const [jobData, setJobData] = useState(job || {
    id: "",
    basicInfo: null,
    hero: null,
    jobDescription: "",
    rolesAndResponsibilities: null,
    requirements: null
  });

  const [expandedSections, setExpandedSections] = useState({
    basicInfo: true,
    heroSection: true,
    jobDescription: true,
    rolesAndResponsibilities: true,
    requirements: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const hasFetched = React.useRef(false);

  React.useEffect(() => {
    const fetchFullJob = async () => {
      if (!job?.id || hasFetched.current) return;
      hasFetched.current = true;
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
          "Authorization": `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        };

        // We fetch the basic info to get all fields accurately instead of relying on the dashboard's table mapping
        let basicInfo = job.basicInfo || null;
        try {
          const resBasic = await axios.get(`${API_BASE_URL}/jobs/${job.id}`, { headers });
          if (resBasic.data) {
            const d = resBasic.data;
            basicInfo = {
              id: d.id,
              jobTitle: d.job_title || d.jobTitle || "",
              jobCategory: d.job_category || d.jobCategory || "",
              department: d.department || "",
              employmentType: d.employment_type || d.employmentType || "Full-Time",
              jobLocation: d.job_location || d.jobLocation || "",
              workMode: d.work_mode || d.workMode || "Onsite",
              experienceLevel: d.experience_level || d.experienceLevel || "Entry",
              yearsOfExperience: d.years_of_experience || d.yearsOfExperience || "",
              numberOfOpenings: d.number_of_openings || d.numberOfOpenings || "1",
              jobStatus: d.job_status || d.jobStatus || "Draft",
              jobExpiryDate: d.job_expiry_date || d.jobExpiryDate || ""
            };
          }
        } catch (e) {
          // ignore basic info fetch error if relying on table data
        }

        const axiosConfig = { headers, validateStatus: (status) => status < 500 }; // Prevent 404 from throwing a loud console error

        let hero = null;
        const resHero = await axios.get(`${API_BASE_URL}/jobs/${job.id}/hero-section`, axiosConfig);
        if (resHero.status === 200 && resHero.data) hero = resHero.data;

        let jobDescription = "";
        const resDesc = await axios.get(`${API_BASE_URL}/jobs/${job.id}/description`, axiosConfig);
        if (resDesc.status === 200 && resDesc.data) jobDescription = resDesc.data.job_description || resDesc.data;

        let rolesAndResponsibilities = null;
        const resRoles = await axios.get(`${API_BASE_URL}/jobs/${job.id}/responsibilities`, axiosConfig);
        if (resRoles.status === 200 && resRoles.data) rolesAndResponsibilities = resRoles.data;

        let requirements = null;
        const resReq = await axios.get(`${API_BASE_URL}/jobs/${job.id}/requirements`, axiosConfig);
        if (resReq.status === 200 && resReq.data) requirements = resReq.data;

        let qualificationsData = "";
        const resQuals = await axios.get(`${API_BASE_URL}/jobs/${job.id}/qualifications`, axiosConfig);
        if (resQuals.status === 200 && resQuals.data) {
          qualificationsData = resQuals.data.preferred_qualifications || resQuals.data.qualifications || resQuals.data;
        }

        let mergedRequirements = null;
        if (requirements || qualificationsData) {
          mergedRequirements = {
            techSkills: Array.isArray(requirements) ? requirements.filter(r => r.skill_type === 'technical') : (requirements?.techSkills || []),
            softSkills: Array.isArray(requirements) ? requirements.filter(r => r.skill_type === 'soft') : (requirements?.softSkills || []),
            qualifications: qualificationsData
          };
        }

        setJobData(prev => ({
          ...prev,
          basicInfo,
          hero,
          jobDescription,
          rolesAndResponsibilities,
          requirements: mergedRequirements
        }));
      } catch (err) {
        console.error("Error fetching job details:", err);
      }
    };
    fetchFullJob();
  }, [job?.id]);

  const handleSaveSection = (section, data) => {
    setJobData(prev => {
      const nextData = { ...prev, [section]: data };
      if (section === 'basicInfo' && data?.id) {
        nextData.id = data.id;
      }
      return nextData;
    });
  };

  const isCompleted = {
    basicInfo: !!jobData.basicInfo,
    hero: !!jobData.hero,
    jobDescription: !!jobData.jobDescription && jobData.jobDescription.trim() !== "",
    rolesAndResponsibilities: Array.isArray(jobData.rolesAndResponsibilities) && jobData.rolesAndResponsibilities.length > 0,
    requirements: !!jobData.requirements
  };

  const completedCount = Object.values(isCompleted).filter(Boolean).length;
  const totalSections = 5;
  const completionPercentage = Math.round((completedCount / totalSections) * 100);

  const handlePublish = async (status) => {
    if (!jobData.id || !jobData.basicInfo) {
      alert("Please fill and save the 'Job Basic Information' section first to generate a Job ID.");
      return;
    }
    
    try {
      const token =
        typeof window !== "undefined"
          ? (localStorage.getItem("super_admin_token") ||
            localStorage.getItem("superadmin_token") ||
            localStorage.getItem("access_token") ||
            localStorage.getItem("token") ||
            "")
          : "";

      const mapEmploymentType = (type) => {
        if (!type) return "Full-Time";
        const t = type.toLowerCase();
        if (t === "part-time" || t === "parttime") return "Part-Time";
        if (t === "contract") return "Contract";
        if (t === "internship") return "Internship";
        return "Full-Time";
      };

      const mapWorkMode = (mode) => {
        if (!mode) return "Onsite";
        const m = mode.toLowerCase();
        if (m === "hybrid") return "Hybrid";
        if (m === "remote") return "Remote";
        return "Onsite";
      };

      const mapExperienceLevel = (level) => {
        if (!level) return "Entry";
        const l = level.toLowerCase();
        if (l.includes("mid")) return "Mid";
        if (l.includes("senior")) return "Senior";
        return "Entry";
      };

      const bInfo = jobData.basicInfo;
      const payload = {
        job_title: bInfo.jobTitle,
        job_category: bInfo.jobCategory,
        department: bInfo.department,
        employment_type: mapEmploymentType(bInfo.employmentType),
        job_location: bInfo.jobLocation,
        work_mode: mapWorkMode(bInfo.workMode),
        experience_level: mapExperienceLevel(bInfo.experienceLevel),
        years_of_experience: parseInt(bInfo.yearsOfExperience || "0", 10),
        number_of_openings: parseInt(bInfo.numberOfOpenings || "1", 10),
        job_status: status === "Published" ? "Active" : "Draft",
      };

      await axios.patch(`${API_BASE_URL}/jobs/${jobData.id}`, payload, {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        }
      });

      const finalJob = {
        ...jobData,
        status: status === "Published" ? "Active" : "Draft",
        updatedAt: new Date().toISOString()
      };
      
      if (status === "Published") {
        alert("Job successfully published!");
      } else {
        alert("Job saved as draft.");
      }
      
      onSave(finalJob);
    } catch (err) {
      alert("Failed to publish job status. Please ensure all required basic info fields are saved.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">

      {/* Top Header */}
      <header className="bg-white border-b border-indigo-100 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-[18px] font-bold text-[#1E1B4B] leading-tight">
              {isReadOnly ? "View Job Posting" : (job ? "Edit Job Posting" : "Create Job Posting")}
            </h1>
            <span className="text-[12px] text-slate-500">SecurXpert Technologies</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isReadOnly && (
            <>
              <button
                onClick={() => handlePublish("Draft")}
                className="text-[13px] font-medium text-[#64748B] hover:text-[#2c286b] transition-colors px-3"
              >
                Save Draft
              </button>
              <button className="px-4 py-2 text-[13px] font-medium bg-white border border-[#E2E8F0] text-[#2B0A5A] rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                <Eye className="w-4 h-4" />
                Show Preview
              </button>
              <button className="px-4 py-2 text-[13px] font-medium bg-white border border-[#E2E8F0] text-[#2B0A5A] rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                <Calendar className="w-4 h-4" />
                Schedule
              </button>
              <button
                onClick={() => handlePublish("Published")}
                className="px-5 py-2 text-[13px] font-medium bg-[#2B0A5A] text-white rounded-lg hover:bg-[#2c286b] transition-colors shadow-md"
              >
                Publish Job
              </button>
            </>
          )}
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex max-w-4xl mx-auto w-full p-6 lg:p-8 items-start justify-center">

        {isReadOnly && (
          <style>{`
            .read-only-job-form input,
            .read-only-job-form textarea,
            .read-only-job-form select {
              pointer-events: none !important;
              background-color: #f8fafc !important;
              color: #64748b !important;
            }
            .read-only-job-form .w-11.h-6.rounded-full {
              pointer-events: none !important;
            }
            .read-only-job-form .lucide-trash2,
            .read-only-job-form .lucide-plus {
              display: none !important;
            }
          `}</style>
        )}

        {/* Form Area */}
        <main className={`w-full flex flex-col gap-6 ${isReadOnly ? 'read-only-job-form' : ''}`}>
          <BasicInfoSection
            isExpanded={expandedSections.basicInfo}
            onToggle={() => toggleSection('basicInfo')}
            initialData={jobData.basicInfo}
            onSaveSection={handleSaveSection}
            isReadOnly={isReadOnly}
          />

          <HeroSectionBuilder
            isExpanded={expandedSections.heroSection}
            onToggle={() => toggleSection('heroSection')}
            initialData={jobData.hero}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
            isReadOnly={isReadOnly}
          />

          <JobDescriptionSection
            isExpanded={expandedSections.jobDescription}
            onToggle={() => toggleSection('jobDescription')}
            initialData={jobData.jobDescription}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
            isReadOnly={isReadOnly}
          />

          <RolesResponsibilitiesSection
            isExpanded={expandedSections.rolesAndResponsibilities}
            onToggle={() => toggleSection('rolesAndResponsibilities')}
            initialData={jobData.rolesAndResponsibilities}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
            isReadOnly={isReadOnly}
          />

          <RequirementsSection
            isExpanded={expandedSections.requirements}
            onToggle={() => toggleSection('requirements')}
            initialData={jobData.requirements}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
            isReadOnly={isReadOnly}
          />
        </main>
      </div>
    </div>
  );
}
