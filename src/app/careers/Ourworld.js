"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "James Olson",
    role: "Product Designer",
    image: "/Carrers/ourworld/james.png",
    quote: "I do admire the company culture and, I like that. Visioncraft is truly the place where good attitudes have blended with proficiency. If you're going to craft something great and you have a strong eagerness to do that, Visioncraft will remove all hassles in your journey.",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Frontend Developer",
    image: "/Carrers/ourworld/bearded.png",
    quote: "Collaborating with such a talented group of engineers has elevated my work to new heights. The focus on continuous learning and the support for creative problem-solving makes every day exciting and rewarding.",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Security Analyst",
    image: "/Carrers/ourworld/man_asian.png",
    quote: "At SecurXpert, security isn't just a department—it's in our DNA. We are given the autonomy to design robust architectures and implement cutting-edge defense mechanisms. It's the ultimate playground for security specialists.",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 4,
    name: "Aaliyah Jackson",
    role: "DevSecOps Lead",
    image: "/Carrers/ourworld/woman_glasses.png",
    quote: "The remote-first culture is implemented flawlessly here. We have seamless communication, high trust, and state-of-the-art tools that allow us to deploy secure software globally without any friction.",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Backend Engineer",
    image: "/Carrers/ourworld/james.png",
    quote: "The challenges we tackle here are genuinely complex and push you to grow. Leadership is incredibly supportive, constantly ensuring we have the resources needed to build scalable and highly reliable systems.",
    linkedin: "https://linkedin.com/",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Cloud Architect",
    image: "/Carrers/ourworld/man_asian.png",
    quote: "I’ve never worked anywhere else where innovation is so deeply ingrained in everyday tasks. We are encouraged to experiment, fail fast, and eventually deploy transformative cloud solutions.",
    linkedin: "https://linkedin.com/",
  },
];

