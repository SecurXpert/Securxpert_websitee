import React, { useState } from "react";
import { FileText } from "lucide-react";
import { Label, Input, SectionCard, SaveBtn } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function BlogInfoSection({ form, setForm, onDeleted, onSaved }) {
  const [saved, setSaved] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  const categories = Array.isArray(form.category) 
    ? form.category 
    : (typeof form.category === 'string' && form.category.trim() !== "" 
        ? form.category.split(',').map(c => c.trim()).filter(Boolean) 
        : []);

  const handleAddCategory = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = categoryInput.trim();
      if (val && !categories.includes(val)) {
        if (categories.length >= 4) {
          alert("You can only add up to 4 categories.");
          return;
        }
        setForm(p => ({ ...p, category: [...categories, val].join(', ') }));
      }
      setCategoryInput("");
    }
  };

  const handleRemoveCategory = (catToRemove) => {
    const newCats = categories.filter(c => c !== catToRemove);
    setForm(p => ({ ...p, category: newCats.join(', ') }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const payload = new URLSearchParams();
      payload.append("title", form.blogTitle || "");
      payload.append("slug", form.slug || "");
      payload.append("category", form.category || "");
      payload.append("author", form.author || "");
      payload.append("status", form.status === "in_active" ? "in_active" : (form.status || "active"));

      const isEdit = !!form.blogId;
      const url = isEdit ? `${API_BASE_URL}blogs/${form.blogId}` : API_BASE_URL + "blogs/";
      const method = isEdit ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: payload
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Blog creation response:", data);
        const newId = data.id || data?.data?.id || data?.blog_id;
        if (!isEdit && newId) {
          setForm(p => ({ ...p, blogId: newId })); // Set the ID for subsequent PATCH/DELETE
        }
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        alert(`Blog ${isEdit ? 'updated' : 'created'} successfully!`);
        onSaved?.();
      } else {
        let errorMsg = `Failed to ${isEdit ? 'update' : 'create'} blog`;
        try {
          const errorData = await res.json();
          if (Array.isArray(errorData.detail)) {
            errorMsg = errorData.detail.map(e => `${e.loc.join('.')}: ${e.msg}`).join(', ');
          } else {
            errorMsg = errorData.detail || errorMsg;
          }
        } catch (e) { }
        alert(`Error: ${errorMsg}`);
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  const handleDelete = async () => {
    if (!form.blogId) return;
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}blogs/${form.blogId}`, {
        method: "DELETE",
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        alert("Blog deleted successfully.");
        onDeleted?.();
      } else {
        alert("Failed to delete blog.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <SectionCard
      title="Blog Information"
      icon={FileText}
      footer={
        <div className="flex gap-3">
          {form.blogId && (
            <button
              onClick={handleDelete}
              className="px-4 py-2 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-bold transition-all"
            >
              Delete
            </button>
          )}
          <SaveBtn onClick={handleSave} saved={saved} />
        </div>
      }
    >
      <div>
        <Label>Blog Title</Label>
        <Input
          placeholder="Designing for Scale: A Modern Approach"
          value={form.blogTitle}
          onChange={(v) => setForm((p) => ({ ...p, blogTitle: v, slug: slugify(v) }))}
        />
      </div>

      <div>
        <Label>Slug</Label>
        <Input placeholder="auto-generated" value={form.slug} readOnly />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Category (Max 4)</Label>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Type category & hit Enter (e.g., Services, Software)"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              onKeyDown={handleAddCategory}
              className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-[13px] font-medium rounded-full"
                  >
                    {cat}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(cat)}
                      className="hover:text-red-600 focus:outline-none ml-1 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <Label>Author</Label>
          <Input
            placeholder="Sarah Chen"
            value={form.author}
            onChange={(v) => setForm((p) => ({ ...p, author: v }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Status</Label>
          <select
            value={form.status}
            onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
            className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-blue-500 transition-all disabled:opacity-60"
            disabled={form.status === "in_active"}
          >
            {form.status === "in_active" && <option value="in_active">Draft (Unpublished)</option>}
            <option value="active">Active</option>
            <option value="in_active">InActive</option>
          </select>
        </div>
        <div>
          <Label>Publish Date</Label>
          <Input
            placeholder="YYYY-MM-DD"
            value={form.publishDate}
            onChange={(v) => setForm((p) => ({ ...p, publishDate: v }))}
          />
        </div>
      </div>
    </SectionCard>
  );
}
