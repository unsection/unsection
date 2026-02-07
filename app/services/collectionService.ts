import type { CollectionItem, PaginatedResponse } from '@/app/types';

// Mock database with 100 items
const TOTAL_ITEMS = 100;

const MOCK_DB: CollectionItem[] = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  id: i + 1,
  title: 'Flow Core Capabilities Feature Design',
  tag: 'Feature',
  isNew: i < 10, // Only first 10 items are "new"
  thumbnail: '/images/mlc3xyh9-a5354c1.png',
}));

/**
 * Simulates fetching collections from a backend API.
 * 
 * @param page - The current page number (1-based)
 * @param limit - The number of items per page
 * @returns Promise resolving to the data and pagination info
 * 
 * @example
 * ```ts
 * const { data, hasMore } = await fetchCollections(1, 35);
 * ```
 */
export const fetchCollections = async (
  page: number, 
  limit: number
): Promise<PaginatedResponse<CollectionItem>> => {
  // Simulate network delay (300-600ms for better UX)
  const delay = Math.floor(Math.random() * 300) + 300;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simulate random errors (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Failed to fetch data. Please try again.');
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = MOCK_DB.slice(start, end);

  return {
    data,
    hasMore: end < TOTAL_ITEMS,
  };
};

// Re-export types for backward compatibility
export type { CollectionItem } from '@/app/types';
