"use client";

import React, { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    totalExp: "",
    relExp: "",
    location: "",
    currentCtc: "",
    expectedCtc: "",
    noticePeriod: "",
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [submitStatus, setSubmitStatus] = useState(""); // "", "submitting", "success", "error"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFileName("No file chosen");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }
    setSubmitStatus("submitting");
    // Simulate API Submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        contact: "",
        totalExp: "",
        relExp: "",
        location: "",
        currentCtc: "",
        expectedCtc: "",
        noticePeriod: "",
      });
      setFile(null);
      setFileName("No file chosen");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-lg">
      <h3 className="text-[#100D35] text-xl font-bold font-sans mb-6">
        Apply for this Position
      </h3>

      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center space-y-3">
          <div className="text-3xl">🎉</div>
          <h4 className="font-bold text-lg font-sans">Application Submitted!</h4>
          <p className="text-sm">
            Thank you for applying. Our talent team will review your resume and contact you soon.
          </p>
          <button
            onClick={() => setSubmitStatus("")}
            className="mt-4 text-xs font-semibold underline text-green-900 hover:text-green-950"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          
          {/* Name */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Candidate Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-slate-600 text-xs font-bold uppercase">
                Total Exp (Yrs) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalExp"
                min="0"
                step="0.5"
                value={formData.totalExp}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                placeholder="e.g. 3.5"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-slate-600 text-xs font-bold uppercase">
                Rel Exp (Yrs) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="relExp"
                min="0"
                step="0.5"
                value={formData.relExp}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                placeholder="e.g. 2"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Current Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              placeholder="City, Country"
              required
            />
          </div>

          {/* CTC Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-slate-600 text-xs font-bold uppercase">
                Current CTC (LPA) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="currentCtc"
                value={formData.currentCtc}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                placeholder="e.g. 6.5"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-slate-600 text-xs font-bold uppercase">
                Expected CTC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="expectedCtc"
                value={formData.expectedCtc}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                placeholder="e.g. 9.5"
                required
              />
            </div>
          </div>

          {/* Notice Period */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Notice Period <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              placeholder="e.g. Immediate / 30 Days"
              required
            />
          </div>

          {/* Resume PDF File Input */}
          <div className="space-y-1">
            <label className="block text-slate-600 text-xs font-bold uppercase">
              Resume (PDF Only) <span className="text-red-500">*</span>
            </label>
            
            <div className="relative border border-slate-200 rounded-lg p-2.5 flex items-center gap-3 bg-slate-50/50 hover:bg-slate-100/50 cursor-pointer transition-colors">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20"
                required
              />
              <span className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded border border-slate-300 pointer-events-none transition-colors">
                Choose File
              </span>
              <span className="text-xs text-slate-500 truncate pointer-events-none">
                {fileName}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="w-full bg-[#2B47FC] hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-95 duration-150 shadow-md text-sm md:text-[15px]"
          >
            <span>{submitStatus === "submitting" ? "Submitting..." : "Submit Application"}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>

        </form>
      )}
    </div>
  );
}
