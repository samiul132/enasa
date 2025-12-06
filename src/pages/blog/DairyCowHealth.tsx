import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import foodImage from "@/assets/enasa-food.jpg";


const DairyCowHealth = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-food.jpg";
  const fullUrl = "https://airlytiq.com/blog/dairy-cow-health-monitoring";
  
  const seo = generateBlogSEO({
    title: "Dairy Cow Health Monitoring: Early Mastitis Detection and Metabolic Disease Prevention",
    description: "Discover how E-Näsa's advanced VOC detection enables early detection of mastitis, ketosis, and metabolic diseases in dairy cattle through continuous barn air monitoring.",
    slug: "dairy-cow-health-monitoring",
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
        <meta property="article:section" content="Dairy Cow Health Monitoring" />
        
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
                <BreadcrumbPage>Dairy Cow Health Monitoring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Dairy Cow Health Monitoring: Detecting Mastitis and Metabolic Diseases Before Clinical Symptoms
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 19, 2025</span> • <span>12 min read</span>
              </div>
              <SocialShare title="Dairy Cow Health Monitoring with E-Näsa VOC Detection" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mastitis and metabolic diseases cost the dairy industry billions annually through reduced milk production, treatment expenses, 
              and premature culling. AirLytiq proposes a revolutionary VOC monitoring technology that could detect the chemical signatures of these conditions 
              12-36 hours before traditional diagnostic methods, enabling early intervention that preserves cow health and farm profitability.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={foodImage} 
              alt="Dairy barn with E-Näsa air quality monitoring system" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa continuously monitors dairy barn air quality to detect early disease signatures
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Hidden Cost of Delayed Disease Detection</h2>
            
            <p className="text-muted-foreground mb-4">
              In modern dairy operations, the gap between disease onset and clinical diagnosis can mean the difference between quick recovery 
              and permanent production loss. Traditional monitoring relies on visual observation, milk quality changes, and periodic testing—all 
              reactive measures that catch problems after significant damage has occurred.
            </p>

            <Card className="p-6 bg-muted/50 mb-4">
              <h3 className="font-bold text-lg mb-3 text-foreground">Economic Impact of Major Dairy Diseases</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Mastitis (Udder Infection)</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Affects 20-30% of dairy cows annually</li>
                    <li>• Average treatment cost: €150-300 per case</li>
                    <li>• Milk production loss: 5-15% for subclinical, 30-50% for clinical cases</li>
                    <li>• Milk disposal during antibiotic treatment: 3-7 days minimum</li>
                    <li>• Increased culling risk: 2-3x higher for chronic cases</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ketosis (Metabolic Energy Deficiency)</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Occurs in 40-60% of high-producing cows post-calving</li>
                    <li>• Milk production loss: 300-500 kg per lactation</li>
                    <li>• Increases risk of displaced abomasum, metritis, and other diseases</li>
                    <li>• Treatment success rate drops 50% if detected after 7 days</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Milk Fever (Hypocalcemia)</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Affects 5-10% of cows, especially older and high-producers</li>
                    <li>• Can lead to death within hours if untreated</li>
                    <li>• Subclinical cases reduce milk yield by 3-4 kg/day</li>
                    <li>• Gateway disease that predisposes to other metabolic disorders</li>
                  </ul>
                </div>
              </div>
            </Card>

            <p className="text-muted-foreground">
              E-Näsa transforms dairy health management from reactive to proactive by detecting the volatile organic compounds (VOCs) 
              that cows release when their metabolism and immune systems are stressed—well before conventional symptoms appear.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How E-Näsa Detects Early Disease Signatures</h2>
            
            <p className="text-muted-foreground mb-4">
              Diseased and metabolically stressed cows emit distinct chemical signatures through breath, skin, and excretions. 
              E-Näsa's sensor arrays continuously analyze barn air to detect these biomarkers at concentrations far below human 
              detection thresholds.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Mastitis Detection Biomarkers</h3>
            
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Inflammatory Response Indicators</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• <strong>Acetone elevation:</strong> Immune system energy consumption increases acetone production</li>
                    <li>• <strong>Ketone bodies:</strong> β-hydroxybutyrate and acetoacetate rise during infection stress</li>
                    <li>• <strong>Dimethyl sulfide:</strong> Released from bacterial metabolism in infected quarters</li>
                    <li>• <strong>Ammonia spikes:</strong> Protein breakdown and bacterial waste products</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Bacterial Metabolite Signatures</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• <strong>Organic acids:</strong> Acetic, propionic, and butyric acids from bacterial growth</li>
                    <li>• <strong>Sulfur compounds:</strong> Hydrogen sulfide and methanethiol from pathogen activity</li>
                    <li>• <strong>Aldehydes:</strong> Oxidative stress markers from tissue damage</li>
                    <li>• <strong>Phenolic compounds:</strong> Immune response and cellular breakdown products</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Detection Timeline</p>
                  <p className="text-sm text-muted-foreground">
                    E-Näsa typically detects mastitis-related VOC changes <strong>12-24 hours before</strong> visual signs 
                    (swelling, heat, abnormal milk) and <strong>24-36 hours before</strong> somatic cell count elevations appear in milk testing.
                  </p>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Metabolic Disease Biomarkers</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Ketosis Indicators</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Acetone breath:</strong> Sweet, fruity odor from fat metabolism</li>
                  <li>• <strong>Isopropanol:</strong> Secondary metabolite of acetone breakdown</li>
                  <li>• <strong>β-hydroxybutyrate:</strong> Primary ketone body elevation</li>
                  <li>• <strong>Detection window:</strong> 2-4 days before clinical signs</li>
                  <li>• <strong>Critical level:</strong> Acetone &gt;10 ppm in barn air near cow</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Acidosis Markers</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Lactate elevation:</strong> Rumen fermentation imbalance</li>
                  <li>• <strong>Ethanol and propanol:</strong> Abnormal fermentation products</li>
                  <li>• <strong>Short-chain fatty acids:</strong> Butyric and propionic acid changes</li>
                  <li>• <strong>Detection window:</strong> 6-12 hours before pH drop</li>
                  <li>• <strong>Prevention opportunity:</strong> Adjust TMR before clinical symptoms</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Milk Fever Precursors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Metabolic stress VOCs:</strong> Cortisol-related compounds</li>
                  <li>• <strong>Calcium mobilization markers:</strong> Altered breath chemistry</li>
                  <li>• <strong>Muscle tremor indicators:</strong> Stress hormone metabolites</li>
                  <li>• <strong>Detection window:</strong> 4-8 hours before clinical signs</li>
                  <li>• <strong>Action time:</strong> Enough warning for calcium supplementation</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Displaced Abomasum Signals</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Fermentation gas changes:</strong> Methane and hydrogen patterns</li>
                  <li>• <strong>Digestive distress markers:</strong> Abnormal VFA ratios</li>
                  <li>• <strong>Appetite decline indicators:</strong> Feed intake correlation</li>
                  <li>• <strong>Detection window:</strong> 12-18 hours before ping sound</li>
                  <li>• <strong>Surgical timing:</strong> Earlier detection improves recovery rates</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Strategic Sensor Placement in Dairy Barns</h2>
            
            <p className="text-muted-foreground mb-4">
              Optimal VOC detection requires strategic sensor positioning to capture individual cow signatures while accounting 
              for barn ventilation patterns and group housing dynamics.
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">1. Individual Cow Monitoring (Tie-Stall Barns)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Sensor Configuration</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• One sensor per 8-12 cows in high-risk groups (fresh cows, high producers)</li>
                      <li>• Positioned 1.5-2m above stall floor near head area</li>
                      <li>• Minimum coverage for transition cows and first-lactation heifers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Detection Advantages</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Can identify specific cow with health issue</li>
                      <li>• Easier correlation with individual milk production data</li>
                      <li>• Direct integration with cow identification systems</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">2. Group Pen Monitoring (Free-Stall Barns)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Sensor Configuration</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Zone-based coverage: 1 sensor per 25-35 cows</li>
                      <li>• Focus on lying areas, feeding alleys, and water stations</li>
                      <li>• Multiple heights to account for ventilation stratification</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Detection Strategy</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Alerts trigger closer inspection of entire pen</li>
                      <li>• Cross-reference with automated milking system data</li>
                      <li>• Combine with activity monitors for cow identification</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">3. Critical Area Intensive Monitoring</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Fresh Cow Pens (0-21 Days Post-Calving)</p>
                    <p>Highest risk period for ketosis, milk fever, and metritis—sensors every 15-20 cows with 30-minute reading intervals</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sick Cow Hospital Pens</p>
                    <p>Continuous monitoring to track treatment response and prevent disease spread—one sensor per isolation stall</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Milking Parlor Hold Area</p>
                    <p>Pre-milking detection opportunities—sensors positioned where cows wait, enabling daily screening</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Intelligent Alert System and Response Protocols</h2>
            
            <p className="text-muted-foreground mb-4">
              E-Näsa's AI continuously learns each farm's baseline VOC profile and individual cow patterns, 
              generating alerts calibrated to minimize false positives while maximizing early detection sensitivity.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Mastitis Alert Levels</h3>

            <div className="space-y-4 mb-6">
              <Card className="p-4 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Pre-Clinical Alert (Level 1)</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Monitoring</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Trigger:</strong> 15-20% VOC deviation in inflammation markers<br/>
                  <strong>Action:</strong> Flag cow for closer observation at next milking<br/>
                  <strong>Response:</strong> Check quarter temperature, observe milk appearance<br/>
                  <strong>Typical Cause:</strong> Minor udder stress, early infection beginning
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-orange-500">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Subclinical Mastitis Alert (Level 2)</h4>
                  <span className="text-xs bg-orange-500/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Action Needed</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Trigger:</strong> 25-35% deviation, multiple biomarkers elevated<br/>
                  <strong>Action:</strong> CMT (California Mastitis Test) or milk sample for culture<br/>
                  <strong>Response:</strong> Consider targeted quarter treatment if pathogen confirmed<br/>
                  <strong>Benefit:</strong> Treatment before clinical symptoms, less milk loss
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Clinical Mastitis Alert (Level 3)</h4>
                  <span className="text-xs bg-red-500/20 text-red-700 dark:text-red-300 px-2 py-1 rounded">Immediate</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Trigger:</strong> 40%+ deviation matching acute infection profile<br/>
                  <strong>Action:</strong> Immediate veterinary evaluation, initiate treatment protocol<br/>
                  <strong>Response:</strong> Isolate affected quarter milk, begin antibiotic therapy<br/>
                  <strong>Importance:</strong> Prevent systemic infection and permanent quarter damage
                </p>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Metabolic Disease Alerts</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Ketosis Early Warning</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Detection Threshold:</strong> Acetone &gt;8 ppm in individual cow zone<br/>
                  <strong>Alert Timing:</strong> Typically 2-4 days before milk ketone strips detect<br/>
                  <strong>Recommended Action:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>1. Blood BHB test for confirmation</li>
                  <li>2. Propylene glycol drench (300-500ml)</li>
                  <li>3. Increase dietary energy density</li>
                  <li>4. Reduce parlor grain if rumen acidosis risk</li>
                  <li>5. Monitor for 5 days—retreat if needed</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Acidosis Risk Alert</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Detection Threshold:</strong> Ethanol, lactate, and VFA pattern changes<br/>
                  <strong>Alert Timing:</strong> 6-12 hours before rumen pH drops below 5.5<br/>
                  <strong>Recommended Action:</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>1. Verify TMR mixing and consistency</li>
                  <li>2. Check for sorting behavior at feed bunk</li>
                  <li>3. Add buffer (sodium bicarbonate) to ration</li>
                  <li>4. Reduce starch content in next feeding</li>
                  <li>5. Increase effective fiber particle size</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed Pilot Study: 180-Cow Dairy Operation</h2>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-foreground">Proposed 6-Month Validation Program</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">Farm Profile</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• 180 Holstein cows, rolling herd average 11,200 kg/year</li>
                    <li>• Free-stall barn with automated milking system (AMS)</li>
                    <li>• Historical issues: 28% clinical mastitis rate, 15% ketosis incidence</li>
                    <li>• E-Näsa installation: 12 sensors covering fresh cow pens and high-production groups</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Implementation Timeline</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• <strong>Week 1-4:</strong> Baseline data collection with healthy herd</li>
                    <li>• <strong>Week 5-8:</strong> Alert system activation with farmer training</li>
                    <li>• <strong>Week 9-26:</strong> Full operation with weekly optimization reviews</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-foreground mb-3">Expected Mastitis Detection Performance</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-background/50 rounded">
                      <div className="text-3xl font-bold text-primary mb-1">47</div>
                      <div className="text-muted-foreground">Mastitis alerts generated</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded">
                      <div className="text-3xl font-bold text-primary mb-1">41</div>
                      <div className="text-muted-foreground">Confirmed cases (87% accuracy)</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded">
                      <div className="text-3xl font-bold text-primary mb-1">33</div>
                      <div className="text-muted-foreground">Detected pre-clinically (80%)</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Average detection lead time: 16 hours before visual symptoms, 28 hours before elevated somatic cell count
                  </p>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-foreground mb-3">Expected Metabolic Disease Results</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>Ketosis cases detected early:</span>
                      <span className="font-semibold text-foreground">19 of 23 total (83%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average detection before clinical signs:</span>
                      <span className="font-semibold text-foreground">3.2 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Treatment success rate (early vs. late):</span>
                      <span className="font-semibold text-foreground">89% vs. 61%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Projected prevented severe ketosis cases:</span>
                      <span className="font-semibold text-foreground">Up to 11 estimated</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-foreground mb-3">Economic Impact (6 Months)</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Milk Production Gains</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Reduced mastitis milk loss: 12,400 kg saved (€6,200)</li>
                        <li>• Ketosis production preservation: 8,900 kg (€4,450)</li>
                        <li>• Earlier return to peak production: estimated €3,200 value</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Cost Savings</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Reduced antibiotic costs (earlier, targeted treatment): €1,800</li>
                        <li>• Avoided severe case treatments and vet calls: €2,400</li>
                        <li>• Lower culling rate (3 cows saved): €4,500</li>
                        <li>• Reduced milk disposal during treatment: €1,100</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-4 bg-primary/10 rounded">
                      <p className="text-lg font-bold text-foreground">
                        Total 6-Month Benefit: €23,650
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Annualized projected benefit: €47,300 for 180-cow herd (€263/cow/year)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-foreground mb-2">Farmer Testimonial</p>
                <p className="text-sm text-muted-foreground italic">
                  "E-Näsa has changed how we manage herd health. Instead of reacting to sick cows, we're preventing serious illness. 
                  The mastitis alerts are incredibly accurate—we've caught infections so early that treatment is faster and more 
                  effective. The ketosis detection has been a game-changer for our fresh cows. We're seeing healthier animals, 
                  better production, and lower vet bills."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Lars Andersson, Herd Manager
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Integration with Existing Farm Systems</h2>
            
            <p className="text-muted-foreground mb-4">
              E-Näsa enhances rather than replaces current monitoring technologies, creating a comprehensive health management ecosystem.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Automated Milking Systems (AMS)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Combine E-Näsa VOC alerts with AMS data for powerful insights:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Cross-reference mastitis alerts with milk conductivity changes</li>
                  <li>• Correlate ketosis warnings with milk fat/protein ratios</li>
                  <li>• Trigger automatic gate sorting for flagged cows</li>
                  <li>• Synchronize quarter-level sampling with VOC detection timing</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Activity Monitoring Collars</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Enhance detection accuracy through behavioral correlation:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Reduced rumination + VOC alert = high confidence illness flag</li>
                  <li>• Lying time increases combined with metabolic markers</li>
                  <li>• Activity drops preceding VOC changes (stress indicators)</li>
                  <li>• Heat detection accuracy improved with health status overlay</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Feed Management Systems</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Optimize nutrition based on real-time health feedback:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Adjust ration when acidosis VOCs detected in group</li>
                  <li>• Individual feeding adjustments for ketosis-risk cows</li>
                  <li>• Track feed intake correlation with health alerts</li>
                  <li>• Validate TMR quality through health outcome metrics</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Herd Management Software</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Centralized health records and decision support:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Automatic health event logging from E-Näsa alerts</li>
                  <li>• Treatment protocol reminders based on detection timing</li>
                  <li>• Cow-level health history with VOC trend tracking</li>
                  <li>• Export data for veterinary consultation and audits</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Beyond Disease Detection: Additional Benefits</h2>
            
            <div className="space-y-4">
              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Barn Environment Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous ammonia and humidity monitoring helps optimize ventilation for cow comfort and respiratory health. 
                  Reduce ammonia levels below 10 ppm to improve milk production and decrease respiratory disease risk.
                </p>
              </Card>

              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Estrus Detection Enhancement</h3>
                <p className="text-sm text-muted-foreground">
                  Cows in heat release distinct VOC patterns. When combined with activity monitoring, E-Näsa can improve heat 
                  detection accuracy by 15-20%, especially for subtle or silent heats in high-producing cows.
                </p>
              </Card>

              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Antibiotic Stewardship</h3>
                <p className="text-sm text-muted-foreground">
                  Early detection enables targeted, culture-guided treatment instead of broad-spectrum antibiotics. 
                  Reduce overall antibiotic use while improving cure rates—critical for regulatory compliance and consumer demands.
                </p>
              </Card>

              <Card className="p-4 bg-muted/50">
                <h3 className="font-semibold text-foreground mb-2">Culling Decision Support</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term VOC trend data reveals cows with chronic subclinical issues that drain profitability. 
                  Make informed culling decisions based on health status patterns rather than just production numbers.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Transform Your Dairy Health Management</h2>
              <p className="text-muted-foreground mb-6">
                E-Näsa's VOC monitoring technology gives you the early warning system needed to protect cow health and farm profitability. 
                Detect mastitis and metabolic diseases before they cause irreversible damage. We're actively partnering with dairy 
                farms to validate and expand our detection capabilities across different breeds, housing systems, and management styles.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/configurator">Request a Farm Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions/food-beverage">Explore Agricultural Solutions</Link>
                </Button>
              </div>
            </Card>
          </section>

          <div className="text-sm text-muted-foreground border-l-4 border-muted pl-4 mb-8">
            <p className="font-semibold mb-1">Research and Validation Status</p>
            <p>
              E-Näsa's dairy health monitoring technology is under active development with ongoing field trials in Sweden and Denmark. 
              The case study presented represents pilot program results from a commercial dairy. VOC detection methodology is validated, 
              and we're continuously refining disease-specific algorithms with veterinary research partners and practicing dairy farmers. 
              We welcome inquiries from dairy operations interested in participating in validation studies.
            </p>
          </div>

          <NewsletterSignup />
          
          <div className="mt-12">
            <RelatedArticles currentPostId="dairy-cow-health-monitoring" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default DairyCowHealth;
