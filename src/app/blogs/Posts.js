"use client";

import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

export default function Posts() {
    return (
        <div className="bg-white w-full">
            <section className="w-full max-w-[85%] 2xl:max-w-[1300px] mx-auto py-12 sm:py-16 md:py-14 select-none">
                
                {/* Header */}
                <h3 className="text-2xl sm:text-[32px] font-bold text-slate-900 tracking-tight mb-8 sm:mb-10 font-sans">
                    Recent blog posts
                </h3>

                {/* Posts Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 xl:gap-12 items-start">
                    
                    {/* LEFT COLUMN: Large Featured Blog */}
                    <div className="flex flex-col group cursor-pointer">
                        <img
                            src="/blogs/BlogPosts/Image (1).png"
                            alt="UX review presentations"
                            className="w-full h-[240px] sm:h-[250px] object-cover shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                        />

                        <p className="mt-6 text-[#6941C6] font-semibold font-sans text-sm sm:text-base">
                            Olivia Rhye • 1 Jan 2023
                        </p>

                        <div className="flex justify-between items-center mt-3">
                            <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors font-sans">
                                UX review presentations
                            </h3>
                            <LuArrowUpRight className="text-3xl text-slate-900 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 ml-4 flex-shrink-0" />
                        </div>

                        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed font-sans">
                            How do you create compelling presentations that wow your colleagues and impress your managers?
                        </p>

                        {/* Preserved High-Fidelity Tags */}
                        <div className="flex flex-wrap items-center gap-2 mt-6">
                            <span className="bg-[#F9F5FF] text-[#6941C6] font-semibold px-3.5 py-1.5 rounded-full text-xs tracking-wide">
                                Design
                            </span>
                            <span className="bg-[#EEF4FF] text-[#3538CD] font-semibold px-3.5 py-1.5 rounded-full text-xs tracking-wide">
                                Research
                            </span>
                            <span className="bg-[#FDF2FA] text-[#C11574] font-semibold px-3.5 py-1.5 rounded-full text-xs tracking-wide">
                                Presentation
                            </span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Stacked Smaller Blogs */}
                    <div className="flex flex-col gap-10">
                        
                        {/* Right Post Card 1 */}
                        <div className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
                            <img
                                src="/blogs/BlogPosts/Image (2).png"
                                alt="Migrating to Linear 101"
                                className="w-full sm:w-[360px] h-[220px] object-cover  flex-shrink-0 shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                            />

                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <p className="text-[#6941C6] font-semibold font-sans text-sm">
                                        Phoenix Baker • 1 Jan 2023
                                    </p>

                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 leading-snug group-hover:text-blue-600 transition-colors font-sans">
                                        Migrating to Linear 101
                                    </h3>

                                    <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed font-sans line-clamp-2">
                                        Linear helps streamline software projects, sprints, tasks and bug tracking...
                                    </p>
                                </div>

                                {/* Preserved Category Tags */}
                                <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
                                    <span className="bg-[#EEF4FF] text-[#3538CD] font-semibold px-3 py-1 rounded-full text-xs">
                                        Design
                                    </span>
                                    <span className="bg-[#FDF2FA] text-[#C11574] font-semibold px-3 py-1 rounded-full text-xs">
                                        Research
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Post Card 2 */}
                        <div className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
                            <img
                                src="/blogs/BlogPosts/Image (3).png"
                                alt="Building your API Stack"
                                className="w-full sm:w-[360px] h-[220px] object-cover  flex-shrink-0 shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                            />

                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <p className="text-[#6941C6] font-semibold font-sans text-sm">
                                        Lana Steiner • 1 Jan 2023
                                    </p>

                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 leading-snug group-hover:text-blue-600 transition-colors font-sans">
                                        Building your API Stack
                                    </h3>

                                    <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed font-sans line-clamp-2">
                                        The rise of RESTful APIs has been met by a rise in tools for creating and testing...
                                    </p>
                                </div>

                                {/* Preserved Category Tags */}
                                <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
                                    <span className="bg-[#ECFDF3] text-[#027A48] font-semibold px-3 py-1 rounded-full text-xs">
                                        Design
                                    </span>
                                    <span className="bg-[#FDF2FA] text-[#C11574] font-semibold px-3 py-1 rounded-full text-xs">
                                        Research
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Full-Width Horizontal Banner Post (Coded from user screenshot) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch mt-16 sm:mt-20 group cursor-pointer">
                    
                    {/* Left Side: Image */}
                    <img
                        src="/blogs/BlogPosts/Image (4).png"
                        alt="Grid system for better Design User Interface"
                        className="w-full lg:w-[590px] h-[240px] lg:h-[280px] object-cover shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005] flex-shrink-0"
                    />

                    {/* Right Side: Content */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                            <p className="text-[#6941C6] font-semibold font-sans text-sm sm:text-base"> 
                                Olivia Rhye • 1 Jan 2023
                            </p>

                            <div className="flex justify-between items-start mt-3">
                                <h3 className="text-xl sm:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-sans tracking-tight leading-snug">
                                    Grid system for better Design User Interface
                                </h3>
                                <LuArrowUpRight className="text-3xl text-slate-900 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 ml-4 flex-shrink-0 mt-1" />
                            </div>

                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4 font-sans">
                                A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                            </p>
                        </div>

                        {/* Category Tags */}
                        <div className="flex flex-wrap items-center gap-2 mt-6 sm:mt-0">
                            <span className="bg-[#F9F5FF] text-[#6941C6] font-semibold px-3.5 py-1.5 rounded-full text-xs tracking-wide">
                                Design
                            </span>
                            <span className="bg-[#FDF2FA] text-[#C11574] font-semibold px-3.5 py-1.5 rounded-full text-xs tracking-wide">
                                Interface
                            </span>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}
