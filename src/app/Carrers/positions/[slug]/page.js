import React from "react";
import { notFound } from "next/navigation";
import { positionsData, slugify } from "./positionsData";
import JobDetailClient from "./JobDetailClient";

export async function generateStaticParams() {
  return positionsData.map((pos) => ({
    slug: slugify(pos.title),
  }));
}

export default async function JobDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const position = positionsData.find((pos) => slugify(pos.title) === slug);
  
  if (!position) {
    notFound();
  }

  // Get other related positions
  const relatedPositions = positionsData
    .filter((pos) => pos.id !== position.id)
    .slice(0, 5);

  return (
    <JobDetailClient
      position={position}
      relatedPositions={relatedPositions}
    />
  );
}
