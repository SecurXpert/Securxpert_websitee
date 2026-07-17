"use client";
import React, { useState } from 'react';

export default function Demo() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    work_email: "",
    phone_number: "",
    business_need: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://poise-crouch-plating.ngrok-free.dev/blogs/blogs-demo", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          full_name: "",
          company_name: "",
          work_email: "",
          phone_number: "",
          business_need: ""
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errData = await res.json().catch(() => ({}));
        console.error("Failed to submit", errData);
        alert("Failed to submit request.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Network Error", err);
      alert("Network Error: Could not connect to the server.");
      setStatus("error");
    }
  };

  return (
    <div className="mt-8 bg-[#EEF2FC] rounded-[24px] p-6 lg:p-7 shadow-sm border border-slate-200">
      <h3 className="text-[22px] xl:text-[26px] text-center text-[#0A1D56] font-medium mb-6 font-sans">
        Get Your Free Demo
      </h3>
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-slate-700 font-medium">Thank you! Your demo request has been submitted.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            placeholder="Full Name" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
          />
          <input 
            type="text" 
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            placeholder="Company Name" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
          />
          <input 
            type="email" 
            name="work_email"
            value={formData.work_email}
            onChange={handleChange}
            required
            placeholder="Work Email" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
          />
          <input 
            type="tel" 
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            placeholder="Phone Number" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
          />
          <textarea 
            name="business_need"
            value={formData.business_need}
            onChange={handleChange}
            required
            placeholder="Business Need" 
            rows="4"
            className="w-full bg-white border border-[#C9CED6] rounded-[16px] px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow resize-none"
          ></textarea>
          
          <div className="flex justify-center mt-3">
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-[#0A266C] hover:bg-[#071B4D] disabled:opacity-50 text-white text-[14px] xl:text-[15px] font-normal tracking-wide px-8 py-3 rounded-full transition-colors w-max mx-auto shadow-md"
            >
              {status === "loading" ? "SCHEDULING..." : "SCHEDULE NOW"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
