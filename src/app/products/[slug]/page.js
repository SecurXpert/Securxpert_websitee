import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft, LuCircleCheck } from "react-icons/lu";

const productsData = {
  "grabjobz": {
    title: "GrabJobz",
    headline: "AI-Powered Recruitment Intelligence Hub",
    desc: "A state-of-the-art recruitment platform designed to automate outreach, intelligently match candidates, and streamline candidate screening using cutting-edge AI.",
    bg: "linear-gradient(135deg, #1E40AF 0%, #111827 100%)",
    image: "/products/home/hero1.png",
    accent: "#3B82F6",
    features: [
      "Smart Matchmaking AI - Automatically ranks applicant profiles based on precise skill tags and job descriptions.",
      "Automated Outreach - Email, SMS, and messaging sequences designed to nurture candidate pools.",
      "Custom Candidate Portals - A seamless interview scheduling and dashboard experience.",
      "Intelligent Screening - Machine learning-backed insights into candidate technical skills and experience levels."
    ]
  },
  "lens-light": {
    title: "Lens & Light Media",
    headline: "Creative Digital Marketing & Media Agency",
    desc: "A comprehensive digital marketing and video production solution designed to raise brand awareness, write premium AI content, and deliver growth campaigns.",
    bg: "linear-gradient(135deg, #1F2937 0%, #030712 100%)",
    image: "/products/home/hero2.png",
    accent: "#D9A05B",
    features: [
      "High-Fidelity Video Production - Professional shooting, drone capture, and video editing for product commercials.",
      "Branding & Logo Identity - Cohesive design guidelines, color schemes, and media kits.",
      "AI-Optimized Copywriting - High SEO rank articles, social posts, and blog marketing campaigns.",
      "PPC & Growth Solutions - Google Ads, Meta Ads, and LinkedIn campaign management."
    ]
  },
  "devtalent": {
    title: "DevTalent",
    headline: "Advanced Talent Assessment Platform Hub",
    desc: "A secure, robust online test builder and talent assessment platform tailored for technical recruiting, coding tests, and live exam analytics.",
    bg: "linear-gradient(135deg, #6D28D9 0%, #111827 100%)",
    image: "/products/home/hero3.png",
    accent: "#8B5CF6",
    features: [
      "Interactive Code Sandboxes - Tests developers in real-time on languages like JavaScript, Go, Python, and SQL.",
      "Anti-Cheating Guardrails - Camera monitoring, browser tab locking, and plagiarism checkers.",
      "Detailed Performance Analytics - Deep grading reports indicating memory usage, execution speed, and edge case coverage.",
      "Course Certifications - Automated PDF certificates sent out upon test completion."
    ]
  },
  "vishan": {
    title: "Vishan",
    headline: "Smart School Management System Platform",
    desc: "An all-in-one school administration and ERP platform. Built to connect teachers, students, parents, and administrative staffs.",
    bg: "linear-gradient(135deg, #EA580C 0%, #111827 100%)",
    image: "/products/home/hero4.png",
    accent: "#F97316",
    features: [
      "Comprehensive Student Records - Track transcripts, medical histories, attendance, and exam grades.",
      "Automated Fee Collection - Safe integration with payment processors for recurring tuition collection.",
      "Teacher & Class Scheduling - Interactive calendar planner designed to assign classes, exams, and grading.",
      "Parent Dashboard portal - Instant grade reports, attendance alerts, and direct contact with school staff."
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "grabjobz" },
    { slug: "lens-light" },
    { slug: "devtalent" },
    { slug: "vishan" }
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
    <main 
      className="relative min-h-screen text-white select-none pb-24 pt-28"
      style={{ background: product.bg }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* Back button */}
        <div className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-semibold text-lg transition-all duration-150"
          >
            <LuChevronLeft className="w-5 h-5" /> Back to Products
          </Link>
        </div>

        {/* Dynamic Details Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Details Content Left */}
          <div className="space-y-6">
            <div 
              className="inline-block px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-white"
              style={{ color: '#111827' }}
            >
              Featured Product
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-Plus Jakarta Sans">
              {product.title}
            </h1>
            <h3 className="text-xl sm:text-2xl font-semibold opacity-90 leading-snug">
              {product.headline}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {product.desc}
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-bold">Key Capabilities:</h4>
              <div className="grid grid-cols-1 gap-3">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: product.accent }} />
                    <p className="text-slate-300 text-sm sm:text-base">{feat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Graphic Side Right */}
          <div className="relative flex flex-col items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-auto h-3/4 max-w-[80%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float-card-1"
            />
            <div className="absolute bottom-6 w-[60%] h-[20px] bg-black/30 blur-[15px] rounded-full" />
          </div>

        </div>

      </div>
    </main>
  );
}
