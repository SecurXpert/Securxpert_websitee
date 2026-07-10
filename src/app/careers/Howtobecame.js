"use client";

import React from "react"; 

const steps = [
  {
    number: "01",
    title: "Find a role that suits you",
    description: "Browse open positions on our website or social channels.", 
    align: "right",
    isActive: true,
  },
  {
    number: "02",
    title: "Send your application",
    description: "A few simple questions and your contact details.", 
    align: "left",
  },
  {
    number: "03",
    title: "Receive your interview invite",
    description: "We review applications within 3 working days.", 
    align: "right",
  },
  {
    number: "04",
    title: "Choose an interview slot",
    description: "A friendly conversation with your future manager about the role, the work, and what to expect.",
    align: "left",
  },
  {
    number: "05",
    title: "Technical assessment",
    description: " A short, practical exercise reflecting real work, not trick questions.",
    align: "right",
  },
  {   
    number: "06",
    title: "Meet the team",
    description: "Time with the people you'd actually be working alongside.",
    align: "left",
  },
  {
    number: "07",
    title: "Final Interview",
    description: "A conversation with leadership before any offer goes out.",
    align: "right",
  },
];

export default function Howtobecame() {
  return (
    <section className="relative w-full py-16 md:py-14 bg-[#FFFFFF60] overflow-hidden text-slate-800">

      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/20 via-transparent to-transparent pointer-events-none" /> 

      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-4 md:px-20"> 

        {/* Section Header */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-[#090808] text-center text-5xl font-normal mb-4 font-sans"> 
            How to become a SecurXperter?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"> 
            Joining us couldn't be easier! Check out our application process down below. If you have the talent we need, then we'll be meeting you soon!
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative w-full max-w-5xl mx-auto py-8">

          {/* Vertical Line (Desktop: center; Mobile: left aligned with circles) */}
          <div className="absolute left-[50%] top-[60px] bottom-[60px] w-[2px] bg-slate-200/80 -translate-x-[50%] hidden lg:block" /> 
          <div className="absolute left-[43px] top-[60px] bottom-[60px] w-[2px] bg-slate-200/80 lg:hidden" /> 

          {/* Timeline Items */}
          <div className="flex flex-col gap-2"> 
            {steps.map((step, idx) => {
              const isLeft = step.align === "left";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
              return (
                <div
                  key={idx}
                  className="relative flex flex-row lg:flex-row items-start lg:items-center justify-start lg:justify-center mb-10 lg:mb-2 last:mb-0 group cursor-default"
                >
                  {/* Left Side Content (Desktop Only: aligned right) */}
                  <div className={`hidden lg:block w-[42%] px-6 text-right ${!isLeft ? "lg:opacity-0 lg:pointer-events-none" : ""}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-[#090808] mb-2 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md ml-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node / Circle */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center w-[54px] h-[54px] rounded-full bg-white border-2 border-slate-100 group-hover:border-transparent transition-colors duration-300 shadow-md mx-4 lg:mx-8 cursor-pointer">
                    
                    {/* Hover Blue Background & Glow */}
                    <div className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    
                    <span className="text-lg sm:text-xl font-bold transition-colors duration-300 z-10 text-slate-500 group-hover:text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Right Side Content (Desktop: active for isRight; Mobile: active for all) */}
                  <div className={`w-full lg:w-[42%] px-6 text-left ${isLeft ? "lg:opacity-0 lg:pointer-events-none" : ""}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md"> 
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Bottom Target Node: Start a new journey! */}
            <div className="relative flex flex-row lg:flex-row items-start lg:items-center justify-start lg:justify-center mt-6">
              {/* Left Side (Desktop Only) */}
              <div className="hidden lg:block w-[42%] px-6 text-right">
                <h3 className="text-xl font-bold text-slate-800 font-sans">
                  Start a new journey!
                </h3>
              </div>

              {/* Center Node */}
              <div className="relative z-10 flex shrink-0 items-center justify-center w-[54px] h-[54px] rounded-full bg-white border-2 border-slate-100 shadow-md mx-4 lg:mx-8">
                <span className="text-2xl" role="img" aria-label="handshake">🤝</span>
              </div>

              {/* Right Side (Mobile Only Title & Desktop Spacer) */}
              <div className="w-full lg:w-[42%] px-6 text-left lg:opacity-0 lg:pointer-events-none">
                <h3 className="text-xl font-bold text-slate-800 lg:hidden block font-sans">
                  Start a new journey!
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
