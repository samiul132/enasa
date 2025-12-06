import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Activity, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Thermometer, Download, FileText, Filter, LayoutGrid, BarChart3, Minus, Beef, Factory, Leaf, Stethoscope, Shield, PieChart, ZoomIn, ZoomOut, Maximize2, LineChart, Clock, Calendar } from "lucide-react";
import jsPDF from "jspdf";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TimeRange = "24h" | "7d" | "30d";

interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: "normal" | "warning" | "critical";
  trend: number;
}

const InteractiveDashboard = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState<string>("All");
  const [comparisonMode, setComparisonMode] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [heatmapView, setHeatmapView] = useState<"grid" | "radial" | "sunburst">("grid");
  const [sunburstZoom, setSunburstZoom] = useState(1);
  const [sunburstPan, setSunburstPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [selectedCell, setSelectedCell] = useState<{ useCase: string; timeIndex: number; value: number } | null>(null);
  const [sensors, setSensors] = useState<SensorData[]>([
    { id: "voc", name: "VOC Level", value: 42, unit: "ppb", status: "normal", trend: -2 },
    { id: "temp", name: "Temperature", value: 22, unit: "°C", status: "normal", trend: 0.5 },
    { id: "humidity", name: "Humidity", value: 58, unit: "%", status: "normal", trend: -1 },
    { id: "co2", name: "CO₂", value: 425, unit: "ppm", status: "normal", trend: 3 },
  ]);

  const useCases = [
    { name: "Food & Beverage", color: "from-orange-400 to-red-500", icon: Beef },
    { name: "Industrial Safety", color: "from-slate-400 to-slate-600", icon: Factory },
    { name: "Environmental", color: "from-green-400 to-emerald-500", icon: Leaf },
    { name: "Healthcare", color: "from-blue-400 to-cyan-500", icon: Stethoscope },
    { name: "Security", color: "from-purple-400 to-indigo-500", icon: Shield },
  ];

  // Initialize heatmap data structure
  const [heatmapData, setHeatmapData] = useState<Map<string, number[]>>(
    new Map(useCases.map(uc => [
      uc.name, 
      Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    ]))
  );

  const [alerts, setAlerts] = useState([
    { id: 1, message: "All systems normal", type: "success", time: "Just now", useCase: "Environmental", timestamp: new Date() },
    { id: 2, message: "VOC levels elevated in storage area", type: "warning", time: "2 minutes ago", useCase: "Industrial Safety", timestamp: new Date(Date.now() - 2 * 60 * 1000) },
    { id: 3, message: "Air quality improved", type: "success", time: "15 minutes ago", useCase: "Healthcare", timestamp: new Date(Date.now() - 15 * 60 * 1000) },
    { id: 4, message: "Unusual odor detected", type: "warning", time: "1 hour ago", useCase: "Food & Beverage", timestamp: new Date(Date.now() - 60 * 60 * 1000) },
    { id: 5, message: "Calibration completed successfully", type: "success", time: "2 hours ago", useCase: "Security", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) },
    { id: 6, message: "High CO2 levels detected", type: "warning", time: "3 hours ago", useCase: "Healthcare", timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000) },
    { id: 7, message: "Temperature normalized", type: "success", time: "4 hours ago", useCase: "Environmental", timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) },
    { id: 8, message: "Sensor maintenance required", type: "warning", time: "6 hours ago", useCase: "Industrial Safety", timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000) },
    { id: 9, message: "Air quality excellent", type: "success", time: "8 hours ago", useCase: "Food & Beverage", timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000) },
    { id: 10, message: "Routine check completed", type: "success", time: "12 hours ago", useCase: "Security", timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000) },
  ]);

  // Generate initial data points based on time range
  const getInitialDataPoints = (range: TimeRange) => {
    const counts = { "24h": 24, "7d": 7, "30d": 30 };
    const count = counts[range];
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  };

  const [dataPoints, setDataPoints] = useState(getInitialDataPoints(timeRange));
  const [dataPoints7d, setDataPoints7d] = useState(getInitialDataPoints("7d"));
  const [dataPoints30d, setDataPoints30d] = useState(getInitialDataPoints("30d"));

  // Update data points when time range changes with animation
  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setDataPoints(getInitialDataPoints(timeRange));
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [timeRange]);

  const getTimeLabel = (index: number, range: TimeRange) => {
    if (range === "24h") return `${index}h`;
    if (range === "7d") return `Day ${index + 1}`;
    if (range === "30d") return index % 5 === 0 ? `D${index + 1}` : "";
    return "";
  };

  const getChartTitle = (range: TimeRange) => {
    if (range === "24h") return "VOC Trends (Last 24 Hours)";
    if (range === "7d") return "VOC Trends (Last 7 Days)";
    return "VOC Trends (Last 30 Days)";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      setSensors(prev => prev.map(sensor => {
        const change = (Math.random() - 0.5) * 5;
        const newValue = Math.max(0, sensor.value + change);
        let status: "normal" | "warning" | "critical" = "normal";
        
        if (sensor.id === "voc" && newValue > 80) status = "warning";
        if (sensor.id === "voc" && newValue > 100) status = "critical";
        if (sensor.id === "co2" && newValue > 800) status = "warning";
        
        return {
          ...sensor,
          value: Math.round(newValue * 10) / 10,
          status,
          trend: change,
        };
      }));

      // Update chart data only for 24h view (live updates)
      if (timeRange === "24h") {
        setDataPoints(prev => {
          const newPoints = [...prev.slice(1), Math.floor(Math.random() * 100)];
          return newPoints;
        });
        
        // Also update comparison data
        setDataPoints7d(prev => {
          const newPoints = [...prev.slice(1), Math.floor(Math.random() * 100)];
          return newPoints;
        });
        
        setDataPoints30d(prev => {
          const newPoints = [...prev.slice(1), Math.floor(Math.random() * 100)];
          return newPoints;
        });
        
        // Update heatmap data periodically
        setHeatmapData(prev => {
          const newMap = new Map(prev);
          useCases.forEach(uc => {
            const currentData = newMap.get(uc.name) || [];
            const newData = [...currentData.slice(1), Math.floor(Math.random() * 100)];
            newMap.set(uc.name, newData);
          });
          return newMap;
        });
      }

      // Occasionally add alerts
      if (Math.random() > 0.9) {
        const useCaseName = useCases[Math.floor(Math.random() * useCases.length)].name;
        const messages = [
          `VOC spike detected - ${useCaseName}`,
          `Air quality warning - ${useCaseName}`,
          `Monitoring alert - ${useCaseName}`,
          `Threshold exceeded - ${useCaseName}`,
        ];
        const newAlert = {
          id: Date.now(),
          message: messages[Math.floor(Math.random() * messages.length)],
          type: "warning" as const,
          time: "Just now",
          useCase: useCaseName,
          timestamp: new Date(),
        };
        setAlerts(prev => [newAlert, ...prev].slice(0, 10));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [timeRange]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-red-500";
      case "warning": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical": return <AlertTriangle className="h-4 w-4" />;
      case "warning": return <Activity className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

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

  const exportToCSV = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    
    // Create CSV content
    let csvContent = "E-Näsa Dashboard Export\n";
    csvContent += `Export Date: ${new Date().toLocaleString()}\n`;
    csvContent += `Time Range: ${timeRange}\n\n`;
    
    // Sensor data
    csvContent += "Sensor Data\n";
    csvContent += "Name,Value,Unit,Status,Trend\n";
    sensors.forEach(sensor => {
      csvContent += `${sensor.name},${sensor.value},${sensor.unit},${sensor.status},${sensor.trend.toFixed(1)}\n`;
    });
    
    // Historical data
    csvContent += "\nHistorical VOC Data\n";
    csvContent += "Period,Value\n";
    dataPoints.forEach((point, index) => {
      csvContent += `${getTimeLabel(index, timeRange)},${point}\n`;
    });
    
    // Recent alerts
    csvContent += "\nRecent Alerts\n";
    csvContent += "Time,Type,Message\n";
    alerts.forEach(alert => {
      csvContent += `${alert.time},${alert.type},${alert.message}\n`;
    });
    
    // Create download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `enasa-dashboard-${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("CSV report downloaded successfully");
  };

  const exportToPDF = () => {
    const timestamp = new Date().toISOString().split('T')[0];
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text("E-Näsa Dashboard Report", 20, 20);
    
    // Metadata
    doc.setFontSize(10);
    doc.text(`Export Date: ${new Date().toLocaleString()}`, 20, 30);
    doc.text(`Time Range: ${timeRange}`, 20, 36);
    
    // Sensor Data Section
    doc.setFontSize(14);
    doc.text("Current Sensor Readings", 20, 50);
    doc.setFontSize(10);
    
    let yPos = 60;
    sensors.forEach(sensor => {
      const statusColor: [number, number, number] = sensor.status === 'critical' ? [255, 0, 0] : 
                         sensor.status === 'warning' ? [255, 165, 0] : 
                         [0, 128, 0];
      
      doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
      doc.text(`● ${sensor.name}: ${sensor.value} ${sensor.unit} (${sensor.status})`, 25, yPos);
      doc.setTextColor(0, 0, 0);
      yPos += 8;
    });
    
    // Historical Data Summary
    yPos += 10;
    doc.setFontSize(14);
    doc.text("Historical Data Summary", 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    const avg = (dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length).toFixed(1);
    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    
    doc.text(`Average VOC: ${avg} ppb`, 25, yPos);
    doc.text(`Maximum: ${max} ppb`, 25, yPos + 6);
    doc.text(`Minimum: ${min} ppb`, 25, yPos + 12);
    
    // Alerts Section
    yPos += 25;
    doc.setFontSize(14);
    doc.text("Recent Alerts", 20, yPos);
    yPos += 10;
    
    doc.setFontSize(9);
    alerts.forEach(alert => {
      if (yPos > 270) { // Check if we need a new page
        doc.addPage();
        yPos = 20;
      }
      const alertColor: [number, number, number] = alert.type === 'warning' ? [255, 165, 0] : [0, 128, 0];
      doc.setTextColor(alertColor[0], alertColor[1], alertColor[2]);
      doc.text(`● [${alert.time}] ${alert.message}`, 25, yPos);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
    });
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text("Generated by E-Näsa Dashboard System", 20, 285);
    
    // Save
    doc.save(`enasa-dashboard-${timestamp}.pdf`);
    toast.success("PDF report downloaded successfully");
  };

  // Filter alerts based on selected use case
  const filteredAlerts = selectedUseCase === "All" 
    ? alerts 
    : alerts.filter(alert => alert.useCase === selectedUseCase);

  // Group alerts by time periods
  const groupAlertsByTime = (alerts: typeof filteredAlerts) => {
    const now = new Date();
    const groups: { [key: string]: typeof filteredAlerts } = {
      "Just now": [],
      "Last hour": [],
      "Earlier today": [],
      "Older": [],
    };

    alerts.forEach(alert => {
      const diffMs = now.getTime() - alert.timestamp.getTime();
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

      if (diffMinutes < 5) {
        groups["Just now"].push(alert);
      } else if (diffHours < 1) {
        groups["Last hour"].push(alert);
      } else if (diffHours < 12) {
        groups["Earlier today"].push(alert);
      } else {
        groups["Older"].push(alert);
      }
    });

    return groups;
  };

  const groupedAlerts = groupAlertsByTime(filteredAlerts);

  // Calculate averages and trends for comparison
  const avg24h = dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length;
  const avg7d = dataPoints7d.reduce((a, b) => a + b, 0) / dataPoints7d.length;
  const avg30d = dataPoints30d.reduce((a, b) => a + b, 0) / dataPoints30d.length;
  
  const trend7dVs24h = ((avg24h - avg7d) / avg7d) * 100;
  const trend30dVs7d = ((avg7d - avg30d) / avg30d) * 100;

  const getTrendIcon = (trendValue: number) => {
    if (trendValue < -5) return <TrendingDown className="h-4 w-4" />;
    if (trendValue > 5) return <TrendingUp className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = (trendValue: number) => {
    // For VOC, lower is better (improving)
    if (trendValue < -5) return "text-green-500";
    if (trendValue > 5) return "text-red-500";
    return "text-yellow-500";
  };

  const getTrendLabel = (trendValue: number) => {
    if (trendValue < -5) return "Improving";
    if (trendValue > 5) return "Worsening";
    return "Stable";
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Enhanced Header with Features */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Live Dashboard Preview
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Experience real-time sensor monitoring with powerful analytics, customizable alerts, and comprehensive reporting
        </p>
        
        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          <Card className="p-4 bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <LineChart className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">Real-Time Analytics</h4>
            <p className="text-xs text-muted-foreground">Live data visualization with multiple time ranges and trend analysis</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-500/5 to-background border-blue-500/20">
            <Download className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">Export & Reports</h4>
            <p className="text-xs text-muted-foreground">Generate PDF and CSV reports with detailed sensor data and insights</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-green-500/5 to-background border-green-500/20">
            <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">Multi-Sensor Tracking</h4>
            <p className="text-xs text-muted-foreground">Monitor VOC, temperature, humidity, CO₂ and more simultaneously</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-orange-500/5 to-background border-orange-500/20">
            <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h4 className="font-semibold text-sm mb-1">Smart Alerts</h4>
            <p className="text-xs text-muted-foreground">Instant notifications when thresholds are exceeded with filtering</p>
          </Card>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-muted/30 p-4 rounded-lg border border-border">
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Live Monitoring
          </Badge>
          <span className="text-sm text-muted-foreground">Updated every 2 seconds</span>
          
          {/* Signal Strength Meter */}
          <div className="flex items-center gap-2 px-3 py-1 bg-background/50 rounded-md border border-border">
            <Activity className="h-3 w-3 text-primary" />
            <div className="flex items-end gap-0.5 h-4">
              {[...Array(5)].map((_, i) => {
                const height = (i + 1) * 20;
                const delay = i * 100;
                const isActive = sensors[0]?.status !== 'critical' || i < 3;
                return (
                  <div
                    key={i}
                    className={`w-1 rounded-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-muted-foreground/30'
                    }`}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${delay}ms`,
                      animationDuration: '2s'
                    }}
                  />
                );
              })}
            </div>
            <span className="text-xs font-medium text-green-500">
              {sensors[0]?.status === 'critical' ? 'Weak' : sensors[0]?.status === 'warning' ? 'Good' : 'Strong'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                {selectedUseCase}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card border-border z-50">
              <DropdownMenuLabel>Filter by Use Case</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={selectedUseCase} onValueChange={setSelectedUseCase}>
                <DropdownMenuRadioItem value="All">All Use Cases</DropdownMenuRadioItem>
                {useCases.map((useCase) => (
                  <DropdownMenuRadioItem key={useCase.name} value={useCase.name}>
                    {useCase.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="outline" 
            size="sm"
            onClick={exportToCSV}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            CSV
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={exportToPDF}
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            PDF
          </Button>
          <Button
            variant={comparisonMode ? "default" : "outline"}
            size="sm"
            onClick={() => setComparisonMode(!comparisonMode)}
            className="gap-2"
          >
            {comparisonMode ? <BarChart3 className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
            Compare
          </Button>
        </div>
      </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sensors.map((sensor) => (
          <Card key={sensor.id} className="p-4 hover-lift transition-all duration-300 relative overflow-hidden">
            {/* Signal Quality Waves - Background Animation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-0.5 h-full p-2">
                {[...Array(8)].map((_, i) => {
                  const height = 20 + (Math.sin((Date.now() / 1000 + i) * 2) * 30);
                  return (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all duration-1000"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {sensor.id === "temp" ? (
                    <Thermometer className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">{sensor.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)} animate-pulse`} />
                  {/* Mini signal bars for each sensor */}
                  <div className="flex items-end gap-0.5 h-3 ml-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-0.5 rounded-sm ${
                          sensor.status === 'critical' && i === 2
                            ? 'bg-muted-foreground/30'
                            : 'bg-primary animate-pulse'
                        }`}
                        style={{
                          height: `${(i + 1) * 33}%`,
                          animationDelay: `${i * 150}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">
                  {sensor.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {sensor.unit}
                  </span>
                </div>
                <div className="flex items-center text-xs">
                  <TrendingUp 
                    className={`h-3 w-3 mr-1 ${sensor.trend > 0 ? 'text-red-500 rotate-0' : 'text-green-500 rotate-180'}`}
                  />
                  <span className={sensor.trend > 0 ? 'text-red-500' : 'text-green-500'}>
                    {Math.abs(sensor.trend).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Alerts Feed */}
      <Card className="p-6 border-2 hover:border-primary/30 transition-all bg-gradient-to-br from-background to-muted/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Recent Alerts</h4>
              {selectedUseCase !== "All" && (
                <p className="text-xs text-muted-foreground">
                  Filtered: {selectedUseCase}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1.5">
              {filteredAlerts.length} active
            </Badge>
            <Button
              variant={showTimeline ? "default" : "outline"}
              size="sm"
              onClick={() => setShowTimeline(!showTimeline)}
              className="gap-2"
            >
              <Clock className="h-4 w-4" />
              Timeline
            </Button>
          </div>
        </div>
        
        {showTimeline ? (
          /* Timeline View */
          <div className="space-y-6">
            {Object.entries(groupedAlerts).map(([timeGroup, groupAlerts]) => {
              if (groupAlerts.length === 0) return null;
              
              return (
                <div key={timeGroup} className="relative">
                  {/* Time Group Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {timeGroup}
                    </h5>
                    <div className="flex-1 h-px bg-border" />
                    <Badge variant="outline" className="text-xs">
                      {groupAlerts.length}
                    </Badge>
                  </div>

                  {/* Timeline Items */}
                  <div className="space-y-3 ml-2">
                    {groupAlerts.slice(0, 3).map((alert, idx) => {
                      const useCaseColor = useCases.find(uc => uc.name === alert.useCase)?.color || "from-primary to-primary";
                      const isWarning = alert.type === 'warning';
                      
                      return (
                        <div 
                          key={alert.id}
                          className="relative pl-8"
                        >
                          {/* Timeline connector line */}
                          {idx < groupAlerts.length - 1 && (
                            <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-border" />
                          )}
                          
                          {/* Timeline dot */}
                          <div className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center ${
                            isWarning ? 'bg-yellow-500/20' : 'bg-green-500/20'
                          } border-2 ${isWarning ? 'border-yellow-500' : 'border-green-500'}`}>
                            <div className={`w-2 h-2 rounded-full ${
                              isWarning ? 'bg-yellow-500' : 'bg-green-500'
                            } ${idx === 0 ? 'animate-pulse' : ''}`} />
                          </div>

                          {/* Alert Content */}
                          <div className="group p-4 rounded-lg border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-md">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-start gap-3 flex-1">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                                  isWarning ? 'bg-yellow-500/10' : 'bg-green-500/10'
                                }`}>
                                  {isWarning ? (
                                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                                  ) : (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  )}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-sm mb-1">{alert.message}</p>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {alert.time}
                                    </div>
                                    {selectedUseCase === "All" && (
                                      <Badge 
                                        variant="outline" 
                                        className={`bg-gradient-to-r ${useCaseColor} text-white border-0 text-[10px] px-2 py-0.5`}
                                      >
                                        {alert.useCase}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Hover accent */}
                            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${useCaseColor} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {filteredAlerts.length === 0 && (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">No alerts for {selectedUseCase}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">All systems operating normally</p>
              </div>
            )}
          </div>
        ) : (
          /* Card View */
          <div className="space-y-2">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.slice(0, 3).map((alert, idx) => {
              const useCaseColor = useCases.find(uc => uc.name === alert.useCase)?.color || "from-primary to-primary";
              const isWarning = alert.type === 'warning';
              
              return (
                <div 
                  key={alert.id} 
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Status indicator */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isWarning ? 'bg-yellow-500/10' : 'bg-green-500/10'
                  } group-hover:scale-110 transition-transform`}>
                    {isWarning ? (
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-sm leading-relaxed">{alert.message}</p>
                      {selectedUseCase === "All" && (
                        <Badge 
                          variant="outline" 
                          className={`bg-gradient-to-r ${useCaseColor} text-white border-0 text-[10px] px-2 py-0.5 whitespace-nowrap flex-shrink-0`}
                        >
                          {alert.useCase}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                      {alert.time}
                    </div>
                  </div>
                  
                  {/* Hover accent */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${useCaseColor} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">No alerts for {selectedUseCase}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">All systems operating normally</p>
            </div>
            )}
          </div>
        )}
      </Card>

      {/* Drill-down Dialog */}
      <Dialog open={!!selectedCell} onOpenChange={(open) => !open && setSelectedCell(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              VOC Data Analysis - {selectedCell?.useCase}
            </DialogTitle>
            <DialogDescription>
              Period T-{selectedCell ? 12 - selectedCell.timeIndex : 0} · Detailed metrics and insights
            </DialogDescription>
          </DialogHeader>

          {selectedCell && (
            <div className="space-y-6">
              {/* Main Value Display */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">VOC Concentration</p>
                  <p className="text-4xl font-bold text-primary">{selectedCell.value} <span className="text-lg">ppb</span></p>
                </div>
                <Badge className={`text-sm ${
                  selectedCell.value >= 80 ? 'bg-red-500' :
                  selectedCell.value >= 60 ? 'bg-orange-500' :
                  selectedCell.value >= 40 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}>
                  {getHeatmapLabel(selectedCell.value)}
                </Badge>
              </div>

              {/* Trend Chart */}
              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-primary" />
                  Historical Trend (Last 6 Periods)
                </h4>
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="trendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    {(() => {
                      const trendData = Array.from({ length: 6 }, (_, i) => {
                        const variation = Math.random() * 20 - 10;
                        return Math.max(0, Math.min(100, selectedCell.value + variation));
                      });
                      const points = trendData.map((val, i) => `${(i / 5) * 100},${100 - val}`).join(' ');
                      const areaPath = `M 0,100 L ${points} L 100,100 Z`;
                      const linePath = `M ${points}`;
                      
                      return (
                        <>
                          <path d={areaPath} fill="url(#trendGradient)" />
                          <path d={linePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                          {trendData.map((val, i) => (
                            <circle
                              key={i}
                              cx={(i / 5) * 100}
                              cy={100 - val}
                              r="1.5"
                              fill="hsl(var(--primary))"
                              className="animate-pulse"
                            />
                          ))}
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <Card className="p-3">
                  <p className="text-xs text-muted-foreground mb-1">vs Average</p>
                  <p className="text-lg font-bold flex items-center gap-1">
                    {selectedCell.value > 50 ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        <span className="text-red-500">+{(selectedCell.value - 50).toFixed(0)}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">-{(50 - selectedCell.value).toFixed(0)}%</span>
                      </>
                    )}
                  </p>
                </Card>

                <Card className="p-3">
                  <p className="text-xs text-muted-foreground mb-1">Peak Value</p>
                  <p className="text-lg font-bold">{Math.min(100, selectedCell.value + 15)} ppb</p>
                </Card>

                <Card className="p-3">
                  <p className="text-xs text-muted-foreground mb-1">Stability</p>
                  <p className="text-lg font-bold flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Good</span>
                  </p>
                </Card>
              </div>

              {/* Recommendations */}
              <Card className="p-4 bg-muted/50">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  Recommendations
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {selectedCell.value >= 80 ? (
                    <>
                      <li>• Immediate ventilation recommended</li>
                      <li>• Check for potential contamination sources</li>
                      <li>• Consider activating air purification systems</li>
                    </>
                  ) : selectedCell.value >= 60 ? (
                    <>
                      <li>• Monitor levels closely over next period</li>
                      <li>• Increase air circulation if possible</li>
                      <li>• Review recent activities in the area</li>
                    </>
                  ) : (
                    <>
                      <li>• Current levels are within normal range</li>
                      <li>• Continue standard monitoring protocols</li>
                      <li>• Maintain current ventilation settings</li>
                    </>
                  )}
                </ul>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveDashboard;
