"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({ children }) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const pathname = usePathname();
  
  // List paths where we want to hide the header and footer
  const hideHeaderFooter = pathname?.toLowerCase()?.startsWith("/blogs/login") || pathname?.toLowerCase()?.startsWith("/blogs/create");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
