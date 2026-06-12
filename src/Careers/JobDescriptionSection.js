import React from "react";
import { ChevronDown, ChevronUp, Eye, Bold, Italic, Link2, List, ListOrdered, Type } from "lucide-react";

export default function JobDescriptionSection({ isExpanded, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden">
      <div 
        className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] font-semibold text-slate-800">Job Description</h2>
          <span className="text-[14px] font-semibold text-[#475569]">Detailed description of the role</span>
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 bg-white">
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            
            {/* Toolbar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2 text-slate-500">
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors text-[13px] font-bold">H1</button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors text-[13px] font-bold">H2</button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Bold className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Italic className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><List className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><ListOrdered className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-800 rounded transition-colors"><Link2 className="w-4 h-4" /></button>
              </div>
              
              <button className="flex items-center gap-1.5 text-[13px] font-bold text-slate-500 hover:text-indigo-600 transition-colors pr-2">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>

            {/* Text Area */}
            <textarea
              className="w-full min-h-[280px] p-4 text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none resize-y font-mono sm:font-sans"
              placeholder="Write your content here... Use markdown for formatting."
            ></textarea>
            
          </div>
        </div>
      )}
    </div>
  );
}
