import { Shield, DollarSign, Clock, LineChart, Bell, CheckCircle, TrendingUp, Users, Award, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useCountUp } from "@/hooks/use-count-up";
import { useState, useEffect } from "react";

const Benefits = () => {
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsInView } = useIntersectionObserver();
  const [notifications, setNotifications] = useState<Array<{id: number, text: string, time: string}>>([]);
  
  const accuracy = useCountUp({ end: 99.9, duration: 2000, isInView: statsInView, decimals: 1 });
  const costReduction = useCountUp({ end: 50, duration: 2000, isInView: statsInView });
  const uptime = useCountUp({ end: 24, duration: 2000, isInView: statsInView });

  // Simulated real-time notifications for demonstration
  useEffect(() => {
    if (!cardsInView) return;
    
    const notificationMessages = [
      "VOC levels normal in Zone A",
      "Temperature spike detected in Storage",
      "Air quality improving in Production",
      "Chemical signature detected",
      "System check complete - All clear"
    ];

    let notificationId = 0;
    const showNotification = () => {
      const message = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
      const time = new Date().toLocaleTimeString();
      
      setNotifications(prev => [
        { id: notificationId++, text: message, time },
        ...prev.slice(0, 2)
      ]);
    };

    // Show initial notification
    showNotification();

    // Show notifications every 4 seconds
    const interval = setInterval(showNotification, 4000);

    return () => clearInterval(interval);
  }, [cardsInView]);

  const stats = [
    {
      icon: Award,
      value: `${accuracy.count}%`,
      label: "Detection Accuracy",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: `${costReduction.count}%`,
      label: "Cost Reduction",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: `${uptime.count}/7`,
      label: "Continuous Monitoring",
      color: "text-blue-500"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Detect hazardous gases and contaminants before they become threats to health and safety."
    },
    {
      icon: DollarSign,
      title: "Reduce Waste & Costs",
      description: "Prevent spoilage and minimize losses with early detection of quality degradation."
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Get instant alerts and continuous monitoring 24/7 without human intervention."
    },
    {
      icon: LineChart,
      title: "Data-Driven Insights",
      description: "Make informed decisions with detailed analytics and historical trend data."
    },
    {
      icon: Bell,
      title: "Proactive Alerts",
      description: "Receive immediate notifications when thresholds are exceeded, preventing incidents."
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Meet industry standards and maintain audit trails with automated documentation."
    }
  ];

  return (
    <section className="py-6 md:py-4 bg-gradient-to-b from-background to-muted/30 snap-start relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">E-Näsa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-3">
            One Platform. Many Real-World Uses
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your operations with intelligent air quality monitoring that delivers measurable results
          </p>
        </div>

        {/* Statistics Section with Live Alerts */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-gradient">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
          
          {/* Live Alert Notifications Card */}
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-background border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Bell className="h-5 w-5 text-primary animate-pulse" />
                </div>
                <span className="ml-auto px-2 py-0.5 bg-green-500/10 text-green-500 text-xs rounded-full border border-green-500/20">
                  ● Active
                </span>
              </div>
              <h3 className="font-bold text-sm mb-3 text-center">Live Alert Notifications</h3>
              <div className="space-y-2 flex-1 overflow-hidden">
                {notifications.slice(0, 2).map((notif, index) => (
                  <div
                    key={notif.id}
                    className="flex items-start gap-2 p-2 bg-card/50 rounded-md border border-border/50 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <AlertCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground line-clamp-2">{notif.text}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{notif.time}</p>
                    </div>
                  </div>
                ))}
                {notifications.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    Waiting for sensor data...
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group p-6 hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-primary/30 hover:-translate-y-2"
                style={{
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
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

export default Benefits;
