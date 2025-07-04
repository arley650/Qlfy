
/**
 * Mobile Detection Hook
 * 
 * A custom React hook that detects whether the user is on a mobile device
 * based on screen width. Uses the matchMedia API for responsive breakpoint detection.
 * 
 * Features:
 * - Real-time responsive breakpoint detection
 * - Event listener for window resize changes
 * - 768px breakpoint (standard mobile/tablet boundary)
 * - Proper cleanup to prevent memory leaks
 */

import * as React from "react"

// Mobile breakpoint constant - screens smaller than 768px are considered mobile
const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to detect if the current viewport is mobile-sized
 * 
 * @returns {boolean} True if screen width is less than 768px, false otherwise
 */
export function useIsMobile() {
  // State to track mobile status - starts as undefined until first measurement
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create media query list for mobile breakpoint detection
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler function to update mobile state when screen size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener for media query changes (when user resizes window)
    mql.addEventListener("change", onChange)
    
    // Set initial state based on current window width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup function to remove event listener and prevent memory leaks
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array means this effect runs once on mount

  // Return boolean value (converts undefined to false for safety)
  return !!isMobile
}
