import { Beef, Factory, Leaf, Stethoscope, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import UseCaseNetwork from "./UseCaseNetwork";
import { useState } from "react";

const useCases = [
  {
    icon: Beef,
    title: "Food & Beverage",
    description: "Air signals often reveal freshness and quality long before visual signs appear. Detect early spoilage VOC patterns in meat & fish, reduce recalls and shrink, make smarter shelf-life decisions.",
    color: "from-orange-400 via-orange-500 to-red-500",
    iconColor: "text-orange-100",
    glowColor: "shadow-orange-500/50",
  },
  {
    icon: Factory,
    title: "Industrial Safety",
    description: "Industrial environments often involve gases, chemicals, and changing air conditions. Flag VOC/flammable gas leaks and abnormal events for earlier warnings, safer operations, and better compliance.",
    color: "from-slate-400 via-slate-500 to-slate-600",
    iconColor: "text-slate-100",
    glowColor: "shadow-slate-500/50",
  },
  {
    icon: Leaf,
    title: "Environmental",
    description: "Air quality can shift based on weather, pollutants, biological changes, or waste activity. Monitor odor intensity near landfills/WWTPs with auditable evidence for proactive mitigation.",
    color: "from-green-400 via-green-500 to-emerald-500",
    iconColor: "text-green-100",
    glowColor: "shadow-green-500/50",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "In healthcare settings, air quality affects patients, staff, and sensitive environments. Analyze breath/surface VOC signatures as non-invasive indicators to support research and triage.",
    color: "from-blue-400 via-blue-500 to-cyan-500",
    iconColor: "text-blue-100",
    glowColor: "shadow-blue-500/50",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Air can carry signals linked to risks such as chemicals, illicit substances, cannabis-related odors, and more. Detect chemical/explosive signatures at checkpoints in real time for immediate, targeted response.",
    color: "from-purple-400 via-purple-500 to-indigo-500",
    iconColor: "text-purple-100",
    glowColor: "shadow-purple-500/50",
  },
];


const UseCases = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getParticlePattern = (title: string) => {
    switch (title) {
      case "Food & Beverage":
        return Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-400/30 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ));
      case "Industrial Safety":
        return (
          <>
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute border-2 border-slate-400/20 animate-spin-slow"
                style={{
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                }}
              />
            ))}
          </>
        );
      case "Environmental":
        return Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-400/30 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-Math.random() * 50}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          >
            🍃
          </div>
        ));
      case "Healthcare":
        return (
          <>
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-blue-400/30 animate-ping"
                style={{
                  width: `${i * 30 + 30}px`,
                  height: `${i * 30 + 30}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s',
                }}
              />
            ))}
          </>
        );
      case "Security":
        return (
          <>
            <div className="absolute inset-0 bg-purple-500/5 animate-pulse" style={{ animationDuration: '2s' }} />
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="absolute border-2 border-purple-400/20 animate-scan"
                style={{
                  width: '100%',
                  height: '2px',
                  top: `${i * 25}%`,
                  left: 0,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="use-cases" className="py-4 md:py-6 bg-muted/30 snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Platform. <span className="text-gradient">Many Real-World Uses.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            E-Nāsa translates complex VOC signals into decisions across multiple sectors.
          </p>
        </div>

        {/* Interactive Network Visualization */}
        <div className="mb-6">
          <UseCaseNetwork />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className="p-6 hover-lift card-glow border-2 border-border hover:border-primary/50 transition-all duration-500 group hover:scale-[1.03] relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(useCase.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                {hoveredCard === useCase.title && getParticlePattern(useCase.title)}
              </div>

              {/* Card content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-2xl ${useCase.glowColor} transition-all duration-300 animate-pulse`} style={{ animationDuration: '3s' }}>
                  <useCase.icon 
                    className={`h-8 w-8 ${useCase.iconColor} drop-shadow-lg`} 
                    strokeWidth={2.5}
                    style={{
                      transform: 'scale(0.8)' 
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
