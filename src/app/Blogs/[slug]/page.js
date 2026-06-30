import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/utils/blogsData";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt, FaEnvelope } from "react-icons/fa";
import { LuCalendar, LuClock, LuChevronDown } from "react-icons/lu";
import TableOfContents from "./TableOfContents";

export async function generateStaticParams() {
    return Object.keys(blogsData).map((slug) => ({
        slug: slug,
    }));
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const blog = blogsData[slug];

    if (!blog) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-white text-slate-800 pb-20 select-none">

            {/* Blog Hero Section */}
            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-0 pb-16">

                {/* Curved Container Wrapper */}
                <div className="relative px-6 md:px-20 pt-28 sm:pt-35 pb-20 sm:pb-20 flex flex-col justify-center bg-gradient-to-r from-[#172E9D] to-[#2541C5] md:bg-none rounded-[24px] overflow-hidden">

                    {/* Background Image Graphic */}
                    <img
                        src="/Blogs/hero/blogs-herobg.png"
                        alt="Blog Hero Background"
                        className="hidden md:block absolute inset-0 w-full h-full object-fill z-0 pointer-events-none mt-6 md:mt-6 rounded-[24px]"
                    />

                    {/* Grid Layout for Hero Content */}
                    <div className="relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="flex flex-col items-start w-full text-white">
                            {/* Back Button */}
                            <div className="mb-8 sm:mb-12">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center justify-center bg-white text-[#2541C5] font-bold px-8 py-2.5 rounded-full text-[13px] hover:scale-105 transition-transform duration-200 shadow-sm"
                                >
                                    Back
                                </Link>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.15] mb-6 font-sans tracking-normal">
                                {blog.title}
                            </h1>

                            {/* Description */}
                            <p className="text-white/80 text-[15px] sm:text-base leading-[1.6] mb-12 max-w-[95%] font-normal">
                                {blog.description}
                            </p>

                            {/* Author & Meta Row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pb-6 border-b border-white/20 w-full">

                                {/* Author Info */}
                                <div className="flex items-center gap-3">
                                    <img src={blog.authorAvatar} alt={blog.author} className="w-11 h-11 rounded-full object-cover border-2 border-transparent" />
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-[14px]">{blog.author}</span>
                                        <span className="text-white/70 text-[12px]">{blog.authorRole}</span>
                                    </div>
                                </div>

                                {/* Date & Read Time */}
                                <div className="flex items-center gap-5 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-2 text-white/90 text-[13px]">
                                        <LuCalendar className="w-4 h-4 text-white/70" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/90 text-[13px]">
                                        <LuClock className="w-4 h-4 text-white/70" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>

                            </div>

                            {/* Share Icons */}
                            <div className="flex items-center gap-5 mt-6">
                                <span className="text-white text-[13px] font-semibold">Share:</span>
                                <div className="flex items-center gap-4">
                                    <a href="#" className="text-white hover:text-blue-200 transition-colors"><FaFacebookF className="w-[15px] h-[15px]" /></a>
                                    <a href="#" className="text-white hover:text-blue-200 transition-colors"><FaTwitter className="w-[15px] h-[15px]" /></a>
                                    <a href="#" className="text-white hover:text-blue-200 transition-colors"><FaLinkedinIn className="w-[15px] h-[15px]" /></a>
                                    <a href="#" className="text-white hover:text-blue-200 transition-colors"><FaShareAlt className="w-[15px] h-[15px]" /></a>
                                </div>
                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="w-full flex justify-center lg:justify-end relative h-full min-h-[290px] lg:min-h-[380px]">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Blog Content Layout */}
            <section className="relative w-full max-w-[90%] 2xl:max-w-[1465px] mx-auto pt-2 pb-2">
                <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">

                    {/* LEFT SIDEBAR: Table of Contents (Fixed) */}
                    <TableOfContents items={blog.tableOfContents} />

                    {/* MIDDLE COLUMN: Clean Content Skeleton (Matches Image UI) */}
                    <article className="flex-1 min-w-0 flex flex-col w-full text-slate-700 bg-white pt-6 border-l-2 border-[#38bdf8] pl-6 md:pl-10">
                        
                        <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-6 font-medium">
                            {blog.content.introText1}
                        </p>
                        <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-8">
                            {blog.content.introText2}
                        </p>

                        <h2 id="revenue-leaks" className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                            {blog.content.heading1}
                        </h2>
                        <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-8">
                            {blog.content.revenueText}
                        </p>

                        {/* Inventory Section Formatted as Clean Text */}
                        {blog.content.inventorySection && (
                            <div id={blog.content.inventorySection.id} className="mb-8 scroll-mt-24">
                                <h2 className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                                    {blog.content.inventorySection.title}
                                </h2>
                                <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-6">
                                    {blog.content.inventorySection.description}
                                </p>
                                
                                {blog.content.inventorySection.image && (
                                    <div className="my-8 w-full max-w-4xl mx-auto">
                                        <img 
                                            src={blog.content.inventorySection.image} 
                                            alt={blog.content.inventorySection.title} 
                                            className="w-full h-auto object-cover rounded-xl"
                                        />
                                    </div>
                                )}
                                
                                {blog.content.inventorySection.points && blog.content.inventorySection.points.length > 0 && (
                                    <ul className="flex flex-col gap-3 pl-2 mb-8">
                                        {blog.content.inventorySection.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 flex-shrink-0" />
                                                <span className="text-[14px] xl:text-[15px] text-slate-600 leading-[1.6]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                        {/* Billing Section Formatted as Clean Text */}
                        {blog.content.billingSection && (
                            <div id={blog.content.billingSection.id} className="mb-8 scroll-mt-24">
                                <h2 className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                                    {blog.content.billingSection.title}
                                </h2>
                                <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-6">
                                    {blog.content.billingSection.description}
                                </p>
                                
                                {blog.content.billingSection.image && (
                                    <div className="my-8 w-full max-w-4xl mx-auto">
                                        <img 
                                            src={blog.content.billingSection.image} 
                                            alt={blog.content.billingSection.title} 
                                            className="w-full h-auto object-cover rounded-xl"
                                        />
                                    </div>
                                )}
                                
                                {blog.content.billingSection.cards && blog.content.billingSection.cards.length > 0 && (
                                    <div className="flex flex-col gap-5 mb-8">
                                        {blog.content.billingSection.cards.map((card, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <h4 className="text-[15px] xl:text-[16px] font-bold text-slate-800 mb-1">{card.title}</h4>
                                                <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600">
                                                    {card.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Reporting Section Formatted as Clean Text */}
                        {blog.content.reportingSection && (
                            <div id={blog.content.reportingSection.id} className="mb-8 scroll-mt-24">
                                <h2 className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                                    {blog.content.reportingSection.title}
                                </h2>
                                <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-8">
                                    {blog.content.reportingSection.description}
                                </p>
                            </div>
                        )}

                        {/* Timeline Section Formatted as Clean Text */}
                        {blog.content.timelineSection && (
                            <div id={blog.content.timelineSection.id} className="mb-8 scroll-mt-24">
                                <h2 className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                                    {blog.content.timelineSection.title}
                                </h2>
                                <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600 mb-6">
                                    {blog.content.timelineSection.description}
                                </p>
                                {blog.content.timelineSection.steps && blog.content.timelineSection.steps.length > 0 && (
                                    <div className="flex flex-col gap-6 mb-8 pl-2">
                                        {blog.content.timelineSection.steps.map((step, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 flex-shrink-0" />
                                                <div className="flex flex-col">
                                                    <h4 className="text-[15px] xl:text-[16px] font-bold text-slate-800 mb-1">
                                                        {step.stepNumber} - {step.title}
                                                    </h4>
                                                    <p className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Conclusion Section */}
                        {blog.content.conclusionSection && (
                            <div id={blog.content.conclusionSection.id} className="mb-8 scroll-mt-24">
                                <h2 className="text-[20px] xl:text-[24px] font-bold text-[#1E3A8A] mb-5 tracking-tight">
                                    {blog.content.conclusionSection.title}
                                </h2>
                                <div className="flex flex-col gap-6">
                                    {blog.content.conclusionSection.paragraphs && blog.content.conclusionSection.paragraphs.map((p, idx) => (
                                        <p key={idx} className="text-[14px] xl:text-[15px] leading-[1.8] text-slate-600">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Bio Section - Plain Text Style */}
                        {blog.content.authorBioSection && (
                            <div id={blog.content.authorBioSection.id} className="mt-16 pt-8 border-t border-slate-100 flex items-center gap-6">
                                <img
                                    src={blog.content.authorBioSection.image}
                                    alt={blog.content.authorBioSection.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-[16px] font-bold text-slate-900">
                                        {blog.content.authorBioSection.name}
                                    </h3>
                                    <p className="text-[13px] text-slate-500">
                                        {blog.content.authorBioSection.role}
                                    </p>
                                </div>
                            </div>
                        )}

                    </article>

                </div>
            </section>

        </div>
    );
}
