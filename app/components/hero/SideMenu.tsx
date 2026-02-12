'use client';

import React, { memo, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDE_MENU_ITEMS, FILTER_TAGS } from '@/app/constants/navigation';
import { getCategorySlug } from '@/app/constants/categories';

/**
 * Side Menu Component
 * 
 * Desktop sidebar navigation with hover effects.
 * Uses shared constants for menu items.
 * Memoized since content is static.
 */
const SideMenu: React.FC = memo(() => {
  const pathname = usePathname();
  const isStylePage = pathname?.startsWith('/styles/');
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [showBottomGradient, setShowBottomGradient] = useState(false);
  const [showTopGradient, setShowTopGradient] = useState(false);

  // Check if scroll is needed and update gradient visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = scrollContainerRef.current;
      // Show bottom gradient if content is scrollable and not at the very bottom
      setShowBottomGradient(scrollHeight > clientHeight && (scrollHeight - scrollTop - clientHeight > 5));
      // Show top gradient if scrolled down
      setShowTopGradient(scrollTop > 5);
    }
  };

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [isStylePage]); // Re-check when switching page types

  // Determine which items to show
  const items = isStylePage ? FILTER_TAGS : SIDE_MENU_ITEMS;

  return (
    <nav 
      className="hidden lg:flex absolute left-10 top-10 flex-col items-start gap-2 min-w-[200px] z-10 group"
      aria-label={isStylePage ? "Style categories" : "Section categories"}
    >
      <div className="relative w-full">
        <ul 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex flex-col gap-1 max-h-[500px] overflow-y-auto scrollbar-hide pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => {
            // Determine href based on item type
            let href = '';
            let isActive = false;
            
            if (isStylePage) {
              const slug = item.toLowerCase().replace(/\s+/g, '-');
              href = `/styles/${slug}`;
              // For style pages, check if current path contains the slug
              // We check specifically for /styles/{slug} to avoid partial matches
              isActive = pathname === href;
            } else {
              href = `/category/${getCategorySlug(item)}`;
              isActive = pathname === href;
            }

            return (
              <li key={item} className="shrink-0">
                <Link 
                  href={href}
                  className={`text-2xl font-medium text-white transition-opacity duration-300 cursor-pointer focus:outline-none block py-0.5 ${
                    isActive 
                      ? '!opacity-100 border-b-2 border-white inline-block' 
                      : 'group-hover:opacity-60 hover:!opacity-100 opacity-100'
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Top gradient overlay */}
        <div 
          className={`absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300 z-20 ${
            showTopGradient ? 'opacity-100' : 'opacity-0'
          }`} 
          aria-hidden="true"
        />

        {/* Bottom gradient overlay */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none transition-opacity duration-300 z-20 ${
            showBottomGradient ? 'opacity-100' : 'opacity-0'
          }`} 
          aria-hidden="true"
        />
      </div>
    </nav>
  );
});

SideMenu.displayName = 'SideMenu';

export default SideMenu;
