import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogHighlights = () => {
  // Get first 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-4 bg-muted/30 snap-start">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how E-Nāsa is transforming air quality monitoring across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} to={post.url} className="group">
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="hover:bg-background/20 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
