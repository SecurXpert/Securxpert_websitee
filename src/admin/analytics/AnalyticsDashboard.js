"use client";
import React, { useState, useEffect } from "react";
import {
  Search, Bell, RefreshCw, BookOpen, CheckCircle2, Briefcase,
  Target, Users, Plus, Download
} from "lucide-react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../config";
import DashboardTables from "./DashboardTables";

export default function AnalyticsDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    total_blogs: 0,
    active_blogs: 0,
    total_jobs: 0,
    open_positions: 0,
    applications: 0
  });
  const [loading, setLoading] = useState(true);

  // Search/Filter states for Blogs
  const [searchBlogId, setSearchBlogId] = useState("");
  const [filterBlogDate, setFilterBlogDate] = useState("");
  const prevParams = React.useRef({ id: "", date: "" });

  const mapBlogItem = (b) => ({
    id: b.id,
    title: b.title || "Untitled",
    category: Array.isArray(b.category) ? b.category.join(", ") : (b.category || "Uncategorized"),
    author: b.author || "Admin",
    slug: b.slug || b.title?.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") || "",
    status: b.status || "Draft",
    statusColor: b.status?.toLowerCase() === "published" || b.status?.toLowerCase() === "active"
      ? "text-emerald-700 bg-emerald-50"
      : b.status?.toLowerCase() === "draft"
        ? "text-slate-600 bg-slate-100"
        : "text-amber-700 bg-amber-50",
    date: b.date || b.publish_date || (b.created_at ? new Date(b.created_at).toISOString().split("T")[0] : "N/A")
  });

  const fetchDashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("access_token");
    const headers = {
      "accept": "application/json",
      "ngrok-skip-browser-warning": "true",
      ...(token && { "Authorization": `Bearer ${token}` })
    };

    // 1. Fetch Analytics Dashboard Data
    try {
      const analyticsRes = await fetch(`${API_BASE_URL}dashboard/analytics`, { headers });
      if (analyticsRes.ok) {
        const resJson = await analyticsRes.json();
        if (resJson.success && resJson.data) {
          const d = resJson.data;
          setStats({
            total_blogs: d.total_blogs || 0,
            active_blogs: d.active_blogs || 0,
            total_jobs: d.total_jobs || 0,
            open_positions: d.open_positions || 0,
            applications: d.applications || 0
          });

          // Map recent blogs
          const rawBlogs = d.recent_blogs || [];
          const mappedBlogs = rawBlogs.map(mapBlogItem);
          setBlogs(mappedBlogs);

          // Map recent jobs
          const rawJobs = d.recent_jobs || [];
          const mappedJobs = rawJobs.map(j => ({
            id: j.id,
            title: j.title || "Untitled Position",
            dept: j.department || "General",
            deptColor: j.department?.toLowerCase().includes("engineer") || j.department?.toLowerCase().includes("tech")
              ? "text-purple-600 bg-purple-50"
              : j.department?.toLowerCase().includes("design")
                ? "text-pink-600 bg-pink-50"
                : "text-teal-600 bg-teal-50",
            loc: j.location || "Remote",
            status: j.status || "Draft",
            statusColor: j.status?.toLowerCase() === "open" || j.status?.toLowerCase() === "active" || j.status?.toLowerCase() === "published"
              ? "text-blue-600 border-blue-200 bg-blue-50"
              : "text-amber-600 border-amber-200 bg-amber-50",
            date: j.date || "N/A"
          }));
          setJobs(mappedJobs);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch analytics", err);
    }

    // 2. Fetch Job Applications
    try {
      const appsRes = await fetch(`${API_BASE_URL}job-applications/get_all_applications`, { headers });
      if (appsRes.ok) {
        const data = await appsRes.json();
        const fetchedApps = Array.isArray(data) ? data : (data?.data || []);
        setApplications(fetchedApps);
      }
    } catch (err) {
      console.warn("Failed to fetch applications", err);
    }

    setLoading(false);
  };

  const handleSearchBlogs = async () => {
    const trimmedId = searchBlogId ? searchBlogId.toString().trim() : "";
    const trimmedDate = filterBlogDate ? filterBlogDate.toString().trim() : "";

    if (!trimmedId && !trimmedDate) {
      fetchDashboardData();
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const headers = {
        "accept": "application/json",
        "ngrok-skip-browser-warning": "true",
        ...(token && { "Authorization": `Bearer ${token}` })
      };

      let successSearch = false;
      try {
        const params = new URLSearchParams();
        if (trimmedId) params.append("blog_id", trimmedId);
        if (trimmedDate) params.append("blog_date", trimmedDate);

        const res = await fetch(`${API_BASE_URL}dashboard/blogs/search?${params.toString()}`, { headers });
        if (res.ok) {
          const resJson = await res.json();
          if (resJson.success && Array.isArray(resJson.data)) {
            const mappedBlogs = resJson.data.map(mapBlogItem);
            setBlogs(mappedBlogs);
            successSearch = true;
          }
        }
      } catch (err) {
        console.warn("Search endpoint failed, falling back to local filtering:", err);
      }

      // If search endpoint failed or was rejected, fall back to fetching all /blogs/ and filtering locally
      if (!successSearch) {
        const res = await fetch(`${API_BASE_URL}blogs/`, { headers });
        if (res.ok) {
          const data = await res.json();
          const rawList = Array.isArray(data) ? data : (data?.data || []);

          console.log("[Search Debug] rawList count:", rawList.length);
          console.log("[Search Debug] rawList items:", rawList.map(b => ({ id: b.id, title: b.title })));
          console.log("[Search Debug] searching for:", { trimmedId, trimmedDate });

          const filtered = rawList.filter(b => {
            const matchesId = trimmedId ? b.id.toString().trim() === trimmedId : true;
            let matchesDate = true;
            if (trimmedDate) {
              const bDate = b.date || b.publish_date || (b.created_at ? new Date(b.created_at).toISOString().split("T")[0] : "");
              matchesDate = bDate.includes(trimmedDate);
            }
            return matchesId && matchesDate;
          });

          console.log("[Search Debug] filtered count:", filtered.length);
          setBlogs(filtered.map(mapBlogItem));
        } else {
          setBlogs([]);
        }
      }
    } catch (err) {
      console.warn("Failed to search blogs", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    const trimmedId = searchBlogId ? searchBlogId.toString().trim() : "";
    const trimmedDate = filterBlogDate ? filterBlogDate.toString().trim() : "";
    const prevId = prevParams.current.id ? prevParams.current.id.toString().trim() : "";
    const prevDate = prevParams.current.date ? prevParams.current.date.toString().trim() : "";

    // Skip initial run on mount or when parameters were already empty
    if (!trimmedId && !trimmedDate && !prevId && !prevDate) {
      return;
    }

    const delayDebounce = setTimeout(() => {
      prevParams.current = { id: trimmedId, date: trimmedDate };
      handleSearchBlogs();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchBlogId, filterBlogDate]);

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}blogs/${id}`, {
        method: "DELETE",
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        alert("Blog deleted successfully!");
        fetchDashboardData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteJob = async (id) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(`${API_BASE_URL}jobs/${id}`, {
        method: "DELETE",
        headers: {
          ...(token && { "Authorization": `Bearer ${token}` })
        }
      });
      if (res.ok) {
        alert("Job deleted successfully!");
        fetchDashboardData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const statsCards = [
    { label: "Total Blogs", value: loading ? "..." : stats.total_blogs.toString(), icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Active Blogs", value: loading ? "..." : stats.active_blogs.toString(), icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Total Jobs", value: loading ? "..." : stats.total_jobs.toString(), icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Open Positions", value: loading ? "..." : stats.open_positions.toString(), icon: Target, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Applications", value: loading ? "..." : stats.applications.toString(), icon: Users, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#FAFAFA]">
      {/* Top Header */}
      <header className="bg-white px-8 py-4 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div>
          <h1 className="text-[22px] font-bold text-[#1e293b]">Analytics Dashboard</h1>
          <p className="text-[13px] text-slate-500 font-medium mt-0.5">Welcome back, Admin <span role="img" aria-label="wave">👋</span></p>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-9 pr-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-full text-[13px] outline-none focus:border-blue-500 focus:bg-white transition-all w-[240px] text-slate-600 placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
          <button className="p-2.5 border border-slate-100 rounded-full text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button onClick={fetchDashboardData} className="p-2.5 border border-slate-100 rounded-full text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors" title="Refresh Data">
            <RefreshCw className="w-4 h-4" />
          </button>
          <div className="w-10 h-10 bg-[#5A45FF] rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm cursor-pointer ml-1 ring-4 ring-[#5A45FF]/10 hover:ring-[#5A45FF]/20 transition-all">
            AD
          </div>
        </div>
      </header>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">

        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statsCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-full ${card.bg} ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{card.value}</h3>
              <p className="text-[12px] text-slate-400 font-medium mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-[15px] font-bold text-slate-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onClick={() => router.push('/blogs/create')} className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-blue-50/50 hover:bg-blue-50 text-blue-600 transition-colors border border-blue-100/50 cursor-pointer">
              <Plus className="w-5 h-5" />
              <span className="text-[14px] font-semibold">Add Blog</span>
            </button>
            <button onClick={() => router.push('/careers/create')} className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-purple-50/50 hover:bg-purple-50 text-purple-600 transition-colors border border-purple-100/50 cursor-pointer">
              <Briefcase className="w-5 h-5" />
              <span className="text-[14px] font-semibold">Add Job</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 text-emerald-600 transition-colors border border-emerald-100/50 cursor-pointer">
              <Users className="w-5 h-5" />
              <span className="text-[14px] font-semibold">View Apps</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-amber-50/50 hover:bg-amber-50 text-amber-600 transition-colors border border-amber-100/50 cursor-pointer">
              <Download className="w-5 h-5" />
              <span className="text-[14px] font-semibold">Report</span>
            </button>
          </div>
        </div>

        {/* Dashboard Tables (Recent Blogs & Recent Jobs) */}
        <DashboardTables
          blogs={blogs}
          jobs={jobs}
          applications={applications}
          loading={loading}
          searchBlogId={searchBlogId}
          setSearchBlogId={setSearchBlogId}
          filterBlogDate={filterBlogDate}
          setFilterBlogDate={setFilterBlogDate}
          handleDeleteBlog={handleDeleteBlog}
          handleDeleteJob={handleDeleteJob}
        />

      </div>
    </div>
  );
}
