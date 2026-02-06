import React from 'react';
import Image from 'next/image';

interface Tab {
  icon: string;
  id: number;
  alt: string;
  label: string;
}

interface MobileMenuOverlayProps {
  isMenuOpen: boolean;
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ isMenuOpen, tabs, activeTab, setActiveTab }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 top-[78px] bg-black z-40 lg:hidden flex flex-col px-4 py-6 animate-in slide-in-from-top-5 fade-in duration-200 overflow-y-auto">
      <div className="flex flex-col gap-6">
        {/* Mobile Navigation Tabs */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
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

        {/* Side Menu Items */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
          {[
            "Hero", "Testimonials", "Feature", "Call to actions", 
            "Footer", "Blog", "Navbar", "Pricing", 
            "Logo", "FAQs", "Team", "Contact", "Works"
          ].map((item) => (
            <button 
              key={item} 
              className="flex items-center rounded-xl py-2 px-3 transition-colors duration-200 bg-white/5 hover:bg-white/10 text-white text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="flex flex-col gap-4 pb-20">
          {/* Note: 'Pricing' is already included in the side menu list above, but kept here if it's a specific page link */}
          <a href="#" className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors">
            Pricing
          </a>
          <a href="#" className="text-white text-lg font-semibold py-2 hover:text-white/80 transition-colors">
            Login
          </a>
          <button className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-white py-6 w-full mt-2 hover:bg-gray-200 transition-colors z-50">
            <span className="text-black text-lg font-semibold">Join for free</span>
            <div className="w-6 h-6 relative">
              <Image src="/images/mlb6tspn-8xadbtu.svg" alt="Arrow" fill />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;
