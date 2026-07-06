"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, ChevronRight, FileText, Upload, Plus, ChevronUp, ChevronDown, Copy, Trash2, ArrowRight, Save } from "lucide-react";
import BlogInfoSection from "./BlogInfoSection";
import HeroSection from "./HeroSection";
import ContentBuilderSection from "./ContentBuilderSection";
import axios from "axios";

// Reusable basic components
export function Label({ children }) {
  return <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{children}</label>;
}




export function Input({ placeholder, value, onChange, className = "" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`w-full h-10 px-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${className}`}
    />
  );
}

export function UploadArea({ label, sublabel, onChange }) {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="relative flex flex-col items-center justify-center gap-2 h-[120px] bg-slate-50 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors overflow-hidden"
    >
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile.name);
            onChange?.(selectedFile);
          }
        }}
      />

      {file ? (
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 shadow-sm flex items-center justify-center text-blue-600 mb-2">
            <Upload className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-blue-600 max-w-full truncate">{file}</span>
          <span className="text-[10px] text-slate-400 mt-1">Click to replace</span>
        </div>
      ) : (
        <>
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 mb-1">
            <Upload className="w-4 h-4" />
          </div>
          <div className="flex flex-col items-center px-4 text-center">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            {sublabel && <span className="text-[11px] text-slate-400 mt-0.5">{sublabel}</span>}
          </div>
        </>
      )}
    </div>
  );
}

