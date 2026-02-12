'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCategoryName } from '@/app/constants/categories';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const isCategoryPage = pathname?.startsWith('/category/');
  const isStylePage = pathname?.startsWith('/styles/');
  
  if (!isCategoryPage && !isStylePage) return null;

  let displayName = '';

  if (isCategoryPage) {
    const categorySlug = pathname?.split('/category/')[1];
    displayName = categorySlug ? getCategoryName(categorySlug) : '';
  } else if (isStylePage) {
    const styleSlug = pathname?.split('/styles/')[1];
    if (styleSlug) {
      // Convert slug to Title Case (e.g. "large-type" -> "Large Type")
      displayName = styleSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }

  return (
    <div className="flex items-center gap-2 text-white/60 mb-2">
      <Link href="/" className="hover:text-white transition-colors" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> 
          <g clipPath="url(#clip0_4418_7358)"> 
            <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="currentColor"/> 
            <path d="M17.6 22.5608H6.39996C4.57996 22.5608 2.91996 21.1608 2.61996 19.3708L1.28996 11.4008C1.06996 10.1608 1.67996 8.5708 2.66996 7.7808L9.59996 2.2308C10.94 1.1508 13.05 1.1608 14.4 2.2408L21.33 7.7808C22.31 8.5708 22.91 10.1608 22.71 11.4008L21.38 19.3608C21.08 21.1308 19.38 22.5608 17.6 22.5608ZM11.99 2.9308C11.46 2.9308 10.93 3.0908 10.54 3.4008L3.60996 8.9608C3.04996 9.4108 2.64996 10.4508 2.76996 11.1608L4.09996 19.1208C4.27996 20.1708 5.32996 21.0608 6.39996 21.0608H17.6C18.67 21.0608 19.72 20.1708 19.9 19.1108L21.23 11.1508C21.34 10.4508 20.94 9.3908 20.39 8.9508L13.46 3.4108C13.06 3.0908 12.52 2.9308 11.99 2.9308Z" fill="currentColor"/> 
          </g> 
          <defs> 
            <clipPath id="clip0_4418_7358"> 
              <rect width="24" height="24" fill="white"/> 
            </clipPath> 
          </defs> 
        </svg> 
      </Link>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40"> 
        <path d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z" fill="currentColor"/> 
        <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="currentColor"/> 
      </svg>

      <span className="text-[15px] font-medium text-white">{displayName}</span>
    </div>
  );
};

export default Breadcrumb;