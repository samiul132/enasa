import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "circle" | "triangle" | "hexagon";
  color: string;
  speed: number; // Parallax speed multiplier
}

interface FloatingParticlesProps {
  scrollY?: number;
  mousePos?: { x: number; y: number };
}

const FloatingParticles = ({ scrollY = 0, mousePos = { x: 0, y: 0 } }: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(203, 92%, 58%)",   // Primary bright blue
      "hsl(203, 100%, 70%)",  // Lighter blue
      "hsl(220, 100%, 85%)",  // Very light blue
      "hsl(203, 80%, 50%)",   // Mid blue
      "hsl(220, 100%, 73%)",  // Light blue
      "hsl(203, 80%, 35%)",   // Navy blue
    ];

    const types: Array<"circle" | "triangle" | "hexagon"> = ["circle", "triangle", "hexagon"];

    // Generate 80 random particles with varying parallax speeds
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.6 + 0.2,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.8 + 0.2, // Random speed between 0.2 and 1.0
    }));
    setParticles(newParticles);
  }, []);

  const renderParticle = (particle: Particle) => {
    // Apply parallax effect based on scroll and mouse position
    const parallaxY = scrollY * particle.speed * 0.5;
    const mouseParallaxX = mousePos.x * particle.speed * 0.8;
    const mouseParallaxY = mousePos.y * particle.speed * 0.8;
    
    const baseStyle = {
      position: "absolute" as const,
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`,
      animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
      transform: `translate(${mouseParallaxX}px, ${parallaxY + mouseParallaxY}px)`,
      transition: "transform 0.3s ease-out",
      willChange: "transform",
    };

    switch (particle.type) {
      case "circle":
        return (
          <div
            key={particle.id}
            className="animate-float"
            style={{
              ...baseStyle,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              opacity: particle.opacity,
            }}
          />
        );

      case "triangle":
        return (
          <svg
            key={particle.id}
            className="animate-float"
            style={baseStyle}
            width={particle.size}
            height={particle.size}
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,10 90,90 10,90"
              fill={particle.color}
              opacity={particle.opacity}
            />
          </svg>
        );

      case "hexagon":
        return (
          <svg
            key={particle.id}
            className="animate-float"
            style={baseStyle}
            width={particle.size}
            height={particle.size}
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill={particle.color}
              opacity={particle.opacity}
              strokeWidth="2"
              stroke={particle.color}
              fillOpacity="0.3"
            />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => renderParticle(particle))}
      
      {/* Connecting lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* Define animated gradient for data flow */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(220, 100%, 73%)" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="hsl(220, 100%, 73%)" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="hsl(220, 100%, 73%)" stopOpacity="0">
              <animate
                attributeName="stop-opacity"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Glow filter for alert bursts */}
          <filter id="alertGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle, i) => {
          const nearbyParticles = particles.filter((p, j) => {
            if (i >= j) return false;
            const distance = Math.sqrt(
              Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)
            );
            return distance < 12;
          });

          return nearbyParticles.map((nearParticle, j) => {
            const lineId = `line-${i}-${j}`;
            const flowDelay = (i + j) * 0.3;
            const burstDelay = Math.random() * 8 + 3; // Random delay for bursts
            const hasBurst = Math.random() > 0.6; // 40% chance of having burst
            
            return (
              <g key={`${i}-${j}`}>
                {/* Base connection line */}
                <line
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${nearParticle.x}%`}
                  y2={`${nearParticle.y}%`}
                  stroke="hsl(220, 100%, 73%)"
                  strokeWidth="0.5"
                  opacity="0.12"
                />
                
                {/* Animated data flow dots */}
                <circle r="2" fill="hsl(220, 100%, 73%)" opacity="0.8">
                  <animateMotion
                    dur={`${2 + flowDelay}s`}
                    repeatCount="indefinite"
                    path={`M ${particle.x} ${particle.y} L ${nearParticle.x} ${nearParticle.y}`}
                    begin={`${flowDelay}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0"
                    dur={`${2 + flowDelay}s`}
                    repeatCount="indefinite"
                    begin={`${flowDelay}s`}
                  />
                </circle>

                {/* Secondary data pulse - opposite direction */}
                {j % 2 === 0 && (
                  <circle r="1.5" fill="hsl(204, 80%, 50%)" opacity="0.6">
                    <animateMotion
                      dur={`${3 + flowDelay}s`}
                      repeatCount="indefinite"
                      path={`M ${nearParticle.x} ${nearParticle.y} L ${particle.x} ${particle.y}`}
                      begin={`${flowDelay + 1}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.6;0"
                      dur={`${3 + flowDelay}s`}
                      repeatCount="indefinite"
                      begin={`${flowDelay + 1}s`}
                    />
                  </circle>
                )}

                {/* High-priority alert burst */}
                {hasBurst && (
                  <>
                    <circle 
                      r="4" 
                      fill="hsl(45, 100%, 70%)" 
                      filter="url(#alertGlow)"
                      opacity="0"
                    >
                      <animateMotion
                        dur="1.5s"
                        repeatCount="indefinite"
                        path={`M ${particle.x} ${particle.y} L ${nearParticle.x} ${nearParticle.y}`}
                        begin={`${burstDelay}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.8;1"
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin={`${burstDelay}s`}
                      />
                      <animate
                        attributeName="r"
                        values="2;4;3;2"
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin={`${burstDelay}s`}
                      />
                    </circle>
                    
                    {/* Trailing glow for burst */}
                    <circle 
                      r="6" 
                      fill="hsl(45, 100%, 70%)" 
                      opacity="0"
                    >
                      <animateMotion
                        dur="1.5s"
                        repeatCount="indefinite"
                        path={`M ${particle.x} ${particle.y} L ${nearParticle.x} ${nearParticle.y}`}
                        begin={`${burstDelay}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.3;0"
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin={`${burstDelay}s`}
                      />
                    </circle>
                  </>
                )}
              </g>
            );
          });
        })}
      </svg>

      {/* Additional glow effects for depth */}
      {particles
        .filter((p) => p.id % 5 === 0)
        .map((particle) => (
          <div
            key={`glow-${particle.id}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 3}px`,
              height: `${particle.size * 3}px`,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              opacity: particle.opacity * 0.3,
              pointerEvents: "none",
            }}
          />
        ))}
    </div>
  );
};

export default FloatingParticles;
