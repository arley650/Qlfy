
import { useState, useEffect } from 'react';

interface BubblePosition {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const useBubbleAnimation = (bubbleCount: number = 10) => {
  const [bubbles, setBubbles] = useState<BubblePosition[]>([]);

  useEffect(() => {
    // Initialize bubbles
    const initialBubbles: BubblePosition[] = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: window.innerHeight + Math.random() * 200,
      size: 50 + Math.random() * 70,
      speed: 2 + Math.random() * 3, // Increased from 0.5-1.5 to 2-5
      opacity: 0.1 + Math.random() * 0.2,
    }));
    
    setBubbles(initialBubbles);

    const animationInterval = setInterval(() => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          let newY = bubble.y - bubble.speed;
          
          // Reset bubble when it goes off screen
          if (newY < -200) {
            newY = window.innerHeight + Math.random() * 200;
          }
          
          return {
            ...bubble,
            y: newY,
          };
        })
      );
    }, 12); // Reduced from 16ms to 12ms for smoother/faster animation

    return () => clearInterval(animationInterval);
  }, [bubbleCount]);

  return bubbles;
};
