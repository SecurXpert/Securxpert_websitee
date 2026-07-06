import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";
import softwareDevelopment from "@/utils/services/software-development";
import digitalMarketing from "@/utils/services/digital-marketing";
import mobileAppDevelopment from "@/utils/services/mobile-app-development";
import uiUx from "@/utils/services/ui-ux";
import itSupport from "@/utils/services/it-support";
import cloudServices from "@/utils/services/cloud-services";
import bpoServices from "@/utils/services/bpo-services";
import aiChatbots from "@/utils/services/ai-chatbots";
import cybersecurity from "@/utils/services/cybersecurity";
import Faq from "./Faq";
import TechShowcase from "./TechShowcase";

const servicesData = {
  "software-development": softwareDevelopment,
  "digital-marketing": digitalMarketing,
  "mobile-app-development": mobileAppDevelopment,
  "ui-ux-design": uiUx,
  "it-support": itSupport,
  "cloud-services": cloudServices,
  "bpo-services": bpoServices,
  "ai-chatbots": aiChatbots,
  "cybersecurity": cybersecurity
};



export async function generateStaticParams() {
  return [
    { slug: "software-development" },
    { slug: "it-support" },
    { slug: "cloud-services" },
    { slug: "bpo-services" },
    { slug: "ai-chatbots" },
    { slug: "digital-marketing" },
    { slug: "ui-ux-design" },
    { slug: "cybersecurity" },
    { slug: "mobile-app-development" }
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle || `${service.title} | SecurXpert`,
    description: service.metaDescription || service.heroDesc || service.description,
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const meta = {
    category: service.category || `05 — ${service.subtitle || "SERVICE"}`,
    title: service.heroTitle || service.title,
    desc: service.heroDesc || service.description,
    illustration: service.illustration !== undefined ? service.illustration : "/services-media/services.png",
    bgIllustration: service.bgIllustration || "/services-media/hero-bg.png"
  };

  const capabilities = service.capabilities || [];
  const processHeading = service.processHeading || "Our Process";
  const processSteps = service.process || [];
  const techStack = service.techStack || [];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">

      {/* Dynamic Service Hero with White/Blue Curved Background */}
      <div className="w-full bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none md:bg-white overflow-hidden text-slate-800">
        <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-0 overflow-visible">

          <div className="relative px-3 sm:px-6 md:px-20 pt-18 sm:pt-24 md:pt-28 lg:pt-20 xl:pt-14 pb-0 flex flex-col items-center justify-between overflow-visible bg-transparent w-full min-h-[580px] lg:min-h-[700px] xl:min-h-[800px] max-h-[580px] lg:max-h-[700px] xl:max-h-[800px]">

            {/* High-Performance Clipped Background Image Tag */}
            <img
              src={meta.bgIllustration}
              alt="Services Hero Curved Background"
              className="hidden lg:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-2 lg:mt-3"
            />

            {/* Content Container (Coded from user mockup screen) */}
            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-4 pt-2">

              {/* Back Button */}
              <div className="hidden md:flex w-full justify-start mb-1 mt-15 -ml-4 md:-ml-8 lg:-ml-12 xl:-ml-32 2xl:-ml-90 relative top-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-semibold text-lg sm:text-xl lg:text-[22px] transition-all duration-150"
                >
                  <LuChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" /> Back
                </Link>
              </div>

              {/* Category Pill Tag */}
              <div className="inline-block bg-[#D9D9D9] text-[#29257B] px-4 sm:px-8 py-1.5 rounded-lg text-sm sm:text-lg font-bold tracking-wide uppercase shadow-sm whitespace-nowrap mt-8 lg:mt-0">
                {meta.category}
              </div>

              {/* Main Title */}
              <h1 className="text-white text-[24px] tracking-tight sm:tracking-normal sm:text-4xl lg:text-[44px] xl:text-[50px] font-semibold leading-tight max-w-full mx-auto px-0 sm:px-4 font-inter">
                {meta.title}
              </h1>

              {/* Description */}
              <p className="text-blue-100/90 text-xs sm:text-sm lg:text-[19px]  leading-relaxed max-w-4xl mx-auto px-4 font-normal opacity-90">
                {meta.desc}
              </p>

            </div>

            {/* Centered Illustration (Anchored to bottom curve) */}
            {meta.illustration && (
              <div className="relative z-10 w-full flex justify-center items-end mt-auto h-[150px] sm:h-[200px] lg:h-[240px] xl:h-[320px] max-w-full overflow-visible">
                <img
                  src={meta.illustration}
                  alt={meta.title}
                  className="w-auto h-auto max-h-[130%] sm:max-h-[120%] max-w-[95%] sm:max-w-[75%] lg:max-w-[500px] xl:max-w-[500px] object-contain object-bottom select-none -translate-y-4 sm:-translate-y-2 lg:-translate-y-4"
                />
              </div>
            )}

          </div>
        </section>
      </div>

      {/* Our Capabilities Section (Coded from user mockup screenshot) */}
      <section className="bg-white py-10 sm:py-14 lg:py-16 relative z-10 border-b border-slate-100">
        <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-20">
          <div className="text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight font-space-grotesk">
              Our Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-6 rounded-3xl border border-slate-200/60 border-b-4 border-b-transparent hover:border-b-[#4F46E5] shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-col items-start space-y-4 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group"
                  style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)" }}
                >
                  <div className="text-[#4F46E5] group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-10 h-10" />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E293B] group-hover:text-blue-600 transition-colors duration-200">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section (Coded from user mockup screenshot) */}
      {processSteps.length > 0 && (
        <section
          className="py-10 sm:py-14 lg:py-16 relative z-10 border-b border-slate-100/80"
          style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)" }}
        >
          <img
            src="/BPO/AboutUs/aboutus2.svg"
            alt="Backdrop Radial Rays"
            className="absolute top-[0px] left-[-110px] w-[30%] h-[60%] pointer-events-none select-none z-0"
          />
          <img
            src="/BPO/FeauturedServices/shape.svg"
            alt="Background Shape"
            className="absolute right-[-14rem] bottom-[-8rem] h-full max-h-[500px] object-contain pointer-events-none z-0 hidden lg:block select-none opacity-90"
          />
          <div className="max-w-[90%] 2xl:max-w-[1465px] mx-auto px-6 md:px-18">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight font-space-grotesk">
                {processHeading}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-4">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/50 shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex items-center space-x-6 sm:space-x-8 hover:shadow-[0_12px_30px_rgba(0,0,0,0.025)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Left border highlight on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4F46E5] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />

                  <div className="relative text-2xl sm:text-[32px] font-bold text-[#4F46E5] w-10 sm:w-14 flex-shrink-0 font-inter mt-[-12px] sm:mt-[-14px]">
                    {step.id}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-blue-600 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Technologies We Master Section */}
      {techStack.length > 0 && (
        <TechShowcase
          title={service.techStackTitle || "Technology stack"}
          description={service.techStackDesc || "We work with modern, battle-tested technologies chosen for reliability, scalability, and long-term support."}
          techList={techStack}
        />
      )}

      {/* FAQ Section */}
      <Faq faqs={service.faqs} />

      {/* Dynamic CTA Section */}
      <section
        className={`w-full text-center select-none py-10 lg:py-14 px-4 sm:px-6 md:px-12 flex items-center justify-center relative z-10 ${service.cta?.bgClass || ""}`}
        style={service.cta?.bgClass ? {} : {
          background: service.cta?.gradient || "linear-gradient(135deg, #4F46E5 0%, #4E42E1 7.14%, #4D3EDC 14.29%, #4B3BD8 21.43%, #4A37D3 28.57%, #4933CF 35.71%, #482ECA 42.86%, #462AC6 50%, #4526C2 57.14%, #4421BD 64.29%, #421CB9 71.43%, #4117B5 78.57%, #4010B1 85.71%, #3E08AC 92.86%, #3D00A8 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 lg:space-y-6">
          <h2 className="text-[26px] leading-tight lg:leading-normal sm:text-4xl md:text-[44px] text-white font-semibold tracking-tight font-space-grotesk px-2 sm:px-0">
            {service.cta?.heading || "Ready to Build Something Amazing?"}
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {service.cta?.description || "Let's turn your vision into reality with our expert development team."}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={service.cta?.buttonLink || "/contact"}
              className={`inline-block bg-white hover:bg-white/90 font-semibold px-8 py-3 rounded-full text-base sm:text-lg shadow-lg shadow-black/10 transition-all hover:scale-[1.02] active:scale-95 duration-150 ${service.cta?.buttonTextColor || "text-[#4F46E5]"}`}
            >
              {service.cta?.buttonText || "Get in Touch"}
            </Link>
            {service.cta?.secondaryButtonText && (
              <Link
                href={service.cta?.secondaryButtonLink || "/contact"}
                className={`inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-95 duration-150`}
              >
                {service.cta.secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
