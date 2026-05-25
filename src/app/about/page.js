import React from "react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Security-First Mentality",
      description: "We embed compliance, safety controls, and encryption patterns into the foundations of everything we build.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Engineering Excellence",
      description: "No code compromises. We utilize modern React/Next.js frameworks and native app architectures optimized for performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Client Centricity",
      description: "We work alongside engineering teams to provide security coaching, precise metrics, and direct pathways to mitigation.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Marcus Vance",
      role: "Founder & Chief Security Officer",
      specialty: "Threat Intelligence & Compliance",
      avatarBg: "from-cyan-500 to-blue-600"
    },
    {
      name: "Sonia Patel",
      role: "VP of Engineering",
      specialty: "SaaS Dev & Cryptographic Systems",
      avatarBg: "from-blue-600 to-purple-600"
    },
    {
      name: "Devon Cross",
      role: "Lead Penetration Tester",
      specialty: "Vulnerability Assessments & Cloud Sec",
      avatarBg: "from-purple-600 to-cyan-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 pt-20">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Header / Hero */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Securxpert</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Founded in 2020, Securxpert bridges the critical gap between fast-paced product development and bulletproof cybersecurity. We help modern firms ship fast without compromising their systems.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Our Core Beliefs</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Values That Guide Our Engineering</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20 mb-6">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History and Vision Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Journey</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Securxpert started as a small, specialized consulting agency focusing exclusively on penetration testing and threat assessment. Recognizing a critical trend—that software engineering and security operations were severely fragmented—we expanded our mission.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Today, we provide full-lifecycle product development integrated with our native threat monitoring framework. Our clients include enterprise SaaS providers, healthcare platforms, and financial software networks.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-4">Securing the Future</h3>
            <blockquote className="border-l-2 border-cyan-400 pl-4 text-slate-300 italic text-sm my-4">
              &ldquo;Software architecture is useless if it is vulnerable. We do not just audit safety; we build it into the system's DNA.&rdquo;
            </blockquote>
            <p className="text-xs text-slate-500 font-semibold uppercase mt-6">
              &mdash; Marcus Vance, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 border-t border-slate-900 mb-16">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Expert Minds</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Meet Our Core Leadership Team</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((t, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl border border-slate-800 text-center flex flex-col items-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6`}>
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
              <p className="text-xs text-cyan-400 font-medium mb-3">{t.role}</p>
              <p className="text-xs text-slate-400 italic">{t.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
