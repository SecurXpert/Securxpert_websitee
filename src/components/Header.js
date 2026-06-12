"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === "/Carrers/create") return null;

  // Handle scroll to add dynamic shadow or subtle styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const cleanPath = pathname ? pathname.toLowerCase().replace(/\/$/, "") : "";

  const isTopOffsetPage =
    cleanPath === "" ||
    cleanPath === "/services" ||
    cleanPath.startsWith("/services/") ||
    cleanPath.startsWith("/services-media/") ||
    cleanPath === "/products" ||
    cleanPath.startsWith("/products/") ||
    cleanPath === "/bpo" ||
    cleanPath === "/portfolio" ||
    cleanPath === "/contact" ||
    cleanPath === "/blogs" || cleanPath === "/Blogs" ||
    cleanPath.startsWith("/blogs/") || cleanPath.startsWith("/Blogs/") ||
    cleanPath === "/carrers" ||
    cleanPath.startsWith("/carrers/");

  const isDarkBg = (cleanPath === "/portfolio" || cleanPath === "/contact" || cleanPath === "/products" || cleanPath.startsWith("/products/") || cleanPath.startsWith("/carrers/")) && !scrolled;

  const getDesktopLinkClass = (path) => {
    const cleanLinkPath = path.toLowerCase().replace(/\/$/, "");
    const isActive = cleanPath === cleanLinkPath;

    return `text-[14px] transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${isActive
      ? isDarkBg
        ? "text-white border-white font-bold"
        : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
      : isDarkBg
        ? "text-white/85 hover:text-white font-medium border-transparent"
        : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
      }`;
  };

  const getMobileLinkClass = (path) => {
    const cleanLinkPath = path.toLowerCase().replace(/\/$/, "");
    const isActive = cleanPath === cleanLinkPath;

    return `block px-3 py-2.5 rounded-lg text-[15px] font-semibold transition-colors ${isActive
      ? "bg-gradient-to-r from-blue-50 to-[#3E66F3]/10 text-blue-600 font-bold"
      : "text-slate-800 hover:bg-slate-50"
      }`;
  };

  if (cleanPath.includes("/blogs/create") || cleanPath.includes("/blogs/edit")) {
    return null;
  }

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isTopOffsetPage && !scrolled ? "lg:top-4 top-0" : "top-0"
        } ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md text-slate-800"
          : isTopOffsetPage
            ? mobileMenuOpen
              ? "bg-white border-b border-slate-100 text-slate-800"
              : "bg-transparent lg:bg-transparent border-transparent lg:border-transparent shadow-none lg:shadow-none text-white lg:text-white"
            : "bg-white border-b border-slate-100 shadow-sm text-slate-800"
        }`}
    >
      <div className="w-full max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">

          {/* Original logo image */}
          <Link href="/" className="flex items-center group flex-shrink-0 mr-8">
            <img
              src="/SX original logo.png"
              alt="SecurXpert Logo"
              className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${(cleanPath === "/portfolio" || cleanPath === "/contact" || cleanPath === "/products" || cleanPath.startsWith("/products/") || cleanPath.startsWith("/carrers/")) && !scrolled && !mobileMenuOpen ? "brightness-0 invert" : ""
                }`}
            />
          </Link>

          {/* Desktop Navigation with MacBook Air-optimized spacing */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 2xl:space-x-8 mx-auto">
            {/* Home */}
            <Link
              href="/"
              className={getDesktopLinkClass("/")}
            >
              Home
            </Link>

            {/* Services with Hover Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/services"
                className={`text-[14px] transition-all duration-200 pb-1 border-b-2 flex items-center gap-1 h-8 ${cleanPath === "/services" || cleanPath.startsWith("/services/")
                  ? "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 ${isDarkBg ? "text-white/60 group-hover:text-white" : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <Link href="/services/software-development" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Software Development</Link>
                <Link href="/services/it-support" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">IT Support</Link>
                <Link href="/services/cloud-services" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Cloud Services</Link>
                <Link href="/services/bpo-services" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">BPO Services</Link>
                <Link href="/services/ai-chatbots" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">AI Chatbots</Link>
                <Link href="/services/digital-marketing" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Digital Marketing</Link>
                <Link href="/services/ui-ux-design" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">UI/UX Design</Link>
                <Link href="/services/cybersecurity" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Cybersecurity</Link>
              </div>
            </div>

            {/* Products with Hover Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/products"
                className={`text-[14px] transition-all duration-200 pb-1 border-b-2 flex items-center gap-1 h-8 ${cleanPath === "/products" || cleanPath.startsWith("/products/")
                  ? isDarkBg
                    ? "text-white border-white font-bold"
                    : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                Products
                <svg
                  className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 ${isDarkBg ? "text-white/60 group-hover:text-white" : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <Link
                  href="/products/grabjobz"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  GrabJobz
                </Link>
                <Link
                  href="/products/lens-light"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  Lens & Light Media
                </Link>
                <Link
                  href="/products/devtalent"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  DevTalent
                </Link>
                <Link
                  href="/products/vishan"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  Vishan
                </Link>
                <Link href="/products/arogya-narayan" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Arogya Narayan</Link>
                <Link href="/products/hisphere" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">HiSphere</Link>
                <Link href="/products/lauratek" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Lauratek</Link>
                <Link href="/products/lauratek-2-0" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Lauratek 2.0</Link>
                <Link href="/products/logsphere" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">LogSphere</Link>
                <Link href="/products/onestep-medi" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">Onestep Medi</Link>
                <Link href="/products/shrava360" className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150">shrava360</Link>
              </div>
            </div>

            {/* BPO */}
            <Link
              href="/BPO"
              className={getDesktopLinkClass("/BPO")}
            >
              BPO
            </Link>

            {/* Insights / Blogs */}
            <Link
              href="/Blogs"
              className={getDesktopLinkClass("/Blogs")}
            >
              Blogs
            </Link>

            {/* About Us with Hover Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/AboutUs"
                className={`text-[14px] transition-all duration-200 pb-1 border-b-2 flex items-center gap-1 h-8 ${cleanPath === "/aboutus" || cleanPath.startsWith("/aboutus/")
                  ? "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                About Us
                <svg
                  className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 ${isDarkBg ? "text-white/60 group-hover:text-white" : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <Link
                  href="/AboutUs/team"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  Our Team
                </Link>
                <Link
                  href="/AboutUs/founders"
                  className="block px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150"
                >
                  Founders
                </Link>
              </div>
            </div>

            {/* Careers */}
            <Link
              href="/Carrers"
              className={`text-[14px] transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${cleanPath === "/carrers" || cleanPath.startsWith("/carrers/")
                ? isDarkBg
                  ? "text-white border-white font-bold"
                  : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                : isDarkBg
                  ? "text-white/85 hover:text-white border-transparent font-medium"
                  : "text-slate-800 hover:text-blue-600 border-transparent font-semibold"
                }`}
            >
              Careers
            </Link>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className={getDesktopLinkClass("/portfolio")}
            >
              Portfolio
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={getDesktopLinkClass("/contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Book Consultation Button (Pill Gradient style) with responsive horizontal scaling */}
          <div className="hidden lg:flex items-center lg:-translate-x-6 xl:-translate-x-4 2xl:translate-x-0">
            <Link
              href="/contact"
              className="bg-[#3E66F3] text-white font-semibold px-6 py-2.5 rounded-full text-[13px] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors ${(cleanPath === "/portfolio" || cleanPath === "/contact") && !scrolled && !mobileMenuOpen
                ? "text-white hover:text-white/80 hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto z-[9999]">
          <div className="px-4 pt-3 pb-6 space-y-2.5">
            <Link
              href="/"
              className={getMobileLinkClass("/")}
            >
              Home
            </Link>

            {/* Services with Mobile Sub-options */}
            <div className="flex flex-col">
              <Link
                href="/services"
                className={getMobileLinkClass("/services")}
              >
                Services
              </Link>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 border-l border-slate-100/80">
                <Link href="/services/software-development" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Software Development</Link>
                <Link href="/services/it-support" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">IT Support</Link>
                <Link href="/services/cloud-services" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Cloud Services</Link>
                <Link href="/services/bpo-services" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">BPO Services</Link>
                <Link href="/services/ai-chatbots" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">AI Chatbots</Link>
                <Link href="/services/digital-marketing" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Digital Marketing</Link>
                <Link href="/services/ui-ux-design" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">UI/UX Design</Link>
                <Link href="/services/cybersecurity" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Cybersecurity</Link>
              </div>
            </div>

            {/* Products with Mobile Sub-options */}
            <div className="flex flex-col">
              <Link
                href="/products"
                className={getMobileLinkClass("/products")}
              >
                Products
              </Link>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 border-l border-slate-100/80">
                <Link
                  href="/products/grabjobz"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  GrabJobz
                </Link>
                <Link
                  href="/products/lens-light"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Lens & Light Media
                </Link>
                <Link
                  href="/products/devtalent"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  DevTalent
                </Link>
                <Link
                  href="/products/vishan"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Vishan
                </Link>
                <Link href="/products/arogya-narayan" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Arogya Narayan</Link>
                <Link href="/products/hisphere" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">HiSphere</Link>
                <Link href="/products/lauratek" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Lauratek</Link>
                <Link href="/products/lauratek-2-0" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Lauratek 2.0</Link>
                <Link href="/products/logsphere" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">LogSphere</Link>
                <Link href="/products/onestep-medi" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Onestep Medi</Link>
                <Link href="/products/shrava360" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">shrava360</Link>
              </div>
            </div>

            {/* BPO */}
            <Link
              href="/BPO"
              className={getMobileLinkClass("/BPO")}
            >
              BPO
            </Link>

            {/* Insights */}
            <Link
              href="#"
              className="block px-3 py-2.5 rounded-lg text-[15px] font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Insights
            </Link>

            {/* About Us with Mobile Sub-options */}
            <div className="flex flex-col">
              <Link
                href="/AboutUs"
                className={getMobileLinkClass("/AboutUs")}
              >
                About Us
              </Link>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 border-l border-slate-100/80">
                <Link
                  href="/AboutUs/team"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/AboutUs/founders"
                  className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Founders
                </Link>
              </div>
            </div>

            {/* Careers */}
            <Link
              href="/Carrers"
              className={getMobileLinkClass("/Carrers")}
            >
              Careers
            </Link>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className={getMobileLinkClass("/portfolio")}
            >
              Portfolio
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={getMobileLinkClass("/contact")}
            >
              Contact
            </Link>

            {/* Book Consultation in Mobile Drawer */}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="w-full text-center block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white font-semibold px-4 py-3 rounded-full text-[13px] shadow-md transition-all active:scale-95"
              >
                INDIA
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