export default function Ourworld() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("in"); // "in" | "out"

  const active = testimonials[activeIndex];

  // Helper to get the next 3 indices for the vertical preview strips
  const getNextIndices = () => {
    return [
      (activeIndex + 1) % testimonials.length,
      (activeIndex + 2) % testimonials.length,
      (activeIndex + 3) % testimonials.length,
    ];
  };

  const nextIndices = getNextIndices();

  const triggerTransition = (newIndex) => {
    if (newIndex === activeIndex) return;
    setFadeState("out");
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFadeState("enter");
      setTimeout(() => {
        setFadeState("in");
      }, 50);
    }, 300);
  };

  const handleNext = () => {
    if (activeIndex >= testimonials.length - 1) return;
    const nextIdx = activeIndex + 1;
    triggerTransition(nextIdx);
  };

  const handlePrev = () => {
    if (activeIndex <= 0) return;
    const prevIdx = activeIndex - 1;
    triggerTransition(prevIdx);
  };

  const handleSelect = (index) => {
    triggerTransition(index);
  };

  return (
    <section className="relative w-full py-10 bg-[#F7F9FC] text-slate-800 overflow-hidden select-none">
      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-4 md:px-20">

        {/* Floating Left Button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`absolute left-0 lg:-left-4 xl:left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 bg-white ${activeIndex === 0
              ? "border-slate-200 text-slate-300 cursor-not-allowed"
              : "border-[#100D35] text-[#100D35] hover:bg-[#100D35] hover:text-white shadow-md hover:scale-105"
            }`}
        >
          <svg className="w-5 h-5 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Floating Right Button */}
        <button
          onClick={handleNext}
          disabled={activeIndex === testimonials.length - 1}
          className={`absolute right-0 lg:-right-2 xl:right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 bg-white ${activeIndex === testimonials.length - 1
              ? "border-slate-200 text-slate-300 cursor-not-allowed"
              : "border-[#100D35] text-[#100D35] hover:bg-[#100D35] hover:text-white shadow-md hover:scale-105"
            }`}
        >
          <svg className="w-5 h-5 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-6">
          <h2 className="text-[#090808] text-4xl md:text-5xl font-semibold font-sans tracking-tight mb-3">
            Don't just take our word for it!
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-normal font-sans">
            See the feedback from your teammates.
          </p>
        </div>

        {/* Main Content Area: Active Card & Preview Strips */}
        <div className="relative flex flex-col lg:flex-row items-center gap-3 w-full mt-4">

          {/* Card Container (Left and Center - Increased to 82% width) */}
          <div className="relative w-full lg:w-[82%] my-9 shrink-0 lg:translate-x-8 xl:translate-x-12 2xl:translate-x-60 z-10">

            {/* The White Box (Underneath the photo) */}
            <div className="w-[800px] xl:w-[800px] 2xl:w-[800px] bg-white  shadow-sm border border-slate-100/80 p-8 md:p-12 lg:py-8 lg:pr-10 lg:pl-[310px] min-h-[410px] flex flex-col justify-between">

              <div className="flex items-start gap-6 pt-2 xl:-translate-x-14 2xl:translate-x-0">
                {/* Large Quote Mark Image */}
                <div className="flex-shrink-0 mt-1">
                  <img 
                    src="/Carrers/ourworld/quotes.png"
                    alt="Quote Mark"
                    className="w-[46px] h-[50px] opacity-30"        
                  />
                </div>

                {/* Right Side Content Container */}
                <div className="flex flex-col">
                  {/* Quote Text Container */}
                  <div
                    className={`transition-all ease-in-out mb-4 ${fadeState === "in" ? "opacity-100 translate-x-0 duration-300" :
                        fadeState === "out" ? "opacity-0 -translate-x-12 duration-300" :
                          "opacity-0 translate-x-12 duration-0"
                      }`}
                  >
                    <p className="text-[#3A3C42] text-[15px] md:text-[18px] leading-[1.6]  font-normal">
                      {active.quote}
                    </p>
                  </div>

                  {/* Author & Social Info Container */}
                  <div
                    className={`flex flex-col gap-4 transition-all ease-in-out ${fadeState === "in" ? "opacity-100 translate-x-0 duration-300 delay-75" :
                        fadeState === "out" ? "opacity-0 -translate-x-12 duration-300" :
                          "opacity-0 translate-x-12 duration-0"
                      }`}
                  >
                    <div>
                      <h4 className="text-[#100D35] text-[15px] md:text-[16px] font-bold leading-tight font-sans">
                        {active.name}
                      </h4>
                      <p className="text-[#7E8299] text-[13px] md:text-[14px] font-normal mt-1">
                        {active.role}
                      </p>
                    </div>

                    {/* LinkedIn Link */}
                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0A66C2] hover:opacity-80 transition-opacity text-[13px] font-medium"
                    >
                      <svg className="w-[18px] h-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="text-[#A1A5B7]">LinkedIn profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Photo (Floats on the left and overlaps on desktop) */}
            <div className="w-[90%] mx-auto md:w-[260px] lg:w-[290px] xl:w-[300px] h-[360px] md:h-[420px] lg:h-[350px] lg:absolute lg:left-[-100px] lg:top-[50%] lg:-translate-y-[50%] overflow-hidden shadow-2xl z-10 mb-4 lg:mb-0">
              <img
                src={active.image}
                alt={active.name}
                className={`w-full h-full object-cover transition-all ease-in-out ${fadeState === "in" ? "opacity-100 translate-x-0 duration-500" :
                    fadeState === "out" ? "opacity-0 -translate-x-full duration-300" :
                      "opacity-0 translate-x-full duration-0"
                  }`}
              />
            </div>

          </div>

          {/* Preview Strips (Right Side, Desktop Only - Matches the height of the white box) */}
          <div className="hidden lg:flex w-[18%] gap-1 h-[390px] items-stretch self-center shrink-0 xl:translate-x-7 2xl:translate-x-[-40px]">
            {nextIndices.map((idx) => {
              const item = testimonials[idx];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className="flex-1 rounded-md overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300 ease-out"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300" />
                </div>
              );
            })}
          </div>

        </div>
        {/* Bottom Pagination & Navigation */}
        <div className="flex items-center justify-between mt-0 w-full px-2">


          {/* Center: Progress Indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-400 text-sm font-semibold">
              {activeIndex + 1}/{testimonials.length} Testimonials
            </span>
            {/* Progress Bar Track */}
            <div className="w-[100px] h-[3px] bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#100D35] rounded-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


