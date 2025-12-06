import { Shield, CheckCircle2, Eye, Zap, Radio, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import enasaSecurityImage from "@/assets/enasa-security1.jpg";

const Security = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "International Airport Security",
      challenge: "Need for rapid, non-invasive detection of explosives and hazardous materials at checkpoints",
      solution: "E-Nāsa trace detection units deployed at security screening points",
      results: [
        "99.7% detection accuracy",
        "< 5 second screening time",
        "Zero false negatives in 18 months",
        "Enhanced passenger throughput"
      ],
      industry: "Aviation Security"
    },
    {
      title: "Border Control Facility",
      challenge: "Detecting concealed narcotics and contraband in vehicles and cargo",
      solution: "Vehicle screening lanes equipped with E-Nāsa vapor detection systems",
      results: [
        "3x increase in contraband detection",
        "Non-intrusive screening process",
        "Reduced inspection times by 60%",
        "Improved officer safety"
      ],
      industry: "Customs & Border Protection"
    },
    {
      title: "Critical Infrastructure Protection",
      challenge: "Monitoring for chemical threats and unauthorized substances in secure facilities",
      solution: "Perimeter and HVAC-integrated E-Nāsa sensors for continuous monitoring",
      results: [
        "24/7 threat detection coverage",
        "Early warning system activation",
        "Integration with security protocols",
        "Enhanced facility security posture"
      ],
      industry: "Infrastructure Security"
    }
  ];

  const technicalSpecs = [
    {
      category: "Threat Detection",
      specs: [
        { name: "Target Substances", value: "Explosives, Narcotics, Chemical agents" },
        { name: "Detection Method", value: "Trace vapor and particulate analysis" },
        { name: "Response Time", value: "< 3 seconds for positive alert" },
        { name: "Sensitivity", value: "Picogram-level detection" }
      ]
    },
    {
      category: "Operational",
      specs: [
        { name: "Throughput", value: "Up to 600 subjects/hour" },
        { name: "False Alarm Rate", value: "< 0.5% with proper calibration" },
        { name: "Operating Modes", value: "Continuous, Triggered, Patrol" }
      ]
    },
    {
      category: "Security Features",
      specs: [
        { name: "Data Encryption", value: "Can be meet AES-256" },
        { name: "Audit Trail", value: "Complete chain of custody logging" },
        { name: "Remote Management", value: "Secure encrypted channels" }
      ]
    }
  ];

  const features = [
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Detect trace amounts of explosives, narcotics, and chemical threats in real-time"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Sub-second analysis and immediate alerting for critical security situations"
    },
    {
      icon: Radio,
      title: "Non-Intrusive",
      description: "Screening without physical contact, maintaining privacy and dignity"
    },
    {
      icon: CheckCircle2,
      title: "Mission Ready",
      description: "Certified for use in critical security applications worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background via-purple-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Content on Left */}
            <div className="animate-slide-up">
              <Badge className="mb-6 bg-purple-500/10 text-purple-600 border-purple-500/20">
                Security & Defense
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Shield className="h-10 w-10 text-purple-100" strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Security <span className="text-gradient">Solutions</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8" style={{ animationDelay: "100ms" }}>
                Detect chemical threats, explosives, and contraband with advanced vapor detection technology.
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
                  src={enasaSecurityImage} 
                  alt="E-Nāsa security monitoring device for threat detection and defense applications" 
                  className="w-full h-auto object-contain"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission-Critical Detection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by security agencies worldwide for threat detection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover-lift text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-4 mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Security Performance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Protecting critical infrastructure and public safety worldwide
            </p>
          </div>
          <div className="space-y-8 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-8 hover-lift border-2 border-border hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <Badge variant="outline" className="border-purple-500/50 text-purple-600">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Challenge</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-purple-600 mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
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
              Military-grade technology for the most demanding security applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section) => (
              <Card key={section.category} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-purple-600">{section.category}</h3>
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
      <section className="py-10 bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhance Your Security Posture</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how E-Nāsa provides unmatched threat detection for your security operations.
          </p>{/*
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
            Contact Security Sales <ArrowRight className="ml-2 h-5 w-5" />
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
            Contact Security Sales
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
