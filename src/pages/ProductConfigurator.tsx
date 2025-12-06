import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Beef, Factory, Leaf, Stethoscope, Shield, Check, ArrowRight, Info, X, GitCompare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

interface Industry {
  id: string;
  name: string;
  icon: typeof Beef;
  color: string;
  gradient: string;
}

interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  industries: string[];
  specs: {
    detectionRange: string;
    responseTime: string;
    connectivity: string;
    certification: string;
  };
}

const industries: Industry[] = [
  {
    id: "food",
    name: "Food & Beverage",
    icon: Beef,
    color: "orange",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: "industrial",
    name: "Industrial Safety",
    icon: Factory,
    color: "slate",
    gradient: "from-slate-400 to-slate-600",
  },
  {
    id: "environmental",
    name: "Environmental",
    icon: Leaf,
    color: "green",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    color: "blue",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: "security",
    name: "Security",
    icon: Shield,
    color: "purple",
    gradient: "from-purple-400 to-indigo-500",
  },
];

const products: ProductModel[] = [
  {
    id: "enasa-fresh",
    name: "E-Nāsa Fresh",
    description: "Optimized for food quality monitoring and spoilage detection",
    price: "Contact for pricing",
    industries: ["food"],
    features: [
      "Real-time freshness monitoring",
      "Spoilage VOC detection",
      "Temperature correlation",
      "Cloud data logging",
      "Mobile app integration",
      "Customizable alerts"
    ],
    specs: {
      detectionRange: "ppb to ppm (Amines, Sulfides, Aldehydes)",
      responseTime: "< 30 seconds",
      connectivity: "WiFi, Ethernet",
      certification: "FDA compliant, HACCP compatible"
    }
  },
  {
    id: "enasa-guard",
    name: "E-Nāsa Guard",
    description: "Industrial-grade gas leak and hazard detection system",
    price: "Contact for pricing",
    industries: ["industrial"],
    features: [
      "Multi-gas detection",
      "Explosion-proof housing",
      "Real-time alerting",
      "Integration with safety systems",
      "Dual sensor redundancy",
      "Self-diagnostics"
    ],
    specs: {
      detectionRange: "H2S, SO2, NH3, CO, Methane (0-100% LEL)",
      responseTime: "< 10 seconds",
      connectivity: "Modbus, 4-20mA, Ethernet",
      certification: "ATEX, IECEx, UL, CSA"
    }
  },
  {
    id: "enasa-air",
    name: "E-Nāsa Air",
    description: "Environmental air quality and odor monitoring solution",
    price: "Contact for pricing",
    industries: ["environmental"],
    features: [
      "Outdoor-rated design",
      "Odor intensity mapping",
      "Weather-resistant",
      "Solar power option",
      "Public dashboard",
      "Compliance reporting"
    ],
    specs: {
      detectionRange: "VOCs, H2S, NH3, Mercaptans (sub-ppb to ppm)",
      responseTime: "Continuous 1-second intervals",
      connectivity: "WiFi, Cellular, Ethernet",
      certification: "EPA, EU ambient air quality compliant"
    }
  },
  {
    id: "enasa-med",
    name: "E-Nāsa Med",
    description: "Medical-grade VOC analysis for healthcare applications",
    price: "Contact for pricing",
    industries: ["healthcare"],
    features: [
      "Breath analysis capability",
      "Non-invasive testing",
      "Clinical data integration",
      "HIPAA-compliant storage",
      "Research-grade accuracy",
      "Sterilization compatible"
    ],
    specs: {
      detectionRange: "Metabolic, Infectious biomarkers (ppb-level)",
      responseTime: "< 5 minutes per analysis",
      connectivity: "HL7 FHIR, LIS integration",
      certification: "ISO 13485, HIPAA compliant"
    }
  },
  {
    id: "enasa-secure",
    name: "E-Nāsa Secure",
    description: "Advanced threat detection for security applications",
    price: "Contact for pricing",
    industries: ["security"],
    features: [
      "Explosives detection",
      "Narcotics screening",
      "Non-intrusive operation",
      "Military-grade encryption",
      "High-throughput processing",
      "Chain of custody logging"
    ],
    specs: {
      detectionRange: "Explosives, Narcotics, Chemical agents (picogram)",
      responseTime: "< 3 seconds",
      connectivity: "Encrypted channels, Secure API",
      certification: "TSA, DHS, NATO approved"
    }
  },
  {
    id: "enasa-pro",
    name: "E-Nāsa Pro",
    description: "Multi-purpose professional solution for various applications",
    price: "Contact for pricing",
    industries: ["food", "industrial", "environmental", "healthcare", "security"],
    features: [
      "Configurable sensor array",
      "Multiple detection modes",
      "Advanced analytics",
      "Customizable firmware",
      "API access",
      "24/7 support"
    ],
    specs: {
      detectionRange: "Configurable for specific applications",
      responseTime: "< 30 seconds",
      connectivity: "All protocols supported",
      certification: "Multiple certifications available"
    }
  },
];

