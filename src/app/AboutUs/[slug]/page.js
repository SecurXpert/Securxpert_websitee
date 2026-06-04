import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

const teamData = [
    {
        id: 1,
        firstName: "Andrey",
        lastName: "Khusid",
        role: ["CEO and", "Co-founder"],
        bg: "/Home/OurTeam/Vector 1.png",
        employee: "/Home/OurTeam/employee1.png",
        textPos: "top-[22%] left-[14%] max-w-[44%]"
    },
    {
        id: 2,
        firstName: "Stevan",
        lastName: "Redfen",
        role: ["SVP Growth"],
        bg: "/Home/OurTeam/Vector 2.png",
        employee: "/Carrers/ourworld/bearded.png",
        textPos: "top-[20%] left-[13%] max-w-[42%]"
    },
    {
        id: 3,
        firstName: "AJ",
        lastName: "Josephson",
        role: ["Head of Design"],
        bg: "/Home/OurTeam/Vector 3.png",
        employee: "/Carrers/ourworld/james.png",
        textPos: "top-[20%] left-[14%] max-w-[42%]"
    },
    {
        id: 4,
        firstName: "Anna",
        lastName: "Boyarkina",
        role: ["Head of", "Product"],
        bg: "/Home/OurTeam/vector4.png",
        employee: "/Carrers/ourworld/woman_glasses.png",
        textPos: "top-[25%] left-[13%] max-w-[40%]"
    },
    {
        id: 5,
        firstName: "Ivan",
        lastName: "Demshin",
        role: ["Head of", "Development"],
        bg: "/Home/OurTeam/Vector 5.png",
        employee: "/Carrers/ourworld/man_asian.png",
        textPos: "top-[20%] left-[10%] max-w-[45%]"
    },
    {
        id: 6,
        firstName: "James",
        lastName: "Beer",
        role: ["Chief Financial", "Officer"],
        bg: "/Home/OurTeam/Vector 6.png",
        employee: "/Carrers/ourworld/bearded.png",
        textPos: "top-[20%] left-[14%] max-w-[42%]"
    },
    {
        id: 7,
        firstName: "Yuliya",
        lastName: "Malysh",
        role: ["CTO and", "Co-founder"],
        bg: "/Home/OurTeam/Vector 7.png",
        employee: "/Carrers/ourworld/woman_glasses.png",
        textPos: "top-[20%] left-[10%] max-w-[45%]"
    },
    {
        id: 8,
        firstName: "John",
        lastName: "Doe",
        role: ["Head of", "Operations"],
        bg: "/Home/OurTeam/Vector 8.png",
        employee: "/Carrers/ourworld/james.png",
        textPos: "top-[25%] left-[13%] max-w-[40%]"
    },
    {
        id: 9,
        firstName: "Adam",
        lastName: "Garr",
        role: ["Head of Sales"],
        bg: "/Home/OurTeam/vector 9.png",
        employee: "/Carrers/ourworld/man_asian.png",
        textPos: "top-[25%] left-[13%] max-w-[40%]"
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
            className="relative w-full min-h-screen pt-28 pb-20 text-[#1E1B4B] select-none overflow-hidden"
            style={{
                background: "linear-gradient(258.45deg, rgba(60, 95, 226, 0.2) 16.97%, rgba(45, 45, 134, 0.2) 51.95%, rgba(61, 99, 234, 0.2) 87.66%), #ffffff"
            }}
        >
            {/* Ambient subtle light accents */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* Top Header Section */}
            <div className="relative max-w-[1400px] mx-auto px-8 md:px-20 z-10">

                {/* Back Button */}
                <div className="flex justify-start mb-6">
                    <Link
                        href="/AboutUs"
                        className="inline-flex items-center gap-1.5 text-[#3E66F3] hover:text-[#2541C5] font-semibold text-[17px] transition-all duration-150"
                    >
                        <LuChevronLeft className="w-5 h-5" /> Back
                    </Link>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold font-Plus Jakarta Sans text-[#060913] tracking-tight">
                        Our Team
                    </h1>
                </div>

                {/* Filter Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
                    <button className="bg-[#5679F4] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-[#3E66F3]/10 border border-[#3E66F3] transition-all cursor-pointer">
                        Tecnology & Development
                    </button>
                    <button className="bg-transparent text-[#64748B] hover:text-[#060913] border border-[#06003D]/60  px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer">
                        Operation & Management
                    </button>
                    <button className="bg-transparent text-[#64748B] hover:text-[#060913] border border-[#06003D]/60 px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer">
                        Strategy & Buisness
                    </button>
                    <button className="bg-transparent text-[#64748B] hover:text-[#060913] border border-[#06003D]/60 px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer">
                        Marketting & Content
                    </button>
                    <button className="bg-transparent text-[#64748B] hover:text-[#060913] border border-[#06003D]/60 px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer">
                        School Management
                    </button>
                </div>

                {/* Grid Area */}
                <div className="relative max-w-[1080px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {teamData.map((member) => (
                            <div
                                key={member.id}
                                className="group relative w-full max-w-[290px] aspect-[4.2/3.6] overflow-visible transition-all duration-300 transform hover:scale-[1.04] hover:-translate-y-1 active:scale-[0.98] cursor-pointer"
                            >
                                {/* Layer 3: Dynamic Text Overlay */}
                                <div className={`absolute z-10 flex flex-col text-left text-white pointer-events-none ${member.textPos}`}>
                                    <div className="text-[17px] sm:text-[19px] md:text-[23px] font-bold tracking-tight leading-[1.1] text-white font-Plus Jakarta Sans">
                                        {member.firstName}
                                    </div>
                                    <div className="text-[17px] sm:text-[19px] md:text-[23px] font-bold tracking-tight leading-[1.1] text-white font-Plus Jakarta Sans mt-0.5">
                                        {member.lastName}
                                    </div>
                                    <div className="text-[9px] sm:text-[10px] md:text-[13px] text-white/95 font-medium mt-3 leading-snug tracking-wide font-Raleway">
                                        {member.role.map((line, lIdx) => (
                                            <div key={lIdx}>{line}</div>
                                        ))}
                                    </div>
                                </div>

                                {/* Layer 2: Employee Photo Overlay with CSS Masking */}
                                {member.employee && (
                                    <div
                                        className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
                                        style={{
                                            WebkitMaskImage: `url('${member.bg}')`,
                                            maskImage: `url('${member.bg}')`,
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                            maskPosition: "center"
                                        }}
                                    >
                                        <img
                                            src={member.employee}
                                            alt={`${member.firstName} ${member.lastName}`}
                                            className="absolute bottom-[-1px] right-[2%] h-[93%] w-[58%] object-contain object-bottom select-none pointer-events-none transform -rotate-[3.5deg] origin-bottom group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                                        />
                                    </div>
                                )}

                                {/* Layer 1: Alpha-channel background vector shape outline */}
                                <img
                                    src={member.bg}
                                    alt=""
                                    className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition-all duration-300 z-0"
                                />
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </main>
    );
}
