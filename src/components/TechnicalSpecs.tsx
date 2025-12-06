import { Gauge, Timer, Target, Zap, Thermometer, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecs = () => {
  const specifications = [
    {
      category: "Detection Range",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      specs: [
        { label: "VOCs", value: "0.1 - 1000 ppm", unit: "Parts per million" },
        { label: "CO₂", value: "400 - 10,000 ppm", unit: "Carbon dioxide" },
        { label: "Humidity", value: "0 - 100% RH", unit: "Relative humidity" },
        { label: "Temperature", value: "-40°C to 85°C", unit: "Operating range" }
      ]
    },
    {
      category: "Response Time",
      icon: Timer,
      color: "from-purple-500 to-pink-500",
      specs: [
        { label: "Initial Detection", value: "< 1 second", unit: "From exposure" },
        { label: "Full Analysis", value: "< 5 seconds", unit: "Complete profile" },
        { label: "Recovery Time", value: "< 30 seconds", unit: "Between readings" },
        { label: "Sampling Rate", value: "1 Hz", unit: "Continuous monitoring" }
      ]
    },
    {
      category: "Detection Limits",
      icon: Gauge,
      color: "from-green-500 to-emerald-500",
      specs: [
        { label: "Sensitivity", value: "0.01 ppm", unit: "Minimum detection" },
        { label: "Accuracy", value: "±2%", unit: "Measurement precision" },
        { label: "Resolution", value: "12-bit", unit: "ADC resolution" },
        { label: "Selectivity", value: "> 95%", unit: "Target specificity" }
      ]
    },
    {
      category: "Performance",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      specs: [
        { label: "Power Usage", value: "< 5W", unit: "Average consumption" },
        { label: "Data Rate", value: "100 samples/sec", unit: "Processing speed" },
        { label: "Calibration", value: "Auto", unit: "Self-calibrating" },
        { label: "Lifespan", value: "> 5 years", unit: "Sensor lifetime" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Precision-engineered sensors delivering laboratory-grade accuracy in real-world conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specifications.map((category) => (
            <Card 
              key={category.category} 
              className="border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}>
                  <category.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.specs.map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-base font-bold text-foreground">{spec.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/70">{spec.unit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Thermometer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Certified Performance</h3>
                    <p className="text-sm text-muted-foreground">ISO 9001 & CE compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Environmental Rating</h3>
                    <p className="text-sm text-muted-foreground">IP65 dust & water resistant</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
