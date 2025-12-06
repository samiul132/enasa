import { Leaf, CheckCircle2, TrendingUp, BarChart3, Wind, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import enasaEnvironmentalImage from "@/assets/enasa-environmental1.jpg";

const Environmental = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "Municipal Landfill Operation",
      challenge: "Odor complaints from nearby residents and lack of objective odor quantification",
      solution: "Perimeter E-Nāsa sensor network with real-time odor intensity mapping",
      results: [
        "85% reduction in odor complaints",
        "Objective audit trail for regulators",
        "Proactive mitigation protocols",
        "Improved community relations"
      ],
      industry: "Waste Management"
    },
    {
      title: "Wastewater Treatment Plant",
      challenge: "Monitoring air quality around treatment processes and meeting environmental permits",
      solution: "Multi-point VOC monitoring integrated with treatment process controls",
      results: [
        "100% permit compliance",
        "Early detection of process upsets",
        "Optimized aeration efficiency",
        "Documented environmental stewardship"
      ],
      industry: "Wastewater Treatment"
    },
    {
      title: "Industrial Park Monitoring",
      challenge: "Need for continuous air quality data to demonstrate environmental responsibility",
      solution: "Site-wide E-Nāsa deployment with public-facing air quality dashboard",
      results: [
        "Real-time transparency for stakeholders",
        "Identified pollution sources",
        "Enhanced ESG reporting",
        "Community trust building"
      ],
      industry: "Industrial Facilities"
    }
  ];

  const technicalSpecs = [
    {
      category: "Environmental Monitoring",
      specs: [
        { name: "Parameters", value: "VOCs, Odor intensity, H2S, NH3, Mercaptans" },
        { name: "Detection Limits", value: "Sub-ppb to ppm range" },
        { name: "Sampling Rate", value: "Continuous, 1-second intervals" },
        { name: "Data Resolution", value: "High-resolution temporal tracking" }
      ]
    },
    {
      category: "Outdoor Deployment",
      specs: [
        { name: "Weather Protection", value: "IP65 outdoor-rated enclosure" },
        { name: "Temperature Range", value: "-30°C to 60°C" },
        { name: "Power Options", value: "Battery backup" },
        { name: "Wind Resistance", value: "Up to 120 mph sustained" }
      ]
    },
    {
      category: "Data & Compliance",
      specs: [
        { name: "Data Storage", value: "Cloud-based with local backup" },
        { name: "Reporting", value: "Automated compliance reports" },
        { name: "API Integration", value: "EPA AQS compatible formats" },
        { name: "Standards", value: "EPA, EU ambient air quality guidelines Can be meet" }
      ]
    }
  ];

  const features = [
    {
      icon: Wind,
      title: "Odor Management",
      description: "Objective measurement and tracking of odor intensity for community relations"
    },
    {
      icon: BarChart3,
      title: "Compliance Tracking",
      description: "Automated documentation and reporting for environmental permits and regulations"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Long-term air quality trends to support environmental improvement initiatives"
    },
    {
      icon: CheckCircle2,
      title: "Public Transparency",
      description: "Real-time air quality data sharing to build community trust and accountability"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Optimized */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background via-green-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Content on Left */}
            <div className="animate-slide-up">
              <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
                Environmental Monitoring
              </Badge>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <Leaf className="h-8 w-8 text-green-100" strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Environmental <span className="text-gradient">Solutions</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6" style={{ animationDelay: "100ms" }}>
                Monitor air quality and odor intensity with precision for environmental compliance and community trust.
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
              <Card className="overflow-hidden border-0 shadow-2xl max-w-md mx-auto lg:mx-0">
                <img 
                  src={enasaEnvironmentalImage} 
                  alt="E-Nāsa environmental monitoring device for outdoor air quality tracking" 
                  className="w-full h-full object-contain"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Optimized */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Comprehensive Environmental Monitoring</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Advanced air quality solutions for sustainable operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="p-4 hover-lift text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-3 mx-auto">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold mb-1 text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Optimized */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Environmental Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Real results from organizations committed to environmental responsibility
            </p>
          </div>
          <div className="space-y-6 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-6 hover-lift border border-border hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Badge variant="outline" className="border-green-500/50 text-green-600 text-xs">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1 text-sm">Challenge</h4>
                    <p className="text-muted-foreground mb-3 text-sm">{study.challenge}</p>
                    <h4 className="font-semibold text-green-600 mb-1 text-sm">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 text-sm">Results</h4>
                    <div className="space-y-1">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-xs">{result}</span>
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

      {/* Technical Specifications - Optimized */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Precision environmental monitoring for all weather conditions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technicalSpecs.map((section) => (
              <Card key={section.category} className="p-4">
                <h3 className="text-lg font-bold mb-4 text-green-600">{section.category}</h3>
                <div className="space-y-3">
                  {section.specs.map((spec) => (
                    <div key={spec.name} className="border-b border-border pb-2 last:border-0">
                      <div className="text-xs text-muted-foreground mb-1">{spec.name}</div>
                      <div className="font-medium text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Optimized */}
      <section className="py-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Build Environmental Trust</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start monitoring air quality with precision and transparency for your community.
          </p>{/*
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Environmental;