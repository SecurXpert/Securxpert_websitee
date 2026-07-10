import React, { useState, useRef } from "react";
import { Upload, Save } from "lucide-react";

export function Label({ children }) {
  return (
    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
      {children}
    </label>
  );
}

export function Input({ placeholder, value, onChange, readOnly }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      className={`w-full h-10 px-4 text-sm border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
        readOnly
          ? "bg-slate-100 text-xs font-mono text-slate-500 cursor-not-allowed"
          : "bg-slate-50"
      }`}
    />
  );
}

export function UploadArea({ label, sublabel, onChange, value }) {
  const [file, setFile] = useState(null);
  const ref = useRef(null);
  
  // Determine what to display: the local file name, or the existing value (e.g. a URL from the backend)
  const displayValue = file || (typeof value === "string" && value ? value.split("/").pop() : null);

  return (
    <div
      onClick={() => ref.current?.click()}
      className="flex flex-col items-center justify-center gap-2 h-[110px] bg-slate-50 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors"
    >
      <input
        type="file"
        className="hidden"
        ref={ref}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setFile(e.target.files[0].name);
            onChange?.(e.target.files[0]);
          }
        }}
      />
      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400">
        <Upload className="w-4 h-4" />
      </div>
      {displayValue ? (
        <span className="text-xs font-bold text-blue-600 px-4 truncate max-w-full">{displayValue}</span>
      ) : (
        <div className="text-center px-4">
          <p className="text-sm font-medium text-slate-600">{label}</p>
          {sublabel && <p className="text-[11px] text-slate-400">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}

export function SectionCard({ title, icon: Icon, children, footer }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-500" />
        <h3 className="text-[13px] font-bold text-slate-800">{title}</h3>
      </div>
      <div className="p-6 flex flex-col gap-5">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          {footer}
        </div>
      )}
    </div>
  );
}

export function SaveBtn({ onClick, saved }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border text-sm font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm ${
        saved
          ? "bg-green-50 border-green-200 text-green-700"
          : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
      }`}
    >
      <Save className="w-4 h-4" />
      {saved ? "Saved!" : "Save Section"}
    </button>
  );
}
