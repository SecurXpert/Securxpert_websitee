import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import OurServices from "../services/OurServices";
import OurProducts from "../OurProducts";
import OurTeam from "../OurTeam";
import OurProjects from "./OurProjects";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

export const metadata = {
  title: "Portfolio | SecurXpert Technologies",
  description: "Explore our latest digital consulting, technology transformation, and smart digital solutions portfolio.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen w-full"> 
      <Hero />
      <OurProjects />
      <OurServices />
      <AboutUs />
      <OurProducts />
      <WhyChooseUs />
      <Achievements />
      <Process />
      <OurTeam />
      <Testimonials /> 
      <Faq />
    </div>
  );
}
