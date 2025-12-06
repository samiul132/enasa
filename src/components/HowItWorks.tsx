import { Zap, Brain, BarChart3, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Zap,
      title: "Advanced Gas Sensors",
      description: "E-Näsa captures molecular signatures from the air using multi-sensor arrays, detecting gases, VOCs, and odor patterns invisible to the human nose.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Classification",
      description: "Machine learning algorithms analyze sensor data in real-time, identifying specific compounds and their concentrations with precision.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Instant Insights",
      description: "Data is processed and displayed on your connected dashboard, enabling early detection and faster decision-making.",
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-4 md:py-5 bg-gradient-to-b from-background to-muted/20 snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            E-Näsa combines cutting-edge sensor technology with artificial intelligence to transform air analysis into actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg border-4 border-background z-10">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>

              {/* Arrow connector - hidden on mobile, shown on tablet+ */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal connector for desktop */}
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary/30" />
                    <ArrowRight className="h-6 w-6 text-primary/50 absolute top-1/2 right-0 transform -translate-y-1/2" />
                  </div>
                  
                  {/* Vertical connector for mobile */}
                  <div className="md:hidden flex flex-col items-center absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-0.5 h-8 border-l-2 border-dashed border-primary/40" />
                    <ArrowRight className="h-6 w-6 text-primary/50 rotate-90" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Real-time processing in milliseconds
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
