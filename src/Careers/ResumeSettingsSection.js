import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, FileText, Check } from "lucide-react";
import { FormInput } from "./FormComponents";

const fileFormats = [
  { id: "pdf", title: "PDF", desc: "Portable Document" },
  { id: "doc", title: "DOC", desc: "MS Word 97-2003" },
  { id: "docx", title: "DOCX", desc: "MS Word Document" },
  { id: "rtf", title: "RTF", desc: "Rich Text Format" },
  { id: "txt", title: "TXT", desc: "Plain Text" },
];

export default function ResumeSettingsSection({ isExpanded, onToggle }) {
  const [selectedFormats, setSelectedFormats] = useState(["pdf", "doc", "docx"]);
  const [maxSize, setMaxSize] = useState("5");
  const [isMandatory, setIsMandatory] = useState(true);

  const toggleFormat = (id) => {
    setSelectedFormats(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-8">
      <div 
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-[18px] font-semibold text-slate-800">Resume Settings</h2>
            <span className="text-[14px] font-medium text-slate-500">Configure resume upload requirements</span>
          </div>
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 bg-white space-y-8">
          
          {/* Allowed File Formats */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                Allowed File Formats
              </h3>
              <p className="text-[13px] text-slate-500">Select which file formats candidates can upload</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fileFormats.map((format) => {
                const isSelected = selectedFormats.includes(format.id);
                return (
                  <div 
                    key={format.id}
                    onClick={() => toggleFormat(format.id)}
                    className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col gap-1 relative transition-colors ${
                      isSelected 
                        ? "border-[#5A73FF] bg-[#EFF6FF]" 
                        : "border-slate-200 hover:border-[#5A73FF]"
                    }`}
                  >
                    <span className={`text-[14px] font-bold ${isSelected ? "text-[#1E1B4B]" : "text-slate-600"}`}>
                      {format.title}
                    </span>
                    <span className={`text-[12px] ${isSelected ? "text-indigo-800/80" : "text-slate-400"}`}>
                      {format.desc}
                    </span>
                    {isSelected && (
                      <div className="absolute top-4 right-4 text-blue-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Maximum File Size */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[14px] font-bold text-slate-800 font-sans">
              Maximum File Size (MB)
            </label>
            <input
              type="number"
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
            />
            <p className="text-[12px] text-slate-400 mt-1">Recommended: 5MB or less for optimal upload performance</p>
          </div>

          {/* Resume Upload Mandatory Toggle */}
          <div className="flex items-center gap-4 p-5 border border-[#E2E8F0] bg-[#F8FAFC] rounded-xl">
            <div 
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 cursor-pointer shrink-0 ${isMandatory ? 'bg-blue-500' : 'bg-slate-300'}`} 
              onClick={() => setIsMandatory(!isMandatory)}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isMandatory ? 'left-7' : 'left-1'}`} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[14px] font-medium text-slate-700">Resume Upload Mandatory</span>
              <span className="text-[13px] text-slate-500">When enabled, candidates must upload a resume to submit their application</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
