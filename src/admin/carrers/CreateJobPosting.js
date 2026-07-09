"use client";

import React, { useState } from "react"; 
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

export default function CreateJobPosting({ job, onSave, onCancel }) {
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

  const handlePublish = (status) => {
    if (!jobData.basicInfo || !jobData.basicInfo.jobTitle) {
      alert("Please fill and save the 'Job Basic Information' section first.");
      return;
    }
    const finalJob = {
      ...jobData,
      id: jobData.id || "job_" + Date.now(),
      status: status || jobData.basicInfo.jobStatus || "Draft",
      updatedAt: new Date().toISOString()
    };
    onSave(finalJob);
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
              {job ? "Edit Job Posting" : "Create Job Posting"}
            </h1>
            <span className="text-[12px] text-slate-500">SecurXpert Technologies</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex max-w-[1400px] mx-auto w-full p-6 lg:p-8 gap-8 items-start">

        {/* Left Column - Form Area */}
        <main className="w-full lg:w-[72%] flex flex-col gap-6">
          <BasicInfoSection
            isExpanded={expandedSections.basicInfo}
            onToggle={() => toggleSection('basicInfo')}
            initialData={jobData.basicInfo}
            onSaveSection={handleSaveSection}
          />

          <HeroSectionBuilder
            isExpanded={expandedSections.heroSection}
            onToggle={() => toggleSection('heroSection')}
            initialData={jobData.hero}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
          />

          <JobDescriptionSection
            isExpanded={expandedSections.jobDescription}
            onToggle={() => toggleSection('jobDescription')}
            initialData={jobData.jobDescription}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
          />

          <RolesResponsibilitiesSection
            isExpanded={expandedSections.rolesAndResponsibilities}
            onToggle={() => toggleSection('rolesAndResponsibilities')}
            initialData={jobData.rolesAndResponsibilities}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
          />

          <RequirementsSection
            isExpanded={expandedSections.requirements}
            onToggle={() => toggleSection('requirements')}
            initialData={jobData.requirements}
            jobId={jobData.id}
            onSaveSection={handleSaveSection}
          />
        </main>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-[28%] flex flex-col gap-6 sticky top-[88px]">

          {/* Job Completion Widget */}
          <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-slate-800">Job Completion</h3>
              <span className="text-[22px] font-black text-[#2B0A5A]">{completionPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-indigo-50 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${completionPercentage}%`, background: 'linear-gradient(90deg, #2B0A5A 0%, #5A73FF 100%)' }}></div>
            </div>
            <div className="flex flex-col gap-3.5 mt-2">
              {[
                { key: 'basicInfo', label: 'Basic Information' },
                { key: 'hero', label: 'Hero Section' },
                { key: 'jobDescription', label: 'Job Description' },
                { key: 'rolesAndResponsibilities', label: 'Responsibilities' },
                { key: 'requirements', label: 'Requirements' },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  {isCompleted[key] ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Circle className="w-4 h-4 text-slate-300" />}
                  <span className={`text-[13px] font-medium ${isCompleted[key] ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#EFF6FF] border-[#BEDBFF] border rounded-xl p-3 text-center mt-2">
              <span className="text-[12px] font-bold text-[#193CB8]">{completedCount} of {totalSections} sections completed</span>
            </div>
          </div>

          {/* Status Alert */}
          <div className={`border rounded-2xl p-5 flex flex-col gap-2 ${jobData.status === "Published" ? "bg-emerald-50 border-emerald-200" : "bg-[#FEFCE8] border-[#FFF085]"}`}>
            <div className={`flex items-center gap-2 ${jobData.status === "Published" ? "text-emerald-700" : "text-[#D49800]"}`}>
              <AlertCircle className="w-5 h-5" />
              <span className="text-[15px] font-bold">{jobData.status === "Published" ? "Published" : "Draft"}</span>
            </div>
            <p className={`text-[13px] font-medium ml-7 ${jobData.status === "Published" ? "text-emerald-700/80" : "text-[#D49800]/80"}`}>
              {jobData.status === "Published" ? "Job is active on website" : "Job is not yet published"}
            </p>
          </div>

          {/* Publishing Details */}
          <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm p-6 flex flex-col gap-5">
            <h3 className="text-[15px] font-bold text-slate-800">Publishing Details</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(90deg, #2B0A5A 0%, #5A73FF 100%)' }}>
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Created By</span>
                  <span className="text-[13px] font-bold text-slate-800">Admin User</span>
                  <span className="text-[12px] text-slate-500">HR Department</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 flex items-center justify-center text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Last Updated</span>
                  <span className="text-[13px] font-bold text-slate-800">
                    {jobData.updatedAt ? new Date(jobData.updatedAt).toLocaleDateString() : "Just now"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pb-8">
            <button
              onClick={() => handlePublish("Draft")}
              className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold text-[14px] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Save className="w-4 h-4" />
              Save Draft
            </button>
            <button
              onClick={() => handlePublish("Published")}
              className="w-full py-3.5 bg-[#2B0A5A] text-white rounded-xl font-semibold text-[14px] hover:bg-[#2c286b] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              Publish Job
            </button>
          </div>

        </aside>
      </div>
    </div>
  );
}
