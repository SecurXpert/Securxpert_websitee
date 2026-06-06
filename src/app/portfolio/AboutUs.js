"use client";

import React from "react";

const statsData = [
  {
    label: "Projects Completed",
    end: 120,
    suffix: "+",
  },
  {
    label: "Happy Clients",
    end: 300,
    suffix: "+",
  },
  {
    label: "Years of Experience",
    end: 6,
    suffix: "+",
  },
  {
    label: "Creative Experts",
    end: 15,
    suffix: "+",
  },
];

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

export default function AboutUs() {
  return (
    <section 
      style={{ background: "linear-gradient(180deg, #EBEFFF 1.48%, #FFFFFF 98.59%)" }}
      className="relative w-full overflow-hidden py-12 sm:py-14 px-6 sm:px-12 lg:px-24"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-200 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto w-full flex flex-col">
        
        {/* HEADER BLOCK */}
        <div className="text-left w-full mb-8 select-none">
          <span className="text-xs sm:text-sm font-bold text-[#3D60E9] tracking-[0.25em] uppercase block mb-4">
            About Us
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#1E1B4B] tracking-tight leading-tight max-w-4xl font-sans uppercase">
            A creative agency focused on thoughtful design and strong visual identity.
          </h3>
        </div>

        {/* OVERLAPPING TILTED IMAGES SECTION */}
        <div className="relative w-full flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12 py-6 my-2 min-h-[300px] lg:min-h-[400px]">
          
          {/* Image 1: Left (Tilted slightly left, shifted down) */}
          <div className="relative w-[220px] sm:w-[260px] md:w-[260px] aspect-[4/5] rounded-[5px] overflow-hidden shadow-2xl shadow-indigo-950/15 transform rotate-[15deg] translate-y-[20px] sm:translate-y-[-20px] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500">
            <img
              src="/Portfolio/AboutUs/aboutus1.jpg"
              alt="Design Process"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 2: Middle (Tilted slightly right, overlapping, shifted up, black-and-white) */}
          <div className="relative w-[220px] sm:w-[260px] md:w-[260px] aspect-[4/5] rounded-[5px] overflow-hidden shadow-2xl shadow-indigo-950/20 transform rotate-[-25deg] translate-y-[-10px] sm:translate-y-[10px] hover:rotate-0 hover:scale-105 hover:z-35 transition-all duration-500 z-10 grayscale">
            <img
              src="/Portfolio/AboutUs/aboutus2.jpg"
              alt="Strategic Planning"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Image 3: Right (Tilted slightly right, overlapping, shifted slightly down) */}
          <div className="relative w-[220px] sm:w-[260px] md:w-[260px] aspect-[4/5] rounded-[5px] overflow-hidden shadow-2xl shadow-indigo-950/15 transform rotate-[0deg] translate-y-[-20px] sm:translate-y-[15px] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-500">
            <img
              src="/Portfolio/AboutUs/aboutus3.jpg"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

        {/* BOTTOM SECTION: CTA BUTTONS & DESCRIPTION TEXT */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mt-8 md:mt-12">
          
          {/* CTA Buttons Row */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="bg-[#3D60E9] hover:bg-blue-700 hover:scale-[1.03] active:scale-95 text-white font-bold text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-[0_12px_24px_rgba(61,96,233,0.25)] transition-all duration-300 cursor-pointer uppercase tracking-wider">
              Learn More
            </button>
            <button className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-200">
              <svg className="w-4 h-4 text-[#3D60E9] fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Description Text */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed text-left max-w-xl md:max-w-2xl font-sans">
            Securxperts is a creative agency dedicated to helping brands express their ideas through clean design, strategic thinking, and impactful digital experiences. We believe great design is not just about aesthetics, but about creating meaning, clarity, and connection.
          </p>

        </div>

        {/* HORIZONTAL STATS BANNER */}
        <div className="w-full mt-12 border-t border-slate-200 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center lg:justify-items-start w-full">
            {statsData.map((stat, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-[12px] sm:text-md font-bold text-[#3E66F3] tracking-wide whitespace-nowrap uppercase text-right leading-tight max-w-[125px] select-none">
                  {stat.label}
                </span>
                <span className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-[#1E1B4B] tracking-tight leading-none">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
