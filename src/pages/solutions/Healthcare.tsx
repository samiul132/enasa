import { Stethoscope, CheckCircle2, Activity, Users, Microscope, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import enasaHealthcareImage from "@/assets/enasa-healthcare-new1.jpg";

const Healthcare = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      title: "University Medical Research Center",
      challenge: "Need for non-invasive biomarker detection in breath samples for disease research",
      solution: "E-Nāsa breath analysis system integrated with clinical research protocols",
      results: [
        "Identified 12 novel VOC biomarkers",
        "95% sensitivity in pilot study",
        "Non-invasive patient experience",
        "Published in peer-reviewed journals"
      ],
      industry: "Medical Research"
    },
    {
      title: "Hospital Critical Care Unit",
      challenge: "Monitoring air quality in sensitive patient environments and detecting infections early",
      solution: "Real-time air quality monitoring with pathogen-associated VOC detection",
      results: [
        "Early infection warning system",
        "Improved patient outcomes",
        "Reduced hospital-acquired infections",
        "Enhanced infection control protocols"
      ],
      industry: "Critical Care"
    },
    {
      title: "Diagnostic Laboratory",
      challenge: "Supporting disease screening with rapid, non-invasive breath test alternatives",
      solution: "Breath VOC analysis platform for metabolic and infectious disease markers",
      results: [
        "15-minute test turnaround",
        "High correlation with traditional tests",
        "Patient-friendly screening",
        "Cost-effective at scale"
      ],
      industry: "Clinical Diagnostics"
    }
  ];

  const technicalSpecs = [
    {
      category: "Clinical Applications",
      specs: [
        { name: "Biomarkers", value: "Metabolic, Infectious, Oncological indicators" },
        { name: "Sample Type", value: "Breath, Headspace, Ambient air" },
        { name: "Sensitivity", value: "ppb-level detection" },
        { name: "Sample Time", value: "< 5 minutes per analysis" }
      ]
    },
    {
      category: "Medical Standards",
      specs: [
        { name: "Certifications", value: "ISO 13485 compliant manufacturing" },
        { name: "Data Privacy", value: "HIPAA-compliant data handling" },
        { name: "Sterilization", value: "Compatible with standard protocols" },
        { name: "Validation", value: "Clinical trial ready" }
      ]
    },
    {
      category: "Integration",
      specs: [
        { name: "EMR/EHR", value: "HL7 FHIR compatible" },
        { name: "Lab Systems", value: "LIS integration available" },
        { name: "Data Export", value: "Research-grade CSV, JSON formats" },
        { name: "Analytics", value: "Machine learning ready datasets" }
      ]
    }
  ];

  const features = [
    {
      icon: Activity,
      title: "Non-Invasive Testing",
      description: "Breath and air analysis without needles, reducing patient discomfort and risk"
    },
    {
      icon: Microscope,
      title: "Research Support",
      description: "High-precision VOC analysis for biomarker discovery and validation studies"
    },
    {
      icon: Users,
      title: "Patient Monitoring",
      description: "Continuous air quality monitoring in sensitive healthcare environments"
    },
    {
      icon: CheckCircle2,
      title: "Clinical Compliance",
      description: "Medical-grade equipment meeting healthcare regulatory requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background via-blue-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Content on Left */}
            <div className="animate-slide-up">
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 border-blue-500/20">
                Healthcare & Medical Research
              </Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Stethoscope className="h-10 w-10 text-blue-100" strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Healthcare <span className="text-gradient">Solutions</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8" style={{ animationDelay: "100ms" }}>
                Advanced VOC analysis for non-invasive diagnostics, patient monitoring, and medical research.
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
                  src={enasaHealthcareImage} 
                  alt="E-Nāsa healthcare monitoring device for medical diagnostics and research" 
                  className="w-full h-full object-contain"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical-Grade VOC Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Supporting healthcare innovation with precision air quality technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover-lift text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Clinical Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How healthcare institutions are advancing patient care with E-Nāsa
            </p>
          </div>
          <div className="space-y-8 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.title} className="p-8 hover-lift border-2 border-border hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <Badge variant="outline" className="border-blue-500/50 text-blue-600">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Challenge</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
              Clinical-grade technology designed for healthcare environments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section) => (
              <Card key={section.category} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-blue-600">{section.category}</h3>
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
      <section className="py-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Advance Healthcare Innovation</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with E-Nāsa for cutting-edge VOC analysis in medical research and patient care.
          </p>{/*
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
            Discuss Your Research Needs <ArrowRight className="ml-2 h-5 w-5" />
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
            Discuss Your Research Needs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;
