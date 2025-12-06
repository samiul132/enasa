import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import DeviceAnimation from "@/components/DeviceAnimation";
import Features from "@/components/Features";
import Products from "@/components/Products";
import BlogHighlights from "@/components/BlogHighlights";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Enhanced smooth scroll behavior
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const targetId = target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <Navigation />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Benefits />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <HowItWorks />
      </div>
      <section id="device-simulation" className="snap-start min-h-screen flex flex-col justify-center py-6 md:py-4 bg-muted/30 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              E-Nāsa <span className="text-gradient">Device Simulation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how E-Nāsa detects and analyzes air quality in real-time across different scenarios
            </p>
          </div>
          <DeviceAnimation />
        </div>
      </section>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <UseCases />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <Features />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Products />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <BlogHighlights />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
