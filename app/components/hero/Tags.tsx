"use client";
import React, { useState } from 'react';

const Tags = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = [
    "UI Mockup", "Uncommon", "Gradient", "Text Heavy", "Light", 
    "Flat Color", "Video", "Vector", "Table View", "Black & White", 
    "Dark", "Card", "Colorful", "Bento", "Visible Border", "Minimal"
  ];

  return (
    <div className="flex flex-wrap items-center justify-start content-center gap-x-1 gap-y-2 mt-[60px] w-full max-w-[1106px]">
      {tags.map((tag) => (
        <button 
          key={tag} 
          onClick={() => setActiveTag(tag === activeTag ? null : tag)}
          className={`inline-flex items-center justify-center gap-2 border-2 rounded-full px-[15px] py-[7px] transition-colors cursor-pointer ${
            activeTag === tag 
              ? "bg-white border-white text-black" 
              : "border-white/10 hover:bg-white/5 text-white/60"
          }`}
        >
          <span className={`text-[15px] font-semibold tracking-[-0.37px] whitespace-nowrap ${
            activeTag === tag ? "text-black" : "text-white/60"
          }`}>
            {tag}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tags;
