import React from "react";
import Hero from "./Hero";
import OurOffices from "./OurOffices";

export const metadata = {
  title: "Contact SecurXpert Technologies | IT Services in Hyderabad",
  description: "Get in touch with SecurXpert Technologies for software development, cloud, cybersecurity, and IT consulting. Hyderabad HQ & UK office. Free consultation.",
  keywords: ["SecurXpert contact", "IT services Hyderabad", "software development India", "cloud services Hyderabad", "cybersecurity consulting", "UK IT company", "free tech consultation"],
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <OurOffices />
    </>
  );
}
