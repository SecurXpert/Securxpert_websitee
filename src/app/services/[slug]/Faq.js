"use client";

import React, { useState } from "react";

export default function Faq({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F7F9FA] py-14 text-slate-800 select-none border-b border-slate-100">
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20">
        {/* GRID WITH LEFT HEADER & IMAGE SIDE-BY-SIDE WITH QUESTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - HEADER & IMAGE */}
          <div className="md:col-span-5 flex flex-col items-start w-full">
            <div className="relative inline-flex items-center mb-4">
              <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[2px] uppercase font-sans">
                FAQS
                {/* Soft highlight bottom pill bar */}
                <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
              </span>
            </div>
            <h3 className="text-[#100D35] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.2] font-inter tracking-[-1px] mb-8 lg:mb-10">
              Frequently Asked<br />Questions
            </h3>

            {/* Collage/Illustration Image */}
            <div className="w-full rounded-[12px] overflow-hidden shadow-sm relative z-10 border border-slate-100/50">
              <img
                src="/bpo/Faq.jpg"
                alt="Frequently Asked Questions"
                className="w-full h-auto object-cover max-h-[350px] lg:max-h-[380px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE - INTERACTIVE ACCORDIONS */}
          <div className="md:col-span-7 flex flex-col gap-4 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none group transition-colors hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      {/* Bright blue Q number */}
                      <span className="text-[#3D62EB] font-bold text-base font-sans min-w-[28px]">
                        {faq.qNumber || `Q${idx + 1}.`}
                      </span>
                      <span className="text-[#100D35] font-bold text-sm sm:text-base leading-snug font-inter">
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus / Minus Indicator Icon */}
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-semibold text-lg sm:text-xl font-mono select-none transition-all duration-200 ${isOpen ? 'bg-[#3D62EB] text-white' : 'text-[#100D35] group-hover:bg-[#3D62EB]/10 group-hover:text-[#3D62EB]'}`}>
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Expandable Panel Panel Grid with Smooth CSS Height Transition */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pl-[46px] pr-8 text-[#555555] text-xs sm:text-sm leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
