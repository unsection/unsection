import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CollectionItem } from '@/app/types';

interface CollectionCardProps {
  item: CollectionItem;
  index: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ item, index }) => {
  return (
    <article 
      className="flex flex-col animate-fade-in-up"
      style={{ 
        animationDelay: `${(index % 20) * 50}ms` 
      }}
    >
      <Link href="/details" className="flex flex-col group cursor-pointer w-full h-full">
        {/* Thumbnail with Next.js Image optimization */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111] rounded-lg">
          <Image
            src={item.thumbnail || '/images/mlc3xyh9-a5354c1.png'}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
          />
          {/* New badge */}
          {item.isNew && (
            <span className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-2 text-black text-sm font-medium leading-[10px]">
              New
            </span>
          )}
        </div>

        {/* Content */}
        {item.source === 'community' ? (
          <div className="flex items-start gap-2 mt-2">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src={item.authorAvatar || '/images/designer_avatar.png'}
                alt={item.author || 'Designer'}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="text-white text-sm font-medium leading-[18px]">
                {item.author || 'Marcel'}
              </p>
              <p className="text-white/60 text-sm font-medium leading-[18px] truncate">
                {item.title}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 py-2 mt-2">
            <span className="text-white text-sm font-medium leading-[18px]">
              {item.tag || 'Feature'}
            </span>
            <span 
              className="w-px h-3.5 bg-white/10" 
              aria-hidden="true" 
            />
            <span className="text-white/60 text-sm font-medium leading-[18px] truncate">
              {item.title}
            </span>
          </div>
        )}
      </Link>
    </article>
  );
};

export default CollectionCard;
