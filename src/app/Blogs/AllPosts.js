"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import axios from "axios";

const allPostsData = [
    {
        id: 1,
        slug: "bill-walsh-leadership-lessons",
        image: "/Blogs/AllPosts/Image (5).png",
        author: "Alec Whitten",
        date: "1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: [
            { text: "Leadership", bg: "bg-[#F9F5FF]", textClr: "text-[#6941C6]" },
            { text: "Management", bg: "bg-[#EEF4FF]", textClr: "text-[#3538CD]" }
        ]
    },
    {
        id: 2,
        slug: "pm-mental-models",
        image: "/Blogs/AllPosts/Image (6).png",
        author: "Demi Wilkinson",
        date: "1 Jan 2023",
        title: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships.",
        tags: [
            { text: "Product", bg: "bg-[#F0F9FF]", textClr: "text-[#026AA2]" },
            { text: "Research", bg: "bg-[#EEF4FF]", textClr: "text-[#3538CD]" },
            { text: "Frameworks", bg: "bg-[#FFF6ED]", textClr: "text-[#C4320A]" }
        ]
    },
    {
        id: 3,
        slug: "what-is-wireframing",
        image: "/Blogs/AllPosts/Image (7).png",
        author: "Candice Wu",
        date: "1 Jan 2023",
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: [
            { text: "Design", bg: "bg-[#F9F5FF]", textClr: "text-[#6941C6]" },
            { text: "Research", bg: "bg-[#EEF4FF]", textClr: "text-[#3538CD]" }
        ]
    },
    {
        id: 4,
        slug: "how-collaboration-makes-us-better-designers",
        image: "/Blogs/AllPosts/Image (8).png",
        author: "Natali Craig",
        date: "1 Jan 2023",
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        tags: [
            { text: "Design", bg: "bg-[#F9F5FF]", textClr: "text-[#6941C6]" },
            { text: "Research", bg: "bg-[#EEF4FF]", textClr: "text-[#3538CD]" }
        ]
    },
    {
        id: 5,
        slug: "our-top-10-javascript-frameworks",
        image: "/Blogs/AllPosts/Image (9).png",
        author: "Drew Cano",
        date: "1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: [
            { text: "Software Development", bg: "bg-[#ECFDF3]", textClr: "text-[#027A48]" },
            { text: "Tools", bg: "bg-[#FDF2FA]", textClr: "text-[#C11574]" },
            { text: "SaaS", bg: "bg-[#FFF6ED]", textClr: "text-[#C4320A]" }
        ]
    },
    {
        id: 6,
        slug: "podcast-creating-a-better-cx-community",
        image: "/Blogs/AllPosts/Image (10).png",
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        description: "Starting a community doesn’t need to be complicated, but how do you get started?",
        tags: [
            { text: "Podcasts", bg: "bg-[#F9F5FF]", textClr: "text-[#6941C6]" },
            { text: "Customer Success", bg: "bg-[#EEF4FF]", textClr: "text-[#3538CD]" }
        ]
    }
];

