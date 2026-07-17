"use client";

import React, { useState, useEffect } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// High-Performance Butter-Smooth Count-Up Component
function AnimatedCounter({ target, suffix = "", duration = 1600 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrameId = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * target));

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [target, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function Hero() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91", // Default country code
        purpose: "",
        message: "",
        location: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", formData.name);
        urlencoded.append("email", formData.email);
        urlencoded.append("purpose", formData.purpose);
        urlencoded.append("country_code", formData.countryCode);
        urlencoded.append("phone_number", formData.phone.replace(formData.countryCode, "") || formData.phone);
        urlencoded.append("location", formData.location);
        urlencoded.append("message", formData.message);

        try {
            const response = await fetch("https://poise-crouch-plating.ngrok-free.dev/contact/contact-us", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: urlencoded
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    countryCode: "+91",
                    purpose: "",
                    message: "",
                    location: ""
                });
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                const errData = await response.json().catch(() => ({}));
                console.error("Submission failed", errData);
                alert("Failed to send message. " + (errData.detail || ""));
            }
        } catch (error) {
            console.error("Network Error", error);
            alert("Network Error: Could not connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="relative max-w-full bg-[#2C2F8D] flex flex-col justify-between overflow-hidden pt-24">

            {/* 1. WAVE BACKGROUND GRAPHIC */}
            <div
                className="absolute inset-x-0 top-0 h-[95%] bg-cover bg-center bg-no-repeat pointer-events-none z-0"
                style={{ backgroundImage: "url('/contactus/Contact us 2.png')" }}
            />

            {/* 2. MAIN LAYOUT CONTAINER */}
            <div className="max-w-[1280px] lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-8 pb-4 lg:pt-12 lg:pb-8 flex-grow">

                {/* LEFT COLUMN: BRANDING & CONTACT INFO */}
                <div className="lg:col-span-6 space-y-8 select-none relative"> 



                    <div className="relative z-10 space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.1] font-sans">
                            Let's talk about <br />
                            your <span className="text-[#A5B4FC] bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">project.</span>
                        </h1>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
                            Tell us what you're trying to build, fix, or scale — we'll come back with a clear plan, a realistic timeline, and a fixed quote. No obligation, no pressure.
                        </p>
                    </div>

                    {/* Contact Details Stack with Icons */}
                    <div className="relative z-10 space-y-5 pt-4 text-white/90 text-sm sm:text-base font-sans">

                        {/* Email Address */}
                        <div className="flex items-center space-x-3.5">
                            <svg className="w-5 h-5 text-cyan-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:info@SecurXperts.com" className="font-semibold hover:underline cursor-pointer">info@SecurXperts.com</a>
                        </div>

                        {/* Threat Desk Hotline */}
                        <div className="flex items-center space-x-3.5">
                            <svg className="w-5 h-5 text-cyan-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+917993256679" className="font-semibold hover:underline cursor-pointer">+91 7993256679</a>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-3.5">
                            <svg className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs sm:text-sm text-white/85 leading-relaxed">
                                Third Floor, PR R One Towers, Plot No 59, DLF Rd, near Radisson Hotel, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032
                            </span>
                        </div>

                    </div>

                </div>

                {/* RIGHT COLUMN: FLOATING FORM CARD */}
                <div className="lg:col-span-6 flex justify-end z-10 translate-y-[24px] lg:translate-y-[120px]">
                    <div
                        className="w-full max-w-[550px] bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col relative"
                        style={{ boxShadow: "-6px 6px 16.2px -2px #00000040" }}
                    >

                        {/* Centered Heading */}
                        <h3 className="text-center text-[28px] sm:text-[34px] font-black text-[#0F172B] tracking-tight font-sans">
                            Contact us
                        </h3>
                        <p className="text-center text-slate-500 text-xs sm:text-sm font-semibold mt-2 mb-8 font-sans">
                            Contact us for a quote, help or to join the team
                        </p>

                        <h3 className="text-lg sm:text-[21px] font-extrabold text-[#0F172B] mb-6 font-sans text-left">
                            Get in touch
                        </h3>

                        {submitted ? (
                            <div className="text-center py-16 space-y-4">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-200 animate-bounce">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-black text-[#0F172B]">Success!</h4>
                                <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed">
                                    Your request has been delivered to our security operations team. We will respond within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    {/* Name */}
                                    <div className="space-y-1 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[15px] font-semibold text-slate-900 placeholder-slate-400 focus:outline-none hover:border-blue-600 focus:border-blue-600 transition-all font-sans"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email address"
                                            className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[15px] font-semibold text-slate-900 placeholder-slate-400 focus:outline-none hover:border-blue-600 focus:border-blue-600 transition-all font-sans"
                                        />
                                    </div>

                                </div>

                                {/* Row 2: Purpose & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    {/* Purpose Dropdown Select */}
                                    <div className="space-y-1 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Purpose *</label>
                                        <select
                                            name="purpose"
                                            required
                                            value={formData.purpose}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[15px] font-semibold text-[#0F172B] focus:outline-none hover:border-blue-600 focus:border-blue-600 transition-all font-sans cursor-pointer"
                                        >
                                            <option value="" className="text-slate-400">Select Purpose</option>
                                            <option value="Business Enquiry" className="text-slate-800">Business Enquiry</option>
                                            <option value="Partnership" className="text-slate-800">Partnership</option>
                                            <option value="Support" className="text-slate-800">Support</option>
                                            <option value="Careers" className="text-slate-800">Careers</option>
                                            <option value="Other" className="text-slate-800">Other</option>
                                        </select>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-1 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Phone Number</label>
                                        <PhoneInput
                                            defaultCountry="in"
                                            value={formData.phone || ""}
                                            onChange={(phone, meta) => setFormData({ ...formData, phone, countryCode: meta?.country?.dialCode ? `+${meta.country.dialCode}` : "+91" })}
                                            placeholder="Enter your phone number"
                                            inputClassName="!w-full !bg-transparent !py-2.5 !text-[15px] !font-semibold !text-slate-900 placeholder-slate-400 focus:!outline-none font-sans !border-none !ring-0"
                                            className="flex items-center w-full bg-transparent border-b border-slate-200 hover:border-blue-600 focus-within:border-blue-600 transition-all"
                                            countrySelectorStyleProps={{
                                                buttonClassName: "!bg-transparent !py-2.5 !pr-2 !text-[15px] !font-semibold !text-slate-900 !h-full !border-none",
                                                dropdownStyleProps: {
                                                    className: "!z-50",
                                                    style: {
                                                        width: "250px"
                                                    }
                                                }
                                            }}
                                        />
                                    </div>

                                </div>

                                {/* Row 3: Location & Message */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                                    
                                    {/* Location */}
                                    <div className="space-y-1 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location || ""}
                                            onChange={handleInputChange}
                                            placeholder="Enter your location"
                                            className="w-full bg-transparent border-b border-slate-200 py-2.5 text-[15px] font-semibold text-slate-900 placeholder-slate-400 focus:outline-none hover:border-blue-600 focus:border-blue-600 transition-all font-sans"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2 text-left">
                                        <label className="text-[14px] font-bold text-[#5D5D5D] tracking-wide font-sans">Message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Enter your message"
                                            className="w-full rounded-2xl bg-[#F3F4F6] p-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none hover:ring-2 hover:ring-blue-400 hover:bg-white focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none min-h-[120px] font-sans"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button aligned to Right */}
                                <div className="w-full flex justify-end pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-extrabold px-8 py-3 rounded-md text-xs sm:text-[13px] tracking-wide  transition-all duration-300 shadow-sm active:scale-95 disabled:opacity-50"
                                    >
                                        {loading ? "Sending..." : "Send a Message"}
                                    </button>
                                </div>

                            </form>
                        )}

                    </div>
                </div>

            </div>

            {/* 3. SOLID WHITE BOTTOM STATS BAND */}
            <div className="relative max-w-full bg-white py-10 border-t border-slate-100 z-0 mt-auto select-none">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Metrics (occupies lg:col-span-6) */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">

                        {/* Stat 1 */}
                        <div className="space-y-1 transform hover:scale-105 transition-transform duration-300 cursor-default">
                            <p
                                className="text-3xl sm:text-[40px] font-semibold leading-none tracking-tight bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)" }}
                            >
                                <AnimatedCounter target={500} suffix="+" />
                            </p>
                            <p className="text-slate-500 text-[14px] font-semibold tracking-wide">Projects Delivered</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="space-y-1 transform hover:scale-105 transition-transform duration-300 cursor-default">
                            <p
                                className="text-3xl sm:text-[40px] font-semibold leading-none tracking-tight bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)" }}
                            >
                                <AnimatedCounter target={12} suffix="+" />
                            </p>
                            <p className="text-slate-500 text-[14px] font-semibold tracking-wide">Countries Served</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="space-y-1 transform hover:scale-105 transition-transform duration-300 cursor-default">
                            <p
                                className="text-3xl sm:text-[40px] font-semibold leading-none tracking-tight bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)" }}
                            >
                                <AnimatedCounter target={10} />
                            </p>
                            <p className="text-slate-500 text-[15px]  font-bold tracking-wide">Products Built</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="space-y-1 transform hover:scale-105 transition-transform duration-300 cursor-default">
                            <p
                                className="text-3xl sm:text-[40px] font-semibold leading-none tracking-tight bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)" }}
                            >
                                <AnimatedCounter target={98} suffix="%" />
                            </p>
                            <p className="text-slate-500 text-[15px] font-semibold tracking-wide">Client Retention</p>
                        </div>

                    </div>

                    {/* Right Side: Empty space (occupies lg:col-span-6) to let the floating form card overlap cleanly! */}
                    <div className="hidden lg:block lg:col-span-6" />

                </div>
            </div>

        </div>
    );
}
