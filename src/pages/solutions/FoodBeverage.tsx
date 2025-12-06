import { Beef, CheckCircle2, TrendingDown, Shield, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import enasaFoodImage from "@/assets/enasa-food.jpg";

const FoodBeverage = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "Major Seafood Distributor",
      challenge: "High spoilage rates and costly recalls affecting profitability and reputation",
      solution: "Deployed E-Nāsa sensors across cold storage facilities to monitor freshness in real-time",
      results: [
        "42% reduction in spoilage waste",
        "Zero recalls in 18 months",
        "$2.3M annual savings",
        "Extended shelf-life accuracy by 35%"
      ],
      industry: "Seafood Distribution"
    },
    {
      title: "Premium Meat Processing Plant",
      challenge: "Inconsistent quality control and difficulty detecting early contamination",
      solution: "Integrated VOC monitoring at critical control points throughout processing line",
      results: [
        "98% early detection rate",
        "60% faster quality decisions",
        "Improved brand reputation",
        "Enhanced compliance tracking"
      ],
      industry: "Meat Processing"
    },
    {
      title: "Dairy Products Manufacturer",
      challenge: "Unpredictable product degradation affecting distribution planning",
      solution: "Real-time VOC analysis for freshness monitoring and shelf-life prediction",
      results: [
        "45% better shelf-life prediction",
        "30% reduction in product returns",
        "Optimized distribution routes",
        "Enhanced customer satisfaction"
      ],
      industry: "Dairy Manufacturing"
    }
  ];

  const technicalSpecs = [
    {
      category: "Detection Capabilities",
      specs: [
        { name: "VOC Compounds", value: "Amines, Sulfides, Aldehydes, Ketones, Alcohols" },
        { name: "Detection Range", value: "ppb to ppm levels" },
        { name: "Response Time", value: "< 30 seconds" },
        { name: "Accuracy", value: "±5% at reference conditions" }
      ]
    },
    {
      category: "Performance",
      specs: [
        { name: "Operating Temperature", value: "-10°C to 50°C" },
        { name: "Humidity Range", value: "10% - 95% RH non-condensing" },
        { name: "Calibration Interval", value: "6 months typical" },
        { name: "Data Logging", value: "Continuous with cloud sync" }
      ]
    },
    {
      category: "Integration",
      specs: [
        { name: "Connectivity", value: "Bluetooth" },
        { name: "Power Supply", value: "USB C" },
        { name: "API Access", value: "RESTful API with real-time webhooks" },
      ]
    }
  ];

  const features = [
    {
      icon: TrendingDown,
      title: "Reduce Waste",
      description: "Detect spoilage early to minimize losses and improve inventory management"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Ensure product safety with continuous monitoring and automated alerts"
    },
    {
      icon: Clock,
      title: "Shelf-Life Optimization",
      description: "Accurately predict remaining shelf-life for better distribution planning"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Ready",
      description: "Automated documentation and audit trails for regulatory requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Updated with image on right */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background via-orange-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content on Left */}
            <div className="animate-slide-up">
              <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20">
                Food & Beverage Industry
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <Beef className="h-10 w-10 text-orange-100" strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Food & Beverage <span className="text-gradient">Solutions</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8" style={{ animationDelay: "100ms" }}>
                Detect early spoilage, reduce waste, and ensure quality with AI-powered VOC monitoring for the food industry.
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
                  src={enasaFoodImage} 
                  alt="E-Nāsa environmental monitoring device for food industry applications" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose E-Nāsa?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced VOC sensing technology designed specifically for food safety and quality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover-lift text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-4 mx-auto">
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
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world results from food industry leaders using E-Nāsa technology
            </p>
          </div>
          <div className="space-y-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="p-8 hover-lift border-2 border-border hover:border-orange-500/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <Badge variant="outline" className="border-orange-500/50 text-orange-600">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Challenge</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-orange-600 mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
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
              Enterprise-grade hardware designed for demanding food industry environments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section) => (
              <Card key={section.category} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-orange-600">{section.category}</h3>
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
      <section className="py-12 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Food Safety?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading food and beverage companies using E-Nāsa to reduce waste and ensure quality.
          </p>{/*
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Schedule Your Demo <ArrowRight className="ml-2 h-5 w-5" />
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
            Schedule Your Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodBeverage;
