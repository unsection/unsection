import { useEffect } from 'react';

/**
 * Custom hook to lock body scroll when a modal/overlay is open
 * Properly handles cleanup and preserves original overflow style
 * 
 * @param isLocked - Whether the body scroll should be locked
 * 
 * @example
 * ```tsx
 * const [isMenuOpen, setIsMenuOpen] = useState(false);
 * useBodyScrollLock(isMenuOpen);
 * ```
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (!isLocked) return;

    // Store original overflow value
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Apply scroll lock
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Cleanup: restore original values
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};

export default useBodyScrollLock;
