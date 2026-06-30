"use client";

import React from "react";

export default function Cta() {
  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
    },
    {
      value: "12+",
      label: "Countries Served",
    },
    {
      value: "10",
      label: "Products Built",
    },
    {
      value: "98%",
      label: "Client Retention",
    },
  ];

  return (
    <section 
      className="w-full relative overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-18"
      style={{
        backgroundImage: "url('/AboutUs/cta.png')",
      }}
    >
      <div className="max-w-[90%] 2xl:max-w-[1200px] mx-auto px-6 md:pl-10 md:pr-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-3">
              {/* Stat Value */}
              <span className="text-4xl sm:text-5xl lg:text-[50px] font-semibold font-Plus Jakarta Sans tracking-tight leading-none">
                {stat.value}
              </span>
              {/* Stat Label */}
              <span className="text-white/90 text-sm sm:text-base lg:text-[18px] font-medium font-Raleway tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
