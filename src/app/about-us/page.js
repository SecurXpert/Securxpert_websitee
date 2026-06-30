

import React from "react";
import Hero from "./Hero";
import OurStories from "./OurStories";
import Vision from "./Vision";
import OurValues from "./OurValues";
import AboutCta from "./Cta";
import OurTeam from "../OurTeam";
import Appointment from "../bpo/Appointment";
import ServicesCta from "../services/Cta";
import OurOffices from "../contact/OurOffices";

export const metadata = {
  title: "About SecurXpert Technologies | IT Solutions & Digital Transformation ",
  description: "SecurXpert Technologies is a Hyderabad-based IT company delivering software, cloud, and cybersecurity solutions for 500+ businesses across 12+ countries. ",
};

export default function AboutPage() {
  return (
    <main className="bg-white"> 
      <Hero />
      <OurStories />
      <Vision />
      <OurValues />
      <AboutCta />
      <OurTeam /> 
      <OurOffices/>
      <Appointment/>
      <ServicesCta/>
    </main>
  );
}
