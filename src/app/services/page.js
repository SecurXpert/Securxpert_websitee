import React from "react";
import ServicesHero from "./Hero";
import OurServices from "./OurServices";
import WeWork from "./WeWork";
import Technologies from "./Technologies"; 
import Cta from "./Cta";

export function generateMetadata() {
  return {
    title: "Expert IT Services | AI, Cloud & Cybersecurity Solutions",
    description: "SecurXpert offers software development, AI automation, cloud, cybersecurity, UI/UX & digital marketing services to help businesses grow securely.",
    keywords: "software development company, AI automation services, cybersecurity services, IT support services, cloud solutions, UI/UX design, digital marketing agency, managed IT services, business outsourcing, enterprise IT solutions"
  };
}
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
