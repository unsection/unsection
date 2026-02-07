import React, { memo } from 'react';
import Image from 'next/image';
import type { Tab } from '@/app/types';

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

/**
 * Navigation Tabs Component
 * 
 * Renders horizontal tab navigation for desktop view.
 * Memoized to prevent unnecessary re-renders.
 */
const Tabs: React.FC<TabsProps> = memo(({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav 
      className="hidden lg:inline-flex shrink-0 items-center gap-2"
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center rounded-xl py-2 pl-2 pr-2.5 gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              isActive 
                ? 'bg-white/10' 
                : 'bg-transparent hover:bg-white/5'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
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
          </button>
        );
      })}
    </nav>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
