"use client";

import React from "react";

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
        employee: null,
        textPos: "top-[20%] left-[13%] max-w-[42%]"
    },
    {
        id: 3,
        firstName: "AJ",
        lastName: "Josephson",
        role: ["Head of Design"],
        bg: "/Home/OurTeam/Vector 3.png",
        employee: null,
        textPos: "top-[20%] left-[14%] max-w-[42%]"
    },
    {
        id: 4,
        firstName: "Anna",
        lastName: "Boyarkina",
        role: ["Head of", "Product"],
        bg: "/Home/OurTeam/vector4.png",
        employee: null,
        textPos: "top-[25%] left-[13%] max-w-[40%]"
    },
    {
        id: 5,
        firstName: "Ivan",
        lastName: "Demshin",
        role: ["Head of", "Development"],
        bg: "/Home/OurTeam/Vector 5.png",
        employee: null,
        textPos: "top-[20%] left-[10%] max-w-[45%]"
    },
    {
        id: 6,
        firstName: "James",
        lastName: "Beer",
        role: ["Chief Financial", "Officer"],
        bg: "/Home/OurTeam/Vector 6.png",
        employee: null,
        textPos: "top-[20%] left-[14%] max-w-[42%]"
    },
    {
        id: 7,
        firstName: "Yuliya",
        lastName: "Malysh",
        role: ["CTO and", "Co-founder"],
        bg: "/Home/OurTeam/Vector 7.png",
        employee: null,
        textPos: "top-[20%] left-[10%] max-w-[45%]"
    },
    {
        id: 8,
        firstName: "John",
        lastName: "Doe",
        role: ["Head of", "Operations"],
        bg: "/Home/OurTeam/Vector 8.png",
        employee: null,
        textPos: "top-[25%] left-[13%] max-w-[40%]"
    },
    {
        id: 9,
        firstName: "Adam",
        lastName: "Garr",
        role: ["Head of Sales"],
        bg: "/Home/OurTeam/vector 9.png",
        employee: null,
        textPos: "top-[25%] left-[13%] max-w-[40%]"
    }
];

export default function OurTeam() {
    return (
        <section 
            className="relative w-full overflow-hidden pt-16 pb-20 text-[#1E1B4B] select-none"
            style={{
                background: "linear-gradient(258.45deg, rgba(60, 95, 226, 0.2) 16.97%, rgba(45, 45, 134, 0.2) 51.95%, rgba(61, 99, 234, 0.2) 87.66%)"
            }}
        >
            {/* Ambient subtle light accents */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* Header Titles matching the mockup */}
            <div className="relative max-w-[1540px] mx-auto px-8 md:px-20 text-center mb-10 z-10">
                <h2 className="text-5xl font-playfair font-bold text-[#1E1B4B] tracking-tight">
                    Our Team
                </h2>
            </div>

            {/* 3x3 Responsive Grid of Geometric Team Card PNGs */}
            <div className="relative max-w-[1080px] mx-auto px-6 md:px-12 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full justify-items-center">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className="group relative w-full max-w-[290px] aspect-[4.2/3.6] overflow-visible transition-all duration-300 transform hover:scale-[1.04] hover:-translate-y-1 active:scale-[0.98] cursor-pointer"
                        >
                            {/* Layer 3: Dynamic Text Overlay (Optimized and individually aligned per shape bounds) */}
                            <div className={`absolute z-10 flex flex-col text-left text-white pointer-events-none ${member.textPos}`}>
                                <div className="text-[17px] sm:text-[19px] md:text-[25px] font-bold tracking-tight leading-[1.1] text-white font-sans">
                                    {member.firstName}
                                </div>
                                <div className="text-[17px] sm:text-[19px] md:text-[25px] font-bold tracking-tight leading-[1.1] text-white font-sans mt-0.5">
                                    {member.lastName}
                                </div>
                                <div className="text-[9px] sm:text-[10px] md:text-[14px]  text-white/90 font-medium mt-3.5 leading-snug tracking-wide font-sans">
                                    {member.role.map((line, lIdx) => (
                                        <div key={lIdx}>{line}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Layer 2: Employee Photo Overlay (Clipped perfectly inside the custom shape boundaries via CSS Masking, with counter-clockwise rotation) */}
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

                {/* Centered View All Members Button */}
                <div className="flex justify-center mt-10">
                    <button className="bg-[#364CC1] hover:bg-slate-900 text-white font-bold text-md py-3.5 px-11 rounded-full flex items-center justify-center gap-2 cursor-pointer  tracking-wide transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
                        View All Team Members
                    </button>
                </div>
            </div>
        </section>
    );
}
