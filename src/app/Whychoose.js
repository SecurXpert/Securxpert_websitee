"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  BadgeHelp,
} from "lucide-react";
import { TbRoute } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Whychoose() {
  return (
    <section className="bg-[#FFFFFF] flex items-center pt-8 pb-0 lg:pt-12 lg:pb-0 -mb-6 lg:-mb-12 px-6 md:px-16 xl:px-24 overflow-hidden">

      {/* Fluid responsive 12-column grid and gaps */}
      <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-20 items-center w-full">

        {/* LEFT CONTENT - Fluid margin/padding on MacBook and giant screens */}
        <div className="z-10 lg:col-span-5 lg:-mt-16 xl:-mt-24 2xl:-mt-32 lg:pl-4 xl:pl-8 2xl:pl-10">

          {/* Small Heading */}
          <p className="text-[#3734A9] font-semibold uppercase tracking-wide mb-3 text-xs lg:text-[10px] xl:text-sm 2xl:text-md">
            WHY CHOOSE SECURXPERTS
          </p>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-[26px] xl:text-[32px] 2xl:text-[42px] font-bold leading-tight text-[#000000] max-w-2xl tracking-tight"
          >
           Specialist Support, Without the Overhead 
          </motion.h2>

          {/* Description */} 
          <p className="text-[#6E6E96]/90 text-sm sm:text-base lg:text-[12px] xl:text-[13px] 2xl:text-[16px] leading-relaxed mt-3 lg:mt-3 max-w-xl font-normal">
            You get a single point of accountability across development, infrastructure, and support — backed by fixed timelines and transparent pricing, not open-ended retainers.
          </p>

          {/* FEATURES */}
          <div className="mt-5 lg:mt-5 xl:mt-6 2xl:mt-10 space-y-4 lg:space-y-4 xl:space-y-5 2xl:space-y-6">

            {/* ITEM 1 */}
            <div className="flex gap-4 lg:gap-4 xl:gap-5 items-start">
              <div className="min-w-[60px] w-[60px] h-[60px] lg:min-w-[46px] lg:w-[46px] lg:h-[46px] xl:min-w-[50px] xl:w-[50px] xl:h-[50px] 2xl:min-w-[72px] 2xl:w-[72px] 2xl:h-[72px] rounded-full bg-[#FF7F5C] flex items-center justify-center shadow-md shrink-0">
                <TbRoute className="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-7 text-white" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-sm xl:text-base 2xl:text-xl font-bold text-[#1E1E2F] tracking-tight">
                  End-to-End Delivery
                </h3>
                <p className="text-[#6E6E96] text-xs sm:text-sm lg:text-[12px] xl:text-[13px] 2xl:text-[15px] leading-relaxed mt-1.5 max-w-lg">
                 From requirements to deployment to ongoing support, one team owns the outcome — not just the handoff. 

                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4 lg:gap-4 xl:gap-5 items-start">
              <div className="min-w-[60px] w-[60px] h-[60px] lg:min-w-[46px] lg:w-[46px] lg:h-[46px] xl:min-w-[50px] xl:w-[50px] xl:h-[50px] 2xl:min-w-[72px] 2xl:w-[72px] 2xl:h-[72px] rounded-full bg-[#4A38C2] flex items-center justify-center shadow-md shrink-0">
                <FaProjectDiagram className="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 text-white" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-sm xl:text-base 2xl:text-xl font-bold text-[#1E1E2F] tracking-tight">
                  Structured, Predictable Process 
                </h3>
                <p className="text-[#6E6E96] text-xs sm:text-sm lg:text-[12px] xl:text-[13px] 2xl:text-[15px] leading-relaxed mt-1.5 max-w-lg">
                 Every engagement runs on agreed milestones and SLAs, so you always know what's shipping and when. 
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4 lg:gap-4 xl:gap-5 items-start">
              <div className="min-w-[60px] w-[60px] h-[60px] lg:min-w-[46px] lg:w-[46px] lg:h-[46px] xl:min-w-[50px] xl:w-[50px] xl:h-[50px] 2xl:min-w-[72px] 2xl:w-[72px] 2xl:h-[72px] rounded-full bg-[#4563FF] flex items-center justify-center shadow-md shrink-0">
                <BiSupport className="w-4 h-4 xl:w-4.5 xl:h-4.5 2xl:w-6 2xl:h-6 text-white" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-sm xl:text-base 2xl:text-xl font-bold text-[#1E1E2F] tracking-tight">
                  24/7 Support
                </h3>
                <p className="text-[#6E6E96] text-xs sm:text-sm lg:text-[12px] xl:text-[13px] 2xl:text-[15px] leading-relaxed mt-1.5 max-w-lg">
                 Round-the-clock monitoring and response, so issues get caught before your customers notice them. 
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION - Maximized and centered at the bottom on mobile */}
        <div className="relative flex justify-center lg:justify-end items-center z-10 w-full mt-2 lg:col-span-7 px-2">
          <img
            src="/Home/WhyChoose.png"
            alt="Why Choose SecurXperts"
            className="w-full sm:w-[90%] md:w-[80%] lg:w-full max-w-full lg:max-w-[850px] xl:max-w-[950px] object-contain select-none drop-shadow-2xl mx-auto block"
          />
        </div>

      </div>
    </section>
  );
}
