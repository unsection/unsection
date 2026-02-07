'use client';

import React, { useState, useCallback, memo } from 'react';
import { FILTER_TAGS, type FilterTag } from '@/app/constants/navigation';

/**
 * Individual tag button component
 */
interface TagButtonProps {
  tag: FilterTag;
  isActive: boolean;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = memo(({ tag, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 border-2 rounded-full px-[15px] py-[7px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 ${
      isActive 
        ? 'bg-white border-white text-black' 
        : 'border-white/10 hover:bg-white/5 text-white/60'
    }`}
    aria-pressed={isActive}
  >
    <span className={`text-[15px] font-semibold tracking-[-0.37px] whitespace-nowrap ${
      isActive ? 'text-black' : 'text-white/60'
    }`}>
      {tag}
    </span>
  </button>
));

TagButton.displayName = 'TagButton';

/**
 * Tags Component
 * 
 * Filter tags for the hero section.
 * Uses shared constants for tag list.
 * Individual tag buttons are memoized for performance.
 */
const Tags: React.FC = () => {
  const [activeTag, setActiveTag] = useState<FilterTag | null>(null);

  const handleTagClick = useCallback((tag: FilterTag) => {
    setActiveTag(prev => prev === tag ? null : tag);
  }, []);

  return (
    <div 
      className="flex flex-wrap items-center justify-start content-center gap-x-1 gap-y-2 mt-[60px] w-full max-w-[1106px]"
      role="group"
      aria-label="Filter by style"
    >
      {FILTER_TAGS.map((tag) => (
        <TagButton
          key={tag}
          tag={tag}
          isActive={activeTag === tag}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </div>
  );
};

export default Tags;
