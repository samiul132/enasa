import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, LayoutGrid, PieChart, Beef, Factory, Leaf, Stethoscope, Shield, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface VOCIntensityMatrixProps {
  heatmapData: Map<string, number[]>;
  useCases: Array<{
    name: string;
    color: string;
    icon: typeof Activity;
  }>;
}

const VOCIntensityMatrix = ({ heatmapData, useCases }: VOCIntensityMatrixProps) => {
  const [heatmapView, setHeatmapView] = useState<"grid" | "radial" | "sunburst">("grid");
  const [sunburstZoom, setSunburstZoom] = useState(1);
  const [sunburstPan, setSunburstPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [selectedCell, setSelectedCell] = useState<{ useCase: string; timeIndex: number; value: number } | null>(null);

  const getHeatmapColor = (value: number) => {
    if (value >= 80) return "bg-red-500";
    if (value >= 60) return "bg-orange-500";
    if (value >= 40) return "bg-yellow-500";
    if (value >= 20) return "bg-green-400";
    return "bg-green-600";
  };

  const getHeatmapLabel = (value: number) => {
    if (value >= 80) return "Critical";
    if (value >= 60) return "High";
    if (value >= 40) return "Moderate";
    if (value >= 20) return "Low";
    return "Very Low";
  };

  return (
    <>
      <Card className="p-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <div>
            <h4 className="font-semibold text-base flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              VOC Intensity Matrix
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Real-time volatile organic compound monitoring across industries
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant={heatmapView === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setHeatmapView("grid")}
              className="gap-1.5 h-8 text-xs"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
            <Button
              variant={heatmapView === "radial" ? "default" : "outline"}
              size="sm"
              onClick={() => setHeatmapView("radial")}
              className="gap-1.5 h-8 text-xs"
            >
              <Activity className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Radial</span>
            </Button>
            <Button
              variant={heatmapView === "sunburst" ? "default" : "outline"}
              size="sm"
              onClick={() => setHeatmapView("sunburst")}
              className="gap-1.5 h-8 text-xs"
            >
              <PieChart className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sunburst</span>
            </Button>
            <Badge variant="outline" className="gap-1.5 h-6 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </Badge>
          </div>
        </div>
      
      {heatmapView === "grid" ? (
        // Grid View
        <div className="space-y-3">
        {useCases.map((useCase, ucIndex) => {
          const data = heatmapData.get(useCase.name) || [];
          const avgValue = data.reduce((a, b) => a + b, 0) / data.length;
          
          return (
            <div 
              key={useCase.name} 
              className="group"
              style={{
                animation: `slideUp 0.6s ease-out ${ucIndex * 100}ms backwards`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`h-6 w-6 rounded-md bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold truncate">{useCase.name}</span>
                    <span className="text-xs font-mono text-muted-foreground ml-2">
                      {avgValue.toFixed(0)} ppb
                    </span>
                  </div>
                  <div className="flex gap-0.5 mt-1.5">
                    {data.map((value, timeIndex) => (
                      <div
                        key={`${useCase.name}-${timeIndex}`}
                        className="group/cell relative flex-1"
                        onClick={() => setSelectedCell({ useCase: useCase.name, timeIndex, value })}
                      >
                        <div
                          className={`h-6 ${getHeatmapColor(value)} rounded transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer relative overflow-hidden`}
                          style={{
                            opacity: 0.4 + (value / 100) * 0.6,
                            animation: `slideUp 0.5s ease-out ${(ucIndex * 100) + (timeIndex * 30)}ms backwards`,
                          }}
                        >
                          {/* Shimmer effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cell:translate-x-full transition-transform duration-700" />
                        </div>
                        {/* Enhanced Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-popover text-popover-foreground text-xs rounded-lg shadow-xl opacity-0 group-hover/cell:opacity-100 transition-all pointer-events-none whitespace-nowrap z-20 border border-border backdrop-blur-sm">
                          <div className="font-bold text-sm mb-1">{value} ppb</div>
                          <div className={`text-xs mb-1 font-semibold ${
                            value >= 80 ? 'text-red-500' :
                            value >= 60 ? 'text-orange-500' :
                            value >= 40 ? 'text-yellow-500' :
                            'text-green-500'
                          }`}>
                            {getHeatmapLabel(value)}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Period: T-{12 - timeIndex}
                          </div>
                          {/* Tooltip arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                            <div className="border-4 border-transparent border-t-border" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      ) : heatmapView === "radial" ? (
        // Radial View
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-2xl h-auto"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {useCases.map((uc, i) => (
                <linearGradient key={uc.name} id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={uc.color.includes('orange') ? '#fb923c' : 
                                                uc.color.includes('slate') ? '#94a3b8' :
                                                uc.color.includes('green') ? '#4ade80' :
                                                uc.color.includes('blue') ? '#60a5fa' :
                                                '#a78bfa'} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={uc.color.includes('orange') ? '#ef4444' : 
                                                  uc.color.includes('slate') ? '#64748b' :
                                                  uc.color.includes('green') ? '#10b981' :
                                                  uc.color.includes('blue') ? '#06b6d4' :
                                                  '#6366f1'} stopOpacity="0.9" />
                </linearGradient>
              ))}
            </defs>

            {/* Center circle */}
            <circle cx="200" cy="200" r="40" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
            <text x="200" y="195" textAnchor="middle" className="text-xs fill-foreground font-semibold">VOC</text>
            <text x="200" y="210" textAnchor="middle" className="text-xs fill-muted-foreground">Levels</text>

            {/* Radial segments */}
            {useCases.map((useCase, ucIndex) => {
              const data = heatmapData.get(useCase.name) || [];
              const anglePerSegment = (2 * Math.PI) / useCases.length;
              const startAngle = ucIndex * anglePerSegment - Math.PI / 2;
              const endAngle = startAngle + anglePerSegment;

              return (
                <g key={useCase.name}>
                  {/* Time period rings for this use case */}
                  {data.map((value, timeIndex) => {
                    const innerRadius = 50 + timeIndex * 20;
                    const outerRadius = innerRadius + 18;
                    
                    const x1 = 200 + innerRadius * Math.cos(startAngle);
                    const y1 = 200 + innerRadius * Math.sin(startAngle);
                    const x2 = 200 + outerRadius * Math.cos(startAngle);
                    const y2 = 200 + outerRadius * Math.sin(startAngle);
                    const x3 = 200 + outerRadius * Math.cos(endAngle);
                    const y3 = 200 + outerRadius * Math.sin(endAngle);
                    const x4 = 200 + innerRadius * Math.cos(endAngle);
                    const y4 = 200 + innerRadius * Math.sin(endAngle);

                    const largeArcFlag = anglePerSegment > Math.PI ? 1 : 0;

                    const pathData = `
                      M ${x1} ${y1}
                      L ${x2} ${y2}
                      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
                      L ${x4} ${y4}
                      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
                      Z
                    `;

                    const fillColor = 
                      value >= 80 ? '#ef4444' :
                      value >= 60 ? '#f97316' :
                      value >= 40 ? '#eab308' :
                      value >= 20 ? '#4ade80' :
                      '#22c55e';

                    const opacity = 0.4 + (value / 100) * 0.6;

                    return (
                      <g key={`${useCase.name}-${timeIndex}`}>
                        <path
                          d={pathData}
                          fill={fillColor}
                          opacity={opacity}
                          stroke="hsl(var(--background))"
                          strokeWidth="1"
                          className="transition-all duration-300 hover:opacity-100 cursor-pointer"
                          filter="url(#glow)"
                        >
                          <title>{`${useCase.name}\nT-${12 - timeIndex}: ${value} ppb\n${getHeatmapLabel(value)}`}</title>
                        </path>
                      </g>
                    );
                  })}

                  {/* Use case label and icon */}
                  <g>
                    {(() => {
                      const labelAngle = startAngle + anglePerSegment / 2;
                      const labelRadius = 50 + data.length * 20 + 25;
                      const labelX = 200 + labelRadius * Math.cos(labelAngle);
                      const labelY = 200 + labelRadius * Math.sin(labelAngle);

                      return (
                        <>
                          <circle
                            cx={labelX}
                            cy={labelY}
                            r="16"
                            fill={`url(#gradient-${ucIndex})`}
                            className="cursor-pointer transition-all hover:r-18"
                            filter="url(#glow)"
                          />
                          <foreignObject
                            x={labelX - 8}
                            y={labelY - 8}
                            width="16"
                            height="16"
                            className="pointer-events-none"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <useCase.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                          </foreignObject>
                          <text
                            x={labelX}
                            y={labelY + 28}
                            textAnchor="middle"
                            className="text-[10px] fill-foreground font-semibold"
                          >
                            {useCase.name.split(' ')[0]}
                          </text>
                        </>
                      );
                    })()}
                  </g>
                </g>
              );
            })}

            {/* Time period labels */}
            {Array.from({ length: 12 }, (_, i) => {
              const radius = 50 + i * 20 + 9;
              return (
                <text
                  key={i}
                  x="200"
                  y={200 - radius + 3}
                  textAnchor="middle"
                  className="text-[8px] fill-muted-foreground font-mono"
                >
                  T-{12 - i}
                </text>
              );
            })}
          </svg>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Hover over segments to see details. Each ring represents a time period, radiating outward from the center.
          </p>
        </div>
      ) : (
        // Sunburst View
        <div className="flex flex-col items-center relative">
          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <Button
              size="sm"
              variant="outline"
              className="w-10 h-10 p-0"
              onClick={() => setSunburstZoom(prev => Math.min(prev + 0.25, 3))}
              title="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-10 h-10 p-0"
              onClick={() => setSunburstZoom(prev => Math.max(prev - 0.25, 0.5))}
              title="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-10 h-10 p-0"
              onClick={() => {
                setSunburstZoom(1);
                setSunburstPan({ x: 0, y: 0 });
              }}
              title="Reset View"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Badge variant="secondary" className="text-xs px-2">
              {(sunburstZoom * 100).toFixed(0)}%
            </Badge>
          </div>

          <svg
            viewBox="0 0 500 500"
            className="w-full max-w-2xl h-auto cursor-grab active:cursor-grabbing"
            onWheel={(e) => {
              e.preventDefault();
              const delta = e.deltaY > 0 ? -0.1 : 0.1;
              setSunburstZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
            }}
            onMouseDown={(e) => {
              setIsPanning(true);
              setPanStart({ x: e.clientX - sunburstPan.x, y: e.clientY - sunburstPan.y });
            }}
            onMouseMove={(e) => {
              if (isPanning) {
                setSunburstPan({
                  x: e.clientX - panStart.x,
                  y: e.clientY - panStart.y,
                });
              }
            }}
            onMouseUp={() => setIsPanning(false)}
            onMouseLeave={() => setIsPanning(false)}
          >
            <defs>
              <filter id="sunburstGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {useCases.map((uc, i) => (
                <linearGradient key={`sunburst-${i}`} id={`sunburstGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={
                    uc.color.includes('orange') ? '#fb923c' : 
                    uc.color.includes('slate') ? '#94a3b8' :
                    uc.color.includes('green') ? '#4ade80' :
                    uc.color.includes('blue') ? '#60a5fa' :
                    '#a78bfa'
                  } stopOpacity="0.9" />
                  <stop offset="100%" stopColor={
                    uc.color.includes('orange') ? '#ef4444' : 
                    uc.color.includes('slate') ? '#64748b' :
                    uc.color.includes('green') ? '#10b981' :
                    uc.color.includes('blue') ? '#06b6d4' :
                    '#6366f1'
                  } stopOpacity="1" />
                </linearGradient>
              ))}
            </defs>

            {/* Main group with zoom and pan transforms */}
            <g transform={`translate(${250 + sunburstPan.x / 2}, ${250 + sunburstPan.y / 2}) scale(${sunburstZoom})`}>
              {/* Center label */}
              <circle cx="0" cy="0" r="50" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3" filter="url(#sunburstGlow)" />
              <text x="0" y="-10" textAnchor="middle" className="text-sm fill-foreground font-bold">VOC</text>
              <text x="0" y="5" textAnchor="middle" className="text-xs fill-muted-foreground">Analysis</text>
              <text x="0" y="18" textAnchor="middle" className="text-[10px] fill-muted-foreground">Hierarchical</text>

              {/* Sunburst segments */}
              {useCases.map((useCase, ucIndex) => {
                const data = heatmapData.get(useCase.name) || [];
                const totalValue = data.reduce((a, b) => a + b, 0);
                const avgValue = totalValue / data.length;
                
                // Calculate angle based on average value (hierarchical sizing)
                const allTotals = useCases.map(uc => {
                  const d = heatmapData.get(uc.name) || [];
                  return d.reduce((a, b) => a + b, 0);
                });
                const grandTotal = allTotals.reduce((a, b) => a + b, 0);
                const angleSize = (totalValue / grandTotal) * 2 * Math.PI;
                
                const prevTotals = allTotals.slice(0, ucIndex).reduce((a, b) => a + b, 0);
                const startAngle = (prevTotals / grandTotal) * 2 * Math.PI - Math.PI / 2;
                const endAngle = startAngle + angleSize;

                return (
                  <g key={useCase.name}>
                    {/* Inner ring - Use case category */}
                    {(() => {
                      const innerRadius = 60;
                      const middleRadius = 100;
                      
                      const x1 = innerRadius * Math.cos(startAngle);
                      const y1 = innerRadius * Math.sin(startAngle);
                      const x2 = middleRadius * Math.cos(startAngle);
                      const y2 = middleRadius * Math.sin(startAngle);
                      const x3 = middleRadius * Math.cos(endAngle);
                      const y3 = middleRadius * Math.sin(endAngle);
                      const x4 = innerRadius * Math.cos(endAngle);
                      const y4 = innerRadius * Math.sin(endAngle);

                      const largeArcFlag = angleSize > Math.PI ? 1 : 0;

                      const pathData = `
                        M ${x1} ${y1}
                        L ${x2} ${y2}
                        A ${middleRadius} ${middleRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
                        L ${x4} ${y4}
                        A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
                        Z
                      `;

                      return (
                        <>
                          <path
                            d={pathData}
                            fill={`url(#sunburstGradient-${ucIndex})`}
                            stroke="hsl(var(--background))"
                            strokeWidth="2"
                            className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                            filter="url(#sunburstGlow)"
                          >
                            <title>{`${useCase.name}\nAvg: ${avgValue.toFixed(0)} ppb\nTotal: ${totalValue.toFixed(0)} ppb`}</title>
                          </path>
                          
                          {/* Icon in center of segment */}
                          <foreignObject
                            x={80 * Math.cos((startAngle + endAngle) / 2) - 10}
                            y={80 * Math.sin((startAngle + endAngle) / 2) - 10}
                            width="20"
                            height="20"
                            className="pointer-events-none"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <useCase.icon className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={2.5} />
                            </div>
                          </foreignObject>
                        </>
                      );
                    })()}

                    {/* Outer rings - Time periods */}
                    {data.map((value, timeIndex) => {
                      const ringRadius = 100 + (timeIndex + 1) * 25;
                      const prevRingRadius = 100 + timeIndex * 25;
                      
                      const x1 = prevRingRadius * Math.cos(startAngle);
                      const y1 = prevRingRadius * Math.sin(startAngle);
                      const x2 = ringRadius * Math.cos(startAngle);
                      const y2 = ringRadius * Math.sin(startAngle);
                      const x3 = ringRadius * Math.cos(endAngle);
                      const y3 = ringRadius * Math.sin(endAngle);
                      const x4 = prevRingRadius * Math.cos(endAngle);
                      const y4 = prevRingRadius * Math.sin(endAngle);

                      const largeArcFlag = angleSize > Math.PI ? 1 : 0;

                      const pathData = `
                        M ${x1} ${y1}
                        L ${x2} ${y2}
                        A ${ringRadius} ${ringRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
                        L ${x4} ${y4}
                        A ${prevRingRadius} ${prevRingRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
                        Z
                      `;

                      const fillColor = 
                        value >= 80 ? '#ef4444' :
                        value >= 60 ? '#f97316' :
                        value >= 40 ? '#eab308' :
                        value >= 20 ? '#4ade80' :
                        '#22c55e';

                      const opacity = 0.5 + (value / 100) * 0.5;

                      return (
                        <path
                          key={`${useCase.name}-outer-${timeIndex}`}
                          d={pathData}
                          fill={fillColor}
                          opacity={opacity}
                          stroke="hsl(var(--background))"
                          strokeWidth="1.5"
                          className="transition-all duration-300 hover:opacity-100 cursor-pointer"
                          style={{
                            animation: `slideUp 0.6s ease-out ${(ucIndex * 100) + (timeIndex * 50)}ms backwards`,
                          }}
                        >
                          <title>{`${useCase.name}\nT-${12 - timeIndex}: ${value} ppb\n${getHeatmapLabel(value)}\nWeight: ${((value / totalValue) * 100).toFixed(1)}%`}</title>
                        </path>
                      );
                    })}

                    {/* Use case label */}
                    <text
                      x={115 * Math.cos((startAngle + endAngle) / 2)}
                      y={115 * Math.sin((startAngle + endAngle) / 2) + 4}
                      textAnchor="middle"
                      className="text-[9px] fill-foreground font-semibold pointer-events-none"
                    >
                      {useCase.name.split(' ').slice(0, 2).join(' ')}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Scroll to zoom, drag to pan. Inner ring shows use case categories, outer rings show time periods with hierarchical sizing based on VOC values.
          </p>
        </div>
      )}
      </Card>

      {/* Legend and Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="p-4">
          <h5 className="font-semibold text-sm mb-3">Intensity Legend</h5>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-green-600 rounded" />
              <span className="text-xs">Very Low (0-20 ppb)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-green-400 rounded" />
              <span className="text-xs">Low (20-40 ppb)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-yellow-500 rounded" />
              <span className="text-xs">Moderate (40-60 ppb)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-orange-500 rounded" />
              <span className="text-xs">High (60-80 ppb)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-red-500 rounded" />
              <span className="text-xs">Critical (80+ ppb)</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h5 className="font-semibold text-sm mb-3">Summary Statistics</h5>
          <div className="space-y-2">
            {useCases.map((useCase) => {
              const data = heatmapData.get(useCase.name) || [];
              const avgValue = data.reduce((a, b) => a + b, 0) / data.length;
              const maxValue = Math.max(...data);
              const minValue = Math.min(...data);
              
              return (
                <div key={useCase.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm bg-gradient-to-br ${useCase.color}`} />
                    <span className="font-medium truncate">{useCase.name}</span>
                  </div>
                  <div className="flex gap-3 text-muted-foreground font-mono">
                    <span title="Average">Avg: {avgValue.toFixed(0)}</span>
                    <span title="Maximum" className="text-orange-500">Max: {maxValue}</span>
                    <span title="Minimum" className="text-green-500">Min: {minValue}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
};

export default VOCIntensityMatrix;
