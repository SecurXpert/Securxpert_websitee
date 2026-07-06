import React from "react";
import { ChevronUp, ChevronDown, Copy, Trash2, Plus, ArrowRight, Save } from "lucide-react";
import { Label, Input, UploadArea, DragHandle, IconButton } from "./AdminCreateBlog";
import axios from "axios";

export default function ContentBuilderSection({
  sections,
  setSections,
  addSection,
  removeSection,
  addDescriptionBlock,
  removeDescriptionBlock,
  updateSectionImagePosition,
  blogId
}) {
  React.useEffect(() => {
    if (!blogId) return;

    const fetchSections = async () => {
      try {
        const token =
          localStorage.getItem("super_admin_token") ||
          localStorage.getItem("superadmin_token") ||
          localStorage.getItem("access_token") ||
          localStorage.getItem("token") ||
          "";

        console.log("ContentBuilderSection: Fetching sections list for blog:", blogId);

        const foundSections = [];
        const maxScanId = Math.max(100, Number(blogId) * 5 + 30);
        const sectionPromises = [];

        for (let id = 1; id <= maxScanId; id++) {
          sectionPromises.push(
            axios.get(`http://192.168.0.128:8000/blogs/sections/${id}`, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
              .then(res => {
                const resData = res.data;
                const sec = resData?.data || resData;
                if (sec && Number(sec.blog_post_id) === Number(blogId)) {
                  foundSections.push(sec);
                }
              })
              .catch(() => {
                // Ignore non-existent sections
              })
          );
        }

        await Promise.all(sectionPromises);
        foundSections.sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0) || a.id - b.id);

        const seenIds = new Set();
        const uniqueById = foundSections.filter(sec => {
          if (!sec.id) return true;
          if (seenIds.has(sec.id)) return false;
          seenIds.add(sec.id);
          return true;
        });

        const seenTitles = new Set();
        const uniqueSections = [];
        for (const sec of uniqueById) {
          const title = (sec.section_title || "").trim().toLowerCase();
          if (title) {
            if (seenTitles.has(title)) continue;
            seenTitles.add(title);
          }
          uniqueSections.push(sec);
        }

        const mapped = uniqueSections.map((sec, idx) => {
          return {
            id: sec.id || (idx + 1),
            title: sec.section_title || "",
            imageAltText: sec.image_alt_text || "",
            imageCaption: sec.image_caption || "",
            imagePosition: sec.image_position === "full_width" ? "full" : (sec.image_position || "full"),
            descriptionBlocks: [sec.id ? `desc-${sec.id}` : Date.now() + idx],
            existingDescription: sec.description || "",
            existingImage: sec.section_image || sec.section_image_url || null
          };
        });

        if (mapped.length > 0) {
          setSections(mapped);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [blogId]);

  React.useEffect(() => {
    sections.forEach(sec => {
      sec.descriptionBlocks.forEach(blockId => {
        const el = document.getElementById(`editor-${blockId}`);
        if (el && sec.existingDescription && el.innerHTML === "") {
          el.innerHTML = sec.existingDescription;
        }
      });
    });
  }, [sections]);

  const handleSaveSection = async (section, index) => {
    if (!blogId) {
      alert("Please submit the Blog Information section first to generate a Blog ID.");
      return;
    }

    const formData = new FormData();
    formData.append("order_index", index);
    formData.append("section_title", section.title || "Untitled Section");
    formData.append("image_alt_text", section.imageAltText || "");
    formData.append("image_caption", section.imageCaption || "");

    const finalImagePosition = section.imagePosition === "full" ? "full_width" : (section.imagePosition || "full_width");
    formData.append("image_position", finalImagePosition);

    if (section.sectionImage) {
      formData.append("section_image", section.sectionImage);
    }

    // Retrieve rich text block content
    const descriptionHtml = section.descriptionBlocks
      .map(blockId => {
        const el = document.getElementById(`editor-${blockId}`);
        return el ? el.innerHTML : "";
      })
      .filter(html => html.trim() !== "")
      .join("\n");

    formData.append("description", descriptionHtml);

    try {
      const token =
        localStorage.getItem("super_admin_token") ||
        localStorage.getItem("superadmin_token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("token") ||
        "";

      const response = await axios.post(`http://192.168.0.128:8000/blogs/${blogId}/sections`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Section Success response:", response.data);
      alert(`Section "${section.title || `Section ${index + 1}`}" submitted successfully!`);
    } catch (error) {
      console.error("Section Submit error details:", error.response || error);
      const detail = error.response?.data?.detail;
      const status = error.response?.status;
      if (status === 403) {
        alert(`Forbidden (403): Your account does not have permission to create sections. Please make sure you are logged in as a Super Admin/Admin.\n\nServer Response: ${JSON.stringify(error.response?.data || "No message body")}`);
      } else {
        const errorMsg = typeof detail === "object" ? JSON.stringify(detail, null, 2) : (detail || error.message);
        alert(`Failed to submit Section "${section.title || `Section ${index + 1}`}": ` + errorMsg);
      }
    }
  };

  return (
    <div className="mt-4 font-sans">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <div className="w-4 h-4 rounded-[4px] border-2 border-blue-600 relative">
            <div className="absolute inset-[2px] bg-blue-600 rounded-[1px]"></div>
          </div>
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">Content Builder</h3>
          <p className="text-xs text-slate-500">{sections.length} section{sections.length > 1 ? "s" : ""} — drag to reorder</p>
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Section Header */}
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <DragHandle />
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                  {index + 1}
                </div>
                <input
                  value={section.title}
                  onChange={(e) => setSections(sections.map(s => s.id === section.id ? { ...s, title: e.target.value } : s))}
                  className="text-[13px] font-bold text-slate-800 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500/20 rounded px-1 -ml-1"
                />
              </div>
              <div className="flex items-center gap-1">
                <IconButton><ChevronUp className="w-3.5 h-3.5" /></IconButton>
                <IconButton><ChevronDown className="w-3.5 h-3.5" /></IconButton>
                <div className="w-px h-4 bg-slate-200 mx-1"></div>
                <IconButton><Copy className="w-3.5 h-3.5" /></IconButton>
                {sections.length > 1 && (
                  <button
                    onClick={() => removeSection(section.id)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <div className="w-px h-4 bg-slate-200 mx-1"></div>
                <IconButton><ChevronUp className="w-4 h-4" /></IconButton>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-6">
              {/* Rich Text Blocks */}
              {section.descriptionBlocks.map((blockId, idx) => (
                <div key={blockId} className="relative">
                  <Label>Rich Text Description {idx > 0 ? ` ${idx + 1}` : ""}</Label>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    {/* Toolbar */}
                    <div className="px-3 py-2 border-b border-slate-200 flex items-center justify-between bg-white">
                      <div className="flex items-center gap-1">
                        {["B", "I", "U", "H2", "H3", "Link", "List"].map((tool) => (
                          <button
                            key={tool}
                            onClick={(e) => {
                              e.preventDefault();
                              const editor = document.getElementById(`editor-${blockId}`);
                              if (!editor) return;

                              editor.focus();

                              switch (tool) {
                                case "B": document.execCommand("bold", false, null); break;
                                case "I": document.execCommand("italic", false, null); break;
                                case "U": document.execCommand("underline", false, null); break;
                                case "H2": document.execCommand("formatBlock", false, "H2"); break;
                                case "H3": document.execCommand("formatBlock", false, "H3"); break;
                                case "Link":
                                  const url = prompt("Enter URL:");
                                  if (url) document.execCommand("createLink", false, url);
                                  break;
                                case "List": document.execCommand("insertUnorderedList", false, null); break;
                              }
                            }}
                            className="px-2.5 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                          >
                            {tool}
                          </button>
                        ))}
                      </div>
                      {section.descriptionBlocks.length > 1 && (
                        <button
                          onClick={() => removeDescriptionBlock(section.id, blockId)}
                          className="p-1 text-slate-400 hover:text-red-500 rounded-md transition-colors"
                          title="Remove Block"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div
                      id={`editor-${blockId}`}
                      contentEditable
                      suppressContentEditableWarning={true}
                      className="w-full min-h-[120px] p-4 text-sm bg-transparent outline-none text-slate-800 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2 [&_li]:mb-1 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-2 [&_a]:text-blue-600 [&_a]:underline"
                      data-placeholder="Write your section content here..."
                    />
                  </div>
                </div>
              ))}

              {/* Add Extra Content Block Button */}
              <button
                onClick={() => addDescriptionBlock(section.id)}
                className="self-start px-3 py-1.5 flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
              >
                <Plus className="w-3.5 h-3.5" /> Add Description Block
              </button>

              {/* Image Upload */}
              <div>
                <Label>Section Image</Label>
                {section.existingImage && (
                  <div className="mb-2 relative w-full max-w-[200px] h-[100px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                      src={section.existingImage.startsWith("http") ? section.existingImage : `http://192.168.0.128:8000${section.existingImage}`}
                      alt="Existing section image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-white uppercase">Current Image</div>
                  </div>
                )}
                <UploadArea
                  label="Upload Image"
                  sublabel="PNG, JPG, WebP — max 5MB"
                  onChange={(file) => setSections(sections.map(s => s.id === section.id ? { ...s, sectionImage: file } : s))}
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label>Image Alt Text</Label>
                  <Input
                    placeholder="Describe the image for accessibility..."
                    value={section.imageAltText || ""}
                    onChange={(val) => setSections(sections.map(s => s.id === section.id ? { ...s, imageAltText: val } : s))}
                  />
                </div>
                <div>
                  <Label>Image Caption</Label>
                  <Input
                    placeholder="Optional caption text..."
                    value={section.imageCaption || ""}
                    onChange={(val) => setSections(sections.map(s => s.id === section.id ? { ...s, imageCaption: val } : s))}
                  />
                </div>
              </div>

              {/* Image Position */}
              <div>
                <Label>Image Position</Label>
                <div className="flex bg-slate-100 p-1 rounded-xl h-10 w-full">
                  <button
                    onClick={() => updateSectionImagePosition(section.id, "left")}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-semibold transition-colors rounded-lg ${section.imagePosition === "left" ? "text-blue-600 bg-white shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <span className="w-3 h-2.5 border-2 border-current rounded-[2px] opacity-70"></span> Left
                  </button>
                  <button
                    onClick={() => updateSectionImagePosition(section.id, "right")}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-semibold transition-colors rounded-lg ${section.imagePosition === "right" ? "text-blue-600 bg-white shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <span className="w-3 h-2.5 border-2 border-current rounded-[2px] opacity-70"></span> Right
                  </button>
                  <button
                    onClick={() => updateSectionImagePosition(section.id, "full")}
                    className={`flex-1 flex items-center justify-center gap-2 text-xs font-semibold transition-colors rounded-lg ${section.imagePosition === "full" ? "text-blue-600 bg-white shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <ArrowRight className="w-3 h-3 rotate-45" /> Full Width
                  </button>
                </div>
              </div>

            </div>
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button onClick={() => handleSaveSection(section, index)} className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-sm font-bold text-slate-700 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Save Section
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Global Add Section */}
      <button
        onClick={() => addSection()}
        className="w-full mt-6 py-4 border border-dashed border-blue-300 bg-blue-50/50 rounded-2xl text-[13px] font-bold text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add New Section
      </button>
    </div>
  );
}
