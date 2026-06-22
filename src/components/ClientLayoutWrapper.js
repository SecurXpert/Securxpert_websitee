"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // List paths where we want to hide the header and footer
  const hideHeaderFooter = pathname?.startsWith("/Blogs/login");

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
