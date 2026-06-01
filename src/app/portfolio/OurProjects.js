"use client";

import React from "react";

const projectsData = [
    {
        id: 1,
        brand: "STUDIO",
        title: "Fashion Brand",
        badge: "MID-LEVEL ADS",
        image: "/Portfolio/Projects/projects1.jpg",
    },
    {
        id: 2,
        brand: "HYNDHAV",
        title: "Astrology App",
        badge: "MID-LEVEL ADS",
        image: "/Portfolio/Projects/projects2.jpg",
    },
    {
        id: 3,
        brand: "MANYAVAR",
        title: "Jewellery App",
        badge: "MID-LEVEL ADS",
        image: "/Portfolio/Projects/projects3.jpg",
    },
    {
        id: 4,
        brand: "SHOOT ORDER",
        title: "Digital Marketing App",
        badge: "MID-LEVEL ADS",
        image: "/Portfolio/Projects/projects4.jpg",
    },
];

export default function OurProjects() {
    // Triple the list to ensure infinite seamless scrolling even on extra wide monitors
    const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData];

    return (
        <section
            style={{ background: "linear-gradient(180deg, #3D60E9 0%, #2D2F8E 100%)" }}
            className="relative w-full overflow-hidden pt-10 pb-16 lg:py-20 flex flex-col items-center justify-center text-white"
        >
            {/* Background Graphic & Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
            </div>

            {/* TOP HEADER: Outlined Giant Background Text & Centered Subtitle */}
            <div className="relative z-10 text-center w-full max-w-7xl px-6  mb-5 flex flex-col items-center justify-center select-none">
                {/* Giant Background Text */}
                <h3
                    style={{
                        color: "#FFFFFF30",
                        fontFamily: "Helvetica",
                        fontWeight: "700"
                    }}
                    className="text-[42px] sm:text-[72px] md:text-[96px] lg:text-[120px] tracking-normal leading-none select-none translate-y-0 lg:translate-y-[-50px]"
                >
                    Our Projects
                </h3>

                {/* Foreground Centered Subtitle */}
                <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-[170%] w-full flex items-center justify-center gap-2.5 md:gap-2 flex-wrap pointer-events-none mt-4 lg:mt-1">
                    <p className="text-white/90 text-sm sm:text-lg md:text-2xl font-bold tracking-normal uppercase whitespace-nowrap">
                        Everything begin with
                    </p>
                    <span
                        style={{ background: "linear-gradient(90deg, #3A56D6 0%, rgba(219, 56, 56, 0) 100%)" }}
                        className="text-white text-xs sm:text-base md:text-xl font-bold uppercase tracking-normal px-2 py-1.5 rounded-[6px] shadow-md"
                    >
                        Idea
                    </span>
                </div>
            </div>

            {/* Guaranteed Marquee Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-projects {
          animation: marqueeScroll 25s linear infinite !important;
        }
        .projects-marquee-container:hover .animate-marquee-projects {
          animation-play-state: paused !important;
        }
      `}} />

            {/* MARQUEE CAROUSEL: Scrolling right to left */}
            <div className="relative w-full overflow-hidden py-6 z-10 projects-marquee-container">
                {/* Infinite Scrolling Track */}
                <div className="flex gap-4 w-max animate-marquee-projects cursor-grab active:cursor-grabbing">
                    {duplicatedProjects.map((project, idx) => (
                        <div
                            key={`${project.id}-${idx}`}
                            className="w-[270px] sm:w-[340px] md:w-[390px] flex-shrink-0 bg-white rounded-[20px] p-3 pb-5 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 group"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Badge Overlay */}
                                <div
                                    style={{ background: "var(--color-grey-2446, #3D3D3D75)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                                    className="absolute top-4 left-4 border border-white/50 px-2 py-1 rounded-full"
                                >
                                    <span className="text-[9px] sm:text-[10px] tracking-wide uppercase text-white font-medium">
                                        {project.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Text Info Below Image */}
                            <div className="pt-5 pb-1 px-1 text-left">
                                <span className="text-[10px] sm:text-xs text-gray-600 font-normal tracking-widest uppercase block mb-1">
                                    {project.brand}
                                </span>
                                <h3 className="text-lg sm:text-xl font-normal text-gray-900 font-sans tracking-tight transition-colors duration-300 group-hover:text-[#2D46D4]">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* STATISTICS BANNER */}
            <div className="relative z-10 w-full max-w-6xl px-6 mt-12 sm:mt-16 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center w-full">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            12K
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            Project
                        </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            1.200+
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            Client
                        </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            112
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            Worker
                        </span>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            240+
                        </span>
                        <span className="bg-white text-[#2D2F8E] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-[4px] font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase shadow-md leading-none">
                            Awards
                        </span>
                    </div>
                </div>
            </div>

            {/* CTA BUTTON */}
            <div className="relative z-10 flex justify-center">
                <button className="bg-[#4262FF] hover:bg-blue-700 hover:scale-[1.03] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-10 sm:py-3 sm:px-10 rounded-full border border-white/10 shadow-[0_12px_24px_rgba(45,70,212,0.4)] transition-all duration-300 cursor-pointer">
                    View All Products
                </button>
            </div>
        </section>
    );
}
