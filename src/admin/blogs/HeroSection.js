import React, { useState } from "react";
import { Star } from "lucide-react";
import { Label, Input, UploadArea, SectionCard, SaveBtn } from "./SharedUI";
import { API_BASE_URL } from "../config";

export default function HeroSection({ form, setForm, onSaved }) {
  const [saved, setSaved] = useState(false);
  const [hasHero, setHasHero] = useState(false); // Track if hero exists

  const handleSave = async () => {
    if (!form.blogId) {
      alert("Please save the Blog Information first to create the blog!");
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const blogId = form.blogId;

      const formData = new FormData();
      formData.append("hero_title", form.heroTitle || "");
      formData.append("short_description", form.shortDescription || "");
      formData.append("author_name", form.authorName || "");

      if (form.heroBanner instanceof File) {
        formData.append("hero_banner", form.heroBanner);
      } else {
        formData.append("hero_banner", "");
      }

      if (form.authorImage instanceof File) {
        formData.append("author_image", form.authorImage);
      } else {
        formData.append("author_image", "");
      }

      const method = hasHero ? "PATCH" : "POST";
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}/hero`, {
        method,
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: formData
      });

      if (res.ok) {
        setHasHero(true);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        alert(`Hero section ${hasHero ? 'updated' : 'created'} successfully!`);
        onSaved?.();
      } else {
        let errorMsg = `Failed to ${hasHero ? 'update' : 'create'} hero section`;
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
    if (!hasHero) return;
    if (!confirm("Are you sure you want to delete the hero section?")) return;

    try {
      const token = localStorage.getItem("access_token");
      const blogId = form.blogId;
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}/hero`, {
        method: "DELETE",
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        setHasHero(false);
        alert("Hero section deleted successfully.");
      } else {
        alert("Failed to delete hero section.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  return (
    <SectionCard
      title="Hero Section"
      icon={Star}
      footer={
        <div className="flex gap-3">
          {hasHero && (
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
        <Label>Hero Title</Label>
        <Input
          placeholder="Designing for Scale: A Modern Approach to Product Design"
          value={form.heroTitle}
          onChange={(v) => setForm((p) => ({ ...p, heroTitle: v }))}
        />
      </div>

      <div>
        <Label>Short Description</Label>
        <textarea
          rows={3}
          value={form.shortDescription}
          onChange={(e) => setForm((p) => ({ ...p, shortDescription: e.target.value }))}
          placeholder="A brief description that hooks the reader..."
          className="w-full p-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Hero Banner</Label>
          <UploadArea
            label="Upload Banner"
            sublabel="1200×630px recommended"
            value={form.heroBanner}
            onChange={(f) => setForm((p) => ({ ...p, heroBanner: f }))}
          />
        </div>
        <div>
          <Label>Author Image</Label>
          <UploadArea
            label="Upload Author Photo"
            sublabel="80×80px recommended"
            value={form.authorImage}
            onChange={(f) => setForm((p) => ({ ...p, authorImage: f }))}
          />
        </div>
      </div>

      <div>
        <Label>Author Name</Label>
        <Input
          placeholder="Sarah Chen"
          value={form.authorName}
          onChange={(v) => setForm((p) => ({ ...p, authorName: v }))}
        />
      </div>
    </SectionCard>
  );
}
