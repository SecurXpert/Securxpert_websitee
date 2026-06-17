"use client";

import React from "react";
import { LuCheck } from "react-icons/lu";

export default function Vision() {
  return (
    <section className="w-full py-16 sm:py-14 overflow-hidden text-white" style={{ background: "linear-gradient(180deg, #2B2A84 0%, #374FC7 100%)" }}>
      <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:pl-10 md:pr-20">
        
        {/* Top Block: Our Vision & Vision Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Our Vision Details */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold font-Plus Jakarta Sans leading-tight">
              Our Vision
            </h2>
            <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed font-medium font-Raleway">
              <p>
                To Empower Businesses With Innovative Technology Solutions That Simplify Operations, 
                Accelerate Growth, And Create Meaningful Digital Experiences. We Envision A Future Where 
                Every Organization Can Leverage Smart, Scalable, And Secure IT Solutions To Achieve 
                Lasting Success.
              </p>
              <p>
                We Believe Technology Should Not Only Solve Problems But Also Create Opportunities For 
                Transformation And Innovation. Our Vision Is Driven By Creativity, Collaboration, And A 
                Commitment To Delivering Excellence In Every Project We Undertake.
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
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal font-Raleway">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting 
              Industry Red Lorem Ipsum Has Been The Industry S Standard Dummy 
              Text Ever
            </p>
            
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Deliver Innovative And Scalable IT Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Build Long-Term Partnerships With Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Focus On Digital Transformation And Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <LuCheck className="text-[#00F2FE] w-6 h-6 stroke-[3px] shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Maintain Excellence Through Continuous Innovation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Block: Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16 sm:mt-24 items-center">
          
          {/* Left Column: Image wrapper */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[580px] aspect-[4/3] rounded-[5px] overflow-hidden ">
              <img
                src="/AboutUs/mission.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover select-none"
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
                Our Mission Is To Provide Reliable, Future-Ready Technology Solutions That Help 
                Businesses Improve Efficiency, Enhance User Experiences, And Achieve Their Digital 
                Goals With Confidence.
              </p>
              <p>
                We Are Committed To Combining Strategy, Creativity, And Advanced Technologies To 
                Deliver Impactful Solutions Tailored To Each Client's Unique Needs. From Software 
                Development To Cloud And AI Services, We Focus On Quality, Performance, And Long-Term 
                Value.
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
