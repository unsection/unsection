'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tabs from './topbar/Tabs';
import ActionButtons from './topbar/ActionButtons';
import MobileMenuOverlay from './topbar/MobileMenuOverlay';
import { MenuIcon, CloseIcon } from './icons';
import { useBodyScrollLock } from '@/app/hooks';
import { NAVIGATION_TABS } from '@/app/constants/navigation';

/**
 * TopBar Component
 * 
 * Main navigation header with responsive design.
 * Features:
 * - Desktop: Full navigation with tabs and action buttons
 * - Mobile: Hamburger menu with overlay
 * - Scroll lock when mobile menu is open
 */
const TopBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useBodyScrollLock(isMenuOpen);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="w-full bg-black flex justify-center relative z-50 px-4 lg:px-10">
      <div className="flex items-center gap-4 md:gap-12 bg-black py-4 w-full h-[78px]">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="shrink-0 w-[110px] h-9 relative focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          aria-label="Unsection - Home"
        >
          <Image 
            src="/images/mlb6tspm-49v5ozm.svg" 
            alt="Unsection" 
            fill 
            className="object-contain"
            priority // LCP optimization - above the fold
          />
        </Link>

        {/* Desktop Navigation Tabs */}
        <Tabs 
          tabs={NAVIGATION_TABS} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Search Input */}
        <div className="flex grow items-center rounded-full bg-white/10 py-[11px] px-3 md:px-5 h-[46px] transition-colors hover:bg-white/20 focus-within:bg-white/20 group">
          <div className="flex items-center gap-3 w-full">
            <div className="w-6 h-6 relative shrink-0 opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
              <Image 
                src="/images/mlb6tspn-3wicgg7.svg" 
                alt="" 
                fill
                aria-hidden="true"
              />
            </div>
            <input 
              type="search" 
              placeholder='Try "Pricing table", or "Benefits"'
              className="bg-transparent border-none outline-none text-white/60 text-sm font-medium w-full placeholder:text-white/60 focus:text-white focus:placeholder:text-white/40 transition-colors min-w-0"
              aria-label="Search sections"
            />
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <ActionButtons />

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white relative z-50 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay 
        isMenuOpen={isMenuOpen} 
        tabs={NAVIGATION_TABS} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </header>
  );
};

export default TopBar;
