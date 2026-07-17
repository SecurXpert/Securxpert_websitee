"use client";
import React from "react";
import { 
  Search, Bell, RefreshCw, BookOpen, CheckCircle2, Briefcase, 
  Target, Globe, Users, Plus, Download, Filter, Eye, Trash2, TrendingUp, TrendingDown 
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AnalyticsDashboard() {
  const router = useRouter();
  const statsCards = [
    { label: "Total Blogs", value: "25", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50", trend: "+12%", trendUp: true },
    { label: "Active Blogs", value: "18", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", trend: "+8%", trendUp: true },
    { label: "Total Jobs", value: "12", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50", trend: "+4%", trendUp: true },
    { label: "Open Positions", value: "8", icon: Target, color: "text-amber-500", bg: "bg-amber-50", trend: "-2%", trendUp: false },
    { label: "Website Visitors", value: "18.2K", icon: Globe, color: "text-teal-500", bg: "bg-teal-50", trend: "+21%", trendUp: true },
    { label: "Applications", value: "436", icon: Users, color: "text-rose-500", bg: "bg-rose-50", trend: "+34%", trendUp: true },
  ];

  const recentBlogs = [
    { title: "Zero Trust Architecture in 2025", category: "Security", author: "Rahul Mehta", views: "4.2K", status: "Published", date: "Jul 6, 2026", statusColor: "text-emerald-700 bg-emerald-50" },
    { title: "Kubernetes Security Hardening", category: "DevOps", author: "Priya Sharma", views: "3.8K", status: "Published", date: "Jul 4, 2026", statusColor: "text-emerald-700 bg-emerald-50" },
    { title: "AI-Driven Threat Detection", category: "AI & ML", author: "Aditya Kumar", views: "2.9K", status: "Draft", date: "Jul 2, 2026", statusColor: "text-slate-600 bg-slate-100" },
    { title: "Cloud Security Best Practices", category: "Technology", author: "Sneha Patel", views: "5.1K", status: "Published", date: "Jun 28, 2026", statusColor: "text-emerald-700 bg-emerald-50" },
    { title: "SIEM Tools Comparison 2026", category: "Security", author: "Rahul Mehta", views: "1.7K", status: "Review", date: "Jun 25, 2026", statusColor: "text-amber-700 bg-amber-50" },
  ];

  const recentJobs = [
    { title: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote", apps: "42", status: "Open", date: "Jul 5, 2026", deptColor: "text-purple-600 bg-purple-50", statusColor: "text-blue-600 border-blue-200 bg-blue-50" },
    { title: "Backend Developer (Node.js)", dept: "Engineering", loc: "Bangalore", apps: "31", status: "Open", date: "Jul 3, 2026", deptColor: "text-purple-600 bg-purple-50", statusColor: "text-blue-600 border-blue-200 bg-blue-50" },
    { title: "UI/UX Designer", dept: "Design", loc: "Mumbai", apps: "27", status: "Open", date: "Jul 1, 2026", deptColor: "text-pink-600 bg-pink-50", statusColor: "text-blue-600 border-blue-200 bg-blue-50" },
    { title: "DevOps Engineer", dept: "Infrastructure", loc: "Remote", apps: "19", status: "In Review", date: "Jun 29, 2026", deptColor: "text-indigo-600 bg-indigo-50", statusColor: "text-amber-600 border-amber-200 bg-amber-50" },
    { title: "Cybersecurity Analyst", dept: "Security", loc: "Delhi", apps: "38", status: "Open", date: "Jun 27, 2026", deptColor: "text-teal-600 bg-teal-50", statusColor: "text-blue-600 border-blue-200 bg-blue-50" },
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
          <button className="p-2.5 border border-slate-100 rounded-full text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statsCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-9 h-9 rounded-full ${card.bg} ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-4 h-4" />
                </div>
                <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full ${card.trendUp ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                  {card.trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {card.trend}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{card.value}</h3>
              <p className="text-[12px] text-slate-400 font-medium mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Middle Section (Actions, Stats, Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => router.push('/blogs/create')} className="flex flex-col items-center justify-center gap-2 py-5 rounded-xl bg-blue-50/50 hover:bg-blue-50 text-blue-600 transition-colors border border-blue-100/50">
                  <Plus className="w-5 h-5" />
                  <span className="text-[13px] font-semibold">Add Blog</span>
                </button>
                <button onClick={() => router.push('/careers/create')} className="flex flex-col items-center justify-center gap-2 py-5 rounded-xl bg-purple-50/50 hover:bg-purple-50 text-purple-600 transition-colors border border-purple-100/50">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-[13px] font-semibold">Add Job</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 py-5 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 text-emerald-600 transition-colors border border-emerald-100/50">
                  <Users className="w-5 h-5" />
                  <span className="text-[13px] font-semibold">View Apps</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 py-5 rounded-xl bg-amber-50/50 hover:bg-amber-50 text-amber-600 transition-colors border border-amber-100/50">
                  <Download className="w-5 h-5" />
                  <span className="text-[13px] font-semibold">Report</span>
                </button>
              </div>
            </div>

            {/* Website Statistics */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-5">Website Statistics</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] text-slate-500 font-medium">Today</span>
                    <span className="text-[13px] font-bold text-slate-700">1,284</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] text-slate-500 font-medium">This Week</span>
                    <span className="text-[13px] font-bold text-slate-700">8,940</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] text-slate-500 font-medium">This Month</span>
                    <span className="text-[13px] font-bold text-slate-700">18,200</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
            <h3 className="text-[15px] font-bold text-slate-800">Monthly Website Traffic</h3>
            <p className="text-[13px] text-slate-400 mt-1 mb-6 font-medium">Unique visitors per month</p>
            <div className="flex-1 relative w-full h-[280px]">
              {/* Fake Chart Grid */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[20, 15, 10, 5, 0].map(val => (
                  <div key={val} className="w-full border-t border-slate-100 border-dashed relative">
                    <span className="absolute -left-5 -top-2.5 text-[11px] text-slate-400">{val}k</span>
                  </div>
                ))}
              </div>
              {/* Fake X Axis labels */}
              <div className="absolute bottom-[-24px] left-8 right-0 flex justify-between text-[11px] text-slate-400">
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
              {/* CSS Only SVG Wave Chart mimicking image */}
              <div className="absolute inset-0 left-8 right-4 bottom-0 top-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                  <path 
                    d="M 0,160 C 50,140 100,140 150,145 C 200,150 250,155 300,130 C 350,105 400,115 450,135 C 500,155 550,145 600,110 C 650,75 700,90 750,100 C 800,110 850,85 900,90 C 950,95 980,85 1000,70"
                    fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
                  />
                  {/* Subtle Gradient fill under line */}
                  <path 
                    d="M 0,160 C 50,140 100,140 150,145 C 200,150 250,155 300,130 C 350,105 400,115 450,135 C 500,155 550,145 600,110 C 650,75 700,90 750,100 C 800,110 850,85 900,90 C 950,95 980,85 1000,70 L 1000,200 L 0,200 Z"
                    fill="url(#chartGrad)" opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Blogs Table */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
            <div>
              <h3 className="text-[15px] font-bold text-slate-800">Recent Blogs</h3>
              <p className="text-[12px] text-slate-400 mt-0.5">Latest blog posts and their status</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-full text-slate-600 text-[12px] font-medium hover:bg-slate-50 transition-colors">
                <Filter className="w-3.5 h-3.5" /> Filter
              </button>
              <button onClick={() => router.push('/blogs/create')} className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-full text-[12px] font-semibold hover:bg-blue-700 transition-colors">
                <Plus className="w-3.5 h-3.5" /> Add Blog
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Views</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-700 font-medium">
                {recentBlogs.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{b.title}</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">{b.category}</span></td>
                    <td className="px-6 py-4">{b.author}</td>
                    <td className="px-6 py-4 text-slate-500 text-[12px] flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-slate-300"/> {b.views}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${b.statusColor}`}>{b.status}</span></td>
                    <td className="px-6 py-4 text-slate-400 text-[12px]">{b.date}</td>
                    <td className="px-6 py-4 flex gap-2">
                       <button className="text-slate-400 hover:text-blue-600 transition-colors"><Eye className="w-4 h-4" /></button>
                       <button className="text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
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
              <thead className="bg-slate-50 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
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
                {recentJobs.map((j, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{j.title}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${j.deptColor}`}>{j.dept}</span></td>
                    <td className="px-6 py-4 text-slate-500 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-slate-300"/> {j.loc}</td>
                    <td className="px-6 py-4 text-slate-500 text-[12px]"><Users className="w-3.5 h-3.5 text-slate-300 inline mr-1.5 -mt-0.5"/> {j.apps}</td>
                    <td className="px-6 py-4"><span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${j.statusColor}`}>{j.status}</span></td>
                    <td className="px-6 py-4 text-slate-400 text-[12px]">{j.date}</td>
                    <td className="px-6 py-4 flex gap-2">
                       <button className="text-slate-400 hover:text-blue-600 transition-colors"><Eye className="w-4 h-4" /></button>
                       <button className="text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
