"use client";
 
import React, { useState } from "react";
 
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
    setFadeState("out");
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFadeState("in");
    }, 250);
  };
 
  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % testimonials.length;
    triggerTransition(nextIdx);
  };
 
  const handleSelect = (index) => {
    triggerTransition(index);
  };
 
  return (
    <section className="relative w-full py-20 md:py-14 bg-[#F7F9FC] text-slate-800 overflow-hidden select-none">
      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-4 md:px-20">
       
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#100D35] text-4xl md:text-5xl font-semibold font-sans tracking-tight mb-3">
            Don't just take our word for it!
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-normal font-sans">
            See the feedback from your teammates.
          </p>
        </div>
 
        {/* Main Content Area: Active Card & Preview Strips */}
        <div className="relative flex flex-col lg:flex-row items-center gap-6 w-full mt-12">
         
          {/* Card Container (Left and Center - Increased to 82% width) */}
          <div className="relative w-full lg:w-[82%] my-8 shrink-0">
           
            {/* The White Box (Underneath the photo) */}
            <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100/80 p-8 md:p-12 lg:py-14 lg:pr-14 lg:pl-[310px] min-h-[390px] flex flex-col justify-between">
             
              <div
                className={`transition-all duration-300 ease-in-out ${
                  fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {/* Large Quote Mark */}
                <div className="text-slate-200 text-6xl font-serif leading-none mb-3">
                  “
                </div>
                {/* Testimonial Quote */}
                <p className="text-slate-700 text-base md:text-[18px] leading-relaxed font-normal mb-6">
                  {active.quote}
                </p>
              </div>
             
              {/* Author & Social Info */}
              <div
                className={`flex flex-col gap-3 mt-4 transition-all duration-300 ease-in-out ${
                  fadeState === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                }`}
              >
                <div>
                  <h4 className="text-[#100D35] text-lg md:text-xl font-bold leading-tight font-sans">
                    {active.name}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium mt-1">
                    {active.role}
                  </p>
                </div>
               
                {/* LinkedIn Link */}
                <a
                  href={active.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-semibold mt-1"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn profile</span>
                </a>
              </div>
            </div>
 
            {/* Overlapping Photo (Floats on the left and overlaps on desktop) */}
            <div className="w-[90%] mx-auto md:w-[260px] lg:w-[280px] xl:w-[300px] h-[360px] md:h-[420px] lg:h-[450px] lg:absolute lg:left-[-30px] lg:top-[50%] lg:-translate-y-[50%] rounded-2xl overflow-hidden shadow-2xl z-10 mb-6 lg:mb-0">
              <img
                src={active.image}
                alt={active.name}
                className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
                  fadeState === "in" ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            </div>
 
          </div>
 
          {/* Preview Strips (Right Side, Desktop Only - Matches the height of the white box) */}
          <div className="hidden lg:flex w-[18%] gap-4 h-[390px] items-stretch self-center shrink-0">
            {nextIndices.map((idx) => {
              const item = testimonials[idx];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay that lightens on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              );
            })}
          </div>
 
        </div>
 
        {/* Bottom Pagination & Navigation */}
        <div className="flex items-center justify-between mt-8 w-full">
          {/* Left: Progress Indicator */}
          <div className="flex flex-col gap-2">
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
 
          {/* Right: Next button */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 group text-[#100D35] hover:text-blue-600 font-bold transition-colors py-2"
          >
            <span className="text-base">Next</span>
            <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
 
      </div>
    </section>
  );
}
 
 