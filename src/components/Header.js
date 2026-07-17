"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState("");
  const headerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === "/careers/create") return null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setOpenDropdown(null);
    setMobileExpanded("");
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
    cleanPath === "/blogs" ||
    cleanPath.startsWith("/blogs/") ||
    cleanPath === "/careers" ||
    cleanPath.startsWith("/careers/");

  const isDarkBg = (cleanPath === "/portfolio" || cleanPath === "/contact" || cleanPath === "/products" || cleanPath.startsWith("/products/") || cleanPath.startsWith("/careers/")) && !scrolled;

  const getDesktopLinkClass = (path) => {
    const cleanLinkPath = path.toLowerCase().replace(/\/$/, "");
    const isActive = cleanPath === cleanLinkPath;

    return `text-[14px] whitespace-nowrap transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${isActive
      ? isDarkBg
        ? "text-white border-white font-semibold"
        : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent font-semibold [border-image:linear-gradient(180deg,#210A4A_0%,#3E66F3_100%)_1]"
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
      ref={headerRef}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isTopOffsetPage && !scrolled ? "lg:top-4 top-0" : "top-0"
        } ${scrolled
          ? "bg-white backdrop-blur-md border-b border-slate-100 shadow-md text-slate-800"
          : isTopOffsetPage
            ? mobileMenuOpen 
              ? "bg-white border-b border-slate-100 text-slate-800"
              : "max-lg:bg-white max-lg:border-b max-lg:border-slate-100 max-lg:text-slate-800 bg-transparent lg:bg-transparent border-transparent lg:border-transparent shadow-none lg:shadow-none text-white lg:text-white"
            : "bg-white border-b border-slate-100 shadow-sm text-slate-800"
        }`}
    >
      <div className="w-full max-w-[1530px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20 xl:-translate-x-4 2xl:translate-x-0"> 

          {/* Original logo image */}
          <Link href="/" className="flex items-center group flex-shrink-0 mr-8">
            <img
              src="/securxpertslogo.png"
              alt="SecurXpert Logo"
              className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${(cleanPath === "/portfolio" || cleanPath === "/contact" || cleanPath === "/products" || cleanPath.startsWith("/products/") || cleanPath.startsWith("/careers/")) && !scrolled && !mobileMenuOpen ? "max-lg:brightness-100 max-lg:invert-0 lg:brightness-0 lg:invert" : ""
                }`}
            />
          </Link>

          {/* Desktop Navigation with MacBook Air-optimized spacing */}
          <nav className="hidden lg:flex items-center lg:space-x-2.5 xl:space-x-4 2xl:space-x-8 lg:mr-auto lg:ml-4 xl:ml-8 2xl:mx-auto">
            {/* Home */}
            <Link
              href="/"
              className={getDesktopLinkClass("/")}
            >
              Home
            </Link>

            {/* Services with Hover Dropdown */}
            <div 
              className="relative py-2 flex items-center cursor-pointer group"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/services"
                className={`text-[14px] whitespace-nowrap transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${cleanPath === "/services" || cleanPath.startsWith("/services/") || openDropdown === "services"
                  ? isDarkBg
                    ? "text-white border-white font-bold"
                    : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                Services
              </Link>
              <div className={`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none transition-colors duration-200 ${cleanPath === "/services" || cleanPath.startsWith("/services/") || openDropdown === "services"
                  ? isDarkBg ? "text-white" : "text-[#3E66F3]"
                  : isDarkBg ? "text-white/85 group-hover:text-white" : "text-slate-800 group-hover:text-blue-600"
                }`}>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 ${openDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <Link href="/services/software-development" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Software Development
                  
                </Link>
                <Link href="/services/it-support" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  IT Support
                  
                </Link>
                <Link href="/services/cloud-services" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Cloud Services
                  
                </Link>
                <Link href="/services/bpo-services" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  BPO Services
                  
                </Link>
                <Link href="/services/ai-chatbots" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  AI Chatbots
                  
                </Link>
                <Link href="/services/digital-marketing" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Digital Marketing
                  
                </Link>
                <Link href="/services/ui-ux-design" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  UI/UX Design
                  
                </Link>
                <Link href="/services/cybersecurity" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Cybersecurity
                  
                </Link>
              </div>
            </div>

            {/* Products with Hover Dropdown */}
            <div 
              className="relative py-2 flex items-center cursor-pointer group"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/products"
                className={`text-[14px] whitespace-nowrap transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${cleanPath === "/products" || cleanPath.startsWith("/products/") || openDropdown === "products"
                  ? isDarkBg
                    ? "text-white border-white font-bold"
                    : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                Products
              </Link>
              <div className={`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none transition-colors duration-200 ${cleanPath === "/products" || cleanPath.startsWith("/products/") || openDropdown === "products"
                  ? isDarkBg ? "text-white" : "text-[#3E66F3]"
                  : isDarkBg ? "text-white/85 group-hover:text-white" : "text-slate-800 group-hover:text-blue-600"
                }`}>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 ${openDropdown === "products" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <Link href="/products/lens-light" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Lens & Light Media
                  
                </Link>
                <Link href="/products/devtalent" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  DevTalent
                  
                </Link>
                <Link href="/products/vishan" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Vishan
                  
                </Link>
                <Link href="/products/arogya-narayan" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Arogya Narayan
                  
                </Link>
                <Link href="/products/hisphere" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  HiSphere
                  
                </Link>
                <Link href="/products/lauratek" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Lauratek
                  
                </Link>
                <Link href="/products/lauratek-2-0" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Lauratek 2.0
                  
                </Link>
                <Link href="/products/logsphere" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  LogSphere
                  
                </Link>
                <Link href="/products/onestep-medi" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Onestep Medi
                  
                </Link>
                <Link href="/products/shrava360" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Shrava360
                  
                </Link>
                <Link href="/products/grabjobz" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  GrabJobz
                  
                </Link>
              </div>
            </div>

            {/* BPO */}
            <Link
              href="/bpo"
              className={getDesktopLinkClass("/bpo")}
            >
              BPO
            </Link>

            {/* Insights / Blogs */}
            <Link
              href="/blogs"
              className={getDesktopLinkClass("/blogs")}
            >
              Blogs
            </Link>

            {/* About Us with Hover Dropdown */}
            <div 
              className="relative py-2 flex items-center cursor-pointer group"
              onMouseEnter={() => setOpenDropdown("aboutus")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/about-us"
                className={`text-[14px] whitespace-nowrap transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${cleanPath === "/about-us" || cleanPath.startsWith("/about-us/") || openDropdown === "aboutus"
                  ? isDarkBg
                    ? "text-white border-white font-bold"
                    : "bg-gradient-to-b from-[#210A4A] to-[#3E66F3] bg-clip-text text-transparent border-[#3E66F3] font-bold"
                  : isDarkBg
                    ? "text-white/85 hover:text-white font-medium border-transparent"
                    : "text-slate-800 hover:text-blue-600 font-semibold border-transparent"
                  }`}
              >
                About Us
              </Link>
              <div className={`ml-1 p-1 pb-1.5 flex items-center justify-center outline-none transition-colors duration-200 ${cleanPath === "/about-us" || cleanPath.startsWith("/about-us/") || openDropdown === "aboutus"
                  ? isDarkBg ? "text-white" : "text-[#3E66F3]"
                  : isDarkBg ? "text-white/85 group-hover:text-white" : "text-slate-800 group-hover:text-blue-600"
                }`}>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "aboutus" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              {/* Dropdown Menu - Sleek glassmorphism style */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out z-50 ${openDropdown === "aboutus" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <Link href="/about-us/team" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Our Team
                  
                </Link>
                <Link href="/about-us/founders" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-150 group/item">
                  Founders
                  
                </Link>
              </div>
            </div>

            {/* Careers */}
            <Link
              href="/careers"
              className={`text-[14px] whitespace-nowrap transition-all duration-200 pb-1 border-b-2 flex items-center h-8 ${cleanPath === "/careers" || cleanPath.startsWith("/careers/")
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
              className="bg-[#3E66F3] text-white font-semibold px-6 py-2.5 rounded-full text-[13px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110 active:scale-95"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors ${(cleanPath === "/portfolio" || cleanPath === "/contact") && !scrolled && !mobileMenuOpen
                ? "max-lg:text-slate-800 max-lg:hover:bg-slate-100 text-white hover:text-white/80 hover:bg-white/10"
                : "text-slate-800 hover:text-slate-900 hover:bg-slate-100"
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

      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[40] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu (Right Side) */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-[280px] sm:w-[320px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-[45] pt-24 pb-6 overflow-y-auto lg:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-5 space-y-3">
          <Link
            href="/"
            className={getMobileLinkClass("/")}
          >
            Home
          </Link>

          {/* Services with Mobile Sub-options */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                className={`flex-grow ${getMobileLinkClass("/services")}`}
              >
                Services
              </Link>
              <button 
                className="p-2 text-slate-500 hover:text-blue-600 focus:outline-none"
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? "" : "services")}
                aria-label="Toggle Services menu"
              >
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "services" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 mb-2 border-l border-slate-100/80">
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
          </div>

          {/* Products with Mobile Sub-options */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/products"
                className={`flex-grow ${getMobileLinkClass("/products")}`}
              >
                Products
              </Link>
              <button 
                className="p-2 text-slate-500 hover:text-blue-600 focus:outline-none"
                onClick={() => setMobileExpanded(mobileExpanded === "products" ? "" : "products")}
                aria-label="Toggle Products menu"
              >
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "products" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 mb-2 border-l border-slate-100/80">
                <Link href="/products/lens-light" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Lens & Light Media</Link>
                <Link href="/products/devtalent" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">DevTalent</Link>
                <Link href="/products/vishan" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Vishan</Link>
                <Link href="/products/arogya-narayan" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Arogya Narayan</Link>
                <Link href="/products/hisphere" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">HiSphere</Link>
                <Link href="/products/lauratek" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Lauratek</Link>
                <Link href="/products/lauratek-2-0" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Lauratek 2.0</Link>
                <Link href="/products/logsphere" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">LogSphere</Link>
                <Link href="/products/onestep-medi" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Onestep Medi</Link>
                <Link href="/products/shrava360" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">shrava360</Link>
                <Link href="/products/grabjobz" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">GrabJobz</Link>
              </div>
            </div>
          </div>

          {/* BPO */}
          <Link
            href="/bpo"
            className={getMobileLinkClass("/bpo")}
          >
            BPO
          </Link>

          {/* Blogs */}
          <Link
            href="/blogs"
            className={getMobileLinkClass("/blogs")}
          >
            Blogs
          </Link>

          {/* About Us with Mobile Sub-options */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/about-us"
                className={`flex-grow ${getMobileLinkClass("/about-us")}`}
              >
                About Us
              </Link>
              <button 
                className="p-2 text-slate-500 hover:text-blue-600 focus:outline-none"
                onClick={() => setMobileExpanded(mobileExpanded === "aboutus" ? "" : "aboutus")}
                aria-label="Toggle About Us menu"
              >
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded === "aboutus" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "aboutus" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-6 pr-2 flex flex-col space-y-1 mt-1 mb-2 border-l border-slate-100/80">
                <Link href="/about-us/team" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Our Team</Link>
                <Link href="/about-us/founders" className="block py-2 text-[13px] font-semibold text-slate-500 hover:text-blue-600 transition-colors">Founders</Link>
              </div>
            </div>
          </div>

          {/* Careers */}
          <Link
            href="/careers"
            className={getMobileLinkClass("/careers")}
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
              className="w-full text-center block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white font-semibold px-4 py-3 rounded-full text-[13px] shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:brightness-110 active:scale-95"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

