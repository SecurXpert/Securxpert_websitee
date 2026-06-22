import React from 'react';
import Link from 'next/link';

export default function Cta() {
  return (
    <section 
      className="w-full px-4 md:px-8 lg:px-16 flex justify-center border-t border-gray-100 "
      style={{ background: 'linear-gradient(to bottom, white 50%, #EEEBF5 50%)' }}
    >
      <div 
        className="w-full max-w-[1000px] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 md:py-14 relative "
        style={{
          backgroundImage: "url('/products/cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-Plus Jakarta Sans">
            Try our service now!
          </h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
          <Link href="/contact">
          <button className="bg-white text-black font-semibold rounded-full px-8 md:px-10 py-3 md:py-3.5 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg text-sm md:text-base">
            Talk to our product team
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
