import React from 'react';
import Image from 'next/image';

interface Tab {
  icon: string;
  id: number;
  alt: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
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
  );
};

export default Tabs;
