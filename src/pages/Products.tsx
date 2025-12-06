import { useState, useEffect } from "react";
import { Grid, List, SlidersHorizontal, Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Import images
import homeProductImage from "@/assets/enasa-home-product.jpg";
import professionalProductImage from "@/assets/enasa-professional-product.jpg";
import industrialProductImage from "@/assets/enasa-industrial.jpg";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<string>("name-asc");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, priceRange, sortBy, selectedCategory]);

  const getCategoryFromTitle = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("home") || lowerTitle.includes("residential")) return "home";
    if (lowerTitle.includes("pro") || lowerTitle.includes("professional")) return "professional";
    if (lowerTitle.includes("industrial") || lowerTitle.includes("factory")) return "industrial";
    return "home"; // default
  };

  const getProductImage = (product: ShopifyProduct): string => {
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

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts(10);
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products:", error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => {
        const category = getCategoryFromTitle(product.node.title);
        return category === selectedCategory;
      });
    }

    // Filter by price range
    filtered = filtered.filter(product => {
      const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort products
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.node.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.node.priceRange.minVariantPrice.amount);
      
      switch (sortBy) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "name-asc":
          return a.node.title.localeCompare(b.node.title);
        case "name-desc":
          return b.node.title.localeCompare(a.node.title);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: ShopifyProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions
    });

    toast.success("Added to cart", {
      description: product.node.title,
    });
  };

  const ProductCard = ({ product }: { product: ShopifyProduct }) => {
    const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
    const currency = product.node.priceRange.minVariantPrice.currencyCode;
    const image = product.node.images.edges[0]?.node;
    const category = getCategoryFromTitle(product.node.title);
    const productImage = getProductImage(product);

    const categoryConfig = {
      home: { label: "Home", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      professional: { label: "Professional", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      industrial: { label: "Industrial", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" }
    };

    if (viewMode === "list") {
      return (
        <Card 
          className="p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4"
          onClick={() => navigate(`/product/${product.node.handle}`)}
        >
          <div className="w-32 h-32 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={productImage}
              alt={product.node.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{product.node.title}</h3>
                <Badge variant="outline" className={categoryConfig[category as keyof typeof categoryConfig].color}>
                  {categoryConfig[category as keyof typeof categoryConfig].label}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2">{product.node.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* Price পরিবর্তন - Coming Soon... */}
              <div className="text-2xl font-bold text-primary">
                Coming Soon...
              </div>
              <Button onClick={(e) => handleAddToCart(product, e)} disabled>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card 
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => navigate(`/product/${product.node.handle}`)}
      >
        <div className="aspect-square bg-secondary/20 overflow-hidden">
          <img
            src={productImage}
            alt={product.node.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold flex-1">{product.node.title}</h3>
            <Badge variant="outline" className={categoryConfig[category as keyof typeof categoryConfig].color}>
              {categoryConfig[category as keyof typeof categoryConfig].label}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.node.description}</p>
          <div className="flex items-center justify-between">
            {/* Price পরিবর্তন - Coming Soon... */}
            <div className="text-xl font-bold text-primary">
              Coming Soon...
            </div>
            <Button 
              size="sm" 
              onClick={(e) => handleAddToCart(product, e)}
              disabled
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-muted-foreground text-lg">
              Discover the complete range of E-Nāsa air quality monitoring solutions
            </p>
          </div>

          {/* Filters & Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setFilterOpen(!filterOpen)}
                className="gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price-asc">Price (Low-High)</SelectItem>
                    <SelectItem value="price-desc">Price (High-Low)</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            {filterOpen && (
              <Card className="p-6 space-y-6">
                <div>
                  <label className="text-sm font-medium mb-4 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("all")}
                      size="sm"
                    >
                      All Products
                    </Button>
                    <Button
                      variant={selectedCategory === "home" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("home")}
                      size="sm"
                      className={selectedCategory === "home" ? "" : "border-blue-500/20 text-blue-500 hover:bg-blue-500/10"}
                    >
                      Home
                    </Button>
                    <Button
                      variant={selectedCategory === "professional" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("professional")}
                      size="sm"
                      className={selectedCategory === "professional" ? "" : "border-purple-500/20 text-purple-500 hover:bg-purple-500/10"}
                    >
                      Professional
                    </Button>
                    <Button
                      variant={selectedCategory === "industrial" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("industrial")}
                      size="sm"
                      className={selectedCategory === "industrial" ? "" : "border-orange-500/20 text-orange-500 hover:bg-orange-500/10"}
                    >
                      Industrial
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="w-full"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("all");
                      setPriceRange([0, 500]);
                      setSortBy("name-asc");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Products Grid/List */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found</p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <Badge variant="outline">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </Badge>
              </div>
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;