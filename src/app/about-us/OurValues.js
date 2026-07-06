"use client";

import React from "react";
import { 
  LuLightbulb, 
  LuUserCheck, 
  LuGem, 
  LuHandshake, 
  LuTrendingUp, 
  LuBadgeCheck 
} from "react-icons/lu";

export default function OurValues() {
  const values = [
    {
      title: "Innovation",
      description: "Building smart, future-ready digital solutions, not just maintaining what already exists. ",
      icon: LuLightbulb,
    },
    {
      title: "Client Focus",
      description: "Delivering solutions shaped around your business needs, not a one-size-fits-all template",
      icon: LuUserCheck,
    },
    {
      title: "Quality",
      description: "Reliable, secure, and scalable services — every time, not just on the showcase projects. ",
      icon: LuGem,
    },
    {
      title: "Collaboration",
      description: "Working with transparency and trust, both internally and with every client. ",
      icon: LuHandshake,
    },
    {
      title: "Growth",
      description: "Continuously learning and improving alongside the technology we work with. ",
      icon: LuTrendingUp,
    },
    {
      title: "Commitment",
      description: "Dedicated to long-term outcomes, not just project sign-off.",
      icon: LuBadgeCheck,
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-10 overflow-hidden">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        
        {/* Wavy line pattern background with title */}
        <div className="relative flex justify-center items-center mb-8 sm:mb-10 py-4">
          <img 
            src="/services-media/OurServices/line pattern.svg" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] pointer-events-none select-none opacity-90 h-auto" 
            alt="" 
          />
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#060913] font-Plus Jakarta Sans tracking-tight">
            Our Core Values
          </h2>
        </div>

        {/* Values Cards Grid */}
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group border border-slate-200/60 border-b-4 border-b-transparent hover:border-b-[#4F46E5] rounded-[20px] p-6 sm:p-6 transition-all duration-300 flex flex-col items-start text-left space-y-5 hover:shadow-lg hover:-translate-y-1"
                style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)" }}
              >
                {/* Icon wrapper */}
                <div className="  flex items-center justify-center text-[#4F46E5]">
                  <Icon className="w-12 h-12  stroke-[1.8px]" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#060913] font-Plus Jakarta Sans">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
