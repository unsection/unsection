import React, { memo } from 'react';
import { SIDE_MENU_ITEMS } from '@/app/constants/navigation';

/**
 * Side Menu Component
 * 
 * Desktop sidebar navigation with hover effects.
 * Uses shared constants for menu items.
 * Memoized since content is static.
 */
const SideMenu: React.FC = memo(() => {
  return (
    <nav 
      className="hidden lg:flex absolute left-10 top-10 flex-col items-start gap-2 min-w-[200px] z-10 group"
      aria-label="Section categories"
    >
      <ul className="flex flex-col gap-2">
        {SIDE_MENU_ITEMS.map((item) => (
          <li key={item}>
            <button 
              className="text-2xl font-medium text-white transition-opacity duration-300 cursor-pointer group-hover:opacity-60 hover:!opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});

SideMenu.displayName = 'SideMenu';

export default SideMenu;
