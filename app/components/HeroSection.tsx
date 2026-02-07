import React from 'react';
import SideMenu from './hero/SideMenu';
import HeroHeadline from './hero/HeroHeadline';
import MediaSpot from './hero/MediaSpot';
import Tags from './hero/Tags';

/**
 * Hero Section Component
 * 
 * Main hero section containing:
 * - Side navigation menu (desktop only)
 * - Headline with CTA
 * - Media cards showcase
 * - Filter tags
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[680px] h-auto bg-black text-white overflow-hidden pb-10"
      aria-label="Hero section"
    >
      {/* Side Menu - Desktop only */}
      <SideMenu />

      {/* Main Container */}
      <div className="ml-0 lg:ml-[260px] relative z-0 flex flex-col items-center pt-10 px-4 lg:px-0">
        <div className="w-full max-w-[1106px] flex flex-col items-center">
          
          {/* Hero Top - Headline and Media */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end self-stretch justify-between w-full gap-10 lg:gap-0">
            <HeroHeadline />
            <MediaSpot />
          </div>

          {/* Filter Tags */}
          <Tags />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
