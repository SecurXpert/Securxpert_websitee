"use client";

import React from "react";
import Hero from "./Hero";
import ProjectGrid from "./ProjectGrid";
import Cta from "../products/Cta"; // imported from products/Cta.js


export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 overflow-hidden">
      <Hero />
      <ProjectGrid />
      <Cta />
    </main>
  );
}