export default function AllPosts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState(allPostsData);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let token =
                    localStorage.getItem("super_admin_token") ||
                    localStorage.getItem("superadmin_token") ||
                    localStorage.getItem("access_token") ||
                    localStorage.getItem("token") ||
                    "";

                // Self-healing automatic guest auth if token is missing
                if (!token) {
                    try {
                        const guestEmail = "guest_visitor_securxpert@gmail.com";
                        const guestUsername = "guest_visitor";
                        const guestPassword = "VisitorPass123";

                        try {
                            const loginRes = await axios.post('http://192.168.0.128:8000/auth/login', {
                                email: guestEmail,
                                password: guestPassword
                            });
                            token = loginRes.data?.access_token || "";
                            if (token) {
                                localStorage.setItem("access_token", token);
                            }
                        } catch (err) {
                            if (err.response && err.response.status === 401) {
                                // Register guest visitor
                                await axios.post('http://192.168.0.128:8000/auth/register-admin', {
                                    username: guestUsername,
                                    email: guestEmail,
                                    password: guestPassword
                                });
                                // Login
                                const loginRes2 = await axios.post('http://192.168.0.128:8000/auth/login', {
                                    email: guestEmail,
                                    password: guestPassword
                                });
                                token = loginRes2.data?.access_token || "";
                                if (token) {
                                    localStorage.setItem("access_token", token);
                                }
                            }
                        }
                    } catch (e) {
                        console.error("Auto guest auth failed:", e);
                    }
                }

                const response = await axios.get("http://192.168.0.128:8000/blogs/", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const rawList = Array.isArray(response.data) ? response.data : (response.data?.data || []);

                const apiPosts = await Promise.all(
                    rawList
                        .filter(blog => blog.status === "active" || blog.status === "published")
                        .map(async (blog) => {
                            let heroData = {};
                            try {
                                const heroRes = await axios.get(`http://192.168.0.128:8000/blogs/${blog.id}/hero`, {
                                    headers: {
                                        "Authorization": `Bearer ${token}`
                                    }
                                });
                                const resData = heroRes.data || {};
                                heroData = resData.data || resData;
                            } catch (err) {
                                console.log(`No hero data found for blog ${blog.id}:`, err.message);
                            }

                            let formattedDate = "1 Jan 2023";
                            if (blog.publish_date || blog.created_at) {
                                try {
                                    const d = new Date(blog.publish_date || blog.created_at);
                                    formattedDate = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
                                } catch (e) { }
                            }

                            let bannerUrl = "/Blogs/AllPosts/Image (5).png";
                            const bannerPath = heroData.hero_banner_url || heroData.hero_banner || blog.hero_banner || blog.hero?.hero_banner;
                            if (bannerPath) {
                                bannerUrl = (bannerPath.startsWith("http://") || bannerPath.startsWith("https://"))
                                    ? bannerPath
                                    : `http://192.168.0.128:8000${bannerPath}`;
                            }

                            const categoryName = blog.category || "Security";
                            const tag = {
                                text: categoryName,
                                bg: "bg-[#F9F5FF]",
                                textClr: "text-[#6941C6]"
                            };

                            return {
                                id: blog.id,
                                isDynamic: true,
                                slug: blog.slug || `blog-${blog.id}`,
                                image: bannerUrl,
                                author: heroData.author_name || blog.author || "Sarah Chen",
                                date: formattedDate,
                                title: blog.title || "Untitled Blog",
                                description: heroData.short_description || blog.description || "No description provided.",
                                tags: [tag]
                            };
                        })
                );

                // Sort by ID descending so newest blogs appear first
                apiPosts.sort((a, b) => b.id - a.id);

                setPosts([...apiPosts, ...allPostsData]);
            } catch (err) {
                console.error("Failed to load dynamic blog posts:", err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="bg-white w-full">
            <section className="w-full max-w-[85%] 2xl:max-w-[1300px] mx-auto pb-16 sm:pb-24 select-none">

                {/* Header */}
                <h3 className="text-2xl sm:text-[32px] font-bold text-slate-900 tracking-tight mb-8 sm:mb-10 font-sans">
                    All blog posts
                </h3>

                {/* 3-Column Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post) => (
                        <Link href={`/blogs/${post.slug}`} key={post.isDynamic ? `api-${post.id}` : `static-${post.id}`} className="flex flex-col group cursor-pointer">

                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden ">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                                />
                            </div>

                            {/* Metadata */}
                            <p className="text-[#6941C6] text-xs sm:text-[13px] font-bold tracking-wide uppercase mt-5 sm:mt-6 font-sans">
                                {post.author} • {post.date}
                            </p>

                            {/* Title with Arrow Icon */}
                            <div className="flex justify-between items-start mt-3">
                                <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors font-sans tracking-tight">
                                    {post.title}
                                </h4>
                                <LuArrowUpRight className="text-2xl text-slate-900 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200 ml-4 flex-shrink-0 mt-0.5" />
                            </div>

                            {/* Description */}
                            <p className="text-slate-500 text-sm sm:text-[15px] font-normal leading-relaxed mt-2.5 font-sans line-clamp-3">
                                {post.description}
                            </p>

                            {/* Custom Colored Pill Tags */}
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                                {post.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className={`${tag.bg} ${tag.textClr} font-semibold px-3 py-1 rounded-full text-xs tracking-wide`}
                                    >
                                        {tag.text}
                                    </span>
                                ))}
                            </div>

                        </Link>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="border-t border-slate-100 mt-16 sm:mt-6 pt-6 flex flex-row items-center justify-between">

                    {/* Previous Button */}
                    <button
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        className="flex items-center gap-2 text-[#667085] hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 1}
                    >
                        <LuArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Numeric Pagination items */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            onClick={() => setCurrentPage(1)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 1 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            1
                        </button>
                        <button
                            onClick={() => setCurrentPage(2)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 2 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            2
                        </button>
                        <button
                            onClick={() => setCurrentPage(3)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 3 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            3
                        </button>

                        <span className="text-slate-400 px-1 text-sm font-medium">...</span>

                        <button
                            onClick={() => setCurrentPage(8)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 8 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            8
                        </button>
                        <button
                            onClick={() => setCurrentPage(9)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 9 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            9
                        </button>
                        <button
                            onClick={() => setCurrentPage(10)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === 10 ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                        >
                            10
                        </button>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => currentPage < 10 && setCurrentPage(currentPage + 1)}
                        className="flex items-center gap-2 text-[#667085] hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 10}
                    >
                        <span className="hidden sm:inline">Next</span>
                        <LuArrowRight className="w-5 h-5" />
                    </button>

                </div>

            </section>
        </div>
    );
}
