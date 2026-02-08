'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCategoryName } from '@/app/constants/categories';
import Breadcrumb from './Breadcrumb';

/**
 * Hero Headline Component
 * 
 * Main hero section headline with title, description, and CTA button.
 * Memoized since content is static.
 */
const HeroHeadline: React.FC = memo(() => {
  const pathname = usePathname();
  const isCategoryPage = pathname?.startsWith('/category/');
  const categorySlug = pathname?.split('/category/')[1];
  const categoryName = categorySlug ? getCategoryName(categorySlug) : '';

  const title = isCategoryPage 
    ? `Curated ${categoryName} section design inspiration`
    : 'Curated website section design inspiration';

  return (
    <div className="inline-flex flex-col flex-shrink-0 items-start gap-6 text-left">
      <Breadcrumb />
      <h1 className="w-full lg:w-80 text-white">
        {title}
      </h1>
      <p className="w-full lg:w-80 text-lg leading-[27px] text-white/60">
        Browse the best website section design examples — fresh ideas for your next build.
      </p>
      
      <a 
        href="#subscribe"
        className="inline-flex items-center justify-center gap-1 rounded-full bg-transparent border-2 border-white/60 px-4 py-4 h-[46px] mt-2 hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="currentColor"/>
          <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="currentColor"/>
        </svg>
        <span className="text-[15px] font-semibold leading-5">
          Subscribe
        </span>
      </a>
    </div>
  );
});

HeroHeadline.displayName = 'HeroHeadline';

export default HeroHeadline;
