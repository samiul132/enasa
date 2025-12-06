import { Card } from "@/components/ui/card";
import { Quote, Building2, Factory, Hospital, GraduationCap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useCountUp } from "@/hooks/use-count-up";

const testimonials = [
  {
    quote: "E-Näsa has revolutionized our indoor air quality management. We've seen a 45% reduction in employee sick days since deployment.",
    author: "Dr. Sarah Chen",
    position: "Chief Health Officer",
    company: "TechCorp Industries",
    icon: Building2,
    metrics: [
      { value: "45%", label: "Fewer Sick Days" },
      { value: "92%", label: "Air Quality Score" },
    ],
  },
  {
    quote: "The real-time monitoring and alerts have been game-changing for our manufacturing process. VOC detection helped us identify quality issues before they became costly problems.",
    author: "Michael Rodriguez",
    position: "Operations Director",
    company: "Nordic Manufacturing AB",
    icon: Factory,
    metrics: [
      { value: "67%", label: "Cost Reduction" },
      { value: "99.8%", label: "Detection Accuracy" },
    ],
  },
  {
    quote: "Patient recovery times improved significantly after we implemented E-Näsa throughout our facilities. The data-driven insights are invaluable.",
    author: "Dr. Emma Andersson",
    position: "Medical Director",
    company: "Stockholm Health Center",
    icon: Hospital,
    metrics: [
      { value: "23%", label: "Faster Recovery" },
      { value: "100%", label: "Compliance Rate" },
    ],
  },
  {
    quote: "Our students' concentration and test scores improved after installing E-Näsa in classrooms. The air quality data helps us create optimal learning environments.",
    author: "Prof. Lars Bergström",
    position: "Campus Director",
    company: "Uppsala University",
    icon: GraduationCap,
    metrics: [
      { value: "31%", label: "Better Focus" },
      { value: "18%", label: "Higher Scores" },
    ],
  },
];

const Testimonials = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-muted/20 snap-start min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how organizations worldwide are transforming their environments with E-Näsa technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
            return (
              <Card
                key={index}
                ref={ref}
                className={`p-8 hover:shadow-xl transition-all duration-700 border-border/50 bg-card/50 backdrop-blur-sm group hover:scale-105 hover:border-primary/30 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 ml-auto" />
                </div>

                <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mb-6">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.company}</div>
                </div>

                <div className="flex gap-6 pt-6 border-t border-border/50">
                  {testimonial.metrics.map((metric, idx) => {
                    const MetricCounter = () => {
                      const numericValue = parseFloat(metric.value);
                      const hasDecimal = metric.value.includes('.');
                      const decimals = hasDecimal ? metric.value.split('.')[1].length : 0;
                      const suffix = metric.value.replace(/[0-9.]/g, '');
                      
                      const { count, isComplete } = useCountUp({
                        end: numericValue,
                        duration: 2000,
                        isInView: isIntersecting,
                        decimals: decimals
                      });

                      return (
                        <span className={`inline-block transition-all duration-500 ${
                          isComplete 
                            ? 'drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)] scale-105' 
                            : ''
                        }`}>
                          {count}{suffix}
                        </span>
                      );
                    };

                    return (
                      <div key={idx} className="flex-1">
                        <div className="text-3xl font-bold text-primary mb-1">
                          <MetricCounter />
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        <div 
          ref={statsRef}
          className={`mt-16 text-center transition-all duration-700 delay-300 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-8">Deployed in over 500+ facilities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold">200+ Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory className="w-6 h-6" />
              <span className="font-semibold">150+ Factories</span>
            </div>
            <div className="flex items-center gap-2">
              <Hospital className="w-6 h-6" />
              <span className="font-semibold">100+ Healthcare</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              <span className="font-semibold">50+ Schools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
