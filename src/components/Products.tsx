import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2, Factory } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Link } from "react-router-dom"; 

const products = [
  {
    name: "E-Näsa Home",
    handle: "e-nasa-home", 
    icon: Home,
    description: "Built for homes, small rooms, and personal spaces. It tracks everyday air changes linked to odors, ventilation issues, and environmental shifts. Setup is quick, and the interface is easy for anyone to use.",
    features: [
      "Quick setup",
      "Easy-to-use interface",
      "Everyday air quality tracking",
      "Odor detection",
    ],
    price: "Coming Soon...",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "E-Näsa Pro",
    handle: "e-nasa-pro", 
    icon: Building2,
    description: "Designed for professional use where reliability and accuracy are important. It offers enhanced sensing, better stability in mixed environments, and smarter pattern detection tuned for commercial needs.",
    features: [
      "Enhanced sensing",
      "Better stability",
      "Smarter pattern detection",
      "Commercial-grade reliability",
    ],
    price: "Coming Soon...",
    color: "from-primary to-secondary",
  },
  {
    name: "E-Näsa Industrial",
    handle: "e-nasa-industrial", 
    icon: Factory,
    description: "Built for demanding environments where early detection matters the most. It handles heavy use, variable conditions, and larger spaces. Models and alerts are tuned for operational risk, emissions, and odor management.",
    features: [
      "Heavy-duty design",
      "Variable condition handling",
      "Large space coverage",
      "Operational risk detection",
    ],
    price: "Coming Soon...",
    color: "from-slate-600 to-gray-800",
  },
];

const Products = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="products" className="py-4 md:py-4 bg-background snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Top Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From personal spaces to industrial facilities, find the right E-Näsa for your environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
            return (
            <Card
              key={product.name}
              ref={ref}
              className={`overflow-hidden hover-lift card-glow border-2 border-border hover:border-primary/50 transition-all duration-700 group hover:scale-[1.03] ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header with gradient */}
              <div className={`p-6 bg-gradient-to-br ${product.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <product.icon className="h-12 w-12 mb-4 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 relative z-10">{product.name}</h3>
                <p className="text-white/90 relative z-10">{product.description}</p>
              </div>

              {/* Features */}
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                  </div>
                  {/* Link */}
                  <Link to={`/product/${product.handle}`}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;