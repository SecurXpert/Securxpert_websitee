"use client";

import React, { useState, useEffect } from "react";

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items.length > 0 ? items[0].id : "");

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section in view
      let currentActiveId = activeId;
      
      // Get all section elements based on items
      const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
      
      if (sections.length === 0) return;

      // Find the last section that is above or slightly below the middle of the viewport
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Adjust threshold as needed (e.g., top is above 200px from top of viewport)
        if (rect.top <= 250) {
          currentActiveId = section.id;
        }
      }

      // If we are at the very bottom of the page, activate the last item
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentActiveId = items[items.length - 1].id;
      }

      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId, items]);

  return (
    <aside className="hidden lg:block w-[300px] xl:w-[340px] flex-shrink-0 sticky top-32">
      <div 
        className="text-white rounded-[24px] p-6 shadow-xl border border-white/10"
        style={{ background: "linear-gradient(180deg, #29257A 0%, #3C60E7 100%)" }}
      >
        <h3 className="text-lg xl:text-xl font-bold mb-6 font-sans">Table of Contents</h3>
        <ul className="flex flex-col gap-1.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block px-5 py-3 rounded-xl font-medium text-[14px] xl:text-[15px] transition-colors ${
                    isActive 
                      ? "bg-[#3E66F3] text-white shadow-sm" 
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      // Adjust offset for sticky header
                      const offset = 100;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
