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
    <div className="relative min-h-screen bg-slate-950 pt-20">
      <div className="absolute inset-0 cyber-grid opacity-15" />
      <div
        className={`absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          service.accentColor === "cyan"
            ? "bg-cyan-500/10"
            : service.accentColor === "blue"
            ? "bg-blue-500/10"
            : "bg-purple-500/10"
        }`}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-500">
          <li>
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          </li>
          <li>
            <span className="text-slate-700">/</span>
          </li>
          <li>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          </li>
          <li>
            <span className="text-slate-700">/</span>
          </li>
          <li className="text-slate-300 capitalize">{slug.replace(/-/g, " ")}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block */}
          <div className="lg:col-span-7 space-y-6">
            <span className={`inline-flex ${service.bgClass} border ${service.borderClass} px-3.5 py-1 rounded-full text-xs font-semibold ${service.textColor} uppercase tracking-widest`}>
              {service.subtitle}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {service.title}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-6 pt-6">
              {service.offerings.map((off, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-slate-800 space-y-2">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.accentColor === "cyan"
                          ? "bg-cyan-400"
                          : service.accentColor === "blue"
                          ? "bg-blue-400"
                          : "bg-purple-400"
                      }`}
                    />
                    <span>{off.title}</span>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed pl-3.5">
                    {off.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar CTA card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative overflow-hidden space-y-6">
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl ${
                  service.accentColor === "cyan"
                    ? "bg-cyan-400/5"
                    : service.accentColor === "blue"
                    ? "bg-blue-400/5"
                    : "bg-purple-400/5"
                }`}
              />
              <h3 className="text-xl font-bold text-white">Let's Get Started</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Whether you need a consultation, a custom feature design, or a security audit of your current stack, our engineering team is here to assist.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg className={`w-4 h-4 ${service.textColor} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className={`w-full text-center block font-bold py-3.5 rounded-md text-sm transition-all ${service.buttonBg}`}
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
