"use client";

import React, { useState, useEffect } from "react";

const productsData = [
    {
        id: 0,
        name: "Grab JobZ",
        description: "AI-powered recruitment platform with smart hiring, candidate matching, and automated outreach for faster hiring worldwide.",
        bgImage: "/Home/OurProducts/Grabjobz.png",
        logoImage: "/Home/OurProducts/Grabjobz2.png",
        logoBg: "bg-white",
        btnColor: "bg-[#0058FE] hover:bg-[#0058FE]",
        dotColor: "#005BFF"
    },
    {
        id: 1,
        name: "Lens & Light Media",
        description: "Creative digital marketing agency specializing in branding, video production, SEO, AI content, and growth solutions.",
        bgImage: "/Home/OurProducts/llmedia.png",
        logoImage: "/Home/OurProducts/llmedia (2).png",
        logoBg: "bg-black",
        btnColor: "bg-[#C69857] hover:bg-[#C69857]",
        dotColor: "#C69857"
    },
    {
        id: 2,
        name: "Vishan",
        description: "Professional online assessment platform for skill evaluation, live exams, analytics, and course certifications.",
        bgImage: "/Home/OurProducts/Vishan.png",
        logoImage: "/Home/OurProducts/Vishan2 (2).png",
        logoBg: "bg-white",
        btnColor: "bg-[#FB8906] hover:bg-[#FB8906]",
        dotColor: "#FB8906"
    },
    {
        id: 3,
        name: "Dev Talent",
        description: "Professional online assessment platform for skill evaluation, live exams, analytics, and course certifications.",
        bgImage: "/Home/OurProducts/Devtalent.png",
        logoImage: "/Home/OurProducts/Devtalent2 (2).png",
        logoBg: "bg-white",
        btnColor: "bg-[#7E21A9] hover:bg-[#7E21A9]",
        dotColor: "#7E21A9"
    }
];

export default function OurProducts() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const activeProduct = productsData[activeIndex];
    const nextIndex = (activeIndex + 1) % productsData.length;
    const nextProduct = productsData[nextIndex];

    const handleNextClick = () => {
        setActiveIndex(nextIndex);
    };

    // Touch swipe mechanics for mobile sliding
    const minSwipeDistance = 50;
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            setActiveIndex((prev) => (prev + 1) % productsData.length);
        } else if (isRightSwipe) {
            setActiveIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
        }
    };

    // Auto-scroll slideshow: transition every 5 seconds (resets timer if user manually clicks)
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="relative w-full overflow-hidden min-h-[850px] md:h-[900px] lg:h-[950px] flex flex-col justify-between py-14 px-6 md:px-20 lg:px-40 text-white select-none">
            {/* Absolute Background Slideshow: covers top header down past explore button on mobile */}
            <div className="absolute inset-0 z-0">
                {productsData.map((product, idx) => (
                    <div
                        key={product.id}
                        className={`absolute inset-x-0 top-0 h-[660px] lg:h-full bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${product.bgImage})` }}
                    />
                ))}
            </div>

            {/* TOP HEADER: Centered Section Header */}
            <div className="relative z-10 text-center mb-6 md:mb-0">
                <h2 className="text-[28px] md:text-[55px] font-playfair font-semibold text-white mb-2 leading-none">
                    Our Products
                </h2>
                <p className="text-white/80 text-md md:text-md font-medium tracking-wide">
                    Innovative Digital Products Built for Modern Business Success
                </p>
            </div>

            {/* MIDDLE BODY CONTAINER: Split Columns */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full">

                {/* LEFT CONTENT (Product Title, Paragraph, Button) */}
                {/* Kept your precise desktop translate transforms completely intact */}
                <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl transition-all duration-700 ease-out lg:-translate-x-12 lg:-translate-y-20 w-full">
                    <h2
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in ![font-family:var(--font-Playfair-Display),serif]"
                    >
                        {activeProduct.name}
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed font-light max-w-lg min-h-[80px]">
                        {activeProduct.description}
                    </p>
                    <button
                        className={`text-white font-medium px-8 py-4 rounded-xl text-base shadow-md transition-all active:scale-95 duration-150 cursor-pointer ${activeProduct.btnColor}`}
                    >
                        Explore Now
                    </button>
                </div>

                {/* RIGHT CONTENT (Stack of Overlapping Interaction Cards) */}
                <div className="lg:col-span-6 flex items-center justify-center lg:justify-end lg:-translate-x-16 relative w-full h-[360px] sm:h-[400px] md:h-[480px] overflow-visible">
                    {/* Inner relative container scales intelligently on MacBook Air screens via dynamic origin point alignment */}
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="relative w-[280px] sm:w-[400px] md:w-[500px] h-[260px] sm:h-[320px] md:h-[440px] flex items-center justify-start transform lg:scale-[0.75] xl:scale-[0.85] 2xl:scale-100 origin-center lg:origin-right transition-transform duration-700 touch-pan-y"
                    >

                        {/* Dynamically Mapped Cards for Smooth Size/Position Transition */}
                        {productsData.map((product, index) => {
                            const isActive = index === activeIndex;
                            const isNext = index === (activeIndex + 1) % productsData.length;
                            const isPrev = index === (activeIndex - 1 + productsData.length) % productsData.length;

                            let stateClasses = "";
                            if (isActive) {
                                stateClasses = "left-0 w-56 h-56 sm:w-80 sm:h-80 md:w-95 md:h-[480px] rounded-[24px] sm:rounded-[32px]  z-20 hover:scale-[1.03] -translate-x-8 sm:translate-x-[-70px] opacity-100";
                            } else if (isNext) {
                                stateClasses = "left-[40%] sm:left-[50%] md:left-[55%] w-36 h-36 sm:w-48 sm:h-48 md:w-63 md:h-80 rounded-[18px] sm:rounded-[24px]  z-10 hover:scale-[1.02] cursor-pointer translate-x-4 sm:translate-x-10 md:translate-x-32 opacity-100";
                            } else if (isPrev) {
                                stateClasses = "left-[-50%] w-56 h-56 sm:w-80 sm:h-80 md:w-95 md:h-[480px] rounded-[24px] sm:rounded-[32px] z-0 -translate-x-[150px] opacity-0 scale-75";
                            } else {
                                stateClasses = "left-[100%] w-36 h-36 sm:w-48 sm:h-48 md:w-63 md:h-80 rounded-[18px] sm:rounded-[24px] z-0 opacity-0 translate-x-[100px] scale-75";
                            }

                            return (
                                <div
                                    key={product.id}
                                    onClick={isNext ? handleNextClick : undefined}
                                    className={`absolute ${product.logoBg} p-0 flex items-center justify-center border border-white/10 transition-all duration-[2000ms] ease-in-out transform ${stateClasses}`}
                                >
                                    <img
                                        src={product.logoImage}
                                        alt={`${product.name} Logo`}
                                        className="w-full h-full object-contain pointer-events-none"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* BOTTOM NAV BAR: Dot Indicators */}
            <div className="relative z-10 flex justify-center items-center gap-2.5 mt-6 md:mt-0">
                {productsData.map((product, idx) => (
                    <button
                        key={product.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 cursor-pointer ${idx === activeIndex
                            ? "bg-white border-white scale-110"
                            : "bg-white/30 border-transparent hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}