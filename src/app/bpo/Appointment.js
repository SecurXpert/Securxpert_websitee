"use client";

import React, { useState } from "react";
import { API_BASE_URL } from "@/admin/config";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    serviceType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Ensure all required fields are present (backend will throw 422 otherwise)
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/book-appointment/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          country_code: formData.countryCode,
          phone_number: formData.phone.replace(formData.countryCode, "") || formData.phone,
          service_type: formData.serviceType,
          message: formData.message || "No message provided",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          serviceType: "",
          message: ""
        });
        setTimeout(() => setSubmitted(false), 7000);
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

          {submitted ? (
            <div className="text-center py-10 md:py-16 space-y-6 max-w-lg mx-auto flex flex-col items-center justify-center">
              <div className="text-6xl animate-bounce">😊</div>
              <h3 className="text-[#100D35] text-2xl sm:text-3xl font-semibold font-inter">
                Thanks for contacting us.
              </h3>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-normal">
                We've received your message and will be in touch soon.
              </p>
            </div>
          ) : (
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
                      className="w-full bg-transparent border-b border-slate-200 hover:border-blue-900 focus:border-blue-900 focus:border-b-2 focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans transition-all"
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
                      className="w-full bg-transparent border-b border-slate-200 hover:border-slate-400 focus:border-[#3D62EB] focus:border-b-2 focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans transition-all"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col">
                    <label className="text-slate-800 text-[13px] font-semibold tracking-wider mb-2 font-inter">
                      PHONE NUMBER *
                    </label>
                    <PhoneInput
                      defaultCountry="in"
                      value={formData.phone || ""}
                      onChange={(phone, meta) => setFormData({ ...formData, phone, countryCode: meta?.country?.dialCode ? `+${meta.country.dialCode}` : "+91" })}
                      placeholder="Enter phone number"
                      inputClassName="!w-full !bg-transparent !py-2 !text-sm !font-semibold !text-slate-800 placeholder-slate-400 focus:!outline-none font-sans !border-none !ring-0"
                      className="flex items-center w-full bg-transparent border-b border-slate-200 hover:border-slate-400 focus-within:border-[#3D62EB] transition-all"
                      countrySelectorStyleProps={{
                        buttonClassName: "!bg-transparent !py-2 !pr-2 !text-sm !font-semibold !text-slate-800 !h-full !border-none",
                        dropdownStyleProps: {
                          className: "!z-50",
                          style: {
                            width: "250px"
                        }
                      }
                    }}
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
                      className="w-full bg-white border border-slate-200 hover:border-slate-400 rounded-[6px] px-4 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#3D62EB] focus:ring-1 focus:ring-[#3D62EB] focus:outline-none appearance-none cursor-pointer font-sans transition-all"
                    >
                      <option className="font-semibold" value="">Select</option>
                      <option className="font-semibold" value="Business Audit">Customer Support</option>
                      <option className="font-semibold" value="Tax Strategy">Back-Office Operations</option>
                      <option className="font-semibold" value="Financial Advices">Sales & Telemarketing</option>
                      <option className="font-semibold" value="Insurance Strategy">HR & Recruitment</option>
                      <option className="font-semibold" value="Start Ups">Document Automation</option>
                      <option className="font-semibold" value="Manage Investment">Other</option>
                    </select>

                    {/* Select custom arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-900">
                      <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
                    className="w-full bg-transparent border-b border-slate-200 hover:border-slate-400 focus:border-[#3D62EB] focus-within:border-b-2 focus:outline-none pb-2 text-sm text-slate-800 placeholder-slate-400 font-sans resize-none min-h-[96px] transition-all"
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
          )}

        </div>

      </div>
    </section>
  );
}
