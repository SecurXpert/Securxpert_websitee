"use client";

import React from "react";
import Link from "next/link";
export default function ServicesHero() {
    return (
        <div className="w-full bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none md:bg-white overflow-hidden text-slate-800">
            <section className="relative w-full max-w-[100%] lg:max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-0">

                {/* Soft Background Blue Glow Effect */}
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

                <div className="relative px-6 md:px-20 pt-28 sm:pt-36 lg:pt-20 xl:pt-24 pb-0 flex flex-col items-center overflow-visible bg-transparent w-full">

                    {/* High-Performance Clipped Background Image Tag */}
                    <img
                        src="/services-media/hero-bg.png"
                        alt="Services Hero Curved Background"
                        className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-2 lg:mt-3"
                    />

                    {/* Subtle glow layer overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

                    {/* Category Pill Button */}
                    <div className="relative z-10 flex justify-center mb-0 pt-2 lg:pt-11 xl:pt-24">
                        <span className="px-4 py-1 rounded-lg text-base lg:text-lg font-medium tracking-tight text-[#29257B] bg-[#D9D9D9] border border-slate-200 shadow-sm transform -translate-y-3 lg:-translate-y-5">
                            Our Services
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="relative z-10 text-center text-[28px] sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight text-white tracking-tight max-w-5xl mx-auto px-2 sm:px-6 font-inter">
                        Technology Expertise <br />
                        for a Secure Digital <span className="text-[#1CA1F2]">Future.</span>
                    </h1>

                    {/* Description */}
                    <p className="relative z-10 text-left lg:text-center mt-6 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed text-[#FFFFFF] max-w-5xl mx-auto px-6 font-normal opacity-90">
                        SecurXpert provides end-to-end digital transformation services — software development, AI automation, cloud infrastructure, and cybersecurity — built to help businesses scale securely and efficiently.
                    </p>

                    {/* Dashboard services image grid - Concentric glowing cyan glass layout cropped in the middle */}
                    <div className="relative z-10 w-screen max-w-[90vw] mt-5 lg:mt-7 overflow-hidden h-[160px] sm:h-[240px] lg:h-[320px] xl:h-[375px] px-0">
                        {/* Outer glassmorphic frame */}
                        <div className="p-2 sm:p-3 lg:p-4 rounded-t-3xl border-t border-x border-white/20 bg-white/10 backdrop-blur-md shadow-2xl h-full overflow-hidden">

                            <img
                                src="/services-media/hero.png.png"
                                alt="Our Services Dashboard Layout"
                                className="w-full h-auto rounded-t-3xl"
                            />
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}
