"use client";
import React, { useState } from 'react';
import PhoneInputField from "./PhoneInputField";

export default function JobApplicationForm() {
  // Application Form State
  const [formData, setFormData] = useState({
    candidate_name: "",
    enter_email: "",
    phone: "",
    countryCode: "+91",
    total_experience: "",
    relevant_experience: "",
    current_location: "",
    current_ctc: "",
    expected_ctc: "",
    linkedin_profile_url: "",
    technical_proficiency: ""
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    setSubmitStatus("loading");

    const payload = new FormData();
    payload.append("candidate_name", formData.candidate_name);
    payload.append("enter_email", formData.enter_email);
    payload.append("country_code", formData.countryCode);
    payload.append("phone_number", formData.phone.replace(formData.countryCode, "") || formData.phone);
    payload.append("total_experience", formData.total_experience);
    payload.append("relevant_experience", formData.relevant_experience);
    payload.append("current_location", formData.current_location);
    payload.append("current_ctc", formData.current_ctc);
    payload.append("expected_ctc", formData.expected_ctc);
    payload.append("linkedin_profile_url", formData.linkedin_profile_url || "");
    payload.append("technical_proficiency", formData.technical_proficiency || "");
    payload.append("upload_your_latest_resume", resumeFile);

    try {
      const res = await fetch("https://poise-crouch-plating.ngrok-free.dev/job-applications/", {
        method: "POST",
        body: payload
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          candidate_name: "",
          enter_email: "",
          phone: "",
          countryCode: "+91",
          total_experience: "",
          relevant_experience: "",
          current_location: "",
          current_ctc: "",
          expected_ctc: "",
          linkedin_profile_url: "",
          technical_proficiency: ""
        });
        setResumeFile(null);
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        const errData = await res.json().catch(() => ({}));
        console.error("Submission failed", errData);
        alert("Failed to submit application. " + (errData.detail || ""));
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Network Error", err);
      alert("Network Error: Could not connect to the server.");
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm sticky top-28">
      {submitStatus === "success" ? (
        <div className="text-center py-10">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Application Submitted!</h3>
          <p className="text-sm text-slate-600">Thank you for applying. We will review your profile and get back to you soon.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Candidate Name <span className="text-red-500">*</span></label>
            <input type="text" name="candidate_name" value={formData.candidate_name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Enter Email <span className="text-red-500">*</span></label>
            <input type="email" name="enter_email" value={formData.enter_email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <PhoneInputField 
            value={formData.phone || ""}
            onChange={(phone, meta) => setFormData({ ...formData, phone, countryCode: meta?.country?.dialCode ? `+${meta.country.dialCode}` : "+91" })}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Total Experience (Years) <span className="text-red-500">*</span></label>
            <input type="number" name="total_experience" value={formData.total_experience} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Relevant Experience (Years) <span className="text-red-500">*</span></label>
            <input type="number" name="relevant_experience" value={formData.relevant_experience} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Current Location <span className="text-red-500">*</span></label>
            <input type="text" name="current_location" value={formData.current_location} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Current CTC (In lakhs) <span className="text-red-500">*</span></label>
            <input type="number" name="current_ctc" value={formData.current_ctc} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Expected CTC (In lakhs) <span className="text-red-500">*</span></label>
            <input type="number" name="expected_ctc" value={formData.expected_ctc} onChange={handleInputChange} required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">LinkedIn Profile Link </label>
            <input type="url" name="linkedin_profile_url" value={formData.linkedin_profile_url} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Technical Proficiency</label>
            <textarea name="technical_proficiency" value={formData.technical_proficiency} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"></textarea>
          </div>

          <div className="flex flex-col gap-1.5 pt-2">
            <label className="text-[13px] text-[#7A7A7A] font-medium">Upload your Latest Resume (File Size &lt; 1MB) <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-3">
              <input type="file" id="resume" name="upload_your_latest_resume" onChange={handleFileChange} required className="hidden" accept=".pdf,.doc,.docx" />
              <label htmlFor="resume" className="px-3 py-1.5 border border-slate-800 rounded text-xs font-medium cursor-pointer hover:bg-slate-50 transition-colors">
                Choose file
              </label>
              <span className="text-xs text-slate-500 max-w-[200px] truncate">{resumeFile ? resumeFile.name : "No file chosen"}</span>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={submitStatus === "loading"}
            className="w-full mt-6 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: "#3243A4" }}
          >
            {submitStatus === "loading" ? "Submitting..." : "Submit Application"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}
