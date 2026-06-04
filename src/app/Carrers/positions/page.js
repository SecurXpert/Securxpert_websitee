"use client";

import React, { useState } from "react";
import Link from "next/link";
import { positionsData, slugify } from "./[slug]/positionsData";

const categories = [
  { name: "All", count: 17 },
  { name: "Engineering", count: 7 },
  { name: "Product", count: 3 },
  { name: "Design", count: 1 },
  { name: "Operation", count: 4 },
  { name: "Marketing", count: 2 },
];

export default function Positions() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredPositions = activeCategory === "All"
    ? positionsData
    : positionsData.filter((pos) => pos.category === activeCategory);

  const displayedPositions = filteredPositions.slice(0, visibleCount);

  return (
    <section className="relative w-full py-24 bg-[#F8FAFC] text-slate-800 border-t border-slate-100">
      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20 pt-16">
        
        {/* Main Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-regular text-[#100D35] tracking-tight leading-tight font-sans">
            We have 17 open positions now!
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* LEFT SIDEBAR: Categories & LinkedIn */}
          <div className="lg:col-span-1 flex flex-col gap-8 lg:sticky lg:top-8">
            <div className="flex flex-col gap-4">
              {categories.map((cat, idx) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCategory(cat.name);
                      setVisibleCount(5); // Reset visible count on filter change
                    }}
                    className={`text-left text-[15px] py-1.5 transition-all duration-300 ${
                      isActive
                        ? "border-l-[3px] border-[#2B47FC] pl-4 font-semibold text-[#2B47FC]"
                        : "border-l-[3px] border-transparent pl-4 text-slate-500 hover:text-[#2B47FC] hover:border-slate-300"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                );
              })}
            </div>

            {/* LinkedIn callout box */}
            <div className="border-t border-slate-200/60 pt-8 flex flex-col gap-4">
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
              </p>
              <button className="w-full sm:w-auto self-start border border-slate-900 rounded-full px-5 py-2.5 text-xs font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Share your LinkedIn profile
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Positions List */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {displayedPositions.map((pos) => (
                <div
                  key={pos.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[16px] border border-slate-100/85 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-[22px] font-semibold text-[#2B47FC] mb-3 leading-snug font-sans">
                      {pos.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pos.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-3 py-1.5 rounded-full border border-blue-200/50 text-[#2B47FC] font-semibold bg-blue-50/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed max-w-3xl">
                      {pos.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 self-end md:self-center">
                    <Link
                      href={`/Carrers/positions/${slugify(pos.title)}`}
                      className="bg-[#2B47FC] hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                    >
                      See positions <span className="text-[14px]">→</span>
                    </Link>
                  </div>
                </div>
              ))}

              {filteredPositions.length === 0 && (
                <div className="text-center py-12 bg-white rounded-[16px] border border-slate-100 text-slate-500">
                  No open positions found in this category.
                </div>
              )}
            </div>

            {/* Show More Button */}
            {filteredPositions.length > visibleCount && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 5)}
                  className="border border-slate-900 rounded-full px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Show more...
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
