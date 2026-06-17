"use client";

import React, { useRef } from "react";

const storiesData = [
  {
    id: 1,
    title: "How we build the Dagmarket on 6 months",
    author: "Kaur Kaljuma",
    date: "May 20th 2020",
    avatar: "/BPO/TeamMembers/member1.jpg",
    image: "/Carrers/stories/story 1.png",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
  },
  {
    id: 2,
    title: "The last anoncement for success factory",
    author: "Raigo Tuulik",
    date: "May 20th 2020",
    avatar: "/BPO/TeamMembers/member2.jpg",
    image: "/Carrers/stories/story 2.png",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
  },
  {
    id: 3,
    title: "The Role of Repetition in Conversation Design",
    author: "Jüri Siilivask",
    date: "May 20th 2020",
    avatar: "/BPO/TeamMembers/member3.jpg",
    image: "/Carrers/stories/story 3.png",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
  },
  {
    id: 4,
    title: "What I Learned Getting Hired",
    author: "Mazdak Shakiba",
    date: "May 20th 2020",
    avatar: "/BPO/TeamMembers/member4.jpg",
    image: "/Carrers/stories/story 4.png",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
  },
];

export default function Stories() {
  const scrollContainerRef = useRef(null);

  return (
    <section
      style={{ background: "linear-gradient(180deg, #374EC4 0%, #2C2D8A 100%)" }}
      className="relative w-full py-14 text-white overflow-hidden"
    >
      <div className="relative w-full max-w-[95%] 2xl:max-w-[1550px] mx-auto px-4 md:px-12">

        {/* Header Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-white text-center text-5xl font-normal mb-4 font-sans">
              Stories by Securxperts
            </h2>
            <p className="text-center text-blue-100 text-lg sm:text-xl font-normal leading-relaxed opacity-95 font-sans">
              Read more on our blog
            </p>
          </div>
        </div>

        {/* Stories Horizontal Slider Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-7 scroll-smooth"
        >
          {storiesData.map((card) => (
            <div
              key={card.id}
              style={{ background: "linear-gradient(180deg, #374EC4 0%, #2C2D8A 100%)" }}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-[290px] sm:w-[340px] md:w-[370px] shrink-0 snap-start"
            >
              {/* Top Image (fits flush with top, left, right) */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Card Title */}
                <h3 className="text-white text-base sm:text-xl font-medium leading-snug mb-3 line-clamp-2 font-sans">
                  {card.title}
                </h3>

                {/* Author Info Block */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/20">
                    <img
                      src={card.avatar}
                      alt={card.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs sm:text-sm font-semibold leading-none mb-1">
                      {card.author}
                    </span>
                    <span className="text-blue-200/60 text-[10px] sm:text-xs leading-none">
                      {card.date}
                    </span>
                  </div>
                </div>

                {/* Excerpt Description */}
                <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {card.description}
                </p>

                {/* Read more Pill Button */}
                <div className="mt-auto pt-1 text-left">
                  <button
                    className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 transition-colors py-2.5 px-6 rounded-full text-xs font-bold shadow-sm"
                  >
                    <span>Read more</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
