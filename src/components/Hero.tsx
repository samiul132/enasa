import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import partnerAlmi from "@/assets/partner-almi.png";
import partnerBusinessRegion from "@/assets/partner-business-region.png";
import FloatingParticles from "./FloatingParticles";
import AirFlowEffect from "./AirFlowEffect";
import RotatingOrbs from "./RotatingOrbs";
import { useParallax } from "@/hooks/use-parallax";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const Hero = () => {
  const scrollY = useParallax();
  const mousePos = useMouseParallax(15);
  
  // Calculate parallax offsets - slower movement for background
  const bgOffset = scrollY * 0.5;
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 snap-start">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate(${mousePos.x * 0.3}px, ${bgOffset + mousePos.y * 0.3}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(203,80%,25%)] via-[hsl(203,80%,35%)] to-[hsl(203,92%,58%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(203,100%,70%)]/30 via-transparent to-[hsl(220,100%,85%)]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(203,92%,58%,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(220,100%,85%,0.2),transparent_50%)]" />
        {/* Rotating Orbs */}
        <RotatingOrbs />
        {/* Air Flow Effect */}
        <AirFlowEffect />
        {/* Floating Particles */}
        <FloatingParticles scrollY={scrollY} mousePos={mousePos} />
      </div>

      {/* Content */}
      <div className="pt-6 container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            <span
              className="block animate-fade-in text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-white via-[hsl(220,100%,85%)] to-[hsl(203,100%,70%)] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,255,255,0.8)] filter"
              style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
            >
              The Air Has a Story.
            </span>

            <span
              className="block mt-4 animate-fade-in text-white drop-shadow-[0_4px_40px_rgba(95,184,255,0.8)]"
              style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
            >
              We Translate It.
            </span>
          </h1>

          
          <p className="text-lg md:text-xl text-white font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            ENäsa uses advanced AI to identify spoilage, pollution, and harmful gases in real time across food, environmental, healthcare, security, and industrial settings. It helps you cut waste, prevent issues early, and understand risks you can’t see.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '1.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("cta");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-[hsl(203,92%,58%)] to-[hsl(203,100%,70%)] hover:from-[hsl(203,92%,65%)] hover:to-[hsl(203,100%,75%)] text-white px-8 shadow-[0_0_40px_rgba(95,184,255,0.6)] hover:shadow-[0_0_50px_rgba(95,184,255,0.8)] transition-all duration-300 hover:scale-105 font-semibold"
            >
              Book a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>


            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(203,80%,35%)] backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] font-semibold"
              onClick={() => window.scrollTo({ top: document.getElementById('use-cases')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Explore Solutions
          </Button>
        </div>

        {/* Trust Indicators - Moved Down */}
        <div className="animate-fade-in" style={{ animationDelay: '1.7s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="pt-20 text-white/60 text-sm mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a 
              href="https://www.almi.se/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <img src={partnerAlmi} alt="Almi" className="h-10 w-auto" />
            </a>
            <a 
              href="https://www.businessregiongoteborg.se/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <img src={partnerBusinessRegion} alt="Business Region Göteborg" className="h-10 w-auto" />
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
