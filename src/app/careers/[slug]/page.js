import React from "react";
import Link from "next/link";
import { LuChevronLeft, LuArrowRight } from "react-icons/lu";
import { positionsData, slugify } from "@/utils/careers/Positionsdata";

// Generate static routes for the export build
export async function generateStaticParams() {
  return positionsData.map((job) => ({
    slug: slugify(job.title),
  }));
}

export default async function PositionDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";

  // Basic un-slugify for the title if dynamic data isn't available
  let displayTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "QA Automation Engineer – Selenium with Java";

  // Find the exact job from our utils database
  const jobData = positionsData.find(pos => slugify(pos.title) === slug) || positionsData[0];
  if (jobData) {
    displayTitle = jobData.title;
  }
  const details = jobData?.details;

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 select-none pt-0">
      
      {/* Top Blue Section (Matches Products Inner Page Layout exactly) */}
      <section 
        className="relative w-full pt-32 pb-24 lg:pb-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #374FC9 0%, #2C2C88 100%)" }}
      >
       
        {/* Decorative Design Graphic */}
        <img 
          src="/Carrers/positions/design.png" 
          alt="Decorative Background" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-contain pointer-events-none z-0 translate-x-[10%]"
        />
        
        <div className="relative max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20 z-10">
          
          {/* Header Row: Title + Back Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white font-sans leading-tight">
              {displayTitle}
            </h1>
            
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-blue-700 hover:text-blue-800 hover:bg-slate-50 font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 shrink-0"
            >
              <LuChevronLeft className="w-6 h-6" /> Back
            </Link>
          </div>

          {/* Metadata Row */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[620px] gap-y-6 gap-x-12 text-white/90">
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Category - {details?.metadata?.category || "IT"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Experience - {details?.metadata?.experience || "Mid Level"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Type - {details?.metadata?.jobType || "Full Time"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">Job Location - {details?.metadata?.location || "Hyderabad (Onsite)"}</span>
            </div>
            <div className="flex items-center gap-3 mb-2  border-white/20 pl-4">
              <LuArrowRight className="w-5 h-5 opacity-80" />
              <span className="text-sm sm:text-[15px] font-medium">No of Openings - {details?.metadata?.openings || "1"}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20 py-16 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Job Details */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5">
            
            {/* Job Description */}
            <div>
              <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-2 font-sans">
                Job Description
              </h2>
              <p className="text-[14px] sm:text-base text-slate-600 leading-relaxed">
                {details?.fullDescription}
              </p>
            </div>

            {/* Roles and Responsibilities */}
            <div>
              <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-3 font-sans">
                Roles and Responsibilities
              </h2>
              <ul className="text-[14px] sm:text-base text-slate-700 space-y-2 list-none pl-1">
                {details?.roles?.map((role, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-slate-800">{role.title}:</span> {role.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-700 mb-3 font-sans">
                Requirements
              </h2>
              
              <h3 className="font-bold text-slate-800 mb-3">Technical Expertise:</h3>
              <ul className="text-[14px] sm:text-base text-slate-600 space-y-2 list-none pl-2 mb-3">
                {details?.requirements?.technical?.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <h3 className="font-bold text-slate-800 mb-3">Soft Skills:</h3>
              <ul className="text-[14px] sm:text-base text-slate-600 space-y-2 list-none pl-2">
                {details?.requirements?.soft?.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm sticky top-28">
              <form className="space-y-4">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Candidate Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Enter Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Contact Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Contact Number <span className="text-red-500">*</span></label>
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
                    <div className="bg-slate-50 px-3 py-2 border-r border-slate-200 text-sm text-slate-600 flex items-center">
                      <select className="bg-transparent outline-none cursor-pointer">
                        <option>+91</option>
                      </select>
                    </div>
                    <input type="tel" className="w-full px-3 py-2 text-sm focus:outline-none" />
                  </div>
                </div>

                {/* Experience */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Total Experience (Years) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Relevant Experience */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Relevant Experience (Years) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Current Location <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Current CTC */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Current CTC (In lakhs) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Expected CTC */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Expected CTC (In lakhs) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">LinkedIn Profile Link <span className="text-red-500">*</span></label>
                  <input type="url" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>

                {/* Technical Proficiency */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Technical Proficiency</label>
                  <textarea rows="3" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"></textarea>
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-1.5 pt-2">
                  <label className="text-[13px] text-[#7A7A7A] font-medium">Upload your Latest Resume (File Size &lt; 1MB) <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-3">
                    <input type="file" id="resume" className="hidden" />
                    <label htmlFor="resume" className="px-3 py-1.5 border border-slate-800 rounded text-xs font-medium cursor-pointer hover:bg-slate-50 transition-colors">
                      Choose file
                    </label>
                    <span className="text-xs text-slate-500">No file chosen</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full mt-6 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm hover:opacity-90"
                  style={{ backgroundColor: "#3243A4" }}
                >
                  Submit Application
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Related Positions Section */}
      <section className="relative w-full py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl lg:text-[32px] font-medium tracking-tight text-slate-900 text-center mb-12 font-sans">
            Related positions open now!
          </h2>
          
          <div className="flex flex-col gap-6">
            {positionsData.map((pos) => (
              <div 
                key={pos.id} 
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[#364BC0]">
                    {pos.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {pos.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1 text-xs font-semibold text-[#364BC0] border border-[#364BC0]/40 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed pr-4">
                  {pos.description}
                </p>
                
                <div className="flex justify-end mt-2">
                  <Link
                    href={`/careers/${slugify(pos.title)}`}
                    className="text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-90"
                    style={{ backgroundColor: "#364BC0" }}
                  >
                    See positions <span className="text-[14px]">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-6 py-2.5 text-[13px] font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-full shadow-sm transition-colors">
              Show more ...
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
