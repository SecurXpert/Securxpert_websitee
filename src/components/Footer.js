"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#eceeff] to-[#fbfbfe] text-[#4f5b76] py-16 px-6 md:px-20 lg:px-40 select-none border-t border-slate-100/50">
      <div className="max-w-[1530px] mx-auto w-full">
        {/* TOP CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
          
          {/* COLUMN 1: Logo, Description & Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/SX original logo.png"
                alt="SecurXpert Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-[#4f5b76] max-w-sm">
              Empowering enterprises with AI-powered cybersecurity, innovative software solutions, and world-class technology services.
            </p>
            
            {/* Social Media Link Icons */}
            <div className="flex items-center gap-6 pt-2">
              {/* LinkedIn */}
              <a
                href="#"
                className="text-[#4f5b76] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                className="text-[#4f5b76] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Dribbble / Product Hunt */}
              <a
                href="#"
                className="text-[#4f5b76] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="Community"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-[#4f5b76] hover:text-[#3B82F6] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 lg:ml-6 flex flex-col items-start gap-5">
            <h3 className="text-[#1a1f36] font-bold text-[16px] tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col items-start gap-3.5">
              <li>
                <Link href="/about" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div className="lg:col-span-3 flex flex-col items-start gap-5">
            <h3 className="text-[#1a1f36] font-bold text-[16px] tracking-wide">
              Services
            </h3>
            <ul className="flex flex-col items-start gap-3.5">
              <li>
                <Link href="/services/web-development" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 text-[15px] font-medium">
                  BPO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col items-start gap-5">
            <h3 className="text-[#1a1f36] font-bold text-[16px] tracking-wide">
              Contact Info
            </h3>
            
            <div className="flex flex-col items-start gap-4">
              {/* Map Address */}
              <div className="flex items-start gap-3.5">
                <span className="text-[#3b82f6] mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-[15px] leading-relaxed text-[#4f5b76]">
                  123 Tech Plaza, Innovation District Bangalore, Karnataka 560001
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <span className="text-[#3b82f6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+918012345678" className="text-[15px] text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 font-medium">
                  +91 80 1234 5678
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <span className="text-[#3b82f6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:contact@securxpert.com" className="text-[15px] text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200 font-medium">
                  contact@securxpert.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="mt-2 pt-2 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
          <p className="text-[#4f5b76] text-center md:text-left">
            © {new Date().getFullYear()} SecurXpert Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-[#4f5b76] hover:text-[#3b82f6] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
