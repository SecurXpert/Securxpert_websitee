"use client";

import React from "react";

const stepsData = [
    {
        id: 1,
        number: "01",
        title: "Design",
        description: "Collaborate with our elite architects to map out specifications, user flows, and technical parameters.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        )
    },
    {
        id: 2,
        number: "02",
        title: "Build",
        description: "Translate visual wireframes and architectural blueprints into high-performance, secure code.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        )
    },
    {
        id: 3,
        number: "03",
        title: "Deploy",
        description: "Configure scalable cloud infrastructure and deploy containerized builds with CI/CD automation.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        )
    },
    {
        id: 4,
        number: "04",
        title: "Support",
        description: "Provide round-the-clock application monitoring, security patches, and performance tuning.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        id: 5,
        number: "05",
        title: "Launch",
        description: "Go live in the production environment with smooth traffic cutover and final integration checks.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

// Circular layout angle definitions in degrees
const stepAngles = {
    1: 125, // Bottom-left
    2: 185, // Left-middle
    3: 245, // Top-left/center
    4: 330, // Right-middle
    5: 35    // Bottom-right
};

export default function WeWork() {
    return (
        <section className="relative w-full bg-white py-4 sm:py-24 overflow-hidden text-slate-800 border-t border-slate-100">
            {/* Header Block */}
            <div className="flex flex-col items-center justify-center text-center px-6 mb-2 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
                    How We work 
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
                    Mobile banking differs from mobile payments, which involves the use of a mobile device
                </p>
            </div>

            {/* Desktop Circular Process Layout */}
            <div className="hidden lg:block relative w-full max-w-[1400px] h-[880px] mx-auto overflow-visible">
                {/* 800px Dashed Circular Track */}
                <div 
                    className="absolute w-[800px] h-[800px] rounded-full border-1 border-dotted border-slate-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                    style={{
                        borderStyle: "dotted",
                    }}
                />

                {/* Central 3D Illustration Graphic centered inside the 800px track */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[570px] h-auto z-10 flex items-center justify-center pointer-events-none">
                    <img
                        src="/Services/wework.png"
                        alt="3D Process Illustration"
                        className="w-full h-auto object-contain select-none"
                    />
                </div>

                {/* Step Cards Mathematically Positioned on the Circumference of the 800px Circle */}
                {stepsData.map((step) => {
                    // Radius is exactly half of the 800px circle diameter
                    const R = 400; 
                    const angleDeg = stepAngles[step.id];
                    const angleRad = (angleDeg * Math.PI) / 180;
                    
                    // Trigonometric relative positions from center (rounded to resolve hydration mismatch)
                    const x = Math.round(R * Math.cos(angleRad));
                    const y = Math.round(R * Math.sin(angleRad));

                    return (
                        <div
                            key={step.id}
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: "translate(-50%, -50%)"
                            }}
                            className="absolute w-[240px] bg-white rounded-2xl p-4 border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-200/50 transition-all duration-300 group z-20"
                        >
                            {/* Top Badge Icon */}
                            <div 
                                className="w-12 h-12 rounded-lg text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                                style={{ background: "linear-gradient(135deg, #230E51 0%, #3D62EC 100%)" }}
                            >
                                {step.icon}
                            </div>

                            {/* Step Number with Gradient Fade progress line */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-[#2563EB] font-bold text-lg font-mono tracking-tight">
                                    {step.number}
                                </span>
                                <div 
                                    className="flex-1 h-[2px]" 
                                    style={{ background: "linear-gradient(90deg, #4F39F6 0%, rgba(0, 0, 0, 0) 100%)" }}
                                />
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-semibold text-[#2F2F2F] text-lg mt-2 group-hover:text-[#2563EB] transition-colors duration-200">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Mobile & Tablet Responsive List Layout */}
            <div className="lg:hidden relative w-full px-6 max-w-4xl mx-auto flex flex-col items-center">
                {/* Center Image displayed on top for mobile */}
                <div className="w-[240px] sm:w-[320px] h-auto mb-2 flex justify-center pointer-events-none">
                    <img
                        src="/Services/wework.png"
                        alt="3D Process Illustration"
                        className="w-full h-auto object-contain select-none"
                    />
                </div>

                {/* Process Steps Cards Vertical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {stepsData.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:border-blue-100 transition-all duration-300 flex flex-col group"
                        >
                            <div className="flex items-center justify-between">
                                {/* Top Badge Icon */}
                                <div 
                                    className="w-10 h-10 rounded-lg text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                                    style={{ background: "linear-gradient(135deg, #230E51 0%, #3D62EC 100%)" }}
                                >
                                    {step.icon}
                                </div>
                                <span className="text-[#2563EB] font-bold text-lg font-mono">
                                    {step.number}
                                </span>
                            </div>

                            <div 
                                className="h-[2px] w-full mt-4" 
                                style={{ background: "linear-gradient(90deg, #4F39F6 0%, rgba(0, 0, 0, 0) 100%)" }}
                            />

                            {/* Title & Description */}
                            <h3 className="font-semibold text-[#2F2F2F] text-lg mt-3 group-hover:text-[#2563EB] transition-colors duration-200">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
