"use client";

import React from "react";
import Link from "next/link";

export default function Cta() {
    return (
        <section 
            className="w-full text-center select-none py-14 px-6 md:px-12 flex items-center justify-center"
            style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #4D3EDC 7.14%, #4A37D3 14.29%, #482ECA 21.43%, #4526C2 28.57%, #421CB9 35.71%, #4010B1 42.86%, #3D00A8 50%, #3D18B4 57.14%, #3D28C0 64.29%, #3B35CD 71.43%, #3941D9 78.57%, #354DE6 85.71%, #2F58F2 92.86%, #2563FF 100%)"
            }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl md:text-5xl text-white font-medium mb-6 tracking-tight leading-tight">
                    Ready to Transform Your Business? 
                </h2>

                {/* Subtitle / Description */}
                <p className="text-white/90 text-md font-normal max-w-3xl mb-10 leading-relaxed">
                   Join 500+ enterprises worldwide who trust SecurXpert for software development, cloud infrastructure, cybersecurity, and digital transformation — delivered on time, every time. 
                </p>

                {/* Interactive Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#4F46E5] font-medium px-6 py-2.5 rounded-full text-base sm:text-lg shadow-lg shadow-black/10 transition-all hover:scale-[1.02] active:scale-95 duration-150 cursor-pointer text-center inline-block"
                    >
                        Schedule a Free Consultation
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-[#FFFFFF33] hover:border-white/30 text-white font-medium px-6 py-2.5 rounded-full text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-95 duration-150 cursor-pointer text-center inline-block"
                    >
                        Get a Custom Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
