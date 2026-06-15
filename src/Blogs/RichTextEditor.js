import React, { useState } from 'react';
import { Bold, Italic, Link, List, ListOrdered, Heading1, Heading2, Eye } from 'lucide-react';


export function RichTextEditor({ value, onChange, label }) {
  const [preview, setPreview] = useState(false);

  const toolbar = [
    { icon: Heading1, label: 'Heading 1', action: () => formatText('# ') },
    { icon: Heading2, label: 'Heading 2', action: () => formatText('## ') },
    { icon: Bold, label: 'Bold', action: () => formatText('**', '**') },
    { icon: Italic, label: 'Italic', action: () => formatText('*', '*') },
    { icon: List, label: 'Bullet List', action: () => formatText('- ') },
    { icon: ListOrdered, label: 'Numbered List', action: () => formatText('1. ') },
    { icon: Link, label: 'Link', action: () => formatText('[', '](url)') },
  ];

  const formatText = (prefix, suffix = '') => {
    const textarea = document.getElementById('editor');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + prefix + selectedText + suffix + value.substring(end);

    onChange(newText);
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-[#1e293b]">{label}</label>}

      <div className="border border-[#e2e8f0] rounded-lg bg-white overflow-hidden">
        <div className="flex items-center gap-1 p-2 border-b border-[#e2e8f0] bg-[#F8FAFC]">
          {toolbar.map((tool, idx) => (
            <button
              key={idx}
              type="button"
              onClick={tool.action}
              className="p-2 hover:bg-white rounded transition-colors"
              title={tool.label}
            >
              <tool.icon className="w-4 h-4 text-[#64748b]" />
            </button>
          ))}
          <div className="flex-1" />
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className={cn(
              'p-2 rounded transition-colors flex items-center gap-1.5',
              preview ? 'bg-[#5A73FF] text-white' : 'hover:bg-white text-[#64748b]'
            )}
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">Preview</span>
          </button>
        </div>

        {!preview ? (
          <textarea
            id="editor"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-4 min-h-[300px] focus:outline-none resize-none font-mono text-sm"
            placeholder="Write your content here... Use markdown for formatting."
          />
        ) : (
          <div className="p-4 min-h-[300px] prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }} />
          </div>
        )}
      </div>
    </div>
  );
}

function renderMarkdown(text) {
  let html = text;

  html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-semibold mb-2">$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mb-2">$1</h2>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc ml-6 mb-2">$&</ul>');
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#5A73FF] underline">$1</a>');
  html = html.replace(/\n/g, '<br/>');

  return html;
}
