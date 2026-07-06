import React from 'react';

export default function Demo() {
  return (
    <div className="mt-8 bg-[#EEF2FC] rounded-[24px] p-6 lg:p-7 shadow-sm border border-slate-200">
      <h3 className="text-[22px] xl:text-[26px] text-center text-[#0A1D56] font-medium mb-6 font-sans">
        Get Your Free Demo
      </h3>
      <form className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
        />
        <input 
          type="text" 
          placeholder="Company Name" 
          className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
        />
        <input 
          type="email" 
          placeholder="Work Email" 
          className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full bg-white border border-[#C9CED6] rounded-xl px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow"
        />
        <textarea 
          placeholder="Business Need" 
          rows="4"
          className="w-full bg-white border border-[#C9CED6] rounded-[16px] px-4 py-3 text-[14px] xl:text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#3C60E7] focus:ring-1 focus:ring-[#3C60E7] transition-shadow resize-none"
        ></textarea>
        
        <div className="flex justify-center mt-3">
          <button 
            type="button" 
            className="bg-[#0A266C] hover:bg-[#071B4D] text-white text-[14px] xl:text-[15px] font-normal tracking-wide px-8 py-3 rounded-full transition-colors w-max mx-auto shadow-md"
          >
            SCHEDULE NOW
          </button>
        </div>
      </form>
    </div>
  );
}
