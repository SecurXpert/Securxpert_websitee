"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Loader2, MapPin, Briefcase, Clock, Building, Users } from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function ViewCareer({ jobId, onBack }) {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const headers = {
          "ngrok-skip-browser-warning": "true",
          ...(token && { "Authorization": `Bearer ${token}` })
        };

        const res = await axios.get(`${API_BASE_URL}/jobs/${jobId}/complete`, { headers });
        const jobData = res.data?.data || res.data;

        if (!jobData) {
          setLoading(false);
          return;
        }

        let roles = jobData.roles_and_responsibilities || jobData.roles || jobData.responsibilities || [];
        if (roles.responsibilities) roles = roles.responsibilities;

        let description = jobData.job_description || jobData.description || "";

        setJobDetails({
          basic: jobData.basic_info || jobData,
          hero: jobData.hero_section || jobData.hero || jobData,
          description: description,
          roles: Array.isArray(roles) ? roles : [],
          requirements: jobData.requirements || null
        });
      } catch (err) {
        console.error("Failed to fetch job details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobData();
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50/50">
        <div className="flex items-center gap-2 text-slate-500">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="font-medium">Loading Job Details...</span>
        </div>
      </div>
    );
  }

  if (!jobDetails || !jobDetails.basic) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50">
        <p className="text-slate-500 font-medium mb-4">Job not found or failed to load.</p>
        <button onClick={onBack} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Go Back</button>
      </div>
    );
  }

  const { basic, hero, description, roles, requirements } = jobDetails;

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] h-full overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm shrink-0 sticky top-0 z-20 gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 text-slate-500 hover:text-slate-700 rounded-full transition-colors bg-slate-50 border border-slate-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
              {hero?.hero_title || hero?.heroTitle || basic.job_title}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${basic.job_status === 'Active' || basic.job_status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                {basic.job_status || "Draft"}
              </span>
              <span className="text-sm text-slate-500 font-medium">{basic.job_category || "IT"} Department</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-full"><MapPin className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{basic.job_location || "N/A"}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full"><Briefcase className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{basic.experience_level || "N/A"}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-full"><Clock className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Type</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{basic.employment_type || "N/A"}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-2">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-full"><Users className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Openings</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{basic.number_of_openings || "1"}</p>
              </div>
            </div>
          </div>

          {/* Job Description */}
          {description && (
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Job Description</h2>
              <div className="text-slate-600 text-[15px] leading-relaxed whitespace-pre-wrap">
                {description}
              </div>
            </div>
          )}

          {/* Roles & Responsibilities */}
          {roles && roles.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Roles & Responsibilities</h2>
              <ul className="space-y-4">
                {roles.map((role, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-blue-500" />
                    <div>
                      <span className="font-semibold text-slate-800 block mb-1">{role.title}</span>
                      <span className="text-slate-600 text-[15px] leading-relaxed">{role.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {requirements && (
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Requirements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                {requirements.technical_skills && requirements.technical_skills.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <span className="p-1 bg-slate-100 rounded-md">🛠️</span> Technical Skills
                    </h3>
                    <ul className="space-y-2">
                      {requirements.technical_skills.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[15px] text-slate-600">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{req.skill || req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Soft Skills */}
                {requirements.soft_skills && requirements.soft_skills.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <span className="p-1 bg-slate-100 rounded-md">💬</span> Soft Skills
                    </h3>
                    <ul className="space-y-2">
                      {requirements.soft_skills.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[15px] text-slate-600">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{req.skill || req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
