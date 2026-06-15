import React from "react";
import { AdminCreateJob } from "../../../Blogs/AdminCreateJob";

export const metadata = {
  title: "Create Blog - SecurXpert",
  description: "Admin portal to create new blogs.",
};

export default function CreateBlogPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <AdminCreateJob />
    </main>
  );
}
