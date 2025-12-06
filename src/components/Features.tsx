import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Bell, BarChart3, Zap, Cloud, Shield } from "lucide-react";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const features = [
  {
    icon: Monitor,
    title: "Connected Dashboard",
    description: "Access real-time air quality data from anywhere. Our intuitive dashboard provides instant visibility into all your sensors, with customizable views and historical data tracking.",
    highlights: ["Real-time monitoring", "Multi-device support", "Custom alerts"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Early Detection",
    description: "AI-powered algorithms detect anomalies before they become problems. Get instant alerts for air quality changes, potential hazards, or unusual patterns.",
    highlights: ["Predictive analysis", "Instant notifications", "Pattern recognition"],
    color: "from-primary to-secondary",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Transform complex air quality data into clear, actionable insights. Interactive charts, trends, and reports help you make informed decisions quickly.",
    highlights: ["Interactive charts", "Trend analysis", "Export reports"],
    color: "from-green-500 to-emerald-600",
  },
];

const additionalFeatures = [
  { icon: Zap, title: "Lightning Fast", description: "Real-time processing with minimal latency" },
  { icon: Cloud, title: "Cloud Powered", description: "Secure cloud storage with 99.9% uptime" },
  { icon: Shield, title: "Enterprise Security", description: "End-to-end encryption and compliance" },
];

const Features = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: demoRef, isIntersecting: demoVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="features" className="py-6 md:py-4 bg-background snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="mb-4 mx-auto w-fit" variant="secondary">Enterprise-Grade Platform</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Powerful Features. <span className="text-gradient">Simple Interface.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intelligent real-time detection for complete air quality control
          </p>
        </div>

        {/* Interactive Dashboard Demo */}
        <div 
          ref={demoRef}
          className={`mb-6 transition-all duration-700 delay-200 ${
            demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <Badge className="mb-4 animate-pulse" variant="outline">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-ping absolute"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 relative"></span>
              Live Preview
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">See It In Action</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-time monitoring with analytics, alerts, and reporting
            </p>
          </div>
          <InteractiveDashboard />
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-6">
          {features.map((feature, index) => {
            const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
            return (
            <Card
              key={feature.title}
              ref={ref}
              className={`overflow-hidden hover-lift card-glow border-2 border-border hover:border-primary/50 transition-all duration-700 group hover:scale-[1.03] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`p-6 bg-gradient-to-br ${feature.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <feature.icon className="h-12 w-12 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 relative z-10">{feature.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {additionalFeatures.map((feature, index) => {
            const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
            return (
            <Card
              key={feature.title}
              ref={ref}
              className={`p-6 hover-lift card-glow border-2 border-border hover:border-primary/50 transition-all duration-700 group hover:scale-[1.03] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
