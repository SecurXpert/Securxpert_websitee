import React from "react";
import Link from "next/link";

export default function Services() {
  const serviceCategories = [
    {
      title: "Web Security & Dev",
      slug: "web-development",
      description: "Build robust, high-performance web systems and portals integrated with advanced encryption, token authentication, and continuous threat monitoring.",
      features: [
        "React & Next.js secure integrations",
        "Encrypted database integrations & API routing",
        "DDoS protection & secure firewalls",
        "Microservice architecture audit"
      ],
      color: "cyan",
      textColor: "text-cyan-400",
      bgClass: "bg-cyan-500/10",
      borderClass: "border-cyan-500/20",
      buttonBg: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Digital Security Audits",
      slug: "digital-marketing",
      description: "Comprehensive vulnerability scanning, system penetration tests, infrastructure posture reviews, and regulatory compliance counseling.",
      features: [
        "ISO 27001 & SOC2 alignment audits",
        "Penetration testing (internal/external)",
        "Cloud configuration reviews (AWS, GCP, Azure)",
        "Zero-Trust strategy consultation"
      ],
      color: "blue",
      textColor: "text-blue-400",
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/20",
      buttonBg: "bg-blue-600 hover:bg-blue-500 text-white",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Mobile App Security",
      slug: "mobile-app-development",
      description: "End-to-end secure development for native and cross-platform apps, offline database encryption, secure biometric integrations, and code obfuscation.",
      features: [
        "iOS & Android custom applications",
        "Local data encryption schemas",
        "Secure biometric (FaceID/TouchID) integrations",
        "Vulnerability scanning for app stores"
      ],
      color: "purple",
      textColor: "text-purple-400",
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/20",
      buttonBg: "bg-purple-600 hover:bg-purple-500 text-white",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 pt-20">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero / Header */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Services Portfolio</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From developing modern, secure applications to performing extensive security compliance audits, Securxpert provides the technological shielding your enterprise requires.
        </p>
      </section>

      {/* Services Grid */}
      <section className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16 mb-24">
        {serviceCategories.map((service, index) => (
          <div
            key={index}
            className={`glass-panel rounded-2xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900/50 rounded-full blur-3xl pointer-events-none" />

            {/* Left Side: Icon, Title, Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`w-12 h-12 ${service.bgClass} rounded-xl flex items-center justify-center ${service.textColor} border ${service.borderClass}`}>
                {service.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {service.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-800/80 px-3 py-1 rounded-full text-xs text-slate-300"
                  >
                    <svg className={`w-3.5 h-3.5 ${service.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Navigation Button */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link
                href={`/services/${service.slug}`}
                className={`w-full lg:w-auto text-center px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-300 ${service.buttonBg}`}
              >
                Detailed Service Specs &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
