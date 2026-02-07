import React, { memo } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
}

/**
 * Individual media card component
 */
const MediaCard: React.FC<CardProps> = memo(({ title, imageSrc }) => (
  <article className="flex flex-col justify-end rounded-[20px] bg-white p-5 w-full md:w-[336px] md:min-w-[336px] h-[460px] relative overflow-hidden group">
    {/* Background Image - using Next.js Image for optimization */}
    <Image
      src={imageSrc}
      alt={`${title} preview`}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 336px"
      priority // Above the fold content
    />
    
    <div className="relative z-10 flex items-center justify-between w-full">
      <div className="inline-flex items-center justify-center gap-1 rounded-full bg-black/20 p-2.5 backdrop-blur-sm">
        <span className="text-[15px] font-medium text-black leading-[11px]">
          {title}
        </span>
      </div>
      <Image 
        src="/images/mlb8fgj7-f5h53xb.svg" 
        alt="" 
        width={24} 
        height={24}
        aria-hidden="true"
      />
    </div>
  </article>
));

MediaCard.displayName = 'MediaCard';

/**
 * Media Spot Component
 * 
 * Hero section media cards showcasing featured content.
 * Uses Next.js Image for optimized image loading.
 * Memoized since content is static.
 */
const MediaSpot: React.FC = memo(() => {
  const cards: CardProps[] = [
    { title: 'Mobbin', imageSrc: '/images/mlb8fgja-azocbyt.png' },
    { title: 'Mobbin', imageSrc: '/images/mlb8gfln-ubsqqo3.png' },
  ];

  return (
    <div className="hidden lg:flex flex-col md:flex-row items-center justify-center lg:justify-between w-full lg:w-[688px] lg:min-w-[688px] h-auto lg:h-[460px] gap-4">
      {cards.map((card, index) => (
        <MediaCard 
          key={`media-card-${index}`}
          title={card.title}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
});

MediaSpot.displayName = 'MediaSpot';

export default MediaSpot;
