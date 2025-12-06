import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Building2, Calculator, CheckCircle2 } from "lucide-react";

const deploymentSizes = [
  {
    id: "basic",
    name: "Basic",
    description: "Small offices & single locations",
    pricePerSensor: 49,
    setupFee: 500,
    features: ["Basic dashboard", "Email alerts", "Monthly reports"],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Medium businesses & multiple sites",
    pricePerSensor: 39,
    setupFee: 1500,
    features: ["Advanced analytics", "SMS + Email alerts", "Weekly reports", "API access"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Large organizations & custom needs",
    pricePerSensor: 29,
    setupFee: 3500,
    features: ["Custom integrations", "24/7 support", "Real-time alerts", "Dedicated account manager", "SLA guarantee"],
  },
];

const PricingCalculator = () => {
  const [sensors, setSensors] = useState(10);
  const [locations, setLocations] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState("professional");

  const selectedDeployment = deploymentSizes.find(d => d.id === selectedPlan) || deploymentSizes[1];
  
  const monthlySensorCost = sensors * selectedDeployment.pricePerSensor;
  const monthlyLocationFee = locations * 99;
  const monthlyTotal = monthlySensorCost + monthlyLocationFee;
  const annualTotal = monthlyTotal * 12;
  const setupFee = selectedDeployment.setupFee;
  const firstYearTotal = annualTotal + setupFee;

  return (
    <section id="pricing" className="py-16 md:py-20 px-4 bg-gradient-to-b from-muted/20 to-background snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Calculate Your Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your E-Näsa deployment and get an instant cost estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {deploymentSizes.map((plan) => (
            <Card
              key={plan.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id
                  ? "border-primary shadow-lg scale-105 bg-primary/5"
                  : "border-border/50 hover:border-primary/50 bg-card/50"
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  {plan.name}
                  {selectedPlan === plan.id && (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ${plan.pricePerSensor}
                  </div>
                  <div className="text-sm text-muted-foreground">per sensor/month</div>
                </div>
                <div className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Number of Sensors</Label>
                  <span className="text-2xl font-bold text-primary">{sensors}</span>
                </div>
                <Slider
                  value={[sensors]}
                  onValueChange={(value) => setSensors(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 sensor</span>
                  <span>100 sensors</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Number of Locations</Label>
                  <span className="text-2xl font-bold text-primary">{locations}</span>
                </div>
                <Slider
                  value={[locations]}
                  onValueChange={(value) => setLocations(value[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 location</span>
                  <span>50 locations</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="text-sm text-muted-foreground mb-4">
                  Selected Plan: <span className="font-semibold text-primary">{selectedDeployment.name}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sensors ({sensors} × ${selectedDeployment.pricePerSensor})</span>
                    <span className="font-medium">${monthlySensorCost.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Locations ({locations} × $99)</span>
                    <span className="font-medium">${monthlyLocationFee.toLocaleString()}/mo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Cost Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Monthly Cost</div>
                  <div className="text-4xl font-bold text-primary">
                    ${monthlyTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">per month</div>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Annual Cost</div>
                  <div className="text-3xl font-bold text-foreground">
                    ${annualTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">per year</div>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">One-time Setup Fee</div>
                  <div className="text-2xl font-bold text-foreground">
                    ${setupFee.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">First Year Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ${firstYearTotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Includes setup fee and 12 months of service
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2 text-foreground">Volume Discount Available</div>
                <p className="text-xs text-muted-foreground">
                  Save up to 20% on deployments over 50 sensors. Contact our sales team for custom enterprise pricing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * All prices in USD. Custom configurations available. Contact sales for volume discounts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
