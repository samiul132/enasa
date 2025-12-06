import { useState, useEffect } from "react";
import { Activity, Play, Pause, CheckCircle2, Home, Factory, ShieldAlert, Leaf, Utensils, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import enasaDevice from "@/assets/enasa-device-simulation.png";
import nasaLogo from "@/assets/nasa-logo.png";

const useCases = [
  {
    id: "home",
    icon: Home,
    title: "Home Air Quality",
    scenario: "Living Room",
    detectedCompounds: ["CO₂: 650 ppm", "VOCs: 120 ppb", "PM2.5: 8 µg/m³"],
    status: "Good",
    color: "from-green-400 to-emerald-500",
    statusColor: "text-green-500",
    particles: { 
      count: 8, 
      speed: "slow",
      colors: ["#10b981", "#3b82f6", "#6ee7b7"]
    },
    legend: [
      { compound: "CO₂", color: "#10b981", concentration: 65, warningThreshold: 75, dangerThreshold: 90 },
      { compound: "VOCs", color: "#3b82f6", concentration: 30, warningThreshold: 60, dangerThreshold: 80 },
      { compound: "PM2.5", color: "#6ee7b7", concentration: 15, warningThreshold: 50, dangerThreshold: 75 }
    ]
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Safety",
    scenario: "Manufacturing Floor",
    detectedCompounds: ["VOCs: 450 ppb", "Benzene: 12 ppb", "Toluene: 35 ppb"],
    status: "Monitor",
    color: "from-orange-400 to-red-500",
    statusColor: "text-orange-500",
    particles: { 
      count: 18, 
      speed: "medium",
      colors: ["#f97316", "#fb923c", "#fdba74"]
    },
    legend: [
      { compound: "VOCs", color: "#f97316", concentration: 85, warningThreshold: 70, dangerThreshold: 85 },
      { compound: "Benzene", color: "#fb923c", concentration: 45, warningThreshold: 50, dangerThreshold: 70 },
      { compound: "Toluene", color: "#fdba74", concentration: 60, warningThreshold: 65, dangerThreshold: 80 }
    ]
  },
  {
    id: "security",
    icon: ShieldAlert,
    title: "Security Detection",
    scenario: "Public Space",
    detectedCompounds: ["Explosives trace", "Narcotics: Detected", "Alert triggered"],
    status: "Alert",
    color: "from-red-500 to-rose-600",
    statusColor: "text-red-500",
    particles: { 
      count: 22, 
      speed: "fast",
      colors: ["#ef4444", "#dc2626", "#f87171"]
    },
    legend: [
      { compound: "Explosives", color: "#ef4444", concentration: 95, warningThreshold: 30, dangerThreshold: 60 },
      { compound: "Narcotics", color: "#dc2626", concentration: 88, warningThreshold: 30, dangerThreshold: 60 },
      { compound: "Hazardous", color: "#f87171", concentration: 92, warningThreshold: 40, dangerThreshold: 70 }
    ]
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental",
    scenario: "Urban Monitoring",
    detectedCompounds: ["NO₂: 45 ppb", "O₃: 35 ppb", "PM10: 25 µg/m³"],
    status: "Moderate",
    color: "from-yellow-400 to-orange-400",
    statusColor: "text-yellow-600",
    particles: { 
      count: 15, 
      speed: "medium",
      colors: ["#facc15", "#fbbf24", "#fb923c"]
    },
    legend: [
      { compound: "NO₂", color: "#facc15", concentration: 55, warningThreshold: 60, dangerThreshold: 80 },
      { compound: "O₃", color: "#fbbf24", concentration: 48, warningThreshold: 55, dangerThreshold: 75 },
      { compound: "PM10", color: "#fb923c", concentration: 42, warningThreshold: 50, dangerThreshold: 70 }
    ]
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Safety",
    scenario: "Kitchen Quality",
    detectedCompounds: ["Ethanol: 15 ppm", "Acetic acid: 8 ppm", "Fresh quality"],
    status: "Excellent",
    color: "from-blue-400 to-cyan-500",
    statusColor: "text-blue-500",
    particles: { 
      count: 6, 
      speed: "slow",
      colors: ["#60a5fa", "#06b6d4", "#22d3ee"]
    },
    legend: [
      { compound: "Ethanol", color: "#60a5fa", concentration: 25, warningThreshold: 50, dangerThreshold: 75 },
      { compound: "Acetic acid", color: "#06b6d4", concentration: 18, warningThreshold: 45, dangerThreshold: 70 },
      { compound: "Fresh air", color: "#22d3ee", concentration: 95, warningThreshold: 40, dangerThreshold: 20 }
    ]
  },
  {
    id: "healthcare",
    icon: Building2,
    title: "Healthcare",
    scenario: "Hospital Ward",
    detectedCompounds: ["Sterilization gases", "Formaldehyde: <0.1 ppm", "Clean air"],
    status: "Optimal",
    color: "from-purple-400 to-indigo-500",
    statusColor: "text-purple-500",
    particles: { 
      count: 5, 
      speed: "slow",
      colors: ["#a78bfa", "#8b5cf6", "#c4b5fd"]
    },
    legend: [
      { compound: "Sterilization", color: "#a78bfa", concentration: 12, warningThreshold: 40, dangerThreshold: 65 },
      { compound: "Formaldehyde", color: "#8b5cf6", concentration: 5, warningThreshold: 20, dangerThreshold: 40 },
      { compound: "Clean air", color: "#c4b5fd", concentration: 98, warningThreshold: 30, dangerThreshold: 15 }
    ]
  }
];

const DeviceAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentUseCaseIndex, setCurrentUseCaseIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    delay: number; 
    duration: number;
    startX: number;
    startY: number;
    angle: number;
    color: string;
  }>>([]);
  const [concentrations, setConcentrations] = useState<number[]>([]);

  const currentUseCase = useCases[currentUseCaseIndex];

  // Helper function to determine bar color based on thresholds
  const getConcentrationColor = (concentration: number, baseColor: string, warningThreshold: number, dangerThreshold: number) => {
    if (concentration >= dangerThreshold) {
      return "#ef4444"; // Red for danger
    } else if (concentration >= warningThreshold) {
      return "#eab308"; // Yellow for warning
    }
    return baseColor; // Normal color
  };

  // Helper function to get alert level
  const getAlertLevel = (concentration: number, warningThreshold: number, dangerThreshold: number) => {
    if (concentration >= dangerThreshold) return "danger";
    if (concentration >= warningThreshold) return "warning";
    return "normal";
  };

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentUseCaseIndex((prev) => (prev + 1) % useCases.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  // Initialize concentrations when use case changes
  useEffect(() => {
    setConcentrations(currentUseCase.legend.map(item => item.concentration));
  }, [currentUseCaseIndex]);

  // Add real-time fluctuation to concentrations
  useEffect(() => {
    if (!isAnimating) return;

    const fluctuationInterval = setInterval(() => {
      setConcentrations(prev => 
        prev.map((value, index) => {
          const baseValue = currentUseCase.legend[index].concentration;
          // Fluctuate ±3% from base value
          const variation = (Math.random() - 0.5) * 6;
          const newValue = baseValue + variation;
          // Clamp between 0 and 100
          return Math.max(0, Math.min(100, newValue));
        })
      );
    }, 800); // Update every 800ms for smooth live monitoring effect

    return () => clearInterval(fluctuationInterval);
  }, [isAnimating, currentUseCase]);

  useEffect(() => {
    // Generate particles from all directions flowing toward center
    const particleCount = currentUseCase.particles.count;
    const particleColors = currentUseCase.particles.colors;
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      // Generate particles from edges at different angles
      const angle = (i / particleCount) * 360;
      const radius = 50; // Distance from center to start
      const centerX = 50;
      const centerY = 50;
      
      // Calculate start position based on angle (from outside the container)
      const startX = centerX + Math.cos((angle * Math.PI) / 180) * radius;
      const startY = centerY + Math.sin((angle * Math.PI) / 180) * radius;
      
      // Assign color from the available colors for this use case
      const color = particleColors[i % particleColors.length];
      
      return {
        id: i,
        delay: Math.random() * 5, // Staggered entry for smoother flow
        duration: currentUseCase.particles.speed === "fast" ? 6 : currentUseCase.particles.speed === "medium" ? 9 : 12, // Much slower, smoother animation
        startX,
        startY,
        angle,
        color
      };
    });
    setParticles(newParticles);
  }, [currentUseCase]);

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border border-border shadow-[var(--shadow-soft)]">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">E-Näsa Device Simulation</h3>
          <p className="text-sm text-muted-foreground">Real-time air analysis across different scenarios</p>
        </div>
        
        <div className="flex flex-col gap-3">
          {/* Use Case Selector */}
          <div className="grid grid-cols-3 gap-2">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => {
                  setCurrentUseCaseIndex(index);
                  setIsAnimating(false);
                }}
                className={`p-2 rounded-lg border transition-all duration-300 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] ${
                  index === currentUseCaseIndex
                    ? "border-primary bg-primary/10 shadow-[var(--shadow-medium)]"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <useCase.icon className={`h-4 w-4 mx-auto mb-1 ${
                  index === currentUseCaseIndex ? "text-primary" : "text-foreground"
                }`} />
                <div className={`text-[10px] font-medium truncate ${
                  index === currentUseCaseIndex ? "text-primary" : "text-foreground"
                }`}>{useCase.title}</div>
              </button>
            ))}
          </div>

          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAnimating(!isAnimating)}
            className="gap-2 w-full"
          >
            {isAnimating ? (
              <>
                <Pause className="h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Play
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Device Visualization + Detected Compounds */}
        <div className="space-y-4">
          {/* Device Visualization */}
          <div className="relative aspect-square bg-gradient-to-br from-background to-muted/50 rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-medium)]">
            {/* Air particles with trails flowing into device from all directions */}
            {isAnimating && particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute"
                style={{
                  left: `${particle.startX}%`,
                  top: `${particle.startY}%`,
                  animation: `flowToCenter ${particle.duration}s ease-in ${particle.delay}s infinite`,
                }}
              >
                {/* Particle head with smoother glow */}
                <div 
                  className="w-2 h-2 rounded-full blur-[0.5px]"
                  style={{
                    background: `radial-gradient(circle, ${particle.color}cc, ${particle.color}66 60%, transparent)`,
                    boxShadow: `0 0 6px 1px ${particle.color}66, 0 0 12px 2px ${particle.color}33`,
                  }}
                />
                {/* Smooth particle trail with gradient */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 opacity-40 blur-[0.3px]"
                  style={{
                    background: `linear-gradient(to right, transparent, ${particle.color}99 20%, ${particle.color}66 50%, ${particle.color}33 80%, transparent)`,
                    transform: `rotate(${particle.angle + 180}deg)`,
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            ))}

            {/* E-Nāsa Device */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Device Image */}
                <img 
                  src={nasaLogo} 
                  alt="E-Näsa Device" 
                  className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ${
                    isAnimating ? "animate-pulse" : ""
                  }`}
                />
                
                {/* Animated glow effect based on use case */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${currentUseCase.color} opacity-10 blur-xl`}
                />

                {/* Detection wave effect */}
                {isAnimating && (
                  <>
                    <div className={`absolute inset-0 border-2 border-primary opacity-15 animate-ping rounded-full`} />
                    <div className={`absolute inset-0 border border-primary opacity-10 rounded-full`} style={{ animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite", animationDelay: "0.75s" }} />
                  </>
                )}
                
                {/* Status indicator at the base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentUseCase.color} ${
                    isAnimating ? "animate-pulse" : ""
                  } flex items-center justify-center shadow-lg`}>
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Detection Results */}
        <div className="space-y-4">
          {/* Current Use Case */}
          <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border border-border shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentUseCase.color} flex items-center justify-center`}>
                <currentUseCase.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-foreground">{currentUseCase.title}</h4>
                <p className="text-sm text-muted-foreground">{currentUseCase.scenario}</p>
              </div>
              <Badge variant="secondary" className={currentUseCase.statusColor}>
                {currentUseCase.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground mb-2">Detected Compounds:</div>
              {currentUseCase.detectedCompounds.map((compound, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-background/50 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-mono text-foreground">{compound}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Concentration Intensity Indicators */}
          <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border border-border shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-primary" />
              <h4 className="font-bold text-foreground">Concentration Levels</h4>
              {isAnimating && (
                <Badge variant="outline" className="ml-auto gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-foreground">Live</span>
                </Badge>
              )}
            </div>
            <div className="space-y-3">
              {currentUseCase.legend.map((item, index) => {
                const displayConcentration = concentrations[index] || item.concentration;
                const alertLevel = getAlertLevel(displayConcentration, item.warningThreshold, item.dangerThreshold);
                const barColor = getConcentrationColor(displayConcentration, item.color, item.warningThreshold, item.dangerThreshold);
                
                return (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ 
                            backgroundColor: item.color,
                            boxShadow: `0 0 8px ${item.color}66`
                          }}
                        />
                        <span className="text-sm font-medium text-foreground">{item.compound}</span>
                        {alertLevel === "danger" && (
                          <Badge variant="destructive" className="text-xs px-1.5 py-0 h-5">DANGER</Badge>
                        )}
                        {alertLevel === "warning" && (
                          <Badge variant="outline" className="text-xs px-1.5 py-0 h-5 bg-yellow-500/10 text-yellow-600 border-yellow-500/50">WARNING</Badge>
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground tabular-nums">
                        {displayConcentration.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ease-out ${isAnimating ? 'animate-concentration-pulse' : ''}`}
                        style={{ 
                          width: `${displayConcentration}%`,
                          backgroundColor: barColor,
                          boxShadow: `0 0 4px ${barColor}99`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Particle Color Legend - Detected Compounds */}
          <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-lg p-4 shadow-[var(--shadow-soft)]">
            <div className="text-sm font-semibold text-muted-foreground mb-3">Detected Compounds:</div>
            <div className="grid grid-cols-3 gap-3">
              {currentUseCase.legend.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-offset-background flex-shrink-0"
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 0 8px ${item.color}66`
                    }}
                  />
                  <span className="text-sm font-medium truncate">{item.compound}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-cycle indicator */}
          {isAnimating && (
            <div className="text-center">
              <Badge variant="outline" className="gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Auto-cycling scenarios
              </Badge>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DeviceAnimation;

// Add custom animation styles with smoother easing
const styles = `
@keyframes flowToCenter {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  15% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.45;
  }
  85% {
    opacity: 0.3;
  }
  100% {
    transform: translate(calc(50vw - ${50}%), calc(50vh - ${50}%)) scale(0.2);
    opacity: 0;
  }
}

@keyframes concentrationPulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 4px currentColor;
  }
  50% {
    opacity: 0.85;
    box-shadow: 0 0 8px currentColor, 0 0 12px currentColor;
  }
}

.animate-concentration-pulse {
  animation: concentrationPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
