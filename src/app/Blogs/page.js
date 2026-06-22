import React from "react";
import Hero from "./Hero";
import Posts from "./Posts";
import AllPosts from "./AllPosts";

export const metadata = {
    title: "SecurXpert Blog | Software, Cloud, AI & Cybersecurity Insights ",
    description: "Practical insights on software development, cloud infrastructure, AI automation, and cybersecurity from the SecurXpert team — for founders, CTOs, and IT leaders.",
    keywords: ["Cyber Security Blogs", "AI Insights", "Web Development Trends", "Cloud Security", "SecurXpert Articles"],
};

export default function Blogs() {
    return (
        <div>
            <Hero />
            <AllPosts />
        </div>
    );
}

