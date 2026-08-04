"use client";

import React from "react";
import Link from "next/link";

export default function OurStories() {
  return (
    <section className="w-full bg-white py-16 sm:py-12 overflow-hidden -mt-10 sm:mt-0">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Column: Image containing the offset photos & blue badge */}
          <div className="w-full lg:w-[50%] flex justify-center items-center">
            <div className="relative w-full max-w-[630px] hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/about-us/ourstory.png"
                alt="Our Story of Innovation & Digital Growth"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Heading & Paragraph text */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center items-start space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#3548BB] leading-[1.12] tracking-tight font-Plus Jakarta Sans">
              Our Story of
              Innovation & Digital Growth
            </h2>

            <p className="text-[#50656C] text-base sm:text-lg lg:text-[15px] 2xl:text-[19px] leading-relaxed font-normal max-w-xl">
              SecurXpert started with a straightforward premise: most businesses don't lack ambition, they lack a technology partner who can move at their pace. We built the company around full-stack capability — software development, cloud, cybersecurity, AI automation, and outsourced operations — so clients get one accountable team instead of five disconnected vendors.
            </p>
            <p className="text-[#50656C] text-base sm:text-lg lg:text-[15px] 2xl:text-[19px] leading-relaxed font-normal max-w-xl pb-2">
              What started as a software development practice in Hyderabad has grown into a 500+ project track record across 12+ countries, with a product portfolio of 10 in-house platforms spanning HR tech, healthcare, education, and logistics.
            </p>
            <div className="pt-2">
              <Link
                href="/blogs"
                className="inline-flex bg-[#3E66F3] hover:bg-[#4F46E5] text-white font-medium px-8 py-3.5 rounded-[4px] text-[15px] sm:text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 items-center justify-center gap-2"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
