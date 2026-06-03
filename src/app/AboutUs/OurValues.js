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
      description: "Building smart and future-ready digital solutions.",
      icon: LuLightbulb,
    },
    {
      title: "Client Focus",
      description: "Delivering solutions tailored to business needs.",
      icon: LuUserCheck,
    },
    {
      title: "Quality",
      description: "Ensuring reliable, secure, and scalable services.",
      icon: LuGem,
    },
    {
      title: "Collaboration",
      description: "Working together with transparency and trust.",
      icon: LuHandshake,
    },
    {
      title: "Growth",
      description: "Continuously learning and improving with technology.",
      icon: LuTrendingUp,
    },
    {
      title: "Commitment",
      description: "Dedicated to excellence and long-term success.", 
      icon: LuBadgeCheck,
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-14 overflow-hidden">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        
        {/* Wavy line pattern background with title */}
        <div className="relative flex justify-center items-center mb-16 sm:mb-20 py-8">
          <img 
            src="/Services/OurServices/line pattern.svg" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] pointer-events-none select-none opacity-90 h-auto" 
            alt="" 
          />
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#060913] font-Plus Jakarta Sans tracking-tight">
            Our Core Values
          </h2>
        </div>

        {/* Values Cards Grid */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-[#F9FAFB] border border-[#E5E9F0]/80 rounded-[20px] p-8 sm:p-10 transition-all duration-300 flex flex-col items-start text-left space-y-5"
              >
                {/* Icon wrapper */}
                <div className="  flex items-center justify-center text-[#4F46E5]">
                  <Icon className="w-12 h-12  stroke-[1.8px]" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#060913] font-Plus Jakarta Sans">
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
