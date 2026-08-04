"use client";
import React, { useState, useEffect } from "react";
import { LogOut, FileText, Briefcase, Calendar, ChevronRight, BarChart3, Mail, Users, MonitorPlay, CalendarCheck } from "lucide-react";
import AnalyticsDashboard from "../analytics/AnalyticsDashboard";
import BlogDashboard from "./BlogDashboard";
import CareersDashboard from "./CareersDashboard";
import AppointmentDashboard from "./AppointmentDashboard";
import ContactDashboard from "../contact/ContactDashboard";
import JobApplicationDashboard from "./jobapplication";
import BlogsDemoDashboard from "./blogsdemo";
import BpoAppointmentDashboard from "./BpoAppointmentDashboard";

export default function AdminDashboard() {
  const [activeModule, setActiveModule] = useState("analytics");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedModule = localStorage.getItem("securxpert_active_module");
      if (savedModule) {
        setActiveModule(savedModule);
      }
    }
  }, []);

  const handleModuleChange = (id) => {
    setActiveModule(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("securxpert_active_module", id);
    }
  };

  if (!isMounted) {
    return <div className="h-screen bg-slate-50 flex overflow-hidden" />;
  }

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* Sidebar — fixed, full height */}
      <aside className="w-64 bg-[#210A4A] text-white flex flex-col shrink-0 fixed inset-y-0 left-0 z-30">
        <div className="p-6 border-b border-white/10">
          <img src="/securxpertslogo.png" alt="SecurXpert" className="h-9 w-auto object-contain brightness-0 invert" />
          <p className="text-xs text-slate-400 mt-2 font-medium">Admin Dashboard</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[{ id: "analytics", label: "Analytics", icon: BarChart3 }, { id: "appointments", label: "Appointments", icon: Calendar }, { id: "bpo_appointments", label: "BPO Appts", icon: CalendarCheck }, { id: "blogs", label: "Blogs", icon: FileText }, { id: "careers", label: "Careers", icon: Briefcase }, { id: "contact", label: "Contact", icon: Mail }, { id: "jobapps", label: "Job Apps", icon: Users }, { id: "blogsdemo", label: "Blogs Demo", icon: MonitorPlay }].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => handleModuleChange(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeModule === id ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
              <Icon className="w-4 h-4" />{label}
             
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
        {activeModule === "analytics" && <AnalyticsDashboard />}
        {activeModule === "blogs" && <BlogDashboard />}
        {activeModule === "careers" && <CareersDashboard />}
        {activeModule === "appointments" && <AppointmentDashboard />}
        {activeModule === "bpo_appointments" && <BpoAppointmentDashboard />}
        {activeModule === "contact" && <ContactDashboard />}
        {activeModule === "jobapps" && <JobApplicationDashboard />}
        {activeModule === "blogsdemo" && <BlogsDemoDashboard />}
      </main>
    </div>
  );
}
