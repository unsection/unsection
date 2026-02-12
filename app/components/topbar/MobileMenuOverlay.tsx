import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Tab } from '@/app/types';
import { SIDE_MENU_ITEMS } from '@/app/constants/navigation';
import { getCategorySlug } from '@/app/constants/categories';

interface MobileMenuOverlayProps {
  isMenuOpen: boolean;
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

/**
 * Mobile Menu Overlay Component
 * 
 * Full-screen navigation overlay for mobile/tablet devices.
 * Features:
 * - Navigation tabs
 * - Side menu items
 * - Action buttons (Pricing, Login, Join)
 * 
 * Memoized to prevent unnecessary re-renders.
 */
const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = memo(({ 
  isMenuOpen, 
  tabs, 
  activeTab, 
  setActiveTab 
}) => {
  if (!isMenuOpen) return null;

  return (
    <div 
      id="mobile-menu"
      className="fixed inset-0 top-[78px] bg-black z-40 lg:hidden flex flex-col px-4 py-6 animate-in slide-in-from-top-5 fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <nav className="flex flex-col gap-6">
        {/* Mobile Navigation Tabs */}
        <section className="flex flex-col gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-wrap gap-4" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const className = `flex items-center rounded-xl py-2 pl-2 pr-2.5 gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isActive 
                  ? 'bg-white/10' 
                  : 'bg-white/5 hover:bg-white/10'
              }`;

              const content = (
                <>
                  <div className="w-6 h-6 relative shrink-0">
                    <Image 
                      src={tab.icon} 
                      alt="" 
                      fill
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-white text-sm font-medium leading-[18px]">
                    {tab.label}
                  </span>
                </>
              );

              if (tab.href) {
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.id)}
                    className={className}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {content}
                  </Link>
                );
              }
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={className}
                  role="tab"
                  aria-selected={isActive}
                >
                  {content}
                </button>
              );
            })}
          </div>
        </section>

        {/* Side Menu Items */}
        <section className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
          {SIDE_MENU_ITEMS.map((item) => (
            <Link 
              key={item} 
              href={`/category/${getCategorySlug(item)}`}
              className="flex items-center rounded-xl py-2 px-3 transition-colors duration-200 bg-white/5 hover:bg-white/10 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {item}
            </Link>
          ))}
        </section>

        {/* Mobile Actions */}
        <section className="flex flex-col gap-4 pb-20">
          <a 
            href="#" 
            className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          >
            Pricing
          </a>
          <a 
            href="#" 
            className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          >
            Login
          </a>
          <button className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-white py-6 w-full mt-2 hover:bg-gray-200 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black/50">
            <span className="text-black text-lg font-semibold">Join for free</span>
            <div className="w-6 h-6 relative">
              <Image 
                src="/images/mlb6tspn-8xadbtu.svg" 
                alt="" 
                fill
                aria-hidden="true"
              />
            </div>
          </button>
        </section>
      </nav>
    </div>
  );
});

MobileMenuOverlay.displayName = 'MobileMenuOverlay';

export default MobileMenuOverlay;
