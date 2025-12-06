import { Target, Rocket, Users, Heart, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import enasaTech from "@/assets/enasa-industrial-lab.jpg";

const values = [
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Exploring new ways to sense, interpret, and understand the invisible patterns in the air. We believe true progress comes from curiosity and experimentation.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering reliable, accurate, and well-designed solutions that perform consistently in real-world conditions — not just in labs.",
    color: "from-purple-400 to-indigo-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with our partners, clients, and research teams to turn ideas into practical solutions that make a measurable difference.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building technology with honesty, transparency, and respect — for science, data, people, and the environment.",
    color: "from-orange-400 to-red-500"
  }
];

const timeline = [
  {
    year: "February 2024",
    title: "Concept & Early Research",
    description: "Started exploring how gas sensors and AI could work together to decode odor patterns and build the foundation for smell-intelligence technology."
  },
  {
    year: "July 2024",
    title: "First Prototypes & Real-World Testing",
    description: "Designed the initial hardware, ran sensor experiments, and tested E-Näsa in real environments to understand VOC behaviour and practical use cases."
  },
  {
    year: "February 2025",
    title: "Algorithm Development",
    description: "Developed and trained the first machine-learning models for freshness, spoilage, and environmental monitoring."
  },
  {
    year: "September–October 2025",
    title: "Partnerships & Product Growth",
    description: "Engaged with Business Region Göteborg for market guidance and completed the second-generation prototypes with improved airflow, multi-sensor support, and cloud connectivity."
  },
  {
    year: "October–November 2025",
    title: "Almi Grant & Market Verification",
    description: "Received the Almi innovation grant and began structured market-verification activities to validate customer needs and refine the commercial direction."
  }
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content - 60% */}
            <div className="lg:w-3/5">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient font-brand tracking-wide">AirlytiQ</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                E-Näsa turns real-time odor data into actions that protect people, products, and the planet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="font-brand tracking-wide">AirlytiQ</span> is a pioneering technology company dedicated to making invisible environmental risks visible through advanced smell intelligence. We are the creators of E-Näsa, our flagship AI-powered electronic nose technology that detects spoilage, pollution, and hazardous gases in real time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team combines deep expertise in sensor technology, artificial intelligence, and environmental science to deliver innovative solutions across food safety, healthcare, industrial monitoring, and security sectors. With E-Näsa products ranging from home solutions to industrial-grade systems, we empower organizations worldwide to prevent incidents, reduce waste, and protect what matters most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    if (window.location.pathname !== "/") {
                      navigate("/", { replace: false });
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
                >
                  Get Started 
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => {
                    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Our Story
                </Button>
              </div>
            </div>

            {/* Image - 40% */}
            <div className="lg:w-2/5">
              <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img
                  src={enasaTech}
                  alt="E-Näsa Technology"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">From humble beginnings to industry pioneers</p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-6">
            <Card className="p-8 hover-lift border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">What Drives Us</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We believe the air carries valuable information about freshness, contamination, emissions, and environmental change. Most organisations don&apos;t yet have a simple or reliable way to use that data. Our goal is to make these signals easy to understand and useful in everyday operations.
              </p>
            </Card>

            <Card className="p-8 hover-lift border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Where We&apos;re Heading</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re building a future where air data becomes a natural part of decision-making — across food, waste, industry, healthcare, and security. Early detection should be straightforward, routine, and accessible to everyone.
              </p>
            </Card>

            <Card className="p-8 hover-lift border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Who We Are</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re a small, hands-on team of engineers and researchers who design everything end-to-end — hardware, firmware, cloud tools, and AI models. Keeping development in-house lets us move fast, stay accurate, and deliver tools that perform in real environments, not just controlled labs.
              </p>
            </Card>

            <Card className="p-8 hover-lift border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">How We Work</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We collaborate closely with companies through pilot tests, data studies, and tailored AI model development. Our process is simple: understand the real problem, test it in the real environment, and build a solution that makes a measurable difference.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-6">Our Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <Card className="flex-1 p-6 hover-lift">
                    <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="p-6 hover-lift text-center border-2 group hover:border-primary/50 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-12 text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join us in making air intelligence accessible and actionable for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/products")}>
                Explore Products
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                View Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;