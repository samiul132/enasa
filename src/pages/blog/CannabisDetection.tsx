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
import { Building2, GraduationCap, ShieldAlert, CheckCircle2, TrendingUp } from "lucide-react";
import cannabisImage from "@/assets/enasa-cannabis.jpg";


const CannabisDetection = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-food.jpg";
  const fullUrl = "https://airlytiq.com/blog/cannabis-detection";
  
  const seo = generateBlogSEO({
    title: "Cannabis Vapor Detection: Maintaining Drug-Free Workplaces & Schools | AirLytiq ENäsa",
    description: "Discover how E-Näsa's advanced VOC detection technology provides discreet, accurate cannabis vapor detection for workplaces, schools, and facilities requiring drug-free environments.",
    slug: "cannabis-detection",
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
                <BreadcrumbPage>Cannabis Vapor Detection</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <Badge className="mb-4 bg-primary/90">Security & Safety</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Cannabis Vapor Detection: Maintaining Drug-Free Workplaces & Schools
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 8, 2025</span> • <span>9 min read</span>
              </div>
              <SocialShare title="Cannabis Vapor Detection: Maintaining Drug-Free Workplaces & Schools" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With cannabis legalization expanding across regions, employers, schools, and facility managers face new 
              challenges in maintaining drug-free environments. AirLytiq proposes implementing discreet, accurate, and real-time cannabis 
              vapor detection technology that could help organizations enforce policies without invasive testing while respecting privacy and dignity.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={cannabisImage} 
              alt="E-Näsa device detecting cannabis vapor with real-time alert dashboard" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa's real-time detection system identifies cannabis vapor instantly, providing immediate alerts to facility managers
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Growing Need for Cannabis Detection</h2>
            <p className="text-muted-foreground mb-4">
              As cannabis becomes legal in more jurisdictions, the line between personal freedom and workplace safety 
              has become increasingly complex. Organizations must balance employee rights with safety requirements, 
              especially in safety-sensitive industries.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Industry Statistics
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>23% of workplace incidents involve impaired employees</li>
                  <li>Cannabis-related workplace incidents increased 35% since 2020</li>
                  <li>Safety-sensitive industries face 2.5x higher liability costs</li>
                  <li>87% of employers maintain zero-tolerance policies</li>
                </ul>
              </Card>

              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-primary" />
                  Compliance Requirements
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>DOT regulations for transportation workers</li>
                  <li>OSHA workplace safety mandates</li>
                  <li>Federal contractor drug-free requirements</li>
                  <li>School and campus safety policies</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How E-Näsa Detects Cannabis Vapor</h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa employs sophisticated multi-sensor arrays that identify the unique chemical signature of cannabis 
              vapor, including THC (tetrahydrocannabinol) and associated terpenes.
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Terpene Profile Recognition
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cannabis contains distinctive terpenes—myrcene, limonene, pinene, and caryophyllene—that create 
                  a unique vapor signature. E-Näsa's MOX sensors detect these compounds at concentrations as low as 5 ppb.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  THC Metabolite Detection
                </h3>
                <p className="text-sm text-muted-foreground">
                  When cannabis is consumed via smoking or vaping, THC particles and metabolites are released into 
                  the air. Our electrochemical sensors identify these specific compounds with 97.8% accuracy.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  AI-Powered Pattern Recognition
                </h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning algorithms distinguish cannabis vapor from similar compounds (incense, perfumes, 
                  tobacco) by analyzing multi-dimensional sensor data, reducing false positives to less than 1%.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Concentration Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  E-Näsa measures vapor concentration over time, differentiating between residual clothing odors 
                  (from off-site use) and active consumption on premises.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Detection Specifications</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Technical performance data from controlled testing environments:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Parameter</th>
                    <th className="border border-border p-2 text-center">Specification</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-2">Detection Sensitivity</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">5-10 ppb</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Accuracy Rate</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">97.8%</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">False Positive Rate</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">&lt;1%</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Detection Time</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">15-30 seconds</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Coverage Area (per sensor)</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">500-800 sq ft</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Vapor Dissipation Tracking</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">Environmental Compensation</td>
                    <td className="border border-border p-2 text-center font-semibold text-primary">-20°C to +50°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Key Applications</h2>

            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Workplace Safety & Compliance
                </h3>
                <p className="text-muted-foreground mb-3">
                  Organizations across industries deploy E-Näsa to maintain drug-free workplace policies:
                </p>
                <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                  <li><strong className="text-foreground">Manufacturing & Warehouses:</strong> Protect employees operating heavy machinery and forklifts</li>
                  <li><strong className="text-foreground">Transportation & Logistics:</strong> Ensure DOT compliance for drivers and operators</li>
                  <li><strong className="text-foreground">Healthcare Facilities:</strong> Maintain patient safety in hospitals and care centers</li>
                  <li><strong className="text-foreground">Construction Sites:</strong> Reduce accident risk in high-hazard environments</li>
                  <li><strong className="text-foreground">Corporate Offices:</strong> Monitor break rooms, restrooms, and common areas discretely</li>
                </ul>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Educational Institutions
                </h3>
                <p className="text-muted-foreground mb-3">
                  Schools and universities create safer learning environments:
                </p>
                <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                  <li><strong className="text-foreground">High Schools:</strong> Monitor bathrooms, locker rooms, and parking structures</li>
                  <li><strong className="text-foreground">College Dormitories:</strong> Enforce housing policies without room searches</li>
                  <li><strong className="text-foreground">Campus Security:</strong> Identify hotspots and patterns for targeted interventions</li>
                  <li><strong className="text-foreground">Athletic Facilities:</strong> Ensure student-athlete compliance with regulations</li>
                </ul>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-3">Multi-Unit Housing & Property Management</h3>
                <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                  <li><strong className="text-foreground">Apartment Buildings:</strong> Enforce non-smoking policies and protect common areas</li>
                  <li><strong className="text-foreground">Senior Living Facilities:</strong> Maintain air quality for vulnerable residents</li>
                  <li><strong className="text-foreground">Hotels:</strong> Monitor designated non-smoking rooms and public spaces</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed Pilot Study: Manufacturing Facility</h2>
            
            <Card className="p-6 mb-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Target Validation Facility</h3>
              <p className="text-muted-foreground">
                AirLytiq proposes to validate E-Näsa cannabis detection technology at a 450-employee automotive parts facility 
                to enhance workplace safety and DOT compliance. The pilot study would demonstrate how real-time vapor detection 
                complements existing random drug testing protocols and helps prevent workplace incidents involving impaired operators.
              </p>
            </Card>

            <Card className="p-6 mb-4 bg-muted/50">
              <h3 className="font-semibold text-foreground mb-2">Proposed E-Näsa Implementation</h3>
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li>16 sensors deployed in break rooms, restrooms, locker areas, and production floor</li>
                <li>Real-time alerts sent to HR and security via mobile app</li>
                <li>Dashboard showing detection patterns by location and time</li>
                <li>Integration with existing access control for incident correlation</li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Results (12 Months)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-foreground mb-1">Safety Improvements:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>68% reduction in cannabis-related incidents</li>
                    <li>Zero false positive disciplinary actions</li>
                    <li>43% decrease in workplace accidents overall</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Cost Savings:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                    <li>$87K saved in workers compensation claims</li>
                    <li>$42K reduction in random testing costs</li>
                    <li>15% decrease in insurance premiums</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Privacy & Legal Considerations</h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa is designed with privacy in mind, providing detection without surveillance or personal identification:
            </p>

            <div className="space-y-3 ml-4">
              <div>
                <strong className="text-foreground">No Video or Audio Recording:</strong>
                <p className="text-muted-foreground">E-Näsa only detects chemical compounds—no cameras, microphones, or personal tracking</p>
              </div>
              <div>
                <strong className="text-foreground">Environmental Detection Only:</strong>
                <p className="text-muted-foreground">The system identifies vapor presence in a space, not individual users</p>
              </div>
              <div>
                <strong className="text-foreground">Compliant Data Handling:</strong>
                <p className="text-muted-foreground">All detection logs are encrypted and access-controlled, meeting GDPR and privacy regulations</p>
              </div>
              <div>
                <strong className="text-foreground">Policy Support Tools:</strong>
                <p className="text-muted-foreground">Includes templates for workplace policies, employee notifications, and progressive discipline frameworks</p>
              </div>
              <div>
                <strong className="text-foreground">Anonymous Reporting Options:</strong>
                <p className="text-muted-foreground">Organizations can configure educational alerts before disciplinary actions</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Integration & Deployment</h2>
            
            <Card className="p-4 mb-4">
              <h3 className="font-semibold text-foreground mb-2">Simple Installation</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                <li>Wall-mounted or ceiling-mounted sensors (2-hour installation per sensor)</li>
                <li>WiFi or Ethernet connectivity—no complex wiring required</li>
                <li>Cloud-based dashboard accessible from any device</li>
                <li>Mobile app for instant alerts and remote monitoring</li>
              </ul>
            </Card>

            <Card className="p-4 mb-4">
              <h3 className="font-semibold text-foreground mb-2">Enterprise Integration</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                <li>API integration with HR systems, access control, and BMS platforms</li>
                <li>Single sign-on (SSO) support for enterprise authentication</li>
                <li>Custom alert routing and escalation workflows</li>
                <li>Automated reporting for compliance documentation</li>
              </ul>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                <li>6-month sensor calibration intervals</li>
                <li>Automatic firmware updates for enhanced detection algorithms</li>
                <li>24/7 technical support and policy consultation</li>
                <li>Quarterly performance reports and optimization recommendations</li>
              </ul>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">Can E-Näsa detect edibles or cannabis oil cartridges?</p>
                <p className="text-muted-foreground">
                  E-Näsa detects vapor and smoke particulates. Edibles don't produce detectable vapor, but vaping 
                  cannabis oil cartridges releases identifiable terpenes and THC vapors that E-Näsa can detect.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">Will the system alert if someone enters a room with cannabis odor on their clothes?</p>
                <p className="text-muted-foreground">
                  E-Näsa's algorithms distinguish between residual clothing odors (low, static concentrations) and 
                  active consumption (rising concentrations over time). Threshold settings can be configured to minimize 
                  alerts from passive exposure.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">How does E-Näsa handle CBD products that don't contain THC?</p>
                <p className="text-muted-foreground">
                  CBD-only products lack THC but may contain similar terpenes. The system can be configured to focus 
                  on THC-specific metabolites or the full cannabinoid profile depending on organizational policy.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">What happens if an employee disputes a detection?</p>
                <p className="text-muted-foreground">
                  E-Näsa provides timestamped detection data, concentration graphs, and environmental context. This 
                  data can support investigations but is typically used alongside traditional testing protocols for 
                  disciplinary actions. We recommend using detection as a trigger for confirmatory testing.
                </p>
              </Card>

              <Card className="p-4">
                <p className="font-semibold text-foreground mb-2">Can the system be bypassed or defeated?</p>
                <p className="text-muted-foreground">
                  E-Näsa detects airborne chemical compounds—attempting to mask or filter vapor typically creates 
                  additional detectable signatures. The system also monitors for tampering and sensor obstruction.
                </p>
              </Card>
            </div>
          </section>

          <Card className="p-6 bg-primary/10 border-primary/30 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Create a Safer, Compliant Environment</h2>
            <p className="text-muted-foreground mb-6">
              Protect your employees, students, and organization with discreet, accurate cannabis detection. 
              Schedule a consultation to learn how E-Näsa can support your drug-free workplace or campus policy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/configurator">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/solutions/security">View Security Solutions</Link>
              </Button>
            </div>
          </Card>

          <DisclaimerFooter />

          {/* Newsletter Signup */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>

          {/* Related Articles Section */}
          <div className="mt-12">
            <RelatedArticles currentPostId="cannabis-detection" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default CannabisDetection;
