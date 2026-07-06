"use client";

import React from "react";

const teamData = [
    {
        id: 1,
        firstName: "sathwika",
        lastName: "kalwakuntla",
        role: "Front-End Developer",
        employee: "/AboutUs/ourteam/members1.png",
        imgClasses: "h-[320px] w-auto object-contain object-bottom scale-[1.35] group-hover:scale-[1.42]"
    },
    {
        id: 2,
        firstName: "Jonathan",
        lastName: "Leon",
        role: "Chief Talent Officer",
        employee: "/Home/OurTeam/members2.png",
        imgClasses: "h-[320px] w-auto object-contain object-bottom group-hover:scale-105"
    },
    {
        id: 3,
        firstName: "Dean",
        lastName: "Johaness",
        role: "Chief Marketing Officer",
        employee: "/Home/OurTeam/members3.png",
        imgClasses: "h-[320px] w-auto object-contain object-bottom group-hover:scale-105"
    }
];

export default function OurTeam() {
    return (
        <section className="relative w-full overflow-hidden pt-8 pb-8 lg:pt-14 lg:pb-14 bg-[#EDEDFD] select-none font-sans">
            {/* Background Decorative Elements */}

            {/* Top Left Corner Wave Blob */}
            <div className="absolute top-0 left-0 pointer-events-none z-0">
                <svg width="330" height="308" viewBox="0 0 440 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M353.877 150.517C159.486 272.332 114.96 105.393 -110.318 246.563C-335.596 387.733 -588.339 241.006 -588.339 241.006L-589.303 239.468L352.012 -350.403C352.012 -350.403 548.268 28.7022 353.877 150.517Z" fill="#E4E6FC" />
                </svg>
            </div>

            {/* Top Left Dots */}
            <div className="absolute top-54 left-0 opacity-70 pointer-events-none z-10">
                <svg width="100" height="110" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" fill="#A5B4FC" />
                    </pattern>
                    <rect width="80" height="100" fill="url(#dots1)" />
                </svg>
            </div>

            {/* Top Right Circles */}
            <div className="absolute -top-24 -right-24 w-78 h-78 rounded-full border-[58px] border-[#D7DBFD] opacity-80 pointer-events-none"></div>

            {/* Bottom Right Dots */}
            <div className="absolute bottom-54 right-0 opacity-70 pointer-events-none">
                <svg width="100" height="110" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" fill="#A5B4FC" />
                    </pattern>
                    <rect width="80" height="100" fill="url(#dots2)" />
                </svg>
            </div>

            {/* Header Titles */}
            <div className="relative max-w-[1540px] mx-auto px-4 lg:px-8 md:px-12 text-center mb-16 lg:mb-26 z-10">
                <h2 className="text-[28px] sm:text-[32px] md:text-5xl font-bold text-[#19085F] tracking-wide mb-3">
                    Our Team
                </h2>
                <div className="flex items-center justify-center gap-2 mb-3">
                    {/* Left Line: Fades from section bg to dark purple */}
                    <div className="w-20" style={{ height: '3.71px', background: 'linear-gradient(90deg, #EDEDFD 0%, #3734A9 100%)' }}></div>
                    <div className="w-3 h-3 rounded-full bg-[#3734A9]"></div>
                    {/* Right Line: Fades from dark purple to section bg */}
                    <div className="w-20" style={{ height: '3.71px', background: 'linear-gradient(90deg, #3734A9 0%, #EDEDFD 100%)' }}></div>
                </div>
                <p className="text-[#19085F] text-[15px] sm:text-[16px] lg:text-lg max-w-[90%] mx-auto">
                   The people behind the delivery — engineers, designers, and strategists who've shipped 500+ projects together.
                </p>
            </div>

            <style>{`
                @keyframes floatGradient {
                    0% { background-position: 100% 0%; }
                    100% { background-position: 0% 0%; }
                }
                .float-gradient-bg {
                    background: linear-gradient(270deg, #3D02A9 0%, #3D02A9 35%, #60A5FA 50%, #2D59F4 65%, #3D02A9 100%);
                    background-size: 400% 100%;
                    animation: floatGradient 3s linear infinite;
                }
            `}</style>
            {/* 3 Members Responsive Grid */}
            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-24 lg:gap-y-8 w-full justify-items-center mt-12 lg:mt-0">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className="relative w-full max-w-[280px] bg-[#D7DBFD] p-6 pb-8 flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Hover Gradient Background */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 float-gradient-bg" 
                            />

                            {/* The Section-Colored Square Container */}
                            <div className="w-full aspect-square bg-[#EDEDFD] relative z-10">
                                {/* The Person Image (absolutely positioned to break out from the top) */}
                                <img
                                    src={member.employee}
                                    alt={`${member.firstName} ${member.lastName}`}
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 max-w-none pointer-events-none z-10 transition-transform duration-500 ease-out origin-bottom ${member.imgClasses}`}
                                />
                            </div>

                            {/* The Bottom Text Box */}
                            <div className="mt-6 text-center z-20 relative">
                                <h3 className="text-black group-hover:text-white transition-colors duration-300 font-bold text-[22px] leading-tight">
                                    {member.firstName} {member.lastName}
                                </h3>
                                <p className="text-gray-800 group-hover:text-indigo-100 transition-colors duration-300 text-[15px] mt-1.5">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered View All Members Button */}
                <div className="flex justify-center mt-12 lg:mt-18 relative z-20">
                    <button className="bg-[#FEFEFE] hover:bg-slate-50 text-[#384DE4] font-medium text-[15px] lg:text-[17px] py-3 px-8 lg:py-4 lg:px-10 rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                        View All Team Memebers
                    </button>
                </div>
            </div>

            {/* Bottom Waves */}
            <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none overflow-hidden h-[200px]">
                <svg viewBox="0 0 1918 295" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full min-w-[1200px] absolute bottom-0 left-0">

                    {/* Front Wave (E4E6FC) */}
                    <path d="M455 1.27243e-10C851.5 -0.000140773 763.5 116.806 1223 116.806C1682.5 116.806 1918 299.716 1918 299.716V301H-2C-2 301 58.5 0.000140774 455 1.27243e-10Z" fill="#E4E6FC" />
                    {/* Back Wave (D2D4FC) */}
                    <path d="M463 145.069C860 116.342 838.5 -31.5995 1223 65.5918C1607.5 162.783 1918 65.5918 1918 65.5918V203H-2V0C-2 0 66 173.795 463 145.069Z" fill="#D2D4FC" transform="translate(0, 90)" />
                </svg>
            </div>
        </section>
    );
} 
