"use client";

import React from "react";
import AdminBlogForm from "../../../admin/blogs/AdminBlogForm";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminBlogForm 
        onBack={() => router.push("/admin/dashboard")} 
        onPublish={() => router.push("/admin/dashboard")} 
      />
    </div>
  );
}
