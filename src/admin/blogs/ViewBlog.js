import React, { useState, useEffect } from "react";
import { ArrowLeft, FileText, Star, Layers, CheckCircle } from "lucide-react";
import { API_BASE_URL } from "../config";

function ReadOnlyField({ label, value }) {
  return (
    <div className="mb-4">
      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-medium text-slate-600">
        {value || <span className="text-slate-400 italic">Not provided</span>}
      </div>
    </div>
  );
}

function SectionWrapper({ title, icon: Icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Icon className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-800">{title}</h2>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

export default function ViewBlog({ blogId, onBack }) {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await fetch(`${API_BASE_URL}blogs/${blogId}/all`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            ...(token && { "Authorization": `Bearer ${token}` })
          }
        });

        if (res.ok) {
          const data = await res.json();
          setBlogData(data.data || data);
        } else {
          setError("Failed to fetch blog details. It may have been deleted.");
        }
      } catch (err) {
        setError("Network error occurred while fetching blog details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-semibold text-slate-500">Loading Blog Details...</p>
      </div>
    );
  }

  if (error || !blogData) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50">
        <p className="text-red-500 font-bold mb-4">{error}</p>
        <button onClick={onBack} className="px-4 py-2 bg-blue-600 text-white rounded-xl">Go Back</button>
      </div>
    );
  }

  // Extract sections
  let sections = [];
  const possibleKeys = ['sections', 'content_sections', 'content'];
  for (const key of possibleKeys) {
    if (blogData[key] && Array.isArray(blogData[key]) && blogData[key].length > 0) {
      sections = blogData[key];
      break;
    }
  }

  // Extract Hero
  let hero = blogData.hero_section || blogData.hero || {};

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          <div className="w-px h-6 bg-slate-200" />
          <div>
            <h1 className="text-xl font-bold text-slate-800">View Blog Details</h1>
            <p className="text-xs text-slate-400">Read-only mode</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 font-bold text-sm rounded-xl border border-green-200">
          <CheckCircle className="w-4 h-4" /> Data Loaded
        </div>
      </header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto">

          <SectionWrapper title="Blog Information" icon={FileText}>
            <div className="grid grid-cols-2 gap-x-6">
              <ReadOnlyField label="Title" value={blogData.title} />
              <ReadOnlyField label="Slug" value={blogData.slug} />
              <ReadOnlyField label="Category" value={blogData.category} />
              <ReadOnlyField label="Author" value={blogData.author} />
              <ReadOnlyField label="Status" value={blogData.status} />
              <ReadOnlyField label="Publish Date" value={blogData.publish_date || blogData.created_at} />
            </div>
          </SectionWrapper>

          <SectionWrapper title="Hero Section" icon={Star}>
            <div className="grid grid-cols-2 gap-x-6">
              <ReadOnlyField label="Hero Title" value={hero.hero_title} />
              <ReadOnlyField label="Author Name" value={hero.author_name} />
              <div className="col-span-2">
                <ReadOnlyField label="Short Description" value={hero.short_description} />
              </div>
              <ReadOnlyField label="Hero Banner URL" value={hero.hero_banner_url || hero.hero_banner} />
              <ReadOnlyField label="Author Image URL" value={hero.author_image_url || hero.author_image} />
            </div>
          </SectionWrapper>

          {/* If there's an SEO section available in backend */}
          {blogData.seo_title && (
            <SectionWrapper title="SEO Details" icon={Layers}>
              <div className="grid grid-cols-2 gap-x-6">
                <ReadOnlyField label="SEO Title" value={blogData.seo_title} />
                <ReadOnlyField label="Meta Keywords" value={blogData.meta_keywords} />
                <div className="col-span-2">
                  <ReadOnlyField label="Meta Description" value={blogData.meta_description} />
                </div>
              </div>
            </SectionWrapper>
          )}

          <SectionWrapper title={`Content Sections (${sections.length})`} icon={Layers}>
            {sections.length === 0 ? (
              <p className="text-sm text-slate-400 italic">No content sections available.</p>
            ) : (
              <div className="space-y-6">
                {sections.map((sec, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                    <h3 className="text-sm font-bold text-blue-700 mb-3">Section {sec.order_index || idx + 1}: {sec.section_title || "Untitled"}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {sec.section_image_url && <ReadOnlyField label="Image URL" value={sec.section_image_url} />}
                      {sec.image_position && <ReadOnlyField label="Image Position" value={sec.image_position} />}
                      {sec.image_alt_text && <ReadOnlyField label="Image Alt" value={sec.image_alt_text} />}
                      {sec.image_caption && <ReadOnlyField label="Image Caption" value={sec.image_caption} />}
                      <div className="mt-2">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Content</label>
                        <div className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 whitespace-pre-wrap">
                          {sec.description || "No content"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionWrapper>

        </div>
      </div>
    </div>
  );
}
