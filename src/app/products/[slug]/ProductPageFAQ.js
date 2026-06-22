"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function ProductPageFAQ({ product }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Fallback FAQs if the product doesn't have its own unique FAQs defined yet
  const faqs = product?.faqs || [
    {
      question: "What is the typical timeline for implementation?",
      answer: "Implementation timelines vary depending on the complexity of your needs, but most standard setups are completed within 2 to 4 weeks from the kickoff meeting.",
    },
    {
      question: "Is there a free trial or demo available?",
      answer: "Yes, we offer a comprehensive live demo tailored to your use case, followed by a 14-day free trial period to ensure the platform meets your expectations.",
    },
    {
      question: "How does the pricing structure work?",
      answer: "Our pricing scales with your business needs. It is typically based on the number of active users and the specific modules you require. Please reach out to our sales team for a custom quote.",
    },
    {
      question: "Do you offer customer support and training?",
      answer: "Absolutely. We provide comprehensive onboarding, dedicated customer success managers for enterprise clients, and 24/7 technical support via email and chat.",
    },
    {
      question: "Can this integrate with our existing software?",
      answer: "Yes, our product offers a robust API and native integrations with popular CRM, HRIS, and ERP systems to ensure seamless data flow across your operations.",
    },
    {
      question: "How secure is our data on this platform?",
      answer: "We take security very seriously. Our platform is SOC 2 Type II compliant, utilizes end-to-end encryption, and undergoes regular third-party security audits.",
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-white py-14">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Dots Pattern */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-24 h-48 opacity-30 pointer-events-none hidden md:block">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 2px)', backgroundSize: '16px 16px' }} />
            </div>

            <div className="relative aspect-[4/5] sm:aspect-square ">
              <img 
                src="/products/images/faq.png" 
                alt="FAQ Illustration" 
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"; 
                }}
              />
            </div>
          </div>

          {/* Right Side: FAQ Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <span className="text-sm font-semibold tracking-[px] uppercase text-slate-500 mb-2 font-sans">
              PRODUCT FAQ'S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3 font-sans leading-tight">
              Frequently asked questions about {product?.title || "this product"}
            </h2>

            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 text-left focus:outline-none"
                    >
                      <span className="text-slate-900 font-semibold text-[15px] sm:text-base">
                        {faq.question}
                      </span>
                      <span className="ml-4 flex-shrink-0 text-slate-800">
                        {isOpen ? <LuMinus className="w-5 h-5" /> : <LuPlus className="w-5 h-5" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-3 sm:p-4 pt-0 text-slate-500 leading-relaxed text-[13px] sm:text-sm">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-start">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-[#3D62EB] text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-md"
              >
                {product?.faqButtonText || `Request a ${product?.title || "Product"} Demo`}
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
