"use client";

import React from "react";

const teamData = [
    {
        id: 1,
        firstName: "Sarah",
        lastName: "Aileah",
        role: ["Chief Creative Officer"],
        employee: "/Home/OurTeam/members1.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[240%] max-w-none h-[380px]"
    },
    {
        id: 2,
        firstName: "Stevan",
        lastName: "Redfen",
        role: ["SVP Growth"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[240%] max-w-none h-[380px]"
    },
    {
        id: 3,
        firstName: "AJ",
        lastName: "Josephson",
        role: ["Head of Design"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[160%] max-w-none h-[360px]"
    }
];

export default function OurTeam() {
    return (
        <section
            className="relative w-full overflow-hidden pt-20 pb-24 text-white select-none bg-[#4335C6]"
        >
            {/* Header Titles */}
            <div className="relative max-w-[1540px] mx-auto px-8 md:px-12 text-center mb-44 z-10">
                <h2 className="text-4xl sm:text-5xl font-bold font-Plus Jakarta Sans text-white tracking-wide">
                    Our Team
                </h2>
            </div>

            {/* 3 Members Responsive Grid */}
            <div className="relative max-w-[1080px] mx-auto px-6 md:px-12 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 w-full justify-items-center">
                    {teamData.slice(0, 3).map((member) => (
                        <div
                            key={member.id}
                            className="relative w-full max-w-[250px] cursor-pointer group"
                        >
                            {/* The White Frame Container */}
                            <div className="border-[14px] border-white h-[290px] w-full relative">
                                {/* Empty space inside where blue shows through */}
                            </div>

                            {/* The Person Image (absolutely positioned to break out) */}
                            {member.employee && (
                                <img
                                    src={member.employee}
                                    alt={`${member.firstName} ${member.lastName}`}
                                    className={`absolute object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none drop-shadow-2xl z-10 ${member.imgpos || "bottom-[66px] left-1/2 -translate-x-1/2 w-[140%] h-[360px]"}`}
                                />
                            )}

                            {/* The Bottom Text Box */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white pt-3 pb-4 px-2 text-center z-20">
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

                {/* Centered View All Members Button */}
                <div className="flex justify-center mt-20">
                    <button className="bg-white hover:bg-slate-100 text-[#4335C6] font-bold text-md py-3.5 px-11 rounded-full flex items-center justify-center gap-2 cursor-pointer tracking-wide transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
                        View All Team Members
                    </button>
                </div>
            </div>
        </section>
    );
}
