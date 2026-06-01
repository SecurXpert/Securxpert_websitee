"use client";

import BPOHero from "./Hero";
import FeaturedServices from "./FeaturedServices";
import AboutUs from "./AboutUs";
import CaseStudies from "./CaseStudies";
import BPOServices from "./services";
import Cta from "./Cta";
import WhyChooseUs from "./WhyChooseUs";
import TeamMembers from "./TeamMembers";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import LatestBlogs from "./LatestBlogs";
import Appointment from "./Appointment";

export default function BPOPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-0 text-slate-800">
      <BPOHero />
      <FeaturedServices />
      <AboutUs />
      <BPOServices />
      <Cta />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <TeamMembers />
       <FAQ /> 
      <LatestBlogs />
      <Appointment /> 
    </div>
  );
}
