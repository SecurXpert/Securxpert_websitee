"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    title: "Hi-sphere",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Enterprise cloud and workflow orchestration platform for global teams. ",
    image: "/products/Projects/hisphere.png",
    category: "All",
    slug: "hisphere",
  },
  {
    id: 7,
    title: "Shrava 360",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "360-degree data visualisation and BI platform for executive decision-making. ",
    image: "/products/Projects/shrava360.png",
    category: "All",
    slug: "shrava360",
  },
  {
    id: 8,
    title: "OneStep Medi",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Telemedicine and pharmacy platform connecting patients with doctors and labs. ",
    image: "/products/Projects/onestepmedi.png",
    category: "All",
    slug: "onestep-medi",
  },
  {
    id: 9,
    title: "DevTalent",
    tags: "DESIGN WOK, APP DESIGN",
    desc: "Technical assessment and coding-test platform for recruiting teams. ",
    image: "/products/Projects/project6.png",
    category: "Examination platform",
    slug: "devtalent",
  },
  {
    id: 10,
    title: "Lauratek 2.0",
    tags: "DESIGN WOK, ILLUSUTRATION",
    desc: "AI-driven evolution of Lauratek with predictive analytics and modern architecture",
    image: "/products/Projects/lauratek2.0.png", 
    category: "All",
    slug: "lauratek-2-0",
  },

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



        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {filteredProjects.map((project) => {
            const isClickable = !!project.slug;
            const CardWrapper = isClickable ? Link : 'div';
            const cardProps = isClickable ? { href: `/products/${project.slug}` } : {};

            return (
              <CardWrapper 
                key={project.id}
                {...cardProps}
                className={`bg-white rounded-[24px] border border-gray-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group p-4 sm:p-5 flex flex-col ${isClickable ? 'cursor-pointer' : ''}`}
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
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#111827] mb-3 font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
                  {project.desc}
                </p>
              </div>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
