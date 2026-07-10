"use client";

import React from "react";

export default function WhyChooseUs() {
    return (
        <section className="relative w-full bg-white overflow-hidden py-14 px-6 sm:px-12 lg:px-24">
            <div className="relative z-10 max-w-[1140px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-5 flex flex-col justify-start select-none text-left lg:pl-16 md:pl-8">
                        <span className="text-[15px] sm:text-[16px] font-extrabold text-[#1E1B4B] tracking-wider block mb-2 font-sans uppercase">
                            Why Choose Us
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-[45px] font-normal text-slate-950 tracking-wider leading-[1.08] font-sans mb-8 max-w-md">
                            We Use Our <br className="hidden sm:inline" /> Experience To <br className="hidden sm:inline" /> Get Results,not just deliverables
                        </h3>

                        {/* CTA Button */}
                        <button className="bg-black hover:bg-slate-900 text-white font-semibold tracking-wider text-xs sm:text-sm py-3.5 px-7 rounded-full flex items-center justify-center gap-2 cursor-pointer uppercase transition-all duration-300 w-fit mb-16 shadow-[0_6px_12px_rgba(0,0,0,0.08)]">
                            Learn More
                            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                        </button>

                        {/* Feature Cards Stack */}
                        <div className="flex flex-col gap-5 max-w-sm w-full">

                            {/* Card 1: Our Philosophy */}
                            <div className="bg-[#EFF3F6] border border-[#74747475] rounded-[14px] p-6 shadow-sm">
                                <h4 className="text-[#19092D] font-normal text-[18px] sm:text-[20px] mb-1.5 font-sans">
                                    Our Philosophy
                                </h4>
                                <p className="text-slate-500 text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                                    We treat every engagement like a long-term partnership, not a one-off ticket — which is why most of our work comes from repeat clients and referrals
                                </p>
                            </div>

                            {/* Card 2: Our Goals */}
                            <div className="bg-[#EFF3F6] border border-[#74747475] rounded-[14px] p-6 shadow-sm">
                                <h4 className="text-[#19092D] font-normal text-[18px] sm:text-[20px] mb-1.5 font-sans">
                                    Our Goals
                                </h4>
                                <p className="text-slate-500 text-sm sm:text-[15px] font-normal leading-relaxed font-sans">
                                    Ship work that's measurably better for the business, not just visually polished for a portfolio
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 w-full flex flex-col justify-start text-left pl-0 lg:pl-6 h-full">

                        {/* Top Text Content */}
                        <div className="w-full">
                            <p className="text-slate-800 text-base sm:text-[21px] font-normal leading-relaxed mb-5 font-sans">
                                We're a technology team that specialises in software engineering, product design, and digital growth. Our team works closely with clients to deliver solutions built around their specific operational needs — not a templated package resold to everyone
                            </p>

                            {/* Divider Line */}
                            <div className="border-b border-slate-200 pb-5 mb-5" />


                        </div>

                        {/* Bottom Image Showcase */}
                        <div className="w-full flex-1 min-h-[300px] rounded-[20px] overflow-hidden shadow-lg shadow-slate-100 border border-slate-100">
                            <img
                                src="/portfolio-media/WhyChooseUs.jpg"
                                alt="Our Collaborative Workspace"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
