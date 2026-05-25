import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-20">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-28">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Next-Generation Threat Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
            Secure Your <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Digital Edge</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Securxpert delivers enterprise-grade cybersecurity auditing, advanced web engineering, and bulletproof mobile application development to secure your digital footprint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center cyber-glow-btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-md text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Get Free Security Audit
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto text-center bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 border-y border-slate-900 bg-slate-900/20 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400">99.9%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Mitigation Rate</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">10M+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Lines Audited</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400">150+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Clients Secured</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">24/7</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Threat Monitoring</p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Our Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Advanced Security and Development Services</p>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            We bridge the gap between bulletproof web security practices and world-class product engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Web */}
          <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Security & Dev</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Build robust, lightning-fast web applications integrated with next-gen threat scanning, automated vulnerability testing, and secure API gateways.
              </p>
            </div>
            <Link href="/services/web-development" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Web Solutions</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Service 2: Digital */}
          <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Security Audits</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Verify compliance, identify threat vectors, conduct penetration testing, and optimize cloud architectures for complete organizational data safety.
              </p>
            </div>
            <Link href="/services/digital-marketing" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Digital Audits</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Service 3: Mobile */}
          <div className="glass-panel glass-panel-hover p-8 rounded-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/20 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile App Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Develop highly secure native iOS and Android apps with end-to-end encryption, local databases, and safe authentication mechanics.
              </p>
            </div>
            <Link href="/services/mobile-app-development" className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Mobile Protection</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cyber Security Banner / CTA */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Is your business protected against modern cyber threats?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Schedule a comprehensive vulnerability assessment and network security audit with our experts today.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full md:w-auto text-center block bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-md text-sm transition-all"
            >
              Get Audited Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
