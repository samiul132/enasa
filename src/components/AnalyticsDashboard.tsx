import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Factory, ShieldAlert, Leaf, Utensils, Building2, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const useCaseData = {
  home: {
    icon: Home,
    title: "Home Air Quality",
    color: "#10b981",
    trend: "+5.2%",
    status: "Good",
    historicalData: [
      { time: "00:00", co2: 450, voc: 80, pm25: 5, aqi: 35 },
      { time: "04:00", co2: 420, voc: 70, pm25: 4, aqi: 32 },
      { time: "08:00", co2: 650, voc: 120, pm25: 8, aqi: 45 },
      { time: "12:00", co2: 680, voc: 130, pm25: 9, aqi: 48 },
      { time: "16:00", co2: 620, voc: 110, pm25: 7, aqi: 42 },
      { time: "20:00", co2: 580, voc: 100, pm25: 6, aqi: 38 },
      { time: "23:59", co2: 520, voc: 90, pm25: 5, aqi: 36 }
    ],
    detectionBreakdown: [
      { name: "CO₂", value: 35, color: "#60a5fa" },
      { name: "VOCs", value: 25, color: "#4ade80" },
      { name: "PM2.5", value: 20, color: "#f97316" },
      { name: "Other", value: 20, color: "#a78bfa" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 45, alerts: 2 },
      { day: "Tue", detections: 52, alerts: 1 },
      { day: "Wed", detections: 48, alerts: 3 },
      { day: "Thu", detections: 55, alerts: 1 },
      { day: "Fri", detections: 50, alerts: 2 },
      { day: "Sat", detections: 38, alerts: 0 },
      { day: "Sun", detections: 42, alerts: 1 }
    ]
  },
  industrial: {
    icon: Factory,
    title: "Industrial Safety",
    color: "#f97316",
    trend: "+12.8%",
    status: "Monitor",
    historicalData: [
      { time: "00:00", voc: 320, benzene: 8, toluene: 25, aqi: 68 },
      { time: "04:00", voc: 280, benzene: 6, toluene: 20, aqi: 62 },
      { time: "08:00", voc: 450, benzene: 12, toluene: 35, aqi: 85 },
      { time: "12:00", voc: 520, benzene: 15, toluene: 42, aqi: 95 },
      { time: "16:00", voc: 480, benzene: 13, toluene: 38, aqi: 88 },
      { time: "20:00", voc: 380, benzene: 10, toluene: 28, aqi: 72 },
      { time: "23:59", voc: 350, benzene: 9, toluene: 26, aqi: 70 }
    ],
    detectionBreakdown: [
      { name: "VOCs", value: 45, color: "#f97316" },
      { name: "Benzene", value: 25, color: "#ef4444" },
      { name: "Toluene", value: 20, color: "#f59e0b" },
      { name: "Other", value: 10, color: "#fbbf24" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 125, alerts: 8 },
      { day: "Tue", detections: 138, alerts: 12 },
      { day: "Wed", detections: 142, alerts: 10 },
      { day: "Thu", detections: 135, alerts: 9 },
      { day: "Fri", detections: 148, alerts: 15 },
      { day: "Sat", detections: 95, alerts: 3 },
      { day: "Sun", detections: 88, alerts: 2 }
    ]
  },
  security: {
    icon: ShieldAlert,
    title: "Security Detection",
    color: "#ef4444",
    trend: "-3.2%",
    status: "Alert",
    historicalData: [
      { time: "00:00", threats: 2, scans: 450, alerts: 1 },
      { time: "04:00", threats: 1, scans: 380, alerts: 0 },
      { time: "08:00", threats: 5, scans: 820, alerts: 3 },
      { time: "12:00", threats: 8, scans: 1200, alerts: 5 },
      { time: "16:00", threats: 6, scans: 950, alerts: 4 },
      { time: "20:00", threats: 4, scans: 680, alerts: 2 },
      { time: "23:59", threats: 3, scans: 520, alerts: 1 }
    ],
    detectionBreakdown: [
      { name: "Explosives", value: 15, color: "#ef4444" },
      { name: "Narcotics", value: 35, color: "#dc2626" },
      { name: "Chemicals", value: 25, color: "#f87171" },
      { name: "Clear", value: 25, color: "#10b981" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 28, alerts: 12 },
      { day: "Tue", detections: 32, alerts: 15 },
      { day: "Wed", detections: 25, alerts: 10 },
      { day: "Thu", detections: 30, alerts: 14 },
      { day: "Fri", detections: 35, alerts: 18 },
      { day: "Sat", detections: 22, alerts: 8 },
      { day: "Sun", detections: 20, alerts: 7 }
    ]
  },
  environmental: {
    icon: Leaf,
    title: "Environmental",
    color: "#fbbf24",
    trend: "+7.5%",
    status: "Moderate",
    historicalData: [
      { time: "00:00", no2: 28, o3: 25, pm10: 18, aqi: 55 },
      { time: "04:00", no2: 22, o3: 20, pm10: 15, aqi: 48 },
      { time: "08:00", no2: 45, o3: 35, pm10: 25, aqi: 72 },
      { time: "12:00", no2: 52, o3: 42, pm10: 30, aqi: 82 },
      { time: "16:00", no2: 48, o3: 38, pm10: 28, aqi: 76 },
      { time: "20:00", no2: 38, o3: 30, pm10: 22, aqi: 65 },
      { time: "23:59", no2: 32, o3: 28, pm10: 20, aqi: 58 }
    ],
    detectionBreakdown: [
      { name: "NO₂", value: 35, color: "#f59e0b" },
      { name: "O₃", value: 30, color: "#fbbf24" },
      { name: "PM10", value: 25, color: "#fb923c" },
      { name: "Other", value: 10, color: "#fdba74" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 85, alerts: 5 },
      { day: "Tue", detections: 92, alerts: 8 },
      { day: "Wed", detections: 88, alerts: 6 },
      { day: "Thu", detections: 95, alerts: 7 },
      { day: "Fri", detections: 98, alerts: 9 },
      { day: "Sat", detections: 78, alerts: 3 },
      { day: "Sun", detections: 75, alerts: 2 }
    ]
  },
  food: {
    icon: Utensils,
    title: "Food Safety",
    color: "#3b82f6",
    trend: "+2.1%",
    status: "Excellent",
    historicalData: [
      { time: "00:00", ethanol: 8, acetic: 4, quality: 95 },
      { time: "04:00", ethanol: 6, acetic: 3, quality: 97 },
      { time: "08:00", ethanol: 15, acetic: 8, quality: 88 },
      { time: "12:00", ethanol: 18, acetic: 10, quality: 85 },
      { time: "16:00", ethanol: 16, acetic: 9, quality: 87 },
      { time: "20:00", ethanol: 12, acetic: 6, quality: 92 },
      { time: "23:59", ethanol: 10, acetic: 5, quality: 94 }
    ],
    detectionBreakdown: [
      { name: "Ethanol", value: 40, color: "#3b82f6" },
      { name: "Acetic Acid", value: 25, color: "#60a5fa" },
      { name: "Fresh", value: 30, color: "#10b981" },
      { name: "Other", value: 5, color: "#93c5fd" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 65, alerts: 2 },
      { day: "Tue", detections: 72, alerts: 3 },
      { day: "Wed", detections: 68, alerts: 1 },
      { day: "Thu", detections: 75, alerts: 4 },
      { day: "Fri", detections: 82, alerts: 5 },
      { day: "Sat", detections: 78, alerts: 3 },
      { day: "Sun", detections: 70, alerts: 2 }
    ]
  },
  healthcare: {
    icon: Building2,
    title: "Healthcare",
    color: "#8b5cf6",
    trend: "-1.5%",
    status: "Optimal",
    historicalData: [
      { time: "00:00", formaldehyde: 0.05, sterilization: 85, cleanliness: 98 },
      { time: "04:00", formaldehyde: 0.03, sterilization: 82, cleanliness: 99 },
      { time: "08:00", formaldehyde: 0.08, sterilization: 92, cleanliness: 96 },
      { time: "12:00", formaldehyde: 0.09, sterilization: 95, cleanliness: 95 },
      { time: "16:00", formaldehyde: 0.07, sterilization: 90, cleanliness: 97 },
      { time: "20:00", formaldehyde: 0.06, sterilization: 88, cleanliness: 98 },
      { time: "23:59", formaldehyde: 0.04, sterilization: 85, cleanliness: 99 }
    ],
    detectionBreakdown: [
      { name: "Clean Air", value: 60, color: "#8b5cf6" },
      { name: "Sterilization", value: 25, color: "#a78bfa" },
      { name: "Formaldehyde", value: 10, color: "#c4b5fd" },
      { name: "Other", value: 5, color: "#ddd6fe" }
    ],
    weeklyStats: [
      { day: "Mon", detections: 55, alerts: 1 },
      { day: "Tue", detections: 58, alerts: 0 },
      { day: "Wed", detections: 52, alerts: 1 },
      { day: "Thu", detections: 60, alerts: 2 },
      { day: "Fri", detections: 62, alerts: 1 },
      { day: "Sat", detections: 48, alerts: 0 },
      { day: "Sun", detections: 45, alerts: 0 }
    ]
  }
};

