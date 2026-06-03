"use client";

import React from "react";
import Hero from "./Hero";
import OurStories from "./OurStories";
import Vision from "./Vision";
import OurValues from "./OurValues";
import AboutCta from "./Cta";
import OurTeam from "../OurTeam";
import Appointment from "../BPO/Appointment";
import ServicesCta from "../services/Cta";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <OurStories />
      <Vision />
      <OurValues />
      <AboutCta />
      <OurTeam /> 
      <Appointment/>
      <ServicesCta/>
    </main>
  );
}
