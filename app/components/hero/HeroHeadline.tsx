import React, { memo } from 'react';
import Image from 'next/image';

/**
 * Hero Headline Component
 * 
 * Main hero section headline with title, description, and CTA button.
 * Memoized since content is static.
 */
const HeroHeadline: React.FC = memo(() => {
  return (
    <div className="inline-flex flex-col flex-shrink-0 items-start gap-6 text-left">
      <h1 className="w-full lg:w-80 text-4xl leading-[41px] tracking-[-0.9px] text-white">
        Curated website section design inspiration
      </h1>
      <p className="w-full lg:w-80 text-lg leading-[27px] text-white/60">
        Browse the best website section design examples — fresh ideas for your next build.
      </p>
      
      <a 
        href="#subscribe"
        className="inline-flex items-center justify-center gap-1 rounded-full bg-white px-4 py-4 h-[46px] mt-2 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
      >
        <Image 
          src="/images/mlb8fgj7-la1zwin.svg" 
          alt="" 
          width={24} 
          height={24}
          aria-hidden="true"
        />
        <span className="text-[15px] font-semibold text-black leading-5">
          Subscribe
        </span>
      </a>
    </div>
  );
});

HeroHeadline.displayName = 'HeroHeadline';

export default HeroHeadline;
