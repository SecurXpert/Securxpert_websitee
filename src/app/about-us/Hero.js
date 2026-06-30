"use client";

import React from "react";
import Link from "next/link";
import { LuCheck, LuPhone } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="w-full bg-white relative overflow-hidden pt-20 sm:pt-16 pb-12">
      {/* Top Content Grid */}
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 relative">

          {/* Left Column: Heading */}
          <div className="w-full lg:w-[38%] flex flex-col items-start justify-center space-y-6  z-20 text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2.5 bg-[#0000000D] text-[#000000] px-5 py-2 rounded-[4px] border-l-4 border-[#3B30DB] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full border border-[#3E66F3] bg-transparent" />
              ABOUT US
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[38px] xl:text-[48px] 2xl:text-[62px] text-slate-900 leading-[1.4] tracking-tight font-Plus Jakarta Sans whitespace-nowrap">
              Building<br />
              Smarter Digital<br />
              Experiences
            </h1>
          </div>

          {/* Middle Column: Cutout Characters overlapping bottom */}
          <div className="w-full lg:w-[42%] flex justify-center items-end relative z-30 -mb-24 sm:-mb-32 lg:-mb-[260px] xl:-mb-[380px] 2xl:-mb-[380px] mt-4 lg:mt-0">
            <img
              src="/AboutUs/Aboutus.png"
              alt="SecurXpert About Us Team"
              className="h-[360px] sm:h-[540px] lg:h-[580px] xl:h-[780px] 2xl:h-[860px] w-auto object-contain select-none "
            />
          </div>

          {/* Right Column: Description & Actions */}
          <div className="w-full lg:w-[30%] flex flex-col items-start lg:items-start justify-center text-left lg:text-left space-y-6 z-20 lg:pt-7">
            {/* Get Started Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-white font-medium px-8 py-3.5 rounded-lg text-base shadow-lg shadow-[#364CC4]/20 hover:scale-105 active:scale-95 transition-all duration-200"
              style={{ background: "linear-gradient(180deg, #364CC4 0%, #2C2D89 100%)" }}
            >
              Get Started &rarr;
            </Link>

            {/* Short Paragraph Description */}
            <p className="text-slate-500 text-lg lg:text-base xl:text-lg leading-relaxed max-w-xs font-normal">
              We help businesses grow with innovative IT solutions, scalable software, and future-ready technology designed for modern enterprises.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#3E66F3] hover:bg-[#4F46E5] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#3E66F3] hover:bg-[#4F46E5] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#3E66F3] hover:bg-[#4F46E5] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Banner with Rounded/Curved Frame */}
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto mt-16 sm:mt-24 lg:mt-0 px-0 relative z-10">
        <div
          className="w-full rounded-[30px] overflow-hidden relative border border-white/40 bg-cover bg-center py-16 sm:py-20 lg:py-24 px-6 sm:px-12 md:px-16"
          style={{
            backgroundImage: "url('/AboutUs/Aboutus2.png')"
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left Side: Services & Contact Info */}
            <div className="flex flex-col items-start gap-6 w-full lg:w-auto">
              {/* Checkmark List */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-8 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-8 gap-y-3 pb-5 border-b border-white/40 w-full max-w-[550px] lg:max-w-[340px] xl:max-w-[420px] 2xl:max-w-[550px]">
                <span className="inline-flex items-center gap-2 lg:gap-1.5 xl:gap-2 text-white text-sm sm:text-base lg:text-[11px] xl:text-[13px] 2xl:text-base opacity-90 font-normal whitespace-nowrap">
                  <FaRegCircleCheck className="w-5 h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-[#3B30DB]" />
                  We Development
                </span>
                <span className="inline-flex items-center gap-2 lg:gap-1.5 xl:gap-2 text-white text-sm sm:text-base lg:text-[11px] xl:text-[13px] 2xl:text-base opacity-90 font-normal whitespace-nowrap">
                  <FaRegCircleCheck className="w-5 h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-[#3B30DB]" />
                  Cloud Solutions
                </span>
                <span className="inline-flex items-center gap-2 lg:gap-1.5 xl:gap-2 text-white text-sm sm:text-base lg:text-[11px] xl:text-[13px] 2xl:text-base opacity-90 font-normal whitespace-nowrap">
                  <FaRegCircleCheck className="w-5 h-5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-[#3B30DB]" />
                  AI Services
                </span>
              </div>

              {/* Talk to Expert call Box */}
              <div className="flex items-center gap-4 lg:gap-3 xl:gap-5 bg-[#FFFFFF05] border border-white/40 rounded-[14px] py-4 px-6 sm:px-8 lg:px-4 xl:px-6 2xl:px-8 w-full max-w-[460px] lg:max-w-[280px] xl:max-w-[360px] 2xl:max-w-[460px]">
                <div className="w-14 h-14 lg:w-11 lg:h-11 xl:w-14 xl:h-14 rounded-full bg-[#3E66F3] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <LuPhone className="w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg sm:text-xl lg:text-[13px] xl:text-xl font-normal leading-snug">Talk With Experts</span>
                  <span className="text-white/60 text-sm sm:text-base lg:text-xs xl:text-base font-normal mt-1">(+02)1972973</span>
                </div>
              </div>
            </div>

            {/* Right Side: Stats Badges (Stacked vertically one by one) */}
            <div className="flex flex-col gap-4 w-full lg:w-auto justify-center items-start lg:items-end">
              {/* Stats Card 1 */}
              <div className="flex items-center justify-between gap-8 bg-[#FFFFFF10] border border-white/40 rounded-[24px] p-3 px-12 min-w-[180px] sm:min-w-[200px] shadow-lg">
                <span className="text-white/70 text-xs sm:text-sm font-semibold max-w-[90px] whitespace-nowrap leading-tight">Happy Clients</span>
                <span className="text-white text-2xl sm:text-3xl font-bold font-space-grotesk tracking-tight">500+</span>
              </div>

              {/* Stats Card 2 */}
              <div className="flex items-center justify-between gap-8 bg-[#FFFFFF10] border border-white/40 rounded-[24px] p-3 px-10 min-w-[180px] sm:min-w-[200px] shadow-lg">
                <span className="text-white/70 text-xs sm:text-sm font-semibold max-w-[90px] whitespace-nowrap leading-tight">Projects Deliverd</span>
                <span className="text-white text-2xl sm:text-3xl font-bold font-space-grotesk tracking-tight">500k+</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
