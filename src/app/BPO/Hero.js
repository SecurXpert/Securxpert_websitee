"use client";

import React from "react";
import Link from "next/link";

export default function BPOHero() {
    return (
        <div className="w-full bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none md:bg-white overflow-hidden text-slate-800">

            {/* Dynamic Keyframe Animations for Breathtaking Floating Effects */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(12px) scale(1.02); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.03); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        @keyframes drawConnectivity {
          0% { clip-path: inset(0 0 0 100%); opacity: 0; }
          15% { opacity: 0.9; }
          50% { clip-path: inset(0 0 0 0); opacity: 0.9; }
          85% { clip-path: inset(0 0 0 0); opacity: 0.9; }
          100% { clip-path: inset(0 100% 0 0); opacity: 0; }
        }
        .animate-draw-arrow {
          animation: drawConnectivity 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />

            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-0 overflow-visible">

                {/* Soft Background Blue Glow Effect */}
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

                <div className="relative px-6 md:px-20 pt-28 sm:pt-36 lg:pt-20 xl:pt-24 pb-0 flex flex-col lg:flex-row items-center justify-between overflow-visible bg-transparent w-full min-h-[500px] lg:min-h-[700px] xl:min-h-[800px]">

                    {/* High-Performance Clipped Background Image Tag */}
                    <img
                        src="/services-media/hero-bg.png"
                        alt="BPO Hero Curved Background"
                        className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-2 lg:mt-3"
                    />

                    {/* Subtle glow layer overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

                    {/* Left Column: BPO Dynamic Messaging & Video Play Call to Action */}
                    <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:space-y-7 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 pb-12 lg:pb-20 max-w-5xl">

                        {/* Category Pill Button */}
                        <div className="relative z-10 flex justify-start mb-1 pt-6 lg:pt-8 xl:pt-10">
                            <span className="px-4 py-1 rounded-lg text-sm sm:text-base font-medium tracking-tight text-[#29257B] bg-[#D9D9D9] border border-slate-200 shadow-sm">
                                BPO Services
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[40px] xl:text-[46px] 2xl:text-6xl font-semibold text-white leading-tight font-inter">
                            Keeping You <br className="hidden sm:block" />
                            Connected Wherever <br className="hidden sm:block" />
                            You Are!
                        </h1>

                        <p className="text-white text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed tracking-wide font-normal opacity-90 max-w-lg">
                            In a rapidly evolving digital landscape, businesses aren't just looking to cut operational costs — they're looking to work smarter. SecurXpert's BPO services combine automation-first thinking with hands-on human expertise, so your back office runs lighter without losing quality. 
                        </p>

                        {/* Custom Interactive Button Group */}
                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="#appointment"
                                className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-medium px-6 py-2.5 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-blue-500/50 hover:shadow-xl hover:scale-105 transition-all active:scale-95 duration-300 block text-center"
                            >
                                Talk to us Today
                            </Link>
                            <Link
                                href="/contact"
                                className="w-10 h-10 rounded-lg bg-white hover:bg-blue-600 flex items-center justify-center text-blue-600 hover:text-white shadow-lg hover:shadow-blue-500/50 hover:shadow-xl hover:scale-105 transition-all active:scale-95 duration-300"
                            >
                                <svg className="w-7 h-7 fill-current ml-0.5" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    {/* Right Column: Floating Assets and BPO Character Portrait */}
                    <div className="relative z-10 w-full lg:w-1/2 h-[350px] sm:h-[480px] lg:h-[520px] xl:h-[580px] flex items-end justify-center overflow-visible mt-8 lg:mt-0">

                        {/* Dashed Loop Arrow Background Shape */}
                        <img
                            src="/BPO/hero/arrow-banner-shape.png.svg"
                            alt="Dashed Loop Arrow"
                            className="absolute top-12 lg:top-20 xl:top-24 2xl:top-12 right-6 sm:right-16 w-50 sm:w-70 lg:w-48 xl:w-56 2xl:w-70 h-auto opacity-80 z-0 pointer-events-none hidden sm:block animate-draw-arrow"
                        />

                        {/* Flags Floating Widget */}
                        <img
                            src="/BPO/hero/hero-3.png"
                            alt="Global Dialing Codes"
                            className="absolute top-[-12px] sm:top-2 left-2 sm:left-12 lg:left-0 xl:left-8 2xl:left-0 w-[110px] sm:w-48 xl:w-48 2xl:w-56 h-auto z-20 shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-300 pointer-events-none animate-float-slow"
                        />

                        {/* Jhon Smith Floating Profile Widget */}
                        <img
                            src="/BPO/hero/hero-2.png"
                            alt="Jhon Smith Profile Widget"
                            className="absolute top-28 sm:top-auto sm:bottom-32 lg:bottom-44 xl:bottom-48 right-[-8px] sm:right-12 lg:right-[-35px] xl:right-[-40px] 2xl:right-[-65px] w-[105px] sm:w-48 xl:w-52 2xl:w-64 h-auto z-20 hover:scale-105 transition-transform duration-300 pointer-events-none animate-float-delayed"
                        />

                        {/* Main Character BPO Portrait sitting gracefully on the curve bottom */}
                        <img
                            src="/BPO/hero/BP0-hero1.png"
                            alt="BPO Support Specialist"
                            className="relative z-10 w-auto h-[90%] sm:h-[95%] lg:h-full max-h-[320px] sm:max-h-[460px] lg:max-h-[500px] xl:max-h-[560px] object-contain object-bottom pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02] translate-y-2 sm:translate-y-6 lg:translate-y-12 xl:translate-y-24"
                        />

                    </div>

                </div>
            </section>

        </div>
    );
}
