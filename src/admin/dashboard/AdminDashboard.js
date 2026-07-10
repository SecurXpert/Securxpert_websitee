"use client";
import React, { useState } from "react";
import { LogOut, FileText, Briefcase, Calendar, ChevronRight } from "lucide-react";
import BlogDashboard from "./BlogDashboard";
import CareersDashboard from "./CareersDashboard";
import AppointmentDashboard from "./AppointmentDashboard";

export default function AdminDashboard() {
  const [activeModule, setActiveModule] = useState("blogs");

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar — fixed, full height */}
      <aside className="w-64 bg-[#210A4A] text-white flex flex-col shrink-0 fixed inset-y-0 left-0 z-30">
        <div className="p-6 border-b border-white/10">
          <img src="/securxpertslogo.png" alt="SecurXpert" className="h-9 w-auto object-contain brightness-0 invert" />
          <p className="text-xs text-slate-400 mt-2 font-medium">Admin Dashboard</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[{ id: "appointments", label: "Appointments", icon: Calendar }, { id: "blogs", label: "Blogs", icon: FileText }, { id: "careers", label: "Careers", icon: Briefcase }].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveModule(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeModule === id ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
              <Icon className="w-4 h-4" />{label}
              {activeModule === id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/admin" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-white/10 hover:text-white transition-all">
            <LogOut className="w-4 h-4" />Sign Out
          </a>
        </div>
      </aside>

      {/* Main area — offset by sidebar width */}
      <main className="flex-1 flex flex-col ml-64 h-screen overflow-hidden">
        {activeModule === "blogs" && <BlogDashboard />}
        {activeModule === "careers" && <CareersDashboard />}
        {activeModule === "appointments" && <AppointmentDashboard />}
      </main>
    </div>
  );
}
