import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Smartphone, Apple, Download, Bell, MapPin, BarChart3, Settings, Shield, Zap, Cloud, Activity, CheckCircle, Star, Quote, Play, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const MobileApp = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Air Translation",
      description: "Instantly decode odor patterns into actionable insights—know what's in the air before it becomes a problem"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI-powered forecasts detect spoilage, pollution, and hazards before they escalate"
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description: "Context-aware notifications that adapt to your environment—no noise, just critical updates"
    },
    {
      icon: MapPin,
      title: "Multi-Location Intelligence",
      description: "Monitor air quality across homes, facilities, or warehouses from a single dashboard"
    },
    {
      icon: Settings,
      title: "Remote Device Management",
      description: "Configure sensitivity, thresholds, and responses for all your E-Näsa devices on the go"
    },
    {
      icon: Cloud,
      title: "Secure Cloud Sync",
      description: "Encrypted data storage with seamless access across iOS, Android, and web platforms"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption protects your sensitive air quality data and operational insights"
    },
    {
      icon: Zap,
      title: "Automated Actions",
      description: "Trigger ventilation systems, send team alerts, or log incidents automatically based on air quality changes"
    }
  ];

  const screenshots = [
    {
      title: "Dashboard",
      description: "Real-time air quality overview"
    },
    {
      title: "Analytics",
      description: "Detailed historical data"
    },
    {
      title: "Devices",
      description: "Manage all your E-Nāsa devices"
    },
    {
      title: "Alerts",
      description: "Smart notifications"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Healthcare Professional",
      location: "San Francisco, CA",
      rating: 5,
      review: "The E-Nāsa mobile app has transformed how I monitor air quality at home. The real-time alerts helped me identify pollution spikes and protect my family's health. Absolutely essential!",
      platform: "iOS"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      location: "New York, NY",
      rating: 5,
      review: "Managing multiple E-Nāsa devices across our restaurant locations has never been easier. The app's dashboard gives me instant visibility into air quality metrics. Game changer for our business!",
      platform: "Android"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent & Teacher",
      location: "Austin, TX",
      rating: 5,
      review: "As a parent with asthmatic children, this app gives me peace of mind. I can check air quality from work and adjust settings remotely. The interface is beautiful and so easy to use!",
      platform: "iOS"
    },
    {
      name: "David Park",
      role: "Facility Manager",
      location: "Seattle, WA",
      rating: 4,
      review: "Excellent app for monitoring our office building. The historical data and analytics help us optimize HVAC systems. Would love to see more customization options in future updates.",
      platform: "Android"
    },
    {
      name: "Jessica Thompson",
      role: "Yoga Studio Owner",
      location: "Los Angeles, CA",
      rating: 5,
      review: "Our clients appreciate the clean air in our studio, and the E-Nāsa app helps us maintain perfect conditions. The smart alerts ensure we're always providing the best environment.",
      platform: "iOS"
    },
    {
      name: "Robert Kim",
      role: "Home Automation Enthusiast",
      location: "Chicago, IL",
      rating: 5,
      review: "The app integrates seamlessly with my smart home setup. Love the detailed analytics and the ability to control everything from my phone. Best air quality monitoring solution out there!",
      platform: "Android"
    }
  ];


  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Modern Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Badge className="mb-2 text-sm animate-fade-in" variant="secondary">
                  <Smartphone className="h-3 w-3 mr-1 animate-pulse" />
                  Now Available
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent inline-block">
                    The Air Has a Story.
                  </span>
                  <br />
                  <span className="text-foreground inline-flex items-center gap-3">
                    We Translated It.
                    <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-primary animate-pulse" />
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Control your E-Näsa devices from anywhere. Real-time odor intelligence, predictive alerts, and automated responses—all in the palm of your hand.
                </p>

                {/* Prominent Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Button size="lg" className="gap-3 text-base px-8 py-7 bg-black hover:bg-black/90 text-white group shadow-lg">
                    <Apple className="h-7 w-7 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs opacity-90">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="gap-3 text-base px-8 py-7 border-2 group shadow-lg">
                    <Play className="h-7 w-7 group-hover:scale-110 transition-transform fill-current" />
                    <div className="text-left">
                      <div className="text-xs opacity-90">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Right - Phone Mockup */}
              <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative w-80 h-[600px]">
                  {/* Floating gradient orbs */}
                  <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
                  <div className="absolute bottom-20 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
                  
                  {/* Phone */}
                  <div className="relative z-10 w-full h-full bg-foreground rounded-[3rem] shadow-2xl p-3 hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden border-4 border-foreground/10">
                      {/* Status Bar */}
                      <div className="h-12 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-between px-8">
                        <span className="text-xs font-medium">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-3 border border-foreground/40 rounded-sm" />
                        </div>
                      </div>
                      
                      {/* App Content Preview */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold">Dashboard</h3>
                          <Bell className="h-5 w-5 text-primary" />
                        </div>
                        
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl p-6 space-y-3">
                          <Activity className="h-8 w-8 text-primary" />
                          <div className="text-3xl font-bold">Good</div>
                          <div className="text-sm text-muted-foreground">Air Quality Index: 42</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <div className="text-xs text-muted-foreground">VOCs</div>
                            <div className="text-sm font-semibold">Low</div>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <div className="text-xs text-muted-foreground">PM2.5</div>
                            <div className="text-sm font-semibold">12 µg/m³</div>
                          </div>
                        </div>

                        <div className="bg-muted/30 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium">24h Trend</span>
                            <MapPin className="h-4 w-4 text-primary" />
                          </div>
                          <div className="h-16 flex items-end gap-1">
                            {[40, 55, 45, 60, 42, 38, 52, 48].map((h, i) => (
                              <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Carousel Section */}
        <section className="container mx-auto px-4 py-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="text-center mb-12 relative z-10">
            <Badge variant="outline" className="mb-4 animate-fade-in">
              <Sparkles className="h-3 w-3 mr-1" />
              Screenshots
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Beautiful & Intuitive Design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Experience seamless odor intelligence with a thoughtfully designed interface that turns complex air data into clear, actionable insights
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 border-border overflow-hidden group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 via-primary/10 to-background relative overflow-hidden">
                          {/* Phone Frame */}
                          <div className="absolute inset-4 bg-background rounded-[2.5rem] shadow-2xl border-2 border-border/50">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-2xl z-10" />
                            
                            {/* Screen Content */}
                            <div className="p-6 pt-10 h-full flex flex-col overflow-hidden">
                              <div className="flex-1 space-y-3">
                                <div className="h-3 bg-primary/20 rounded w-3/4 animate-pulse" />
                                <div className="h-20 bg-gradient-to-br from-primary/30 to-primary/20 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="h-16 bg-primary/20 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                                  <div className="h-16 bg-primary/20 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
                                </div>
                                <div className="h-24 bg-primary/10 rounded animate-pulse" style={{ animationDelay: '0.8s' }} />
                              </div>
                            </div>
                          </div>
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CardContent>
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{screenshot.title}</CardTitle>
                        <CardDescription>{screenshot.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>

        {/* Features Grid with Icons */}
        <section ref={featuresRef} className="container mx-auto px-4 py-6 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          
          <div className="text-center mb-16 relative z-10">
            <Badge variant="outline" className="mb-4 animate-fade-in">
              <Zap className="h-3 w-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Everything you need to take complete control of your indoor air quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                    <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>


        {/* CTA Section */}
        <section className="container mx-auto px-4 py-6">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden relative group hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-grid-white/5" />
            {/* Animated background orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            
            <CardContent className="relative z-10 p-12 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Breathe Easier?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
                Join thousands of users who trust E-Nāsa to monitor and improve their indoor air quality. Download now and start your journey to healthier air.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-3 text-base px-8 py-7 bg-black hover:bg-black/90 text-white group shadow-lg">
                  <Apple className="h-7 w-7 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
                
                <Button size="lg" variant="outline" className="gap-3 text-base px-8 py-7 border-2 group shadow-lg">
                  <Play className="h-7 w-7 group-hover:scale-110 transition-transform fill-current" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Requirements */}
        <section className="container mx-auto px-4 pb-10">
        <div className="pb-6">
          <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>System Requirements</CardTitle>
              </div>
              <CardDescription>Make sure your device is compatible</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Apple className="h-5 w-5 text-primary" />
                    iOS Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      iOS 14.0 or later
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Compatible with iPhone, iPad, and iPod touch
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Requires 50 MB of available storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Bluetooth and WiFi required for device pairing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Android Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Android 8.0 (Oreo) or later
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Compatible with most Android devices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Requires 50 MB of available storage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Bluetooth and WiFi required for device pairing
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Section */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <Badge variant="secondary" className="animate-pulse">
                <Sparkles className="h-3 w-3 mr-1" />
                Coming Soon
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Launching Soon
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                The E-Näsa mobile app is in final development. Be among the first to experience the future of odor intelligence on iOS and Android.
              </p>

              <div className="flex justify-center pt-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-2 justify-center">
                    <Award className="h-6 w-6 md:h-8 md:w-8" />
                    Q2 2026
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Expected Launch</div>
                </div>
              </div>

              <div className="pt-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Join Waitlist for Early Access
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Get notified when the app launches and receive exclusive beta access
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileApp;
