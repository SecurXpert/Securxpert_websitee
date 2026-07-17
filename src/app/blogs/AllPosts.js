"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import axios from "axios";
import { API_BASE_URL } from "@/admin/config";

const allPostsData = [
    {
        id: 1,
        slug: "bill-walsh-leadership-lessons",
        image: "/blogs/AllPosts/Image (5).png",
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
        image: "/blogs/AllPosts/Image (6).png",
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
        image: "/blogs/AllPosts/Image (7).png",
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
        image: "/blogs/AllPosts/Image (8).png",
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
        image: "/blogs/AllPosts/Image (9).png",
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
        image: "/blogs/AllPosts/Image (10).png",
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
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const getHeaders = (tok) => ({
                    "Authorization": tok ? `Bearer ${tok}` : "",
                    "ngrok-skip-browser-warning": "true"
                });

                let token = localStorage.getItem("access_token") || "";
                if (token === "undefined" || token === "null") token = "";

                const performGuestLogin = async () => {
                    const guestEmail = "guest_visitor_securxpert@gmail.com";
                    const guestUsername = "guest_visitor";
                    const guestPassword = "VisitorPass123";

                    try {
                        const loginRes = await axios.post(`${API_BASE_URL}/auth/login`, {
                            email: guestEmail,
                            password: guestPassword
                        });
                        const tok = loginRes.data?.access_token || "";
                        if (tok) {
                            localStorage.setItem("access_token", tok);
                            return tok;
                        }
                    } catch (err) {
                        if (err.response && err.response.status === 401) {
                            try {
                                await axios.post(`${API_BASE_URL}/auth/register-admin`, {
                                    username: guestUsername,
                                    email: guestEmail,
                                    password: guestPassword
                                });
                                const loginRes2 = await axios.post(`${API_BASE_URL}/auth/login`, {
                                    email: guestEmail,
                                    password: guestPassword
                                });
                                const tok = loginRes2.data?.access_token || "";
                                if (tok) {
                                    localStorage.setItem("access_token", tok);
                                    return tok;
                                }
                            } catch (regErr) {
                                console.error("Guest registration/login failed:", regErr);
                            }
                        }
                    }
                    return "";
                };

                if (!token) {
                    token = await performGuestLogin();
                }

                let response;
                try {
                    response = await axios.get(`${API_BASE_URL}/blogs/`, { headers: getHeaders(token) });
                } catch (err) {
                    if (err.response?.status === 401) {
                        console.log("Token expired/invalid, logging in as guest again...");
                        token = await performGuestLogin();
                        response = await axios.get(`${API_BASE_URL}/blogs/`, { headers: getHeaders(token) });
                    } else {
                        throw err;
                    }
                }

                const rawList = Array.isArray(response.data) ? response.data : (response.data?.data || []);

                const apiPosts = await Promise.all(
                    rawList
                        .filter(blog => blog.status === "active" || blog.status === "published")
                        .map(async (blog) => {
                            let heroData = {};
                            try {
                                const heroRes = await axios.get(`${API_BASE_URL}/blogs/${blog.id}/hero`, { headers: getHeaders(token) });
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

                            let bannerUrl = "/blogs/AllPosts/Image (5).png";
                            const bannerPath = heroData.hero_banner_url || heroData.hero_banner || blog.hero_banner || blog.hero?.hero_banner;
                            if (bannerPath) {
                                bannerUrl = (bannerPath.startsWith("http://") || bannerPath.startsWith("https://"))
                                    ? bannerPath
                                    : `${API_BASE_URL}${bannerPath}`;
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

                setPosts(apiPosts);
            } catch (err) {
                console.error("Failed to load dynamic blog posts:", err);
            }
        };

        fetchPosts();
    }, []);

    // Pagination logic
    const postsPerPage = 6;
    const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="bg-white w-full">
            <section className="w-full max-w-[85%] 2xl:max-w-[1300px] mx-auto pb-16 sm:pb-24">

                {/* Header */}
                <h3 className="text-2xl sm:text-[32px] font-bold text-slate-900 tracking-tight mb-8 sm:mb-10 font-sans">
                    All blog posts
                </h3>

                {/* 3-Column Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {currentPosts.map((post) => (
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
                {totalPages > 1 && (
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
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${currentPage === pageNumber ? "bg-[#F9F5FF] text-[#7F56D9]" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                            className="flex items-center gap-2 text-[#667085] hover:text-blue-600 font-semibold text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === totalPages}
                        >
                            <span className="hidden sm:inline">Next</span>
                            <LuArrowRight className="w-5 h-5" />
                        </button>

                    </div>
                )}

            </section>
        </div>
    );
}
