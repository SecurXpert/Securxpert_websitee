"use client";

import React, { useState } from "react";
import Link from "next/link";

const JOBS_DATA = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    category: "Development",
    location: "Bangalore, India",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Lead the development of secure enterprise-grade SaaS platforms, cloud integrations, and core backend API architectures."
  },
  {
    id: 2,
    title: "Cybersecurity Threat Analyst",
    category: "Security",
    location: "Bangalore, India / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Monitor and analyze network logs, perform penetration tests, identify vulnerabilities, and design robust defensive measures."
  },
  {
    id: 3,
    title: "Lead UI/UX Designer",
    category: "Design",
    location: "Bangalore, India",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Own the creation of user journeys, modern layouts, high-fidelity prototypes, and our unified design system across digital products."
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    category: "Marketing",
    location: "Remote",
    type: "Contract",
    experience: "2+ Years",
    description: "Manage SEO campaigns, lead paid advertising campaigns, and develop social growth strategies for digital client portfolios."
  }
];

export default function Positions() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Development", "Security", "Design", "Marketing"];

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="positions" className="bg-slate-50 py-16 sm:py-24 relative z-10 border-t border-b border-slate-100">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-block bg-[#3B30DB]/10 text-[#3B30DB] px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
              Careers Portal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight font-space-grotesk">
              Explore Open Positions
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Join a team of expert engineers, creative designers, and marketing strategists building the future of secure digital solutions.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 border border-slate-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B30DB] focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#3B30DB] text-white shadow-md shadow-[#3B30DB]/15"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-col justify-between space-y-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Job Metadata tags */}
                  <div className="flex items-center gap-2">
                    <span className="bg-[#3B30DB]/5 text-[#3B30DB] text-xs font-bold px-3 py-1 rounded-md uppercase">
                      {job.category}
                    </span>
                    <span className="bg-slate-100 text-slate-500 text-xs font-medium px-3 py-1 rounded-md">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {job.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Footer Details */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col text-xs text-slate-400">
                    <span className="font-medium text-slate-500">{job.location}</span>
                    <span>Exp: {job.experience}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#3B30DB] group-hover:text-blue-600 font-bold text-sm transition-all duration-200"
                  >
                    Apply Now &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/50 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            <p className="text-slate-400 font-medium">No open positions matching your search filters.</p>
          </div>
        )}

      </div>
    </section>
  );
}
