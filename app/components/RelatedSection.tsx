'use client';

import React, { useEffect, useState } from 'react';
import CollectionCard from './CollectionCard';
import { fetchCollections } from '@/app/services/collectionService';
import type { CollectionItem } from '@/app/types';

const RelatedSection: React.FC = () => {
  const [items, setItems] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const { data } = await fetchCollections(1, 6, 'website');
        setItems(data);
      } catch (error) {
        console.error('Failed to load related items', error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  if (loading) return null;

  return (
    <section className="flex flex-col items-start bg-black px-4 lg:px-10 py-10 w-full overflow-hidden gap-8">
      {/* Header */}
      <div className="flex shrink-0 items-center self-stretch justify-center gap-1 border-b border-white/10 pb-[31px]">
        <h2 className="grow tracking-normal text-white font-semibold text-[32px]">
          More like this
        </h2>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap content-start items-start gap-4 w-full">
        {items.map((item, index) => (
          <div key={item.id} className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
            <CollectionCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedSection;
