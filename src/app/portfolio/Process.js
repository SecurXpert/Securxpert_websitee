"use client";

import React from "react";

export default function Process() {
    const steps = [
        {
            num: "001.",
            title: "DISCOVER",
            desc: "We explore your goals, audience, and challenges to uncover clear opportunities"
        },
        {
            num: "002.",
            title: "DEFINE",
            desc: "We shape insights into strategy, concepts, and direction"
        },
        {
            num: "003.",
            title: "DESIGN",
            desc: "We design, iterate, and refine until it's functional and genuinely engaging"
        },
        {
            num: "004.",
            title: "DELIVER",
            desc: "We finalise, test, and ship — ready for launch and built for long-term impact"
        }
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden py-16 sm:py-14 px-4 sm:px-12 lg:px-24">
            <div className="relative z-10 max-w-[1240px] mx-auto w-full select-none text-left">
                
                {/* Header Section */}
                <div className="mb-12 px-2 sm:px-0">
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 tracking-[0.2em] uppercase block mb-3 font-sans">
                        HOW WE WORK
                    </span>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold text-[#1E1B4B] tracking-tight leading-none uppercase font-sans">
                        OUR CREATIVE PROCESS
                    </h3>
                </div>

                {/* Cards Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                    {steps.map((step, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#19092D] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-slate-100 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-300 group"
                        >
                            {/* Card Top Row */}
                            <div>
                                <div className="flex items-center justify-between w-full mb-3">
                                    <span className="text-sm sm:text-base font-extrabold text-white font-sans tracking-wide">
                                        {step.num}
                                    </span>
                                    
                                    {/* Neon Purple Sparkles Trio */}
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <svg className="w-3 h-3 fill-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                                        </svg>
                                        <svg className="w-3.5 h-3.5 fill-[#A855F7] group-hover:scale-125 transition-transform duration-300" viewBox="0 0 24 24">
                                            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                                        </svg>
                                        <svg className="w-3 h-3 fill-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step Title */}
                                <h3 className="text-2xl sm:text-[28px] font-black text-white uppercase tracking-normal mb-4 sm:mb-6 md:mb-12 mt-1 font-sans leading-none">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Step Description */}
                            <p className="text-[#FAF6FF] text-xs sm:text-sm font-normal leading-relaxed font-sans text-left mt-auto">
                                {step.desc}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
