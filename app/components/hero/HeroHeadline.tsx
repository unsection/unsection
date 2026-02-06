import React from 'react';
import Image from 'next/image';

const HeroHeadline = () => {
  return (
    <div className="inline-flex flex-col flex-shrink-0 items-start gap-6 text-left">
      <h1 className="w-full lg:w-[320px] text-4xl leading-[41px] tracking-[-0.9px] text-white font-sans">
        Discover curated website section design inspiration
      </h1>
      <p className="w-full lg:w-[320px] text-lg leading-[27px] text-white/60 font-sans">
        Browse the best website section design examples — fresh ideas for your next build.
      </p>
      
      <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white px-4 py-4 h-[46px] mt-2 cursor-pointer hover:bg-gray-200 transition-colors">
        <Image 
          src="/images/mlb8fgj7-la1zwin.svg" 
          alt="icon" 
          width={24} 
          height={24} 
          className="w-6 h-6"
        />
        <span className="text-[15px] font-semibold text-black leading-5">Subs</span>
      </div>
    </div>
  );
};

export default HeroHeadline;
