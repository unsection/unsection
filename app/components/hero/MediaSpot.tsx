import React from 'react';
import Image from 'next/image';

const MediaSpot = () => {
  return (
    <div className="hidden lg:flex flex-col md:flex-row items-center justify-center lg:justify-between w-full lg:w-[688px] lg:min-w-[688px] h-auto lg:h-[460px] gap-4">
      {/* Card 1 */}
      <div className="flex flex-col justify-end rounded-[20px] bg-white p-5 w-full md:w-[336px] md:min-w-[336px] h-[460px] relative overflow-hidden group">
         {/* Background Image - using style for specific image */}
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
           style={{ backgroundImage: 'url(/images/mlb8fgja-azocbyt.png)' }}
         />
         
         <div className="relative z-10 flex items-center justify-between w-full">
           <div className="inline-flex items-center justify-center gap-1 rounded-full bg-black/20 p-2.5 backdrop-blur-sm">
             <span className="text-[15px] font-medium text-black leading-[11px]">Mobbin</span>
           </div>
           <Image 
             src="/images/mlb8fgj7-f5h53xb.svg" 
             alt="icon" 
             width={24} 
             height={24}
             className="w-6 h-6" 
           />
         </div>
      </div>

      {/* Card 2 - Duplicate of Card 1 for now as per design */}
      <div className="flex flex-col justify-end rounded-[20px] bg-white p-5 w-full md:w-[336px] md:min-w-[336px] h-[460px] relative overflow-hidden group">
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
           style={{ backgroundImage: 'url(/images/mlb8fgja-azocbyt.png)' }} // Using same image as per screenshot replication request
         />
         
         <div className="relative z-10 flex items-center justify-between w-full">
           <div className="inline-flex items-center justify-center gap-1 rounded-full bg-black/20 p-2.5 backdrop-blur-sm">
             <span className="text-[15px] font-medium text-black leading-[11px]">Mobbin</span>
           </div>
           <Image 
             src="/images/mlb8fgj7-f5h53xb.svg" 
             alt="icon" 
             width={24} 
             height={24}
             className="w-6 h-6" 
           />
         </div>
      </div>
    </div>
  );
};

export default MediaSpot;
