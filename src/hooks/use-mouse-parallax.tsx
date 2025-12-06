import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseParallax = (strength: number = 20) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to viewport center (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      setMousePosition({ 
        x: x * strength, 
        y: y * strength 
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return mousePosition;
};
