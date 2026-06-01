"use client";

import React from "react";

export default function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      image: "/BPO/Blogs/blog1.jpg",
      category: "MARKETING",
      title: "The Future of SaaS Marketing: Trends to Watch",
      description: "We would love to share a similar experience I believe in the power of design. Design brings ideas, messages,",
      author: "bixola",
      authorImage: "https://randomuser.me/api/portraits/women/32.jpg",
      date: "June 20, 2024"
    },
    {
      id: 2,
      image: "/BPO/Blogs/blog2.jpg",
      category: "BUSINESS",
      title: "How to Create a Winning Digital Marketing Strategy",
      description: "We would love to share a similar experience I believe in the power of design. Design brings ideas, messages,",
      author: "bixola",
      authorImage: "https://randomuser.me/api/portraits/men/46.jpg",
      date: "June 20, 2024"
    },
    {
      id: 3,
      image: "/BPO/Blogs/blog3.jpg",
      category: "MARKETING",
      title: "10 Essential Tools for Effective Software Marketing",
      description: "We would love to share a similar experience I believe in the power of design. Design brings ideas, messages,",
      author: "bixola",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "June 20, 2024"
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 text-slate-800">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      {/* Top Right Curved lines */}
      <img
        src="/BPO/Blogs/blogdesign2.png"
        alt="Top Right Accent"
        className="absolute top-4 right-0 w-[120px] sm:w-[160px] h-auto select-none pointer-events-none opacity-80 z-0"
      />
      {/* Bottom Left Connected loops */}
      <img
        src="/BPO/Blogs/blogdesign1.png"
        alt="Bottom Left Accent"
        className="absolute bottom-6 left-0 w-[80px] sm:w-[100px] h-auto select-none pointer-events-none opacity-85 z-0"
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="relative inline-flex items-center mb-4">
            <span className="relative z-10 text-[#3D62EB] text-sm font-semibold tracking-[2px] uppercase font-sans">
              LATEST BLOG
              {/* Soft highlight bottom pill bar */}
              <span className="absolute bottom-[-2px] left-0 w-full h-[6px] bg-[#3D62EB]/15 -z-10 rounded-sm" />
            </span>
          </div>
          <h3 className="text-[#100D35] text-3xl sm:text-4xl lg:text-[50px] font-bold leading-[1.2] font-inter tracking-[-1px]">
            Learn About Our Latest News From Blog.
          </h3>
        </div>
 
        {/* BLOGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group p-4 pb-6 flex flex-col shadow-sm  transition-all duration-300"
            >
              
              {/* Card Image Wrapper */}
              <div className="w-full aspect-[16/10] rounded-[8px] overflow-hidden mb-5"> 
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Meta Category */}
              <span className="text-[#3D62EB] text-xs font-semibold uppercase tracking-wider mb-2 font-inter">
                {blog.category}
              </span>

              {/* Title */}
              <h3 className="text-[#100D35] text-lg font-bold leading-snug group-hover:text-[#3D62EB] transition-colors duration-200 mb-3 font-inter cursor-pointer">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-[#555555] text-sm leading-relaxed mb-6 font-normal line-clamp-3">
                {blog.description}
              </p>

              {/* Footer details: Author & Date */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                
                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-[#555555] text-xs font-semibold ml-2 font-inter">
                    by {blog.author}
                  </span>
                </div>

                {/* Calendar Date */}
                <div className="flex items-center text-[#555555]">
                  <svg
                    className="w-3.5 h-3.5 text-[#3D62EB] mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[#555555] text-xs font-semibold font-inter">
                    {blog.date}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
