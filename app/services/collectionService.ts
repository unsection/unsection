import type { CollectionItem, PaginatedResponse } from '@/app/types';

// Mock database with 100 items
const TOTAL_ITEMS = 100;

// Mock data arrays for more variety
const DESIGNER_NAMES = [
  'Marcel', 'Sarah', 'Alex', 'Jessica', 'David', 'Emma', 'Michael', 'Sophie'
];

const SECTION_TITLES = [
  'Flow Core Capabilities Feature Design',
  'User Dashboard Analytics View',
  'E-commerce Product Gallery Layout',
  'SaaS Pricing Table Comparison',
  'Mobile App Navigation Patterns',
  'Landing Page Hero Section',
  'Authentication & Login Screens',
  'UserProfile Settings Interface',
  'Newsletter Subscription Modal',
  'Footer Navigation Design'
];

const MOCK_DB: CollectionItem[] = Array.from({ length: TOTAL_ITEMS }, (_, i) => {
  const isCommunity = i % 2 !== 0;
  const designerName = DESIGNER_NAMES[i % DESIGNER_NAMES.length];
  const title = SECTION_TITLES[i % SECTION_TITLES.length];
  
  return {
    id: i + 1,
    title: title,
    tag: 'Feature',
    isNew: i < 10, // Only first 10 items are "new"
    thumbnail: '/images/mlc3xyh9-a5354c1.png',
    source: isCommunity ? 'community' : 'website',
    author: isCommunity ? designerName : undefined,
    authorAvatar: isCommunity ? '/images/designer_avatar.png' : undefined,
  };
});

/**
 * Simulates fetching collections from a backend API.
 * 
 * @param page - The current page number (1-based)
 * @param limit - The number of items per page
 * @param source - Optional filter by source ('website' | 'community')
 * @returns Promise resolving to the data and pagination info
 * 
 * @example
 * ```ts
 * const { data, hasMore } = await fetchCollections(1, 35, 'website');
 * ```
 */
export const fetchCollections = async (
  page: number, 
  limit: number,
  source?: 'website' | 'community',
  filter?: { type: 'category' | 'style', value: string }
): Promise<PaginatedResponse<CollectionItem>> => {
  // Simulate network delay (300-600ms for better UX)
  const delay = Math.floor(Math.random() * 300) + 300;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simulate random errors (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Failed to fetch data. Please try again.');
  }

  let filteredData = MOCK_DB;
  if (source) {
    filteredData = MOCK_DB.filter(item => item.source === source);
  }

  // Apply category/style filter if present
  if (filter) {
    // In a real app, this would be a DB query.
    // For mock data, we just return everything or filter if we had tags in the mock data.
    // Currently MOCK_DB items have 'tag': 'Feature'.
    if (filter.type === 'category') {
      // filteredData = filteredData.filter(item => item.category === filter.value);
    } else if (filter.type === 'style') {
      // filteredData = filteredData.filter(item => item.style === filter.value);
    }
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = filteredData.slice(start, end);

  return {
    data,
    hasMore: end < filteredData.length,
  };
};

// Re-export types for backward compatibility
export type { CollectionItem } from '@/app/types';
