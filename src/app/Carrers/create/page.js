import React from "react";
import CreateJobPosting from "../../../Careers/CreateJobPosting";

export const metadata = {
  title: "Create Job Posting - SecurXpert",
  description: "Admin portal to create new job postings.",
};

export default function CreateJobPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <CreateJobPosting />
    </main>
  );
}
