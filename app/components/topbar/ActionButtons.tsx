import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Action Buttons Component
 * 
 * Desktop navigation action buttons (Pricing, Login, Join).
 * Memoized since it has no props and rarely changes.
 */
const ActionButtons: React.FC = memo(() => {
  return (
    <div className="hidden lg:inline-flex shrink-0 items-center justify-end gap-7">
      <Link 
        href="#" 
        className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
      >
        Pricing
      </Link>
      <Link 
        href="/login" 
        className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
      >
        Login
      </Link>
      
      <Link 
        href="/signup" 
        className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white pl-4 pr-3 py-4 max-h-[44px] hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
      >
        <span className="text-black text-[15px] font-semibold">Join for free</span>
        <div className="w-6 h-6 relative">
          <Image 
            src="/images/mlb6tspn-8xadbtu.svg" 
            alt="" 
            fill
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
  );
});

ActionButtons.displayName = 'ActionButtons';

export default ActionButtons;
