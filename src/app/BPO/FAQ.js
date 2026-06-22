"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      qNumber: "Q1.",
      question: "What activities are involved in BPO process onboarding?",
      answer: "We map your current workflow, identify what can move to automation versus a dedicated team, set up tools and access, and run a shadow period before full handover — typically within 1–2 weeks."
    },
    {
      id: 2,
      qNumber: "Q2.",
      question: "How do you use tags or categorisation in support workflows?",
      answer: "We use tagging to organise customer queries by topic, urgency, and trend — so recurring issues get flagged for process fixes, not just repeated answers."
    },
    {
      id: 3,
      qNumber: "Q3.",
      question: "Is social media a meaningful channel for business growth?",
      answer: "Yes — done well, social integrations build customer loyalty and open targeted lead-generation channels that traditional outreach can't reach as efficiently."
    },
    {
      id: 4,
      qNumber: "Q4.",
      question: "How often should we review our digital marketing performance?",
      answer: "We recommend a weekly review of active campaigns and content, with a deeper ROI deep-dive at the end of each sprint or month."
    },
    {
      id: 5,
      qNumber: "Q5.",
      question: "What types of marketing solutions do you offer through BPO engagements?",
      answer: "SEO, paid search, social campaigns, email funnels, and analytics dashboards — integrated with your outsourced support and back-office operations where relevant."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F7F9FA] py-14 text-slate-800 select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
                src="/BPO/Faq.jpg"
                alt="Business collaboration in office meeting"
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
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      {/* Bright blue Q number */}
                      <span className="text-[#3D62EB] font-bold text-base font-sans min-w-[28px]">
                        {faq.qNumber}
                      </span>
                      <span className="text-[#100D35] font-bold text-sm sm:text-base leading-snug font-inter">
                        {faq.question}
                      </span>
                    </div>

                    {/* Plus / Minus Indicator Icon */}
                    <div className="flex-shrink-0 text-[#100D35] font-semibold text-lg sm:text-xl font-mono select-none">
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
