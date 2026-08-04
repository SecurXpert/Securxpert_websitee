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

import Appointment from "./Appointment";

export const metadata = {
  title: "BPO | Business Process Outsourcing Services",
  description: "SecurXpert's BPO services automation, AI, and human expertise — customer support, back-office processing, and document automation for growing businesses",
};

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
      {/* <TeamMembers /> */}
      <FAQ /> 
      <Appointment /> 
    </div>
  );
}
