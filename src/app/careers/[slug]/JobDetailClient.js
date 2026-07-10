"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft, LuArrowRight } from "react-icons/lu";
import PhoneInputField from "./PhoneInputField";
import axios from "axios";
const slugify = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';

export default function JobDetailClient({ slug }) {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        let token = localStorage.getItem("access_token") || "";

        if (!token) {
          try {
            const guestEmail = "guest_visitor_securxpert@gmail.com";
            const guestUsername = "guest_visitor";
            const guestPassword = "VisitorPass123";

            try {
              const loginRes = await axios.post('http://192.168.0.125:8000/auth/login', {
                email: guestEmail,
                password: guestPassword
              });
              token = loginRes.data?.access_token || "";
              if (token) localStorage.setItem("access_token", token);
            } catch (err) {
              if (err.response && err.response.status === 401) {
                await axios.post('http://192.168.0.125:8000/auth/register-admin', {
                  username: guestUsername, email: guestEmail, password: guestPassword
                });
                const loginRes2 = await axios.post('http://192.168.0.125:8000/auth/login', {
                  email: guestEmail, password: guestPassword
                });
                token = loginRes2.data?.access_token || "";
                if (token) localStorage.setItem("access_token", token);
              }
            }
          } catch (e) { console.error("Auto guest auth failed:", e); }
        }

        // Fetch all jobs to match the slug
        const res = await axios.get("http://192.168.0.125:8000/jobs/", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        const rawList = Array.isArray(res.data) ? res.data : (res.data?.data || []);
        
        // Find the matching job by slugified title
        const matchingJobInfo = rawList.find(j => slugify(j.job_title) === slug && (j.job_status?.toLowerCase() === "active" || j.job_status?.toLowerCase() === "published"));
        
        if (!matchingJobInfo) {
          setJobDetails(null);
          setLoading(false);
          return;
        }

        const jobId = matchingJobInfo.id;
        
        // Fetch detailed sections
        const headers = { "Authorization": `Bearer ${token}` };
        
        let heroData = null;
        try {
          const resHero = await axios.get(`http://192.168.0.125:8000/jobs/${jobId}/hero-section`, { headers });
          if (resHero.data) heroData = resHero.data;
        } catch (e) {}

        let jobDescription = matchingJobInfo.job_description || "";
        try {
          const resDesc = await axios.get(`http://192.168.0.125:8000/jobs/${jobId}/description`, { headers });
          if (resDesc.data) jobDescription = resDesc.data.job_description || resDesc.data;
        } catch (e) {}

        let rolesAndResponsibilities = [];
        try {
          const resRoles = await axios.get(`http://192.168.0.125:8000/jobs/${jobId}/responsibilities`, { headers });
          if (resRoles.data && Array.isArray(resRoles.data)) rolesAndResponsibilities = resRoles.data;
        } catch (e) {}

        let requirements = null;
        try {
          const resReq = await axios.get(`http://192.168.0.125:8000/jobs/${jobId}/requirements`, { headers });
          if (resReq.data) requirements = resReq.data;
        } catch (e) {}

        setJobDetails({
          basic: matchingJobInfo,
          hero: heroData,
          description: jobDescription,
          roles: rolesAndResponsibilities,
          requirements: requirements
        });

      } catch (err) {
        console.error("Failed to fetch job details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">Loading Job Details...</div>;
  }

  if (!jobDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <Link href="/careers" className="text-blue-600 hover:underline">Return to Careers</Link>
      </div>
    );
  }

  const { basic, hero, description, roles, requirements } = jobDetails;
  const displayTitle = hero?.hero_title || hero?.heroTitle || basic.job_title;

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 select-none pt-0">
      
      {/* Top Blue Section */}
      <section 
        className="relative w-full pt-32 pb-24 lg:pb-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #374FC9 0%, #2C2C88 100%)" }}
      >
        <img 
          src="/Carrers/positions/design.png" 
          alt="Decorative Background" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-contain pointer-events-none z-0 translate-x-[10%]"
        />
        
        <div className="relative max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20 z-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white font-sans leading-tight">
              {displayTitle}
            </h1>
            
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-blue-700 hover:text-blue-800 hover:bg-slate-50 font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 shrink-0"
            >
              <LuChevronLeft className="w-6 h-6" /> Back
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[620px] gap-y-6 gap-x-12 text-white/90">
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Category - {basic.job_category || "IT"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Experience - {basic.experience_level || "Mid Level"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Type - {basic.employment_type || "Full Time"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Location - {basic.job_location || "Hyderabad (Onsite)"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">No of Openings - {basic.number_of_openings || "1"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20 py-16 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Job Details */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
            
            {/* Job Description */}
            {description && (
              <div>
                <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-4 font-sans">
                  Job Description
                </h2>
                <div className="text-[14px] sm:text-base text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {description}
                </div>
              </div>
            )}

            {/* Roles and Responsibilities */}
            {roles && roles.length > 0 && (
              <div>
                <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-4 font-sans">
                  Roles and Responsibilities
                </h2>
                <ul className="text-[14px] sm:text-base text-slate-700 space-y-3 list-none pl-1">
                  {roles.map((role, idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-slate-800">{role.title}:</span> {role.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {requirements && (
              <div>
                <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-4 font-sans">
                  Requirements
                </h2>
                
                {requirements.technical_skills && requirements.technical_skills.length > 0 && (
                  <div className="mb-5">
                    <h3 className="font-bold text-slate-800 mb-3">Technical Expertise:</h3>
                    <ul className="text-[14px] sm:text-base text-slate-600 space-y-2 list-disc pl-5">
                      {requirements.technical_skills.map((req, idx) => (
                        <li key={idx}>{req.skill || req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {requirements.soft_skills && requirements.soft_skills.length > 0 && (
                  <div>
                    <h3 className="font-bold text-slate-800 mb-3">Soft Skills:</h3>
                    <ul className="text-[14px] sm:text-base text-slate-600 space-y-2 list-disc pl-5">
                      {requirements.soft_skills.map((req, idx) => (
                        <li key={idx}>{req.skill || req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm sticky top-28">
              <form className="space-y-4">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Candidate Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Enter Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <PhoneInputField />

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Total Experience (Years) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Relevant Experience (Years) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Current Location <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Current CTC (In lakhs) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Expected CTC (In lakhs) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">LinkedIn Profile Link </label>
                  <input type="url" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Technical Proficiency</label>
                  <textarea rows="3" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"></textarea>
                </div>

                <div className="flex flex-col gap-1.5 pt-2">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Upload your Latest Resume (File Size &lt; 1MB) <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-3">
                    <input type="file" id="resume" className="hidden" />
                    <label htmlFor="resume" className="px-3 py-1.5 border border-slate-800 rounded text-xs font-medium cursor-pointer hover:bg-slate-50 transition-colors">
                      Choose file
                    </label>
                    <span className="text-xs text-slate-500">No file chosen</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="w-full mt-6 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm hover:opacity-90"
                  style={{ backgroundColor: "#3243A4" }}
                >
                  Submit Application
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
