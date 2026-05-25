"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll class for sticky transparent header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const serviceSubLinks = [
    { name: "Web Security & Dev", path: "/services/web-development" },
    { name: "Digital Solutions", path: "/services/digital-marketing" },
    { name: "Mobile Security & Dev", path: "/services/mobile-app-development" },
  ];

  const isLinkActive = (path) => pathname === path;
  const isServicesActive = () => pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <svg
              className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              SECUR<span className="text-cyan-400">XPERT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  isLinkActive(link.path) ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  isServicesActive() ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-2xl bg-slate-900 border border-slate-800 py-2 focus:outline-none transition-all duration-300 animate-fadeIn"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-xs font-semibold text-cyan-500 hover:bg-slate-800 uppercase tracking-wider border-b border-slate-800/50"
                  >
                    All Services Overview
                  </Link>
                  {serviceSubLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      href={subLink.path}
                      className={`block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-slate-800 hover:text-cyan-400 ${
                        isLinkActive(subLink.path)
                          ? "text-cyan-400 bg-slate-800/30"
                          : "text-slate-300"
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                isLinkActive("/contact") ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="cyber-glow-btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-md text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.45)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              Request Free Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-900 hover:text-cyan-400 ${
                  isLinkActive(link.path) ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services inside mobile menu */}
            <div className="border-t border-slate-900 my-2 pt-2">
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-semibold text-cyan-400 uppercase tracking-wider`}
              >
                Services
              </Link>
              {serviceSubLinks.map((subLink) => (
                <Link
                  key={subLink.path}
                  href={subLink.path}
                  className={`block pl-6 pr-3 py-2 rounded-md text-base font-medium hover:bg-slate-900 hover:text-cyan-400 ${
                    isLinkActive(subLink.path) ? "text-cyan-400" : "text-slate-400"
                  }`}
                >
                  {subLink.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-900 hover:text-cyan-400 ${
                isLinkActive("/contact") ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 pb-2 px-3">
              <Link
                href="/contact"
                className="w-full text-center block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2.5 rounded-md text-sm transition-all"
              >
                Request Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
