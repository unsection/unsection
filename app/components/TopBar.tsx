"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function TopBar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { icon: "/images/mlb6tspm-20uzgnr.svg", id: 0, alt: "Sections", label: "Sections" },
    { icon: "/images/mlb6tspm-q4rawvd.svg", id: 1, alt: "Animations", label: "Animations" },
    { icon: "/images/mlb6tspm-rxd8tvz.svg", id: 2, alt: "Supply", label: "Supply" },
  ];

  return (
    <div className="w-full bg-black flex justify-center relative z-50">
      <div className="flex items-center gap-4 md:gap-12 bg-black px-4 md:px-10 py-4 w-full max-w-[1440px] h-[78px]">
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
        <div className="hidden lg:inline-flex shrink-0 items-center gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`flex shrink-0 items-center rounded-xl py-2 pl-2 pr-2.5 gap-2 transition-colors duration-200 ${
                activeTab === index 
                  ? 'bg-white/10' 
                  : 'bg-transparent hover:bg-white/5'
              }`}
            >
              <div className="w-6 h-6 relative shrink-0">
                <Image src={tab.icon} alt={tab.alt} fill />
              </div>
              <span className="text-white text-sm font-medium leading-[18px]">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

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
        <div className="hidden lg:inline-flex shrink-0 items-center justify-end gap-7">
          <a href="#" className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity">
            Pricing
          </a>
          <a href="#" className="text-white text-[15px] font-semibold hover:opacity-80 transition-opacity">
            Login
          </a>
          
          <button className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white pl-4 pr-3 py-4 max-h-[44px] hover:bg-gray-200 transition-colors">
            <span className="text-black text-[15px] font-semibold">Join for free</span>
            <div className="w-6 h-6 relative">
              <Image src="/images/mlb6tspn-8xadbtu.svg" alt="Arrow" fill />
            </div>
          </button>
        </div>

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
      {isMenuOpen && (
        <div className="fixed inset-0 top-[78px] bg-black z-40 lg:hidden flex flex-col p-6 animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col gap-6">
            {/* Mobile Navigation Tabs */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
              <span className="text-white/60 text-sm font-medium">View:</span>
              <div className="flex flex-wrap gap-4">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center rounded-xl py-2 pl-2 pr-2.5 gap-2 transition-colors duration-200 ${
                      activeTab === index 
                        ? 'bg-white/10' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-6 h-6 relative shrink-0">
                      <Image src={tab.icon} alt={tab.alt} fill />
                    </div>
                    <span className="text-white text-sm font-medium leading-[18px]">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors">
                Login
              </a>
              <button className="flex items-center justify-center gap-2 rounded-full bg-white py-4 w-full mt-2 hover:bg-gray-200 transition-colors">
                <span className="text-black text-lg font-semibold">Join for free</span>
                <div className="w-6 h-6 relative">
                  <Image src="/images/mlb6tspn-8xadbtu.svg" alt="Arrow" fill />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
