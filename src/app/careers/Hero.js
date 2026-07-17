"use client";

import React from "react";
import Link from "next/link";

export default function CareersHero() {
    return (
        <div className="w-full bg-gradient-to-r from-[#172E9D] to-[#2541C5] lg:bg-none lg:bg-white overflow-hidden text-slate-800">

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
      `}} />

            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-6 pb-0 sm:py-6 overflow-visible">

                {/* Soft Background Blue Glow Effect */}
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

                <div className="relative px-6 md:px-20 pt-24 sm:pt-32 lg:pt-16 xl:pt-12 2xl:pt-20 pb-0 flex flex-col lg:flex-row items-center justify-between overflow-visible bg-transparent w-full min-h-[480px] lg:min-h-[580px] xl:min-h-[450px] 2xl:min-h-[640px]">

                    {/* High-Performance Clipped Background Image Tag matching Blogs Hero height and width */}
                    <img
                        src="/blogs/hero/blogs-herobg.png"
                        alt="Careers Hero Curved Background"
                        className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-6 lg:mt-1 rounded-[30px]"
                    />

                    {/* Subtle glow layer overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

                    {/* Left Column: Careers Dynamic Messaging & Call to Action */}
                    <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:space-y-7 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 pb-12 lg:pb-20 xl:pb-12 2xl:pb-20 max-w-5xl">

                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight font-sans pt-4 lg:pt-8">
                            Join The Team
                        </h1>

                        <p className="text-white text-sm sm:text-base lg:text-md xl:text-xl leading-relaxed tracking-wider font-normal opacity-90 max-w-3xl">
                            SecurXpert is an employee-centred company — we give people autonomy to make decisions, invest in self-development, and back career growth with real opportunity, not just a mission statement. We're always looking for talented people who want to build, not just maintain. 
                        </p>

                        {/* Open Positions Button */}
                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="#positions"
                                className="bg-[#3E66F3] hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg transition-all active:scale-95 duration-150 flex items-center gap-2"
                            >
                                <span>View Open Positions</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    {/* Right Column: Floating Assets and Careers Character Portrait */}
                    <div className="relative z-10 w-full lg:w-1/2 h-[260px] sm:h-[420px] lg:h-[490px] xl:h-[400px] 2xl:h-[502px] flex items-end justify-center overflow-visible -mt-6 sm:mt-0">
                        {/* Main Character Careers Portrait sitting gracefully on the curve bottom */}
                        <img
                            src="/careers/hero.png"
                            alt="Join The Team - Securxpert Careers"
                            className="relative lg:absolute z-10 w-auto h-full lg:h-[148%] xl:h-[125%] 2xl:h-[120%] max-h-[300px] sm:max-h-[400px] lg:max-h-none object-contain object-bottom pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02] translate-y-0 sm:translate-y-4 lg:translate-y-16 lg:right-[14px] xl:translate-y-[52px] 2xl:translate-y-8 xl:right-[-10px] bottom-0 right-0"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
