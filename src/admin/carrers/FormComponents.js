import React from "react";
import { ChevronDown } from "lucide-react";

export const FormInput = ({ label, placeholder, required = false, type = "text", value, onChange }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[14px] font-bold text-slate-700 font-sans">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
    />
  </div>
);

export const FormSelect = ({ label, placeholder, required = false, value, onChange, options = [] }) => (
  <div className="flex flex-col gap-1.5 w-full relative">
    <label className="text-[14px] font-bold text-slate-700 font-sans">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        value={value}
        defaultValue={value === undefined ? "" : undefined}
        onChange={onChange}
        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-all font-sans cursor-pointer"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  </div>
);

export const ToggleSwitch = ({ label, description, isEnabled, onToggle }) => (
  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-200 transition-colors cursor-pointer" onClick={onToggle}>
    <div className="flex flex-col gap-0.5">
      <span className="text-[14px] font-bold text-slate-800">{label}</span>
      {description && <span className="text-[12px] text-slate-500">{description}</span>}
    </div>
    <div className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${isEnabled ? 'bg-indigo-600' : 'bg-slate-200'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isEnabled ? 'left-6' : 'left-1'}`} />
    </div>
  </div>
);
