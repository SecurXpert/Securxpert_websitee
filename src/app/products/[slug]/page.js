import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft, LuCircleCheck } from "react-icons/lu";

import grabjobz from "@/utils/products/grabjobz";
import lensLight from "@/utils/products/lens-light";
import devtalent from "@/utils/products/devtalent";
import vishan from "@/utils/products/vishan";
import arogyaNarayan from "@/utils/products/arogya-narayan";
import hisphere from "@/utils/products/hisphere";
import lauratek from "@/utils/products/lauratek";
import lauratek2 from "@/utils/products/lauratek-2-0";
import logsphere from "@/utils/products/logsphere";
import onestepMedi from "@/utils/products/onestep-medi";
import shrava360 from "@/utils/products/shrava360";

import BPOServices from "@/app/BPO/services";
import ProductFAQ from "@/app/products/ProductFAQ";
import Appointment from "@/app/BPO/Appointment";
import VideoPlayer from "../VideoPlayer";

const productsData = {
  "grabjobz": grabjobz,
  "lens-light": lensLight,
  "devtalent": devtalent,
  "vishan": vishan,
  "arogya-narayan": arogyaNarayan,
  "hisphere": hisphere,
  "lauratek": lauratek,
  "lauratek-2-0": lauratek2,
  "logsphere": logsphere,
  "onestep-medi": onestepMedi,
  "shrava360": shrava360
};


export async function generateStaticParams() {
  return [
    { slug: "grabjobz" },
    { slug: "lens-light" },
    { slug: "devtalent" },
    { slug: "vishan" },
    { slug: "arogya-narayan" },
    { slug: "hisphere" },
    { slug: "lauratek" },
    { slug: "lauratek-2-0" },
    { slug: "logsphere" },
    { slug: "onestep-medi" },
    { slug: "shrava360" }
  ];
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-white text-slate-900 select-none pt-0">
      
      {/* Top Blue Section */}
      <section 
        className="relative w-full pt-32 pb-48 lg:pb-64 overflow-hidden"
        style={{ background: product.bg }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
        
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 z-10">
          
          {/* Header Row: Logo + Title + Back Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* Product Logo Box */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 shrink-0">
                <img src={product.logo} alt={`${product.title} Logo`} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                {product.title}
              </h1>
            </div>
            
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-1 bg-white text-blue-700 hover:text-blue-800 hover:bg-slate-50 font-semibold px-10 py-2.5 rounded-full shadow-md transition-all duration-200 active:scale-95"
            >
              <LuChevronLeft className="w-5 h-5" /> Back
            </Link>
          </div>

          {/* Metadata Row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90">
            <div className="flex flex-col gap-1.5 border-l border-white/20 pl-4">
              <span className="text-sm font-medium  tracking-wider opacity-80">Type Of Industries</span>
              <span className="text-sm sm:text-base font-medium">{product.industry}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l border-white/20 pl-4">
              <span className="text-sm font-medium  tracking-wider opacity-80">Services</span>
              <span className="text-sm sm:text-base font-medium">{product.services}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l border-white/20 pl-4">
              <span className="text-sm font-medium  tracking-wider opacity-80">Project Date</span>
              <span className="text-sm sm:text-base font-medium">{product.date}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l border-white/20 pl-4">
              <span className="text-sm font-medium  tracking-wider opacity-80">Live Link</span>
              <div className="mt-1">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 rounded-full text-xs font-medium hover:bg-white/20 transition-colors">
                  See live <span className="text-[15px]">↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Overlapping Mockup Section */}
      <section className="relative w-full max-w-[1350px] mx-auto px-6 md:px-12 lg:px-20 z-20 -mt-32 lg:-mt-48">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/7] rounded-2xl sm:rounded-3xl  overflow-hidden flex items-center justify-center border-[4px] border-white">
          <img 
            src={product.bannerImage || product.image} 
            alt={`${product.title} Dashboard`} 
            className="w-full h-full object-container transition-transform duration-700 hover:scale-102"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 py-16 sm:py-14">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-8 font-sans">
            Introduction
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {product.desc}
          </p>
        </div>
      </section>

      {/* Product Video Section */}
      <section className="relative w-full pt-20">
        
        {/* Blue Background Top Half */}
        <div 
          className="absolute inset-x-0 top-0 h-[70%] sm:h-[75%]"
          style={{ background: "linear-gradient(180deg, #3445B5 0%, #2D2F8D 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
          {/* Decorative dots pattern left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 opacity-20 pointer-events-none hidden md:block">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)', backgroundSize: '16px 16px' }} />
          </div>
        </div>

        {/* White Background Bottom Half */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] sm:h-[25%] bg-white" />

        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 text-center z-10 pb-8 sm:pb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-12 font-sans">
            Product Video
          </h2>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border-[2px] sm:border-[4px] border-[#111827]">
            <VideoPlayer product={product} />
          </div>
        </div>
      </section>

      {/* Featured Services Continuation */}
      <BPOServices />

      {/* FAQ Continuation */}
      <ProductFAQ />
      <Appointment/>

    </main>
  );
}
