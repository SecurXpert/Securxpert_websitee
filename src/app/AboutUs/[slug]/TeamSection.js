"use client";

import React from "react";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const teamData = [
    {
        id: 1,
        firstName: "Sarah",
        lastName: "Aileah",
        role: ["Chief Creative Officer"],
        employee: "/AboutUs/ourteam/members1.png",
        hoverImage: "/AboutUs/ourteam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-[130%] max-w-none h-[340px]"
    },
    {
        id: 2,
        firstName: "Stevan",
        lastName: "Redfen",
        role: ["SVP Growth"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 3,
        firstName: "AJ",
        lastName: "Josephson",
        role: ["Head of Design"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 4,
        firstName: "Anna",
        lastName: "Boyarkina",
        role: ["Head of", "Product"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 5,
        firstName: "Ivan",
        lastName: "Demshin",
        role: ["Head of", "Development"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 6,
        firstName: "James",
        lastName: "Beer",
        role: ["Chief Financial", "Officer"],
        employee: "/Home/OurTeam/members1.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 7,
        firstName: "Yuliya",
        lastName: "Malysh",
        role: ["CTO and", "Co-founder"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 8,
        firstName: "John",
        lastName: "Doe",
        role: ["Head of", "Operations"],
        employee: "/Home/OurTeam/members3.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 9,
        firstName: "Adam",
        lastName: "Garr",
        role: ["Head of Sales"],
        employee: "/Home/OurTeam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    // Adding the two new images requested earlier
    {
        id: 10,
        firstName: "David",
        lastName: "Smith",
        role: ["Technical Director"],
        employee: "/AboutUs/ourteam/members1.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    },
    {
        id: 11,
        firstName: "Emma",
        lastName: "Johnson",
        role: ["Lead Developer"],
        employee: "/AboutUs/ourteam/members2.png",
        imgpos: "bottom-[64px] left-1/2 -translate-x-1/2 w-auto max-w-none h-[260px]"
    }
];

export default function TeamSection() {
    return (
        <main
            className="relative w-full min-h-screen pt-18 pb-14 text-[#19085F] select-none overflow-hidden bg-[#EDEDFD]"
        >
            {/* Top Header Section */}
            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">

                {/* Back Button */}
                <div className="flex justify-start mt-15 pl-40">
                    <Link
                        href="/AboutUs"
                        className="inline-flex items-center gap-1.5 text-[#384DE4] hover:text-[#2541C5] font-medium text-[20px] transition-all duration-150"
                    >
                        <LuChevronLeft className="w-6 h-6" /> Back
                    </Link>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold font-Plus Jakarta Sans text-[#19085F] tracking-wide">
                        Our Team
                    </h1>
                </div>

                {/* Filter Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    <button className="bg-[#384DE4] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer">
                        Tecnology & Development
                    </button>
                    <button className="bg-transparent text-[#19085F] border border-[#19085F]/30 hover:bg-[#384DE4]/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Operation & Management
                    </button>
                    <button className="bg-transparent text-[#19085F] border border-[#19085F]/30 hover:bg-[#384DE4]/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Strategy & Buisness
                    </button>
                    <button className="bg-transparent text-[#19085F] border border-[#19085F]/30 hover:bg-[#384DE4]/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        Marketting & Content
                    </button>
                    <button className="bg-transparent text-[#19085F] border border-[#19085F]/30 hover:bg-[#384DE4]/10 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer">
                        School Management
                    </button>
                </div>

                {/* Grid Area */}
                <div className="relative max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 justify-items-center">
                        {teamData.map((member) => (
                            <div
                                key={member.id}
                                className="relative w-full max-w-[220px] "
                            >
                                {/* The Lilac Frame Container */}
                                <div className="border-[14px] border-[#D7DBFD] h-[300px] w-full relative">
                                    {/* Empty space inside where section bg shows through */}
                                </div>

                                {/* The Person Image (absolutely positioned to break out) */}
                                {/* Using employee image from data, but ensuring it sits perfectly on the bottom bar */}
                                {member.employee && (
                                    <>
                                        <img
                                            src={member.employee}
                                            alt={`${member.firstName} ${member.lastName}`}
                                            className={`absolute object-contain object-bottom transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105 pointer-events-none drop-shadow-2xl z-10 ${member.imgpos || "bottom-[66px] left-1/2 -translate-x-1/2 w-[140%] h-[360px]"}`}
                                        />

                                    </>
                                )}

                                {/* The Bottom Text Box */}
                                <div className="absolute bottom-0 left-0 right-0 bg-[#D7DBFD] pt-2 pb-4 px-2 text-center z-20">
                                    <h3 className="text-[#060913] font-bold text-[19px] leading-tight font-Plus Jakarta Sans">
                                        {member.firstName} {member.lastName}
                                    </h3>
                                    <p className="text-[#19085F] text-[13px] font-medium mt-1 opacity-80">
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
