import { ArrowRight, Home, Building2, Factory, Wind, Activity, Shield, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import { useNavigate } from "react-router-dom";
import homeProductImage from "@/assets/enasa-home-product.jpg";
import professionalProductImage from "@/assets/enasa-professional-product.jpg";
import industrialProductImage from "@/assets/enasa-industrial-product.jpg";

const productCategories = [
  {
    icon: Home,
    category: "home",
    title: "E-Nāsa Home",
    subtitle: "Personal Air Quality Monitoring",
    description: "Perfect for residential spaces, apartments, and home offices. Monitor your indoor air quality with real-time insights and smart alerts.",
    color: "from-blue-400 via-blue-500 to-cyan-500",
    iconColor: "text-blue-100",
    image: homeProductImage,
    features: [
      "Verification is on going..",
      "6 essential air quality sensors",
      "Plug Type",
      "Monochrome Screen",
      "Mobile app integration"
    ],
    specs: {
      sensors: "Based on Appllication Sensor will can chosen",
      connectivity: "Wifi, bluetooth",
      plugtype: "USB-C"
    },
    priceRange: "Cooming soon..."
  },
  {
    icon: Building2,
    category: "professional",
    title: "E-Nāsa Professional",
    subtitle: "Commercial & Office Solutions",
    description: "Designed for offices, clinics, schools, and small commercial spaces. Advanced monitoring with touchscreen display and enhanced connectivity.",
    color: "from-purple-400 via-purple-500 to-indigo-500",
    iconColor: "text-purple-100",
    image: professionalProductImage,
    features: [
      "Verification is on going..",
      "7 advanced air quality sensors",
      "Plug Type",
      "Monochrome Screen",
      "Cloud data storage"
    ],
    specs: {
      sensors: "Based on Appllication Sensor will can chosen",
      connectivity: "Wifi, bluetooth",
      plugtype: "USB-C"
    },
    priceRange: "Cooming soon..."
  },
  {
    icon: Factory,
    category: "industrial",
    title: "E-Nāsa Industrial",
    subtitle: "Enterprise-Grade Monitoring",
    description: "Built for factories, warehouses, laboratories, and large facilities. Comprehensive sensor array with industrial-grade connectivity and durability.",
    color: "from-orange-400 via-orange-500 to-red-500",
    iconColor: "text-orange-100",
    image: industrialProductImage,
    features: [
      "Verification is on going..",
      "12 comprehensive sensors",
      "Plug Type",
      "Monochrome Screen",
      "Advanced analytics & API"
    ],
    specs: {
      sensors: "Based on Appllication Sensor will can chosen",
      connectivity: "Wifi, bluetooth",
      plugtype: "USB-C"
    },
    priceRange: "Cooming soon..."
  }
];

const commonFeatures = [
  {
    icon: Wind,
    title: "Advanced Sensors",
    description: "Precision VOC detection and multi-parameter monitoring"
  },
  {
    icon: Activity,
    title: "Real-time Data",
    description: "Instant air quality updates and trend analysis"
  },
  {
    icon: Shield,
    title: "Smart Alerts",
    description: "Customizable thresholds and instant notifications"
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Low power consumption with maximum performance"
  }
];

const ProductOverview = () => {
  const navigate = useNavigate();

  const handleShopCategory = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  const handleShopAll = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Content - Left Side */}
              <div className="md:w-1/2 text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  E-Nāsa Product <span className="text-gradient">Lineup</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Advanced air quality monitoring solutions for every environment. From homes to industrial facilities, we have the perfect device for your needs.
                </p>
                <Button size="lg" onClick={handleShopAll} className="gap-2">
                  Shop All Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Image - Right Side */}
              <div className="md:w-1/2 px-10">
                <img 
                  src="/enasa_product.jpg" 
                  alt="E-Nāsa Products" 
                  className="w-full h-80 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-muted-foreground">Product Lines</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">12+</div>
              <div className="text-muted-foreground">Sensors Available</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-4xl font-bold text-gradient mb-2">
                <TrendingUp className="h-8 w-8 inline" />
              </div>
              <div className="text-muted-foreground">AI-Powered</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((product, index) => (
              <Card 
                key={product.title}
                className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-500 group"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                        <product.icon className={`h-8 w-8 ${product.iconColor}`} strokeWidth={2.5} />
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {product.subtitle}
                      </Badge>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {product.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-6">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <div className="space-y-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{product.priceRange}</span>
                      </div>
                      <Button 
                        onClick={() => handleShopCategory(product.category)}
                        className="w-full group/btn"
                      >
                        View {product.title} Products
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Image & Specs Side */}
                  <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center gap-6">
                    {/* Product Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={product.image} 
                        alt={`${product.title} in use`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    </div>

                    <h3 className="font-semibold text-lg">Technical Specifications</h3>
                    <div className="space-y-4">
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="text-sm text-muted-foreground mb-1">Sensors</div>
                        <div className="font-medium text-sm">{product.specs.sensors}</div>
                      </div>
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="text-sm text-muted-foreground mb-1">Connectivity</div>
                        <div className="font-medium text-sm">{product.specs.connectivity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-5 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">All E-Nāsa Devices Include</h2>
            <p className="text-muted-foreground text-lg">
              Premium features standard across our entire product line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 hover-lift text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <TechnicalSpecs />

      {/* CTA Section */}
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Air Quality?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Explore our complete product catalog and find the perfect air quality monitoring solution for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={handleShopAll}>
                Browse All Products
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate("/login", { state: { from: "/dashboard" } })}
              >
                View Live Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductOverview;
