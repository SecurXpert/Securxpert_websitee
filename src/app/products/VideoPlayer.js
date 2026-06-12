"use client";

import React, { useRef, useState } from "react";

export default function VideoPlayer({ product }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!product.videoUrl) {
    return (
      <div className="w-full h-full group cursor-pointer">
        <img 
          src={product.image} 
          alt={`${product.title} Video Thumbnail`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <div 
            className="w-0 h-0 border-y-[12px] sm:border-y-[16px] border-y-transparent border-l-[20px] sm:border-l-[28px] ml-2 sm:ml-3" 
            style={{ borderLeftColor: product.accent || '#1E40AF' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group cursor-pointer">
      <video
        ref={videoRef}
        src={product.videoUrl}
        controls={isPlaying}
        onPause={handlePause}
        onPlay={handlePlay}
        className="w-full h-full object-cover outline-none bg-black"
        poster={product.image}
      />
      
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          onClick={handlePlayClick}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 z-10 cursor-pointer">
            <div 
              className="w-0 h-0 border-y-[12px] sm:border-y-[16px] border-y-transparent border-l-[20px] sm:border-l-[28px] ml-2 sm:ml-3" 
              style={{ borderLeftColor: product.accent || '#1E40AF' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
