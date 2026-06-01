"use client";

import React, { useState } from "react";

export default function Faq() {
    const leftFaqs = [
        {
            q: "WHAT SERVICES DOES POLEN OFFER?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "HOW CAN I START A PROJECT WITH POLEN?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "DO YOU WORK WITH INTERNATIONAL CLIENTS?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "HOW LONG DOES A PROJECT USUALLY TAKE?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "WHAT'S INCLUDED IN YOUR PRICING PLAN?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "CAN I REQUEST A CUSTOM PACKAGE?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    const rightFaqs = [
        {
            q: "HOW CAN I CONTACT POLEN?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "CAN POLEN REDESIGN AN EXISTING BRAND?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "WHAT TOOLS OR PLATFORMS DO YOU USE?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "HOW DOES THE REVISION PROCESS WORK?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "DO YOU COLLABORATE WITH AGENCIES OR FREELANCERS?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            q: "ONGOING SUPPORT AVAILABLE?",
            a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    const [activeLeft, setActiveLeft] = useState(0);
    const [activeRight, setActiveRight] = useState(0);

    return (
        <section className="relative w-full bg-white overflow-hidden py-20 px-6 sm:px-12 lg:px-24">
            <div className="relative z-10 max-w-[1240px] mx-auto w-full select-none text-left">
                
                {/* FAQ'S Tag Header Row with Divider */}
                <div className="flex items-center w-full mb-8">
                    <h3 className="text-[28px] sm:text-[34px] font-bold text-[#1E1B4B] tracking-tight uppercase font-sans">
                        FAQ'S
                    </h3>
                    <div className="flex-grow border-t border-[#AFAFAF] ml-8" />
                </div>

                {/* Main Centered Header */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl sm:text-4xl md:text-[45px] font-extrabold text-[#1E1B4B] tracking-tight uppercase font-sans">
                        Answers to what matters most.
                    </h3>
                </div>

                {/* 3-Column Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
                    
                    {/* Left Accordion Column */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {leftFaqs.map((faq, idx) => {
                            const isOpen = activeLeft === idx;
                            return (
                                <div key={idx} className="w-full transition-all duration-300">
                                    {/* Header Toggle */}
                                    <div 
                                        onClick={() => setActiveLeft(isOpen ? -1 : idx)}
                                        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 rounded-[10px] ${
                                            isOpen 
                                                ? "text-white shadow-md shadow-blue-100" 
                                                : "bg-[#FEFEFC] text-slate-800 hover:bg-slate-100/80"
                                        }`}
                                        style={isOpen ? { background: "linear-gradient(90deg, #2C2F8D 0%, #3D62E9 100%)" } : {}}
                                    >
                                        <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans pr-2">
                                            {faq.q}
                                        </span>
                                        {/* Icon Toggle */}
                                        <div className="flex-shrink-0">
                                            {isOpen ? (
                                                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs select-none">
                                                    −
                                                </div>
                                            ) : (
                                                <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs select-none">
                                                    +
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Answer body */}
                                    {isOpen && (
                                        <div className="px-2 pt-3 pb-2 text-slate-400 text-xs sm:text-[13px] font-normal leading-relaxed font-sans transition-all duration-300 animate-fadeIn">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Middle Custom Landscape Portrait Image Column */}
                    <div className="lg:col-span-4 flex justify-center w-full">
                        <div className="w-full max-w-[340px] aspect-[1/1.4] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 shadow-slate-100">
                            <img 
                                src="/Portfolio/FAQ.jpg" 
                                alt="FAQ workspace collaboration" 
                                className="w-full h-full object-cover select-none pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Right Accordion Column */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {rightFaqs.map((faq, idx) => {
                            const isOpen = activeRight === idx;
                            return (
                                <div key={idx} className="w-full transition-all duration-300">
                                    {/* Header Toggle */}
                                    <div 
                                        onClick={() => setActiveRight(isOpen ? -1 : idx)}
                                        className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 rounded-[10px] ${
                                            isOpen 
                                                ? "text-white shadow-md shadow-blue-100" 
                                                : "bg-[#FEFEFC] text-slate-800 hover:bg-slate-100/80"
                                        }`}
                                        style={isOpen ? { background: "linear-gradient(90deg, #2C2F8D 0%, #3D62E9 100%)" } : {}}
                                    >
                                        <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans pr-2">
                                            {faq.q}
                                        </span>
                                        {/* Icon Toggle */}
                                        <div className="flex-shrink-0">
                                            {isOpen ? (
                                                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs select-none">
                                                    −
                                                </div>
                                            ) : (
                                                <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs select-none">
                                                    +
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Answer body */}
                                    {isOpen && (
                                        <div className="px-2 pt-3 pb-2 text-slate-400 text-xs sm:text-[13px] font-normal leading-relaxed font-sans transition-all duration-300 animate-fadeIn">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}
