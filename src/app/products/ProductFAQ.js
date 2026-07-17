"use client";

import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates.",
    },
    {
      question: "What is the cost of this platform?", 
      answer: "Our pricing scales with your business needs. Please reach out to our sales team for a custom quote tailored exactly to your requirements.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom fields, billing addresses, and tax identifiers to your invoices directly from the dashboard settings.",
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-white py-24">
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
                alt="Working on laptop" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"; // Fallback if local image missing
                }}
              />
            </div>
          </div>

          {/* Right Side: FAQ Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <span className="text-sm font-semibold tracking-[px] uppercase text-slate-500 mb-3 font-sans">
              GENERAL FAQ'S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-10 font-sans leading-tight">
              Frequently asked questions from clients
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
                      <span className="text-slate-900 font-semibold text-lg">
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
                      <div className="p-3 sm:p-4 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
