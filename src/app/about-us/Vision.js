"use client";

import React from "react";
import { LuCheck } from "react-icons/lu";

export default function Vision() {
  return (
    <section className="w-full py-12 lg:py-14 overflow-hidden text-white" style={{ background: "linear-gradient(180deg, #2B2A84 0%, #374FC7 100%)" }}>
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20"> 

        {/* Top Block: Our Vision & Vision Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Column: Our Vision Details */}
          <div className="flex flex-col space-y-6"> 
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold font-Plus Jakarta Sans leading-tight">
              Our Vision
            </h2>
            <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed font-medium font-Raleway">
              <p>
                To empower businesses with technology solutions that simplify operations, accelerate growth, and create meaningful digital experiences — without the complexity or overhead that usually comes with "enterprise-grade."
              </p>
              <p>
                We believe technology should not only solve problems but also create new opportunities. That vision is driven by collaboration, transparency, and a commitment to delivering real outcomes — not just deliverables.
              </p>
              <p>
                Through Continuous Learning And Modern Digital Strategies, We Aim To Become A Trusted
                Technology Partner For Businesses Worldwide, Helping Them Adapt And Thrive In An
                Ever-Evolving Digital Landscape.
              </p>
            </div>
          </div>

          {/* Right Column: Vision Highlights Checklist */}
          <div className="flex flex-col space-y-6 lg:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold font-Plus Jakarta Sans leading-tight">
              Vision Highlights
            </h2>

            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Deliver Innovative And Scalable IT Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Build long-term partnerships with clients, not one-off projects </span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Lead with digital transformation, not just digital maintenance </span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Maintain technical excellence through continuous learning </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Block: Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14 sm:mt-16 lg:mt-20 items-center">

          {/* Left Column: Image wrapper */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[580px] aspect-[4/3] rounded-[5px] overflow-hidden ">
              <img
                src="/AboutUs/mission.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Our Mission Details */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold font-Plus Jakarta Sans leading-tight">
              Our Mission
            </h2>
            <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed font-normal font-Raleway">
              <p>
                Our mission is to provide reliable, future-ready technology solutions that help businesses improve efficiency, enhance user experiences, and achieve their digital goals with confidence.
              </p>
              <p>
                We combine strategy, creativity, and engineering discipline to deliver solutions tailored to each client's actual needs — from custom software to cloud infrastructure and AI services — with a consistent focus on quality, performance, and long-term value over quick wins.
              </p>
              <p>
                By Fostering Innovation, Transparency, And Customer-Centric Thinking, We Strive To
                Create Digital Products And Services That Make A Real Difference For Businesses Across
                Industries.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
