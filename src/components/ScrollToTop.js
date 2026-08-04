"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isScrollHovered, setIsScrollHovered] = useState(false);
  const [isWaHovered, setIsWaHovered] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const totalHeight = (document.documentElement.scrollHeight || document.body.scrollHeight || 0) - window.innerHeight;

      if (currentScroll > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const percentage = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
        setScrollProgress(percentage);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  // Circle dimensions for progress border inside the blue scroll-to-top circle
  const radius = 18;
  const strokeWidth = 2.2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  // Inline styling for Scroll to Top Button (Stacked above WhatsApp at bottom: 96px)
  const scrollButtonStyle = {
    position: "fixed",
    bottom: "96px",
    right: "32px",
    zIndex: 99999,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: isScrollHovered ? "#1D4ED8" : "#2563EB",
    boxShadow: "0 6px 24px rgba(37, 99, 235, 0.45)",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, background-color 0.2s ease, opacity 0.3s ease",
    transform: isVisible 
      ? (isScrollHovered ? "translateY(-4px) scale(1)" : "translateY(0) scale(1)") 
      : "translateY(15px) scale(0.8)",
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? "auto" : "none",
  };

  // Inline styling for WhatsApp Button (Placed at bottom: 32px)
  const waButtonStyle = {
    position: "fixed",
    bottom: "32px",
    right: "32px",
    zIndex: 99999,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: isWaHovered ? "#20ba5a" : "#25D366",
    boxShadow: "0 6px 24px rgba(37, 211, 102, 0.45)",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, background-color 0.2s ease",
    transform: isWaHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsScrollHovered(true)}
        onMouseLeave={() => setIsScrollHovered(false)}
        style={scrollButtonStyle}
        aria-label="Scroll to top"
      >
        {/* Scroll Progress Outline SVG */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            transform: "rotate(-90deg)",
            pointerEvents: "none"
          }}
          viewBox="0 0 50 50"
        >
          {/* Track Circle (Faint White Line) */}
          <circle
            stroke="rgba(255, 255, 255, 0.2)"
            fill="none"
            strokeWidth={strokeWidth}
            r={radius}
            cx="25"
            cy="25"
          />
          {/* Active Progress Circle (Solid White Line) */}
          <circle
            stroke="#ffffff"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx="25"
            cy="25"
            style={{ transition: "stroke-dashoffset 0.075s linear" }}
          />
        </svg>

        {/* Up Chevron Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            zIndex: 10
          }}
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* WhatsApp Link Button */}
      <a
        href="https://wa.me/917993256679"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsWaHovered(true)}
        onMouseLeave={() => setIsWaHovered(false)}
        style={waButtonStyle}
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{
            width: "26px",
            height: "26px",
            color: "#ffffff"
          }}
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.927 9.927 0 0 0 4.808 1.246h.004c5.505 0 9.99-4.478 9.99-9.987C22.006 6.478 17.52 2 12.012 2zm0 18.294a8.272 8.272 0 0 1-4.225-1.157l-.303-.18-3.143.823.839-3.064-.197-.314a8.273 8.273 0 0 1-1.268-4.417c.001-4.57 3.72-8.286 8.297-8.286 2.217 0 4.301.863 5.867 2.43 1.566 1.568 2.428 3.654 2.427 5.86-.002 4.572-3.722 8.288-8.295 8.288zm4.542-6.197c-.248-.124-1.47-.724-1.698-.807-.228-.083-.393-.124-.559.124-.166.248-.641.807-.785.973-.145.166-.29.186-.539.062a6.786 6.786 0 0 1-2.003-1.233 7.487 7.487 0 0 1-1.386-1.726c-.145-.248-.016-.383.109-.507.112-.111.248-.29.373-.435.124-.145.166-.248.249-.415.083-.166.041-.31-.02-.435-.062-.124-.559-1.347-.765-1.846-.2-.488-.403-.422-.559-.43l-.477-.008c-.166 0-.435.062-.662.31-.228.248-.869.849-.869 2.07s.89 2.401 1.014 2.567c.124.166 1.751 2.673 4.241 3.746.592.256 1.055.408 1.415.523.595.19 1.136.163 1.564.1a2.564 2.564 0 0 0 1.678-1.18c.518-1.014.518-1.884.363-2.07-.156-.186-.559-.29-.807-.414z" />
        </svg>
      </a>
    </>
  );
}
