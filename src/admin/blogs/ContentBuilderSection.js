import React, { useState } from "react";
import { Layout, Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { SectionCard, SaveBtn } from "./SharedUI";
import { API_BASE_URL } from "../config";

let blockIdCounter = 100;

export default function ContentBuilderSection({ form, sections, setSections, onSaved }) {
  const [saved, setSaved] = useState(false);

  const updateSectionImageFile = (id, file) => {
    setSections((p) =>
      p.map((s) => (s.id === id ? { ...s, imageFile: file, imageUrl: "" } : s))
    );
  };

  const updateSectionImagePosition = (id, pos) => {
    setSections((p) =>
      p.map((s) => (s.id === id ? { ...s, imagePosition: pos } : s))
    );
  };

  const updateSectionImageAltText = (id, text) => {
    setSections((p) =>
      p.map((s) => (s.id === id ? { ...s, imageAltText: text } : s))
    );
  };

  const updateSectionImageCaption = (id, text) => {
    setSections((p) =>
      p.map((s) => (s.id === id ? { ...s, imageCaption: text } : s))
    );
  };

  const removeSectionImage = (id) => {
    setSections((p) =>
      p.map((s) => (s.id === id ? { ...s, imageFile: null, imageUrl: "", imageAltText: "", imageCaption: "" } : s))
    );
  };

  const handleSave = async () => {
    if (!form?.blogId) {
      alert("Please save the Blog Information first to create the blog!");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const blogId = form.blogId;

      const updatedSections = [...sections];

      for (let i = 0; i < updatedSections.length; i++) {
        const sec = updatedSections[i];

        const formData = new FormData();
        formData.append("order_index", i.toString());
        formData.append("section_title", sec.title || "Untitled Section");
        formData.append("image_alt_text", sec.imageAltText || "");

        const desc = sec.blocks.map(b => b.content).join("\n\n");
        formData.append("description", desc);

        formData.append("image_caption", sec.imageCaption || "");
        formData.append("image_position", sec.imagePosition || "full_width");

        if (sec.imageFile) {
          formData.append("section_image", sec.imageFile);
        } else if (sec.imageUrl === "") {
          formData.append("section_image", "");
        } else if (!sec.serverId) {
          formData.append("section_image", "");
        }

        const isEdit = !!sec.serverId;
        const method = isEdit ? "PATCH" : "POST";
        const url = isEdit
          ? `${API_BASE_URL}blogs/sections/${sec.serverId}`
          : `${API_BASE_URL}blogs/${blogId}/sections`;

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
      onSaved?.();
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
        imagePosition: "full_width",
        imageUrl: "",
        imageFile: null,
        imageAltText: "",
        imageCaption: "",
        blocks: [{ id: ++blockIdCounter, type: "text", content: "" }],
      },
    ]);

  const removeSection = async (id) => {
    const sec = sections.find(s => s.id === id);
    if (sec && sec.serverId) {
      if (!confirm("Are you sure you want to delete this section from the server?")) return;
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch(`${API_BASE_URL}blogs/sections/${sec.serverId}`, {
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

            {/* Optional Image and Position Configuration */}
            <div className="px-4 py-3 bg-slate-50/50 border-b border-slate-100 flex flex-col gap-3 text-xs font-semibold text-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">Image:</span>
                  {sec.imageUrl && (
                    <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                      <img
                        src={sec.imageUrl.startsWith("http") ? sec.imageUrl : `${API_BASE_URL}${sec.imageUrl}`}
                        alt="Current"
                        className="w-6 h-6 object-cover rounded"
                      />
                      <span className="text-[10px] text-slate-500">Current</span>
                    </div>
                  )}
                  {sec.imageFile && (
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">
                      <span className="text-[10px] font-bold">New: {sec.imageFile.name}</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) updateSectionImageFile(sec.id, file);
                    }}
                    className="max-w-[180px] text-[10px] text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                  />
                  {(sec.imageUrl || sec.imageFile) && (
                    <button
                      onClick={() => removeSectionImage(sec.id)}
                      className="text-red-500 hover:text-red-700 text-[10px] font-bold"
                    >
                      Remove Image
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Alignment:</span>
                  <select
                    value={sec.imagePosition || "full_width"}
                    onChange={(e) => updateSectionImagePosition(sec.id, e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-none focus:border-blue-500 font-medium"
                  >
                    <option value="left">Left</option>
                    <option value="full_width">Middle / Full Width</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </div>

              {(sec.imageUrl || sec.imageFile) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-[10px] uppercase">Image Alt Text</span>
                    <input
                      type="text"
                      placeholder="e.g. Description of image for SEO"
                      value={sec.imageAltText || ""}
                      onChange={(e) => updateSectionImageAltText(sec.id, e.target.value)}
                      className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500 text-xs font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-[10px] uppercase">Image Caption</span>
                    <input
                      type="text"
                      placeholder="e.g. Figure 1: Illustration"
                      value={sec.imageCaption || ""}
                      onChange={(e) => updateSectionImageCaption(sec.id, e.target.value)}
                      className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500 text-xs font-normal"
                    />
                  </div>
                </div>
              )}
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
