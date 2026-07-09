"use client";
import React, { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import BlogInfoSection from "./BlogInfoSection";
import HeroSection from "./HeroSection";
import ContentBuilderSection from "./ContentBuilderSection";
import { API_BASE_URL } from "../config";

export default function AdminBlogForm({ onBack, onPublish, editItem }) {
  const [form, setForm] = useState({
    blogId: editItem?.id || null,
    blogTitle: editItem?.title || "",
    slug: editItem?.excerpt || "", // assuming excerpt currently stores the slug fallback in dashboard
    category: editItem?.category || "",
    author: editItem?.author || "",
    status: editItem?.status?.toLowerCase() === "published" ? "active" : (editItem?.status?.toLowerCase() || "active"),
    publishDate: editItem?.date || "",
    badgeText: "",
    readingTime: "",
    heroTitle: "",
    shortDescription: "",
    authorName: "",
    heroBanner: null,
    authorImage: null,
  });

  const [sections, setSections] = useState([
    { id: 1, title: "Introduction", blocks: [{ id: 1, type: "text", content: "" }] },
  ]);

  React.useEffect(() => {
    if (editItem?.id) {
      const fetchExtraDetails = async () => {
        try {
          const token = localStorage.getItem("access_token");

          const slugId = editItem.excerpt || editItem.id;

          // 1. Fetch Hero Section
          let heroData = null;
          try {
            const hRes = await fetch(`${API_BASE_URL}/blogs/${slugId}/hero`, {
              headers: { ...(token && { "Authorization": `Bearer ${token}` }) }
            });
            if (hRes.ok) {
              const resData = await hRes.json();
              heroData = resData.data || resData;
            }
          } catch (e) { console.log("No hero data"); }

          // 2. Fetch Content Sections
          let sectionsData = null;
          try {
            const sRes = await fetch(`${API_BASE_URL}/blogs/${slugId}/sections`, {
              headers: { ...(token && { "Authorization": `Bearer ${token}` }) }
            });
            if (sRes.ok) {
              const resData = await sRes.json();
              sectionsData = Array.isArray(resData) ? resData : (resData.data || []);
            }
          } catch (e) { console.log("No section data"); }

          // 3. Populate state
          if (heroData && Object.keys(heroData).length > 0) {
            setForm(p => ({
              ...p,
              badgeText: heroData.badge_text || "",
              readingTime: heroData.reading_time || "",
              heroTitle: heroData.hero_title || "",
              shortDescription: heroData.short_description || "",
              authorName: heroData.author_name || "",
            }));
          }

          if (sectionsData && sectionsData.length > 0) {
            const formattedSecs = sectionsData.map((sec, idx) => ({
              id: Date.now() + idx,
              serverId: sec.id,
              title: sec.section_title || `Section ${idx + 1}`,
              blocks: (sec.description || "").split("\n\n").map((text, bidx) => ({ 
                id: Date.now() * 2 + bidx,
                type: "text",
                content: text
              }))
            }));
            setSections(formattedSecs);
          }

        } catch (e) {
          console.error("Failed to load extended blog data", e); 
        }
      };

      fetchExtraDetails();
    }
  }, [editItem]);

  const handlePublish = async () => {
    if (!form.blogId) {
      alert("Please save the Blog Information first before publishing!");
      return; 
    }

    try {
      const token = localStorage.getItem("access_token");
      const payload = new URLSearchParams();
      // Only updating the status to active to "publish" it
      payload.append("status", "active");

      const res = await fetch(`${API_BASE_URL}/blogs/${form.blogId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: payload
      });

      if (res.ok) {
        alert("Blog successfully published!");
        onPublish?.(); // This triggers fetchBlogs and closes the form in AdminDashboard
      } else {
        alert("Failed to publish blog. Please check your connection.");
      }
    } catch (error) {
      alert("Network error while trying to publish.");
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Topbar */}
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="w-px h-6 bg-slate-200" />
          <div>
            <h1 className="text-xl font-bold text-slate-800">Create New Blog</h1>
            <p className="text-xs text-slate-400">Fill in all sections and publish</p>
          </div>
        </div>
        <button
          onClick={handlePublish}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow transition-all flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Publish Blog
        </button>
      </header>

      {/* Form Sections */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <BlogInfoSection form={form} setForm={setForm} onDeleted={() => { onPublish?.(); onBack?.(); }} />
          <HeroSection form={form} setForm={setForm} />
          <ContentBuilderSection form={form} sections={sections} setSections={setSections} />
        </div>
      </div>
    </div>
  );
}
