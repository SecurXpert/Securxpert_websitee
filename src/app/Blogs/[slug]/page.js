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

                    {/* Background Image Graphic (Same as main blogs hero) */}
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
                                    href="/Blogs"
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
                                className="w-full h-auto object-cover rounded-2xl"
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

                    {/* MIDDLE COLUMN: Scrollable Content */}
                    <article className="flex-1 min-w-0 flex flex-col w-full text-slate-700">
                        <p className="text-[16px] xl:text-[17px] leading-[1.8] mb-6 text-slate-600">{blog.content.introText1}</p>
                        <p className="text-[16px] xl:text-[17px] leading-[1.8] mb-10 text-slate-600">{blog.content.introText2}</p>

                        {/* Blockquote */}
                        <div className="border-l-[4px] border-[#3843A6] bg-[#FAFAFC] rounded-r-2xl p-6 xl:p-8 mb-12">
                            <p className="text-[18px] xl:text-[20px] italic font-semibold text-slate-800 mb-4 leading-[1.6]">
                                "{blog.content.quote.text}"
                            </p>
                            <p className="text-[13px] xl:text-[14px] text-slate-500 font-medium">— {blog.content.quote.author}</p>
                        </div>

                        {/* Understanding Revenue Leaks section */}
                        <h2 id="revenue-leaks" className="text-2xl xl:text-3xl font-bold text-slate-900 mb-6 tracking-tight">{blog.content.heading1}</h2>
                        <p className="text-[16px] xl:text-[17px] leading-[1.8] mb-10 text-slate-600">{blog.content.revenueText}</p>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6">
                            {blog.content.statistics.map((stat, idx) => (
                                <div key={idx} className="border border-slate-100 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                                    <div className="text-[32px] xl:text-[40px] font-bold text-[#3E66F3] mb-2">{stat.value}</div>
                                    <h4 className="text-[16px] xl:text-[18px] font-bold text-slate-900 mb-3">{stat.title}</h4>
                                    <p className="text-[13px] xl:text-[14px] text-slate-500 leading-relaxed">{stat.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Inventory Section */}
                        <div id={blog.content.inventorySection.id} className="mt-16 sm:mt-20 flex flex-col md:flex-row items-start gap-8 xl:gap-10">
                            <div className="w-full md:w-1/2 flex-shrink-0">
                                <img src={blog.content.inventorySection.image} alt="Warehouse Inventory" className="w-full h-auto rounded-xl object-cover shadow-sm" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col">
                                <h3 className="text-2xl xl:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                                    {blog.content.inventorySection.title}
                                </h3>
                                <p className="text-[15px] xl:text-[16px] leading-[1.7] mb-6 text-slate-600">
                                    {blog.content.inventorySection.description}
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {blog.content.inventorySection.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#3E66F3] mt-2.5 flex-shrink-0" />
                                            <span className="text-[15px] xl:text-[16px] text-slate-700 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Billing Section */}
                        <div id={blog.content.billingSection.id} className="mt-16 sm:mt-20 flex flex-col-reverse md:flex-row items-start gap-8 xl:gap-10 pb-10">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <h3 className="text-2xl xl:text-[28px] font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                                    {blog.content.billingSection.title}
                                </h3>
                                <p className="text-[15px] xl:text-[16px] leading-[1.7] mb-8 text-slate-600">
                                    {blog.content.billingSection.description}
                                </p>
                                <div className="flex flex-col gap-4">
                                    {blog.content.billingSection.cards.map((card, idx) => (
                                        <div key={idx} className="bg-[#FAFAFC] border border-slate-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                                            <h4 className="text-[15px] font-bold text-slate-900 mb-2">{card.title}</h4>
                                            <p className="text-[14px] text-slate-500 leading-relaxed">{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex-shrink-0 pt-0 md:pt-4">
                                <img src={blog.content.billingSection.image} alt="Billing and Invoicing" className="w-full h-auto rounded-xl object-cover shadow-sm" />
                            </div>
                        </div>

                        {/* Stat Block */}
                        <div
                            className="w-full rounded-2xl p-8 md:p-12 text-center text-white shadow-lg mb-16"
                            style={{ background: "linear-gradient(180deg, #29257A 0%, #3C60E7 100%)" }}
                        >
                            <h3 className="text-6xl md:text-7xl font-bold mb-4">{blog.content.statBlock.value}</h3>
                            <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-2xl mx-auto mb-6 text-white/90">
                                {blog.content.statBlock.text}
                            </p>
                            <p className="text-[13px] text-white/60">
                                {blog.content.statBlock.source}
                            </p>
                        </div>

                        {/* Reporting and Visibility Challenges Section */}
                        <div id={blog.content.reportingSection.id} className="mb-16">
                            <h3 className="text-2xl xl:text-[28px] font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                                {blog.content.reportingSection.title}
                            </h3>
                            <p className="text-[15px] xl:text-[16px] leading-[1.7] mb-8 text-slate-600">
                                {blog.content.reportingSection.description}
                            </p>

                            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#FAFAFC] border-b border-slate-200">
                                            <th className="py-4 px-6 font-bold text-slate-900 text-[15px] w-1/2">
                                                {blog.content.reportingSection.table.headers[0]}
                                            </th>
                                            <th className="py-4 px-6 font-bold text-slate-900 text-[15px] w-1/2 border-l border-slate-200">
                                                {blog.content.reportingSection.table.headers[1]}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blog.content.reportingSection.table.rows.map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-6 text-[14px] text-slate-600 leading-relaxed border-r border-slate-200 align-top">
                                                    {row[0]}
                                                </td>
                                                <td className="py-4 px-6 text-[14px] text-slate-800 font-medium leading-relaxed align-top">
                                                    {row[1]}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div id={blog.content.timelineSection.id} className="mb-8">
                            <h3 className="text-2xl xl:text-[28px] font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                                {blog.content.timelineSection.title}
                            </h3>
                            <p className="text-[15px] xl:text-[16px] leading-[1.7] mb-10 text-slate-600">
                                {blog.content.timelineSection.description}
                            </p>

                            <div className="relative flex flex-col gap-6 xl:gap-8 pl-0 sm:pl-2">
                                {/* Vertical connecting line */}
                                <div className="absolute left-[31px] top-8 bottom-12 w-px bg-slate-200 hidden sm:block"></div>

                                {blog.content.timelineSection.steps.map((step, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8 relative">

                                        {/* Icon Box */}
                                        <div
                                            className="w-[60px] h-[60px] rounded-[16px] flex items-center justify-center text-[26px] flex-shrink-0 z-10 shadow-lg border border-white/10"
                                            style={{ background: "linear-gradient(135deg, #29257A 0%, #4B4DC1 100%)" }}
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 bg-white border border-slate-100 rounded-[20px] p-6 xl:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                                            <span className="text-[12px] font-bold text-[#3E66F3] tracking-wider mb-2 block uppercase">
                                                {step.stepNumber}
                                            </span>
                                            <h4 className="text-[18px] xl:text-[20px] font-bold text-slate-900 mb-3 tracking-tight">
                                                {step.title}
                                            </h4>
                                            <p className="text-[14px] xl:text-[15px] leading-relaxed text-slate-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion Section */}
                        <div id={blog.content.conclusionSection.id} className="mb-16 mt-8">
                            <h3 className="text-2xl xl:text-[28px] font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                                {blog.content.conclusionSection.title}
                            </h3>
                            <div className="flex flex-col gap-6">
                                {blog.content.conclusionSection.paragraphs.map((p, idx) => (
                                    <p key={idx} className="text-[15px] xl:text-[16px] leading-[1.8] text-slate-600">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div id={blog.content.faqSection.id} className="mb-8">
                            <h3 className="text-2xl xl:text-[28px] font-bold text-slate-900 mb-8 tracking-tight leading-snug">
                                {blog.content.faqSection.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {blog.content.faqSection.faqs.map((faq, idx) => (
                                    <details key={idx} className="group bg-white border border-slate-200 rounded-2xl open:shadow-md transition-all duration-200">
                                        <summary className="flex items-center justify-between cursor-pointer p-5 xl:p-6 font-bold text-[14px] xl:text-[15px] text-slate-800 outline-none list-none [&::-webkit-details-marker]:hidden">
                                            <span className="pr-6 leading-snug">{faq.question}</span>
                                            <span className="flex-shrink-0 transition-transform duration-200 group-open:-rotate-180 text-slate-400">
                                                <LuChevronDown className="w-5 h-5" />
                                            </span>
                                        </summary>
                                        <div className="px-5 xl:px-6 pb-6 text-[14px] xl:text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Author Bio Section */}
                        <div
                            id={blog.content.authorBioSection.id}
                            className="mt-16 bg-white border border-slate-100 rounded-[24px] p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 items-start"
                        >
                            <div className="w-full md:w-auto flex-shrink-0 flex justify-center md:block">
                                <img
                                    src={blog.content.authorBioSection.image}
                                    alt={blog.content.authorBioSection.name}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-sm"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                    {blog.content.authorBioSection.name}
                                </h3>
                                <p className="text-[15px] font-semibold text-[#5A73FF] mb-5">
                                    {blog.content.authorBioSection.role}
                                </p>
                                <div className="flex flex-wrap gap-2.5 mb-6">
                                    {blog.content.authorBioSection.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-[#F2F1FA] text-[#3A2886] rounded-full text-[13px] font-bold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[15px] leading-[1.8] text-slate-600 mb-8">
                                    {blog.content.authorBioSection.bio}
                                </p>
                                <div className="flex gap-3">
                                    <a href={blog.content.authorBioSection.socials.linkedin} className="w-10 h-10 rounded-xl bg-[#F2F1FA] text-[#3A2886] flex items-center justify-center hover:bg-[#3A2886] hover:text-white transition-colors">
                                        <FaLinkedinIn className="w-[18px] h-[18px]" />
                                    </a>
                                    <a href={blog.content.authorBioSection.socials.twitter} className="w-10 h-10 rounded-xl bg-[#F2F1FA] text-[#3A2886] flex items-center justify-center hover:bg-[#3A2886] hover:text-white transition-colors">
                                        <FaTwitter className="w-[18px] h-[18px]" />
                                    </a>
                                    <a href={blog.content.authorBioSection.socials.email} className="w-10 h-10 rounded-xl bg-[#F2F1FA] text-[#3A2886] flex items-center justify-center hover:bg-[#3A2886] hover:text-white transition-colors">
                                        <FaEnvelope className="w-[18px] h-[18px]" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </article>

                    {/* RIGHT SIDEBAR: Fixed Widgets */}
                    <aside className="hidden lg:flex flex-col gap-6 w-[300px] xl:w-[320px] flex-shrink-0 sticky top-32 pb-10">

                        {/* About Author */}
                        <div className="border border-slate-100 rounded-[20px] p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="font-bold text-slate-900 mb-5 text-[16px]">About the Author</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <img src={blog.authorAvatar} alt={blog.author} className="w-[52px] h-[52px] rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-[15px]">{blog.author}</h4>
                                    <p className="text-[13px] text-slate-500">{blog.authorRole}</p>
                                </div>
                            </div>
                            <p className="text-[13px] text-slate-500 leading-[1.6]">
                                {blog.authorWidget.bio}
                            </p>
                        </div>

                        {/* Popular Articles */}
                        <div className="border border-slate-100 rounded-[20px] p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="font-bold text-slate-900 mb-5 text-[16px]">Popular Articles</h3>
                            <div className="flex flex-col gap-5">
                                {blog.popularArticles.map((article, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                                        <img src={article.image} alt="article" className="w-[72px] h-[48px] rounded-lg object-cover flex-shrink-0 border border-slate-100 group-hover:opacity-80 transition-opacity" />
                                        <h4 className="text-[13px] font-semibold text-slate-800 leading-[1.4] group-hover:text-[#3E66F3] transition-colors">
                                            {article.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div
                            className="rounded-[24px] p-6 shadow-md text-white border border-white/10"
                            style={{ background: "linear-gradient(135deg, #2B0A5A 0%, #2F1265 7.14%, #331A70 14.29%, #37217B 21.43%, #3A2886 28.57%, #3E3091 35.71%, #41379D 42.86%, #453EA9 50%, #4845B5 57.14%, #4B4DC1 64.29%, #4E54CD 71.43%, #515CD9 78.57%, #5464E6 85.71%, #576BF2 92.86%, #5A73FF 100%)" }}
                        >
                            <h3 className="font-bold mb-2 text-[16px]">Stay Updated</h3>
                            <p className="text-white/80 text-[13px] leading-[1.6] mb-5">
                                Get weekly insights on ERP and digital transformation.
                            </p>
                            <form className="flex flex-col gap-3">
                                <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl text-slate-800 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#3E66F3]" />
                                <button type="button" className="w-full bg-white text-[#3843A6] font-bold py-3 rounded-xl text-[14px] hover:bg-slate-50 transition-colors shadow-sm">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Consultation */}
                        <div className="border border-slate-100 rounded-[20px] p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                            <h3 className="font-bold text-slate-900 mb-2 text-[16px]">Need ERP Consultation?</h3>
                            <p className="text-[13px] text-slate-500 leading-[1.6] mb-5">
                                Speak with our experts to find the right solution for your business.
                            </p>
                            <button className="w-full bg-[#1A0B2E] hover:bg-[#210A4A] text-white font-bold py-3 rounded-xl text-[14px] transition-colors shadow-sm">
                                Book a Free Demo
                            </button>
                        </div>

                    </aside>

                </div>
            </section>

        </div>
    );
}
