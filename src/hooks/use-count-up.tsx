import { useEffect, useState } from "react";

interface UseCountUpProps {
  end: number;
  duration?: number;
  isInView: boolean;
  decimals?: number;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  isInView,
  decimals = 0 
}: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    setIsComplete(false);

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsComplete(true);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
  
  return { count: formattedCount, isComplete };
};