"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const slidesData = [
  {
    id: 1,
    title: "AI-Powered Recruitment Intelligence Hub",
    desc: "Al-powered recruitment platform with smart hiring, candidate matching, and automated outreach for faster hiring worldwide AI.",
    image: "/products/home/hero1.png",
    bgGradient: "linear-gradient(105.54deg, #007CFE -2.93%, #FFFFFF 72.14%)",
    titleColor: "text-white",
    descColor: "text-[#1E1B4B]/90",
    btnBg: "bg-[#0052FF] hover:bg-[#0041CC] text-white",
    arrowClass: "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    slug: "grabjobz"
  },
  {
    id: 2,
    title: "Creative Digital Marketing & Media Agency",
    desc: "Creative digital marketing agency specializing in branding, video production, SEO, AI content, and growth solutions.",
    image: "/products/home/hero2.png",
    bgGradient: "linear-gradient(135deg, #1F2937 0%, #111827 50%, #030712 100%)",
    titleColor: "text-[#D9A05B]",
    descColor: "text-white/85",
    btnBg: "bg-[#D9A05B] hover:bg-[#C58E49] text-slate-900 font-semibold",
    arrowClass: "border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white",
    slug: "lens-light"
  },
  {
    id: 3,
    title: "Advanced Talent Assessment Platform Hub",
    desc: "Professional online assessment platform for skill evaluation, live exams, analytics, and course certifications.",
    image: "/products/home/hero3.png",
    bgGradient: "linear-gradient(105.54deg, #8B1EAB -2.93%, #FFFFFF 72.14%)",
    titleColor: "text-white",
    descColor: "text-[#1E1B4B]/90",
    btnBg: "bg-[#312E81] hover:bg-[#1E1B4B] text-white",
    arrowClass: "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    slug: "devtalent"
  },
  {
    id: 4,
    title: "Smart School Management System Platform",
    desc: "Advanced school management system for attendance, fees, exams, student records, communication, and analytics.",
    image: "/products/home/hero4.png",
    bgGradient: "linear-gradient(105.54deg, #FC8906 -2.93%, #FFF9F2 72.14%)",
    titleColor: "text-white",
    descColor: "text-[#1E1B4B]/90",
    btnBg: "bg-[#EA580C] hover:bg-[#C2410C] text-white",
    arrowClass: "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
    slug: "vishan"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" or "prev"
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2500); // duration of transitions (lock aligned to match 2.5s CSS duration)
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Autoplay functionality (slides every 7 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const activeSlide = slidesData[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">

      {/* Dynamic inline styles for entry animations */}
      <style>{`
        @keyframes slideUpEnter {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDownEnter {
          0% {
            opacity: 0;
            transform: translateY(-60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageNextEnter {
          0% {
            opacity: 0;
            transform: translateX(120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes imagePrevEnter {
          0% {
            opacity: 0;
            transform: translateX(-120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .anim-text-next {
          animation: slideUpEnter 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-text-prev {
          animation: slideDownEnter 3s     cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-image-next {
          animation: imageNextEnter 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-image-prev {
          animation: imagePrevEnter 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Main Single-slide Container with smooth background transition */}
      <div
        className="w-full h-full flex items-center justify-center relative px-6 md:px-20 lg:px-28 transition-all duration-700 ease-in-out"
        style={{ background: activeSlide.bgGradient }}
      >
        {/* Subtle radial light layout overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10 pt-20">

          {/* Left Column: Text & CTA (Keyed by index to force animation restart) */}
          <div
            key={`text-${currentIndex}`}
            className={`w-full lg:w-[50%] text-left space-y-6 lg:space-y-8 max-w-7xl ${direction === "next" ? "anim-text-next" : "anim-text-prev"
              }`}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-5xl font-semibold max-w-full leading-tight font-Plus Jakarta Sans ${activeSlide.titleColor}`}>
              {activeSlide.title}
            </h1>
            <p className={`text-sm sm:text-base md:text-xl leading-relaxed max-w-lg font-medium ${activeSlide.descColor}`}>
              {activeSlide.desc}
            </p>
            <div className="pt-2">
              <Link
                href={`/products/${activeSlide.slug}`}
                className={`inline-block px-8 py-3.5 rounded-full font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98]   ${activeSlide.btnBg}`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: Masked/Cutoff Logo Container with Arrows */}
          <div className="relative flex items-center justify-center w-full lg:w-[44%] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px]">

            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className={`absolute left-2 sm:left-6 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 z-20 cursor-pointer active:scale-90 ${activeSlide.arrowClass}`}
              aria-label="Previous Slide"
            >
              <LuChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className={`absolute right-2 sm:right-6 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 z-20 cursor-pointer active:scale-90 ${activeSlide.arrowClass}`}
              aria-label="Next Slide"
            >
              <LuChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Wrapper confining animations (Image moves only inside this space, cut off at edges) */}
            <div className="w-[96%] h-full overflow-hidden relative flex items-center justify-center">

              {/* Product Logo / Graphic (Keyed by index to animate entry) */}
              <img
                key={`img-${currentIndex}`}
                src={activeSlide.image}
                alt={activeSlide.title}
                className={`w-auto h-[90%] sm:h-full max-w-full object-contain select-none pointer-events-none hover:scale-[1.03] transition-transform duration-500 ease-out z-10 ${direction === "next" ? "anim-image-next" : "anim-image-prev"
                  }`}
              />

            </div>

          </div>

        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-30">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setDirection(idx > currentIndex ? "next" : "prev");
              setCurrentIndex(idx);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
