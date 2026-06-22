"use client";

import React, { useState } from "react";
import Image from "next/image";

const filterCategories = [
  "All",
  "Healthcare",
  "HR",
  "Examination platform",
  "Recruiting platform",
  "School Management",
];

const projectsData = [
  {
    id: 1,
    title: "Lens & Light Media",
    tags: "DESIGN WOK, BRANDING",
    desc: "Digital marketing and video production platform for brand growth campaigns. ",
    image: "/products/Projects/project1.png", // Reusing image from existing data if possible, or placeholder
    category: "All", 
  },
  {
    id: 2,
    title: "Grabjobz",
    tags: "DEVELOPMENT, APP DESIGN",
    desc: "AI-powered recruitment platform with smart hiring and automated outreach. ",
    image: "/products/Projects/project2.png",
    category: "HR",
  },
  {
    id: 3,
    title: "Arogya Narayan",
    tags: "BRANDING, ILLUSUTRATION",
    desc: "Hospital management and patient portal platform for healthcare providers. ",
    image: "/products/Projects/project3.png", // Adjust images as needed
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Lauratek",
    tags: "DESIGN WOK, ILLUSUTRATION",
    desc: "Business intelligence and automation platform for enterprise operations. ",
    image: "/products/Projects/project4.png",
    category: "All",
  },
  {
    id: 5,
    title: "Vishan",
    tags: "DESIGN WOK, BRANDING",
    desc: "All-in-one school administration and ERP platform for educational institutions. ",
    image: "/products/Projects/project5.png",
    category: "School Management",
  },
  {
    id: 6,
    title: "hi-sphere",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Enterprise cloud and workflow orchestration platform for global teams. ",
    image: "/products/Projects/hisphere.png",
    category: "All",
  },
  {
    id: 7,
    title: "shrava 360",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "360-degree data visualisation and BI platform for executive decision-making. ",
    image: "/products/Projects/shrava360.png",
    category: "All",
  },
  {
    id: 8,
    title: "onestepmedi",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Telemedicine and pharmacy platform connecting patients with doctors and labs. ",
    image: "/products/Projects/onestepmedi.png",
    category: "All",
  },
  {
    id: 9,
    title: "Dev Talent",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Technical assessment and coding-test platform for recruiting teams. ",
    image: "/products/Projects/project6.png",
    category: "Examination platform",
  },
  {
    id: 10,
    title: "Lauratek2.0",
    tags: "DESIGN WOK, ILLUSUTRATION",
    desc: "AI-driven evolution of Lauratek with predictive analytics and modern architecture",
    image: "/products/Projects/project7.png",
    category: "All",
  },
  {
    id: 11,
    title: "Landing Page Design",
    tags: "DESIGN WOK, BRANDING",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: "/products/Projects/project8.png",
    category: "All",
  },
  {
    id: 12,
    title: "Mobile Design",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: "/products/Projects/project9.png",
    category: "All",
  }
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section className="w-full bg-white py-16 md:py-14 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-Plus Jakarta Sans">
            Our Products
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            We have an experienced team of production and inspection personnel<br className="hidden md:block" /> to ensure quality.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-[#5B6CFF] text-white border-[#5B6CFF] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-[24px] border border-gray-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group p-4 sm:p-5 flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-[200px] md:h-[260px] relative overflow-hidden bg-gray-100 rounded-[20px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="pt-6 pb-2 px-1 md:px-2 flex flex-col flex-grow">
                <p className="text-[#A45BFF] text-xs sm:text-[13px] font-semibold tracking-wide uppercase mb-3">
                  {project.tags}
                </p>
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#111827] mb-3 font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
