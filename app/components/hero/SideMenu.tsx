'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDE_MENU_ITEMS } from '@/app/constants/navigation';
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

  return (
    <nav 
      className="hidden lg:flex absolute left-10 top-10 flex-col items-start gap-2 min-w-[200px] z-10 group"
      aria-label="Section categories"
    >
      <ul className="flex flex-col gap-1">
        {SIDE_MENU_ITEMS.map((item) => {
          const href = `/category/${getCategorySlug(item)}`;
          const isActive = pathname === href;

          return (
            <li key={item}>
              <Link 
                href={href}
                className={`text-2xl font-medium text-white transition-opacity duration-300 cursor-pointer focus:outline-none ${
                  isActive 
                    ? '!opacity-100 border-b-2 border-white' 
                    : 'group-hover:opacity-60 hover:!opacity-100'
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

SideMenu.displayName = 'SideMenu';

export default SideMenu;
