"use client";

import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "“Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est”",
      author: "Micle Deno",
      role: "President of Sales",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "“Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est”",
      author: "Jacob Jones",
      role: "President of Sales",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "“Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est”",
      author: "Sarah Jenkins",
      role: "Chief Technology Officer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      quote: "“Morbi consectetur elementum purus mattis cursus purus metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est”",
      author: "Robert Chen",
      role: "VP of Product",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 3500); // Auto-scrolls every 3.5 seconds
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false); // Stop auto-scroll on manual click
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoPlay(false); // Stop auto-scroll on manual click
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-[#172E9D] to-[#2541C5] py-14 text-white overflow-hidden select-none">
      
      {/* Background Graphic Lines / Accent Image */}
      <img
        src="/BPO/testimonials.png"
        alt="Testimonials Line Grid Vector"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE - TITLE AND CAROUSEL CONTROLS */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="relative inline-flex items-center mb-4">
              <span className="relative z-10 text-[#FFFFFF] text-sm font-medium tracking-[3.5px] uppercase font-sans">
                TESTIMONIALS
                {/* Soft highlight bottom pill bar */}
                <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-white/20 -z-10 rounded-sm" />
              </span>
            </div>
            <h3 className="text-white text-3xl sm:text-4xl lg:text-[36px] font-bold leading-[1.2] font-inter tracking-[-1px] mb-8">
              What Our Clients<br />Says About Our<br />Best Work.
            </h3>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="bg-[#2D45C4]/60 hover:bg-[#2D45C4] text-white w-12 h-12 rounded-full flex items-center justify-center border border-white/10 transition-all duration-200 active:scale-90 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-[#3B54DF] hover:bg-[#4E68F5] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - SCROLLING TESTIMONIAL CARDS */}
          <div className="lg:col-span-7 overflow-visible relative">
            
            {/* Carousel wrapper */}
            <div className="overflow-hidden py-4 -my-4 pr-10 lg:pr-0">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out -translate-x-[calc(var(--slide-idx)*100%+var(--slide-idx)*1.5rem)] sm:-translate-x-[calc(var(--slide-idx)*85%+var(--slide-idx)*1.5rem)] lg:-translate-x-[calc(var(--slide-idx)*80%+var(--slide-idx)*1.5rem)]"
                style={{ '--slide-idx': currentIndex }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="w-full sm:w-[85%] lg:w-[80%] flex-shrink-0 bg-white rounded-[24px] shadow-xl p-8 sm:p-10 flex flex-col justify-between border border-white/10 select-none"
                  >
                    {/* Blue Italicized Quote Text */}
                    <p className="bg-gradient-to-r from-[#2A2982] to-[#3D63EB] bg-clip-text text-transparent text-sm sm:text-base leading-relaxed italic mb-8 font-normal font-sans">
                      {t.quote}
                    </p>

                    {/* Author Profile Footer */}
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#3C58DE]/10 shadow-sm"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[#100D35] font-bold text-base leading-tight font-inter">
                          {t.author}
                        </span>
                        <span className="text-[#555555] text-sm leading-tight mt-1 font-normal">
                          {t.role}
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
