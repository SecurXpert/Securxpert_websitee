"use client";
import React, { useState } from "react";
import {
  Plus, GripVertical, Copy, Trash2, ChevronDown, ChevronRight,
  Image as ImageIcon, Type, Quote, BarChart3, List, Table, Lightbulb,
  GitBranch, HelpCircle, Megaphone, Upload, Eye, Save, Calendar, Send,
  Settings, Link, User, BookOpen, Share2, Clock, Monitor, Tablet, Smartphone, Search
} from "lucide-react";

export default function EditForm() {
  const [expandedSections, setExpandedSections] = useState({
    blogInfo: true,
    hero: false,
    toc: false,
    sidebar: false,
    contentBuilder: true,
    relatedBlogs: false,
    seoSettings: false,
  });
  const [contentSections, setContentSections] = useState([]);
  const [tocItems, setTocItems] = useState([
    { id: "1", name: "Introduction", anchorId: "introduction", order: 1 },
    { id: "2", name: "Revenue Leaks", anchorId: "revenue-leaks", order: 2 },
    { id: "3", name: "Inventory Challenges", anchorId: "inventory-challenges", order: 3 },
    { id: "4", name: "Billing Errors", anchorId: "billing-errors", order: 4 },
    { id: "5", name: "Reporting Challenges", anchorId: "reporting-challenges", order: 5 },
    { id: "6", name: "ERP Benefits", anchorId: "erp-benefits", order: 6 },
    { id: "7", name: "FAQ", anchorId: "faq", order: 7 },
    { id: "8", name: "Conclusion", anchorId: "conclusion", order: 8 },
  ]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const addContentSection = (type) => {
    const newSection = {
      id: Date.now().toString(),
      type,
      isOpen: true,
    };
    setContentSections([...contentSections, newSection]);
  };

  const removeContentSection = (id) => {
    setContentSections(contentSections.filter((s) => s.id !== id));
  };

  const duplicateContentSection = (id) => {
    const section = contentSections.find((s) => s.id === id);
    if (section) {
      const newSection = { ...section, id: Date.now().toString() };
      const index = contentSections.findIndex((s) => s.id === id);
      const newSections = [...contentSections];
      newSections.splice(index + 1, 0, newSection);
      setContentSections(newSections);
    }
  };

  const sectionIcons = {
    text: <Type className="w-4 h-4" />,
    quote: <Quote className="w-4 h-4" />,
    statistics: <BarChart3 className="w-4 h-4" />,
    "image-content": <ImageIcon className="w-4 h-4" />,
    "feature-list": <List className="w-4 h-4" />,
    "comparison-table": <Table className="w-4 h-4" />,
    "highlight-banner": <Lightbulb className="w-4 h-4" />,
    "process-timeline": <GitBranch className="w-4 h-4" />,
    faq: <HelpCircle className="w-4 h-4" />,
    "mid-page-cta": <Megaphone className="w-4 h-4" />,
  };

  const sectionLabels = {
    text: "Text Section",
    quote: "Quote Section",
    statistics: "Statistics Cards",
    "image-content": "Image + Content",
    "feature-list": "Feature List",
    "comparison-table": "Comparison Table",
    "highlight-banner": "Highlight Banner",
    "process-timeline": "Process Timeline",
    faq: "FAQ Builder",
    "mid-page-cta": "Mid Page CTA",
  };

  const AccordionSection = ({ title, sectionKey, children, badge }) => (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-slate-900">
            {title}
          </span>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">
              {badge}
            </span>
          )}
        </div>
        {expandedSections[sectionKey] ? (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-slate-500" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="px-6 py-5 border-t border-slate-200 bg-slate-50">
          {children}
        </div>
      )}
    </div>
  );

  const InputField = ({ label, placeholder, type = "text", defaultValue }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
      />
    </div>
  );

  const SelectField = ({ label, placeholder, options }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none">
        <option>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  const ImageUploadBox = ({ label }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
          <Upload className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-sm font-medium text-slate-900 mb-1">
          Click to upload or drag and drop
        </p>
        <p className="text-xs text-slate-500">
          PNG, JPG, WebP up to 10MB
        </p>
      </div>
    </div>
  );

  const ToggleSwitch = ({ label }) => (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium text-slate-900">{label}</label>
      <button className="w-11 h-6 bg-slate-200 rounded-full relative transition-colors hover:bg-slate-300">
        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm"></div>
      </button>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-slate-50 font-['Inter']"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/imports/SXXX_logo.png"
                alt="SecurXpert Technologies"
                className="h-8"
              />
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Blog Content Builder
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Discard
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
              <Send className="w-4 h-4" />
              Publish
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content Area - 75% */}
        <main className="flex-1 p-6 overflow-y-auto" style={{ width: "75%" }}>
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Blog Information */}
            <AccordionSection
              title="Blog Information"
              sectionKey="blogInfo"
              badge="Required"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <InputField
                    label="Blog Title"
                    placeholder="Enter your blog title"
                    defaultValue="How ERP Systems Solve Retail Challenges"
                  />
                </div>
                <InputField
                  label="Slug URL"
                  placeholder="blog-url-slug"
                  defaultValue="erp-systems-retail-challenges"
                />
                <SelectField
                  label="Category"
                  placeholder="Select category"
                  options={["ERP Solutions", "Retail Tech", "Business Growth"]}
                />
                <SelectField
                  label="Author"
                  placeholder="Select author"
                  options={["Sarah Johnson", "Michael Chen", "Emma Wilson"]}
                />
                <InputField
                  label="Reading Time (minutes)"
                  placeholder="8"
                  type="number"
                  defaultValue="8"
                />
                <div className="col-span-2">
                  <InputField
                    label="Short Description"
                    placeholder="Brief description for social media and search results"
                    defaultValue="Discover how modern ERP systems help retailers overcome common challenges like inventory management, billing accuracy, and real-time reporting."
                  />
                </div>
                <InputField label="Publish Date" type="date" placeholder="" />
                <SelectField
                  label="Status"
                  placeholder="Select status"
                  options={["Draft", "Scheduled", "Published"]}
                />
                <div className="col-span-2 pt-2 space-y-3">
                  <ToggleSwitch label="Mark as Featured Blog" />
                </div>
              </div>
            </AccordionSection>

            {/* Hero Section */}
            <AccordionSection title="Hero Section" sectionKey="hero">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Category Badge"
                    placeholder="ERP Solutions"
                  />
                  <div></div>
                  <div className="col-span-2">
                    <InputField
                      label="Hero Title"
                      placeholder="Main headline for the hero section"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">
                        Hero Description
                      </label>
                      <textarea
                        placeholder="Compelling description that appears in the hero"
                        rows={3}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
                <ImageUploadBox label="Hero Image (16:9 ratio)" />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Author Name" placeholder="Sarah Johnson" />
                  <InputField
                    label="Publish Date Display"
                    placeholder="June 5, 2026"
                  />
                </div>
                <ImageUploadBox label="Author Image" />
                <div className="pt-2">
                  <ToggleSwitch label="Enable Social Sharing Buttons" />
                </div>

                {/* Hero Preview Card */}
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    LIVE PREVIEW
                  </p>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-blue-300" />
                    </div>
                    <div className="p-4">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                        ERP Solutions
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 mt-3">
                        How ERP Systems Solve Retail Challenges
                      </h3>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500"></div>
                        <div className="text-xs text-slate-500">
                          Sarah Johnson • 8 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Table of Contents */}
            <AccordionSection title="Table of Contents" sectionKey="toc">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg">
                    Auto Generate
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-900 rounded-lg">
                    Manual Creation
                  </button>
                </div>

                <div className="space-y-2">
                  {tocItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 group hover:border-blue-300 transition-colors"
                    >
                      <GripVertical className="w-4 h-4 text-slate-400 cursor-grab" />
                      <div className="flex-1 grid grid-cols-3 gap-3">
                        <input
                          type="text"
                          defaultValue={item.name}
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded text-sm"
                        />
                        <input
                          type="text"
                          defaultValue={item.anchorId}
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded text-sm"
                        />
                        <input
                          type="number"
                          defaultValue={item.order}
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded text-sm"
                        />
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2.5 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                  + Add TOC Section
                </button>

                <div className="space-y-2 pt-2">
                  <ToggleSwitch label="Enable Sticky TOC" />
                  <ToggleSwitch label="Show Progress Indicator" />
                </div>

                {/* TOC Preview */}
                <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    TOC PREVIEW
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">
                      Table of Contents
                    </h4>
                    {tocItems.slice(0, 4).map((item) => (
                      <div
                        key={item.id}
                        className="text-xs text-slate-500 hover:text-blue-600 cursor-pointer py-1"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Right Sidebar Widgets */}
            <AccordionSection
              title="Right Sidebar Widgets"
              sectionKey="sidebar"
            >
              <div className="space-y-6">
                {/* Author Widget */}
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    Author Widget
                  </h4>
                  <div className="space-y-3">
                    <ImageUploadBox label="Author Image" />
                    <InputField label="Name" placeholder="Sarah Johnson" />
                    <InputField
                      label="Designation"
                      placeholder="Senior ERP Consultant"
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">
                        Bio
                      </label>
                      <textarea
                        placeholder="Short author bio"
                        rows={2}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>
                    <InputField
                      label="Social Links"
                      placeholder="LinkedIn, Twitter, etc."
                    />
                  </div>
                </div>

                {/* Popular Blogs Widget */}
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    Popular Blogs Widget
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                      + Select Blogs
                    </button>
                  </div>
                </div>

                {/* Newsletter Widget */}
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-blue-600" />
                    Newsletter Widget
                  </h4>
                  <div className="space-y-3">
                    <InputField
                      label="Heading"
                      placeholder="Subscribe to Our Newsletter"
                    />
                    <InputField
                      label="Description"
                      placeholder="Get the latest insights"
                    />
                    <InputField label="Button Text" placeholder="Subscribe" />
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Megaphone className="w-4 h-4 text-blue-600" />
                    CTA Widget
                  </h4>
                  <div className="space-y-3">
                    <InputField
                      label="Heading"
                      placeholder="Ready to Transform Your Business?"
                    />
                    <InputField
                      label="Description"
                      placeholder="Schedule a demo today"
                    />
                    <InputField
                      label="Button Text"
                      placeholder="Get Started"
                    />
                    <InputField
                      label="Button Link"
                      placeholder="https://example.com"
                    />
                    <ImageUploadBox label="Background Image" />
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Content Builder */}
            <AccordionSection
              title="Content Builder"
              sectionKey="contentBuilder"
              badge="Visual Editor"
            >
              <div className="space-y-4">
                {/* Section Type Selector */}
                <div className="grid grid-cols-5 gap-2">
                  {(
                    [
                      "text",
                      "quote",
                      "statistics",
                      "image-content",
                      "feature-list",
                      "comparison-table",
                      "highlight-banner",
                      "process-timeline",
                      "faq",
                      "mid-page-cta",
                    ]
                  ).map((type) => (
                    <button
                      key={type}
                      onClick={() => addContentSection(type)}
                      className="px-3 py-2.5 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex flex-col items-center gap-2 group"
                    >
                      <div className="text-blue-600 group-hover:scale-110 transition-transform">
                        {sectionIcons[type]}
                      </div>
                      <span className="text-xs font-medium text-slate-900">
                        {sectionLabels[type]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Content Sections */}
                <div className="space-y-3 mt-6">
                  {contentSections.length === 0 ? (
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                        <Plus className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Start Building Your Blog
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        Choose a section type above to begin crafting your
                        content
                      </p>
                    </div>
                  ) : (
                    contentSections.map((section, index) => (
                      <div
                        key={section.id}
                        className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="px-4 py-3 bg-slate-50 flex items-center justify-between border-b border-slate-200">
                          <div className="flex items-center gap-3">
                            <GripVertical className="w-4 h-4 text-slate-400 cursor-grab" />
                            <div className="flex items-center gap-2">
                              <div className="text-blue-600">
                                {sectionIcons[section.type]}
                              </div>
                              <span className="text-sm font-semibold text-slate-900">
                                {sectionLabels[section.type]}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => duplicateContentSection(section.id)}
                              className="p-1.5 hover:bg-white rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-slate-400" />
                            </button>
                            <button
                              onClick={() => removeContentSection(section.id)}
                              className="p-1.5 hover:bg-white rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500" />
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          {section.type === "text" && (
                            <div className="space-y-3">
                              <InputField label="Heading" placeholder="Section heading" />
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">
                                  Content
                                </label>
                                <textarea
                                  placeholder="Write your content here..."
                                  rows={6}
                                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                                />
                              </div>
                            </div>
                          )}
                          {section.type === "quote" && (
                            <div className="space-y-3">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">
                                  Quote
                                </label>
                                <textarea
                                  placeholder="Enter quote text"
                                  rows={3}
                                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                                />
                              </div>
                              <InputField label="Author" placeholder="Quote author" />
                            </div>
                          )}
                          {section.type === "statistics" && (
                            <div className="space-y-3">
                              <div className="grid grid-cols-3 gap-3">
                                <InputField label="Number" placeholder="72%" />
                                <InputField label="Title" placeholder="Statistic title" />
                                <InputField
                                  label="Description"
                                  placeholder="Brief description"
                                />
                              </div>
                              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                                + Add Card
                              </button>
                            </div>
                          )}
                          {section.type === "image-content" && (
                            <div className="space-y-3">
                              <div className="flex gap-2">
                                <button className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg">
                                  Image Left
                                </button>
                                <button className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-900 rounded-lg">
                                  Image Right
                                </button>
                              </div>
                              <ImageUploadBox label="Image" />
                              <InputField label="Heading" placeholder="Section heading" />
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">
                                  Content
                                </label>
                                <textarea
                                  placeholder="Content text"
                                  rows={4}
                                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                                />
                              </div>
                            </div>
                          )}
                          {section.type === "feature-list" && (
                            <div className="space-y-3">
                              <InputField label="Heading" placeholder="Features heading" />
                              <div className="space-y-2">
                                {[1, 2, 3].map((i) => (
                                  <input
                                    key={i}
                                    type="text"
                                    placeholder={`Bullet point ${i}`}
                                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                  />
                                ))}
                              </div>
                              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                                + Add Bullet Point
                              </button>
                            </div>
                          )}
                          {section.type === "comparison-table" && (
                            <div className="space-y-3">
                              <div className="grid grid-cols-3 gap-2">
                                <InputField label="Column 1" placeholder="Feature" />
                                <InputField label="Column 2" placeholder="Before ERP" />
                                <InputField label="Column 3" placeholder="With ERP" />
                              </div>
                              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                                + Add Row
                              </button>
                            </div>
                          )}
                          {section.type === "highlight-banner" && (
                            <div className="space-y-3">
                              <InputField
                                label="Large Number"
                                placeholder="72%"
                              />
                              <InputField
                                label="Description"
                                placeholder="Businesses struggle with real-time visibility"
                              />
                              <SelectField
                                label="Background Style"
                                placeholder="Select style"
                                options={["Gradient", "Solid", "Pattern"]}
                              />
                              <div className="p-6 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                  72%
                                </div>
                                <p className="text-sm text-slate-900">
                                  Businesses struggle with real-time visibility
                                </p>
                              </div>
                            </div>
                          )}
                          {section.type === "process-timeline" && (
                            <div className="space-y-3">
                              {[1, 2, 3].map((step) => (
                                <div
                                  key={step}
                                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                                >
                                  <GripVertical className="w-4 h-4 text-slate-400 mt-1 cursor-grab" />
                                  <div className="flex-1 grid grid-cols-3 gap-2">
                                    <InputField
                                      label={`Step ${step}`}
                                      placeholder="Title"
                                    />
                                    <InputField
                                      label="Description"
                                      placeholder="Step description"
                                    />
                                    <InputField label="Icon" placeholder="Icon name" />
                                  </div>
                                </div>
                              ))}
                              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                                + Add Step
                              </button>
                            </div>
                          )}
                          {section.type === "faq" && (
                            <div className="space-y-3">
                              {[1, 2].map((faq) => (
                                <div
                                  key={faq}
                                  className="p-3 bg-slate-50 rounded-lg space-y-2"
                                >
                                  <InputField
                                    label="Question"
                                    placeholder="Frequently asked question"
                                  />
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-900">
                                      Answer
                                    </label>
                                    <textarea
                                      placeholder="Answer text"
                                      rows={2}
                                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                                    />
                                  </div>
                                </div>
                              ))}
                              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors">
                                + Add FAQ
                              </button>
                            </div>
                          )}
                          {section.type === "mid-page-cta" && (
                            <div className="space-y-3">
                              <InputField
                                label="Heading"
                                placeholder="Call to action heading"
                              />
                              <InputField
                                label="Description"
                                placeholder="Supporting text"
                              />
                              <div className="grid grid-cols-2 gap-3">
                                <InputField
                                  label="Primary Button"
                                  placeholder="Button text"
                                />
                                <InputField
                                  label="Secondary Button"
                                  placeholder="Button text"
                                />
                              </div>
                              <ImageUploadBox label="Background Image" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </AccordionSection>

            {/* Related Blogs */}
            <AccordionSection title="Related Blogs" sectionKey="relatedBlogs">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Featured Blog
                  </label>
                  <button className="w-full px-4 py-6 border-2 border-dashed border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <Plus className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                    <p className="text-sm font-medium text-slate-400">
                      Select Featured Blog
                    </p>
                  </button>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-900 mb-2 block">
                    Additional Related Blogs
                  </label>
                  <button className="w-full px-4 py-6 border-2 border-dashed border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <Plus className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                    <p className="text-sm font-medium text-slate-400">
                      Add Related Blogs
                    </p>
                  </button>
                </div>
              </div>
            </AccordionSection>

            {/* SEO Settings */}
            <AccordionSection title="SEO Settings" sectionKey="seoSettings">
              <div className="space-y-4">
                <InputField
                  label="SEO Title"
                  placeholder="Optimized title for search engines"
                  defaultValue="How ERP Systems Solve Retail Challenges | SecurXpert"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">
                    Meta Description
                  </label>
                  <textarea
                    placeholder="Meta description for search results"
                    rows={3}
                    defaultValue="Discover how modern ERP systems help retailers overcome inventory management, billing, and reporting challenges. Expert insights from SecurXpert Technologies."
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  />
                  <p className="text-xs text-slate-500">
                    152 / 160 characters
                  </p>
                </div>
                <InputField
                  label="Keywords"
                  placeholder="ERP, retail, inventory management"
                />
                <InputField
                  label="Canonical URL"
                  placeholder="https://securxpert.com/blog/erp-retail"
                />
                <ImageUploadBox label="Open Graph Image" />

                {/* Google Preview */}
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    GOOGLE PREVIEW
                  </p>
                  <div className="bg-white p-4 rounded border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500"></div>
                      <div>
                        <p className="text-xs text-slate-900">
                          SecurXpert Technologies
                        </p>
                        <p className="text-xs text-slate-500">
                          securxpert.com › blog › erp-retail
                        </p>
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-blue-600 mb-1">
                      How ERP Systems Solve Retail Challenges | SecurXpert
                    </h4>
                    <p className="text-xs text-slate-500">
                      Discover how modern ERP systems help retailers overcome
                      inventory management, billing, and reporting challenges.
                      Expert insights from SecurXpert...
                    </p>
                  </div>
                </div>

                {/* SEO Score */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      SEO Score
                    </p>
                    <p className="text-xs text-slate-500">
                      Great optimization!
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">92</div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </main>

        {/* Publishing Panel - 25% Sticky */}
        <aside
          className="bg-white border-l border-slate-200 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto"
          style={{ width: "25%" }}
        >
          <div className="space-y-6">
            {/* Status Card */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-900">
                  Status
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                  Draft
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Word Count</span>
                  <span className="font-semibold text-slate-900">1,247</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Reading Time</span>
                  <span className="font-semibold text-slate-900">8 min</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">SEO Score</span>
                  <span className="font-semibold text-blue-600">92/100</span>
                </div>
              </div>
            </div>

            {/* Preview Modes */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Preview Mode
              </p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Desktop
                </button>
                <button className="w-full px-4 py-2.5 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200">
                  <Tablet className="w-4 h-4" />
                  Tablet
                </button>
                <button className="w-full px-4 py-2.5 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-200">
                  <Smartphone className="w-4 h-4" />
                  Mobile
                </button>
              </div>
            </div>

            {/* Quick Settings */}
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-slate-900">
                  Quick Settings
                </p>
                <Settings className="w-4 h-4 text-slate-400" />
              </div>
              <div className="space-y-3">
                <ToggleSwitch label="Enable Comments" />
                <ToggleSwitch label="Show Author" />
                <ToggleSwitch label="Show TOC" />
                <ToggleSwitch label="Show Related Blogs" />
              </div>
            </div>

            {/* Publishing Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <button className="w-full px-4 py-3 bg-slate-100 text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              <button className="w-full px-4 py-3 bg-white border border-slate-200 text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Preview Blog
              </button>
              <button className="w-full px-4 py-3 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-lg font-medium text-sm hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Calendar className="w-4 h-4" />
                Schedule
              </button>
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md">
                <Send className="w-4 h-4" />
                Publish Now
              </button>
            </div>

            {/* Recent Activity */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                Recent Activity
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-500">
                  <p className="font-medium text-slate-900">Last saved</p>
                  <p>2 minutes ago</p>
                </div>
                <div className="text-xs text-slate-500">
                  <p className="font-medium text-slate-900">Created by</p>
                  <p>Sarah Johnson</p>
                </div>
                <div className="text-xs text-slate-500">
                  <p className="font-medium text-slate-900">Last modified</p>
                  <p>June 5, 2026 at 2:34 PM</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
