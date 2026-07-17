"use client";

import React from "react";

export default function Workplace() {
  const cards = [
    {
      title: "Company Values",
      description:
        "Trust, learning, honesty, and cooperation sit at the core of how we work.",
      image: "/careers/workplace/work.1.png",
    },
    {
      title: "Friendly atmosphere",
      description:
        "A positive, respectful environment where people actually want to show up.",
      image: "/careers/workplace/work.2.png",
    },
    {
      title: "Work-life balance",
      description:
        "A healthy personal life matters as much as the hours you put in.",
      image: "/careers/workplace/work.3.png",
    },
    {
      title: "Everyday grow",
      description:
        "Real support to keep your skills moving forward, not stagnating in one role.",
      image: "/careers/workplace/work.4.png",
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-8 overflow-visible bg-[#F8FAFC] text-slate-600">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-90 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-[#090808] text-center text-5xl font-normal font-sans">
            What make Securxpert a great place to work?
          </h2>
        </div>

        {/* Grid of cards */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-4 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              style={{ background: "linear-gradient(180deg, #D8D7FF 0%, #F2F3FF 100%)" }}
            >
              {/* Image Container */}
              <div className="w-full aspect-[6/4] overflow-hidden mb-5 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-grow px-1">
                <h3 className="text-lg sm:text-xl md:text-xl font-medium text-[#090808] tracking-tight mb-3 font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed opacity-95">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