type UseCaseKey = keyof typeof useCaseData;

const AnalyticsDashboard = () => {
  const navigate = useNavigate();
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseKey>("home");
  const currentData = useCaseData[selectedUseCase];
  const CurrentIcon = currentData.icon;

  const statusColors = {
    Good: "text-green-500",
    Excellent: "text-blue-500",
    Optimal: "text-purple-500",
    Monitor: "text-orange-500",
    Moderate: "text-yellow-500",
    Alert: "text-red-500"
  };

  return (
    <section className="py-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="relative mb-8 text-center">

          {/* Heading + Button Wrapper */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 relative">
            <h2 className="text-4xl font-bold">
              Real-time Analytics <span className="text-gradient">Dashboard</span>
            </h2>

            <Button
              variant="default"
              size="sm"
              className="ml-2"
              onClick={() => navigate("/login", { state: { from: "/live-studio" } })}
              style={{ marginLeft: "10px" }} // exact 10px gap
            >
              Open Live Studio
            </Button>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor performance metrics and detection trends across all industry applications
          </p>
        </div>


        <Tabs value={selectedUseCase} onValueChange={(value) => setSelectedUseCase(value as UseCaseKey)} className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full max-w-5xl mx-auto mb-8 h-auto p-1 bg-card border border-border">
            {Object.entries(useCaseData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline font-medium">{data.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(useCaseData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="space-y-8 animate-fade-in">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Status
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${statusColors[data.status as keyof typeof statusColors]}`}>
                      {data.status}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      {data.trend.startsWith("+") ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      24h Trend
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.trend}</div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardDescription>Weekly Detections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {data.weeklyStats.reduce((acc, day) => acc + day.detections, 0).toLocaleString()}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardDescription className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Weekly Alerts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-500">
                      {data.weeklyStats.reduce((acc, day) => acc + day.alerts, 0)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Historical Trend */}
                <Card>
                  <CardHeader className="pb-3 pt-4">
                    <CardTitle className="text-sm">24-Hour Trend</CardTitle>
                    <CardDescription className="text-xs">Real-time monitoring data</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={data.historicalData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "11px"
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        {Object.keys(data.historicalData[0])
                          .filter(key => key !== "time")
                          .map((key, index) => (
                            <Area
                              key={key}
                              type="monotone"
                              dataKey={key}
                              stroke={data.color}
                              fill={data.color}
                              fillOpacity={0.3 - index * 0.1}
                            />
                          ))}
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Detection Breakdown */}
                <Card>
                  <CardHeader className="pb-3 pt-4">
                    <CardTitle className="text-sm">Detection Breakdown</CardTitle>
                    <CardDescription className="text-xs">Compound distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={data.detectionBreakdown}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.detectionBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "11px"
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Weekly Activity */}
                <Card className="lg:col-span-2">
                  <CardHeader className="pb-3 pt-4">
                    <CardTitle className="text-sm">Weekly Activity</CardTitle>
                    <CardDescription className="text-xs">Detections and alerts by day</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={data.weeklyStats}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                            fontSize: "11px"
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar dataKey="detections" fill={data.color} radius={[8, 8, 0, 0]} />
                        <Bar dataKey="alerts" fill="#ef4444" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
