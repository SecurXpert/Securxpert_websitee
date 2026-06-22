"use client";

import React from "react";

export default function OurStories() {
  return (
    <section className="w-full bg-white py-16 sm:py-14 overflow-hidden">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Image containing the offset photos & blue badge */}
          <div className="w-full lg:w-[50%] flex justify-center items-center">
            <div className="relative w-full max-w-[620px] hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/AboutUs/ourstory.png"
                alt="Our Story of Innovation & Digital Growth"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Right Column: Heading & Paragraph text */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center items-start space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#3548BB] leading-[1.12] tracking-tight font-Plus Jakarta Sans">
              Our Story of<br />
              Innovation &<br />
              Digital Growth
            </h2>
            
            <p className="text-[#50656C] text-base sm:text-lg lg:text-[17px] leading-relaxed font-normal max-w-xl">
              SecurXpert started with a straightforward premise: most businesses don't lack ambition, they lack a technology partner who can move at their pace. We built the company around full-stack capability — software development, cloud, cybersecurity, AI automation, and outsourced operations — so clients get one accountable team instead of five disconnected vendors.What started as a software development practice in Hyderabad has grown into a 500+ project track record across 12+ countries, with a product portfolio of 10 in-house platforms spanning HR tech, healthcare, education, and logistics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
