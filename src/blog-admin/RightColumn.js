import { Trash2, Plus, Search, FileText, Globe, Star } from "lucide-react";
import { Card, Label, Input, Textarea } from "./SharedUI.js";
import { RichEditor } from "./RichEditor.js";
import { useState } from "react";

export function RightColumn({ publishStatus, setPublishStatus }) {
  const [faqs, setFaqs] = useState([]);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [featured, setFeatured] = useState(false);
  const slug = ""; // Mock slug for UI

  const metaTitleLength = metaTitle.length;
  const metaDescLength = metaDesc.length;

  const addFAQ = () => setFaqs([...faqs, { id: Date.now(), question: "", answer: "" }]);
  const updateFAQ = (id, field, value) => {
    setFaqs(faqs.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  };
  const removeFAQ = (id) => setFaqs(faqs.filter((f) => f.id !== id));

  return (
    <div className="space-y-5">
      {/* Blog Content */}
      <Card title="Blog Content">
        <RichEditor />
      </Card>

      {/* FAQ */}
      <Card title="Frequently Asked Questions">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-muted/30 border-b border-border">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">FAQ {index + 1}</span>
                <button onClick={() => removeFAQ(faq.id)} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <div className="p-3 space-y-2.5">
                <div>
                  <Label>Question</Label>
                  <Input
                    value={faq.question}
                    onChange={(v) => updateFAQ(faq.id, "question", v)}
                    placeholder="Enter the question..."
                  />
                </div>
                <div>
                  <Label>Answer</Label>
                  <Textarea
                    value={faq.answer}
                    onChange={(v) => updateFAQ(faq.id, "answer", v)}
                    placeholder="Enter the answer..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addFAQ}
            className="w-full flex items-center justify-center gap-2 h-9 text-xs font-medium text-primary border border-dashed border-primary/40 rounded-lg hover:bg-primary/5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add FAQ
          </button>
        </div>
      </Card>

      {/* SEO */}
      <Card title="SEO Settings">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label>Meta Title</Label>
              <span className={`text-xs font-medium tabular-nums ${metaTitleLength > 60 ? "text-destructive" : metaTitleLength > 50 ? "text-amber-500" : "text-muted-foreground"}`}>
                {metaTitleLength}/60
              </span>
            </div>
            <Input value={metaTitle} onChange={setMetaTitle} placeholder="SEO page title..." />
            <div className="mt-1.5 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${metaTitleLength > 60 ? "bg-destructive" : metaTitleLength > 50 ? "bg-amber-400" : "bg-green-500"}`}
                style={{ width: `${Math.min(100, (metaTitleLength / 60) * 100)}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label>Meta Description</Label>
              <span className={`text-xs font-medium tabular-nums ${metaDescLength > 160 ? "text-destructive" : metaDescLength > 140 ? "text-amber-500" : "text-muted-foreground"}`}>
                {metaDescLength}/160
              </span>
            </div>
            <Textarea value={metaDesc} onChange={setMetaDesc} placeholder="Brief description for search engine results..." rows={3} />
            <div className="mt-1.5 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${metaDescLength > 160 ? "bg-destructive" : metaDescLength > 140 ? "bg-amber-400" : "bg-green-500"}`}
                style={{ width: `${Math.min(100, (metaDescLength / 160) * 100)}%` }}
              />
            </div>
          </div>
          <div>
            <Label>Focus Keyword</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                className="w-full h-9 pl-8 pr-3 text-sm bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                placeholder="Primary keyword to optimize for..."
              />
            </div>
          </div>
          {/* Search preview */}
          <div className="p-3 bg-muted/40 border border-border rounded-lg">
            <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Search Preview</p>
            <p className="text-sm font-medium text-[#1a0dab] hover:underline cursor-pointer truncate">{metaTitle || "Page title"}</p>
            <p className="text-xs text-[#006621] mt-0.5">securxpert.com/blog/{slug || "post-slug"}</p>
            <p className="text-xs text-[#545454] mt-1 line-clamp-2 leading-relaxed">{metaDesc || "Meta description will appear here..."}</p>
          </div>
        </div>
      </Card>

      {/* Blog Settings */}
      <Card title="Blog Settings">
        <div className="space-y-4">
          <div>
            <Label>Publication Status</Label>
            <div className="flex gap-2 mt-2">
              {["draft", "published"].map((status) => (
                <button
                  key={status}
                  onClick={() => setPublishStatus(status)}
                  className={`flex-1 flex items-center justify-center gap-1.5 h-9 text-xs font-semibold rounded-lg border transition-all capitalize
                    ${publishStatus === status
                      ? status === "published"
                        ? "bg-green-50 border-green-300 text-green-700"
                        : "bg-amber-50 border-amber-300 text-amber-700"
                      : "bg-card border-border text-muted-foreground hover:bg-muted/50"
                    }`}
                >
                  {status === "draft" ? <FileText className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-1">
            <div className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${featured ? "bg-amber-50 border-amber-200" : "bg-muted/30 border-border"}`}
              onClick={() => setFeatured(!featured)}>
              <div className="flex items-center gap-2.5">
                <Star className={`w-4 h-4 ${featured ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} />
                <div>
                  <p className="text-sm font-medium text-foreground">Featured Post</p>
                  <p className="text-xs text-muted-foreground">Highlight this post on the homepage</p>
                </div>
              </div>
              <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${featured ? "bg-amber-400" : "bg-switch-background"}`}>
                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${featured ? "translate-x-4" : "translate-x-0.5"}`} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
