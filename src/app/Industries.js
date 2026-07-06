"use client";

import React from "react";
import Link from "next/link";
import {
  FaTv,
  FaRegFileAlt,
  FaShoppingCart,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa6";

const CountUp = ({ end, duration = 2000, suffix = "" }) => { 
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setCount(0);
        }
      },
      { threshold: 0.05 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = progress * (2 - progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function Industries() {
  const cards = [
    {
      icon: FaShoppingCart,
      title: "Retail and\nEcommerce",
      bg: "bg-[#475CE5]",
      absoluteClass:
        "absolute top-[28%] left-[-2%] min-[480px]:left-[2%] xl:left-[5%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-1",
    },
    {
      icon: FaGraduationCap,
      title: "Education\nTechnology",
      bg: "bg-[#F36E87]",
      absoluteClass:
        "absolute top-[13%] left-[34%] xl:left-[38%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[140px] xl:h-[140px]",
      animateClass: "animate-float-card-2",
    },
    {
      icon: FaHeart,
      title: "Healthcare",
      bg: "bg-[#6DD5C8]",
      absoluteClass:
        "absolute top-[28%] right-[-2%] min-[480px]:right-[2%] xl:right-[5%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-3",
    },
    {
      icon: FaRegFileAlt,
      title: "Legal",
      bg: "bg-[#7854E8]",
      absoluteClass:
        "absolute top-[50%] left-[-5%] min-[480px]:left-[0%] xl:left-[2%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-4",
    },
    {
      icon: FaTv,
      title: "Technology",
      bg: "bg-[#EB526E]",
      absoluteClass:
        "absolute bottom-[8%] left-[-2%] min-[480px]:left-[2%] xl:left-[4%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-5",
    },
    {
      icon: GrMultimedia,
      title: "Media &\nEntertainment",
      bg: "bg-[#4778E5]",
      absoluteClass:
        "absolute top-[50%] right-[-5%] min-[480px]:right-[0%] xl:right-[2%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-6",
    },
    {
      icon: FaHandshake,
      title: "Insurance",
      bg: "bg-[#F88D2A]",
      absoluteClass:
        "absolute bottom-[8%] right-[-2%] min-[480px]:right-[2%] xl:right-[4%] w-[92px] h-[92px] min-[480px]:w-[105px] min-[480px]:h-[105px] xl:w-[130px] xl:h-[130px]",
      animateClass: "animate-float-card-7",
    },
  ];

  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible px-4 sm:px-6 md:px-8 lg:px-10 pt-5 pb-0 select-none"
      style={{
        background:
          "linear-gradient(180deg, #210A4A 0%, #3E66F3 100%)",
      }}
    >
      {/* Ambient Background Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none z-0"></div>

      {/* Main Max-Width Wrapper */}
      <div className="max-w-[1540px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-10 w-full">

          {/* LEFT CONTENT */}
          <div className="text-white z-10 flex flex-col items-start text-left pb-12 pt-16 lg:pb-0 lg:pt-12 lg:col-span-5">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2]  font-medium max-w-5xl tracking-tight">
              Custom Outsourcing solutions for
              Multiple Industries
            </h2>

            <p className="mt-8 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-blue-100/80 max-w-4xl font-normal">
              Having worked alongside leading BPO organisations, we built a better, more efficient outsourcing model: technology-driven, tailored to your operations, and priced to actually reduce your costs — not just relocate them. From customer support to back-office processing, our teams plug into your workflows without the long-term lock-in. 
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 mt-6 w-full">

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  <CountUp end={500} suffix="+" />
                </h3>

                <p className="mt-2 text-sm text-[#FFFFFF] font-normal">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  <CountUp end={12} suffix="+" />
                </h3>

                <p className="mt-2 text-sm text-[#FFFFFF] font-normal">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  <CountUp end={10} suffix="" />
                </h3>

                <p className="mt-2 text-sm text-[#FFFFFF] font-normal">
                  Products Built
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  <CountUp end={98} suffix="%" />
                </h3>

                <p className="mt-2 text-sm text-[#FFFFFF] font-normal">
                  Client Retention
                </p>
              </div>
            </div>

            {/* BPO SPECIALIST BUTTON */}
            <div className="mt-12 sm:mt-6 w-full flex justify-start">
              <Link 
                href="/bpo#appointment" 
                className="bg-white/90 hover:bg-white/100 text-[#3D60E9] font-semibold px-8 py-4 sm:px-10 sm:py-4.5 rounded-[14px] shadow-[0_8px_20px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] cursor-pointer text-sm sm:text-[15px]"
              >
                Talk to a BPO Specialist
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - 3D Orbit Graphics */}
          <div className="relative flex items-end justify-center w-full max-w-[650px] mx-auto overflow-visible -mt-20 min-[380px]:-mt-16 min-[480px]:-mt-10 sm:-mt-6 md:-mt-2 lg:mt-0 origin-bottom scale-[0.82] min-[380px]:scale-[0.86] min-[480px]:scale-[0.92] sm:scale-[0.96] md:scale-[0.98] lg:scale-100 h-[420px] min-[380px]:h-[460px] min-[480px]:h-[540px] sm:h-[600px] md:h-[680px] lg:h-[620px] xl:h-[750px] lg:col-span-7">
            {/* Center Image */}
            <img
              src="/Home/Industries.png"
              alt="Support representative avatar illustration"
              className="absolute bottom-0 z-20 left-1/2 -translate-x-1/2 w-[42%] lg:w-[48%] xl:w-[335px] max-w-[340px] min-w-[180px] sm:min-w-[220px] md:min-w-[260px] object-contain pointer-events-none drop-shadow-2xl"
            />

            {/* Floating Cards */}
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`absolute z-30 ${card.absoluteClass} ${card.animateClass} ${card.bg} rounded-3xl flex flex-col items-center justify-center text-center text-white shadow-2xl transition-all duration-300 hover:scale-108 border border-white/15 p-2 xl:p-3 transform-gpu will-change-transform`}
              >
                <card.icon className="text-2xl xl:text-3xl mb-1 text-white flex-shrink-0" />

                <p className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[13px] font-semibold leading-tight tracking-tight whitespace-pre-line select-none">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
