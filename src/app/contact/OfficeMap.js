"use client";

import React, { useState } from "react";

const offices = [
  {
    id: 1,
    name: "Hyderabad HQ",
    lat: 17.4477519,
    lng: 78.3616521,
    address: "Third Floor, PR R One Towers, Plot No 59, DLF Rd, Gachibowli, Hyderabad, Telangana",
  },
  {
    id: 2,
    name: "UK Office",
    lat: 51.507351,
    lng: -0.127758,
    address: "London, UK",
  },
];

export default function OfficeMap() {
  const [activeOffice, setActiveOffice] = useState(offices[0]);

  // Use the latitude and longitude to build the Google Maps embed URL
  const mapUrl = `https://maps.google.com/maps?q=${activeOffice.lat},${activeOffice.lng}&t=&z=15&ie=UTF-8&iwloc=&output=embed`;

  return (
    <div className="w-full relative mt-16">
      {/* Location Switcher */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {offices.map((office) => (
          <button
            key={office.id}
            onClick={() => setActiveOffice(office)}
            className={`px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95 ${activeOffice.id === office.id
                ? "bg-[#3D62EB] text-white shadow-lg shadow-blue-500/30 hover:brightness-110"
                : "bg-white text-slate-600 hover:text-[#3D62EB] hover:border-[#3D62EB]/30 hover:bg-slate-50 shadow-sm border border-slate-200"
              }`}
          >
            {office.name}
          </button>
        ))}
      </div>

      <div className="w-full h-[400px] md:h-[500px] relative rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
        <iframe
          title={`Google Map - ${activeOffice.name}`}
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay Badge */}
        <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.1)] border border-slate-100/50 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-bold text-[#2C2F8D] whitespace-nowrap">{activeOffice.name}</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-600 text-sm max-w-[200px] sm:max-w-xs md:max-w-md truncate" title={activeOffice.address}>
            {activeOffice.address}
          </span>
        </div>
      </div>
    </div>
  );
}