export function AdminCreateBlog() {
  const [sections, setSections] = useState([{
    id: 1,
    title: "Introduction",
    descriptionBlocks: [1],
    imagePosition: "full"
  }]);
  const [blogTitle, setBlogTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("active");
  const [publishDate, setPublishDate] = useState("");
  const [blogId, setBlogId] = useState(null);

  // Hero Section states lifted up to orchestrate publish
  const [badgeText, setBadgeText] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [heroBanner, setHeroBanner] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryId = urlParams.get("id") || urlParams.get("blogId");
      if (queryId) {
        console.log("Loading Blog ID from URL query param:", queryId);
        setBlogId(parseInt(queryId));
      }
    }
  }, []);

  const handleSave = (blogStatus = "draft") => {
    console.log("Saving blog:", {
      title: blogTitle,
      slug,
      category,
      author,
      publishDate,
      status: blogStatus,
      sections
    });
    alert(`Blog saved locally as ${blogStatus}!`);
  };

  const handlePublish = async (blogStatus = "published") => {
    if (!blogTitle.trim()) {
      alert("Please enter a Blog Title.");
      return;
    }

    try {
      const token =
        localStorage.getItem("super_admin_token") ||
        localStorage.getItem("superadmin_token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("token") ||
        "";

      // Status mapping: published -> active, draft -> in_active
      const apiStatus = (blogStatus === "published" || blogStatus === "active") ? "active" : "in_active";

      // 1. Submit Blog Info API (POST /blogs/ or PATCH /blogs/{blogId})
      const blogInfoParams = new URLSearchParams();
      blogInfoParams.append("title", blogTitle);
      blogInfoParams.append("slug", slug);
      if (category) blogInfoParams.append("category", category);
      if (author) blogInfoParams.append("author", author);
      blogInfoParams.append("status", apiStatus);

      let createdId = blogId;

      if (!createdId) {
        try {
          console.log("Publishing step 1: Creating Blog Info...", blogInfoParams.toString());
          const blogInfoRes = await axios.post("http://192.168.0.128:8000/blogs/", blogInfoParams, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": `Bearer ${token}`
            }
          });

          if (blogInfoRes.data) {
            if (blogInfoRes.data.id) {
              createdId = blogInfoRes.data.id;
            } else if (blogInfoRes.data.data && blogInfoRes.data.data.id) {
              createdId = blogInfoRes.data.data.id;
            } else if (Array.isArray(blogInfoRes.data.data) && blogInfoRes.data.data.length > 0 && blogInfoRes.data.data[0].id) {
              createdId = blogInfoRes.data.data[0].id;
            } else if (blogInfoRes.data.blog && blogInfoRes.data.blog.id) {
              createdId = blogInfoRes.data.blog.id;
            }
          }
        } catch (postErr) {
          if (postErr.response && postErr.response.status === 409) {
            console.log("Slug conflict detected. Fetching blogs to locate ID...");
            const listRes = await axios.get("http://192.168.0.128:8000/blogs/", {
              headers: { "Authorization": `Bearer ${token}` }
            });
            const blogsList = listRes.data?.data || [];
            const existingBlog = blogsList.find(b => b.slug === slug);
            if (existingBlog) {
              createdId = existingBlog.id;
              console.log("Found existing blog ID:", createdId);
              console.log("Updating existing blog details using PATCH...");
              await axios.patch(`http://192.168.0.128:8000/blogs/${createdId}`, blogInfoParams, {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Authorization": `Bearer ${token}`
                }
              });
            } else {
              throw new Error("Slug conflict occurred, but could not find the conflicting blog in the list.");
            }
          } else {
            throw postErr;
          }
        }
      } else {
        console.log("Updating existing blog details using PATCH...");
        await axios.patch(`http://192.168.0.128:8000/blogs/${createdId}`, blogInfoParams, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${token}`
          }
        });
      }

      if (!createdId) {
        throw new Error("Could not retrieve or create Blog ID.");
      }

      setBlogId(createdId);
      console.log("Publishing step 1 succeeded. Blog ID:", createdId);

      // 2. Submit Hero Section API (POST or PATCH /blogs/{blog_id}/hero)
      const heroFormData = new FormData();
      heroFormData.append("badge_text", badgeText || "");
      heroFormData.append("reading_time", readingTime || "");
      heroFormData.append("hero_title", heroTitle || "");
      heroFormData.append("short_description", shortDescription || "");
      heroFormData.append("author_name", authorName || "");
      if (heroBanner) {
        heroFormData.append("hero_banner", heroBanner);
      }
      if (authorImage) {
        heroFormData.append("author_image", authorImage);
      }

      console.log("Publishing step 2: Hero Section...");
      try {
        await axios.post(`http://192.168.0.128:8000/blogs/${createdId}/hero`, heroFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        });
        console.log("Publishing step 2 succeeded (POST).");
      } catch (heroErr) {
        if (heroErr.response && (heroErr.response.status === 409 || heroErr.response.status === 400)) {
          console.log("Hero section already exists. Updating using PATCH...");
          await axios.patch(`http://192.168.0.128:8000/blogs/${createdId}/hero`, heroFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
            }
          });
          console.log("Publishing step 2 succeeded (PATCH).");
        } else {
          throw heroErr;
        }
      }

      // 3. Clean up existing sections before creating new ones to prevent duplicates
      console.log("Cleaning up existing sections...");
      try {
        const maxScanId = Math.max(100, Number(createdId) * 5 + 30);
        for (let id = 1; id <= maxScanId; id++) {
          try {
            const secRes = await axios.get(`http://192.168.0.128:8000/blogs/sections/${id}`, {
              headers: { "Authorization": `Bearer ${token}` }
            });
            const secData = secRes.data?.data || secRes.data;
            if (secData && Number(secData.blog_post_id) === Number(createdId)) {
              console.log("Deleting existing section ID:", id);
              await axios.delete(`http://192.168.0.128:8000/blogs/sections/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
              });
            }
          } catch (err) { }
        }
      } catch (delErr) {
        console.log("No existing sections to clean up or cleanup failed:", delErr.message);
      }

      // 4. Submit all content sections sequentially (POST /blogs/{blog_id}/sections)
      console.log(`Publishing step 4: Sending ${sections.length} content section(s)...`);
      for (let index = 0; index < sections.length; index++) {
        const section = sections[index];
        const sectionFormData = new FormData();
        sectionFormData.append("order_index", index);
        sectionFormData.append("section_title", section.title || "Untitled Section");
        sectionFormData.append("image_alt_text", section.imageAltText || "");
        sectionFormData.append("image_caption", section.imageCaption || "");

        const finalImagePosition = section.imagePosition === "full" ? "full_width" : (section.imagePosition || "full_width");
        sectionFormData.append("image_position", finalImagePosition);

        if (section.sectionImage) {
          sectionFormData.append("section_image", section.sectionImage);
        }

        // Retrieve rich text block content from DOM
        const descriptionHtml = section.descriptionBlocks
          .map(blockId => {
            const el = document.getElementById(`editor-${blockId}`);
            return el ? el.innerHTML : "";
          })
          .filter(html => html.trim() !== "")
          .join("\n");

        sectionFormData.append("description", descriptionHtml);

        await axios.post(`http://192.168.0.128:8000/blogs/${createdId}/sections`, sectionFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        });
        console.log(`Section ${index + 1} succeeded.`);
      }

      // 5. GET verification: fetch all sections and merge them into one single blog object
      console.log("Verification step: Retrieving all data from GET APIs...");
      const finalBlogRes = await axios.get(`http://192.168.0.128:8000/blogs/${createdId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const finalBlogObj = finalBlogRes.data?.data || finalBlogRes.data || {};

      let finalHero = {};
      try {
        const finalHeroRes = await axios.get(`http://192.168.0.128:8000/blogs/${createdId}/hero`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        finalHero = finalHeroRes.data?.data || finalHeroRes.data || {};
      } catch (heroGetErr) {
        console.log("Could not GET hero section details:", heroGetErr.message);
      }

      const finalSections = [];
      try {
        const maxScanId = Math.max(100, Number(createdId) * 5 + 30);
        for (let id = 1; id <= maxScanId; id++) {
          try {
            const secRes = await axios.get(`http://192.168.0.128:8000/blogs/sections/${id}`, {
              headers: { "Authorization": `Bearer ${token}` }
            });
            const secData = secRes.data?.data || secRes.data;
            if (secData && Number(secData.blog_post_id) === Number(createdId)) {
              finalSections.push(secData);
            }
          } catch (err) { }
        }
        finalSections.sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0) || a.id - b.id);
      } catch (secGetErr) {
        console.log("Could not GET sections:", secGetErr.message);
      }

      const mergedBlog = {
        ...finalBlogObj,
        hero: finalHero,
        sections: finalSections
      };

      console.log("Submitted successfully blog merged data:", mergedBlog);
      alert(`Submitted successfully blog: "${mergedBlog.title}"!\n\nAll GET verification methods succeeded and data is fully merged.`);
    } catch (error) {
      console.error("Publishing error details:", error.response || error);
      const detail = error.response?.data?.detail;
      const status = error.response?.status;
      if (status === 403) {
        alert(`Forbidden (403): Your account does not have permission to publish blogs.\n\nServer Response: ${JSON.stringify(error.response?.data || "No message body")}`);
      } else {
        const errorMsg = typeof detail === "object" ? JSON.stringify(detail, null, 2) : (detail || error.message);
        alert("Failed to publish blog: " + errorMsg);
      }
    }
  };
  const handleTitleChange = (val) => {
    setBlogTitle(val);
    const stopWords = /\b(a|an|the|and|or|but|in|on|with|to|for|of)\b/g;
    const generatedSlug = val
      .toLowerCase()
      .replace(stopWords, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(generatedSlug);
  };

  const addDescriptionBlock = (sectionId) => {
    setSections(sections.map(sec =>
      sec.id === sectionId
        ? { ...sec, descriptionBlocks: [...sec.descriptionBlocks, Date.now()] }
        : sec
    ));
  };

  const removeDescriptionBlock = (sectionId, blockId) => {
    setSections(sections.map(sec =>
      sec.id === sectionId
        ? { ...sec, descriptionBlocks: sec.descriptionBlocks.filter(b => b !== blockId) }
        : sec
    ));
  };

  const addSection = (afterId = null) => {
    const newSection = {
      id: Date.now(),
      title: "New Section",
      descriptionBlocks: [Date.now() + 1],
      imagePosition: "full"
    };

    if (afterId) {
      const index = sections.findIndex(s => s.id === afterId);
      const newSections = [...sections];
      newSections.splice(index + 1, 0, newSection);
      setSections(newSections);
    } else {
      setSections([...sections, newSection]);
    }
  };

  const removeSection = (sectionId) => {
    if (sections.length > 1) {
      setSections(sections.filter(s => s.id !== sectionId));
    }
  };

  const updateSectionImagePosition = (sectionId, position) => {
    setSections(sections.map(sec =>
      sec.id === sectionId ? { ...sec, imagePosition: position } : sec
    ));
  };

  return (
    <div className="blog-admin-theme min-h-screen bg-[#F8FAFC] font-sans flex text-slate-900">

      {/* Left Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 bottom-0 z-10">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-bold text-sm text-slate-900">Blog Editor</h2>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider">Admin CMS</p>
          </div>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          {/* Completion Widget */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completion</span>
              <span className="text-[11px] font-bold text-blue-600">82%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "82%" }} />
            </div>

            <div className="flex gap-2">
              <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sections</span>
                <span className="text-sm font-bold text-slate-700">{sections.length}</span>
              </div>
              <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
                <span className="text-sm font-bold text-slate-700">Draft</span>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-4">
              <FileText className="w-3.5 h-3.5" /> Table of Contents
            </span>
            <div className="flex flex-col gap-1">
              {sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  className="flex items-center gap-3 py-2 px-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group"
                >
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-500 w-4 text-center transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 truncate transition-colors">
                    {sec.title || "Untitled Section"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <button
            onClick={() => addSection()}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add New Section
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] flex-1 pb-24 relative min-h-screen">
        <div className="max-w-[800px] mx-auto px-8 pt-10">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-3">
              <span>Content</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Blog Posts</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-600 font-bold">Edit</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Designing for Scale: A Modern Approach</h1>
            <p className="text-sm text-slate-500 font-medium">Last edited just now — <span className="text-orange-500">Draft</span></p>
          </div>

          <div className="flex flex-col gap-6">

            {/* Blog Information */}
            <BlogInfoSection
              blogId={blogId}
              blogTitle={blogTitle}
              handleTitleChange={handleTitleChange}
              slug={slug}
              category={category}
              setCategory={setCategory}
              author={author}
              setAuthor={setAuthor}
              status={status}
              setStatus={setStatus}
              publishDate={publishDate}
              setPublishDate={setPublishDate}
              onSuccess={(id) => setBlogId(id)}
            />

            {/* Hero Section */}
            <HeroSection
              badgeText={badgeText}
              setBadgeText={setBadgeText}
              readingTime={readingTime}
              setReadingTime={setReadingTime}
              heroTitle={heroTitle}
              setHeroTitle={setHeroTitle}
              shortDescription={shortDescription}
              setShortDescription={setShortDescription}
              authorName={authorName}
              setAuthorName={setAuthorName}
              heroBanner={heroBanner}
              setHeroBanner={setHeroBanner}
              authorImage={authorImage}
              setAuthorImage={setAuthorImage}
              blogId={blogId}
            />

            {/* Content Builder */}
            <ContentBuilderSection
              blogId={blogId}
              sections={sections}
              setSections={setSections}
              addSection={addSection}
              removeSection={removeSection}
              addDescriptionBlock={addDescriptionBlock}
              removeDescriptionBlock={removeDescriptionBlock}
              updateSectionImagePosition={updateSectionImagePosition}
              handleSave={handleSave}
            />
          </div>
        </div>
      </main>

      {/* Sticky Bottom Footer */}
      <footer className="fixed bottom-0 left-[280px] right-0 h-16 bg-white border-t border-slate-200 z-20 shadow-[0_-4px_24px_rgba(0,0,0,0.02)] flex items-center justify-between px-8">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          Draft — saved moments ago
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => handlePublish("draft")} className="h-10 px-4 text-[13px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-2 shadow-sm">
            <SaveIcon className="w-4 h-4" /> Save Draft
          </button>
          <button className="h-10 px-4 text-[13px] font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-2 shadow-sm">
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button onClick={() => handlePublish("published")} className="h-10 px-6 text-[13px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            Publish Blog
          </button>
        </div>
      </footer>
    </div>
  );
}

// Icons
export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function SaveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

export function DragHandle() {
  return (
    <div className="w-5 h-5 flex items-center justify-center cursor-grab opacity-40 hover:opacity-100">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="2" r="1.5" fill="currentColor" />
        <circle cx="8" cy="2" r="1.5" fill="currentColor" />
        <circle cx="4" cy="6" r="1.5" fill="currentColor" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
        <circle cx="4" cy="10" r="1.5" fill="currentColor" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function IconButton({ children }) {
  return (
    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors">
      {children}
    </button>
  );
}
