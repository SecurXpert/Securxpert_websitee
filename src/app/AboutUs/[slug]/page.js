import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

const teamData = [
    {
        id: 1,
        firstName: "Sarah",
        lastName: "Aileah",
        role: ["Chief Creative Officer"],
        employee: "/Home/OurTeam/members1.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[240%] max-w-none h-[320px]"
    },
    {
        id: 2,
        firstName: "Stevan",
        lastName: "Redfen",
        role: ["SVP Growth"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[240%] max-w-none h-[320px]"
    },
    {
        id: 3,
        firstName: "AJ",
        lastName: "Josephson",
        role: ["Head of Design"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 4,
        firstName: "Anna",
        lastName: "Boyarkina",
        role: ["Head of", "Product"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 5,
        firstName: "Ivan",
        lastName: "Demshin",
        role: ["Head of", "Development"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 6,
        firstName: "James",
        lastName: "Beer",
        role: ["Chief Financial", "Officer"],
        employee: "/Home/OurTeam/members1.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 7,
        firstName: "Yuliya",
        lastName: "Malysh",
        role: ["CTO and", "Co-founder"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 8,
        firstName: "John",
        lastName: "Doe",
        role: ["Head of", "Operations"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    },
    {
        id: 9,
        firstName: "Adam",
        lastName: "Garr",
        role: ["Head of Sales"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[320px]"
    }
];

export async function generateStaticParams() {
    return [
        { slug: "team" },
        { slug: "founders" }
    ];
}

export default async function AboutUsSubPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    if (slug !== "team" && slug !== "founders") {
        notFound();
    }

    if (slug === "founders") {
        return (
            <main
                className="relative w-full min-h-screen pt-28 pb-20 text-[#1E1B4B] select-none"
                style={{
                    background: "linear-gradient(258.45deg, rgba(60, 95, 226, 0.05) 16.97%, rgba(45, 45, 134, 0.05) 51.95%, rgba(61, 99, 234, 0.05) 87.66%), #eef2f6"
                }}
            >
                <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
                    <div className="flex-1 mt-4 lg:mt-4">
                        {/* Back Button */}
                        <div className="flex justify-start mb-6">
                            <Link
                                href="/AboutUs"
                                className="inline-flex items-center gap-1.5 text-[#3E66F3] hover:text-[#2541C5] font-semibold text-[16px] transition-all duration-150"
                            >
                                <LuChevronLeft className="w-5 h-5" /> Back
                            </Link>
                        </div>

                        <p className="text-[15px] md:text-[16px] font-medium text-slate-700 mb-2 font-Plus Jakarta Sans">
                            Founder, Managing Director & Chief Technology Officer
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-Plus Jakarta Sans text-[#1c2237] mb-3 tracking-tight">
                            G. Sri Manasa
                        </h1>
                        <div className="text-slate-700 text-[15px] md:text-[16px] leading-[1.4] space-y-3 font-medium">
                            <p>
                                G. Sri Manasa is the Founder, Managing Director and Chief Technology Officer of SecurXpert Technologies Pvt Ltd. With over 10 years of industry experience, she leads the company's technology vision and engineering direction from the ground up.
                            </p>
                            <p>
                                She played a key role in shaping SecurXperts into a product-driven technology company with a strong focus on security and scalability. In the first year alone, she led the development of more than 10 product MVPs — creating a strong technical foundation for platforms and client solutions.
                            </p>
                            <p>
                                As CTO, she oversees product architecture, software development, infrastructure, cybersecurity and quality standards. She ensures every solution meets strict benchmarks for performance, reliability and security.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <img
                            src="/AboutUs/founders1.jpg"
                            alt="G. Sri Manasa"
                            className="w-full max-h-[550px] rounded-lg shadow-sm object-cover"
                        />
                    </div>
                </div>

                {/* Second Founder */}
                <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14 mt-20">
                    <div className="flex-1 w-full flex justify-center lg:justify-start">
                        <img
                            src="/AboutUs/founders2.jpg"
                            alt="G. Praveen Kumar"
                            className="w-full max-h-[550px] rounded-lg shadow-sm object-cover"
                        />
                    </div>

                    <div className="flex-1 mt-4 lg:mt-0">
                        <div className="inline-block bg-[#f1f5f9] px-4 py-2 rounded-full mb-3">
                            <span className="text-[13px] md:text-[14px] font-semibold text-[#1c2237] font-Plus Jakarta Sans">
                                Co-Founder & Chief Executive Officer 
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-Plus Jakarta Sans text-[#1c2237] mb-3 tracking-tight">
                            G. Praveen Kumar
                        </h1>
                        <div className="text-slate-700 text-[15px] md:text-[16px] leading-[1.3] space-y-2 font-medium">
                            <p>
                                G. Praveen Kumar is the Co-Founder and Chief Executive Officer of SecurXpert Technologies Pvt Ltd and leads the company's global business strategy, growth and operations. He brings over a decade of experience in business development, operations and client management.
                            </p>
                            <p>
                                Since co-founding the company, he has been instrumental in scaling SecurXpert from an early-stage startup into a fast-growing international organization. Under his leadership, the company expanded globally and initiated its UK operations within the first year. As CEO, he drives corporate strategy, partnerships and market expansion. He oversees major functions including operations, recruitment, compliance, delivery governance and process frameworks that support international growth.
                            </p>
                            <p>
                                His vision is to transform SecurXpert into a globally credible security and technology partner for enterprises. His mission is to create a scalable, execution-focused organization driven by discipline, client trust and sustainable growth.
                            </p>
                            <p>
                                He is also deeply involved in strengthening leadership systems and fostering a performance-driven culture to ensure the company grows responsibly and consistently.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main
            className="relative w-full min-h-screen pt-18 pb-14 text-white select-none overflow-hidden bg-[#4335C6]"
        >
            {/* Top Header Section */}
            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">

                {/* Back Button */}
                <div className="flex justify-start mt-15 pl-40">
                    <Link
                        href="/AboutUs"
                        className="inline-flex items-center gap-1.5 text-white/90 hover:text-white font-medium text-[20px] transition-all duration-150"
                    >
                        <LuChevronLeft className="w-6 h-6" /> Back
                    </Link>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold font-Plus Jakarta Sans text-white tracking-wide">
                        Our Team
                    </h1>
                </div>

                {/* Filter Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    <button className="bg-white text-[#4335C6] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer">
                        Tecnology & Development
                    </button>
                    <button className="bg-transparent text-white border border-white/60 hover:bg-white/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Operation & Management
                    </button>
                    <button className="bg-transparent text-white border border-white/60 hover:bg-white/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Strategy & Buisness
                    </button>
                    <button className="bg-transparent text-white border border-white/60 hover:bg-white/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Marketting & Content
                    </button>
                    <button className="bg-transparent text-white border border-white/60 hover:bg-white/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        School Management
                    </button>
                </div>

                {/* Grid Area */}
                <div className="relative max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 justify-items-center">
                        {teamData.map((member) => (
                            <div
                                key={member.id}
                                className="relative w-full max-w-[250px] cursor-pointer group"
                            >
                                {/* The White Frame Container */}
                                <div className="border-[14px] border-white h-[300px] w-full relative">
                                    {/* Empty space inside where blue shows through */}
                                </div>

                                {/* The Person Image (absolutely positioned to break out) */}
                                {/* Using employee image from data, but ensuring it sits perfectly on the bottom bar */}
                                {member.employee && (
                                    <img
                                        src={member.employee}
                                        alt={`${member.firstName} ${member.lastName}`}
                                        className={`absolute object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none drop-shadow-2xl z-10 ${member.imgpos || "bottom-[66px] left-1/2 -translate-x-1/2 w-[140%] h-[360px]"}`}
                                    />
                                )}

                                {/* The Bottom Text Box */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white pt-2 pb-4 px-2 text-center z-20">
                                    <h3 className="text-[#060913] font-bold text-[19px] leading-tight font-Plus Jakarta Sans">
                                        {member.firstName} {member.lastName}
                                    </h3>
                                    <p className="text-[#475569] text-[13px] font-medium mt-1">
                                        {member.role.join(" ")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
