import React from "react";
import { blogsData } from "@/utils/blogsData";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
    const staticSlugs = Object.keys(blogsData).map((slug) => ({
        slug: slug,
    }));

    try {
        const guestEmail = "guest_visitor_securxpert@gmail.com";
        const guestPassword = "VisitorPass123";

        const loginRes = await fetch("http://192.168.0.135:8000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: guestEmail, password: guestPassword }),
        });

        if (loginRes.ok) {
            const loginData = await loginRes.json();
            const token = loginData.access_token;

            if (token) {
                const listRes = await fetch("http://192.168.0.135:8000/blogs/", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (listRes.ok) {
                    const listData = await listRes.json();
                    const rawList = Array.isArray(listData) ? listData : (listData.data || []);
                    const dynamicSlugs = rawList
                        .filter((blog) => blog.slug)
                        .map((blog) => ({
                            slug: blog.slug,
                        }));

                    return [...staticSlugs, ...dynamicSlugs];
                }
            }
        }
    } catch (err) {
        console.error("Failed to fetch dynamic slugs for generateStaticParams:", err.message);
    }

    return staticSlugs;
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const staticBlog = blogsData[slug];

    return <BlogPostClient slug={slug} staticBlog={staticBlog} />;
}
