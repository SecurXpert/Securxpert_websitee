"use client";

import React from "react";
import Link from "next/link";
const projectsData = [
  {
    id: 1,
    title: "Lens & Light Media",
    tags: "DESIGN WOK, BRANDING",
    desc: "Digital marketing and video production platform for brand growth campaigns. ",
    image: "/products/Projects/project1.png", 
    category: "All", 
    slug: "lens-light",
  },
  {
    id: 2,
    title: "Grabjobz",
    tags: "DEVELOPMENT, APP DESIGN",
    desc: "AI-powered recruitment platform with smart hiring and automated outreach. ",
    image: "/products/Projects/project2.png",
    category: "HR",
    slug: "grabjobz",
  },
  {
    id: 3,
    title: "Arogya Narayan",
    tags: "BRANDING, ILLUSUTRATION",
    desc: "Hospital management and patient portal platform for healthcare providers. ",
    image: "/products/Projects/project3.png", 
    category: "Healthcare",
    slug: "arogya-narayan",
  },
  {
    id: 4,
    title: "Lauratek",
    tags: "DESIGN WOK, ILLUSUTRATION",
    desc: "Business intelligence and automation platform for enterprise operations. ",
    image: "/products/Projects/project4.png",
    category: "All",
    slug: "lauratek",
  },
  {
    id: 5,
    title: "Vishan",
    tags: "DESIGN WOK, BRANDING",
    desc: "All-in-one school administration and ERP platform for educational institutions. ",
    image: "/products/Projects/project5.png",
    category: "School Management",
    slug: "vishan",
  },
  {
    id: 6,
    title: "hi-sphere",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Enterprise cloud and workflow orchestration platform for global teams. ",
    image: "/products/Projects/hisphere.png",
    category: "All",
    slug: "hisphere",
  },
  {
    id: 7,
    title: "shrava 360",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "360-degree data visualisation and BI platform for executive decision-making. ",
    image: "/products/Projects/shrava360.png",
    category: "All",
    slug: "shrava360",
  },
  {
    id: 8,
    title: "onestepmedi",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Telemedicine and pharmacy platform connecting patients with doctors and labs. ",
    image: "/products/Projects/onestepmedi.png",
    category: "All",
    slug: "onestep-medi",
  },
  {
    id: 9,
    title: "Dev Talent",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Technical assessment and coding-test platform for recruiting teams. ",
    image: "/products/Projects/project6.png",
    category: "Examination platform",
    slug: "devtalent",
  },
  {
    id: 10,
    title: "Lauratek2.0",
    tags: "DESIGN WOK, ILLUSUTRATION",
    desc: "AI-driven evolution of Lauratek with predictive analytics and modern architecture",
    image: "/products/Projects/project7.png",
    category: "All",
    slug: "lauratek-2-0",
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
                    <p className="text-white/90 text-sm sm:text-lg md:text-2xl font-semibold tracking-normal uppercase whitespace-nowrap">
                        Everything begin with
                    </p>
                    <span
                        style={{ background: "linear-gradient(90deg, #3A56D6 0%, rgba(219, 56, 56, 0) 100%)" }}
                        className="text-white text-sm sm:text-lg md:text-2xl font-semibold uppercase tracking-normal px-2 py-1.5 rounded-[6px] shadow-md"
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
          animation: marqueeScroll 60s linear infinite !important;
        }
        .projects-marquee-container:hover .animate-marquee-projects {
          animation-play-state: paused !important;
        }
      `}} />

            {/* MARQUEE CAROUSEL: Scrolling right to left */}
            <div className="relative w-full overflow-hidden py-4 z-10 projects-marquee-container">
                {/* Infinite Scrolling Track */}
                <div className="flex gap-4 w-max animate-marquee-projects cursor-grab active:cursor-grabbing">
                    {duplicatedProjects.map((project, idx) => {
                        const isClickable = !!project.slug;
                        const CardWrapper = isClickable ? Link : 'div';
                        const cardProps = isClickable ? { href: `/products/${project.slug}` } : {};
                        
                        return (
                        <CardWrapper
                            key={`${project.id}-${idx}`}
                            {...cardProps}
                            className={`w-[270px] sm:w-[340px] md:w-[390px] flex-shrink-0 bg-white rounded-[20px] p-3 pb-5 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 group ${isClickable ? 'cursor-pointer block' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Info Below Image */}
                            <div className="pt-5 pb-1 px-1 text-left">
                                <span className="text-[8px] sm:text-xs text-gray-600 font-normal tracking-widest uppercase block mb-1">
                                    {project.tags}
                                </span>
                                <h3 className="text-lg sm:text-lg font-normal text-gray-900 font-sans tracking-tight transition-colors duration-300 group-hover:text-[#2D46D4]">
                                    {project.title}
                                </h3>
                            </div>
                        </CardWrapper>
                    )})}
                </div>
            </div>

            {/* STATISTICS BANNER */}
            <div className="relative z-10 w-full max-w-6xl px-6 mt-12 sm:mt-16 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center w-full">
                    {/* Stat 1 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            500+
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            ProjectS
                        </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            500+
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            ClientS
                        </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            12+
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-[15px] font-bold text-white/95 tracking-widest uppercase">
                            CountrieS
                        </span>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex items-center gap-2.5">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-none">
                            98%
                        </span>
                        <span className="bg-white text-[#2D2F8E] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-[4px] font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase shadow-md leading-none">
                            Retention
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
