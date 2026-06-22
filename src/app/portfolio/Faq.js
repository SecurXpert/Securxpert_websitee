"use client";

import React, { useState } from "react";

export default function Faq() {
    const leftFaqs = [
        {
            q: "What services does SecurXpert offer through this portfolio of work?",
            a: "Software development, UI/UX design, cloud infrastructure, AI automation, and digital marketing — delivered individually or as a combined engagement depending on what the project needs."
        },
        {
            q: "How can I start a project with SecurXpert?",
            a: "Book a free consultation through our Contact page. We'll scope your requirements and follow up with a fixed quote — no obligation."
        },
        {
            q: "Do you work with international clients?",
            a: "Yes — we deliver remotely to clients across India, the US, the UK, and the Middle East, with flexible timezone coverage."
        },
        {
            q: "How long does a project usually take?",
            a: "It depends on scope — small projects can ship in 4–8 weeks, while larger enterprise engagements typically run 3–6 months. We agree on a timeline before work begins."
        },
        {
            q: "What's included in your pricing plan?",
            a: "Pricing is scoped per project based on features and complexity — we don't use flat package pricing, since that usually means you're either overpaying or underserved."
        },
        {
            q: "Can I request a custom package?",
            a: "Yes — most of our engagements are custom-scoped rather than off-the-shelf."
        }
    ];

    const rightFaqs = [
        {
            q: "Can SecurXpert redesign an existing brand or product?",
            a: "Yes — we run audits on existing products and brands to identify what's working, what isn't, and where the highest-impact changes are."
        },
        {
            q: "What tools or platforms do you use?",
            a: "Figma, React, Next.js, Node.js, AWS, and the rest of the stack listed on our Services pages — matched to what's right for your specific project, not a fixed toolkit."
        },
        {
            q: "How does the revision process work?",
            a: "Revisions are built into each milestone, not treated as an afterthought — you review and sign off at each stage before we move to the next."
        },
        {
            q: "Do you collaborate with agencies or freelancers?",
            a: "Yes, where it makes sense for the client's existing team structure."
        },
        {
            q: "Is ongoing support available after launch?",
            a: "Yes — SLA-backed maintenance and support packages are available for every product we build or help launch."
        }
    ];

    const [activeLeft, setActiveLeft] = useState(0);
    const [activeRight, setActiveRight] = useState(0);

    return (
        <section className="relative w-full bg-white overflow-hidden py-8 px-6 sm:px-12 lg:px-24">
            <div className="relative z-10 max-w-[1240px] mx-auto w-full select-none text-left">
                
                {/* FAQ'S Tag Header Row with Divider */}
                <div className="flex items-center w-full mb-6">
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
                                src="/portfolio-media/FAQ.jpg" 
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
