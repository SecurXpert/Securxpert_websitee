"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "audit",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "audit",
        message: ""
      });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative min-h-screen bg-slate-950 pt-20">
      <div className="absolute inset-0 cyber-grid opacity-15" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Security Desk</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about compliance audits or want to secure your web and mobile applications? Drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Headquarters</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-sm text-slate-300">
                  <div className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Securxpert Cyber Labs</p>
                    <p className="text-slate-400 text-xs mt-1">
                      Cyber Tower, Level 4, Tech Innovation Hub,<br />
                      Bangalore, Karnataka, 560103, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-sm text-slate-300">
                  <div className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email Address</p>
                    <p className="text-slate-400 text-xs mt-1">ops@securxpert.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-sm text-slate-300">
                  <div className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Threat Desk Hotline</p>
                    <p className="text-slate-400 text-xs mt-1">+91 (80) 555-SECURE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Glass Map Placeholder */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-center h-48 mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5" />
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="relative text-center space-y-2 z-10">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-white">Interactive Map Access</h4>
                <p className="text-slate-500 text-xs max-w-xs mx-auto">
                  Audit clients receive dedicated VPN mapping and private team coordinates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20 animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
                  <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
                    Thank you! Your ticket has been logged with our security team. We will review and contact you in 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alice Smith"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alice@company.com"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-400">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-semibold text-slate-400">Service Required</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      >
                        <option value="audit">Vulnerability Audit</option>
                        <option value="web">Web Security & Dev</option>
                        <option value="mobile">Mobile Security & Dev</option>
                        <option value="general">General Consultancy</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message / Request Scope</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your application stack or audit timelines..."
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full cyber-glow-btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-md text-sm transition-all flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <span>Send Encrypted Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
