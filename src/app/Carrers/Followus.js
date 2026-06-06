"use client";

import React from "react";

export default function FollowUs() {
  return (
    <section className="relative w-full py-16 md:py-14 bg-white text-slate-800 overflow-hidden">
      <div className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto px-4 md:px-20">
        
        {/* Responsive 12-Column Grid Container */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 lg:items-stretch">
          
          {/* Column 1 (Wider: col-span-4 out of 12) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col lg:justify-between lg:h-full gap-6 lg:gap-0">
            {/* Header Text */}
            <div className="text-[#100D35] text-left pt-2 flex flex-col gap-1 font-sans">
              <h2 className="text-5xl font-extrabold leading-none tracking-tight font-sans">
                Follow us <span className="font-normal text-4xl">on</span>
              </h2>
              <span className="text-[38px] font-light leading-tight tracking-tight text-slate-500">
                social to see
              </span>
              <span className="text-[38px] font-light leading-tight tracking-tight text-slate-500">
                what we're up to!
              </span>
            </div>
            
            {/* Group Photo */}
            <div className="rounded-[20px] overflow-hidden aspect-[1.35] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Carrers/Followus/us 1.png" 
                alt="Securxpert team gathering" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 2 (Narrower: col-span-2 out of 12) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex flex-col lg:justify-between lg:h-full gap-6 lg:gap-0">
            {/* Christmas Tree */}
            <div className="rounded-[20px] overflow-hidden aspect-[3/4] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Carrers/Followus/us 2.png" 
                alt="Holiday tree at office" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Dots Graphic */}
            <div className="rounded-[20px] overflow-hidden aspect-square w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Carrers/Followus/us 3.png" 
                alt="Colorful dots decoration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 3 (col-span-3 out of 12) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 h-full">
            {/* Ping Pong (Tall Vertical image) */}
            <div className="rounded-[20px] overflow-hidden aspect-[1003/2784] lg:aspect-auto lg:h-[530px] w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Carrers/Followus/us 4.png" 
                alt="Team member playing ping pong" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Column 4 (col-span-3 out of 12) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col lg:justify-between lg:h-full gap-6 lg:gap-0">
            {/* Logo Graphic */}
            <div className="rounded-[20px] overflow-hidden aspect-square w-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/Carrers/Followus/us 5.png" 
                alt="Securxpert branding artwork" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Social Channels List */}
            <div className="flex flex-col text-left py-2 mt-auto">
              <p className="text-[#100D35] text-sm font-medium mb-6 leading-relaxed opacity-80">
                We are eager to be in touch with you in the following channels:
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#3D62EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold border-b border-slate-300 hover:border-blue-600 pb-0.5 leading-none">Facebook</span>
                </a>
                
                {/* Youtube */}
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#3D62EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.517 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.002 3.002 0 0 0 2.11 2.11C4.483 20.5 12 20.5 12 20.5s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold border-b border-slate-300 hover:border-blue-600 pb-0.5 leading-none">Youtube</span>
                </a>
                
                {/* Twitter */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#3D62EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold border-b border-slate-300 hover:border-blue-600 pb-0.5 leading-none">Twitter</span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#3D62EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold border-b border-slate-300 hover:border-blue-600 pb-0.5 leading-none">Instagram</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#3D62EB] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold border-b border-slate-300 hover:border-blue-600 pb-0.5 leading-none">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
