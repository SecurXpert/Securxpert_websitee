import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, Plus, X } from "lucide-react";

const defaultFields = [
  { id: 1, name: "Full Name", type: "Text", required: true },
  { id: 2, name: "Email", type: "Email", required: true },
  { id: 3, name: "Contact Number", type: "Tel", required: true },
  { id: 4, name: "Total Experience (Years)", type: "Number", required: true },
  { id: 5, name: "Relevant Experience (Years)", type: "Number", required: true },
  { id: 6, name: "Current Location", type: "Text", required: true },
  { id: 7, name: "Current CTC (Annual)", type: "Text", required: false },
  { id: 8, name: "Expected CTC (Annual)", type: "Text", required: false },
  { id: 9, name: "LinkedIn Profile", type: "Text", required: false },
  { id: 10, name: "Technical Proficiency", type: "Textarea", required: false },
  { id: 11, name: "Resume", type: "File", required: true },
];

export default function ApplicationFormBuilderSection({ isExpanded, onToggle }) {
  const [fields, setFields] = useState(defaultFields);
  const [isSaved, setIsSaved] = useState(false);

  const toggleRequired = (id) => {
    setFields(fields.map(f => f.id === id ? { ...f, required: !f.required } : f));
    setIsSaved(false);
  };

  const removeField = (id) => {
    setFields(fields.filter(f => f.id !== id));
    setIsSaved(false);
  };

  const handleSave = () => setIsSaved(true);

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
            <div className="flex items-center gap-2">
              <h2 className="text-[16px] font-semibold text-slate-800">Application Form Builder</h2>
              {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
            <span className="text-[14px] font-medium text-slate-500">Configure the candidate application form</span>
          </div>
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 bg-white space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px] font-semibold text-slate-800">Application Form Fields</h3>
              <p className="text-[14px] font-medium text-slate-500">Configure fields for candidate application</p>
            </div>
            <button className="px-4 py-2 bg-[#5A73FF] hover:bg-indigo-600 text-white text-[13px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
              <Plus className="w-4 h-4" />
              Add Custom Field
            </button>
          </div>

          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-100 transition-colors">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-semibold text-slate-800">{field.name}</span>
                    {field.required && (
                      <span className="px-2 py-0.5 bg-[#FEF2F2] text-[#EF4444] text-[11px] font-medium rounded-md">
                        Required
                      </span>
                    )}
                  </div>
                  <span className="text-[13px] text-slate-400">{field.type}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => toggleRequired(field.id)}
                    className="px-4 py-1.5 border border-slate-200 text-slate-700 text-[13px] font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {field.required ? "Make Optional" : "Make Required"}
                  </button>
                  <button 
                    onClick={() => removeField(field.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
            <button 
              onClick={handleSave}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 bg-[#5A73FF] text-white hover:bg-blue-600`}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Saved
                </>
              ) : (
                "Save Section"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
