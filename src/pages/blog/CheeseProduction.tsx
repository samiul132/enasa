import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, AlertTriangle, Wind, Droplets, ThermometerSnowflake, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import NewsletterSignup from "@/components/NewsletterSignup";
import { DisclaimerFooter } from "@/components/DisclaimerFooter";
import foodImage from "@/assets/enasa-food.jpg";
import { generateBlogSEO } from "@/lib/seo";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const CheeseProduction = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-food.jpg";
  const fullUrl = "https://airlytiq.com/blog/cheese-production";
  
  const seo = generateBlogSEO({
    title: "Cheese Production Monitoring: Culture Health & Cave Air Quality | AirLytiq ENäsa",
    description: "Discover how E-Näsa's VOC detection technology optimizes cheese production through starter culture monitoring, contamination prevention, and aging cave air quality management for artisan and industrial cheesemakers.",
    slug: "cheese-production",
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
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4">Food & Beverage</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Cheese Production Monitoring: Perfecting Quality from Culture to Cave
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <time dateTime="2025-11-16">November 16, 2025</time>
              <span>•</span>
              <span>11 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <img 
            src={foodImage} 
            alt="E-Näsa VOC detection system monitoring cheese production facility and aging caves"
            className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-lg"
          />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Cheese production is a delicate balance of microbiology, chemistry, and environmental control. From 
                the moment starter cultures are activated to the final days of cave aging, countless volatile organic 
                compounds tell the story of cheese development—or warn of potential problems before they become visible.
              </p>
              
              <p className="mb-6">
                Traditional cheesemaking relies heavily on sensory evaluation, periodic sampling, and the experienced 
                nose of the cheesemaker. While these skills remain invaluable, AirLytiq proposes that real-time VOC monitoring could add 
                a layer of precision and early warning that can prevent costly losses and ensure consistent quality 
                across every batch.
              </p>

              <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Cheesemaker's Challenge</h3>
                    <p className="text-sm text-muted-foreground">
                      A single contaminated batch can cost €20,000-50,000 in lost product. Aging caves must maintain 
                      precise humidity and air quality for months. Starter cultures must perform consistently day after 
                      day. E-Näsa monitors all these critical parameters through continuous VOC analysis, providing 
                      early warnings and quality assurance throughout the entire production process.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Starter Culture Monitoring Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Starter Culture Health & Activity Monitoring
              </h2>
              
              <p className="mb-6">
                Starter cultures are the foundation of cheese production. Whether using traditional mesophilic cultures 
                for cheddar or thermophilic strains for mozzarella, culture health directly impacts acidification rates, 
                flavor development, and final product quality.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Healthy Culture Indicators
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Lactic acid:</strong> Steady production at expected rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Diacetyl:</strong> Controlled levels for flavor development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>CO₂:</strong> Indicates active metabolism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Acetoin:</strong> Precursor to butter flavor compounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Ethanol:</strong> Low levels from culture activity</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-destructive/50 bg-destructive/5">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Culture Stress Warnings
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Reduced CO₂:</strong> Weak or inactive culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Ammonia:</strong> Protein breakdown from contamination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Hydrogen sulfide:</strong> Bacterial contamination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Butyric acid:</strong> Clostridium contamination risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Elevated ethanol:</strong> Yeast contamination</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 mb-6">
                <h3 className="text-2xl font-bold mb-4">Real-Time Culture Performance Tracking</h3>
                <p className="text-sm mb-4">
                  E-Näsa monitors culture activity from the moment milk is inoculated, providing continuous feedback 
                  on acidification progress and metabolic health.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">15-20 min</div>
                    <div className="text-sm text-muted-foreground">Projected earlier detection of culture issues vs. pH testing</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
                    <div className="text-sm text-muted-foreground">Target batch consistency with culture monitoring</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">€45K</div>
                    <div className="text-sm text-muted-foreground">Projected annual savings from prevented culture failures</div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-2 text-muted-foreground">Example Alert:</div>
                  <div className="text-sm font-semibold text-destructive mb-2">
                    "Vat 3: CO₂ production 55% below expected rate at 60 minutes post-inoculation. Culture may be weak or temperature incorrect."
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Action taken: Temperature verified (correct), fresh culture batch used, production saved. Root cause 
                    analysis revealed previous batch had been stored incorrectly, leading to improved culture handling protocols.
                  </div>
                </div>
              </Card>
            </section>

            {/* Contamination Detection Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Early Contamination Detection in Production
              </h2>

              <p className="mb-6">
                Cheese production environments are inherently challenging for contamination control. High humidity, 
                protein-rich substrates, and long production times create ideal conditions for unwanted microorganisms. 
                E-Näsa detects contamination 8-12 hours before traditional methods.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6 border-destructive/30">
                  <h3 className="font-bold text-lg mb-4 text-destructive">Clostridium Detection (Late Blowing Defect)</h3>
                  <p className="text-sm mb-4">
                    Clostridium bacteria cause "late blowing"—gas production during aging that creates unwanted holes 
                    and off-flavors in hard cheeses. This defect can appear weeks or months after production, potentially 
                    affecting entire aging batches.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">VOC Indicators:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Butyric acid: &gt;0.02 ppm</li>
                        <li>• Hydrogen gas: Elevated levels</li>
                        <li>• Propionic acid: Abnormal patterns</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">Detection Window:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Alert time: During curd formation</li>
                        <li>• vs. Visual defects: 2-8 weeks earlier</li>
                        <li>• Action: Reject batch or pasteurize</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive/30">
                  <h3 className="font-bold text-lg mb-4 text-destructive">Coliform Contamination</h3>
                  <p className="text-sm mb-4">
                    Coliform bacteria produce gas and off-flavors during aging, causing early blowing defects and 
                    potential food safety issues.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">VOC Indicators:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Acetic acid: Elevated early</li>
                        <li>• Mixed acids: Abnormal profile</li>
                        <li>• Sulfur compounds: Present</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">Detection Window:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Alert time: 4-6 hours post-production</li>
                        <li>• vs. Traditional: 18-24 hours earlier</li>
                        <li>• Action: Isolate, test, potential salvage</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive/30">
                  <h3 className="font-bold text-lg mb-4 text-destructive">Yeast & Mold Contamination</h3>
                  <p className="text-sm mb-4">
                    While some molds are intentional (blue cheese, bloomy rinds), unwanted yeast and mold growth 
                    can destroy batches and create food safety hazards.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">VOC Indicators:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Ethanol: Unexpected elevation</li>
                        <li>• Esters: Fruity off-odors</li>
                        <li>• 1-Octen-3-ol: Mushroom odor</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/5 p-4 rounded">
                      <div className="font-semibold mb-2 text-sm">Detection Window:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Alert time: 6-10 hours</li>
                        <li>• vs. Visual: 2-4 days earlier</li>
                        <li>• Action: Enhanced sanitation, batch review</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="text-xl font-bold mb-4">Proposed Pilot Study: Artisan Cheese Producer</h3>
                <p className="text-sm mb-4">
                  AirLytiq proposes to validate E-Näsa technology at a 500-ton annual production facility that experiences recurring late blowing defects affecting 5-8% of 
                  their Emmental production—representing €120,000-180,000 in annual losses that could potentially be prevented.
                </p>
                <div className="bg-background/70 p-4 rounded-lg mb-4">
                  <div className="font-semibold mb-2">Proposed Implementation:</div>
                  <ul className="text-sm space-y-1">
                    <li>• E-Näsa sensors installed in curd vats and press rooms</li>
                    <li>• Real-time monitoring of butyric acid and hydrogen</li>
                    <li>• Automated alerts to quality control team</li>
                  </ul>
                </div>
                <div className="bg-background/70 p-4 rounded-lg">
                  <div className="font-semibold mb-2">Expected Results (12-month validation):</div>
                  <ul className="text-sm space-y-1">
                    <li>• Projected late blowing defects reduced to 0.3% (94% reduction)</li>
                    <li>• Estimated 47 batches identified early and salvaged through process adjustments</li>
                    <li>• Potential €156,000 in prevented losses</li>
                    <li>• Expected ROI achieved in 7 months</li>
                  </ul>
                </div>
              </Card>
            </section>

            {/* Aging Cave Management Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Wind className="h-8 w-8 text-primary" />
                Aging Cave Air Quality Management
              </h2>

              <p className="mb-6">
                Cave aging is where cheese develops its final character, but it's also where environmental factors 
                can make or break months of work. Humidity, temperature, and microbial balance must be perfect—and 
                traditional monitoring misses critical early warning signs.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Critical Cave Parameters</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Beneficial Compounds</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span><strong>Ammonia (controlled):</strong> 5-15 ppm for bloomy rinds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span><strong>Sulfur compounds:</strong> Washed-rind character development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span><strong>Esters:</strong> Fruity notes in aged cheeses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span><strong>Moisture:</strong> 85-95% RH depending on cheese type</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Problem Indicators</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                          <span><strong>Ammonia (excessive):</strong> &gt;25 ppm indicates over-ripening</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                          <span><strong>Butyric acid:</strong> Late contamination in aging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                          <span><strong>Acetic acid spikes:</strong> Unwanted bacterial growth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                          <span><strong>Geosmin:</strong> Earthy off-flavors from mold</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <ThermometerSnowflake className="h-5 w-5 text-primary" />
                    Cave Zoning & Microclimate Control
                  </h3>
                  <p className="text-sm mb-4">
                    Different cheese types require different aging environments. E-Näsa enables precise microclimate 
                    management by monitoring VOC profiles in each cave zone.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="font-semibold mb-2 text-sm">Bloomy Rind Cave</div>
                      <div className="text-xs space-y-1">
                        <div>• Temperature: 10-12°C</div>
                        <div>• RH: 90-95%</div>
                        <div>• Ammonia: 8-15 ppm</div>
                        <div>• Aging: 2-4 weeks</div>
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="font-semibold mb-2 text-sm">Hard Cheese Cave</div>
                      <div className="text-xs space-y-1">
                        <div>• Temperature: 12-15°C</div>
                        <div>• RH: 85-90%</div>
                        <div>• Low VOC levels</div>
                        <div>• Aging: 6-24+ months</div>
                      </div>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="font-semibold mb-2 text-sm">Washed Rind Cave</div>
                      <div className="text-xs space-y-1">
                        <div>• Temperature: 12-14°C</div>
                        <div>• RH: 92-98%</div>
                        <div>• Sulfur compounds: controlled</div>
                        <div>• Aging: 4-12 weeks</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-bold text-lg mb-3">Automated Cave Management</h3>
                  <p className="text-sm mb-4">
                    E-Näsa integrates with HVAC and humidification systems to maintain optimal conditions automatically:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Ventilation control:</strong> Adjust fresh air intake based on ammonia and CO₂ levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Humidity management:</strong> Fine-tune based on microbial activity markers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Contamination alerts:</strong> Early warning when unwanted organisms detected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Ripeness indicators:</strong> Optimize aging time based on VOC development</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Flavor Development Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Flavor Profile Development & Consistency</h2>

              <p className="mb-6">
                The holy grail of artisan cheesemaking is consistent flavor development batch after batch. E-Näsa 
                creates detailed "flavor fingerprints" that allow cheesemakers to reproduce award-winning batches 
                with scientific precision.
              </p>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 mb-6">
                <h3 className="text-xl font-bold mb-4">VOC-Based Flavor Profiling</h3>
                <p className="text-sm mb-4">
                  Each cheese style has a characteristic VOC signature that correlates with sensory properties. 
                  E-Näsa tracks these signatures throughout aging:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-background/70 p-4 rounded-lg">
                    <div className="font-semibold mb-3 text-sm">Cheddar Profile Example</div>
                    <div className="text-xs space-y-2 font-mono">
                      <div className="flex justify-between">
                        <span>Lactic acid:</span>
                        <span className="text-primary">High, stable</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Diacetyl:</span>
                        <span className="text-primary">0.5-2.0 ppm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Free fatty acids:</span>
                        <span className="text-primary">Increases with age</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sulfur compounds:</span>
                        <span className="text-primary">Low, controlled</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/70 p-4 rounded-lg">
                    <div className="font-semibold mb-3 text-sm">Blue Cheese Profile Example</div>
                    <div className="text-xs space-y-2 font-mono">
                      <div className="flex justify-between">
                        <span>2-Heptanone:</span>
                        <span className="text-primary">15-40 ppm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2-Pentanone:</span>
                        <span className="text-primary">5-15 ppm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Free fatty acids:</span>
                        <span className="text-primary">Very high</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Methyl ketones:</span>
                        <span className="text-primary">Strong signature</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background/70 p-4 rounded-lg">
                  <div className="font-semibold mb-2 text-sm">Application:</div>
                  <p className="text-xs">
                    When a batch's VOC profile matches the target fingerprint within 95% accuracy, the cheese is 
                    ready for packaging—no guesswork, no over-aging, no under-development. This precision increases 
                    product consistency while optimizing cave space utilization.
                  </p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-bold mb-3">Batch Comparison</h3>
                  <p className="text-sm mb-3">
                    Compare VOC profiles across batches to identify variations in process or raw materials that 
                    affect final flavor.
                  </p>
                  <div className="text-xs bg-background/50 p-3 rounded">
                    <strong>Example:</strong> Seasonal variation in milk composition detected through altered ester 
                    profiles, allowing adjustment of aging time to compensate.
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-3">Ripeness Optimization</h3>
                  <p className="text-sm mb-3">
                    Determine optimal aging time for each batch based on VOC development rather than fixed time periods.
                  </p>
                  <div className="text-xs bg-background/50 p-3 rounded">
                    <strong>Result:</strong> 12-15% improvement in cave utilization by removing cheese at peak 
                    ripeness rather than following standard aging schedules.
                  </div>
                </Card>
              </div>
            </section>

            {/* Technical Implementation Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Implementation for Cheese Production</h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Recommended Sensor Placement</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="font-semibold mb-3 text-primary">Production Areas:</div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Culture rooms:</strong> Monitor culture vitality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Curd vats:</strong> Track acidification and contamination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Press rooms:</strong> Early contamination detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Brine tanks:</strong> Monitor bacterial activity</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-3 text-primary">Aging Areas:</div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Cave zones:</strong> One sensor per microclimate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Shelf levels:</strong> Top, middle, bottom monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Air circulation points:</strong> Intake and exhaust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span><strong>Critical batches:</strong> Dedicated monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Integration & Automation</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Process control integration:</strong> Connect to vat controllers, HVAC, and humidification systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Quality management systems:</strong> Automatic documentation and batch tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Alert protocols:</strong> Multi-tier notifications based on severity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Analytics platform:</strong> Historical trending and predictive quality modeling</span>
                    </li>
                  </ul>
                </Card>

              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Perfecting the Art and Science of Cheesemaking</h2>

              <p className="mb-6">
                Cheesemaking has always been a blend of tradition, intuition, and scientific precision. E-Näsa 
                doesn't replace the cheesemaker's skill—it amplifies it by providing continuous, objective feedback 
                on the molecular processes that create great cheese.
              </p>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="text-xl font-bold mb-4">Transform Your Cheese Production</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Quality Assurance</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>→ 8-12 hours earlier contamination detection</li>
                      <li>→ 98%+ batch consistency</li>
                      <li>→ Precise flavor profiling</li>
                      <li>→ Reduced sensory testing needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Production Efficiency</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>→ Optimized aging times</li>
                      <li>→ 12-15% better cave utilization</li>
                      <li>→ 85-95% reduction in late defects</li>
                      <li>→ Automated quality documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Risk Mitigation</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>→ Early culture failure detection</li>
                      <li>→ Cave environment protection</li>
                      <li>→ Contamination source tracking</li>
                      <li>→ Regulatory compliance support</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-4">Elevate Your Cheesemaking</h2>
                <p className="mb-6 text-primary-foreground/90">
                  Whether you're an artisan cheesemaker perfecting traditional recipes or a production facility 
                  ensuring consistency at scale, E-Näsa provides the real-time insights you need to create 
                  exceptional cheese, every time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/products">Explore E-Näsa Systems</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    <Link to="/solutions/food-beverage">Food & Beverage Solutions</Link>
                  </Button>
                </div>
              </Card>
            </section>

            <DisclaimerFooter />

            {/* Social Share */}
            <SocialShare 
              title="Cheese Production Monitoring with E-Näsa VOC Detection"
              url="https://enasa.se/blog/cheese-production"
            />
          </div>

          {/* Related Articles */}
          <RelatedArticles currentPostId="cheese-production" />
        </article>

        <Footer />
      </div>
    </>
  );
};

export default CheeseProduction;