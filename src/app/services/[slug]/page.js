import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import webDevelopment from "@/utils/services/web-development";
import digitalMarketing from "@/utils/services/digital-marketing";
import mobileAppDevelopment from "@/utils/services/mobile-app-development";

const servicesData = {
  "web-development": webDevelopment,
  "digital-marketing": digitalMarketing,
  "mobile-app-development": mobileAppDevelopment,
};

export async function generateStaticParams() {
  return [
    { slug: "web-development" },
    { slug: "digital-marketing" },
    { slug: "mobile-app-development" }
  ];
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      
      {/* Dynamic Service Hero with White/Blue Curved Background */}
      <div className="w-full bg-white overflow-hidden text-slate-800">
        <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto mt-20 2xl:mt-0 pt-0 pb-10 lg:pb-14">

          {/* Soft Background Blue Glow Effect */}
          <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

          <div className="relative px-6 md:px-20 pt-28 sm:pt-36 lg:pt-20 xl:pt-24 pb-0 flex flex-col items-center overflow-visible bg-transparent w-full">

            {/* High-Performance Clipped Background Image Tag */}
            <img
              src="/Services/hero-bg.png"
              alt="Services Hero Curved Background"
              className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-2"
            />

            {/* Subtle glow layer overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-0" />

            {/* Breadcrumb Navigation inside Hero curve for clean styling */}
            <nav className="relative z-10 w-full max-w-5xl mx-auto mb-6">
              <ol className="flex items-center justify-center space-x-2 text-xs text-blue-200/80 lg:text-blue-100/90 font-medium">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li className="text-white capitalize font-semibold">{slug.replace(/-/g, " ")}</li>
              </ol>
            </nav>

            {/* Category Pill Button */}
            <div className="relative z-10 flex justify-center mb-3 pt-2">
              <span className="px-4 py-1 rounded-lg text-sm lg:text-base font-medium tracking-tight text-[#29257B] bg-[#D9D9D9] border border-slate-200 shadow-sm uppercase">
                {service.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="relative z-10 text-center text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white tracking-normal max-w-4xl mx-auto px-6 font-inter capitalize">
              {service.title}
            </h1>

            {/* Description */}
            <p className="relative z-10 text-center mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-[#FFFFFF] max-w-3xl mx-auto px-6 font-normal opacity-90">
              {service.description}
            </p>

            {/* Primary Action Button */}
            <div className="relative z-10 flex justify-center mt-8 mb-6">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-base shadow-md transition-all active:scale-95 duration-150"
              >
                Get Started Now
              </Link>
            </div>

          </div>
        </section>
      </div>

      {/* Main Content Details Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Offerings and Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#1E1B4B] tracking-tight">What We Offer</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Discover our specialized capabilities and solutions built to scale your business operations, boost security, and streamline workflows.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {service.offerings.map((off, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1B4B] flex items-center space-x-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        service.accentColor === "cyan"
                          ? "bg-cyan-500"
                          : service.accentColor === "blue"
                          ? "bg-blue-600"
                          : "bg-purple-500"
                      }`}
                    />
                    <span>{off.title}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-5.5">
                    {off.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar CTA card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 relative overflow-hidden space-y-6 shadow-xl text-white">
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${
                  service.accentColor === "cyan"
                    ? "bg-cyan-400/5"
                    : service.accentColor === "blue"
                    ? "bg-blue-400/5"
                    : "bg-purple-400/5"
                }`}
              />
              
              <h3 className="text-2xl font-bold text-white tracking-tight">Why Choose SecurXpert?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need a consultation, a custom feature design, or a security audit of your current stack, our engineering team is here to assist.
              </p>
              
              <div className="border-t border-slate-800 my-4" />

              <ul className="space-y-3.5 text-sm text-slate-200">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full text-center block font-bold py-4 rounded-xl text-base transition-all bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 hover:from-blue-700 hover:to-violet-800 text-white shadow-lg active:scale-95 duration-150"
                >
                  Consult Our Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
