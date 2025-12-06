import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductByHandle, getProducts, ShopifyProduct as ShopifyProductType } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShoppingCart, Check, Wind, Activity, Shield, Zap, ArrowLeft } from "lucide-react";

// Import images
import homeProductImage from "@/assets/enasa-home-product.jpg";
import professionalProductImage from "@/assets/enasa-professional-product.jpg";
import industrialProductImage from "@/assets/enasa-industrial.jpg";

const ProductDetail = () => {
  const { handle } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProductType[]>([]);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      setLoading(true);
      try {
        const [productData, allProducts] = await Promise.all([
          getProductByHandle(handle),
          getProducts(10)
        ]);
        
        setProduct(productData);
        
        // Filter related products (exclude current product)
        const related = allProducts.filter((p: ShopifyProductType) => p.node.handle !== handle).slice(0, 3);
        setRelatedProducts(related);
        
        if (productData?.variants?.edges?.length > 0) {
          const firstVariant = productData.variants.edges[0].node;
          setSelectedVariant(firstVariant);
          
          const initialOptions: Record<string, string> = {};
          firstVariant.selectedOptions.forEach((option: any) => {
            initialOptions[option.name] = option.value;
          });
          setSelectedOptions(initialOptions);
        }
      } catch (error) {
        console.error("Error loading product:", error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const getCategoryFromTitle = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("home") || lowerTitle.includes("residential")) return "home";
    if (lowerTitle.includes("pro") || lowerTitle.includes("professional")) return "professional";
    if (lowerTitle.includes("industrial") || lowerTitle.includes("factory")) return "industrial";
    return "home"; // default
  };

  const getProductImage = (product: any): string => {
    if (!product) return homeProductImage;
    
    const category = getCategoryFromTitle(product.title || "");
    
    // Return appropriate image based on category
    switch (category) {
      case "home":
        return homeProductImage;
      case "professional":
        return professionalProductImage;
      case "industrial":
        return industrialProductImage;
      default:
        return homeProductImage;
    }
  };

  const getRelatedProductImage = (product: ShopifyProductType): string => {
    const category = getCategoryFromTitle(product.node.title);
    
    // Return appropriate image based on category
    switch (category) {
      case "home":
        return homeProductImage;
      case "professional":
        return professionalProductImage;
      case "industrial":
        return industrialProductImage;
      default:
        return homeProductImage;
    }
  };

  const handleOptionChange = (optionName: string, value: string) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);

    const matchingVariant = product.variants.edges.find((edge: any) => {
      const variant = edge.node;
      return variant.selectedOptions.every((opt: any) => 
        newOptions[opt.name] === opt.value
      );
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node);
    }
  };

  const handleAddToCart = () => {
    if (!selectedVariant || !product) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };

    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.title} - ${selectedVariant.title}`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-lg" />
            <div className="h-32 bg-muted rounded-lg" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getSpecsByCategory = (category: string) => {
    if (category === "home") {
      return [
        { label: "Sensors", value: "Based on Appllication Sensor will can chosen" },
        { label: "Coverage", value: "Verification is on going.." },
        { label: "Connectivity", value: "Wifi, bluetooth" },
        { label: "Display", value: "Monochrome Screen" },
        { label: "Plug Type", value: "USB-C" },
      ];
    } else if (category === "professional") {
      return [
        { label: "Sensors", value: "Based on Appllication Sensor will can chosen" },
        { label: "Coverage", value: "Verification is on going.." },
        { label: "Connectivity", value: "Wifi, bluetooth" },
        { label: "Display", value: "Monochrome Screen" },
        { label: "Plug Type", value: "USB-C" },
      ];
    } else {
      return [
        { label: "Sensors", value: "Based on Appllication Sensor will can chosen" },
        { label: "Coverage", value: "Verification is on going.." },
        { label: "Connectivity", value: "Wifi, bluetooth" },
        { label: "Display", value: "Monochrome Screen" },
        { label: "Plug Type", value: "USB-C" },
      ];
    }
  };

  const category = getCategoryFromTitle(product?.title || "");
  const specs = getSpecsByCategory(category);
  const productImage = getProductImage(product);

  const handleRelatedProductClick = (productHandle: string) => {
    navigate(`/product/${productHandle}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-background rounded-2xl overflow-hidden border border-border">
              <img
                src={productImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-bold text-primary">
                  Coming Soon...
                </p>
                <Badge variant="outline" className="text-sm">
                  {selectedVariant?.availableForSale ? "Coming Soon" : "Coming Soon"}
                </Badge>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Options */}
            {product.options && product.options.map((option: any) => (
              <div key={option.name}>
                <label className="block text-sm font-medium mb-3">
                  {option.name}: <span className="text-primary">{selectedOptions[option.name]}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value: string) => (
                    <Button
                      key={value}
                      variant={selectedOptions[option.name] === value ? "default" : "outline"}
                      onClick={() => handleOptionChange(option.name, value)}
                      className="min-w-[100px]"
                    >
                      {selectedOptions[option.name] === value && (
                        <Check className="h-4 w-4 mr-2" />
                      )}
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            <Button 
              size="lg" 
              className="w-full text-lg py-6" 
              /*onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}*/
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wind className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Advanced Sensors</p>
                  <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Smart Alerts</p>
                  <p className="text-xs text-muted-foreground">Instant notifications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Secure & Private</p>
                  <p className="text-xs text-muted-foreground">Data encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Energy Efficient</p>
                  <p className="text-xs text-muted-foreground">Low power usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Features */}
        <Tabs defaultValue="specs" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="specs">Technical Specifications</TabsTrigger>
            <TabsTrigger value="features">Key Features</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-1">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-4 py-4 border-b border-border last:border-0">
                      <span className="font-semibold text-foreground">{spec.label}</span>
                      <span className="col-span-2 text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-3">Monitoring & Alerts</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Real-time air quality monitoring with instant data updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Customizable alert thresholds for different pollutants</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Historical data tracking and trend analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-3">Connectivity & Setup</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Mobile app integration for iOS and Android devices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Easy setup with plug-and-play installation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automatic firmware updates for latest features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">You May Also Like</h2>
              <p className="text-muted-foreground">Explore similar E-Nāsa air quality monitoring solutions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => {
                const relatedPrice = parseFloat(relatedProduct.node.priceRange.minVariantPrice.amount);
                const relatedCurrency = relatedProduct.node.priceRange.minVariantPrice.currencyCode;
                const relatedImage = getRelatedProductImage(relatedProduct);
                const relatedCategory = getCategoryFromTitle(relatedProduct.node.title);
                
                const categoryConfig = {
                  home: { label: "Home", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
                  professional: { label: "Professional", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
                  industrial: { label: "Industrial", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" }
                };

                return (
                  <Card 
                    key={relatedProduct.node.id}
                    className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                    onClick={() => handleRelatedProductClick(relatedProduct.node.handle)}
                  >
                    <div className="aspect-square bg-secondary/20 overflow-hidden">
                      <img
                        src={relatedImage}
                        alt={relatedProduct.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold flex-1">{relatedProduct.node.title}</h3>
                        <Badge variant="outline" className={categoryConfig[relatedCategory as keyof typeof categoryConfig].color}>
                          {categoryConfig[relatedCategory as keyof typeof categoryConfig].label}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedProduct.node.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-primary">
                          Coming Soon...
                        </div>
                        <Button 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRelatedProductClick(relatedProduct.node.handle);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;