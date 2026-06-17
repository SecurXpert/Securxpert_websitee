"use client";

import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#2C2F8E] to-[#3466DA] py-14 md:py-20 text-white z-10">
      
      {/* Background Curve Left */}
      <img
        src="/BPO/cta/cta.svg"
        alt="Curve Backdrop Left"
        className="absolute left-[-5rem] top-[5rem] w-[420px] h-auto opacity-[0.15] pointer-events-none select-none z-0 hidden md:block rotate-210"
      />

      {/* Background Curve Right */}
      <img
        src="/BPO/Cta/cta.svg"
        alt="Curve Backdrop Right"
        className="absolute right-[-2rem] bottom-[8rem] w-[340px] h-auto opacity-[0.15] pointer-events-none select-none z-0 hidden md:block"
      />
      {/* Background Curve Right */}
      <img
        src="/BPO/Cta/cta.svg"
        alt="Curve Backdrop Right"
        className="absolute left-[10rem] bottom-[16rem] w-[120px] h-auto opacity-[0.15] pointer-events-none select-none z-0 hidden md:block rotate-250"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-left relative z-10 max-w-2xl">
          <h3 className="text-white text-3xl sm:text-4xl md:text-[38px] leading-[1.2] font-bold tracking-[-1px] font-inter mb-4">
            Let's discuss how can we help make your Business better
          </h3>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy
          </p>
        </div>
 
        {/* RIGHT BUTTON */} 
        <div className="relative z-10 flex-shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-70 text-[#3D62EB] font-medium text-sm sm:text-base px-8 py-3.5 rounded-[6px] shadow-lg active:scale-95 transition-all duration-150 text-center font-inter"
          >
            Let's Together Quotes
          </Link>
        </div>

      </div>
    </section>
  );
}
