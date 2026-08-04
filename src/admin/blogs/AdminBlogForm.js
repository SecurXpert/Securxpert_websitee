"use client";
import React, { useState, useEffect } from "react";
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
    status: editItem?.status?.toLowerCase() === "published" ? "active" : (editItem?.status?.toLowerCase() || "in_active"),
    publishDate: editItem?.date || "",
    heroTitle: "",
    shortDescription: "",
    authorName: "",
    heroBanner: null,
    authorImage: null,
  });

  const [sections, setSections] = useState([
    { id: 1, title: "Introduction", imagePosition: "full_width", imageUrl: "", imageFile: null, imageAltText: "", imageCaption: "", blocks: [{ id: 1, type: "text", content: "" }] },
  ]);

  const hasFetched = React.useRef(false);

  React.useEffect(() => {
    if (editItem?.id && !hasFetched.current) {
      hasFetched.current = true;
      const fetchExtraDetails = async () => {
        try {
          const token = localStorage.getItem("access_token");

          const blogId = editItem.id;

          // 1. Fetch Hero Section
          let heroData = null;
          try {
            const hRes = await fetch(`${API_BASE_URL}blogs/${blogId}/hero`, {
              headers: {
                "ngrok-skip-browser-warning": "true",
                ...(token && { "Authorization": `Bearer ${token}` })
              }
            });
            if (hRes.ok) {
              const resData = await hRes.json();
              heroData = resData.data || resData;
            }
          } catch (e) { console.log("No hero data"); }

          // 2. Fetch Content Sections
          let sectionsData = [];
          try {
            // The backend provides a /blogs/{blogId}/all endpoint which returns the full blog including its sections!
            const bRes = await fetch(`${API_BASE_URL}blogs/${blogId}/all`, {
              headers: {
                "ngrok-skip-browser-warning": "true",
                ...(token && { "Authorization": `Bearer ${token}` })
              }
            });

            if (bRes.ok) {
              const fullBlog = await bRes.json();
              const blogData = fullBlog.data || fullBlog;

              const possibleKeys = ['sections', 'content_sections', 'content'];
              for (const key of possibleKeys) {
                if (blogData[key] && Array.isArray(blogData[key])) {
                  if (blogData[key].length > 0 && typeof blogData[key][0] === 'object') {
                    sectionsData = blogData[key];
                    break;
                  }
                }
              }
            }
          } catch (e) { console.log("No section data", e); }

          // 3. Populate state
          const hData = Array.isArray(heroData) ? heroData[0] : (heroData?.data || heroData);
          if (hData && Object.keys(hData).length > 0) {
            setForm(p => ({
              ...p,
              heroTitle: hData.hero_title || "",
              shortDescription: hData.short_description || "",
              authorName: hData.author_name || "",
              heroBanner: hData.hero_banner || null,
              authorImage: hData.author_image || null,
            }));
          }

          const sData = Array.isArray(sectionsData) ? sectionsData : (sectionsData?.data || []);
          if (sData && sData.length > 0) {
            const formattedSecs = sData.map((sec, idx) => ({
              id: Date.now() + idx,
              serverId: sec.id,
              title: sec.section_title || `Section ${idx + 1}`,
              imagePosition: sec.image_position || "full_width",
              imageUrl: sec.section_image_url || sec.section_image || "",
              imageFile: null,
              imageAltText: sec.image_alt_text || "",
              imageCaption: sec.image_caption || "",
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
      payload.append("title", form.blogTitle || "");
      payload.append("slug", form.slug || "");
      payload.append("category", form.category || "");
      payload.append("author", form.author || "");
      payload.append("status", "active");

      const blogId = form.blogId;
      const res = await fetch(`${API_BASE_URL}blogs/${blogId}`, {
        method: "PATCH",
        headers: {
          "ngrok-skip-browser-warning": "true",
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

  const [isBlogInfoSaved, setIsBlogInfoSaved] = useState(!!editItem);
  const [isHeroSaved, setIsHeroSaved] = useState(!!editItem);
  const [isContentSaved, setIsContentSaved] = useState(!!editItem);

  useEffect(() => {
    if (editItem) {
      setIsBlogInfoSaved(true);
      setIsHeroSaved(true);
      setIsContentSaved(true);
    }
  }, [editItem]);

  const handlePublishClick = async () => {
    if (!form.blogId) {
      alert("Please save the Blog Information first!");
      return;
    }
    if (!isHeroSaved) {
      alert("Please save the Hero Section before publishing.");
      return;
    }
    if (!isContentSaved) {
      alert("Please save the Content Section before publishing.");
      return;
    }
    await handlePublish();
  };

  const isPublishEnabled = (isBlogInfoSaved && isHeroSaved && isContentSaved) || !!editItem;

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
            <h1 className="text-xl font-bold text-slate-800">{editItem ? "Edit Blog" : "Create New Blog"}</h1>
            <p className="text-xs text-slate-400">Step {isContentSaved ? "3" : isHeroSaved ? "3" : isBlogInfoSaved ? "2" : "1"} of 3</p>
          </div>
        </div>
        <button
          onClick={handlePublishClick}
          disabled={!isPublishEnabled}
          className={`px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow transition-all flex items-center gap-2 ${isPublishEnabled ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed opacity-70"}`}
        >
          <Save className="w-4 h-4" /> Publish Blog
        </button>
      </header>

      {/* Form Sections */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <BlogInfoSection
            form={form}
            setForm={setForm}
            onSaved={() => setIsBlogInfoSaved(true)}
            onDeleted={() => { onPublish?.(); onBack?.(); }}
          />

          <HeroSection
            form={form}
            setForm={setForm}
            onSaved={() => setIsHeroSaved(true)}
          />

          <ContentBuilderSection
            form={form}
            sections={sections}
            setSections={setSections}
            onSaved={() => setIsContentSaved(true)}
          />
        </div>
      </div>
    </div>
  );
}
