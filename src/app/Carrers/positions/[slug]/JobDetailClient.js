"use client";

import React from "react";
import Link from "next/link";
import { slugify } from "./positionsData";
import JobApplicationForm from "./JobApplicationForm";
import { getJobDetails } from "@/utils/careers/JobDetailClient";

export default function JobDetailClient({ position, relatedPositions }) {
  const details = getJobDetails(position.title, position.category, position.tags);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 pb-20">
      
      {/* 1. HERO SECTION (Dark Blue Theme matching the Figma screenshot) */}
      <section className="relative w-full bg-[#1A194A] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2B47FC]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Hero Left Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight leading-tight max-w-4xl text-white mb-8">
              {position.title}
            </h1>
            
            {/* Hero Key-Value Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl text-[15px] font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">• Job Category:</span>
                <span>{details.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">• Experience:</span>
                <span>{details.expRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">• Job Type:</span>
                <span>{details.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">• Job Location:</span>
                <span>{details.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">• Work Experience:</span>
                <span>{details.workExp}</span>
              </div>
            </div>
          </div>

          {/* Hero Right - Back Button */}
          <div className="shrink-0 self-start md:self-center">
            <Link
              href="/Carrers/positions"
              className="bg-white hover:bg-slate-100 text-[#1A194A] font-bold px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 transition-all duration-300 shadow-md"
            >
              <span>&larr;</span> Back
            </Link>
          </div>

        </div>
      </section>

      {/* 2. BODY CONTENT SECTION */}
      <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Details */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-sm space-y-10">
            
            {/* Job Description */}
            <div className="space-y-4">
              <h2 className="text-[#100D35] text-2xl font-bold font-sans">
                Job Description
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {details.description}
              </p>
            </div>

            {/* Roles and Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-[#100D35] text-2xl font-bold font-sans">
                Roles and Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-3.5 text-slate-600 text-[15px] leading-relaxed">
                {details.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <h2 className="text-[#100D35] text-2xl font-bold font-sans border-b border-slate-100 pb-3">
                Requirements
              </h2>
              
              {/* Technical Skills */}
              <div className="space-y-3">
                <h4 className="text-slate-800 text-[16px] font-bold uppercase tracking-wider font-sans">
                  Technical Skills:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-[15px] leading-relaxed">
                  {details.technicalSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="space-y-3 pt-2">
                <h4 className="text-slate-800 text-[16px] font-bold uppercase tracking-wider font-sans">
                  Soft Skills:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-[15px] leading-relaxed">
                  {details.softSkills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Application Form Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <JobApplicationForm />
          </div>

        </div>
      </section>

      {/* 3. RELATED POSITIONS SECTION */}
      <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20 mt-20 pt-16 border-t border-slate-200/60">
        
        <h2 className="text-[#100D35] text-center text-3xl md:text-4xl font-bold font-sans tracking-tight mb-12">
          Related positions open now!
        </h2>

        {/* Positions Cards Grid */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {relatedPositions.map((pos) => (
            <div
              key={pos.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[16px] border border-slate-100/85 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-[22px] font-semibold text-[#2B47FC] mb-3 leading-snug font-sans">
                  {pos.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pos.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-3 py-1.5 rounded-full border border-blue-200/50 text-[#2B47FC] font-semibold bg-blue-50/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed max-w-3xl">
                  {pos.description}
                </p>
              </div>
              <div className="flex shrink-0 self-end md:self-center">
                <Link
                  href={`/Carrers/positions/${slugify(pos.title)}`}
                  className="bg-[#2B47FC] hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                >
                  See positions <span className="text-[14px]">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Back to Careers Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/Carrers/positions"
            className="border border-slate-900 rounded-full px-8 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
          >
            Show more...
          </Link>
        </div>

      </section>

    </div>
  );
}
