"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Tabs from './topbar/Tabs';
import ActionButtons from './topbar/ActionButtons';
import MobileMenuOverlay from './topbar/MobileMenuOverlay';

export default function TopBar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const tabs = [
    { icon: "/images/mlb6tspm-20uzgnr.svg", id: 0, alt: "Sections", label: "Sections" },
    { icon: "/images/mlb6tspm-q4rawvd.svg", id: 1, alt: "Animations", label: "Animations" },
    { icon: "/images/mlb6tspm-rxd8tvz.svg", id: 2, alt: "Supply", label: "Supply" },
  ];

  return (
    <div className="w-full bg-black flex justify-center relative z-50 px-4 lg:px-[40px]">
      <div className="flex items-center gap-4 md:gap-12 bg-black py-4 w-full h-[78px]">
        {/* Brand */}
        <div className="shrink-0 w-[110px] h-[36px] relative cursor-pointer">
          <Image 
            src="/images/mlb6tspm-49v5ozm.svg" 
            alt="Brand" 
            fill 
            className="object-contain" 
          />
        </div>

        {/* Type / Navigation - Hidden on mobile/tablet */}
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Search */}
        <div className="flex grow items-center rounded-full bg-white/10 py-[11px] px-3 md:px-5 h-[46px] transition-colors hover:bg-white/20 cursor-text group">
          <div className="flex items-center gap-3 w-full">
            <div className="w-6 h-6 relative shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              <Image src="/images/mlb6tspn-3wicgg7.svg" alt="Search" fill />
            </div>
            <input 
              type="text" 
              placeholder="Try “Pricing table”, or “Benefits”"
              className="bg-transparent border-none outline-none text-white/60 text-sm font-medium w-full placeholder:text-white/60 focus:text-white focus:placeholder:text-white/40 transition-colors min-w-0"
            />
          </div>
        </div>

        {/* Actions - Hidden on mobile/tablet */}
        <ActionButtons />

        {/* Mobile Menu Button - Visible on mobile/tablet */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white relative z-50"
        >
          {isMenuOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay 
        isMenuOpen={isMenuOpen} 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
}
