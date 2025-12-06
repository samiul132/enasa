import { useEffect, useState } from "react";
import { Beef, Factory, Leaf, Stethoscope, Shield } from "lucide-react";
import enasaDevice from "@/assets/enasa-device.png";

interface Node {
  id: string;
  icon: typeof Beef;
  title: string;
  angle: number;
  color: string;
}

interface DataPoint {
  progress: number;
  id: number;
}

const nodes: Node[] = [
  {
    id: "food",
    icon: Beef,
    title: "Food & Beverage",
    angle: 0,
    color: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Safety",
    angle: 72,
    color: "from-slate-400 via-slate-500 to-slate-600",
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental",
    angle: 144,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    angle: 216,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security",
    angle: 288,
    color: "from-purple-400 via-purple-500 to-indigo-500",
  },
];

const UseCaseNetwork = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [dataFlows, setDataFlows] = useState<Map<string, DataPoint[]>>(new Map());
  const centerX = 50;
  const centerY = 50;
  const radius = 32;

  const getNodePosition = (angle: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
    };
  };

  useEffect(() => {
    // Initialize data flows for each node
    const flows = new Map<string, DataPoint[]>();
    nodes.forEach((node) => {
      flows.set(
        node.id,
        Array.from({ length: 4 }, (_, i) => ({
          progress: i * 0.25,
          id: i,
        }))
      );
    });
    setDataFlows(flows);

    // Animate data points flowing from center to nodes
    const animateDataFlow = () => {
      setDataFlows((prev) => {
        const newFlows = new Map(prev);
        nodes.forEach((node) => {
          const points = newFlows.get(node.id) || [];
          newFlows.set(
            node.id,
            points.map((point) => ({
              ...point,
              progress: (point.progress + 0.008) % 1,
            }))
          );
        });
        return newFlows;
      });
    };

    const interval = setInterval(animateDataFlow, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-br from-muted/30 to-background rounded-2xl border-2 border-border overflow-hidden p-2">
        {/* SVG Network Visualization */}
        <svg
          className="w-full h-[600px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="deviceGlow">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines from Center to Nodes */}
          <g className="connections">
            {nodes.map((node) => {
              const nodePos = getNodePosition(node.angle);
              const isActive = activeNode === node.id || !activeNode;

              return (
                <g key={`connection-${node.id}`}>
                  {/* Base connection line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={nodePos.x}
                    y2={nodePos.y}
                    stroke="url(#signalGradient)"
                    strokeWidth={isActive ? "0.4" : "0.2"}
                    className="transition-all duration-500"
                    opacity={isActive ? 1 : 0.2}
                  />

                  {/* Animated signal points */}
                  {isActive &&
                    (dataFlows.get(node.id) || []).map((point) => {
                      const x = centerX + (nodePos.x - centerX) * point.progress;
                      const y = centerY + (nodePos.y - centerY) * point.progress;
                      const size = 0.6 + Math.sin(point.progress * Math.PI) * 0.4;

                      return (
                        <circle
                          key={`${node.id}-point-${point.id}`}
                          cx={x}
                          cy={y}
                          r={size}
                          fill="hsl(var(--primary))"
                          filter="url(#glow)"
                          opacity={Math.sin(point.progress * Math.PI)}
                        />
                      );
                    })}
                </g>
              );
            })}
          </g>

          {/* Center Device */}
          <g transform={`translate(${centerX}, ${centerY})`}>
            {/* Device glow effect */}
            <circle
              r="12"
              fill="url(#deviceGlow)"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            
            {/* Pulsing rings */}
            <circle
              r="10"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.3"
              opacity="0.4"
              className="animate-ping"
              style={{ animationDuration: "2s" }}
            />
            <circle
              r="8"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.2"
              opacity="0.3"
              className="animate-ping"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            />

            {/* Device image */}
            <image
              href={enasaDevice}
              x="-6"
              y="-6"
              width="12"
              height="12"
              className="drop-shadow-lg"
            />
            
            {/* Device label */}
            <text
              y="12"
              textAnchor="middle"
              className="text-[3px] fill-primary font-bold"
            >
              E-Nāsa Device
            </text>
          </g>

          {/* Use Case Nodes */}
          <g className="nodes">
            {nodes.map((node) => {
              const pos = getNodePosition(node.angle);
              const isActive = activeNode === node.id || !activeNode;

              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  opacity={isActive ? 1 : 0.5}
                >
                  {/* Outer glow ring */}
                  {isActive && (
                    <circle
                      r="7"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.3"
                      opacity="0.5"
                      className="animate-ping"
                      style={{ animationDuration: "2s" }}
                    />
                  )}

                  {/* Node background circle */}
                  <circle
                    r="5"
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--primary))"
                    strokeWidth={isActive ? "0.6" : "0.3"}
                    className="transition-all duration-300"
                    filter={isActive ? "url(#glow)" : ""}
                  />

                  {/* Icon */}
                  <foreignObject
                    x="-3.5"
                    y="-3.5"
                    width="7"
                    height="7"
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <node.icon
                        className={`w-4 h-4 ${
                          node.id === 'food' ? 'text-orange-500' :
                          node.id === 'industrial' ? 'text-slate-500' :
                          node.id === 'environmental' ? 'text-green-500' :
                          node.id === 'healthcare' ? 'text-blue-500' :
                          'text-purple-500'
                        }`}
                        style={{
                          transform: `scale(${isActive ? 0.9 : 0.7})`,
                          transition: "transform 0.3s",
                        }}
                      />
                    </div>
                  </foreignObject>

                  {/* Label with background */}
                  <rect
                    x="-10"
                    y="7"
                    width="20"
                    height="4"
                    fill="hsl(var(--card))"
                    opacity="0.9"
                    rx="1"
                  />
                  <text
                    y="9.5"
                    textAnchor="middle"
                    className="text-[2.5px] fill-foreground font-semibold"
                    opacity={isActive ? 1 : 0.7}
                  >
                    {node.title}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Active Signals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
              <span className="text-xs text-muted-foreground">Data Flow</span>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Hover over use cases to highlight connections
            </p>
          </div>
        </div>
      </div>

      {/* Info text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          The E-Nāsa device actively transmits air quality signals to all connected use cases in real-time.
          Each sector receives tailored insights based on its specific monitoring needs, creating an
          integrated ecosystem of intelligent air quality analysis.
        </p>
      </div>
    </div>
  );
};

export default UseCaseNetwork;