const ProductConfigurator = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState<string[]>([]);

  const filteredProducts = selectedIndustry
    ? products.filter(p => p.industries.includes(selectedIndustry))
    : products;

  const selectedProductData = selectedProduct 
    ? products.find(p => p.id === selectedProduct) 
    : null;

  const selectedIndustryData = selectedIndustry
    ? industries.find(i => i.id === selectedIndustry)
    : null;

  const toggleComparison = (productId: string) => {
    if (comparisonProducts.includes(productId)) {
      setComparisonProducts(comparisonProducts.filter(id => id !== productId));
    } else {
      if (comparisonProducts.length < 3) {
        setComparisonProducts([...comparisonProducts, productId]);
      }
    }
  };

  const comparisonProductsData = comparisonProducts
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as ProductModel[];

  const allFeatures = comparisonProductsData.length > 0
    ? Array.from(new Set(comparisonProductsData.flatMap(p => p.features)))
    : [];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-6">Product Configurator</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect <span className="text-gradient">E-Nāsa Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Select your industry to discover the ideal VOC monitoring system for your needs
            </p>
          </div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className="py-3 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Step 1: Select Your Industry</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isSelected = selectedIndustry === industry.id;
                return (
                  <Card
                    key={industry.id}
                    className={cn(
                      "p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover-lift",
                      isSelected && "border-2 border-primary shadow-lg scale-105"
                    )}
                    onClick={() => {
                      setSelectedIndustry(industry.id);
                      setSelectedProduct(null);
                    }}
                  >
                    <div className="text-center">
                      <div className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br mx-auto mb-4 flex items-center justify-center transition-all",
                        industry.gradient,
                        isSelected && "shadow-lg"
                      )}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-semibold text-sm">{industry.name}</h3>
                      {isSelected && (
                        <Check className="h-5 w-5 text-primary mx-auto mt-2 animate-scale-in" />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendations */}
      {selectedIndustry && !comparisonMode && (
        <section className="py-12 bg-muted/30 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Step 2: Choose Your Model
                  </h2>
                  <p className="text-muted-foreground">
                    Recommended solutions for {selectedIndustryData?.name}
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setComparisonMode(true)}
                  className="flex items-center gap-2"
                >
                  <GitCompare className="h-4 w-4" />
                  Compare Products
                </Button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isSelected = selectedProduct === product.id;
                  const isPro = product.id === "enasa-pro";
                  return (
                    <Card
                      key={product.id}
                      className={cn(
                        "p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover-lift relative",
                        isSelected && "border-2 border-primary shadow-xl scale-105",
                        isPro && "border-2 border-primary/50"
                      )}
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      {isPro && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary/80">
                          Multi-Purpose
                        </Badge>
                      )}
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="text-lg font-semibold text-primary mb-4">
                        {product.price}
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-semibold">Key Features:</p>
                        {product.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {product.features.length > 3 && (
                          <p className="text-xs text-muted-foreground">
                            +{product.features.length - 3} more features
                          </p>
                        )}
                      </div>
                      {isSelected && (
                        <div className="flex items-center gap-2 text-primary text-sm font-medium animate-fade-in">
                          <Check className="h-5 w-5" />
                          Selected
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Mode */}
      {selectedIndustry && comparisonMode && (
        <section className="py-12 bg-muted/30 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Compare Products</h2>
                  <p className="text-muted-foreground">
                    Select up to 3 products to compare ({comparisonProducts.length}/3 selected)
                  </p>
                </div>
                <div className="flex gap-2">
                  {comparisonProducts.length > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setComparisonProducts([])}
                      size="sm"
                    >
                      Clear All
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setComparisonMode(false)}
                    size="sm"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Exit Comparison
                  </Button>
                </div>
              </div>

              {/* Product Selection Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {filteredProducts.map((product) => {
                  const isInComparison = comparisonProducts.includes(product.id);
                  const isPro = product.id === "enasa-pro";
                  return (
                    <Card
                      key={product.id}
                      className={cn(
                        "p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover-lift relative",
                        isInComparison && "border-2 border-primary shadow-lg scale-105",
                        isPro && "border-2 border-primary/50"
                      )}
                      onClick={() => toggleComparison(product.id)}
                    >
                      {isPro && (
                        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary/80 text-xs">
                          Multi-Purpose
                        </Badge>
                      )}
                      <h3 className="text-lg font-bold mb-2 pr-20">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <div className="text-sm font-semibold text-primary">
                        {product.price}
                      </div>
                      {isInComparison && (
                        <div className="flex items-center gap-2 text-primary text-sm font-medium mt-3">
                          <Check className="h-4 w-4" />
                          Added to comparison
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>

              {/* Comparison Table */}
              {comparisonProducts.length > 0 && (
                <Card className="overflow-hidden animate-fade-in">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-4 font-semibold sticky left-0 bg-muted z-10 min-w-[200px]">
                            Feature
                          </th>
                          {comparisonProductsData.map((product) => (
                            <th key={product.id} className="p-4 min-w-[250px]">
                              <div className="text-center">
                                <div className="font-bold mb-1">{product.name}</div>
                                <div className="text-xs text-muted-foreground font-normal">
                                  {product.description}
                                </div>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Price */}
                        <tr className="border-t">
                          <td className="p-4 font-medium sticky left-0 bg-background z-10">
                            Price
                          </td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center">
                              <div className="font-semibold text-primary">
                                {product.price}
                              </div>
                            </td>
                          ))}
                        </tr>

                        <tr>
                          <td colSpan={comparisonProducts.length + 1} className="p-0">
                            <Separator />
                          </td>
                        </tr>

                        {/* Technical Specifications */}
                        <tr className="bg-muted/50">
                          <td className="p-4 font-bold sticky left-0 bg-muted/50 z-10" colSpan={comparisonProducts.length + 1}>
                            Technical Specifications
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 font-medium sticky left-0 bg-background z-10">
                            Detection Range
                          </td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center text-sm">
                              {product.specs.detectionRange}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 font-medium sticky left-0 bg-background z-10">
                            Response Time
                          </td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center text-sm">
                              {product.specs.responseTime}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 font-medium sticky left-0 bg-background z-10">
                            Connectivity
                          </td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center text-sm">
                              {product.specs.connectivity}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-t">
                          <td className="p-4 font-medium sticky left-0 bg-background z-10">
                            Certification
                          </td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center text-sm">
                              {product.specs.certification}
                            </td>
                          ))}
                        </tr>

                        <tr>
                          <td colSpan={comparisonProducts.length + 1} className="p-0">
                            <Separator />
                          </td>
                        </tr>

                        {/* Features Comparison */}
                        <tr className="bg-muted/50">
                          <td className="p-4 font-bold sticky left-0 bg-muted/50 z-10" colSpan={comparisonProducts.length + 1}>
                            Features
                          </td>
                        </tr>
                        {allFeatures.map((feature) => (
                          <tr key={feature} className="border-t">
                            <td className="p-4 text-sm sticky left-0 bg-background z-10">
                              {feature}
                            </td>
                            {comparisonProductsData.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.features.includes(feature) ? (
                                  <Check className="h-5 w-5 text-primary mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}

                        {/* Action Buttons */}
                        <tr className="border-t bg-muted/20">
                          <td className="p-4 sticky left-0 bg-muted/20 z-10"></td>
                          {comparisonProductsData.map((product) => (
                            <td key={product.id} className="p-4 text-center">
                              <div className="space-y-2">
                                <Button size="sm" className="w-full">
                                  Request Quote
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-full"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleComparison(product.id);
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Configuration */}
      {selectedProduct && selectedProductData && !comparisonMode && (
        <section className="py-12 bg-background animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Step 3: Review Your Configuration
              </h2>
              
              <Card className="p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{selectedProductData.name}</h3>
                    <p className="text-muted-foreground mb-6">{selectedProductData.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        All Features
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Features included in your configuration</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </h4>
                      <div className="space-y-2">
                        {selectedProductData.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-2xl font-bold text-primary">
                      {selectedProductData.price}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Technical Specifications</h4>
                    <div className="space-y-4">
                      <div className="border-b border-border pb-3">
                        <div className="text-sm text-muted-foreground mb-1">Detection Range</div>
                        <div className="font-medium text-sm">{selectedProductData.specs.detectionRange}</div>
                      </div>
                      <div className="border-b border-border pb-3">
                        <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                        <div className="font-medium text-sm">{selectedProductData.specs.responseTime}</div>
                      </div>
                      <div className="border-b border-border pb-3">
                        <div className="text-sm text-muted-foreground mb-1">Connectivity</div>
                        <div className="font-medium text-sm">{selectedProductData.specs.connectivity}</div>
                      </div>
                      <div className="pb-3">
                        <div className="text-sm text-muted-foreground mb-1">Certification</div>
                        <div className="font-medium text-sm">{selectedProductData.specs.certification}</div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Selected Industry</p>
                      <Badge variant="outline" className="flex items-center gap-2 w-fit">
                        {selectedIndustryData && (
                          <>
                            <selectedIndustryData.icon className="h-4 w-4" />
                            {selectedIndustryData.name}
                          </>
                        )}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Live Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost"
                  onClick={() => {
                    setSelectedIndustry(null);
                    setSelectedProduct(null);
                  }}
                >
                  Start Over
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experts are ready to help you find the perfect E-Nāsa solution for your specific requirements.
          </p>{/*
          <Button size="lg" variant="outline">
            Talk to an Expert
          </Button>*/}
          <Button
            variant="outline"
            size="lg"
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
            Talk to an Expert
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductConfigurator;
