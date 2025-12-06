import { Beef, Factory, Leaf, Stethoscope, Shield, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const solutions = [
  {
    icon: Beef,
    title: "Food & Beverage",
    description: "Air signals often reveal freshness and quality long before visual signs appear. Detect early spoilage VOC patterns in meat & fish, reduce recalls and shrink, make smarter shelf-life decisions.",
    color: "from-orange-400 via-orange-500 to-red-500",
    iconColor: "text-orange-100",
    features: ["Early spoilage detection", "Quality assurance", "Shelf-life optimization", "Recall prevention"],
  },
  {
    icon: Factory,
    title: "Industrial Safety",
    description: "Industrial environments often involve gases, chemicals, and changing air conditions. Flag VOC/flammable gas leaks and abnormal events for earlier warnings, safer operations, and better compliance.",
    color: "from-slate-400 via-slate-500 to-slate-600",
    iconColor: "text-slate-100",
    features: ["Gas leak detection", "Compliance monitoring", "Safety alerts", "Hazard prevention"],
  },
  {
    icon: Leaf,
    title: "Environmental",
    description: "Air quality can shift based on weather, pollutants, biological changes, or waste activity. Monitor odor intensity near landfills/WWTPs with auditable evidence for proactive mitigation.",
    color: "from-green-400 via-green-500 to-emerald-500",
    iconColor: "text-green-100",
    features: ["Odor monitoring", "Pollution tracking", "Compliance reporting", "Environmental insights"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "In healthcare settings, air quality affects patients, staff, and sensitive environments. Analyze breath/surface VOC signatures as non-invasive indicators to support research and triage.",
    color: "from-blue-400 via-blue-500 to-cyan-500",
    iconColor: "text-blue-100",
    features: ["Breath analysis", "Air quality monitoring", "Non-invasive diagnostics", "Research support"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Air can carry signals linked to risks such as chemicals, illicit substances, cannabis-related odors, and more. Detect chemical/explosive signatures at checkpoints in real time for immediate, targeted response.",
    color: "from-purple-400 via-purple-500 to-indigo-500",
    iconColor: "text-purple-100",
    features: ["Threat detection", "Real-time alerts", "Checkpoint screening", "Substance identification"],
  },
];

const Overview = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Solutions <span className="text-gradient">Overview</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              E-Nāsa's advanced VOC sensing technology serves multiple industries with precision air quality monitoring and analysis.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">AI</div>
              <div className="text-muted-foreground">Powered Insights</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title} 
                className="p-8 hover-lift border-2 border-border hover:border-primary/50 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <solution.icon className={`h-10 w-10 ${solution.iconColor}`} strokeWidth={2.5} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {solution.description}
                    </p>
                    <a
                      href={`/solutions/${solution.title
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")}`}
                    >
                      <Button className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    {solution.features.map((feature) => (
                      <div 
                        key={feature}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
