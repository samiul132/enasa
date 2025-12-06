import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
});

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse({ email });
    
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    // Simulate API call - in production, this would save to database
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/10">
      <div className="max-w-2xl mx-auto text-center">
        {!isSubmitted ? (
          <>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Stay Informed</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive the latest case studies, technical insights, and product updates from E-Näsa.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={isLoading}
                required
                maxLength={255}
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        ) : (
          <div className="animate-slide-up">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">
              You've been successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default NewsletterSignup;