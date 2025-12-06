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
import { Home, Building2, AlertTriangle, CheckCircle2, TrendingDown, Wind } from "lucide-react";
import environmentalImage from "@/assets/enasa-environmental.jpg";

const MoldDetection = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-environmental.jpg";
  const fullUrl = "https://airlytiq.com/blog/mold-detection";
  
  const seo = generateBlogSEO({
    title: "Hidden Mold Detection for Homes: Early Warning for Home Buyers & Real Estate | AirLytiq ENäsa",
    description: "Protect your home purchase with Enäsa VOC detection technology. Detect hidden mold before buying old houses, save thousands in remediation costs, and safeguard your family's health.",
    slug: "mold-detection",
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
        <meta property="og:image:alt" content="Environmental" />
        
        {/* Article specific - Optional */}
        <meta property="article:published_time" content="2025-11-20T00:00:00Z" />
        <meta property="article:author" content="AirLytiq" />
        <meta property="article:section" content="Food Safety Technology" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content="E-Näsa meat freshness monitoring system" />  {/* এটা add করুন */}
        
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
                <BreadcrumbPage>Hidden Mold Detection</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <Badge className="mb-4 bg-primary/90">Environmental</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Hidden Mold Detection for Home Buyers: Protect Your Investment & Family Health
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 22, 2025</span> • <span>12 min read</span>
              </div>
              <SocialShare title="Hidden Mold Detection: Early Warning for Indoor Air Quality" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buying a home is likely the biggest investment you'll ever make. But hidden mold can turn your dream home into a health 
              nightmare and financial burden. An estimated 45% of homes have conditions conducive to mold growth, with contamination 
              frequently lurking undetected behind walls, under floors, and in basements—especially in older houses. AirLytiq's VOC 
              detection technology could identify hidden mold weeks before visual signs appear, helping home buyers, real estate agents, 
              and homeowners make informed decisions that protect health and save thousands in remediation costs.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={environmentalImage} 
              alt="AirLytiq VOC monitoring system detecting hidden mold in building environments" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              Proposed continuous air quality monitoring could detect mold-related VOCs before visible growth
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Home Buyers Need to Worry About Hidden Mold</h2>
            <p className="text-muted-foreground mb-4">
              Mold is more than just unsightly stains. For home buyers, especially those considering older properties, 
              it's a serious health and financial risk that standard home inspections often miss:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4 border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Health Impact
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Triggers asthma and allergic reactions</li>
                  <li>Causes chronic respiratory infections</li>
                  <li>Produces mycotoxins affecting neurological health</li>
                  <li>Particularly dangerous for children and elderly</li>
                </ul>
              </Card>

              <Card className="p-4 border-l-4 border-l-destructive">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  Financial Impact for Home Buyers
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Basic remediation: $2,000 - $6,000</li>
                  <li>Whole-house treatment: $10,000 - $30,000</li>
                  <li>Structural repairs: Can exceed $100,000</li>
                  <li>Property devaluation: 10-25% loss in resale value</li>
                  <li>Disclosure requirements may kill future sales</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
              <div className="flex items-start gap-4">
                <Wind className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">The Detection Challenge for Home Inspections</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Standard home inspections only reveal visible mold. By the time you see it, contamination has 
                    often spread extensively. In older homes especially, mold hides in these common problem areas:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                    <li><strong>Basements & Crawl Spaces:</strong> #1 location in older homes with poor drainage</li>
                    <li><strong>Behind Walls:</strong> Old plumbing leaks, past water damage hidden during renovation</li>
                    <li><strong>Attics:</strong> Poor ventilation and roof leaks in aging houses</li>
                    <li><strong>Under Flooring:</strong> Moisture intrusion from concrete slabs or old subflooring</li>
                    <li><strong>HVAC Systems:</strong> Decades of condensation buildup circulating spores throughout the home</li>
                    <li><strong>Bathrooms & Kitchens:</strong> Behind tiles and under cabinets from slow leaks</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How Mold Produces Detectable VOCs</h2>
            <p className="text-muted-foreground mb-4">
              As mold grows, it produces distinctive volatile organic compounds (VOCs) through metabolic processes. 
              These chemical signatures become detectable in air samples long before visible growth appears:
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Primary Mold VOC Indicators</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong className="text-foreground">MVOCs (Microbial VOCs):</strong>
                    <ul className="ml-4 list-disc text-muted-foreground mt-1">
                      <li>2-Methylisoborneol (earthy/musty odor)</li>
                      <li>Geosmin (damp earth smell)</li>
                      <li>1-Octen-3-ol (mushroom-like)</li>
                      <li>3-Methylfuran</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-foreground">Secondary Metabolites:</strong>
                    <ul className="ml-4 list-disc text-muted-foreground mt-1">
                      <li>Aldehydes and ketones</li>
                      <li>Alcohols (ethanol, methanol)</li>
                      <li>Terpenes</li>
                      <li>Sulfur compounds</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-muted/30">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Critical Advantage:</strong> These VOCs appear in measurable concentrations 
                  2-4 weeks before mold colonies become visible to the naked eye, providing a crucial early warning window.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed AirLytiq Solution: Continuous Mold Monitoring</h2>
            <p className="text-muted-foreground mb-4">
              AirLytiq proposes deploying a network of air quality sensors throughout buildings to provide continuous mold surveillance:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Proposed Monitoring Strategy</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">High-Risk Zones</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Sensors positioned in areas prone to moisture and poor ventilation:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Bathrooms and kitchens</li>
                  <li>Basements and crawl spaces</li>
                  <li>HVAC intake vents</li>
                  <li>Areas with known water damage history</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Vulnerable Populations</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Priority deployment for facilities serving sensitive groups:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                  <li>Schools and daycare centers</li>
                  <li>Hospitals and healthcare facilities</li>
                  <li>Senior living communities</li>
                  <li>Multi-unit residential buildings</li>
                </ul>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Expected Detection Capabilities</h3>
            <Card className="p-4 bg-muted/50 mb-4">
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li><strong className="text-foreground">Early Warning:</strong> Detection of mold-related VOCs 2-4 weeks before visible growth</li>
                <li><strong className="text-foreground">Species Differentiation:</strong> Identification of potentially toxic mold species (Stachybotrys, Aspergillus)</li>
                <li><strong className="text-foreground">Growth Stage Assessment:</strong> VOC intensity indicates extent of contamination</li>
                <li><strong className="text-foreground">Post-Remediation Verification:</strong> Confirms successful mold removal</li>
                <li><strong className="text-foreground">Moisture Event Detection:</strong> Alerts to water leaks that precede mold growth</li>
              </ul>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Real-World Example: The $75,000 Mistake a Home Buyer Could Have Avoided</h2>
            <p className="text-muted-foreground mb-6">
              Consider a typical scenario: A family purchases a charming 1960s colonial for $425,000. The home inspection found no 
              visible mold. Six months later, they notice a musty smell in the basement. Professional testing reveals extensive black 
              mold throughout the basement walls, crawl space, and HVAC system—all hidden during the purchase. Total remediation cost: 
              $75,000, not covered by homeowner's insurance because it's considered "maintenance." Had AirLytiq's VOC detection been 
              used during the inspection period, the hidden contamination could have been detected, allowing them to negotiate repairs 
              or walk away from the purchase.
            </p>

            <h3 className="font-semibold text-foreground mb-3">How AirLytiq Could Help Different Stakeholders</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4 border-l-4 border-l-primary">
                <div className="text-lg font-bold text-primary mb-2">Home Buyers</div>
                <p className="text-sm text-muted-foreground">Deploy during inspection period to detect hidden mold before closing. Could save tens of thousands in remediation or allow negotiating a lower price.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-primary">
                <div className="text-lg font-bold text-primary mb-2">Real Estate Agents</div>
                <p className="text-sm text-muted-foreground">Offer as value-added service to differentiate listings. Prove older homes are mold-free or identify issues before listing to prevent deal collapse.</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-primary">
                <div className="text-lg font-bold text-primary mb-2">Current Homeowners</div>
                <p className="text-sm text-muted-foreground">Continuous monitoring protects family health and catches problems early when remediation is simple and affordable instead of catastrophic.</p>
              </Card>
            </div>

            <h3 className="font-semibold text-foreground mb-3">Common Home Buying Scenarios Where AirLytiq Could Save You</h3>
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-primary">
                <h4 className="font-semibold text-foreground mb-2">Scenario 1: The Basement Bargain That Wasn't</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Situation:</strong> Beautiful finished basement in a 1970s split-level. No visible issues during showing or inspection.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Hidden Problem:</strong> Previous owner had basement flooding, did DIY drywall replacement without addressing moisture. Mold growing behind new walls and under carpet.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>How AirLytiq Could Help:</strong> 48-hour VOC monitoring during inspection period would detect elevated MVOCs, prompting invasive inspection.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Potential Savings:</strong> Avoid $22,000 remediation + $15,000 reconstruction = $37,000
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <h4 className="font-semibold text-foreground mb-2">Scenario 2: The Attic Time Bomb</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Situation:</strong> Charming 1950s Cape Cod with finished second floor. Home inspector noted "some moisture staining" in attic but no active leak.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Hidden Problem:</strong> Inadequate attic ventilation causing chronic condensation. Mold throughout insulation and roof sheathing.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>How AirLytiq Could Help:</strong> VOC sensors placed in living areas and attic would show elevated readings, indicating active mold growth requiring immediate attention.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Potential Savings:</strong> Negotiate $30,000 off purchase price OR walk away from future $45,000 roof replacement + mold remediation
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-primary">
                <h4 className="font-semibold text-foreground mb-2">Scenario 3: The Post-Renovation Reality</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Situation:</strong> Recently renovated 1980s ranch. Fresh paint, new carpet, updated bathroom. Sellers claim "everything's new."
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Hidden Problem:</strong> Renovation was cosmetic only. Old plumbing leak behind new tile never addressed. Mold growing in wall cavity and spreading through HVAC.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>How AirLytiq Could Help:</strong> VOC detection would identify mold signature despite fresh finishes, revealing the renovation covered up problems rather than fixing them.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Potential Savings:</strong> Avoid purchasing a $380,000 home with $65,000 in hidden defects OR negotiate appropriate price reduction
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How Real Estate Agents Can Use AirLytiq as a Competitive Advantage</h2>
            
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">For Listing Older Properties</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Proactively test homes before listing to identify and address mold issues</li>
                      <li>Market mold-free certification as a premium feature increasing buyer confidence</li>
                      <li>Prevent deal collapse from buyer's inspection discovering hidden mold</li>
                      <li>Justify asking price with documented air quality data</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">For Representing Buyers</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Offer as value-added service differentiating you from other agents</li>
                      <li>Deploy during inspection contingency period on older homes or homes with moisture history</li>
                      <li>Provide clients data to negotiate price reductions or request repairs</li>
                      <li>Build reputation for protecting clients from expensive post-purchase surprises</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">For Property Investors & Flippers</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Assess true remediation costs before making offers on distressed properties</li>
                      <li>Verify renovation quality and identify if cosmetic fixes hid mold problems</li>
                      <li>Document mold-free status post-renovation to command premium prices</li>
                      <li>Protect investment by catching problems during the first 30 days of ownership</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Typical Cost Comparison: Early Detection vs. Discovery After Purchase</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/30">
                <h3 className="font-bold text-lg mb-4 text-destructive">Without Early Detection</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Professional mold testing</span><span className="font-semibold">$800</span></li>
                  <li className="flex justify-between"><span>Basement remediation</span><span className="font-semibold">$12,000</span></li>
                  <li className="flex justify-between"><span>HVAC system cleaning</span><span className="font-semibold">$3,500</span></li>
                  <li className="flex justify-between"><span>Drywall replacement</span><span className="font-semibold">$8,000</span></li>
                  <li className="flex justify-between"><span>Temporary housing (2 months)</span><span className="font-semibold">$6,000</span></li>
                  <li className="border-t border-border pt-2 flex justify-between font-bold text-foreground"><span>Total Cost</span><span className="text-destructive">$30,300</span></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">Plus: Property value loss, health impacts, insurance issues</p>
              </Card>

              <Card className="p-6 border-primary/30">
                <h3 className="font-bold text-lg mb-4 text-primary">With AirLytiq Pre-Purchase Screening</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>AirLytiq 48-hour screening</span><span className="font-semibold">$400</span></li>
                  <li className="flex justify-between"><span>Mold detected before purchase</span><span className="font-semibold">✓</span></li>
                  <li className="flex justify-between"><span><strong>Option 1:</strong> Walk away from problematic property</span><span className="font-semibold">$0</span></li>
                  <li className="flex justify-between"><span><strong>Option 2:</strong> Negotiate $30,000 price reduction</span><span className="font-semibold">-$30,000</span></li>
                  <li className="flex justify-between"><span><strong>Option 3:</strong> Require seller remediation before closing</span><span className="font-semibold">$0</span></li>
                  <li className="border-t border-border pt-2 flex justify-between font-bold text-foreground"><span>Your Cost</span><span className="text-primary">$400</span></li>
                </ul>
                <p className="text-xs text-primary mt-4 font-semibold">Potential savings: $29,900+ plus avoided health impacts</p>
              </Card>
            </div>
          </section>

          <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Protect Your Home Purchase with AirLytiq</h2>
            <p className="text-muted-foreground mb-4">
              Are you buying an older home? Concerned about hidden mold? AirLytiq is offering pre-purchase screening services and 
              working with real estate agents to validate our VOC detection technology in residential applications. Our screening 
              could help you make informed decisions, negotiate better terms, or avoid costly surprises after closing.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/configurator">Request Pre-Purchase Screening</Link>
            </Button>
          </Card>

          <DisclaimerFooter />

          {/* Newsletter Signup */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>

          {/* Related Articles Section */}
          <div className="mt-12">
            <RelatedArticles currentPostId="mold-detection" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default MoldDetection;
