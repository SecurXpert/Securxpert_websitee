"use client";

// Careers Page Component
import CareersHero from "./Hero";
import Workplace from "./Workplace";
import Benifits from "./Benifits";
import Positions from "./positions/page";
import Whatgoes from "./Whatgoes";
import Ourworld from "./Ourworld";
import Howtobecame from "./Howtobecame";
import Stories from "./Stories";
import FollowUs from "./Followus";


export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-0 text-slate-800">
      <CareersHero />
      <Workplace />
      <Benifits />
      <Positions />
      <Whatgoes />
      <Ourworld />
      <Howtobecame />
      <Stories />
      <FollowUs />
    </div>
  );
}