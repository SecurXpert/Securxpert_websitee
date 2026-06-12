import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-slate-50 flex flex-col items-center justify-center px-6 py-20 select-none">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8">
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}</style>

        {/* 404 SVG Illustration */}
        <div
          className="relative w-full max-w-[750px] mx-auto animate-fade-in-up"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <img
            src="/404.svg"
            alt="404 - Page Not Found"
            className="w-full h-auto object-contain drop-shadow-md pointer-events-none hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>
        </div>

        {/* Call to Action */}
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 bg-[#3D62EB] hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          Return to Homepage
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>

      </div>
    </main>
  );
}
