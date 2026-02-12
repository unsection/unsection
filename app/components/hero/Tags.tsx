'use client';

import React, { useState, useCallback, memo, useRef, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SIDE_MENU_ITEMS, FILTER_TAGS, TYPE_TAGS, SORT_OPTIONS, type FilterTag, type TypeTag, type SortOption, type SideMenuItem } from '@/app/constants/navigation';

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
 * Reusable Dropdown Component
 */
interface DropdownProps {
  label: string;
  items: readonly string[];
  activeItem: string | null;
  onSelect: (item: string) => void;
  zIndex?: number;
  allowClear?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, activeItem, onSelect, zIndex = 30, allowClear = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (item: string) => {
    if (!allowClear && activeItem === item) {
      setIsOpen(false);
      return; // Do nothing if clearing is disabled and same item selected
    }
    onSelect(allowClear && activeItem === item ? '' : item);
    setIsOpen(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(''); // Reset selection
    setIsOpen(false);
  };

  const showReset = allowClear && activeItem;

  return (
    <div ref={dropdownRef} className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-white text-[15px] font-semibold tracking-[-0.37px] transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full border-2 border-white/10 px-4 py-2 ${
          activeItem ? 'opacity-100' : 'opacity-60 hover:opacity-100'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        {activeItem && <span className="text-white/60">{activeItem}</span>}
        {showReset ? (
          <div onClick={handleReset} role="button" aria-label="Reset selection">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              className="w-5 h-5"
            > 
              <g clipPath="url(#clip0_reset)"> 
                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/> 
                <path d="M9.17011 15.5794C8.98011 15.5794 8.79011 15.5094 8.64011 15.3594C8.35011 15.0694 8.35011 14.5894 8.64011 14.2994L14.3001 8.63938C14.5901 8.34938 15.0701 8.34938 15.3601 8.63938C15.6501 8.92937 15.6501 9.40937 15.3601 9.69937L9.70011 15.3594C9.56011 15.5094 9.36011 15.5794 9.17011 15.5794Z" fill="white"/> 
                <path d="M14.8301 15.5794C14.6401 15.5794 14.4501 15.5094 14.3001 15.3594L8.64011 9.69937C8.35011 9.40937 8.35011 8.92937 8.64011 8.63938C8.93011 8.34938 9.41011 8.34938 9.70011 8.63938L15.3601 14.2994C15.6501 14.5894 15.6501 15.0694 15.3601 15.3594C15.2101 15.5094 15.0201 15.5794 14.8301 15.5794Z" fill="white"/> 
              </g> 
              <defs> 
                <clipPath id="clip0_reset"> 
                  <rect width="24" height="24" fill="white"/> 
                </clipPath> 
              </defs> 
            </svg>
          </div>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          > 
            <path d="M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z" fill="white"/> 
          </svg>
        )}
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-4 py-2 bg-[#111] border border-white/10 rounded-xl flex flex-col w-[200px] max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ zIndex }}
        >
          {items.map((item) => (
            <button 
              key={item}
              onClick={() => handleSelect(item)}
              className={`text-left px-4 py-2 text-[15px] font-medium transition-colors hover:bg-white/5 focus:outline-none focus:bg-white/5 ${
                activeItem === item ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Tags Component
 * 
 * Filter tags for the hero section.
 * Uses shared constants for tag list.
 * Individual tag buttons are memoized for performance.
 */
const Tags: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isCategoryPage = pathname?.startsWith('/category/');
  const isStylePage = pathname?.startsWith('/styles/');
  
  const [activeTag, setActiveTag] = useState<FilterTag | null>(null);
  const [activeSection, setActiveSection] = useState<SideMenuItem | null>(null);
  const [activeType, setActiveType] = useState<TypeTag | null>(null);
  const [activeSort, setActiveSort] = useState<SortOption>('Latest');
  
  // Get active tab from URL, default to 'website'
  const activeSource = (searchParams?.get('source') as 'website' | 'community') || 'website';
  
  // Initialize active tag from URL for style pages
  useEffect(() => {
    if (isStylePage) {
      const styleSlug = pathname?.split('/styles/')[1];
      if (styleSlug) {
        // Convert slug to Title Case to match FILTER_TAGS
        const styleName = styleSlug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        // Only set if it's a valid tag
        if (FILTER_TAGS.includes(styleName as FilterTag)) {
          setActiveTag(styleName as FilterTag);
        }
      }
    }
  }, [pathname, isStylePage]);

  const handleSourceChange = useCallback((source: 'website' | 'community') => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('source', source);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  const handleTagClick = useCallback((tag: string) => {
    if (isStylePage) {
      // If on style page, navigate to new style page
      const slug = tag.toLowerCase().replace(/\s+/g, '-');
      router.push(`/styles/${slug}`);
    } else {
      setActiveTag(prev => prev === tag ? null : tag as FilterTag);
    }
  }, [isStylePage, router]);

  const handleSectionClick = useCallback((section: string) => {
    setActiveSection(prev => prev === section ? null : section as SideMenuItem);
  }, []);

  const handleTypeClick = useCallback((type: string) => {
    setActiveType(prev => prev === type ? null : type as TypeTag);
  }, []);

  const handleSortClick = useCallback((sort: string) => {
    setActiveSort(sort as SortOption);
  }, []);

  if (isCategoryPage || isStylePage) {
    return (
      <div className="relative mt-[60px] w-full max-w-[1106px] flex justify-between items-center z-20 h-[42px]">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleSourceChange('website')}
            className={`inline-flex items-center justify-center gap-2 border-2 rounded-full px-[15px] py-[7px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 ${
              activeSource === 'website' 
                ? 'bg-white border-white text-black' 
                : 'border-white/10 hover:bg-white/5 text-white/60'
            }`}
            aria-pressed={activeSource === 'website'}
          >
            <span className={`text-[15px] font-semibold tracking-[-0.37px] whitespace-nowrap ${
              activeSource === 'website' ? 'text-black' : 'text-white/60'
            }`}>
              Website
            </span>
            <span className={`text-[13px] font-medium ${
              activeSource === 'website' ? 'text-black/60' : 'text-white/60'
            }`}>
              128
            </span>
          </button>

          <button 
            onClick={() => handleSourceChange('community')}
            className={`inline-flex items-center justify-center gap-2 border-2 rounded-full px-[15px] py-[7px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 ${
              activeSource === 'community' 
                ? 'bg-white border-white text-black' 
                : 'border-white/10 hover:bg-white/5 text-white/60'
            }`}
            aria-pressed={activeSource === 'community'}
          >
            <span className={`text-[15px] font-semibold tracking-[-0.37px] whitespace-nowrap ${
              activeSource === 'community' ? 'text-black' : 'text-white/60'
            }`}>
              Community
            </span>
            <span className={`text-[13px] font-medium ${
              activeSource === 'community' ? 'text-black/60' : 'text-white/60'
            }`}>
              64
            </span>
          </button>

          <div className="w-px h-6 bg-white/10 mx-2" aria-hidden="true" />

          {isStylePage && (
            <Dropdown 
              label="Section" 
              items={SIDE_MENU_ITEMS} 
              activeItem={activeSection} 
              onSelect={handleSectionClick}
              zIndex={30}
            />
          )}

          {!isStylePage && (
            <Dropdown 
              label="Style"  
              items={FILTER_TAGS} 
              activeItem={activeTag} 
              onSelect={handleTagClick}
              zIndex={30}
            />
          )}

          <Dropdown 
            label="Type"  
            items={TYPE_TAGS} 
            activeItem={activeType} 
            onSelect={handleTypeClick}
            zIndex={30}
          />
        </div>

        <Dropdown 
          label="Sort" 
          items={SORT_OPTIONS} 
          activeItem={activeSort} 
          onSelect={handleSortClick}
          zIndex={30}
          allowClear={false}
        />
      </div>
    );
  }

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
