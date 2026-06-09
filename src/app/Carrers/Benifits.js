"use client";
 
import React from "react";
import { GoShieldCheck, GoRocket } from "react-icons/go";
import { PiHandsClappingLight } from "react-icons/pi";
import { PiConfetti, PiGraduationCap, PiBaby, PiTarget, PiCake,PiEyeglasses,PiClock } from "react-icons/pi";
import { IoCalendarNumberOutline, IoWalletOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
 
 
// Custom SVG Icons matching the design in the image
const ClockIcon = () => (
  <PiClock size={25} className="text-black shrink-0" />
);
 
const DumbbellIcon = () => (
  <CiDumbbell size={25} className="text-black shrink-0" />
);
 
const ShieldIcon = () => (
  <GoShieldCheck size={25} className="text-black shrink-0" />
);
 
const MarriageIcon = () => (
  <PiHandsClappingLight size={25} className="text-black shrink-0" />
);
 
const PartyIcon = () => (
  <PiConfetti size={25} className="text-black shrink-0" />
);
 
const RocketIcon = () => (
  <GoRocket size={25} className="text-black shrink-0" />
);
 
const CalendarIcon = () => (
  <IoCalendarNumberOutline size={25} className="text-black shrink-0" />
);
 
const WalletIcon = () => (
  <IoWalletOutline size={25} className="text-black shrink-0" />
);
 
const GlassesIcon = () => (
  <PiEyeglasses size={25} className="text-black shrink-0" />
);
 
const GraduationIcon = () => (
  <PiGraduationCap size={25} className="text-black shrink-0" />
);
 
const BabyIcon = () => (
  <PiBaby size={25} className="text-black shrink-0" />
);
 
const ReferralIcon = () => (
  <PiTarget size={25} className="text-black shrink-0" />
);
 
const CakeIcon = () => (
  <PiCake size={25} className="text-black shrink-0" />
);
 
export default function Benifits() {
  const benefitsList = [
    { title: "Flexible working hours", icon: ClockIcon },
    { title: "Sport compensation", icon: DumbbellIcon },
    { title: "Health care Insurance", icon: ShieldIcon },
    { title: "Marriage bonus", icon: MarriageIcon },
    { title: "Fun team events", icon: PartyIcon },
    { title: "Professional grow budget", icon: RocketIcon },
    { title: "30 days paid vacation", icon: CalendarIcon },
    { title: "Competitive salary", icon: WalletIcon },
    { title: "Compensation for eyeglasses", icon: GlassesIcon },
    { title: "Allowance for first-graders", icon: GraduationIcon },
    { title: "Childbirth allowance", icon: BabyIcon },
    { title: "Employee referral bonus", icon: ReferralIcon },
    { title: "Birthdays celebration", icon: CakeIcon },
  ];
 
  return (
    <section className="relative w-full py-16 md:py-14 bg-white overflow-hidden text-slate-800">
      <div className="relative w-full max-w-[95%] 2xl:max-w-[1620px] mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[#100D35] text-center text-5xl font-normal mb-4 font-sans">
            What benefits are waiting for you?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">
            Securxpert offers a variety of hand-picked benefits that you can take advantage of!
          </p>
        </div>
 
        {/* Benefits Grid (5 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 px-5 rounded-xl transition-all duration-300 min-h-[96px] border border-slate-100/50 shadow-sm hover:shadow-md hover:scale-[1.02] w-full"
                style={{ background: "linear-gradient(180deg, #D3D1FF 0%, #F6F7FF 100%)" }}
              >
                <Icon />
                <span className="text-[#100D35] text-md font-regular-400">
                  {benefit.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
