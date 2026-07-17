"use client";

import React from "react";
import { MdOutlineDesignServices, MdOutlineBugReport, MdSupportAgent } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";

const stepsData = [
    {
        id: 1,
        number: "01",
        title: "Design",
        description: " Understanding client requirements and creating UI/UX wireframes",
        icon: <MdOutlineDesignServices className="w-5 h-5" />
    },
    {
        id: 2,
        number: "02",
        title: "Build",
        description: "Developing secure, scalable, and high-performance solutions",
        icon: <FaCode className="w-5 h-5" />
    },
    {
        id: 3,
        number: "03",
        title: "Test",
        description: " Checking functionality, fixing bugs, and ensuring quality",
        icon: <MdOutlineBugReport className="w-5 h-5" />
    },
    {
        id: 4,
        number: "04",
        title: "Deploy",
        description: "Shipping the project with optimised performance",
        icon: <TbRocket className="w-5 h-5" />
    },
    {
        id: 5,
        number: "05",
        title: "Support",
        description: " Providing continuous updates, monitoring, and maintenance",
        icon: <MdSupportAgent className="w-5 h-5" />
    }
];

// Circular layout angle definitions in degrees
const stepAngles = {
    1: 126, // Bottom-left
    2: 198, // Top-left
    3: 270, // Top-center
    4: 342, // Top-right
    5: 54   // Bottom-right
};

export default function WeWork() { 
    return (
        <section className="relative w-full bg-white py-4 sm:py-14 overflow-hidden text-slate-800 border-t border-slate-100">
            {/* Header Block */}
            <div className="flex flex-col items-center justify-center text-center px-6 mb-2 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
                    How We work 
                </h2>
                <p className="text-slate-800 text-sm sm:text-base mt-4 max-w-xl leading-relaxed mb-4">
                   We have a structured and transparent development process to ensure quality delivery: 
                </p>
            </div>

            {/* Desktop Circular Process Layout */}
            <div className="hidden lg:block relative w-full max-w-[1400px] h-[680px] mx-auto overflow-visible">
                {/* 640px Dashed Circular Track */}
                <div 
                    className="absolute w-[640px] h-[640px] rounded-full border-1 border-dotted border-slate-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
                    style={{
                        borderStyle: "dotted",
                    }}
                />

                {/* Central 3D Illustration Graphic centered inside the track */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-auto z-10 flex items-center justify-center pointer-events-none">
                    <img
                        src="/services-media/wework.png"
                        alt="3D Process Illustration"
                        className="w-full h-auto object-contain select-none"
                    />
                </div>

                {/* Step Cards Mathematically Positioned on the Circumference of the circle */}
                {stepsData.map((step) => {
                    // Radius is exactly half of the 640px circle diameter
                    const R = 320; 
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
                            className="absolute w-[190px] bg-white rounded-xl p-3 border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-200/50 transition-all duration-300 group z-20"
                        >
                            {/* Top Badge Icon */}
                            <div 
                                className="w-10 h-10 rounded-lg text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                                style={{ background: "linear-gradient(135deg, #230E51 0%, #3D62EC 100%)" }}
                            >
                                {step.icon}
                            </div>

                            {/* Step Number with Gradient Fade progress line */}
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-[#2563EB] font-bold text-base font-mono tracking-tight">
                                    {step.number}
                                </span>
                                <div 
                                    className="flex-1 h-[2px]" 
                                    style={{ background: "linear-gradient(90deg, #4F39F6 0%, rgba(0, 0, 0, 0) 100%)" }}
                                />
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-semibold text-[#2F2F2F] text-base mt-2 group-hover:text-[#2563EB] transition-colors duration-200">
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
                        src="/services-media/wework.png"
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
