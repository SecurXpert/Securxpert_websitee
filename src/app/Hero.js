"use client";

import React from "react";
import Link from "next/link";
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        let startTime = null;
        let animationFrameId = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = progress * (2 - progress);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

const HeroSection = () => {
    return (
        <div className="min-h-screen overflow-hidden">

            {/* Floating animation keyframes styles */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

            <section className="relative w-full max-w-[100%] lg:max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-8">
                
                {/* Mobile Blue Background layer - cuts through the middle of the stats block */}
                <div className="lg:hidden absolute top-0 left-0 right-0 h-[calc(100%-130px)] bg-[#1A1C74] rounded-b-[40px] z-0"></div>

                {/* Soft Background Blue Glow Effect */}
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none"></div>

                <div
                    className="relative px-8 md:px-18 pt-28 sm:pt-36 lg:pt-18 pb-10 lg:pb-6 flex flex-col lg:flex-row items-center justify-between overflow-visible bg-transparent"
                >
                    {/* High-Performance Clipped Background Image Tag (Hidden on mobile, block on desktop) */}
                    <img
                        src="/herobg.png"
                        alt="Hero Curved Background"
                        className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-2"
                    />

                    {/* Subtle glow layer overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

                    {/* Left Column Content */}
                    <div className="max-w-2xl z-10 flex flex-col items-center text-center lg:items-start lg:text-left mb-6 lg:mb-30">

                        {/* Title */}
                        <h1 className="hidden lg:block text-3xl sm:text-5xl lg:text-5xl xl:text-[46px] 2xl:text-5xl font-semibold leading-[1.20] text-white md:text-[#1E1B4B] lg:text-white tracking-tight">
                            Hyderabad's Trusted IT <br className="hidden sm:inline" />
                            Services & Software <br className="hidden sm:inline" />
                            Development Partner
                        </h1>

                        <h1 className="lg:hidden text-[28px] sm:text-[36px] font-semibold leading-[1.25] text-white tracking-tight px-2">
                            Hyderabad's Trusted IT <br />
                            Services & Software <br />
                            Development Partner
                        </h1>

                        {/* Description */}
                        <p className="hidden lg:block mt-6 text-lg sm:text-xl md:text-xl lg:text-blue-100 xl:text-[18px] 2xl:text-lg leading-relaxed text-blue-100 md:text-slate-600 max-w-xl font-normal opacity-90">
                            SecurXpert builds the software, secures the infrastructure, and runs the IT operations behind 500+ businesses across 12+ countries — from custom applications and cloud migration to AI automation, cybersecurity, and outsourced support. One partner, every layer of your technology stack.
                        </p>

                        <p className="lg:hidden mt-4 text-[13px] sm:text-[15px] leading-relaxed text-white/90 font-normal px-0 opacity-95 tracking-wide w-full text-left">
                            SecurXpert builds the software, secures the infrastructure, and runs the IT operations behind 500+ businesses across 12+ countries — from custom applications and cloud migration to AI automation, cybersecurity, and outsourced support. One partner, every layer of your technology stack.
                        </p>

                        {/* Rounded Button Capsule in Translucent White positioned absolutely above the avatars */}
                        {/* Rounded Button Capsule in Translucent White positioned absolutely above the avatars */}
                        <div
                            className="relative lg:absolute bottom-auto lg:bottom-32 xl:bottom-36 2xl:bottom-48 left-auto lg:left-20 mt-8 lg:mt-0 p-0 lg:p-1.5 lg:sm:p-2 lg:rounded-2xl border-none lg:border lg:border-white/20 lg:shadow-lg flex lg:inline-flex flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in z-20 self-center lg:self-start bg-transparent lg:bg-slate-100/90 lg:bg-white/70 lg:backdrop-blur-md w-full lg:w-auto"
                        >
                            <Link href="/contact" className="bg-[#2956E6] lg:bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 sm:px-8 sm:py-2.5 rounded-xl lg:rounded-2xl text-[14px] sm:text-[15px] lg:text-lg shadow-md transition-all active:scale-95 duration-150 whitespace-nowrap inline-block text-center">
                                Let’s Start
                            </Link>

                            <Link href="/contact" className="border border-white lg:border-[#3E66F3]/70 hover:bg-white/10 lg:hover:bg-blue-600/10 text-white lg:text-[#3E66F3] font-medium px-5 py-2.5 sm:px-8 sm:py-2.5 rounded-xl lg:rounded-2xl text-[14px] sm:text-[15px] lg:text-lg transition-all active:scale-95 duration-150 whitespace-nowrap inline-block text-center">
                                Partner with us
                            </Link>
                        </div>

                        {/* Overlapping circular avatars positioned absolutely inside the bottom-left curve */}
                        <div className="hidden lg:flex absolute bottom-auto lg:bottom-6 xl:bottom-8 2xl:bottom-14 left-auto lg:left-16 mt-12 lg:mt-0 items-center gap-8 z-20">
                            <div className="flex -space-x-2.5">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="User portrait female"
                                    className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User portrait male 1"
                                    className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/52.jpg"
                                    alt="User portrait male 2"
                                    className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                                />
                            </div>

                            <p className="text-blue-100 md:text-slate-700 lg:text-blue-100 font-normal text-sm xl:text-[15px] 2xl:text-[17px] tracking-tight transform -translate-x-6 lg:-translate-x-6 leading-snug">
                                Trusted by 500+ businesses across India, <br />
                                the US, the UK, and the Middle East
                            </p>
                        </div>
                    </div>

                    {/* Right Column Image */}
                    <div className="hidden lg:flex relative -mt-8 lg:mt-0 z-10 justify-center lg:justify-end">
                        <div className="relative w-full max-w-[340px] sm:max-w-[500px]">

                            {/* Character Image with offset transform translation */}
                            <img
                                src="/hero-character.png"
                                alt="IT Developer 3D Illustration"
                                className="w-full h-auto object-contain select-none pointer-events-none -translate-y-6 lg:-translate-y-16 transform transition-transform duration-300 z-10 relative"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Stats Row - Positioned perfectly in the cutout beside the bottom-left dropped tab */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto lg:px-15 mt-8 lg:-mt-24 xl:-mt-28 2xl:-mt-34 relative z-30 max-lg:px-4 max-lg:mb-6">

                    {/* Responsive Left Spacer (occupies the width matching the bottom-left dropped tab curve) */}
                    <div className="hidden lg:block lg:w-[44%] xl:w-[40%]" />

                    {/* Centered metrics column array placed perfectly beside the dropped tab */}
                    <div className="w-full lg:w-[56%] xl:w-[60%] grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-8 gap-x-0 lg:gap-4 text-center py-6 max-lg:bg-white max-lg:rounded-[36px] max-lg:shadow-xl max-lg:relative max-lg:z-40">

                        <div className="flex flex-col items-center justify-center max-lg:border-b max-lg:border-r max-lg:border-slate-100 max-lg:pb-6">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none hidden lg:inline"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <CountUp end={500} suffix="+" />
                            </span>
                            <span className="inline lg:hidden text-[34px] font-bold text-[#1E1B4B] leading-none">500<span className="text-[#3E66F3]">+</span></span>
                            <span className="mt-2 text-xs sm:text-sm lg:font-semibold text-slate-500 tracking-wide max-lg:text-slate-600 max-lg:font-medium">
                                Projects Delivered
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center max-lg:border-b max-lg:border-slate-100 max-lg:pb-6">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none hidden lg:inline"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <CountUp end={12} suffix="+" />
                            </span>
                            <span className="inline lg:hidden text-[34px] font-bold text-[#1E1B4B] leading-none">12<span className="text-[#3E66F3]">+</span></span>
                            <span className="mt-2 text-xs sm:text-sm lg:font-semibold text-slate-500 tracking-wide max-lg:text-slate-600 max-lg:font-medium">
                                Countries Served
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center max-lg:border-r max-lg:border-slate-100 max-lg:pt-6">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none hidden lg:inline"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <CountUp end={10} />
                            </span>
                            <span className="inline lg:hidden text-[34px] font-bold text-[#3E66F3] leading-none">10</span>
                            <span className="mt-2 text-xs sm:text-sm lg:font-semibold text-slate-500 tracking-wide max-lg:text-slate-600 max-lg:font-medium">
                                Products build
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center max-lg:pt-6">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none hidden lg:inline"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <CountUp end={98} suffix="%" />
                            </span>
                            <span className="inline lg:hidden text-[34px] font-bold text-[#1E1B4B] leading-none">98<span className="text-[#3E66F3]">%</span></span>
                            <span className="mt-2 text-xs sm:text-sm lg:font-semibold text-slate-500 tracking-wide max-lg:text-slate-600 max-lg:font-medium">
                                Client Retention
                            </span>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default HeroSection;
