"use client";

import Link from "next/link";

const servicesData = [
    {
        id: 1,
        title: "Customer Software development",
        image: "/services-media/OurServices/services1.png",
        slug: "software-development",
    },
    {
        id: 2,
        title: "It support & Managed services",
        image: "/services-media/OurServices/services2.png",
        slug: "it-support",
    },
    {
        id: 3,
        title: "Cloud & Infrastructure Services",
        image: "/services-media/OurServices/services3.png",
        slug: "cloud-services",
    },
    {
        id: 4,
        title: "Business Process Outsourcing (BPO)",
        image: "/services-media/OurServices/services4.png",
        slug: "bpo-services",
    },
    {
        id: 5,
        title: "AI Chatbots Development",
        image: "/services-media/OurServices/services5.png",
        slug: "ai-chatbots",
    },
    {
        id: 6,
        title: "Digital Marketing Solutions",
        image: "/services-media/OurServices/services6.png",
        slug: "digital-marketing",
    },
    {
        id: 7,
        title: "UI/UX Design Services",
        image: "/services-media/OurServices/services7.png",
        slug: "ui-ux-design",
    },
    {
        id: 8,
        title: "Cybersecurity Services",
        image: "/services-media/OurServices/services8.png",
        slug: "cybersecurity",
    },
];

export default function OurServices() {
    return (
        <section className="relative w-full bg-white py-10 overflow-hidden text-slate-800">


            {/* Main Container */}
            <div className="relative max-w-[1465px] mx-auto px-6 sm:px-12 lg:px-24">

                {/* Header Block */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-8">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 font-sans">
                        Core Services 
                    </h2>

                    {/* Symmetrical Tech Pill Button with SVG Background Design overlay */}
                    <div className="relative mt-0 w-full flex justify-center items-center min-h-[120px] overflow-visible">
                        {/* Waves SVG Background loaded as an image asset */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible">
                            <img
                                src="/services-media/OurServices/line pattern.svg"
                                alt="Waves Background Pattern"
                                className="w-full max-w-[1517px] h-auto opacity-70 object-contain select-none"
                            />
                        </div>

                        {/* Symmetrical Tech Pill Button inside the relative frame */}
                        <div className="relative z-10 inline-flex justify-center items-center px-6 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-950 shadow-md border border-blue-950/20">
                            <span className="text-white text-lg font-medium  tracking-wide text-center">
                                Comprehensive technology solutions designed to solve complex business challenges
                            </span>
                        </div>
                    </div>


                </div>

                {/* Services Grid (3 Columns on Large, 2 Columns on Medium, 1 Column on Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 sm:gap-y-16">
                    {servicesData.map((service) => (
                        <Link
                            href={`/services/${service.slug}`}
                            key={service.id}
                            className="group relative flex flex-col cursor-pointer transition-all duration-300"
                        >
                            {/* Image Frame with Double rounded borders & Glass effects */}
                            <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] bg-slate-50 transition-all duration-300">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    className="w-full h-full object-fill transition-transform duration-500 ease-out group-hover:scale-105"
                                />

                                {/* Glass Overlay on Hover */}
                                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Floating Bottom-Right Arrow Circle */}
                                <div className="absolute bottom-1.5 right-1.5 bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#1D4ED8] active:scale-95 z-10">
                                    <svg
                                        className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="7"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Title Section left-aligned perfectly with card edge */}
                            <h3 className="text-left font-semibold text-[#2F2F2F] text-md  mt-3 px-2 group-hover:text-[#2563EB] transition-colors duration-250 font-sans tracking-tight">
                                {service.title}
                            </h3>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
