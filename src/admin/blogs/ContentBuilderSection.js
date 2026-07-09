import React, { useState } from "react";
import { Layout, Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { SectionCard, SaveBtn } from "./SharedUI";
import { API_BASE_URL } from "../config";

let blockIdCounter = 100;

export default function ContentBuilderSection({ form, sections, setSections }) {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    if (!form?.slug) {
      alert("Please enter a Blog Title to generate a slug first!");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const blogId = form.slug;

      const updatedSections = [...sections];

      for (let i = 0; i < updatedSections.length; i++) {
        const sec = updatedSections[i];

        const formData = new FormData();
        formData.append("order_index", i.toString());
        formData.append("section_title", sec.title || "Untitled Section");
        formData.append("image_alt_text", "");

        const desc = sec.blocks.map(b => b.content).join("\n\n");
        formData.append("description", desc);

        formData.append("image_caption", "");
        formData.append("image_position", "full_width");
        formData.append("section_image", "");

        const isEdit = !!sec.serverId;
        const method = isEdit ? "PATCH" : "POST";
        const url = isEdit
          ? `${API_BASE_URL}/blogs/${blogId}/sections/${sec.serverId}`
          : `${API_BASE_URL}/blogs/${blogId}/sections`;

        const res = await fetch(url, {
          method,
          headers: {
            ...(token && { "Authorization": `Bearer ${token}` })
          },
          body: formData
        });

        if (!res.ok) {
          let errorMsg = `Failed to ${isEdit ? 'update' : 'create'} section "${sec.title}"`;
          try {
            const errorData = await res.json();
            if (Array.isArray(errorData.detail)) {
              errorMsg = errorData.detail.map(e => `${e.loc.join('.')}: ${e.msg}`).join(', ');
            } else {
              errorMsg = errorData.detail || errorMsg;
            }
          } catch (e) { }
          alert(`Error: ${errorMsg}`);
          return;
        } else {
          // If created, save the new serverId to state
          if (!isEdit) {
            const data = await res.json();
            if (data && data.id) {
              updatedSections[i] = { ...sec, serverId: data.id };
            }
          }
        }
      }

      setSections(updatedSections);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      alert("Sections saved successfully!");
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  const addSection = () =>
    setSections((p) => [
      ...p,
      {
        id: Date.now(),
        title: "New Section",
        blocks: [{ id: ++blockIdCounter, type: "text", content: "" }],
      },
    ]);

  const removeSection = async (id) => {
    const sec = sections.find(s => s.id === id);
    if (sec && sec.serverId) {
      if (!confirm("Are you sure you want to delete this section from the server?")) return;
      try {
        const token = localStorage.getItem("access_token");
        const blogId = form?.slug;
        const res = await fetch(`${API_BASE_URL}/blogs/${blogId}/sections/${sec.serverId}`, {
          method: "DELETE",
          headers: {
            ...(token && { "Authorization": `Bearer ${token}` })
          }
        });
        if (!res.ok) {
          alert("Failed to delete section from server.");
          return;
        }
      } catch (err) {
        alert("Network error.");
        return;
      }
    }
    setSections((p) => p.filter((s) => s.id !== id));
  };

  const moveSection = (idx, dir) => {
    const copy = [...sections];
    const target = idx + dir;
    if (target < 0 || target >= copy.length) return;
    [copy[idx], copy[target]] = [copy[target], copy[idx]];
    setSections(copy);
  };

  const updateSectionTitle = (id, t) =>
    setSections((p) => p.map((s) => (s.id === id ? { ...s, title: t } : s)));

  const addBlock = (sid) =>
    setSections((p) =>
      p.map((s) =>
        s.id === sid
          ? { ...s, blocks: [...s.blocks, { id: ++blockIdCounter, type: "text", content: "" }] }
          : s
      )
    );

  const removeBlock = (sid, bid) =>
    setSections((p) =>
      p.map((s) =>
        s.id === sid ? { ...s, blocks: s.blocks.filter((b) => b.id !== bid) } : s
      )
    );

  const updateBlock = (sid, bid, val) =>
    setSections((p) =>
      p.map((s) =>
        s.id === sid
          ? { ...s, blocks: s.blocks.map((b) => (b.id === bid ? { ...b, content: val } : b)) }
          : s
      )
    );

  return (
    <SectionCard
      title="Content Builder"
      icon={Layout}
      footer={<SaveBtn onClick={handleSave} saved={saved} />}
    >
      <div className="space-y-6">
        {sections.map((sec, idx) => (
          <div key={sec.id} className="border border-slate-200 rounded-xl overflow-hidden">
            {/* Section Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-100">
              <input
                value={sec.title}
                onChange={(e) => updateSectionTitle(sec.id, e.target.value)}
                className="flex-1 text-sm font-bold bg-transparent text-slate-800 focus:outline-none"
              />
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveSection(idx, -1)}
                  disabled={idx === 0}
                  className="p-1.5 text-slate-400 hover:text-slate-600 disabled:opacity-30 transition-colors"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => moveSection(idx, 1)}
                  disabled={idx === sections.length - 1}
                  className="p-1.5 text-slate-400 hover:text-slate-600 disabled:opacity-30 transition-colors"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => removeSection(sec.id)}
                  className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Blocks */}
            <div className="p-4 space-y-3">
              {sec.blocks.map((block) => (
                <div key={block.id} className="flex gap-2 items-start">
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(sec.id, block.id, e.target.value)}
                    rows={3}
                    placeholder="Type content here..."
                    className="flex-1 p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  />
                  <button
                    onClick={() => removeBlock(sec.id, block.id)}
                    className="mt-1 p-1.5 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addBlock(sec.id)}
                className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mt-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add Block
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addSection}
          className="w-full py-3 border-2 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 rounded-xl text-sm font-bold text-slate-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Section
        </button>
      </div>
    </SectionCard>
  );
}
