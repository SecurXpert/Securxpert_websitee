"use client";

import React, { useState } from "react";

export default function Testimonials() {
    const list = [
        {
            logo: (
                <div className="flex items-center gap-2.5">
                    {/* Feedspace Custom Logo */}
                    <div className="w-8 h-8 rounded bg-[#2563EB] flex items-center justify-center text-white font-black text-sm shadow-sm">
                        F
                    </div>
                    <span className="text-[#1E3A8A] font-extrabold text-[20px] sm:text-[22px] tracking-tight">
                        Feed<span className="text-[#2563EB]">space</span>
                    </span>
                </div>
            ),
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud",
            name: "Sameer Rai",
            role: "Product Head",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
        },
        {
            logo: (
                <div className="flex items-center gap-2.5">
                    {/* Aura Creative Custom Logo */}
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                        A
                    </div>
                    <span className="text-slate-900 font-extrabold text-[20px] sm:text-[22px] tracking-tight">
                        Aura<span className="text-indigo-600">Creative</span>
                    </span>
                </div>
            ),
            quote: "SecurXpert Technologies completely transformed our digital workspace. They delivered beyond our expectations with a sleek, highly functional design that has boosted our client engagement by 40%.",
            name: "Sarah Jenkins",
            role: "Director of Product",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
        },
        {
            logo: (
                <div className="flex items-center gap-2.5">
                    {/* Apex Ledger Custom Logo */}
                    <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                        AL
                    </div>
                    <span className="text-slate-900 font-extrabold text-[20px] sm:text-[22px] tracking-tight">
                        Apex<span className="text-purple-600">Ledger</span>
                    </span>
                </div>
            ),
            quote: "Working with them was a seamless, elite experience. They took our complex legacy infrastructure and turned it into an elegant, high-performing platform that our users absolutely love.",
            name: "David Chen",
            role: "VP of Engineering",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
        }
    ];

    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % list.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + list.length) % list.length);
    };

    const activeItem = list[current];

    return (
        <section className="relative w-full bg-white overflow-hidden py-14 px-6 sm:px-12 lg:px-24">
            <div className="relative z-10 max-w-[1040px] mx-auto w-full select-none text-center">

                {/* Header Block */}
                <div className="mb-10">
                    <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-[0.2em] uppercase block mb-3 font-sans">
                        TESTIMONIAL
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-[34px] font-Anton font-extrabold  text-[#0F172B] tracking-tight leading-tight max-w-5xl mx-auto font-sans mb-4">
                        Real Stories, Real Impact: Hear from Our Satisfied Clients
                    </h3>
                    <p className="text-[#1E1E1E] text-sm sm:text-[15px] font-normal  leading-relaxed max-w-5xl mx-auto font-sans">
                        Discover how video testimonial has transformed businesses through innovative solutions and dedicated support.
                    </p>
                </div>

                {/* Main Card Slider Container */}
                <div className="relative w-full max-w-[960px] mx-auto flex items-center justify-center">

                    {/* Left Navigation Chevron Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-16px] sm:left-[-22px] z-20 w-11 h-11 rounded-full bg-[#EFF6FF] hover:bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] cursor-pointer transition-all duration-300 shadow-sm border border-blue-50 active:scale-95"
                    >
                        <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* The Testimonial Card */}
                    <div className="w-full bg-white border border-slate-100 rounded-[28px] p-6 sm:p-8 lg:p-10 md:min-h-[385px] flex items-center shadow-xl shadow-slate-100/60 transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch w-full">

                            {/* Left Video Thumbnail Column */}
                            <div className="md:col-span-5 w-full flex items-center justify-center">
                                <div className="relative w-full max-w-[340px] aspect-[1.05/1] rounded-[20px] overflow-hidden shadow-md group cursor-pointer">
                                    <img
                                        src={activeItem.image}
                                        alt={activeItem.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Video Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 fill-[#2563EB] ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Description & Details Column */}
                            <div className="md:col-span-7 flex flex-col justify-between text-left pl-0 md:pl-4 py-1 min-h-[260px] md:min-h-[290px]">
                                <div>
                                    {/* Corporate Logo */}
                                    <div className="mb-5">
                                        {activeItem.logo}
                                    </div>

                                    {/* Main Quote Paragraph */}
                                    <p className="text-slate-600 text-base sm:text-lg md:text-[19px] font-normal leading-relaxed mb-6 font-sans italic">
                                        "{activeItem.quote}"
                                    </p>
                                </div>

                                {/* Client Avatar and Name Row */}
                                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-slate-50/50">
                                    <img
                                        src={activeItem.avatar}
                                        alt={activeItem.name}
                                        className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm"
                                    />
                                    <div className="flex flex-col">
                                        <h4 className="text-slate-900 font-extrabold text-base sm:text-[17px] font-sans leading-none mb-1">
                                            {activeItem.name}
                                        </h4>
                                        <p className="text-slate-400 text-xs sm:text-[14px] font-medium font-sans">
                                            {activeItem.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Navigation Chevron Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-[-16px] sm:right-[-22px] z-20 w-11 h-11 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] flex items-center justify-center text-white cursor-pointer transition-all duration-300 shadow-[0_4px_14px_rgba(37,99,235,0.35)] active:scale-95"
                    >
                        <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
}
