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
  BarChart3
} from "lucide-react";
import { LuClock4 } from "react-icons/lu";

import BasicInfoSection from "./BasicInfoSection";
import HeroSectionBuilder from "./HeroSectionBuilder";
import JobDescriptionSection from "./JobDescriptionSection";
import RolesResponsibilitiesSection from "./RolesResponsibilitiesSection";
import RequirementsSection from "./RequirementsSection";
import ApplicationFormBuilderSection from "./ApplicationFormBuilderSection";
import ResumeSettingsSection from "./ResumeSettingsSection";

export default function CreateJobPosting() {
  const [expandedSections, setExpandedSections] = useState({
    basicInfo: true,
    heroSection: true,
    jobDescription: true,
    rolesAndResponsibilities: true,
    requirements: true,
    applicationForm: true,
    resumeSettings: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* Top Header */}
      <header className="bg-white border-b border-indigo-100 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-[18px] font-bold text-[#1E1B4B] leading-tight">Create Job Posting</h1>
            <span className="text-[12px] text-slate-500">SecurXpert Technologies</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="text-[13px] font-medium text-[#64748B] hover:text-[#2c286b] transition-colors px-3">
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
          <button className="px-5 py-2 text-[13px] font-medium bg-[#2B0A5A] text-white rounded-lg hover:bg-[#2c286b] transition-colors shadow-md">
            Publish Job
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex max-w-[1400px] mx-auto w-full p-6 lg:p-8 gap-8 items-start">
        
        {/* Left Column - 75% Form Area */}
        <main className="w-full lg:w-[72%] flex flex-col gap-6">
          
          <BasicInfoSection 
            isExpanded={expandedSections.basicInfo} 
            onToggle={() => toggleSection('basicInfo')} 
          />
          
          <HeroSectionBuilder 
            isExpanded={expandedSections.heroSection} 
            onToggle={() => toggleSection('heroSection')} 
          />

          <JobDescriptionSection 
            isExpanded={expandedSections.jobDescription} 
            onToggle={() => toggleSection('jobDescription')} 
          />

          <RolesResponsibilitiesSection 
            isExpanded={expandedSections.rolesAndResponsibilities} 
            onToggle={() => toggleSection('rolesAndResponsibilities')} 
          />

          <RequirementsSection 
            isExpanded={expandedSections.requirements} 
            onToggle={() => toggleSection('requirements')} 
          />

          <ApplicationFormBuilderSection 
            isExpanded={expandedSections.applicationForm} 
            onToggle={() => toggleSection('applicationForm')} 
          />

          <ResumeSettingsSection 
            isExpanded={expandedSections.resumeSettings} 
            onToggle={() => toggleSection('resumeSettings')} 
          />

        </main>

        {/* Right Sidebar - 28% width */}
        <aside className="w-full lg:w-[28%] flex flex-col gap-6 sticky top-[88px]">
          
          {/* Job Completion Widget */}
          <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-slate-800">Job Completion</h3>
              <span className="text-[22px] font-black text-[#2B0A5A]">38%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-indigo-50 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '38%', background: 'linear-gradient(90deg, #2B0A5A 0%, #2F1265 7.14%, #331A70 14.29%, #37217B 21.43%, #3A2886 28.57%, #3E3091 35.71%, #41379D 42.86%, #453EA9 50%, #4845B5 57.14%, #4B4DC1 64.29%, #4E54CD 71.43%, #515CD9 78.57%, #5464E6 85.71%, #576BF2 92.86%, #5A73FF 100%)' }}></div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-slate-300" />
                <span className="text-[13px] text-slate-400 font-medium">Basic Information</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-[13px] text-slate-800 font-bold">Hero Section</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-slate-300" />
                <span className="text-[13px] text-slate-400 font-medium">Job Description</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-slate-300" />
                <span className="text-[13px] text-slate-400 font-medium">Responsibilities</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-slate-300" />
                <span className="text-[13px] text-slate-400 font-medium">Requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-[13px] text-slate-800 font-bold">Application Form</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-[13px] text-slate-800 font-bold">Resume Settings</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-slate-300" />
                <span className="text-[13px] text-slate-400 font-medium">SEO Optimization</span>
              </div>
            </div>

            <div className="bg-[#EFF6FF] border-[#BEDBFF] border rounded-xl p-3 text-center mt-2">
              <span className="text-[12px] font-bold text-[#193CB8]">3 of 8 sections completed</span>
            </div>
          </div>

          {/* Draft Alert */}
          <div className="bg-[#FEFCE8] border border-[#FFF085] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#D49800]">
              <AlertCircle className="w-5 h-5" />
              <span className="text-[15px] font-bold">Draft</span>
            </div>
            <p className="text-[13px] text-[#D49800]/80 font-medium ml-7">Job is not yet published</p>
          </div>

          {/* Publishing Details */}
          <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm p-6 flex flex-col gap-5">
            <h3 className="text-[15px] font-bold text-slate-800">Publishing Details</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(90deg, #2B0A5A 0%, #301468 9.09%, #351E76 18.18%, #3A2784 27.27%, #3E3092 36.36%, #4339A1 45.45%, #4743B0 54.55%, #4B4CC0 63.64%, #4F56CF 72.73%, #535FDF 81.82%, #5669EF 90.91%, #5A73FF 100%)' }}>
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
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Created</span>
                  <span className="text-[13px] font-bold text-slate-800">June 9, 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center text-slate-400">
                  <LuClock4 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Last Updated</span>
                  <span className="text-[13px] font-bold text-slate-800">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm p-6 flex flex-col gap-5">
            <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              Statistics
            </h3>
            
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4 flex flex-col gap-1" style={{ background: 'linear-gradient(90deg, #EFF6FF 0%, #FAF5FF 100%)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Eye className="w-4 h-4" />
                    <span className="text-[13px] font-bold">Total Views</span>
                  </div>
                  <span className="text-[18px] font-black text-[#1E1B4B]">0</span>
                </div>
                <span className="text-[12px] text-slate-500 ml-6">No views yet</span>
              </div>

              <div className="rounded-xl p-4 flex flex-col gap-1" style={{ background: 'linear-gradient(90deg, #F0FDF4 0%, #EFF6FF 100%)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Users className="w-4 h-4" />
                    <span className="text-[13px] font-bold">Applications</span>
                  </div>
                  <span className="text-[18px] font-black text-[#1E1B4B]">0</span>
                </div>
                <span className="text-[12px] text-slate-500 ml-6">Awaiting applicants</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pb-8">
            <button className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold text-[14px] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Save className="w-4 h-4" />
              Save Draft
            </button>
            <button className="w-full py-3.5 bg-[#5A73FF] text-white rounded-xl font-semibold text-[14px] hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Eye className="w-4 h-4" />
              Preview Job
            </button>
            <button className="w-full py-3.5 bg-[#2B0A5A] text-white rounded-xl font-semibold text-[14px] hover:bg-[#2c286b] transition-colors flex items-center justify-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              Publish Job
            </button>
          </div>

        </aside>
      </div>
    </div>
  );
}
