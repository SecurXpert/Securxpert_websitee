import React from "react";
import Link from "next/link";
import Hero from "./Hero";
import Partners from "./Partners";
import HomeServices from "./HomeServices";
import OurProducts from "./OurProducts";
import Industries from "./Industries";
import Whychoose from "./Whychoose";
import OurTeam from "./OurTeam";
import Cta from "./Cta";

export const metadata = {
  title: " IT Services & Software Development Company in Hyderabad",
  description: "SecurXpert is a leading IT services & software development company in Hyderabad offering AI automation, cloud, cybersecurity & managed IT solutions.",
  keywords: [
    "IT Services Company in Hyderabad",
    "Software Development Company in Hyderabad",
    "Custom Software Development",
    "AI Automation Services",
    "Cloud & DevOps Services",
    "Cybersecurity Services",
    "Managed IT Services",
    "Digital Transformation Solutions",
    "IT Staffing Services",
    "Digital Marketing Services",
    "Mobile App Development Company",
    "Web Application Development",
    "Enterprise Software Development",
    "Business Process Outsourcing (BPO) Services",
    "Technology Solutions Company Hyderabad"
  ]
};

export default function Home() { 
  return (
    
    <div className="relative min-h-screen bg-white overflow-hidden pt-0">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern High-Fidelity Hero Section */}
      <Hero />

      {/* Premium Services Section */}
      <HomeServices />
      
      {/* Our Products Slider Section */}
      <OurProducts />
      
      <Industries />
       <Partners />
      <Whychoose />
      <OurTeam />
      <Cta />
    </div>
  );
}
