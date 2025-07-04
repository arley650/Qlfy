
/**
 * useBubbleAnimation Hook
 * 
 * A custom React hook that creates an animated floating bubble background effect.
 * Bubbles continuously move upward from bottom to top of the screen and reset
 * when they go off-screen, creating an infinite animation loop.
 * 
 * Features:
 * - Configurable number of bubbles
 * - Random positioning and sizing
 * - Smooth upward movement animation
 * - Automatic bubble recycling when off-screen
 * - Performance optimized with 60fps animation (16ms intervals)
 * - Mobile-responsive bubble count for better performance
 */

import { useState, useEffect } from 'react';

/**
 * Interface defining the properties of each animated bubble
 */
interface BubblePosition {
  id: number;        // Unique identifier for React key prop
  x: number;         // Horizontal position as percentage (0-100%)
  y: number;         // Vertical position in pixels from top
  size: number;      // Bubble diameter in pixels (50-120px range)
  speed: number;     // Upward movement speed in pixels per frame (1-3px)
  opacity: number;   // Bubble transparency (0.1-0.3 range for subtle effect)
}

/**
 * Hook to detect if the user is on a mobile device
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

/**
 * Custom hook for creating and managing animated floating bubbles
 * 
 * @param bubbleCount - Number of bubbles to render (default: 10)
 * @returns Array of bubble positions with current animation state
 */
export const useBubbleAnimation = (bubbleCount: number = 10) => {
  // State to store all bubble positions and properties
  const [bubbles, setBubbles] = useState<BubblePosition[]>([]);
  
  // Detect if user is on mobile device
  const isMobile = useIsMobile();
  
  // Adjust bubble count based on device type
  const adjustedBubbleCount = isMobile ? Math.max(5, Math.floor(bubbleCount / 3)) : bubbleCount;

  useEffect(() => {
    /**
     * Initialize bubbles with random properties
     * Each bubble starts below the visible screen area
     */
    const initialBubbles: BubblePosition[] = Array.from({ length: adjustedBubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,                           // Random horizontal position (0-100%)
      y: window.innerHeight + Math.random() * 200,      // Start below screen with random offset
      size: 50 + Math.random() * 70,                    // Random size between 50-120px
      speed: 1 + Math.random() * 2,                     // Random speed between 1-3px per frame (reduced for smoother animation)
      opacity: 0.1 + Math.random() * 0.2,              // Subtle opacity between 0.1-0.3
    }));
    
    setBubbles(initialBubbles);

    /**
     * Animation loop that updates bubble positions every frame
     * Runs at ~60fps (16ms intervals) for smooth animation
     */
    const animationInterval = setInterval(() => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          // Move bubble upward by its speed value
          let newY = bubble.y - bubble.speed;
          
          /**
           * Reset bubble to bottom when it goes off-screen
           * Bubbles disappear 200px above the screen and reappear
           * 200px below the screen for seamless looping
           */
          if (newY < -200) {
            newY = window.innerHeight + Math.random() * 200;
          }
          
          // Return updated bubble with new Y position
          return {
            ...bubble,
            y: newY,
          };
        })
      );
    }, 16); // 16ms = ~60fps for smooth animation performance

    /**
     * Cleanup function to prevent memory leaks
     * Clears the animation interval when component unmounts
     */
    return () => clearInterval(animationInterval);
  }, [adjustedBubbleCount]); // Re-run effect if bubble count changes

  // Return current bubble positions for rendering
  return bubbles;
};
