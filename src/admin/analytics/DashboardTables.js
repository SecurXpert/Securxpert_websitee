"use client";
import React from "react";
import { Search, Plus, Trash2, Filter, Globe, Users, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardTables({
  blogs,
  jobs,
  applications,
  loading,
  searchBlogId,
  setSearchBlogId,
  filterBlogDate,
  setFilterBlogDate,
  handleDeleteBlog,
  handleDeleteJob
}) {
  const router = useRouter();

  const recentBlogs = blogs.slice(0, 5);
  const recentJobs = jobs.slice(0, 5).map(j => {
    const appsCount = applications.filter(app => app.job_title === j.title).length;
    return { ...j, apps: appsCount.toString() };
  });

  return (
    <>
      {/* Recent Blogs Table */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100 flex-wrap gap-4">
          <div>
            <h3 className="text-[15px] font-bold text-slate-800">Recent Blogs</h3>
            <p className="text-[12px] text-slate-400 mt-0.5">Latest blog posts and their status</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {/* Blog ID Search Input */}
            <div className="relative">
              <input
                type="number"
                placeholder="Search by Blog ID..."
                value={searchBlogId}
                onChange={(e) => setSearchBlogId(e.target.value)}
                className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-full text-[12px] font-medium outline-none focus:border-blue-500 bg-white text-slate-700 w-44 placeholder:text-slate-400"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Date Filter Input */}
            <input
              type="date"
              value={filterBlogDate}
              onChange={(e) => setFilterBlogDate(e.target.value)}
              className="px-3 py-1.5 border border-slate-200 rounded-full text-[12px] font-medium outline-none focus:border-blue-500 bg-white text-slate-700"
            />

            {/* Add Blog Button */}
            <button onClick={() => router.push('/blogs/create')} className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-full text-[12px] font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
              <Plus className="w-3.5 h-3.5" /> Add Blog
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Blog ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-slate-700 font-medium">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-500">#{b.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800 max-w-[280px] truncate" title={b.title}>{b.title}</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">{b.category}</span></td>
                    <td className="px-6 py-4">{b.author}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${b.statusColor}`}>{b.status}</span></td>
                    <td className="px-6 py-4 text-slate-400 text-[12px]">{b.date}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button onClick={() => handleDeleteBlog(b.id)} className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete Blog"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-400 font-medium">
                    {loading ? "Loading blogs..." : "No recent blogs found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Jobs Table */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
          <div>
            <h3 className="text-[15px] font-bold text-slate-800">Recent Jobs</h3>
            <p className="text-[12px] text-slate-400 mt-0.5">Active job listings and application counts</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-full text-slate-600 text-[12px] font-medium hover:bg-slate-50 transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            <button onClick={() => router.push('/careers/create')} className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8A2BE2] text-white rounded-full text-[12px] font-semibold hover:bg-[#7a22d2] transition-colors">
              <Plus className="w-3.5 h-3.5" /> Post Job
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Applications</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-slate-700 font-medium">
              {recentJobs.length > 0 ? (
                recentJobs.map((j, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800 max-w-[280px] truncate" title={j.title}>{j.title}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${j.deptColor}`}>{j.dept}</span></td>
                    <td className="px-6 py-4 text-slate-500 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-300" /> {j.loc}</td>
                    <td className="px-6 py-4 text-slate-500 text-[12px]"><Users className="w-3.5 h-3.5 text-slate-300 inline mr-1.5 -mt-0.5" /> {j.apps}</td>
                    <td className="px-6 py-4"><span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${j.statusColor}`}>{j.status}</span></td>
                    <td className="px-6 py-4 text-slate-400 text-[12px]">{j.date}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button onClick={() => window.open(`/careers`, '_blank')} className="text-slate-400 hover:text-blue-600 transition-colors" title="View Career"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteJob(j.id)} className="text-slate-400 hover:text-red-500 transition-colors" title="Delete Job"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-400 font-medium">
                    {loading ? "Loading jobs..." : "No recent jobs found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
