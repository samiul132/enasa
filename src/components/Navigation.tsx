import { useState } from "react";
import { Menu, X, ChevronDown, Beef, Factory, Leaf, Stethoscope, Shield, LayoutDashboard, Smartphone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import airlytiQLogo from "@/assets/airlytiq-logo.png";
import airlytiqText from "@/assets/airlytiq-text.png";
import { useNavigate, useLocation } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is /live-studio
  const isLiveStudio = location.pathname === "/live-studio";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProductClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('products');
  };

  const solutions = [
    { icon: Beef, label: "Food & Beverage", href: "/solutions/food-beverage" },
    { icon: Factory, label: "Industrial Safety", href: "/solutions/industrial-safety" },
    { icon: Leaf, label: "Environmental", href: "/solutions/environmental" },
    { icon: Stethoscope, label: "Healthcare", href: "/solutions/healthcare" },
    { icon: Shield, label: "Security", href: "/solutions/security" },
  ];

  const navItems = [
    { label: "About", href: "/about" },
  ];

  const productItems = [
    { label: "E-Nāsa Home", description: "For homes and personal spaces", price: "Coming Soon...", href: "#products" },
    { label: "E-Nāsa Pro", description: "Professional-grade solution", price: "Coming Soon...", href: "#products" },
    { label: "E-Nāsa Industrial", description: "For demanding environments", price: "Coming Soon...", href: "#products" },
  ];

  // If it's live-studio page, show only logo
  if (isLiveStudio) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container-fluid mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            {/* Center: Logo Only */}
            <button onClick={() => navigate("/")} className="flex items-center space-x-2 mx-8">
              <img src={airlytiQLogo} alt="AirlytiQ Icon" className="h-8 w-auto" />
              <img src={airlytiqText} alt="AirlytiQ Text" className="h-6 w-auto" />
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // Original navigation for all other pages
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-fluid mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Left: Navigation Items */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? 'solutions' : null)}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-all duration-200 relative group">
                <span className="relative">
                  Solutions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50 shadow-lg">
                <DropdownMenuItem onClick={() => navigate("/overview")} className="hover:bg-primary/10 transition-colors cursor-pointer">
                  <span className="font-medium">Overview</span>
                </DropdownMenuItem>
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.label} onClick={() => navigate(solution.href)} className="hover:bg-primary/10 transition-colors cursor-pointer">
                    <solution.icon className="h-4 w-4 mr-2" />
                    {solution.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? 'products' : null)}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-all duration-200 relative group">
                <span className="relative">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border w-72 z-50 shadow-lg">
                <DropdownMenuItem 
                  onClick={() => navigate("/products/overview")} 
                  className="hover:bg-primary/10 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col items-start py-2">
                    <span className="font-semibold text-primary group-hover:text-white">📋 Product Overview</span>
                    <span className="text-xs text-muted-foreground mt-1 group-hover:text-white">Explore our complete E-Nāsa lineup</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/products")} 
                className="hover:bg-primary/10 transition-colors cursor-pointer group">
                  <div className="flex flex-col items-start py-2">
                    <span className="font-semibold text-primary group-hover:text-white">🛍️ Shop All Products</span>
                    <span className="text-xs text-muted-foreground mt-1 group-hover:text-white">Browse and filter all devices</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/configurator")} 
                className="hover:bg-primary/10 transition-colors cursor-pointer group">
                  <div className="flex flex-col items-start py-2">
                    <span className="font-semibold text-primary group-hover:text-white">🔧 Product Configurator</span>
                    <span className="text-xs text-muted-foreground mt-1 group-hover:text-white">Find your perfect E-Nāsa solution</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard")} className="hover:bg-primary hover:text-white transition-colors cursor-pointer focus:bg-primary focus:text-white">
                  <div className="flex items-center gap-2 py-2">
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="font-semibold">Dashboard View</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/mobile-app")} className="hover:bg-primary/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 py-2">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Mobile App</span>
                  </div>
                </DropdownMenuItem>
                <div className="my-2 h-px bg-border" />
                {productItems.map((product) => (
                  <DropdownMenuItem key={product.label} asChild>
                    <a 
                      href={product.href} 
                      className="flex flex-col items-start py-3 hover:bg-primary/10 transition-colors cursor-pointer"
                      onClick={handleProductClick}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">{product.label}</span>
                        <Badge variant="outline" className="ml-2">{product.price}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{product.description}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className="text-foreground/80 hover:text-foreground transition-all duration-200 relative group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-all duration-200 relative group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              )
            ))}
          </div>

          {/* Center: Logo */}
          <button onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }} className="flex items-center space-x-3 mx-8">
            <img src={airlytiQLogo} alt="AirlytiQ Icon" className="h-8 w-auto" />
            <img src={airlytiqText} alt="AirlytiQ Text" className="h-6 w-auto" />
          </button>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <CartDrawer />

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
              Book Live Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartDrawer />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {/* Mobile Book Live Demo Button - MOVED TO TOP */}
            <div className="px-2 pb-4 border-b border-border">
              <Button 
                variant="default" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    navigate("/", { replace: false });
                    setIsOpen(false);
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
                    setIsOpen(false);
                  }
                }}
              >
                Book Live Demo
              </Button>
            </div>

            {/* Mobile Solutions Section */}
            <div className="space-y-2">
              <p className="font-semibold text-foreground/60 text-sm px-2">Solutions</p>
              <button
                onClick={() => {
                  navigate("/overview");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-2 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Overview
              </button>
              {solutions.map((solution) => (
                <button
                  key={solution.label}
                  onClick={() => {
                    navigate(solution.href);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-2 py-2 text-foreground/80 hover:text-foreground transition-colors w-full text-left"
                >
                  <solution.icon className="h-4 w-4" />
                  {solution.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Products Section - Same as desktop */}
            <div className="space-y-2 border-t border-border pt-4">
              <p className="font-semibold text-foreground/60 text-sm px-2">Products</p>
              
              {/* Product Overview */}
              <button
                onClick={() => {
                  navigate("/products/overview");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-2 py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border"
              >
                <div className="font-semibold text-primary text-sm">📋 Product Overview</div>
                <span className="text-xs text-muted-foreground">Explore our complete E-Nāsa lineup</span>
              </button>

              {/* Shop All Products */}
              <button
                onClick={() => {
                  navigate("/products");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-2 py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border"
              >
                <div className="font-semibold text-primary text-sm">🛍️ Shop All Products</div>
                <span className="text-xs text-muted-foreground">Browse and filter all devices</span>
              </button>

              {/* Product Configurator */}
              <button
                onClick={() => {
                  navigate("/configurator");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-2 py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border"
              >
                <div className="font-semibold text-primary text-sm">🔧 Product Configurator</div>
                <span className="text-xs text-muted-foreground">Find your perfect E-Nāsa solution</span>
              </button>

              {/* Dashboard View */}
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-2 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all border-b border-border"
              >
                <LayoutDashboard className="h-4 w-4 text-primary" />
                <span className="font-semibold text-sm">Dashboard View</span>
              </button>

              {/* Mobile App */}
              <button
                onClick={() => {
                  navigate("/mobile-app");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-2 py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border"
              >
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="font-semibold text-sm">Mobile App</span>
              </button>

              {/* Product Items with Badges */}
              {productItems.map((product) => (
                <a
                  key={product.label}
                  href={product.href}
                  className="block px-2 py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-border"
                  onClick={(e) => {
                    handleProductClick(e);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{product.label}</span>
                    <Badge variant="outline" className="text-xs">{product.price}</Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{product.description}</span>
                </a>
              ))}
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-2 py-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-2 py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;