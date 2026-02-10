import React from 'react';
import Image from 'next/image';

const SectionDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 bg-black p-4 lg:p-10 w-full max-w-[1440px] mx-auto overflow-hidden text-white">
      {/* Left Column */}
      <div className="flex flex-col shrink-0 items-start overflow-hidden gap-4 w-full lg:w-auto">
        
        {/* Title Wrapper */}
        <div className="flex shrink-0 items-center self-stretch justify-between overflow-hidden flex-wrap gap-4">
          <div className="flex grow items-center gap-3 overflow-hidden">
            <p className="shrink-0 leading-[18px] tracking-normal text-white font-medium text-sm">
              Feature
            </p>
            <div className="shrink-0 self-stretch bg-white/10 w-px h-4 my-auto" />
            <p className="grow opacity-60 tracking-normal text-white font-medium text-sm truncate">
              Flow Core Capabilities Feature Design
            </p>
          </div>
          
          <div className="inline-flex shrink-0 items-center gap-1.5">
            <button className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white/10 px-2.5 py-1 hover:bg-white/20 transition-colors">
              <p className="leading-[18px] tracking-normal text-white font-medium text-sm">Copy</p>
            </button>
            <button className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white/10 px-2.5 py-1 hover:bg-white/20 transition-colors">
              <p className="leading-[18px] tracking-normal text-white font-medium text-sm">Visit</p>
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative shrink-0 self-stretch w-full aspect-[1068/1059] lg:w-[1068px] lg:h-[1059px] bg-gray-900 rounded-lg overflow-hidden">
          <Image 
            src="/images/mlgyuulh-xfhrpqb.png" 
            alt="Feature Design" 
            fill
            className="object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex shrink-0 flex-wrap content-start items-start self-stretch gap-1">
          {['Office', 'Modern', 'Office', 'Flooring', 'Office', 'Chair', 'Desk', 'Setup', 'Interior', 'Table', 'Brick', 'Wall', 'Workspace', 'Brick', 'Printer', 'Wooden', 'Floc'].map((tag, index) => (
            <div key={index} className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-white/30 px-3 py-1.5 hover:bg-white/40 transition-colors cursor-pointer">
              <p className="leading-[18px] tracking-normal text-white font-medium text-sm">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="inline-flex flex-col shrink-0 items-start lg:items-center self-stretch lg:pt-[42px] lg:pb-[42px] overflow-hidden gap-8 w-full lg:w-[260px]">
        
        {/* Ad Block */}
        <div className="flex flex-col shrink-0 items-start self-stretch gap-2">
          <div className="relative shrink-0 self-stretch w-full aspect-square lg:w-[260px] lg:h-[260px] bg-gray-800 rounded-lg overflow-hidden">
            <Image 
              src="/images/mlgyuulh-kpb2eyr.png" 
              alt="Ad" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex shrink-0 items-center self-stretch gap-1.5 overflow-hidden">
            <p className="shrink-0 leading-[18px] tracking-normal text-white font-medium text-sm">Ad</p>
            <div className="shrink-0 self-stretch bg-white/10 w-px h-4 my-auto" />
            <p className="shrink-0 opacity-60 leading-[18px] tracking-normal text-white font-medium text-sm">
              Discover real-word design inspo
            </p>
          </div>
        </div>

        {/* Meta Blocks */}
        <div className="flex flex-col shrink-0 items-start self-stretch overflow-hidden gap-2">
          <p className="opacity-60 leading-[18px] tracking-normal text-white font-semibold text-sm">Style</p>
          <div className="flex flex-col items-start gap-1">
            {['Light', 'Card', 'Large Type', 'Bento', 'Image', 'Minimal'].map((item) => (
              <p key={item} className="leading-[18px] tracking-normal text-white font-semibold text-sm underline decoration-white/30 underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col shrink-0 items-start self-stretch overflow-hidden gap-2">
          <p className="opacity-60 leading-[18px] tracking-normal text-white font-semibold text-sm">Industry</p>
          <div className="flex flex-col items-start gap-1">
            {['Technology', 'Software as a Service', 'Finance'].map((item) => (
              <p key={item} className="leading-[18px] tracking-normal text-white font-semibold text-sm underline decoration-white/30 underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col shrink-0 items-start self-stretch overflow-hidden gap-2">
          <p className="opacity-60 leading-[18px] tracking-normal text-white font-semibold text-sm">Type</p>
          <div className="flex flex-col items-start gap-1">
            {['Software', 'Web App'].map((item) => (
              <p key={item} className="leading-[18px] tracking-normal text-white font-semibold text-sm underline decoration-white/30 underline-offset-4 cursor-pointer hover:text-white/80 transition-colors">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col shrink-0 items-start self-stretch overflow-hidden gap-2">
          <p className="opacity-60 leading-[18px] tracking-normal text-white font-semibold text-sm">Added</p>
          <p className="leading-[18px] tracking-normal text-white font-semibold text-sm">
            25.02.2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
