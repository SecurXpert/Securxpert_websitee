"use client";

import React from "react";

const milestonesData = [
  {
    year: "2020",
    title: "Creative Excellence Award", 
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    year: "2021",
    title: "Trusted Creative Partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    year: "2022",
    title: "Successful Digital Launches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    year: "2023",
    title: "International Creative Recognition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export default function Achievements() {
  return (
    <section 
      style={{ 
        backgroundImage: "url('/portfolio-media/achievementbg.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: "scroll"
      }}
      className="relative w-full overflow-hidden py-14 px-6 sm:px-12 lg:px-24"
    >
      {/* Dark Premium Radial Overlay for Contrast */}
      <div 
        style={{ backgroundColor: "rgba(0, 0, 0, 0.64)" }}
        className="absolute inset-0 z-0 pointer-events-none" 
      />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
          
          {/* LEFT HEADER COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center select-none text-left pt-2"> 
            <span className="text-xs sm:text-sm font-semibold text-slate-300 tracking-[0.25em] uppercase block mb-4">
              Achievements
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.08] uppercase font-sans max-w-md">
              Milestones That Mark Our Growth
            </h3>
          </div>

          {/* RIGHT TIMELINE COLUMN */}
          <div className="lg:col-span-7 w-full flex flex-col pt-2 lg:-ml-10 md:-ml-5">
            {milestonesData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between gap-6 py-4 border-b border-white/10 first:pt-0 last:border-0 last:pb-0"
              >
                {/* Description block */}
                <div className="flex-grow text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider block mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-xl font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Big condensed Year */}
                <span className="text-3xl sm:text-4xl md:text-[46px] font-black text-white font-sans tracking-tighter leading-none select-none flex-shrink-0 w-24 sm:w-32 text-right">
                  {item.year}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
