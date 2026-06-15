"use client";

import React from "react";
import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("./OfficeMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] mt-16 rounded-[32px] bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">Loading interactive map...</div>
});

export default function OurOffices() {
  const offices = [
    {
      id: 1,
      title: "Hyderabad HQ",
      address: "Third Floor, PR R One Towers, Plot No 59, DLF Rd, near Radisson Hotel, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032",
      phone: "+91 40 1234 5678",
      email: "hyderabad@securxpert.com",
    },
    {
      id: 2,
      title: "United Kingdom Office",
      address: "25 Old Broad Street, London EC2N 1HN, United Kingdom",
      phone: "+44 20 1234 5678",
      email: "uk@securxpert.com",
    }
  ];

  return (
    <section className="py-20 bg-white select-none">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2C2F8D] to-[#3D62EB] tracking-tight mb-4 pb-1">
            Our Offices
          </h2>
          <p className="text-[#64748B] text-[15px] max-w-2xl mx-auto">
            Connecting businesses globally with secure technology solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {offices.map((office) => (
            <div 
              key={office.id} 
              className="bg-white p-8 sm:p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-50 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#F0F4FF] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#3D62EB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#2C2F8D] mb-6">
                {office.title}
              </h3>

              {/* Details Wrapper */}
              <div className="flex flex-col gap-4 flex-grow mb-8 border-t border-slate-100 pt-6">
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {office.address}
                </p>
                
                <p className="text-[14px] text-[#64748B]">
                  <span className="font-semibold text-slate-700">Phone:</span> {office.phone}
                </p>
                
                <p className="text-[14px] text-[#64748B]">
                  <span className="font-semibold text-slate-700">Email:</span>{" "}
                  <a href={`mailto:${office.email}`} className="text-[#3D62EB] hover:underline">
                    {office.email}
                  </a>
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#3D62EB] hover:text-blue-700 transition-colors group">
                  Get Directions
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <OfficeMap />

      </div>
    </section>
  );
}
