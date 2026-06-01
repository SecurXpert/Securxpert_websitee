import React from "react";
import Hero from "./Hero";
import OurServices from "../services/OurServices";
import OurProducts from "../OurProducts";
import OurTeam from "../OurTeam";
import OurProjects from "./OurProjects";

export const metadata = {
  title: "Portfolio | SecurXpert Technologies",
  description: "Explore our latest digital consulting, technology transformation, and smart digital solutions portfolio.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Hero />
      <OurProjects/>
      <OurServices/>
      <OurProducts/>
      <OurTeam/>
    
    </div>
  );
}
