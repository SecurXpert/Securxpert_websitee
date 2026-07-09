import React, { useState } from "react";
import { FileText } from "lucide-react";
import { Label, Input, SectionCard, SaveBtn } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function BlogInfoSection({ form, setForm, onDeleted }) {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("access_token");

      const payload = new URLSearchParams();
      payload.append("title", form.blogTitle || "");
      payload.append("slug", form.slug || ""); 
      payload.append("category", form.category || "");
      payload.append("author", form.author || "");
      payload.append("status", form.status || "active");

      const isEdit = !!form.blogId;
      const url = isEdit ? `${API_BASE_URL}/blogs/${form.blogId}` : API_BASE_URL + "/blogs/";
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
        if (!isEdit && data.id) {
          setForm(p => ({ ...p, blogId: data.id })); // Set the ID for subsequent PATCH/DELETE
        }
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        alert(`Blog ${isEdit ? 'updated' : 'created'} successfully!`);
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
      const res = await fetch(`${API_BASE_URL}/blogs/${form.blogId}`, {
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
          <Label>Category</Label>
          <Input
            placeholder="Tech"
            value={form.category}
            onChange={(v) => setForm((p) => ({ ...p, category: v }))}
          />
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
            className="w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-blue-500 transition-all"
          >
            <option value="active">Active</option>
            <option value="InActive">InActive</option>
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
