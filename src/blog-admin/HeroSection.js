import React, { useState } from "react";
import { Save } from "lucide-react";
import { Label, Input, UploadArea, StarIcon } from "./AdminCreateBlog";
import axios from "axios";

export default function HeroSection({ blogId }) {
  const [badgeText, setBadgeText] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [heroTitle, setHeroTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [heroBanner, setHeroBanner] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const [existingHeroBanner, setExistingHeroBanner] = useState("");
  const [existingAuthorImage, setExistingAuthorImage] = useState("");

  React.useEffect(() => {
    if (!blogId) return;

    const fetchHeroData = async () => {
      try {
        const token =
          localStorage.getItem("super_admin_token") ||
          localStorage.getItem("superadmin_token") ||
          localStorage.getItem("access_token") ||
          localStorage.getItem("token") ||
          "";

        console.log("HeroSection: Fetching hero details for ID:", blogId);
        const response = await axios.get(`http://192.168.0.128:8000/blogs/${blogId}/hero`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.data) {
          const data = response.data;
          if (data.badge_text) setBadgeText(data.badge_text);
          if (data.reading_time) setReadingTime(data.reading_time);
          if (data.hero_title) setHeroTitle(data.hero_title);
          if (data.short_description) setShortDescription(data.short_description);
          if (data.author_name) setAuthorName(data.author_name);
          if (data.hero_banner) setExistingHeroBanner(data.hero_banner);
          if (data.author_image) setExistingAuthorImage(data.author_image);
        }
      } catch (error) {
        console.log("No hero section found or failed to load:", error.message);
      }
    };

    fetchHeroData();
  }, [blogId]);

  const handleSubmit = async () => {
    if (!blogId) {
      alert("Please submit the Blog Information section first to generate a Blog ID.");
      return;
    }

    const formData = new FormData();
    formData.append("badge_text", badgeText);
    formData.append("reading_time", readingTime);
    formData.append("hero_title", heroTitle);
    formData.append("short_description", shortDescription);
    formData.append("author_name", authorName);
    if (heroBanner) {
      formData.append("hero_banner", heroBanner);
    }
    if (authorImage) {
      formData.append("author_image", authorImage);
    }

    try {
      const token =
        localStorage.getItem("super_admin_token") ||
        localStorage.getItem("superadmin_token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("token") ||
        "";

      const response = await axios.post(`http://192.168.0.128:8000/blogs/${blogId}/hero`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Hero Success response:", response.data);
      alert("Hero Section submitted successfully!");
    } catch (error) {
      console.error("Hero Submit error details:", error.response || error);
      const detail = error.response?.data?.detail;
      const status = error.response?.status;
      if (status === 403) {
        alert(`Forbidden (403): Your account does not have permission to create heroes. Please make sure you are logged in as a Super Admin/Admin.\n\nServer Response: ${JSON.stringify(error.response?.data || "No message body")}`);
      } else {
        alert("Failed to submit Hero Section: " + (detail || error.message));
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
        <StarIcon className="w-4 h-4 text-blue-500" />
        <h3 className="text-[13px] font-bold text-slate-800">Hero Section</h3>
      </div>
      <div className="p-6 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Badge Text</Label>
            <Input
              placeholder="Featured"
              value={badgeText}
              onChange={setBadgeText}
            />
          </div>
          <div>
            <Label>Reading Time</Label>
            <Input
              placeholder="8 min read"
              value={readingTime}
              onChange={setReadingTime}
            />
          </div>
        </div>
        <div>
          <Label>Hero Title</Label>
          <Input
            placeholder="Designing for Scale: A Modern Approach to Product Design"
            value={heroTitle}
            onChange={setHeroTitle}
          />
        </div>
        <div>
          <Label>Short Description</Label>
          <textarea
            rows={3}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="A brief description that hooks the reader..."
            className="w-full p-4 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label>Hero Banner</Label>
            {existingHeroBanner && (
              <div className="mb-2 relative w-full h-[100px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <img 
                  src={existingHeroBanner.startsWith("http") ? existingHeroBanner : `http://192.168.0.128:8000${existingHeroBanner}`} 
                  alt="Existing Hero Banner" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-white uppercase">Current Banner</div>
              </div>
            )}
            <UploadArea
              label="Upload Banner"
              sublabel="1200×630px recommended"
              onChange={(file) => setHeroBanner(file)}
            />
          </div>
          <div>
            <Label>Author Image</Label>
            {existingAuthorImage && (
              <div className="mb-2 relative w-full h-[100px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <img 
                  src={existingAuthorImage.startsWith("http") ? existingAuthorImage : `http://192.168.0.128:8000${existingAuthorImage}`} 
                  alt="Existing Author Photo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1 left-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-bold text-white uppercase">Current Author Photo</div>
              </div>
            )}
            <UploadArea
              label="Upload Author Photo"
              sublabel="80×80px recommended"
              onChange={(file) => setAuthorImage(file)}
            />
          </div>
        </div>
        <div>
          <Label>Author Name</Label>
          <Input
            placeholder="Sarah Chen"
            value={authorName}
            onChange={setAuthorName}
          />
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
