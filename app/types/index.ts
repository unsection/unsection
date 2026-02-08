/**
 * Shared type definitions for the application
 */

/**
 * Navigation tab item used in TopBar and MobileMenu
 */
export interface Tab {
  icon: string;
  id: number;
  alt: string;
  label: string;
}

/**
 * Collection item from the API/service
 */
export interface CollectionItem {
  id: number;
  title: string;
  tag: string;
  isNew: boolean;
  thumbnail?: string;
  source?: 'website' | 'community';
  author?: string;
  authorAvatar?: string;
}

/**
 * Pagination response wrapper
 */
export interface PaginatedResponse<T> {
  data: T[];
  hasMore: boolean;
}
