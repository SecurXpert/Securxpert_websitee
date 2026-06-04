"use client";

import React, { useState } from "react";
import { initialFormState, formStructure } from "@/utils/careers/JobApplicationForm";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState(initialFormState);

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
      setFormData(initialFormState);
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

          {formStructure.map((section, sIdx) => {
            if (section.type === "grid") {
              return (
                <div key={sIdx} className="grid grid-cols-2 gap-4">
                  {section.fields.map((field) => (
                    <div key={field.name} className="space-y-1">
                      <label className="block text-slate-600 text-xs font-bold uppercase">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        min={field.min}
                        step={field.step}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    </div>
                  ))}
                </div>
              );
            }

            const field = section.fields[0];
            return (
              <div key={field.name} className="space-y-1">
                <label className="block text-slate-600 text-xs font-bold uppercase">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  min={field.min}
                  step={field.step}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            );
          })}

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
