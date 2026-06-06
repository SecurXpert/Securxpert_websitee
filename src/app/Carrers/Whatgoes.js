"use client";
 
import React from "react";
 
export default function Whatgoes() {
  return (
    <section
      style={{ background: "linear-gradient(180deg, #2B2A84 0%, #374FC7 100%)" }}
      className="relative w-full py-16 md:py-14 overflow-hidden text-white"
    >
      {/* Decorative background glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
 
      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20">
       
        {/* Section Header */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h2 className="text-white text-center text-5xl font-normal font-sans">
            Take a peep at what goes on at Securxpert
          </h2>
        </div>
 
        {/* Solid Black Frame Grid Layout matching the mockup */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 w-full lg:h-[580px]">
         
          {/* COLUMN 1: Left Column (48% width) */}
          <div className="w-full lg:w-[48%] flex flex-col gap-3">
            {/* Top Big Image (Landscape) */}
            <div className="w-full h-[250px] lg:h-[64%] overflow-hidden group">
              <img
                src="/Carrers/whatgoeson/one.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Office workspace"
              />
            </div>
            {/* Bottom Row (Two smaller images side by side) */}
            <div className="w-full h-[120px] lg:h-[36%] grid grid-cols-2 gap-3">
              <div className="w-full h-full overflow-hidden group">
                <img
                  src="/Carrers/whatgoeson/two.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  alt="Colleague conversation"
                />
              </div>
              <div className="w-full h-full overflow-hidden group">
                <img
                  src="/Carrers/whatgoeson/three.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  alt="Workdesk concentration"
                />
              </div>
            </div>
          </div>
 
          {/* COLUMN 2: Middle Column (26% width) */}
          <div className="w-full lg:w-[26%] flex flex-col gap-3">
            {/* Top Image (Floral shirt woman) */}
            <div className="w-full h-[130px] lg:h-[33%] overflow-hidden group">
              <img
                src="/Carrers/workplace/work.3.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Meeting room discussion"
              />
            </div>
            {/* Bottom Image (Patchwork lounge armchair) */}
            <div className="w-full h-[240px] lg:h-[67%] overflow-hidden group">
              <img
                src="/Carrers/whatgoeson/four.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Patchwork armchair lounge"
              />
            </div>
          </div>
 
          {/* COLUMN 3: Right Column (26% width) */}
          <div className="w-full lg:w-[26%] flex flex-col">
            {/* Full Height Tall Image (Maroon shirt colleague smiling) */}
            <div className="w-full h-[370px] lg:h-full overflow-hidden group">
              <img
                src="/Carrers/whatgoeson/five.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Colleague smiling"
              />
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}