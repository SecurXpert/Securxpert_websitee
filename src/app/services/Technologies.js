"use client";

import React from "react";

const techCategories = [
    {
        title: "Languages & Frameworks",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Node.js"]
    },
    {
        title: "Backend Technologies",
        techs: ["PHP", "Python", "Express.js", "Laravel"]
    },
    {
        title: "Databases",
        techs: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
        title: "CMS Platforms",
        techs: ["WordPress", "Drupal", "Strapi", "Shopify"]
    },
    {
        title: "Cloud & Hosting",
        techs: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
    }
];

export default function Technologies() {
    return (
        <section 
            className="relative w-full py-14 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
            style={{
                background: "linear-gradient(180deg, #24145C 0%, #364BC2 81.41%, #3A58D9 100%)"
            }}
        >
            {/* Header Block */}
            <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white font-sans">
                    Our Technology Stack
                </h3>
            </div>

            {/* Responsive Columns Grid (5 columns on desktop, responsive breakdown on tablet/mobile) */}
            <div className="relative max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
                {techCategories.map((category, index) => (
                    <div key={index} className="flex flex-col">
                        {/* Title - min-h-[48px] forces perfect horizontal alignment across columns on large viewports */}
                        <h3 className="text-white/90 text-center font-semibold text-base sm:text-lg mb-6 tracking-wide min-h-[48px] flex items-center justify-center font-sans">
                            {category.title}
                        </h3>

                        {/* List of capsule shape pills */}
                        <div className="flex flex-col space-y-4">
                            {category.techs.map((tech, techIdx) => (
                                <div
                                    key={techIdx}
                                    className="w-full bg-[#F7F9FFCC] text-[#271D6D] text-base font-semibold rounded-2xl py-3.5 px-4 text-center shadow-[0_4px_15px_rgba(0,0,0,0.12)] hover:scale-105 hover:bg-[#C5D5FA] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-98 transition-all duration-300 select-none cursor-pointer flex items-center justify-center min-h-[56px] font-sans tracking-wide"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
