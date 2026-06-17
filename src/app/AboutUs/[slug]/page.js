import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

import TeamSection from "./TeamSection";

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
                className="relative w-full min-h-screen pt-34 pb-20 text-[#1E1B4B] select-none"
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
        <TeamSection />
    );
}
