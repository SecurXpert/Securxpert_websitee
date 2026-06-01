"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            subheading: "EMPOWERING DIGITAL TRANSFORMATION",
            headingLine1: "TECH",
            headingLine2: "CONSULTING",
            btn1Text: "About Company",
            btn2Text: "Our Services",
            image: "/Portfolio/Hero/hero1.png",
            playSub: "LET'S START",
            playItems: ["AI AUTOMATION", "ENTERPRISE SOLUTIONS", "DIGITAL GROWTH", "TECH CONSULTING"]
        },
        {
            subheading: "WHO WE ARE",
            headingLine1: "TECH",
            headingLine2: "TRANSFORMATION",
            btn1Text: "Explore Products",
            btn2Text: "EXPLORE Services",
            image: "/Portfolio/Hero/hero2.png",
            playSub: "INNOVATING THE FUTURE OF TECHNOLOGY",
            playItems: ["PAYMENT", "FINANCE", "DRIBBLLE", "DESIGN"]
        },
        {
            subheading: "OUR EXPERTISE",
            headingLine1: "SMART DIGITAL",
            headingLine2: "SOLUTIONS",
            btn1Text: "GET STARTED",
            btn2Text: "VIEW CASE STUDIES",
            image: "/Portfolio/Hero/hero3.png",
            playSub: "LET'S START",
            playItems: ["AI AUTOMATION", "SOFTWARE ENGINEERING", "CLOUD INFRASTRUCTURE", "DIGITAL STRATEGY"]
        }
    ];

    // Auto-rotate slides every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative min-h-[108vh] w-full overflow-hidden bg-cover bg-center flex items-center pt-24 pb-12 lg:py-0"
            style={{ backgroundImage: "url('/Portfolio/Hero/hero-bg.png')" }}
        >


            {/* 2. AUTO-SLIDING CONTENT AREA */}
            <div className="w-full max-w-[1530px] mx-auto px-6 md:px-12 lg:px-20 relative min-h-[calc(108vh-6rem)] flex items-center">
                {slides.map((slide, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className={`absolute inset-x-0 w-full px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-in-out min-h-[70vh] lg:min-h-[92vh] flex items-center justify-center ${isActive
                                    ? "opacity-100 translate-x-0 pointer-events-auto z-20"
                                    : "opacity-0 translate-x-12 pointer-events-none z-10"
                                }`}
                        >

                            {/* DESKTOP ABSOLUTE RIGHT IMAGE */}
                            <div
                                className={`hidden lg:block absolute right-[6%] lg:right-[12%] xl:right-[9%] bottom-[-6%] z-10 pointer-events-none transition-all duration-1000 delay-500 ${isActive ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-12"
                                    }`}
                            >
                                <div className="animate-floatBob">
                                    <img
                                        src={slide.image}
                                        alt={slide.headingLine2}
                                        className="max-h-[85vh] xl:max-h-[92vh] 2xl:max-h-[95vh] h-auto w-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
                                    />
                                </div>
                            </div>

                            {/* CENTERED COPY COLUMN */}
                            <div className="w-full max-w-[850px] mx-auto flex flex-col items-center text-center text-white z-20 px-4 lg:-translate-x-12 lg:translate-y-2 xl:-translate-x-20 xl:translate-y-4 transition-all duration-300">

                                {/* Active Subheading */}
                                <p
                                    className={`text-[#EBEBEB] font-semibold uppercase tracking-widest text-[12px] sm:text-[25px] mb-3 transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-4"
                                        }`}
                                    style={{ textShadow: "3px 0px 55px #FFFFFF9E" }}
                                >
                                    {slide.subheading}
                                </p>

                                {/* Big Heading with White Glow drop shadow */}
                                <h3
                                    className={`text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-semibold leading-[1.25] tracking-wide text-white mb-8 uppercase transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 -translate-y-4"
                                        }`}
                                    style={{ textShadow: "0 0 32px rgba(255, 255, 255, 0.35)" }}
                                >
                                    {slide.headingLine1}
                                    <br />
                                    {slide.headingLine2}
                                </h3>

                                {/* Custom Mockup Action Pill */}
                                <div
                                    className={`inline-flex items-center rounded-lg overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0 delay-500" : "opacity-0 -translate-y-4"
                                        }`}
                                >
                                    <Link
                                        href="/about"
                                        className="bg-white text-[#3734A9] font-bold px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-[13px] hover:bg-white/95 transition-all select-none"
                                    >
                                        {slide.btn1Text}
                                    </Link>
                                    <div className="w-9 h-9 rounded-full bg-[#0E0E0E] border border-white/25 flex items-center justify-center text-[10px] font-black text-white z-10 -mx-4 shadow-md shrink-0 select-none">
                                        OR
                                    </div>
                                    <Link
                                        href="/services"
                                        className="hover:opacity-95 text-white/90 hover:text-white font-bold pl-8 pr-8 py-3.5 sm:pl-10 sm:pr-10 sm:py-4 text-xs sm:text-[13px] transition-all select-none"
                                        style={{ background: "linear-gradient(100.32deg, #5B5B5B 0%, #404040 100%)" }}
                                    >
                                        {slide.btn2Text}
                                    </Link>
                                </div>

                                {/* MOBILE ONLY INLINE IMAGE */}
                                <div className="lg:hidden mt-10 w-full max-w-[340px] sm:max-w-[380px] mx-auto animate-[floatBob_5s_ease-in-out_infinite]">
                                    <img
                                        src={slide.image}
                                        alt={slide.headingLine2}
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                    />
                                </div>

                            </div>

                            {/* ABSOLUTE BOTTOM-LEFT PLAY BUTTON & COMPETENCIES (DESKTOP) */}
                            <div
                                className={`hidden lg:flex absolute left-6 bottom-8 xl:left-20 xl:bottom-12 items-center gap-4 z-30 transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0 delay-700" : "opacity-0 -translate-y-4"
                                    }`}
                            >
                                {/* Red Pulsing Play Button */}
                                <div className="relative flex items-center justify-center shrink-0">
                                    <div className="absolute w-12 h-12 rounded-full bg-red-600 animate-ping opacity-75"></div>
                                    <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white cursor-pointer relative z-10 shadow-lg hover:scale-105 transition-transform duration-300">
                                        <svg className="w-5 h-5 fill-current text-white translate-x-[2px]" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Play Details */}
                                <div className="flex flex-col text-left">
                                    <span className="text-[#A5B4FC] text-[16px] font-semibold tracking-wide uppercase">{slide.playSub}</span>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                                        {slide.playItems.map((item, i) => (
                                            <React.Fragment key={i}>
                                                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>}
                                                <span className="text-white/85 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">{item}</span>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE ONLY PLAY BUTTON & COMPETENCIES (BOTTOM CENTER STACKED) */}
                            <div
                                className={`lg:hidden flex flex-col items-center gap-4 mt-8 w-full z-30 transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0 delay-700" : "opacity-0 -translate-y-4"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative flex items-center justify-center shrink-0">
                                        <div className="absolute w-10 h-10 rounded-full bg-red-600 animate-ping opacity-75"></div>
                                        <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white cursor-pointer relative z-10 shadow-md">
                                            <svg className="w-4 h-4 fill-current text-white translate-x-[1px]" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[#A5B4FC] text-[20px] font-semibold tracking-widest uppercase">{slide.playSub}</span>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
                                    {slide.playItems.map((item, i) => (
                                        <React.Fragment key={i}>
                                            {i > 0 && <span className="w-1 h-1 rounded-full bg-white/40"></span>}
                                            <span className="text-white/80 text-[10px] font-medium uppercase tracking-wider">{item}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* 3. PAGINATION DOT INDICATORS */}


        </section>
    );
}
