import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Wind, Droplets, Thermometer, Activity, Power, Settings, AlertCircle, CheckCircle, WifiOff, Beef, Factory, Leaf, Stethoscope, Shield } from "lucide-react";

const Dashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState("home-001");


  // Mock real-time data
  const realtimeMetrics = {
    aqi: 42,
    pm25: 12.3,
    pm10: 18.5,
    co2: 420,
    voc: 0.3,
    temperature: 22.5,
    humidity: 45,
    status: "excellent"
  };

  // Mock historical data
  const historicalData = [
    { time: "00:00", aqi: 38, pm25: 10, pm10: 15, co2: 400 },
    { time: "04:00", aqi: 35, pm25: 9, pm10: 14, co2: 390 },
    { time: "08:00", aqi: 45, pm25: 14, pm10: 20, co2: 450 },
    { time: "12:00", aqi: 52, pm25: 16, pm10: 24, co2: 480 },
    { time: "16:00", aqi: 48, pm25: 15, pm10: 22, co2: 460 },
    { time: "20:00", aqi: 42, pm25: 12, pm10: 18, co2: 420 },
  ];

  // Mock devices data
  const devices = [
    { id: "home-001", name: "AirlytiQ Home", location: "Living Room", status: "online", model: "Home" },
    { id: "pro-001", name: "AirlytiQ Pro", location: "Office", status: "online", model: "Pro" },
    { id: "industrial-001", name: "AirlytiQ Industrial", location: "Warehouse", status: "offline", model: "Industrial" },
  ];

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return { label: "Excellent", color: "bg-green-500" };
    if (aqi <= 100) return { label: "Good", color: "bg-blue-500" };
    if (aqi <= 150) return { label: "Moderate", color: "bg-yellow-500" };
    if (aqi <= 200) return { label: "Poor", color: "bg-orange-500" };
    return { label: "Hazardous", color: "bg-red-500" };
  };

  const aqiStatus = getAQIStatus(realtimeMetrics.aqi);


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Analytics Dashboard Section */}
        <AnalyticsDashboard />

        {/* Header */}
        <div className="mb-6 mt-12">
          <h1 className="text-2xl font-bold mb-1">Air Quality Dashboard</h1>
          <p className="text-sm text-muted-foreground">Monitor and manage your <span className="font-brand tracking-wide">AirlytiQ</span> devices in real-time</p>
        </div>

        {/* Real-time Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* AQI Card */}
          <Card className="border-border">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs font-medium flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-primary" />
                Air Quality Index
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">{realtimeMetrics.aqi}</span>
                <Badge className={`${aqiStatus.color} mb-0.5 text-xs`}>{aqiStatus.label}</Badge>
              </div>
              <div className={`h-1.5 ${aqiStatus.color} rounded-full mt-2`} style={{ width: `${Math.min(realtimeMetrics.aqi / 2, 100)}%` }} />
            </CardContent>
          </Card>

          {/* PM2.5 Card */}
          <Card className="border-border">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs font-medium flex items-center gap-1.5">
                <Wind className="h-3.5 w-3.5 text-primary" />
                PM2.5
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-end gap-1.5">
                <span className="text-2xl font-bold">{realtimeMetrics.pm25}</span>
                <span className="text-xs text-muted-foreground mb-0.5">µg/m³</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">Fine particles &lt; 2.5µm</p>
            </CardContent>
          </Card>

          {/* CO2 Card */}
          <Card className="border-border">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs font-medium flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-primary" />
                CO₂ Level
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-end gap-1.5">
                <span className="text-2xl font-bold">{realtimeMetrics.co2}</span>
                <span className="text-xs text-muted-foreground mb-0.5">ppm</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">Carbon dioxide concentration</p>
            </CardContent>
          </Card>

          {/* Temperature & Humidity Card */}
          <Card className="border-border">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-xs font-medium flex items-center gap-1.5">
                <Thermometer className="h-3.5 w-3.5 text-primary" />
                Climate
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">{realtimeMetrics.temperature}°C</span>
                </div>
                <div className="text-right">
                  <Droplets className="h-4 w-4 text-primary inline" />
                  <span className="text-lg font-bold ml-1">{realtimeMetrics.humidity}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="aqi" className="mb-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[480px]">
            <TabsTrigger value="aqi" className="text-xs">AQI</TabsTrigger>
            <TabsTrigger value="particles" className="text-xs">Particles</TabsTrigger>
            <TabsTrigger value="co2" className="text-xs">CO₂</TabsTrigger>
            <TabsTrigger value="comparison" className="text-xs">Compare</TabsTrigger>
          </TabsList>

          <TabsContent value="aqi">
            <Card className="border-border">
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-base">Air Quality Index (24 Hours)</CardTitle>
                <CardDescription className="text-xs">Historical AQI trends for the past 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={historicalData}>
                    <defs>
                      <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="aqi" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorAqi)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="particles">
            <Card className="border-border">
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-base">Particulate Matter (24 Hours)</CardTitle>
                <CardDescription className="text-xs">PM2.5 and PM10 levels throughout the day</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="pm25" stroke="hsl(var(--primary))" strokeWidth={2} name="PM2.5" />
                    <Line type="monotone" dataKey="pm10" stroke="hsl(var(--accent))" strokeWidth={2} name="PM10" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="co2">
            <Card className="border-border">
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-base">CO₂ Concentration (24 Hours)</CardTitle>
                <CardDescription className="text-xs">Carbon dioxide levels throughout the day</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', fontSize: '12px' }} />
                    <Bar dataKey="co2" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison">
            <Card className="border-border">
              <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-base">All Metrics Comparison</CardTitle>
                <CardDescription className="text-xs">View all air quality parameters in one chart</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="aqi" stroke="hsl(var(--primary))" name="AQI" />
                    <Line type="monotone" dataKey="pm25" stroke="hsl(var(--accent))" name="PM2.5" />
                    <Line type="monotone" dataKey="co2" stroke="hsl(var(--secondary))" name="CO₂" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Device Management */}
        <Card className="border-border">
          <CardHeader className="pb-3 pt-4">
            <CardTitle className="text-base">Device Management</CardTitle>
            <CardDescription className="text-xs">Monitor and control all your E-Nāsa devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devices.map((device) => (
                <div
                  key={device.id}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    selectedDevice === device.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedDevice(device.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full ${device.status === "online" ? "bg-primary/10" : "bg-muted"} flex items-center justify-center`}>
                        <Wind className={`h-6 w-6 ${device.status === "online" ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      {device.status === "online" ? (
                        <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-green-500 bg-background rounded-full" />
                      ) : (
                        <WifiOff className="absolute -top-1 -right-1 h-5 w-5 text-red-500 bg-background rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{device.name}</h3>
                      <p className="text-sm text-muted-foreground">{device.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={device.status === "online" ? "default" : "secondary"}>
                      {device.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Power className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        {/* Alerts Section */}
        <Card className="border-border mt-6">
          <CardHeader className="pb-3 pt-4">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertCircle className="h-4 w-4 text-primary" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  type: "success",
                  icon: CheckCircle,
                  message: "Air quality excellent",
                  location: "Living Room • 5 minutes ago",
                  bgColor: "bg-green-500/10",
                  borderColor: "border-green-500/20",
                  textColor: "text-green-500"
                },
                {
                  type: "warning",
                  icon: AlertCircle,
                  message: "CO₂ level moderately high",
                  location: "Office • 2 hours ago",
                  bgColor: "bg-yellow-500/10",
                  borderColor: "border-yellow-500/20",
                  textColor: "text-yellow-500"
                },
                {
                  type: "error",
                  icon: WifiOff,
                  message: "Device offline",
                  location: "Warehouse • 3 hours ago",
                  bgColor: "bg-red-500/10",
                  borderColor: "border-red-500/20",
                  textColor: "text-red-500"
                }
              ].slice(0, 3).map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${alert.bgColor} border ${alert.borderColor}`}>
                    <Icon className={`h-5 w-5 ${alert.textColor} mt-0.5`} />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
