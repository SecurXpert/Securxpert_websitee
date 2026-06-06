"use client";

import React from "react";

export default function HomeServices() {
    const services = [
        {
            title: "Software Development",
            desc: "Scalable Software Solutions for Business Growth",
            img: "/Home/OurServices/Services.1.png",
            gridClass: "md:col-span-7 aspect-[16/9.5] w-full",
        },
        {
            title: "AI Automation",
            desc: "Smart Automation for Business Efficiency",
            img: "/Home/OurServices/Services.2.png",
            gridClass: "md:col-span-5 aspect-[16/13.3] w-full",
        },
        {
            title: "Cloud & Devops",
            desc: "Secure Cloud & DevOps Services",
            img: "/Home/OurServices/Services.3.png",
            gridClass: "md:col-span-5 aspect-[16/11.5] w-full",
        },
        {
            title: "CyberSecurity",
            desc: "Advanced Protection for Modern Businesses",
            img: "/Home/OurServices/Services.4.png",
            gridClass: "md:col-span-4 aspect-[16/14.5] w-full",
        },
        {
            title: "Managed IT Services",
            desc: "Reliable IT Support & Management",
            img: "/Home/OurServices/Services.5.png",
            gridClass: "md:col-span-3 aspect-[16/19.5] w-full",
        },
        {
            title: "UI/UX Design",
            desc: "Modern Designs for Better User Experience",
            img: "/Home/OurServices/Services.6.png",
            gridClass: "md:col-span-4 aspect-[16/14.5] w-full",
        },
        {
            title: "IT Staffing",
            desc: "Skilled IT Talent for Your Business",
            img: "/Home/OurServices/Services.7.png",
            gridClass: "md:col-span-8 aspect-[16/7.2] w-full",
        },
        {
            title: "Digital Marketting",
            desc: "Digital Strategies That Drive Growth",
            img: "/Home/OurServices/Services.8.png",
            gridClass: "md:col-span-12 aspect-[16/4.2] w-full",
        },
    ];

    return (
        <section className="relative bg-white text-white py-14 overflow-hidden ">
            {/* Scoped CSS media query for mobile only aspect ratio */}
            <style>{`
                @media (max-width: 767px) {
                    .mobile-services-aspect {
                        aspect-ratio: 16 / 11 !important;
                    }
                }
            `}</style>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[200px] rounded-full pointer-events-none z-0" />

            {/* Header Titles */}
            <div className="relative max-w-[1540px] mx-auto px-8 md:px-20 text-center mb-10 z-10">
                <span className="text-[24px] font-medium text-[#3E66F3] tracking-wide ">
                    What We Do
                </span>
                <h2 className="text-5xl font-playfair font-semibold mt-4 text-[#313131] tracking-tight">
                    Our Services
                </h2>
                <p className="text-[#4A5565] mt-4 text-lg font-medium max-w-5xl mx-auto opacity-80 leading-relaxed">
                    Driving Digital Transformation with Smart, Scalable & Secure Technology Solutions
                </p>
            </div>

            {/* Asymmetric Responsive Cards Grid */}
            <div className="relative max-w-[1540px] mx-auto px-8 md:px-20 z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer mobile-services-aspect ${service.gridClass}`}
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none z-0 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />


                            {/* Responsive Text Stack overlayed on top (Default state) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 flex flex-col justify-end h-full pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight select-none">
                                    {service.title}
                                </h3>
                                <p className="text-[12px] sm:text-[13px] text-slate-200 mt-1 font-medium opacity-90 select-none">
                                    {service.desc}
                                </p>
                            </div>

                            {/* HOVER OVERLAY (The Reverse Card State matching the mockup image) */}
                            <div
                                className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto"
                                style={{ background: "linear-gradient(180deg, #302C8C 0%, #3E66F3 100%)" }}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] sm:text-[14px] text-white/90 max-w-[85%] mb-6 leading-relaxed">
                                    {service.desc}, {service.desc}
                                </p>
                                <button className="bg-white text-[#302C8C] font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
