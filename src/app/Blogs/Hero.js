"use client";

import React, { useState } from "react";

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState("");

    // Blog Categories based on the C:\Users\chekuri vamsikrishna\Downloads\Securxpert_websitee\public\Blogs\hero assets
    const categories = [
        { id: 1, label: "HEALTH", image: "/Blogs/hero/hero1.jpg" },
        { id: 2, label: "TECH", image: "/Blogs/hero/hero2.jpg" },
        { id: 3, label: "BUSSINESS", image: "/Blogs/hero/hero3.jpg" },
        { id: 4, label: "DESIGN", image: "/Blogs/hero/hero4.jpg" },
        { id: 5, label: "TECHNOLOGY", image: "/Blogs/hero/hero5.jpg" },
        { id: 6, label: "TRAVEL", image: "/Blogs/hero/hero6.jpg" },
    ];

    // Double the array for seamless infinite looping
    const marqueeItems = [...categories, ...categories, ...categories];

    return (
        <div className="bg-white overflow-hidden text-white select-none">
            {/* Infinite Marquee & Floating Arrow Keyframes */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 28s linear infinite;
                }
            `}</style>

            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-16">

                {/* Curved Container Wrapper */}
                <div className="relative px-6 md:px-20 pt-28 sm:pt-35 pb-20 sm:pb-20 flex flex-col items-center justify-center bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none rounded-[24px] overflow-hidden">

                    {/* Clipped Background Image Graphic */}
                    <img
                        src="/Blogs/hero/blogs-herobg.png"
                        alt="Curved Blog Hero Background"
                        className="hidden md:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-6 md:mt-6 rounded-[24px]"
                    />

                    {/* Subtle Overlay Grid Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none z-0" />

                    {/* Centered Contents */}
                    <div className="w-full max-w-4xl mx-auto text-center z-10 flex flex-col items-center relative transform translate-y-4 sm:translate-y-6">

                        {/* Title */}
                        <h3 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[45px] font-semibold leading-[1.3] text-white tracking-wide font-sans">
                            Hey, We’re <span className="text-white">Blogxpress.</span> See Our <br className="hidden sm:inline" />
                            Thoughts, Stories And Ideas.
                        </h3>

                        {/* Search Bar Capsule */}
                        <div className="w-full max-w-[520px] mt-7 bg-white p-1 rounded-2xl shadow-xl border border-slate-100 flex items-center relative transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent pl-3 pr-10 py-2.5 sm:py-2.5 text-[15px] font-semibold text-slate-800 placeholder-slate-400 focus:outline-none font-sans"
                            />
                            <button className="absolute right-1.5 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-all active:scale-95 duration-150">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* Infinite Scrolling Category Slider Row */}
                    <div className="w-full max-w-[1240px] mx-auto mt-24 md:mt-26 relative z-10 px-4 select-none group">

                        {/* Floating Left Arrow Button */}
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-600 shadow-md transition-all active:scale-90 z-20">
                            <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Scrolling Viewport Container */}
                        <div className="w-full overflow-hidden">
                            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] transition-all duration-300 w-max">
                                {marqueeItems.map((item, index) => (
                                    <div
                                        key={`${item.id}-${index}`}
                                        className="relative w-[230px] h-[145px] sm:w-[260px] sm:h-[165px] rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer group/card transition-transform duration-300 hover:scale-[1.03] border border-white/10"
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.label}
                                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                                        />

                                        {/* Overlay Shadow */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                                        {/* Category Name Pill inside Glass container */}
                                        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-[3px] border border-white/50 px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black text-slate-800 tracking-[0.12em] shadow-sm select-none">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Right Arrow Button */}
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-600 shadow-md transition-all active:scale-90 z-20">
                            <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>

                </div>

            </section>
        </div>
    );
}
