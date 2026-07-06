import { useState, useRef } from "react";
import { Save, Upload, ChevronDown, Tag, X } from "lucide-react";

export function Card({ title, children, className = "", onSave }) {
  return (
    <div className={`bg-card rounded-xl border border-border shadow-sm flex flex-col ${className}`}>
      <div className="px-5 py-4 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground tracking-tight">{title}</h3>
      </div>
      <div className="p-5 flex-1">{children}</div>
      <div className="px-5 py-3 border-t border-border bg-muted/10 flex justify-end">
        <button 
          onClick={onSave}
          className="flex items-center gap-1.5 px-4 h-8 text-xs font-medium text-foreground bg-white border border-border rounded-lg hover:bg-muted/50 transition-colors shadow-sm"
        >
          <Save className="w-3.5 h-3.5" />
          Save Section
        </button>
      </div>
    </div>
  );
}

export function Label({ children, required }) {
  return (
    <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">
      {children}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </label>
  );
}

export function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full h-9 px-3 text-sm bg-input-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
    />
  );
}

export function Textarea({ placeholder, value, onChange, rows = 3 }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full px-3 py-2.5 text-sm bg-input-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all resize-none"
    />
  );
}

export function Select({ options, value, onChange, placeholder }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-9 pl-3 pr-8 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary appearance-none transition-all"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
    </div>
  );
}

export function UploadZone({ label, icon: Icon = Upload }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) setFile(f.name);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`relative flex flex-col items-center justify-center gap-2 h-24 border-2 border-dashed rounded-lg cursor-pointer transition-all
        ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 hover:bg-muted/50"}`}
    >
      <input ref={inputRef} type="file" className="hidden" onChange={(e) => {
        const f = e.target.files?.[0];
        if (f) setFile(f.name);
      }} />
      {file ? (
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <Icon className="w-4 h-4" />
          <span className="truncate max-w-[180px]">{file}</span>
        </div>
      ) : (
        <>
          <Icon className="w-5 h-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground text-center px-3">{label}</span>
        </>
      )}
    </div>
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground/80">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30
          ${checked ? "bg-primary" : "bg-switch-background"}`}
      >
        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`} />
      </button>
    </div>
  );
}

export function TagInput({ tags, onChange }) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-wrap gap-1.5 p-2 min-h-[38px] bg-input-background border border-border rounded-lg focus-within:ring-2 focus-within:ring-primary/25 focus-within:border-primary transition-all">
      {tags.map((tag) => (
        <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-md">
          <Tag className="w-2.5 h-2.5" />
          {tag}
          <button onClick={() => onChange(tags.filter((t) => t !== tag))} className="hover:text-destructive transition-colors ml-0.5">
            <X className="w-2.5 h-2.5" />
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); } }}
        placeholder={tags.length === 0 ? "Add tags, press Enter" : ""}
        className="flex-1 min-w-[120px] text-xs bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
      />
    </div>
  );
}
