import React from 'react';
import SideMenu from './hero/SideMenu';
import HeroHeadline from './hero/HeroHeadline';
import MediaSpot from './hero/MediaSpot';
import Tags from './hero/Tags';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[680px] h-auto bg-black text-white font-sans overflow-hidden pb-10">
      {/* Side Menu - Hidden on mobile/tablet */}
      <SideMenu />

      {/* Main Container */}
      <div className="ml-0 lg:ml-[260px] relative z-0 flex flex-col items-center pt-[40px] px-4 lg:px-0">
        <div className="w-full max-w-[1106px] flex flex-col items-center">
        
        {/* Hero Top */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end self-stretch justify-between w-full gap-10 lg:gap-0">
          
          {/* Headline Section */}
          <HeroHeadline />

          {/* Media Spot */}
          <MediaSpot />
        </div>

        {/* Tags */}
        <Tags />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
