"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
const productsData = [
    {
        id: 0,
        name: "Grab JobZ",
        description: "AI-powered recruitment platform with smart hiring, candidate matching, and automated outreach for faster hiring worldwide. ",
        bgImage: "/Home/OurProducts/Grabjobz.png",
        logoImage: "/Home/OurProducts/Grabjobz2.png",
        logoBg: "bg-white",
        btnColor: "bg-[#0058FE] hover:bg-[#0058FE]",
        dotColor: "#005BFF",
        slug: "grabjobz"
    },
    {
        id: 1,
        name: "Lens & Light Media",
        description: "Creative digital marketing agency specializing in branding, video production, SEO, AI content, and growth solutions.",
        bgImage: "/Home/OurProducts/llmedia.png",
        logoImage: "/Home/OurProducts/llmedia (2).png",
        logoBg: "bg-black",
        btnColor: "bg-[#C69857] hover:bg-[#C69857]",
        dotColor: "#C69857",
        slug: "lens-light"
    },
    {
        id: 2,
        name: "Vishan",
        description: "Professional online assessment platform for skill evaluation, live exams, analytics, and course certifications.",
        bgImage: "/Home/OurProducts/Vishan.png",
        logoImage: "/Home/OurProducts/Vishan2 (2).png",
        logoBg: "bg-[#FFF9F2]",
        btnColor: "bg-[#FB8906] hover:bg-[#FB8906]",
        dotColor: "#FB8906",
        slug: "vishan"
    },
    {
        id: 3,
        name: "Dev Talent",
        description: "Professional online assessment platform for skill evaluation, live exams, analytics, and course certifications.",
        bgImage: "/Home/OurProducts/Devtalent.png",
        logoImage: "/Home/OurProducts/Devtalent2 (2).png",
        logoBg: "bg-[#F6F5FF]",
        btnColor: "bg-[#7E21A9] hover:bg-[#7E21A9]",
        dotColor: "#7E21A9",
        slug: "devtalent"
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
        }, 3000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="relative w-full overflow-hidden min-h-[750px] md:h-[800px] lg:h-[850px] max-lg:min-h-[420px] max-lg:h-auto max-lg:pb-10 flex flex-col justify-between py-10 max-lg:pt-8 px-6 md:px-20 lg:px-40 text-white select-none">
            {/* Absolute Background Slideshow: covers top header down past explore button on mobile */}
            <div className="absolute inset-0 z-0 w-full h-full">
                {productsData.map((product, idx) => (
                    <div
                        key={product.id}
                        className={`absolute inset-x-0 top-0 h-[660px] max-lg:h-full lg:h-full bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
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
                {/* Desktop Description */}
                <p className="text-white text-md md:text-md font-medium tracking-wide max-lg:hidden">
                    Beyond client work, SecurXpert designs and maintains its own product portfolio — proof of how we build, not just how we talk about building. Ten live products across HR tech, healthcare, education, logistics, and analytics. 
                </p>
                {/* Mobile Description (from mockup) */}
                <p className="hidden max-lg:block text-white/80 text-[14px] font-medium tracking-wide">
                    Powerful products for your business
                </p>
            </div>

            {/* MIDDLE BODY CONTAINER: Split Columns */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full max-lg:flex max-lg:flex-row max-lg:bg-transparent max-lg:border max-lg:border-white/40 max-lg:rounded-[28px] max-lg:p-5 max-lg:shadow-2xl max-lg:gap-3 max-lg:mt-4">

                {/* LEFT CONTENT (Product Title, Paragraph, Button) */}
                {/* Kept your precise desktop translate transforms completely intact */}
                <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl transition-all duration-700 ease-out lg:-translate-x-12 lg:-translate-y-20 w-full max-lg:w-[55%] max-lg:pr-1 max-lg:justify-center">
                    <h2
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold capitalize text-white mb-6 max-lg:mb-2 tracking-tight animate-fade-in ![font-family:var(--font-Playfair-Display),serif] max-lg:!font-sans max-lg:text-[22px] max-lg:font-semibold"
                    >
                        {activeProduct.name}
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed font-light max-w-lg min-h-[80px] max-lg:min-h-0 max-lg:text-[11px] max-lg:leading-[1.4] max-lg:mb-4 max-lg:text-slate-300">
                        {activeProduct.description}
                    </p>
                    <div className="flex items-center gap-4 max-lg:w-full">
                        <Link
                            href={`/products/${activeProduct.slug}`}
                            className={`text-white font-medium px-10 py-4 max-lg:px-5 max-lg:py-2.5 max-lg:text-[13px] rounded-2xl max-lg:rounded-xl text-base shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:brightness-110 active:scale-95 duration-200 cursor-pointer text-center inline-block ${activeProduct.btnColor}`}
                        >
                            Explore Now
                        </Link>
                        <Link
                            href="/products"
                            className="text-white font-normal px-6 py-4 rounded-2xl text-base transition-all active:scale-95 duration-150 cursor-pointer bg-transparent border border-white/40 hover:bg-white/10 text-center inline-block max-lg:hidden"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>

                {/* RIGHT CONTENT (Stack of Overlapping Interaction Cards) */}
                <div className="lg:col-span-6 flex items-center justify-center lg:justify-end lg:-translate-x-16 relative w-full h-[360px] sm:h-[400px] md:h-[480px] max-lg:w-[45%] max-lg:h-[150px] overflow-visible">
                    {/* Inner relative container scales intelligently on MacBook Air screens via dynamic origin point alignment */}
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="relative w-[280px] sm:w-[400px] md:w-[500px] h-[260px] sm:h-[320px] md:h-[440px] max-lg:w-full max-lg:h-full flex items-center justify-start transform lg:scale-[0.75] xl:scale-[0.85] 2xl:scale-100 origin-center lg:origin-right transition-transform duration-700 touch-pan-y max-lg:justify-end"
                    >

                        {/* Dynamically Mapped Cards for Smooth Size/Position Transition */}
                        {productsData.map((product, index) => {
                            const isActive = index === activeIndex;
                            const isNext = index === (activeIndex + 1) % productsData.length;
                            const isPrev = index === (activeIndex - 1 + productsData.length) % productsData.length;

                            let stateClasses = "";
                            if (isActive) {
                                stateClasses = "left-0 w-56 h-56 sm:w-80 sm:h-80 md:w-95 md:h-[480px] max-lg:left-auto max-lg:right-0 max-lg:w-[140px] max-lg:h-[140px] max-lg:translate-x-0 rounded-[24px] sm:rounded-[32px] max-lg:rounded-3xl z-20 hover:scale-[1.03] -translate-x-8 sm:translate-x-[-70px] opacity-100 max-lg:shadow-lg";
                            } else if (isNext) {
                                stateClasses = "left-[40%] sm:left-[50%] md:left-[55%] w-36 h-36 sm:w-48 sm:h-48 md:w-63 md:h-80 max-lg:hidden rounded-[18px] sm:rounded-[24px] z-10 hover:scale-[1.02] cursor-pointer translate-x-4 sm:translate-x-10 md:translate-x-32 opacity-100";
                            } else if (isPrev) {
                                stateClasses = "left-[-50%] w-56 h-56 sm:w-80 sm:h-80 md:w-95 md:h-[480px] max-lg:hidden rounded-[24px] sm:rounded-[32px] z-0 -translate-x-[150px] opacity-0 scale-75";
                            } else {
                                stateClasses = "left-[100%] w-36 h-36 sm:w-48 sm:h-48 md:w-63 md:h-80 rounded-[18px] sm:rounded-[24px] max-lg:hidden z-0 opacity-0 translate-x-[100px] scale-75";
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
