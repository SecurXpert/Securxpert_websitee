import React from "react";
import JobDetailClient from "./JobDetailClient";
import axios from "axios";

const slugify = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';

// Generate static routes for the export build
export async function generateStaticParams() {
  try {
    // Attempt to authenticate and fetch active jobs for static generation
    const guestEmail = "guest_visitor_securxpert@gmail.com";
    const guestPassword = "VisitorPass123";
    
    const loginRes = await axios.post('https://poise-crouch-plating.ngrok-free.dev/auth/login', {
      email: guestEmail,
      password: guestPassword
    }, { headers: { "ngrok-skip-browser-warning": "true" } });
    
    if (loginRes.status === 200) {
      const token = loginRes.data?.access_token;
      
      const jobsRes = await axios.get("https://poise-crouch-plating.ngrok-free.dev/jobs/", {
        headers: { "Authorization": `Bearer ${token}`, "ngrok-skip-browser-warning": "true" }
      });
      
      if (jobsRes.status === 200) {
        const rawList = Array.isArray(jobsRes.data) ? jobsRes.data : (jobsRes.data?.data || []);
        const activeJobs = rawList.filter(j => j.job_status?.toLowerCase() === "active" || j.job_status?.toLowerCase() === "published");
        
        // Return dynamic slugs
        if (activeJobs.length > 0) {
          return activeJobs.map(job => ({ slug: slugify(job.job_title) }));
        }
      }
    }
  } catch (e) {
    console.error("generateStaticParams failed to fetch API jobs:", e.message);
  }

  // Fallback to commonly created test slugs so development doesn't crash on these paths
  return [
    { slug: "test-engineer" },
    { slug: "software-engineer" },
    { slug: "full-stack-developer" },
    { slug: "frontend-developer" },
    { slug: "backend-developer" },
    { slug: "qa-automation-engineer" },
    { slug: "product-manager" }
  ];
}

export default async function PositionDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";

  return <JobDetailClient slug={slug} />;
}
