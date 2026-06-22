import React from "react";
import Hero from "./Hero";
import ProjectGrid from "./ProjectGrid";
import Cta from "../products/Cta"; // imported from products/Cta.js

export const metadata = {
  title: "Our Products | AI Recruitment, Healthcare, EdTech & Enterprise Software ",
  description: "Explore SecurXpert's in-house product portfolio — GrabJobz, Vishan, Arogya Narayan, Lauratek & more. Ten live products across HR, healthcare, education & logistics. ",
};
export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 overflow-hidden">
      <Hero />
      <ProjectGrid />
      <Cta />
    </main>
  );
}
