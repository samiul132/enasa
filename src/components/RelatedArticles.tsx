import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { getRelatedPosts } from "@/data/blogPosts";

interface RelatedArticlesProps {
  currentPostId: string;
  maxArticles?: number;
}

const RelatedArticles = ({ currentPostId, maxArticles = 2 }: RelatedArticlesProps) => {
  const relatedPosts = getRelatedPosts(currentPostId, maxArticles);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="relative h-40 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">
                {post.category}
              </Badge>
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                <Link to={post.url}>
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground text-sm line-clamp-2">
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
    </section>
  );
};

export default RelatedArticles;
