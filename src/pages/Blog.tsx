import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";

const categories = ["All", "Food & Beverage", "Healthcare", "Industrial Safety", "Environmental", "Security"];


const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Case Studies - E-Näsa VOC Detection Technology</title>
        <meta 
          name="description" 
          content="Explore real-world case studies, technical insights, and industry applications of E-Näsa's advanced VOC detection and air quality monitoring technology." 
        />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Blog & Case Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications, technical insights, and industry success stories showcasing E-Näsa's VOC detection technology
            </p>
          </header>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles and case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                      <Link to={post.url}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full group">
                      <Link to={post.url}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No articles found matching your criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Want to see E-Näsa in action?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a demo to learn how our VOC detection technology can help your organization prevent contamination, ensure safety, and maintain quality standards.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/configurator">Schedule a Demo</Link>
            </Button>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
