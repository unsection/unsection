import type { Tab } from '@/app/types';

/**
 * Side menu navigation items
 * Used in SideMenu (desktop) and MobileMenuOverlay (mobile)
 */
export const SIDE_MENU_ITEMS = [
  "Hero",
  "Testimonials",
  "Feature",
  "Call to actions",
  "Footer",
  "Blog",
  "Navbar",
  "Pricing",
  "Logo",
  "FAQs",
  "Team",
  "Contact",
  "Works",
] as const;

export type SideMenuItem = (typeof SIDE_MENU_ITEMS)[number];

/**
 * Main navigation tabs
 * Used in TopBar Tabs component
 */
export const NAVIGATION_TABS: Tab[] = [
  { icon: "/images/mlb6tspm-20uzgnr.svg", id: 0, alt: "Sections", label: "Sections" },
  { icon: "/images/mlb6tspm-q4rawvd.svg", id: 1, alt: "Animations", label: "Animations" },
  { icon: "/images/mlb6tspm-rxd8tvz.svg", id: 2, alt: "Supply", label: "Supply" },
];

/**
 * Filter tags for hero section
 */
export const FILTER_TAGS = [
  "UI Mockup",
  "Uncommon",
  "Gradient",
  "Text Heavy",
  "Light",
  "Flat Color",
  "Video",
  "Vector",
  "Table View",
  "Black & White",
  "Dark",
  "Card",
  "Colorful",
  "Bento",
  "Visible Border",
  "Minimal",
] as const;

export type FilterTag = (typeof FILTER_TAGS)[number];

/**
 * Filter types for hero section
 */
export const TYPE_TAGS = [
  "Community",
  "Single Page",
  "Personal",
  "Web App",
  "Mobile App",
  "Physical Product",
  "Agency",
  "Service",
  "Software",
  "Resource",
] as const;

export type TypeTag = (typeof TYPE_TAGS)[number];

/**
 * Sort options for hero section
 */
export const SORT_OPTIONS = [
  "Latest",
  "Most Popular",
  "Oldest",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

/**
 * Pagination configuration
 */
export const PAGINATION = {
  ITEMS_PER_PAGE: 35,
  ANIMATION_DELAY_MS: 20, // Reduced from 50ms for better UX
} as const;
