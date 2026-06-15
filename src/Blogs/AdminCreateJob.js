"use client";
import React, { useState } from 'react';
import { ChevronLeft, Upload, Trash2, GripVertical, ChevronDown, Eye, FileText, User, Calendar, Clock, CheckCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export function AdminCreateJob() {
  const [showPreview, setShowPreview] = useState(false);

  const [blogData, setBlogData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    category: '',
    tags: [],
    heroTitle: '',
    heroSubtitle: '',
    gradientBg: '#3F5BF6',
    authorName: 'John Doe',
    authorDesignation: 'Senior Writer',
    publishDate: '2026-06-15',
    readTime: '5',
    toc: [
      { id: '1', title: 'Introduction', sectionId: 'introduction' },
      { id: '2', title: 'Main Content', sectionId: 'main-content' }
    ],
    contentBlocks: [
      { id: '1', type: 'text', content: '' }
    ],
    faqs: [
      { id: '1', question: 'FAQ 1', answer: '' }
    ],
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    canonicalUrl: ''
  });

  const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'development', label: 'Development' },
  ];

  const availableTags = ['Technology', 'Design', 'Business', 'Marketing', 'Development'];

  const toggleTag = (tag) => {
    if (blogData.tags.includes(tag)) {
      setBlogData({ ...blogData, tags: blogData.tags.filter(t => t !== tag) });
    } else {
      setBlogData({ ...blogData, tags: [...blogData.tags, tag] });
    }
  };

  const addTocSection = () => {
    setBlogData({
      ...blogData,
      toc: [...blogData.toc, { id: Date.now().toString(), title: 'New Section', sectionId: 'new-section' }]
    });
  };

  const removeTocSection = (id) => {
    setBlogData({
      ...blogData,
      toc: blogData.toc.filter(t => t.id !== id)
    });
  };

  const addContentBlock = () => {
    setBlogData({
      ...blogData,
      contentBlocks: [...blogData.contentBlocks, { id: Date.now().toString(), type: 'text', content: '' }]
    });
  };

  const removeContentBlock = (id) => {
    setBlogData({
      ...blogData,
      contentBlocks: blogData.contentBlocks.filter(b => b.id !== id)
    });
  };

  const addFaq = () => {
    setBlogData({
      ...blogData,
      faqs: [...blogData.faqs, { id: Date.now().toString(), question: 'New FAQ', answer: '' }]
    });
  };

  const removeFaq = (id) => {
    setBlogData({
      ...blogData,
      faqs: blogData.faqs.filter(f => f.id !== id)
    });
  };

  const [openSections, setOpenSections] = useState({
    blogDetails: true,
    heroSection: true,
    authorInfo: true,
    tableOfContents: true,
    contentBuilder: true,
    faqSection: true,
    seoSettings: true
  });

  const handleSaveSection = (sectionKey, successMessage) => {
    toast.success(successMessage);
    setOpenSections(prev => ({ ...prev, [sectionKey]: false }));
  };

  const handleFileUpload = (e, label) => {
    if (e.target.files && e.target.files[0]) {
      toast.success(`${label} selected: ${e.target.files[0].name}`);
    }
  };

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1e293b]">
      <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src="/securxpertslogo.png" alt="SecurXpert" className="h-8 object-contain" />
            <div className="w-px h-8 bg-gray-200"></div>
            <h1 className="text-base font-semibold text-[#1e293b]">Blog Content Builder</h1>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Discard
            </button>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="px-6 py-2.5 bg-[#F1F0FB] text-[#1e293b] rounded-full text-sm font-semibold hover:bg-[#E5E3F8] transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Exit Preview' : 'Preview'}
              </button>
              <button 
                onClick={() => toast.success('Blog published successfully!')}
                className="px-6 py-2.5 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className={showPreview ? 'col-span-7' : 'col-span-9'}>
            <div className="space-y-6">
              
              {/* Blog Details */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('blogDetails')}>
                  <h3 className="font-bold text-[#1e293b] text-lg">Blog Details</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.blogDetails ? 'rotate-180' : ''}`} />
                </div>
                {openSections.blogDetails && (
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Blog Title</label>
                        <input
                          type="text"
                          placeholder="Enter blog title"
                          value={blogData.title}
                          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Slug</label>
                        <input
                          type="text"
                          placeholder="blog-post-url"
                          value={blogData.slug}
                          onChange={(e) => setBlogData({ ...blogData, slug: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                      <div className="col-span-2 space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Short Description</label>
                        <textarea
                          placeholder="Brief description of the blog post"
                          value={blogData.shortDescription}
                          onChange={(e) => setBlogData({ ...blogData, shortDescription: e.target.value })}
                          className="w-full px-5 py-4 bg-[#f1f5f9] text-[#1e293b] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50 resize-y"
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Category</label>
                        <div className="relative">
                          <select 
                            className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                            value={blogData.category}
                            onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}
                          >
                            <option value="">Select category</option>
                            {categories.map((c) => (
                              <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="w-full space-y-2">
                        <label className="block text-sm font-semibold text-[#1e293b]">Tags</label>
                        <div className="flex flex-wrap gap-2">
                          {availableTags.map((tag) => (
                            <button
                              key={tag}
                              onClick={() => toggleTag(tag)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                blogData.tags.includes(tag) 
                                  ? 'bg-white border border-gray-300 shadow-sm text-black' 
                                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('blogDetails', 'Blog details saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Hero Section */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('heroSection')}>
                  <h3 className="font-bold text-[#1e293b] text-lg">Hero Section</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.heroSection ? 'rotate-180' : ''}`} />
                </div>
                {openSections.heroSection && (
                  <div className="mt-6">
                    <div className="space-y-6">
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Hero Title</label>
                        <input
                          type="text"
                          placeholder="Main hero title"
                          value={blogData.heroTitle}
                          onChange={(e) => setBlogData({ ...blogData, heroTitle: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Hero Subtitle</label>
                        <textarea
                          placeholder="Supporting subtitle text"
                          value={blogData.heroSubtitle}
                          onChange={(e) => setBlogData({ ...blogData, heroSubtitle: e.target.value })}
                          className="w-full px-5 py-4 bg-[#f1f5f9] text-[#1e293b] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50 resize-y"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1e293b] mb-2">Hero Banner Image</label>
                        <label className="border-2 border-dashed border-[#cbd5e1] rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors block">
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'Hero Banner Image')} />
                          <Upload className="w-8 h-8 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-700">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="space-y-2 w-full">
                          <label className="block text-sm font-semibold text-[#1e293b]">Gradient Background Color</label>
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-xl flex-shrink-0 border border-gray-200"
                              style={{ backgroundColor: blogData.gradientBg }}
                            />
                            <input 
                              type="text"
                              className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                              value={blogData.gradientBg}
                              onChange={(e) => setBlogData({ ...blogData, gradientBg: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('heroSection', 'Hero section saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Author Information */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('authorInfo')}>
                  <h3 className="font-bold text-[#1e293b] text-lg">Author Information</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.authorInfo ? 'rotate-180' : ''}`} />
                </div>
                {openSections.authorInfo && (
                  <div className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#1e293b] mb-2">Author Image</label>
                        <div className="flex items-center gap-4">
                          <label className="w-16 h-16 rounded-full bg-[#f1f5f9] text-[#1e293b] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'Author Image')} />
                            <Upload className="w-5 h-5 text-gray-500" />
                          </label>
                          <label className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'Author Image')} />
                            Upload Photo
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2 w-full">
                          <label className="block text-sm font-semibold text-[#1e293b]">Author Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={blogData.authorName}
                            onChange={(e) => setBlogData({ ...blogData, authorName: e.target.value })}
                            className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                          />
                        </div>
                        <div className="space-y-2 w-full">
                          <label className="block text-sm font-semibold text-[#1e293b]">Author Designation</label>
                          <input
                            type="text"
                            placeholder="Senior Writer"
                            value={blogData.authorDesignation}
                            onChange={(e) => setBlogData({ ...blogData, authorDesignation: e.target.value })}
                            className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                          />
                        </div>
                        <div className="space-y-2 w-full">
                          <label className="block text-sm font-semibold text-[#1e293b]">Publish Date</label>
                          <input
                            type="text"
                            placeholder="June 15th, 2026"
                            value={blogData.publishDate}
                            onChange={(e) => setBlogData({ ...blogData, publishDate: e.target.value })}
                            className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                          />
                        </div>
                        <div className="space-y-2 w-full">
                          <label className="block text-sm font-semibold text-[#1e293b]">Read Time (minutes)</label>
                          <input
                            type="number"
                            placeholder="5"
                            value={blogData.readTime}
                            onChange={(e) => setBlogData({ ...blogData, readTime: e.target.value })}
                            className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('authorInfo', 'Author information saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => toggleSection('tableOfContents')}>
                  <h3 className="font-semibold text-[#1e293b]">Table of Contents</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.tableOfContents ? 'rotate-180' : ''}`} />
                </div>
                {openSections.tableOfContents && (
                  <div className="mt-4">
                    <div className="flex items-center justify-end mb-4">
                      <button 
                        onClick={addTocSection}
                        className="px-4 py-1.5 bg-[#5A73FF] text-white rounded-full text-sm font-medium hover:bg-[#465CE5] transition-colors"
                      >
                        + Add Section
                      </button>
                    </div>
                    <div className="space-y-3">
                      {blogData.toc.map((section, idx) => (
                        <div key={section.id} className="flex items-center gap-4 p-3 bg-[#F8FAFC] text-[#1e293b] border border-gray-200 rounded-xl">
                          <GripVertical className="w-5 h-5 text-gray-400 cursor-grab" />
                          <input
                            type="text"
                            value={section.title}
                            onChange={(e) => {
                              const newToc = [...blogData.toc];
                              newToc[idx].title = e.target.value;
                              setBlogData({ ...blogData, toc: newToc });
                            }}
                            className="flex-1 bg-transparent border-none focus:outline-none text-sm"
                          />
                          <input
                            type="text"
                            value={section.sectionId}
                            onChange={(e) => {
                              const newToc = [...blogData.toc];
                              newToc[idx].sectionId = e.target.value;
                              setBlogData({ ...blogData, toc: newToc });
                            }}
                            className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-500"
                          />
                          <button onClick={() => removeTocSection(section.id)} className="p-2 text-red-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('tableOfContents', 'Table of contents saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Builder */}
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => toggleSection('contentBuilder')}>
                  <h3 className="font-semibold text-[#1e293b]">Content Builder</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.contentBuilder ? 'rotate-180' : ''}`} />
                </div>
                {openSections.contentBuilder && (
                  <div className="mt-4">
                    <div className="space-y-6">
                      {blogData.contentBlocks.map((block, idx) => (
                        <div key={block.id} className="border border-gray-200 rounded-xl overflow-hidden">
                          <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                              <span className="font-serif">T</span> Text Block
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => removeContentBlock(block.id)} className="p-1 text-red-400 hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <ChevronDown className="w-4 h-4 text-gray-400 rotate-180" />
                            </div>
                          </div>
                          <div className="p-4 bg-white">
                            <label className="block text-sm font-medium text-[#1e293b] mb-2">Content</label>
                            <textarea
                              value={block.content}
                              onChange={(e) => {
                                const newBlocks = [...blogData.contentBlocks];
                                newBlocks[idx].content = e.target.value;
                                setBlogData({ ...blogData, contentBlocks: newBlocks });
                              }}
                              placeholder="Enter content here..."
                              className="w-full min-h-[120px] p-4 bg-[#F8FAFC] text-[#1e293b] border-none rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-200 resize-y"
                            />
                          </div>
                        </div>
                      ))}
                      
                      <button 
                        onClick={addContentBlock}
                        className="w-full py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        + Add Block
                      </button>
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('contentBuilder', 'Content builder saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Section */}
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => toggleSection('faqSection')}>
                  <h3 className="font-semibold text-[#1e293b]">FAQ Section</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.faqSection ? 'rotate-180' : ''}`} />
                </div>
                {openSections.faqSection && (
                  <div className="mt-4">
                    <div className="flex items-center justify-end mb-4">
                      <button 
                        onClick={addFaq}
                        className="px-4 py-1.5 bg-[#5A73FF] text-white rounded-full text-sm font-medium hover:bg-[#465CE5] transition-colors"
                      >
                        + Add FAQ
                      </button>
                    </div>
                    <div className="space-y-4">
                      {blogData.faqs.map((faq, idx) => (
                        <div key={faq.id} className="border border-gray-200 rounded-2xl p-6 bg-white">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-gray-600">FAQ {idx + 1}</span>
                              <button onClick={() => removeFaq(faq.id)} className="p-1 text-[#ef4444] hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <ChevronDown className="w-5 h-5 text-gray-400 rotate-180 cursor-pointer" />
                          </div>
                          
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-[#1e293b]">Question</label>
                              <input
                                type="text"
                                placeholder="Enter question"
                                value={faq.question}
                                onChange={(e) => {
                                  const newFaqs = [...blogData.faqs];
                                  newFaqs[idx].question = e.target.value;
                                  setBlogData({ ...blogData, faqs: newFaqs });
                                }}
                                className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-[#1e293b]">Answer</label>
                              <textarea
                                placeholder="Enter answer"
                                value={faq.answer}
                                onChange={(e) => {
                                  const newFaqs = [...blogData.faqs];
                                  newFaqs[idx].answer = e.target.value;
                                  setBlogData({ ...blogData, faqs: newFaqs });
                                }}
                                className="w-full px-5 py-4 bg-[#f1f5f9] text-[#1e293b] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50 resize-y"
                                rows={3}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('faqSection', 'FAQ section saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* SEO Settings */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection('seoSettings')}>
                  <h3 className="font-bold text-[#1e293b] text-lg">SEO Settings</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSections.seoSettings ? 'rotate-180' : ''}`} />
                </div>
                {openSections.seoSettings && (
                  <div className="mt-6">
                    <div className="space-y-6">
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Meta Title</label>
                        <input
                          type="text"
                          placeholder="SEO optimized title"
                          value={blogData.seoTitle}
                          onChange={(e) => setBlogData({ ...blogData, seoTitle: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Meta Description</label>
                        <textarea
                          placeholder="SEO meta description"
                          value={blogData.seoDescription}
                          onChange={(e) => setBlogData({ ...blogData, seoDescription: e.target.value })}
                          className="w-full px-5 py-4 bg-[#f1f5f9] text-[#1e293b] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50 resize-y"
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Meta Keywords</label>
                        <input
                          type="text"
                          placeholder="keyword1, keyword2, keyword3"
                          value={blogData.seoKeywords}
                          onChange={(e) => setBlogData({ ...blogData, seoKeywords: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1e293b] mb-2">OG Image</label>
                        <label className="border-2 border-dashed border-[#cbd5e1] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors block">
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'OG Image')} />
                          <Upload className="w-6 h-6 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500">Upload Open Graph image</p>
                        </label>
                      </div>
                      <div className="space-y-2 w-full">
                        <label className="block text-sm font-semibold text-[#1e293b]">Canonical URL</label>
                        <input
                          type="text"
                          placeholder="https://example.com/blog/post"
                          value={blogData.canonicalUrl}
                          onChange={(e) => setBlogData({ ...blogData, canonicalUrl: e.target.value })}
                          className="w-full px-5 py-3 bg-[#f1f5f9] text-[#1e293b] border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A73FF]/50"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-8 border-t border-gray-100 pt-6">
                      <button 
                        onClick={() => handleSaveSection('seoSettings', 'SEO settings saved!')}
                        className="px-6 py-2 bg-[#5A73FF] text-white rounded-full text-sm font-semibold hover:bg-[#465CE5] transition-colors"
                      >
                        Save Section
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className={showPreview ? 'col-span-5' : 'col-span-3'}>
            <div className="sticky top-24 space-y-4">
              {showPreview ? (
                // Embedded Live Preview Panel
                <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-[#e2e8f0] bg-[#F8FAFC]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-[#2B0A5A]" />
                        <h3 className="font-semibold text-[#1e293b]">Live Preview</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-[#f1f5f9] min-h-[600px] overflow-auto">
                    <div className="bg-white mx-auto w-full min-h-[500px] transition-all duration-300 shadow-lg relative">
                      <div className="w-full h-48 md:h-64 flex flex-col items-center justify-center p-6 text-center text-white" style={{ backgroundColor: blogData.gradientBg }}>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">{blogData.heroTitle || 'Blog Hero Title'}</h1>
                        <p className="text-sm md:text-base opacity-90 max-w-2xl">{blogData.heroSubtitle || 'Hero subtitle'}</p>
                      </div>
                      <div className="p-8">
                        <div className="mb-8 border-b pb-6">
                          <h1 className="text-3xl font-bold text-[#2B0A5A] mb-4">{blogData.title || 'Blog Title'}</h1>
                          <div className="flex items-center gap-4 text-sm text-[#64748b] mb-4">
                            <span className="bg-[#F8FAFC] px-3 py-1 rounded-full text-[#5A73FF] font-medium">{blogData.category || 'Category'}</span>
                            <span>{blogData.publishDate || 'Date'}</span>
                            <span>•</span>
                            <span>{blogData.readTime || '5'} min read</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div>
                              <p className="font-semibold text-[#1e293b]">{blogData.authorName || 'Author Name'}</p>
                              <p className="text-xs text-[#64748b]">{blogData.authorDesignation || 'Designation'}</p>
                            </div>
                          </div>
                        </div>
                        {blogData.shortDescription && (
                          <div className="mb-6 text-xl text-gray-600 font-medium leading-relaxed">{blogData.shortDescription}</div>
                        )}
                        {blogData.contentBlocks.map((block, idx) => (
                          <div key={idx} className="mb-6 text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {block.content || 'Content block placeholder...'}
                          </div>
                        ))}
                        {blogData.tags.length > 0 && (
                          <div className="mt-8 pt-6 border-t">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {blogData.tags.map((tag, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">#{tag}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Embedded Publishing Panel
                <div className="space-y-4">
                  <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                    <h3 className="font-semibold text-[#1e293b] mb-4">Publishing</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                          <User className="w-4 h-4 text-[#2B0A5A]" />
                        </div>
                        <div>
                          <p className="text-[#64748b]">Author</p>
                          <p className="font-medium text-[#1e293b]">{blogData.authorName || 'Admin'}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-[#2B0A5A]" />
                        </div>
                        <div>
                          <p className="text-[#64748b]">Publish Date</p>
                          <p className="font-medium text-[#1e293b]">{blogData.publishDate || new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                          <Clock className="w-4 h-4 text-[#2B0A5A]" />
                        </div>
                        <div>
                          <p className="text-[#64748b]">Last Updated</p>
                          <p className="font-medium text-[#1e293b]">Just now</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-[#e2e8f0]">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className={`w-5 h-5 text-[#cbd5e1]`} />
                          <span className={`text-sm font-medium text-[#64748b]`}>Draft</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                    <h3 className="font-semibold text-[#1e293b] mb-4">Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                            <Eye className="w-4 h-4 text-[#2B0A5A]" />
                          </div>
                          <span className="text-sm text-[#64748b]">Views</span>
                        </div>
                        <span className="font-semibold text-[#1e293b]">0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                            <FileText className="w-4 h-4 text-[#2B0A5A]" />
                          </div>
                          <span className="text-sm text-[#64748b]">Read Time</span>
                        </div>
                        <span className="font-semibold text-[#1e293b]">{blogData.readTime || 0} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="sticky top-6 space-y-3">
                    <button className="w-full px-4 py-2 border border-[#e2e8f0] text-[#64748b] hover:bg-[#F8FAFC] rounded-lg font-medium transition-colors" onClick={() => toast.info('Draft saved')}>
                      Save Draft
                    </button>
                    <button className="w-full px-4 py-2 bg-[#F8FAFC] text-[#1e293b] border border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-lg font-medium transition-colors" onClick={() => setShowPreview(true)}>
                      Preview
                    </button>
                    <button className="w-full px-4 py-2 bg-[#5A73FF] text-white hover:bg-[#465CE5] rounded-lg font-medium transition-colors" onClick={() => toast.success('Blog published!')}>
                      Publish Blog
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
