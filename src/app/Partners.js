"use client";

import React from "react";

// Partner data referencing static SVG assets served from the public directory
const partners = [
    {
        name: "Skyworks",
        logo: (
            <img 
                src="/Home/Partners/Layer_1-2.svg" 
                alt="Skyworks Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "Verisign",
        logo: (
            <img 
                src="/Home/Partners/VeriSign_Inc.svg" 
                alt="Verisign Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "SolarEdge",
        logo: (
            <img 
                src="/Home/Partners/SolarEdge_Technologies_Inc.svg" 
                alt="SolarEdge Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "Adobe",
        logo: (
            <img 
                src="/Home/Partners/Adobe_Inc.svg" 
                alt="Adobe Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "AMD",
        logo: (
            <img 
                src="/Home/Partners/Advanced_Micro_Devices_Inc.svg" 
                alt="AMD Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "First Solar",
        logo: (
            <img 
                src="/Home/Partners/First_Solar_Inc.svg" 
                alt="First Solar Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "IBM",
        logo: (
            <img 
                src="/Home/Partners/International_Business_Machines_Corporation.svg" 
                alt="IBM Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "Salesforce",
        logo: (
            <img 
                src="/Home/Partners/Salesforce.svg" 
                alt="Salesforce Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "Nvidia",
        logo: (
            <img 
                src="/Home/Partners/NVIDIA_Corporation.svg" 
                alt="Nvidia Logo" 
                className="w-full h-full object-contain" 
            />
        )
    },
    {
        name: "DXC Technology",
        logo: (
            <img 
                src="/Home/Partners/DXC_Technology_Company.svg" 
                alt="DXC Technology Logo" 
                className="w-full h-full object-contain" 
            />
        )
    }
];

export default function Partners() {
    // Duplicate the array to create a seamless infinite loop effect
    const doublePartners = [...partners, ...partners];

    return (
        <section className="bg-white py-14 text-center font-sans select-none">
            {/* Section Header */}
            <span className="block text-sm font-bold uppercase tracking-wide text-[#210A4A] mb-3">
                Trusted By
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#050816] mb-12 font-semibold  tracking-tight">
                Global Partners
            </h2>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent hover:pause">
                {/* Animated Track */}
                <div className="flex w-max gap-12 animate-marquee whitespace-nowrap px-8">
                    {doublePartners.map((partner, index) => (
                        <div key={index}>
                            <div className="w-32 h-10 flex items-center justify-center">
                                {partner.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
