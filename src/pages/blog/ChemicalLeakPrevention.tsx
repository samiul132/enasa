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
import industrialImage from "@/assets/enasa-industrial.jpg";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const ChemicalLeakPrevention = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-security.jpg";
  const fullUrl = "https://airlytiq.com/blog/meat-freshness-monitoring";
  
  const seo = generateBlogSEO({
    title: "Industrial Safety: Early Detection of Chemical Leaks | AirLytiq ENäsa",
    description: "Proposed pilot study on how AirLytiq's multi-gas sensors could help manufacturing facilities prevent major chemical incidents through early warning systems.",
    slug: "meat-freshness-monitoring",
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
        
        {/* Article specific - Optional*/}
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
                <BreadcrumbPage>Chemical Leak Prevention Case Study</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Industrial Safety: Early Detection of Chemical Leaks
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>September 12, 2025</span> • <span>7 min read</span>
              </div>
              <SocialShare title="Industrial Safety: Early Detection of Chemical Leaks" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AirLytiq proposes to validate E-Näsa's advanced gas detection system at large food processing facilities to demonstrate early warning capabilities 
              for chemical leak prevention. The pilot study aims to show how the technology could provide critical early warnings to prevent worker injuries, 
              enabling emergency response teams to isolate the failing valve before a major release occurred.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={industrialImage} 
              alt="Industrial facility with E-Näsa gas monitoring sensors" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa sensors continuously monitor industrial environments for chemical hazards
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Facility Background</h2>
            <p className="text-muted-foreground mb-4">
              The facility operates a large-scale ammonia refrigeration system serving cold storage warehouses and blast freezers for frozen food production. 
              The system contains approximately 15,000 kg of anhydrous ammonia (NH₃), a toxic and highly corrosive substance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Regulatory Context</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• EU Process Safety Directive compliance required</li>
                  <li>• Swedish Work Environment Authority oversight</li>
                  <li>• Community right-to-know reporting obligations</li>
                  <li>• Insurance mandates for leak detection systems</li>
                </ul>
              </Card>

              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Previous Safety Measures</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fixed point NH₃ detectors at machinery rooms</li>
                  <li>• Quarterly leak inspection rounds</li>
                  <li>• Annual valve replacement schedule</li>
                  <li>• Emergency ventilation systems</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Example Detection Scenario: Timeline</h2>
            
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-yellow-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">06:23 AM - Expected Initial Detection</p>
                    <p className="text-sm text-muted-foreground">
                      E-Näsa sensor in Compressor Room B detects NH₃ concentration rising from baseline 0 ppm to 3 ppm over 8 minutes. 
                      System generates "Low Priority" alert (threshold: 2 ppm sustained increase).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-orange-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">06:31 AM - Escalation</p>
                    <p className="text-sm text-muted-foreground">
                      Concentration reaches 8 ppm with accelerating rate of increase. E-Näsa upgrades to "Medium Priority" alert. 
                      Facility safety officer receives SMS and dashboard notification. Visual inspection initiated.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-red-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">06:47 AM - Source Identification</p>
                    <p className="text-sm text-muted-foreground">
                      Maintenance team identifies slow leak from isolation valve V-127 on liquid feed line. 
                      Concentration now 15 ppm and rising. High Priority alert triggered. Emergency response protocol activated.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-green-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">07:10 AM - Isolation Complete</p>
                    <p className="text-sm text-muted-foreground">
                      Upstream and downstream valves closed. System segment depressurized. Ammonia concentration begins declining. 
                      Peak exposure: 22 ppm (well below 25 ppm OSHA short-term exposure limit).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">08:30 AM - Repair & Recovery</p>
                    <p className="text-sm text-muted-foreground">
                      Failed valve replaced. System pressure-tested and returned to service. Total downtime: 2 hours, 7 minutes. 
                      No injuries. No evacuation required. Production resumed with minimal impact.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How E-Näsa Made the Difference</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Badge variant="destructive">Without E-Näsa</Badge>
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Fixed sensors positioned 6m from leak point would detect only after significant release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Next scheduled inspection round not until 08:00 AM—potential 1.5 hour delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Leak rate modeling suggests 200+ kg NH₃ release likely before detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Worker exposure could exceed TLV-TWA; potential injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Facility evacuation likely required; community notification necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>Estimated downtime: 12-24 hours for full decontamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span><strong>Estimated cost:</strong> €500,000+ (response, cleanup, lost production, regulatory fines)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Badge className="bg-green-600">With E-Näsa</Badge>
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Dense sensor network detected leak within 8 minutes of onset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>47 minutes of advance warning before critical threshold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Total NH₃ release estimated at &lt;12 kg—95% reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Zero worker injuries; all exposures kept within safe limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>No facility evacuation; no community impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Production resumed within 2 hours; minimal financial impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span><strong>Projected cost:</strong> €8,500 (valve replacement, labor, minor lost production)</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
              <p className="text-foreground font-semibold mb-2">ROI Analysis</p>
              <p className="text-sm text-muted-foreground">
                This single incident prevention justified the entire E-Näsa system cost. 
                The facility calculated ROI of <strong>5,800%</strong> on the €8,500 investment in continuous monitoring, 
                preventing an estimated €500,000+ catastrophic event cost.
              </p>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Technical Implementation</h2>
            
            <h3 className="text-lg font-semibold text-foreground mb-3">Sensor Coverage Design</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Zone</th>
                    <th className="border border-border p-3 text-left">Sensor Count</th>
                    <th className="border border-border p-3 text-left">Target Gases</th>
                    <th className="border border-border p-3 text-left">Alert Threshold</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">Compressor Rooms (A-D)</td>
                    <td className="border border-border p-3">12 sensors</td>
                    <td className="border border-border p-3">NH₃, refrigerants</td>
                    <td className="border border-border p-3">2 ppm sustained</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Evaporator Spaces</td>
                    <td className="border border-border p-3">8 sensors</td>
                    <td className="border border-border p-3">NH₃</td>
                    <td className="border border-border p-3">3 ppm sustained</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Loading Docks</td>
                    <td className="border border-border p-3">6 sensors</td>
                    <td className="border border-border p-3">NH₃, diesel exhaust</td>
                    <td className="border border-border p-3">5 ppm sustained</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Process Areas</td>
                    <td className="border border-border p-3">15 sensors</td>
                    <td className="border border-border p-3">Multi-gas</td>
                    <td className="border border-border p-3">VOC Index &gt; 40</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Battery Room</td>
                    <td className="border border-border p-3">4 sensors</td>
                    <td className="border border-border p-3">H₂, H₂S</td>
                    <td className="border border-border p-3">10 ppm H₂</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-3">Alert Response Protocol</h3>
            <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
              <li><strong className="text-foreground">Low Priority (2-5 ppm NH₃):</strong> Automated log entry. Dashboard notification to facilities manager. Investigation within 30 minutes.</li>
              <li><strong className="text-foreground">Medium Priority (5-15 ppm NH₃):</strong> SMS alert to safety officer and on-duty supervisor. Visual inspection required. Update every 5 minutes.</li>
              <li><strong className="text-foreground">High Priority (15-25 ppm NH₃):</strong> Emergency team activation. Area restriction. Isolation procedures initiated. Management notification.</li>
              <li><strong className="text-foreground">Critical (&gt;25 ppm NH₃):</strong> Facility evacuation. Emergency ventilation activation. Fire department notification. Full emergency response.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Lessons Learned & Recommendations</h2>
            
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">1. Layered Detection Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Combining E-Näsa's distributed sensors with existing fixed-point detectors creates redundant coverage. 
                  E-Näsa provides early warning; traditional systems serve as high-concentration backup.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">2. Trend Analysis is Critical</h3>
                <p className="text-sm text-muted-foreground">
                  Static thresholds alone are insufficient. E-Näsa's rate-of-change algorithms detected the accelerating leak pattern, 
                  enabling earlier escalation than concentration alone would trigger.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">3. Integration Multiplies Value</h3>
                <p className="text-sm text-muted-foreground">
                  Connection to building management system enabled automated ventilation response. 
                  Integration with work permit system prevents hot work in zones with elevated readings.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">4. Regular Drills Essential</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly simulated alerts ensure staff know response procedures. Quarterly full drills test end-to-end emergency response. 
                  Muscle memory reduces response time in real incidents.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Subsequent System Enhancements</h2>
            <p className="text-muted-foreground mb-4">
              Following this near-miss, the facility expanded E-Näsa deployment:
            </p>
            <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
              <li>Added 8 sensors in cold storage areas previously uncovered</li>
              <li>Implemented predictive maintenance alerts for equipment showing early degradation signatures</li>
              <li>Connected system to enterprise safety management platform for centralized oversight</li>
              <li>Established quarterly calibration and validation program</li>
              <li>Created comprehensive incident response playbook with sensor-guided procedures</li>
            </ul>
          </section>

          <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Protect Your Facility</h2>
            <p className="text-muted-foreground mb-4">
              Is your industrial facility adequately protected against chemical releases? E-Näsa offers comprehensive gas detection solutions 
              for refrigeration systems, chemical processing, manufacturing, and logistics operations.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/configurator">Request a Safety Assessment</Link>
            </Button>
          </Card>

          <DisclaimerFooter />

          {/* Newsletter Signup */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>

          {/* Related Articles Section */}
          <div className="mt-12">
            <RelatedArticles currentPostId="chemical-leak-prevention" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ChemicalLeakPrevention;
