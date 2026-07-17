"use client";

import React from "react";
import Link from "next/link";

export default function TeamMembers() {
  const members = [
    { id: 1, image: "/bpo/TeamMembers/member1.jpg", alt: "Team Member 1" },
    { id: 2, image: "/bpo/TeamMembers/member2.jpg", alt: "Team Member 2" },
    { id: 3, image: "/bpo/TeamMembers/member3.jpg", alt: "Team Member 3" },
    { id: 4, image: "/bpo/TeamMembers/member4.jpg", alt: "Team Member 4" },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-14 text-slate-800 select-none">
      
      {/* BACKGROUND ACCENT GRAPHICS */}
      {/* Bottom Left Stripe Accent */}
      <img
        src="/bpo/blogs/blogdesign1.png"
        alt="Bottom Left Stripe Accent"
        className="absolute bottom-[1px] left-[-14px] w-[180px] sm:w-[200px] h-auto select-none pointer-events-none z-0 hidden sm:block"
      />
      {/* Top Right Violet Accent */}
      <img
        src="/bpo/about-us/aboutus3.svg"
        alt="Top Right Accent"
        className="absolute right-12 top-[15%] w-11 h-11 pointer-events-none select-none z-0 animate-pulse hidden xl:block"
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="relative inline-flex items-center mb-4">
            <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[2px] uppercase font-sans">
              TEAM MEMBERS
              {/* Soft highlight bottom pill bar */}
              <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
            </span>
          </div>
          <h3 className="text-[#100D35] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.2] font-inter tracking-[-1px]">
            Our Awesome Creative<br />Team Member
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 mb-12 max-w-[1100px] lg:max-w-[950px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto">
          {members.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 relative z-10"
            >
              <img
                src={member.image}
                alt={member.alt}
                className="w-full h-auto aspect-[1/1] sm:aspect-[4/5] lg:aspect-[1/1] xl:aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/about-us#our-team"
            className="inline-flex bg-[#3D62EB] hover:bg-[#2C48B1] text-white font-medium px-8 py-3 rounded-[4px] text-[15px] shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 items-center justify-center gap-2 group relative z-10 cursor-pointer"
          >
            View All
            <svg
              className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
