"use client";

import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Ensure all required fields are present (backend will throw 422 otherwise)
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("http://192.168.0.135:8000/book-appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone_number: formData.phone,
          service_type: formData.serviceType,
          message: formData.message || "No message provided",
        }),
      });

      if (res.ok) {
        alert("Form submitted successfully! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: ""
        });
      } else {
        const errorData = await res.json();
        alert("Failed to submit form: " + (errorData.detail?.[0]?.msg || "Please try again."));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please check your connection and try again.");
    }
  };

  return (
    <section id="appointment" className="relative w-full bg-white overflow-hidden py-8 lg:py-14 text-slate-800">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* LIGHT CARD BLOCK CONTAINER */}
        <div className="w-full bg-[#F7F9FB] rounded-[16px] p-8 sm:p-12 md:p-14 border border-slate-100/50">

          <form onSubmit={handlesubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* COLUMN 1: TITLE AND INTRO (Takes 4 cols) */}
            <div className="lg:col-span-4 text-left pt-2 relative z-10 pr-0 lg:pr-6">
              <h3 className="text-[#100D35] text-2xl sm:text-3xl font-semibold leading-[1.2] font-inter mb-4">
                Book a Appointment
              </h3>
              <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed font-normal max-w-sm">
                Tell us a bit about what you need handled, and we'll get back to you within one business day with next steps.
              </p>
            </div>

            {/* COLUMN 2: ALL FORM INPUTS (Takes 8 cols, divided into 2 horizontal sub-columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Form Sub-Column A: Name, Email, Phone, and Submit */}
              <div className="space-y-6">

                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                    NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-[#3D62EB] focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-[#3D62EB] focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col">
                  <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: val });
                    }}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    placeholder="1234567890"
                    title="Please enter exactly 10 digits"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-[#3D62EB] focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans"
                    required
                  />
                </div>

                {/* Submit button (Desktop Only) */}
                <div className="pt-2 hidden md:block">
                  <button
                    type="submit"
                    className="bg-[#3D62EB] hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-[6px] text-md shadow-md transition-all active:scale-95"
                  >
                    Submit
                  </button>
                </div>

              </div>

              {/* Form Sub-Column B: Service Selection and Message */}
              <div className="space-y-6">

                {/* Service Selection */}
                <div className="flex flex-col">
                  <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                    SERVICE TYPE
                  </label>
                  <div className="relative">
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-[6px] px-4 py-2.5 text-sm text-slate-900 focus:border-[#3D62EB] focus:outline-none appearance-none cursor-pointer font-sans"
                    >
                      <option value="">Select ...</option>
                      <option value="Business Audit">Customer Support</option>
                      <option value="Tax Strategy">Back-Office Operations</option>
                      <option value="Financial Advices">Sales & Telemarketing</option>
                      <option value="Insurance Strategy">HR & Recruitment</option>
                      <option value="Start Ups">Document Automation</option>
                      <option value="Manage Investment">other</option>
                    </select>

                    {/* Select custom arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                    MESSAGE (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type here..."
                    className="w-full bg-transparent border-b border-slate-200 focus:border-[#3D62EB] focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans resize-none  min-h-[96px]"
                  />
                </div>

              </div>

              {/* Submit button (Mobile Only) */}
              <div className="pt-2 md:hidden">
                <button
                  type="submit"
                  className="bg-[#3D62EB] hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-[6px] text-md shadow-md transition-all active:scale-95"
                >
                  Submit
                </button>
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
