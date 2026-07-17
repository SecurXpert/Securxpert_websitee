"use client";

import React from "react";
import Link from "next/link";

export default function BPOServices() {
  const services = [
    {
      title: "Business Audit",
      desc: "A structured review of your current processes to identify what can be automated, outsourced, or eliminated entirely. ",
      icon: "/bpo/FeauturedServices/Symbol.svg",
      bgImage: "/bpo/FeauturedServices/Business Audit.jpg.jpeg"
    },
    {
      title: "Tax Strategy",
      desc: "Process and compliance support for finance and accounting outsourcing engagements. ",
      icon: "/bpo/FeauturedServices/Symbol3.svg",
      bgImage: "/bpo/FeauturedServices/Tax strategy.jpg.jpeg"
    },
    {
      title: "Financial Advices",
      desc: "Cost modelling and reporting support so outsourcing decisions are backed by real numbers. ",
      icon: "/bpo/FeauturedServices/Symbol (1).svg",
      bgImage: "/bpo/FeauturedServices/Financial Advice.jpg.jpeg"
    },
    {
      title: "Insurance Strategy",
      desc: "Risk-coverage guidance for outsourced operations, where relevant to your industry.",
      icon: "/bpo/FeauturedServices/Symbol4.svg",
      bgImage: "/bpo/FeauturedServices/Insurance Strategy.jpg.jpeg",
    },
    {
      title: "Start Ups",
      desc: "Lean, scalable BPO support for early-stage companies that need back-office capacity without early hires. ",
      icon: "/bpo/FeauturedServices/Symbol5.svg",
      bgImage: "/bpo/FeauturedServices/start ups.jpg.jpeg",
    },
    {
      title: "Manage Investment",
      desc: "Operational support for finance teams managing outsourced reporting and reconciliation work",
      bgImage: "/bpo/FeauturedServices/Manage investments.jpg.jpeg",
      icon: "/bpo/FeauturedServices/Symbol6.svg",
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden -mt-8 lg:mt-0 pt-2 pb-14 lg:py-14 text-slate-800">



      {/* Bottom Right Wave Shape */}
      <img
        src="/bpo/about-us/aboutus3.svg"
        alt="Bottom Right Wave"
        className="absolute right-10 bottom-5 h-[50px] w-auto  pointer-events-none select-none z-0 hidden lg:block"
      />

      {/* Bottom Right Wave Shape */}
      <img
        src="/bpo/about-us/aboutus3.svg"
        alt="Bottom Right Wave"
        className="absolute left-20 top-50 h-[50px] w-auto  pointer-events-none select-none z-0 hidden lg:block"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">

          {/* BADGE */}
          <div className="relative inline-flex items-center mb-4 pt-3">
            <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[1px] uppercase font-sans">
              Featured Services
              {/* Soft highlight bottom pill bar */}
              <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
            </span>
          </div>

          {/* HEADING */}
          <h3 className="text-[#100D35] text-3xl sm:text-4xl lg:text-[40px] leading-[1.2] font-bold tracking-[-1px] font-inter max-w-[650px] mx-auto">
            What Services We Provide To Our Customers Business
          </h3>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

          {services.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-[#F7F4F4] rounded-[8px] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-transparent hover:bg-[#3D62EB] group z-10"
            >

              {/* Hover Background Image Overlay */}
              <img
                src={item.bgImage}
                alt="Hover Background"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none z-0"
              />

              {/* Card Content Container */}
              <div className="relative z-10 flex items-start gap-5">

                {/* ICON */}
                <div className="flex-shrink-0">
                  {item.isCustomIcon ? (
                    item.iconType === "insurance" ? (
                      <svg className="w-10 h-10 text-[#3D62EB] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ) : item.iconType === "startups" ? (
                      <svg className="w-10 h-10 text-[#3D62EB] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0015.59 14.37zm0 0a6 6 0 01-7.38-5.84h4.8m2.58 5.84H21M3 21l3-3m0 0l-1.5-1.5M6 18l1.5 1.5" />
                      </svg>
                    ) : (
                      <svg className="w-10 h-10 text-[#3D62EB] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M12 9.75a3.75 3.75 0 117.5 0c0 2.072-1.68 3.75-3.75 3.75H12m0-3.75a3.75 3.75 0 10-7.5 0c0 2.072 1.68 3.75 3.75 3.75H12M12 5.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                      </svg>
                    )
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  {/* TITLE */}
                  <h3 className="text-[#0D121E] text-lg font-bold mb-2 group-hover:text-white transition-colors font-inter duration-300">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[#555555] text-sm leading-relaxed mb-4 group-hover:text-white/85 transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* LINK */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#3D62EB] text-sm font-bold hover:gap-1.5 transition-all group-hover:text-white duration-300"
                  >
                    Learn More
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
