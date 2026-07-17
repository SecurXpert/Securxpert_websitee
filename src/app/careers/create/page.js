"use client";

import React from "react";
import CreateJobPosting from "../../../admin/carrers/CreateJobPosting";
import { useRouter } from "next/navigation";

export default function CreateJobPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <CreateJobPosting 
        onCancel={() => router.push("/admin/dashboard")} 
        onSave={() => router.push("/admin/dashboard")} 
      />
    </div>
  );
}
