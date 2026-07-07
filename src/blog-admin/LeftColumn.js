import { Clock, User, Calendar, GripVertical, Trash2, Plus, AlertCircle, Image } from "lucide-react";
import { Card, Label, Input, Textarea, Select, UploadZone, TagInput, Toggle } from "./SharedUI.js";
import { useState } from "react";

const CATEGORIES = [
  "Cybersecurity",
  "Network Security",
  "Cloud Security",
  "Threat Intelligence",
  "Compliance",
  "DevSecOps",
  "Identity & Access",
  "Incident Response",
];

export function LeftColumn() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorDesig, setAuthorDesig] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [tocSections, setTocSections] = useState([]);
  const [newSection, setNewSection] = useState("");
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoFormTitle, setDemoFormTitle] = useState("");
  const [demoButtonText, setDemoButtonText] = useState("");
  
  const [dragOver, setDragOver] = useState(null);

  const addTOCSection = () => {
    if (newSection.trim()) {
      setTocSections([...tocSections, { id: Date.now(), title: newSection.trim() }]);
      setNewSection("");
    }
  };

  const removeTOCSection = (id) => setTocSections(tocSections.filter((s) => s.id !== id));

  return (
    <div className="space-y-5">
      {/* Blog Details */}
      <Card title="Blog Details">
        <div className="space-y-4">
          <div>
            <Label required>Blog Title</Label>
            <Input value={title} onChange={setTitle} placeholder="Enter a compelling blog title..." />
          </div>
          <div>
            <Label>Blog Slug</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground select-none">/blog/</span>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full h-9 pl-12 pr-3 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                placeholder="url-slug-here"
              />
            </div>
          </div>
          <div>
            <Label>Short Description</Label>
            <Textarea value={shortDesc} onChange={setShortDesc} placeholder="A brief summary shown in blog listings and previews..." rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Select options={CATEGORIES} value={category} onChange={setCategory} placeholder="Select category" />
            </div>
            <div>
              <Label>Reading Time (min)</Label>
              <div className="relative">
                <Clock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="number"
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                  className="w-full h-9 pl-8 pr-3 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                  min="1"
                />
              </div>
            </div>
          </div>
          <div>
            <Label>Tags</Label>
            <TagInput tags={tags} onChange={setTags} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label required>Author Name</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full h-9 pl-8 pr-3 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div>
              <Label>Author Designation</Label>
              <Input value={authorDesig} onChange={setAuthorDesig} placeholder="Job title or role" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Author Image</Label>
              <UploadZone label="Upload author photo (JPG, PNG)" icon={User} />
            </div>
            <div>
              <Label>Publish Date</Label>
              <div className="relative">
                <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full h-9 pl-8 pr-3 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Hero Section */}
      <Card title="Hero Section">
        <div className="space-y-4">
          <div>
            <Label required>Hero Title</Label>
            <Input value={heroTitle} onChange={setHeroTitle} placeholder="Hero headline displayed at the top of the post..." />
          </div>
          <div>
            <Label>Hero Description</Label>
            <Textarea value={heroDesc} onChange={setHeroDesc} placeholder="Supporting text beneath the hero title..." rows={3} />
          </div>
          <div>
            <Label>Hero Banner</Label>
            <UploadZone label="Upload banner image — recommended 1600 × 600px (JPG, PNG, WebP)" icon={Image} />
          </div>
        </div>
      </Card>

      {/* Table of Contents */}
      <Card title="Table of Contents">
        <div className="space-y-3">
          {tocSections.map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragOver={(e) => { e.preventDefault(); setDragOver(section.id); }}
              onDragLeave={() => setDragOver(null)}
              onDrop={() => setDragOver(null)}
              className={`flex items-center gap-2.5 p-2.5 rounded-lg border transition-colors
                ${dragOver === section.id ? "border-primary bg-primary/5" : "border-border bg-muted/30 hover:bg-muted/50"}`}
            >
              <GripVertical className="w-3.5 h-3.5 text-muted-foreground/50 cursor-grab flex-shrink-0" />
              <span className="w-5 h-5 rounded-md bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">{index + 1}</span>
              <input
                value={section.title}
                onChange={(e) => setTocSections(tocSections.map((s) => s.id === section.id ? { ...s, title: e.target.value } : s))}
                className="flex-1 text-sm bg-transparent outline-none text-foreground"
              />
              <button onClick={() => removeTOCSection(section.id)} className="p-1 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <div className="flex gap-2 mt-1">
            <input
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTOCSection()}
              placeholder="Add a new section..."
              className="flex-1 h-9 px-3 text-sm bg-input-background border border-dashed border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
            />
            <button
              onClick={addTOCSection}
              className="flex items-center gap-1.5 px-3 h-9 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex-shrink-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>
        </div>
      </Card>

      {/* Demo Form */}
      <Card title="Demo Form">
        <div className="space-y-4">
          <Toggle checked={showDemoForm} onChange={setShowDemoForm} label="Show demo form on this post" />
          {showDemoForm && (
            <div className="space-y-3 pt-2 border-t border-border">
              <div>
                <Label>Form Title</Label>
                <Input value={demoFormTitle} onChange={setDemoFormTitle} placeholder="Form heading text..." />
              </div>
              <div>
                <Label>Button Text</Label>
                <Input value={demoButtonText} onChange={setDemoButtonText} placeholder="CTA button label..." />
              </div>
              <div className="p-3 bg-primary/5 border border-primary/15 rounded-lg">
                <p className="text-xs text-primary/80 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Form fields are configured in the global Demo Form settings.
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
