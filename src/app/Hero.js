"use client";

import React from "react";

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
        <div className="min-h-screen bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none md:bg-white overflow-hidden text-slate-800">

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

            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-8">

                {/* Soft Background Blue Glow Effect */}
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none"></div>

                <div
                    className="relative px-8 md:px-20 pt-28 sm:pt-36 lg:pt-18 pb-10 lg:pb-10 flex flex-col lg:flex-row items-center justify-between overflow-visible bg-transparent"
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
                        <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[46px] 2xl:text-5xl font-semibold leading-[1.20] text-white md:text-[#1E1B4B] lg:text-white tracking-tight">
                            IT Services & Software <br className="hidden sm:inline" />
                            Development Company in <br className="hidden sm:inline" />
                            Hyderabad
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg sm:text-xl md:text-xl lg:text-blue-100 xl:text-[18px] 2xl:text-xl leading-relaxed text-blue-100 md:text-slate-600 max-w-xl font-normal opacity-90">
                            Custom software development, AI automation, cloud & DevOps, cybersecurity, UI/UX design, digital marketing, managed IT, staffing, and BPO solutions for modern businesses.
                        </p>

                        {/* Rounded Button Capsule in Translucent White positioned absolutely above the avatars */}
                        <div
                            className="relative lg:absolute bottom-auto lg:bottom-32 xl:bottom-36 2xl:bottom-48 left-auto lg:left-20 mt-8 lg:mt-0 p-1.5 sm:p-2 rounded-xl border border-slate-200 lg:border-white/20 shadow-lg inline-flex items-center gap-2 sm:gap-4 animate-fade-in z-20 self-center lg:self-start bg-slate-100/90 lg:bg-white/70 backdrop-blur-md"
                        >
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 sm:px-8 sm:py-2.5 rounded-xl text-sm sm:text-lg shadow-md transition-all active:scale-95 duration-150">
                                Let’s Start
                            </button>

                            <button className="border border-[#3E66F3]/70 hover:bg-blue-600/10 text-[#3E66F3] font-medium px-4 py-2 sm:px-8 sm:py-2.5 rounded-xl text-sm sm:text-lg transition-all active:scale-95 duration-150 whitespace-nowrap">
                                Partner with us
                            </button>
                        </div>

                        {/* Overlapping circular avatars positioned absolutely inside the bottom-left curve */}
                        <div className="relative lg:absolute bottom-auto lg:bottom-6 xl:bottom-8 2xl:bottom-14 left-auto lg:left-20 mt-12 lg:mt-0 flex items-center gap-8 z-20">
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

                            <p className=" text-blue-100 md:text-slate-700 lg:text-blue-100 font-semibold text-sm xl:text-[15px] 2xl:text-lg tracking-tight whitespace-nowrap transform -translate-x-6 lg:-translate-x-6">
                                Over 999+ Users Across the world
                            </p>
                        </div>
                    </div>

                    {/* Right Column Image */}
                    <div className="relative -mt-8 lg:mt-0 z-10 flex justify-center lg:justify-end">
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
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto lg:px-15 -mt-30 lg:-mt-24 xl:-mt-28 2xl:-mt-34 relative z-30">

                    {/* Responsive Left Spacer (occupies the width matching the bottom-left dropped tab curve) */}
                    <div className="hidden lg:block lg:w-[44%] xl:w-[40%]" />

                    {/* Centered metrics column array placed perfectly beside the dropped tab */}
                    <div className="w-full lg:w-[56%] xl:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center py-6">

                        <div className="flex flex-col items-center">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <span className="hidden lg:inline"><CountUp end={500} suffix="+" /></span>
                                <span className="inline lg:hidden">500+</span>
                            </span>
                            <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-500  tracking-wide">
                                Projects Delivered
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <span className="hidden lg:inline"><CountUp end={12} suffix="+" /></span>
                                <span className="inline lg:hidden">12+</span>
                            </span>
                            <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-500  tracking-wide">
                                Countries Served
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <span className="hidden lg:inline"><CountUp end={10} /></span>
                                <span className="inline lg:hidden">10</span>
                            </span>
                            <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-500  tracking-wide">
                                Products Built
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span
                                className="text-4xl sm:text-5xl font-semibold select-none"
                                style={{ background: "linear-gradient(90deg, #210A4A 0%, #3E66F3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                            >
                                <span className="hidden lg:inline"><CountUp end={98} suffix="%" /></span>
                                <span className="inline lg:hidden">98%</span>
                            </span>
                            <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-500  tracking-wide">
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
