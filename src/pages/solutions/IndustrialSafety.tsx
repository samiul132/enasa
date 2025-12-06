import { Factory, CheckCircle2, AlertTriangle, Shield, Bell, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import enasaIndustrialImage from "@/assets/enasa-industrial.jpg";

const IndustrialSafety = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "Chemical Manufacturing Facility",
      challenge: "Delayed detection of hazardous gas leaks creating safety risks and compliance issues",
      solution: "Network of E-Nāsa sensors deployed across production floor with real-time alerting",
      results: [
        "100% leak detection within 15 seconds",
        "Zero workplace incidents in 2 years",
        "95% reduction in false alarms",
        "Full OSHA compliance achieved"
      ],
      industry: "Chemical Manufacturing"
    },
    {
      title: "Oil & Gas Refinery",
      challenge: "Need for continuous monitoring of flammable gas concentrations in hazardous zones",
      solution: "Explosion-proof E-Nāsa units integrated with existing safety systems",
      results: [
        "24/7 multi-point monitoring",
        "Automated emergency protocols",
        "50% faster incident response",
        "Enhanced worker confidence"
      ],
      industry: "Oil & Gas"
    },
    {
      title: "Industrial Paint Facility",
      challenge: "VOC exposure compliance and air quality management in production areas",
      solution: "Real-time VOC monitoring with automated ventilation control integration",
      results: [
        "Maintained OSHA VOC limits",
        "40% energy savings on HVAC",
        "Improved worker health metrics",
        "Reduced insurance premiums"
      ],
      industry: "Industrial Coating"
    }
  ];

  const technicalSpecs = [
    {
      category: "Gas Detection",
      specs: [
        { name: "Detectable Gases", value: "H2S, SO2, NH3, CO, Methane, Propane, Benzene" },
        { name: "Detection Range", value: "0-100% LEL for flammables" },
        { name: "Response Time", value: "< 10 seconds for critical alerts" },
        { name: "Accuracy", value: "±2% of reading" }
      ]
    },
    {
      category: "Environmental",
      specs: [
        { name: "Operating Temp", value: "-40°C to 70°C" },
        { name: "Humidity", value: "0% - 99% RH" },
        { name: "Ingress Protection", value: "IP67 rated enclosure" }
      ]
    },
    {
      category: "Safety Features",
      specs: [
        { name: "Alert Types", value: "Visual, SMS, Email" },
        { name: "Redundancy", value: "Multi sensor architecture" },
        { name: "Self-Diagnostics", value: "Continuous health monitoring" }
      ]
    }
  ];

  const features = [
    {
      icon: AlertTriangle,
      title: "Early Warning",
      description: "Detect hazardous conditions before they become critical safety incidents"
    },
    {
      icon: Shield,
      title: "Worker Protection",
      description: "Ensure safe working environment with continuous air quality monitoring"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Multi-channel notifications for immediate response to dangerous conditions"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Ready",
      description: "Meet OSHA, EPA, and industry-specific safety regulations with confidence"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background via-slate-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content on Left */}
            <div className="animate-slide-up">
              <Badge className="mb-6 bg-slate-500/10 text-slate-600 border-slate-500/20">
                Industrial Safety Solutions
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 flex items-center justify-center shadow-lg shadow-slate-500/50">
                  <Factory className="h-10 w-10 text-slate-100" strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Industrial Safety <span className="text-gradient">Solutions</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8" style={{ animationDelay: "100ms" }}>
                Protect workers and assets with real-time gas leak detection and hazardous air quality monitoring.
              </p>
              <Button
              variant="default"
              size="sm"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/", { replace: false });
                  // Wait a moment for navigation to complete
                  setTimeout(() => {
                    const section = document.querySelector("#cta");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 500);
                } else {
                  const section = document.querySelector("#cta");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="whitespace-nowrap hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
            >
              Request a Demo
            </Button>
            </div>

            {/* Image on Right */}
            <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img 
                  src={enasaIndustrialImage} 
                  alt="E-Nāsa environmental monitoring device for industrial safety applications" 
                  className="w-full h-[540px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrial-Grade Protection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for the most demanding industrial environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover-lift text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Case Studies */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Safety Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How industrial leaders use E-Nāsa to create safer workplaces
            </p>
          </div>
          <div className="space-y-8 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-8 hover-lift border-2 border-border hover:border-slate-500/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <Badge variant="outline" className="border-slate-500/50 text-slate-600">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Challenge</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-slate-600 mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built to withstand the harshest industrial conditions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section) => (
              <Card key={section.category} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-slate-600">{section.category}</h3>
                <div className="space-y-4">
                  {section.specs.map((spec) => (
                    <div key={spec.name} className="border-b border-border pb-3 last:border-0">
                      <div className="text-sm text-muted-foreground mb-1">{spec.name}</div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-500/10 to-slate-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Workforce Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust E-Nāsa for comprehensive industrial safety monitoring.
          </p>{/*
          <Button size="lg" className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700">
            Schedule Your Safety Assessment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>*/}
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              if (window.location.pathname !== "/") {
                navigate("/", { replace: false });
                // Wait a moment for navigation to complete
                setTimeout(() => {
                  const section = document.querySelector("#cta");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }, 500);
              } else {
                const section = document.querySelector("#cta");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}

            className="whitespace-nowrap hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
          >
            Schedule Your Safety Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialSafety;
