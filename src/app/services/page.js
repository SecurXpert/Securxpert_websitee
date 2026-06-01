import React from "react";
import ServicesHero from "./Hero";
import OurServices from "./OurServices";
import WeWork from "./WeWork";
import Technologies from "./Technologies";
import Cta from "./Cta";

export default function Services() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-0">
      {/* Curved Services Hero Section */}
      <ServicesHero />

      {/* Grid of Service Category Cards */}
      <OurServices />

      {/* How We Work Interactive Process Loop */}
      <WeWork />

      {/* Our Technology Stack Section */}
      <Technologies />

      <Cta />
    </div>
  );
}
