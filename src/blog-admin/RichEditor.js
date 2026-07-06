import { useState } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Link, Image, Table, Quote, Heading1, Heading2, Upload } from "lucide-react";

export function RichEditor() {
  const [content, setContent] = useState(
    "SecurXpert helps organizations proactively defend against evolving cyber threats through intelligent threat detection and real-time response capabilities. Our platform integrates seamlessly with existing security infrastructure to provide unified visibility across your entire attack surface.\n\nIn today's threat landscape, organizations face increasingly sophisticated attacks that target both technical vulnerabilities and human factors. Understanding these attack vectors is critical for building resilient security postures."
  );

  const toolbarGroups = [
    [
      { icon: Bold, label: "Bold" },
      { icon: Italic, label: "Italic" },
      { icon: Underline, label: "Underline" },
    ],
    [
      { icon: Heading1, label: "Heading 1" },
      { icon: Heading2, label: "Heading 2" },
    ],
    [
      { icon: List, label: "Bullet List" },
      { icon: ListOrdered, label: "Ordered List" },
    ],
    [
      { icon: Link, label: "Insert Link" },
      { icon: Image, label: "Insert Image" },
      { icon: Table, label: "Insert Table" },
      { icon: Quote, label: "Insert Quote" },
    ],
  ];

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-input-background focus-within:ring-2 focus-within:ring-primary/25 focus-within:border-primary transition-all">
      <div className="flex items-center gap-0.5 px-2 py-1.5 bg-card border-b border-border flex-wrap">
        {toolbarGroups.map((group, gi) => (
          <div key={gi} className="flex items-center gap-0.5">
            {gi > 0 && <div className="w-px h-4 bg-border mx-1" />}
            {group.map(({ icon: Icon, label }) => (
              <button
                key={label}
                title={label}
                className="p-1.5 rounded hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        ))}
        <div className="ml-auto flex items-center gap-1">
          <label className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-primary border border-primary/30 bg-primary/5 rounded-md cursor-pointer hover:bg-primary/10 transition-colors font-medium">
            <Upload className="w-3 h-3" />
            Upload Image
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={16}
        className="w-full px-4 py-3.5 text-sm text-foreground bg-transparent outline-none resize-none leading-relaxed"
      />
      <div className="px-4 py-2 border-t border-border bg-card/50 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{content.split(/\s+/).filter(Boolean).length} words</span>
        <span className="text-xs text-muted-foreground">{content.length} characters</span>
      </div>
    </div>
  );
}
