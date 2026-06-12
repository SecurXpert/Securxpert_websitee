"use client";

import React from "react";

export default function FeaturedServices() {
    const services = [
        {
            title: "Business Advice",
            desc: "We make the over insurance quoting purchasing.",
            icon: "/BPO/FeauturedServices/Symbol.svg",
            bgImage: "/BPO/FeauturedServices/business.jpg"
        },
        {
            title: "Financial Advice",
            desc: "We make the over insurance quoting purchasing.",
            icon: "/BPO/FeauturedServices/Symbol (1).svg",
            bgImage: "/BPO/FeauturedServices/financial.jpg"
        },
        {
            title: "Risk Management",
            desc: "We make the over insurance quoting purchasing.",
            icon: "/BPO/FeauturedServices/Symbol (2).svg",
            bgImage: "/BPO/FeauturedServices/risk.jpg"
        }
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden py-20 text-slate-800">

            {/* RIGHT SIDE SVG SHAPE */}
            <img
                src="/BPO/FeauturedServices/shape.svg"
                alt="Background Shape"
                className="absolute right-[-10rem] top-0 h-full max-h-[500px] object-contain pointer-events-none z-0 hidden lg:block select-none opacity-90"
            />

            {/* MAIN CONTAINER */}
            <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-4 lg:pl-10">

                        {/* SMALL LABEL */}
                        <div className="relative inline-flex items-center mb-6 pt-5">
                            {/* Starry Vector Shape Backdrop */}
                            <img
                                src="/BPO/FeauturedServices/Vector.svg"
                                alt="Star Background"
                                className="absolute -top-3 -left-4 w-12 h-12 opacity-85 pointer-events-none select-none z-0"
                            />

                            <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[2px] uppercase font-sans">
                                Featured Services
                                {/* Soft highlight bottom pill bar */}
                                <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
                            </span>
                        </div>

                        {/* HEADING */}
                        <h3 className="text-[#100D35] text-4xl sm:text-5xl lg:text-[35px] leading-[1.1] font-bold tracking-[-1px] max-w-5xl font-inter">
                            What Services We Provide To Our Customers Business
                        </h3>
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="lg:col-span-6 lg:col-start-6 lg:translate-y-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 

                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden bg-[#F7F4F4] rounded-[8px] p-4 aspect-square transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-[#F1EEEE] hover:border-transparent hover:bg-[#3D62EB] group z-10"
                                >
                                    {/* Hover Background Image Overlay */} 
                                    <img
                                        src={item.bgImage}
                                        alt="Hover Background"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none z-0"
                                    />

                                    {/* Card Content Container */}
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        {/* ICON */}
                                        <div className="mb-3">
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                                            />
                                        </div>

                                        {/* TEXT DETAILS */}
                                        <div>
                                            {/* TITLE */}
                                            <h3 className="text-[#0D121E] text-[20px] leading-tight font-semibold mb-1 font-inter group-hover:text-white transition-colors">
                                                {item.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-[#414651] text-[12px] leading-relaxed font-normal group-hover:text-white/85 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                              ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
