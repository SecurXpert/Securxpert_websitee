"use client";

import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-[#F7F9FA] overflow-hidden py-14 lg:py-14 text-slate-800">

      {/* Far Left Wave Shape */}
      <img
        src="/BPO/AboutUs/aboutus.svg"
        alt="Left Wave"
        className="absolute left-[-2%] xl:left-[10%] 2xl:left-[15%] top-32 h-[220px] lg:h-[260px] xl:h-[320px] w-auto pointer-events-none select-none z-0 hidden lg:block opacity-50 xl:opacity-100"
      />

      {/* Bottom Right Wave Shape */}
      <img
        src="/BPO/AboutUs/aboutus3.svg"
        alt="Bottom Right Wave"
        className="absolute right-10 bottom-5 h-[100px] w-auto pointer-events-none select-none z-0 hidden lg:block"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-16 items-center">

          {/* LEFT SIDE: IMAGE COLLAGE */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[360px] lg:h-[380px] xl:h-[410px] w-full flex items-center justify-center">

            {/* Radial sunburst backdrop behind collage */}
            <img
              src="/BPO/AboutUs/aboutus2.svg"
              alt="Backdrop Radial Rays"
              className="absolute top-[-84px] left-[-125px] lg:left-[-60px] xl:left-[-100px] 2xl:left-[-125px] w-[42%] sm:w-[38%] h-auto pointer-events-none select-none z-0"
            />

            {/* Dot Grid backdrop around lower right of collage */} 
            <img
              src="/BPO/AboutUs/a3.png"
              alt="Backdrop Dots"
              className="absolute bottom-[2%] right-[4%] w-[20%] h-auto pointer-events-none select-none z-0"
            />

            {/* Main Upper Right Image (a1.jpg) */}
            <div className="absolute top-[2%] right-[8%] w-[48%] z-10 overflow-hidden rounded-[1px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/BPO/AboutUs/a1.jpg"
                alt="Businesswomen Collaborating"
                className="w-full h-auto object-cover pointer-events-none select-none"
              />
            </div>

            {/* Overlapping Lower Left Image (a2.jpg) */}
            <div className="absolute bottom-[-30px] left-[24%] w-[35%] z-20 overflow-hidden rounded-[2px] border-[7px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/BPO/AboutUs/a2.jpg"
                alt="Team Specialists Consulting"
                className="w-full h-auto object-cover pointer-events-none select-none"
              />
            </div>

          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* ABOUT US BADGE */}
            <div className="relative inline-flex items-center mb-4 pt-3">
              <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[1px] uppercase font-sans">
                About Us
                {/* Soft highlight bottom pill bar */}
                <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
              </span>
            </div>

            {/* HEADING */}
            <h3 className="text-[#100D35] text-3xl sm:text-4xl lg:text-[32px] xl:text-4xl leading-[1.2] font-bold tracking-[-1px] font-inter mb-4 max-w-xl">
              We Are The Best Agency To Improve Your Deals.
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>

            {/* CHECKLIST ITEMS */}
            <div className="space-y-3.5 mb-6">

              {/* Check 1 */}
              <div className="flex items-center gap-2.5 group">
                <div className=" flex items-center justify-center ">
                  <svg className="w-4 h-4 text-[#3D62EB]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-[#0D121E] text-sm font-semibold group-hover:text-[#3D62EB] transition-colors font-inter">
                  Business And Consulting Agency
                </span>
              </div>

              {/* Check 2 */}
              <div className="flex items-center gap-2.5 group">
                <div className=" flex items-center justify-center ">
                  <svg className="w-4 h-4 text-[#3D62EB]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-[#0D121E] text-sm font-semibold group-hover:text-[#3D62EB] transition-colors font-inter">
                  Awards Winning Business Comapny
                </span>
              </div>

            </div>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="bg-[#3D62EB] hover:bg-[#3D62EB] text-white font-medium px-6 py-3 rounded-[4px] text-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-150 text-center"
            >
              Learn More
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
