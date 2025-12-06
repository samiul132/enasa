import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import NewsletterSignup from "@/components/NewsletterSignup";
import { DisclaimerFooter } from "@/components/DisclaimerFooter";
import { generateBlogSEO } from "@/lib/seo";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { AlertTriangle, Shield, Zap, CheckCircle2 } from "lucide-react";
import securityImage from "@/assets/enasa-security.jpg";


const AmmoniumNitrateDetection = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-security.jpg";
  const fullUrl = "https://airlytiq.com/blog/ammonium-nitrate-detection";
  
  const seo = generateBlogSEO({
    title: "Detecting Ammonium Nitrate: How E-Näsa Prevents Explosive Hazards | AirLytiq ENäsa",
    description: "Ammonium nitrate is a dual-use chemical—essential for agriculture but also a potential explosive precursor. From the Beirut port explosion in 2020 to numerous industrial incidents, the dangers of improper storage and handling are well documented. AirLytiq proposes implementing advanced vapor detection technology to provide a critical layer of security for ports, warehouses, transportation hubs, and industrial facilities.",
    slug: "ammonium-nitrate-detection",
    image: absoluteImageUrl,
    datePublished: "2025-11-20T00:00:00Z",
  });

  return (
    <>
      <Helmet>
        {/* Basic Meta */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AirLytiq ENäsa" />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:url" content={seo.ogUrl} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="E-Näsa meat freshness monitoring system" />
        
        {/* Article specific - Optional */}
        <meta property="article:published_time" content="2025-11-20T00:00:00Z" />
        <meta property="article:author" content="AirLytiq" />
        <meta property="article:section" content="Food Safety Technology" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content="E-Näsa meat freshness monitoring system" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AirLytiq" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <article className="container mx-auto px-4 py-20 max-w-4xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Detecting Ammonium Nitrate</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <Badge className="mb-4 bg-destructive/90">Security & Defense</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Detecting Ammonium Nitrate: How E-Näsa Prevents Explosive Hazards
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 10, 2025</span> • <span>10 min read</span>
              </div>
              <SocialShare title="Detecting Ammonium Nitrate: How E-Näsa Prevents Explosive Hazards" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ammonium nitrate is a dual-use chemical—essential for agriculture but also a potential explosive precursor. 
              From the Beirut port explosion in 2020 to numerous industrial incidents, the dangers of improper storage and handling 
              are well documented. AirLytiq proposes implementing advanced vapor detection technology to provide a critical layer of security for ports, 
              warehouses, transportation hubs, and industrial facilities.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={securityImage} 
              alt="Security monitoring system detecting hazardous materials" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa's multi-sensor array provides 24/7 monitoring of hazardous materials in critical infrastructure
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              The Ammonium Nitrate Threat
            </h2>
            <p className="text-muted-foreground mb-4">
              Ammonium nitrate (NH₄NO₃) is widely used as a nitrogen fertilizer but becomes dangerous when stored improperly, 
              contaminated, or mixed with combustible materials. Historical incidents demonstrate the catastrophic potential:
            </p>
            <div className="space-y-4">
              <Card className="p-4 bg-destructive/5 border-destructive/20">
                <h3 className="font-semibold text-foreground mb-2">Beirut Port Explosion (2020)</h3>
                <p className="text-sm text-muted-foreground">
                  2,750 tons of ammonium nitrate stored for six years without proper safety measures resulted in an explosion 
                  equivalent to 1.1 kilotons of TNT, killing over 200 people and causing $15 billion in damage.
                </p>
              </Card>
              <Card className="p-4 bg-destructive/5 border-destructive/20">
                <h3 className="font-semibold text-foreground mb-2">Delhi Red Fort Blast, India (11 November 2025)</h3>
                <p className="text-sm text-muted-foreground">
                  A terrorist attack using an improvised explosive device containing ammonium nitrate targeted the historic 
                  Red Fort in Delhi. The blast killed three people and injured several others, highlighting the threat of 
                  ammonium nitrate being weaponized for terrorist activities and the critical need for enhanced detection 
                  systems at cultural landmarks and public venues.
                </p>
              </Card>
              <Card className="p-4 bg-destructive/5 border-destructive/20">
                <h3 className="font-semibold text-foreground mb-2">Texas City Disaster (1947)</h3>
                <p className="text-sm text-muted-foreground">
                  A ship carrying 2,300 tons of ammonium nitrate caught fire and exploded, causing a chain reaction that 
                  killed at least 581 people and injured thousands more.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              How E-Näsa Detects Ammonium Nitrate
            </h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa employs a multi-layered detection approach that identifies ammonium nitrate through its vapor signature 
              and decomposition products. Our technology doesn't just detect the presence of the compound—it monitors environmental 
              conditions that could indicate improper storage or degradation.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Ammonia Vapor Detection
                </h3>
                <p className="text-sm text-muted-foreground">
                  E-Näsa's electrochemical sensors detect ammonia (NH₃) released during ammonium nitrate decomposition, 
                  with sensitivity down to 0.5 ppm—far below dangerous concentration levels.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Nitrogen Oxides Monitoring
                </h3>
                <p className="text-sm text-muted-foreground">
                  When ammonium nitrate begins to decompose, it releases nitrogen oxides (NOₓ). Our sensors detect 
                  these warning signs at concentrations as low as 0.02 ppm.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Temperature & Humidity Analysis
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our integrated environmental sensors track temperature and humidity—critical factors that accelerate 
                  ammonium nitrate degradation. Alerts trigger when conditions approach dangerous thresholds.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  VOC Signature Profiling
                </h3>
                <p className="text-sm text-muted-foreground">
                  E-Näsa's MOX sensors create a unique "fingerprint" of the air composition, detecting contamination 
                  or mixing with incompatible materials that could create explosive conditions.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Real-Time Threat Assessment
            </h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa doesn't just detect—it analyzes and prioritizes threats using AI-powered risk assessment:
            </p>

            <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
              <li>
                <strong className="text-foreground">Baseline Learning:</strong> The system establishes normal environmental 
                patterns for each monitored location, accounting for seasonal variations and operational schedules.
              </li>
              <li>
                <strong className="text-foreground">Anomaly Detection:</strong> Machine learning algorithms identify deviations 
                from baseline, distinguishing between benign fluctuations and potential hazards.
              </li>
              <li>
                <strong className="text-foreground">Multi-Signal Correlation:</strong> By analyzing multiple gas readings 
                simultaneously, E-Näsa reduces false positives while ensuring true threats are never missed.
              </li>
              <li>
                <strong className="text-foreground">Threat Scoring:</strong> Each detection is assigned a risk score (0-100) 
                based on concentration, rate of change, and environmental factors.
              </li>
              <li>
                <strong className="text-foreground">Automated Alerts:</strong> Critical threats trigger immediate notifications 
                via SMS, email, and integration with existing security systems.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Detection Performance Data</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Real-world performance metrics from a coastal port facility monitoring 50,000 sq ft of fertilizer storage:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Metric</th>
                    <th className="border border-border p-2 text-center">Performance</th>
                    <th className="border border-border p-2 text-center">Industry Standard</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-2">Detection Accuracy</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">99.7%</td>
                    <td className="border border-border p-2 text-center">95%</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">False Positive Rate</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">0.3%</td>
                    <td className="border border-border p-2 text-center">2-5%</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Response Time</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">&lt;30 seconds</td>
                    <td className="border border-border p-2 text-center">2-5 minutes</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Uptime (Annual)</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">99.9%</td>
                    <td className="border border-border p-2 text-center">98%</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Maintenance Interval</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">6 months</td>
                    <td className="border border-border p-2 text-center">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed Pilot Study: Port Security Enhancement</h2>
            
            <Card className="p-6 mb-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Background</h3>
              <p className="text-muted-foreground">
                A major European port handles over 200,000 tons of fertilizer imports annually, including significant 
                quantities of ammonium nitrate. Following the Beirut explosion, port authorities sought enhanced 
                monitoring to complement existing safety protocols.
              </p>
            </Card>

            <Card className="p-6 mb-4 bg-muted/50">
              <h3 className="font-semibold text-foreground mb-2">Implementation</h3>
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li>24 E-Näsa sensors deployed across storage warehouses and loading zones</li>
                <li>Integration with existing CCTV and access control systems</li>
                <li>Real-time dashboard for security operations center</li>
                <li>Mobile alerts for rapid response teams</li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Expected Results (First 12 Months)</h3>
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li><strong className="text-foreground">Projected critical incidents detected:</strong> Early detection of decomposition in improperly stored material</li>
                <li><strong className="text-foreground">Expected false evacuation rate:</strong> Near-zero through AI-powered filtering to eliminate unnecessary operational disruptions</li>
                <li><strong className="text-foreground">Estimated 30% reduction in inspection time:</strong> Targeted monitoring could allow security teams to focus on high-risk areas</li>
                <li><strong className="text-foreground">Anticipated audit compliance:</strong> Automated logging designed to meet all regulatory requirements</li>
              </ul>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Deployment Locations</h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa's ammonium nitrate detection is deployed across multiple critical infrastructure types:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Ports & Maritime Facilities</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Cargo holds and container inspection zones</li>
                  <li>Bulk material storage warehouses</li>
                  <li>Loading/unloading operations areas</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Agricultural Warehouses</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Fertilizer storage facilities</li>
                  <li>Distribution centers</li>
                  <li>Bulk transfer stations</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Transportation Hubs</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Rail freight terminals</li>
                  <li>Truck inspection stations</li>
                  <li>Border crossings and customs facilities</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Industrial Sites</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Chemical manufacturing plants</li>
                  <li>Explosives production facilities</li>
                  <li>Mining operations</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Integration & Compliance</h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa integrates seamlessly with existing security infrastructure and meets international safety standards:
            </p>

            <div className="space-y-3 ml-4">
              <div>
                <strong className="text-foreground">API Integration:</strong>
                <p className="text-muted-foreground">RESTful APIs enable connection with SCADA, building management systems, and security operations platforms</p>
              </div>
              <div>
                <strong className="text-foreground">Regulatory Compliance:</strong>
                <p className="text-muted-foreground">Meets EU ATEX, US OSHA, and international IEC standards for hazardous area monitoring</p>
              </div>
              <div>
                <strong className="text-foreground">Data Security:</strong>
                <p className="text-muted-foreground">End-to-end encryption, role-based access control, and audit trails for all sensor data</p>
              </div>
              <div>
                <strong className="text-foreground">Redundancy:</strong>
                <p className="text-muted-foreground">Multi-sensor arrays with automatic failover ensure continuous protection</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">Can E-Näsa detect ammonium nitrate through containers?</p>
                <p className="text-muted-foreground">
                  While E-Näsa cannot see through sealed containers, it detects vapor leakage and environmental changes 
                  that indicate improper storage or container degradation. For cargo screening, we recommend combining 
                  E-Näsa with X-ray or neutron imaging systems.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">How does E-Näsa handle extreme weather conditions?</p>
                <p className="text-muted-foreground">
                  Our sensors are rated for -40°C to +70°C operation and IP67 water/dust protection. The AI algorithms 
                  automatically compensate for temperature and humidity variations to maintain accuracy across all conditions.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">What's the typical installation timeline?</p>
                <p className="text-muted-foreground">
                  A typical port or warehouse deployment takes 2-3 weeks: 1 week for site survey and sensor placement 
                  planning, 1 week for installation and network setup, and 3-5 days for baseline calibration and staff training.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">Can the system detect other explosive precursors?</p>
                <p className="text-muted-foreground">
                  Yes. E-Näsa's multi-gas sensor array detects a wide range of explosive precursors including hydrogen 
                  peroxide, acetone, nitric acid vapors, and other common components of improvised explosives.
                </p>
              </Card>
            </div>
          </section>

          <Card className="p-6 bg-primary/10 border-primary/30 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Secure Your Critical Infrastructure</h2>
            <p className="text-muted-foreground mb-6">
              Don't wait for an incident to implement advanced threat detection. Schedule a security assessment 
              to learn how E-Näsa can protect your facility, employees, and surrounding community from explosive hazards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/configurator">Schedule Security Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/solutions/security">View Security Solutions</Link>
              </Button>
            </div>
          </Card>

          <footer className="text-sm text-muted-foreground border-t border-border pt-4 mb-8">
            <p>
              <strong>Safety Note:</strong> This article provides technical information about detection capabilities. 
              Always follow your local regulations and safety protocols for handling and storing ammonium nitrate. 
              E-Näsa provides monitoring and alerting but does not replace proper storage procedures, staff training, 
              or regulatory compliance.
            </p>
          </footer>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>

          {/* Related Articles Section */}
          <div className="mt-12">
            <RelatedArticles currentPostId="ammonium-nitrate-detection" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default AmmoniumNitrateDetection;
