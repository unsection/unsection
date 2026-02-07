'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { fetchCollections } from '@/app/services/collectionService';
import { PAGINATION } from '@/app/constants/navigation';
import type { CollectionItem } from '@/app/types';

/**
 * SectionCollections Component
 * 
 * Displays a paginated grid of collection items with infinite scrolling.
 * Uses IntersectionObserver for efficient scroll detection.
 * 
 * Optimizations:
 * - Uses ref for loading state to prevent stale closures
 * - Proper IntersectionObserver cleanup with disconnect()
 * - Next.js Image component for optimized image loading
 * - Reduced animation delays for better UX
 */
const SectionCollections: React.FC = () => {
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  // Refs for managing async state
  const observerTarget = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const initialLoadDone = useRef(false);

  const loadItems = useCallback(async (pageNum: number) => {
    // Use ref to check loading state to avoid stale closure issues
    if (loadingRef.current || (!hasMore && pageNum !== 1)) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const { data, hasMore: moreAvailable } = await fetchCollections(
        pageNum, 
        PAGINATION.ITEMS_PER_PAGE
      );
      
      setItems(prev => pageNum === 1 ? data : [...prev, ...data]);
      setHasMore(moreAvailable);
      setPage(pageNum + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [hasMore]);

  // Initial load - runs once on mount
  useEffect(() => {
    if (!initialLoadDone.current) {
      loadItems(1);
      initialLoadDone.current = true;
    }
  }, [loadItems]);

  // Infinite scroll observer with proper cleanup
  useEffect(() => {
    const target = observerTarget.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loadingRef.current) {
          loadItems(page);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' 
      }
    );

    observer.observe(target);

    // Use disconnect() for cleaner cleanup - handles all observed elements
    return () => observer.disconnect();
  }, [hasMore, page, loadItems]);

  return (
    <section 
      className="w-full bg-black flex flex-col items-center px-4 md:px-10 py-10"
      aria-label="Collections gallery"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <article 
            key={item.id}
            className="flex flex-col group cursor-pointer animate-fade-in-up"
            style={{ 
              animationDelay: `${(index % PAGINATION.ITEMS_PER_PAGE) * PAGINATION.ANIMATION_DELAY_MS}ms` 
            }}
          >
            {/* Thumbnail with Next.js Image optimization */}
            <div className="relative h-[277px] w-full overflow-hidden bg-[#111] rounded-lg">
              <Image
                src={item.thumbnail || '/images/mlc3xyh9-a5354c1.png'}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
              />
              {/* New badge */}
              {item.isNew && (
                <span className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-2 text-black text-sm font-medium leading-[10px]">
                  New
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex items-center gap-3 py-2 mt-2">
              <span className="text-white text-sm font-medium leading-[18px]">
                {item.tag}
              </span>
              <span 
                className="w-px h-3.5 bg-white/10" 
                aria-hidden="true" 
              />
              <span className="text-white/60 text-sm font-medium leading-[18px] truncate">
                {item.title}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Loading Indicator / Error Message / Sentinel */}
      <div 
        ref={observerTarget} 
        className="w-full flex justify-center py-8"
        aria-live="polite"
      >
        {loading && (
          <p className="text-white/60 text-sm animate-pulse">
            Loading more...
          </p>
        )}
        {error && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-red-500 text-sm" role="alert">
              {error}
            </p>
            <button 
              onClick={() => loadItems(page)}
              className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Try Again
            </button>
          </div>
        )}
        {!hasMore && items.length > 0 && !loading && (
          <p className="text-white/40 text-sm">
            No more items to load
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionCollections;
