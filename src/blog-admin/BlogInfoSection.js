import React from "react";
import { FileText, Save } from "lucide-react";
import { Label, Input } from "./AdminCreateBlog";
import axios from "axios";

export default function BlogInfoSection({
  blogId,
  blogTitle,
  handleTitleChange,
  slug,
  category,
  setCategory,
  author,
  setAuthor,
  status,
  setStatus,
  publishDate,
  setPublishDate,
  onSuccess
}) {
  React.useEffect(() => {
    if (!blogId) return;

    const fetchBlogInfo = async () => {
      try {
        const token = 
          localStorage.getItem("super_admin_token") ||                  
          localStorage.getItem("superadmin_token") || 
          localStorage.getItem("access_token") ||  
          localStorage.getItem("token") || 
          "";

        console.log("BlogInfoSection: Fetching blog details for ID:", blogId);
        const response = await axios.get(`http://192.168.0.128:8000/blogs/${blogId}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = response.data;
        if (data) {
          if (data.title) handleTitleChange(data.title);
          if (data.category) setCategory(data.category);
          if (data.author) setAuthor(data.author);
          if (data.status) setStatus(data.status);
          if (data.publish_date) setPublishDate(data.publish_date);
        }
      } catch (error) {
        console.error("Error fetching blog info:", error);
      }
    };

    fetchBlogInfo();
  }, [blogId]);

  const handleSubmit = async () => {
    const params = new URLSearchParams();
    params.append("title", blogTitle);
    params.append("slug", slug);
    if (category) params.append("category", category);
    if (author) params.append("author", author);
    if (status) params.append("status", status);

    try {
      const token = 
        localStorage.getItem("super_admin_token") ||                  
        localStorage.getItem("superadmin_token") || 
        localStorage.getItem("access_token") ||  
        localStorage.getItem("token") || 
        "";

      const response = await axios.post("http://192.168.0.128:8000/blogs/", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Success response:", response.data);
      alert("Blog Information submitted successfully!");

      let createdId = null;
      if (response.data) {
        if (response.data.id) {
          createdId = response.data.id;
        } else if (response.data.data && response.data.data.id) {
          createdId = response.data.data.id;
        } else if (Array.isArray(response.data.data) && response.data.data.length > 0 && response.data.data[0].id) {
          createdId = response.data.data[0].id;
        } else if (response.data.blog && response.data.blog.id) {
          createdId = response.data.blog.id;
        }
      }
      
      if (createdId && onSuccess) {
        onSuccess(createdId);
      }
    } catch (error) {
      console.error("Submit error details:", error.response || error);
      const detail = error.response?.data?.detail;
      const status = error.response?.status;
      if (status === 403) {
        alert(`Forbidden (403): Your account does not have permission to create blogs. Please make sure you are logged in as a Super Admin/Admin.\n\nServer Response: ${JSON.stringify(error.response?.data || "No message body")}`);
      } else {
        alert("Failed to submit Blog Information: " + (detail || error.message));
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-500" />
        <h3 className="text-[13px] font-bold text-slate-800">Blog Information</h3>
      </div>
      <div className="p-6 flex flex-col gap-5">
        <div>
          <Label>Blog Title</Label>
          <Input
            placeholder="Designing for Scale: A Modern Approach"
            value={blogTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <Label>Slug</Label>
          <input
            placeholder="designing-for-scale-modern-approach"
            className="w-full h-10 px-4 text-xs font-mono bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed focus:outline-none"
            value={slug}
            readOnly
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Category</Label>
            <Input placeholder="Tech" value={category} onChange={setCategory} />
          </div>
          <div>
            <Label>Author</Label>
            <Input placeholder="Sarah Chen" value={author} onChange={setAuthor} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Status</Label>
            <Input placeholder="active" value={status} onChange={setStatus} />
          </div>
          <div>
            <Label>Publish Date</Label>
            <Input placeholder="YYYY-MM-DD" value={publishDate} onChange={setPublishDate} />
          </div>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
        <button onClick={handleSubmit} className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-sm font-bold text-slate-700 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
          <Save className="w-4 h-4" /> Save Section
        </button>
      </div>
    </div>
  );
}
