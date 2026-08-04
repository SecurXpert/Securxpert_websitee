"use client";
import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { API_BASE_URL } from "@/admin/config";

export default function Demo() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    work_email: "",
    business_need: ""
  });
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Extract raw phone number minus country code
    const rawPhoneNumber = phone.replace(countryCode, "").trim() || phone;

    const payload = {
      full_name: formData.full_name,
      company_name: formData.company_name,
      work_email: formData.work_email,
      country_code: countryCode,
      phone_number: rawPhoneNumber,
      business_need: formData.business_need
    };

    try {
      const res = await fetch(`${API_BASE_URL}blogs-demo/`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          full_name: "",
          company_name: "",
          work_email: "",
          business_need: ""
        });
        setPhone("");
        setCountryCode("+91");
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
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow font-sans"
          />
          <input 
            type="text" 
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            placeholder="Company Name" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow font-sans"
          />
          <input 
            type="email" 
            name="work_email"
            value={formData.work_email}
            onChange={handleChange}
            required
            placeholder="Work Email" 
            className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow font-sans"
          />
          <div className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-1.5 text-[14px] xl:text-[15px] focus-within:border-[#3C60E7] focus-within:ring-1 focus-within:ring-[#3C60E7] transition-shadow flex items-center">
            <PhoneInput
              defaultCountry="in"
              value={phone}
              onChange={(phoneVal, meta) => {
                setPhone(phoneVal);
                if (meta?.country?.dialCode) {
                  setCountryCode(`+${meta.country.dialCode}`);
                }
              }}
              placeholder="Phone Number"
              inputClassName="!w-full !bg-transparent !py-1.5 !text-[14px] xl:!text-[15px] !text-slate-700 placeholder:!text-slate-400 focus:!outline-none !border-none !ring-0 font-sans"
              className="flex items-center w-full"
              countrySelectorStyleProps={{
                buttonClassName: "!bg-transparent !py-1.5 !pr-2 !text-[14px] xl:!text-[15px] !text-slate-700 !h-full !border-none",
                dropdownStyleProps: {
                  className: "!z-50",
                  style: {
                    width: "250px"
                  }
                }
              }}
            />
          </div>
          <textarea 
            name="business_need"
            value={formData.business_need}
            onChange={handleChange}
            required
            placeholder="Business Need" 
            rows="4"
            className="w-full bg-white border border-[#C9CED6] rounded-[16px] px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow resize-none font-sans"
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
