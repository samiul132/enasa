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


const SeafoodFreshness = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-food.jpg";
  const fullUrl = "https://airlytiq.com/blog/seafood-freshness-monitoring";
  
  const seo = generateBlogSEO({
    title: "Seafood Freshness Monitoring: Real-Time Quality Detection with E-Näsa VOC Analysis | AirLytiq ENäsa",
    description: "How E-Näsa's VOC detection monitors seafood freshness through amine, H₂S, and NH₃ detection for cold-chain QA, fish docks, and laboratory quality control.",
    slug: "seafood-freshness-monitoring",
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
        <meta property="article:section" content="Seafood Freshness Monitoring" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content="Seafood Freshness Monitoring" />  {/* এটা add করুন */}
        
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
                <BreadcrumbPage>Seafood Freshness Monitoring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Seafood Freshness Monitoring: Detecting Spoilage Before It's Visible
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 20, 2025</span> • <span>11 min read</span>
              </div>
              <SocialShare title="Seafood Freshness Monitoring with E-Näsa VOC Detection" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seafood spoilage begins the moment fish leaves the water, with bacterial growth producing volatile compounds 
              long before visual or olfactory signs become apparent to human inspectors. AirLytiq proposes implementing advanced VOC detection 
              technology to identify key spoilage indicators—trimethylamine (TMA), dimethylamine (DMA), hydrogen sulfide (H₂S), 
              and ammonia (NH₃)—providing objective, real-time freshness assessment for cold-chain quality control, fish docks, 
              and laboratory analysis.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={foodImage} 
              alt="Seafood processing facility with E-Näsa freshness monitoring system" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa monitors seafood freshness through continuous VOC detection at critical quality control points
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge of Seafood Quality Assessment</h2>
            
            <p className="text-muted-foreground mb-4">
              The global seafood industry loses an estimated 35% of catch to spoilage, quality degradation, and rejection—representing 
              billions in annual losses. Traditional freshness assessment relies on subjective sensory evaluation, microbial plate counts 
              requiring 48+ hours, and chemical tests that provide only snapshot data.
            </p>

            <Card className="p-6 bg-muted/50 mb-4">
              <h3 className="font-bold text-lg mb-3 text-foreground">Current Quality Control Limitations</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Sensory Evaluation (Touch, Smell, Visual)</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Subjective and inspector-dependent variability</li>
                    <li>• Detects spoilage only after significant bacterial growth</li>
                    <li>• Cannot assess sealed packages without opening</li>
                    <li>• Ineffective for frozen products where appearance is preserved</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Microbial Plate Counts</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Results delayed 48-72 hours—too late for rapid distribution</li>
                    <li>• Destructive testing requiring sample removal</li>
                    <li>• Expensive laboratory processing for each batch</li>
                    <li>• Snapshot data that doesn't track degradation progression</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Total Volatile Basic Nitrogen (TVB-N) Testing</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Labor-intensive chemical analysis</li>
                    <li>• Single measurement doesn't capture real-time changes</li>
                    <li>• Thresholds vary by species, making standardization difficult</li>
                    <li>• Cannot be performed continuously during storage/transport</li>
                  </ul>
                </div>
              </div>
            </Card>

            <p className="text-muted-foreground">
              E-Näsa transforms seafood quality control from reactive spot-checking to continuous, objective monitoring—detecting 
              spoilage at the earliest chemical stages when corrective action can still preserve product value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Key Spoilage Biomarkers Detected by E-Näsa</h2>
            
            <p className="text-muted-foreground mb-4">
              As seafood degrades, bacterial enzymes break down proteins and amino acids, releasing characteristic volatile compounds. 
              E-Näsa's multi-sensor array specifically targets the primary indicators of seafood spoilage.
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Trimethylamine (TMA) - The Primary Spoilage Indicator</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Source and Formation</p>
                    <p>
                      TMA is produced when bacteria (particularly <em>Shewanella putrefaciens</em> and <em>Pseudomonas</em> species) 
                      enzymatically reduce trimethylamine oxide (TMAO)—a natural compound abundant in marine fish that helps them 
                      regulate osmotic pressure. Fresh fish contains minimal TMA, but levels rise exponentially during spoilage.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Characteristic Odor</p>
                    <p>
                      The classic "fishy" smell at concentrations as low as 1-2 ppm. E-Näsa detects TMA at 0.1 ppm—well before 
                      human sensory perception.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Freshness Correlation</p>
                    <ul className="ml-4 space-y-1">
                      <li>• <strong>Fresh (Grade A):</strong> &lt;1 mg TMA-N/100g tissue</li>
                      <li>• <strong>Acceptable (Grade B):</strong> 1-5 mg TMA-N/100g</li>
                      <li>• <strong>Borderline (Grade C):</strong> 5-10 mg TMA-N/100g</li>
                      <li>• <strong>Spoiled (Reject):</strong> &gt;10 mg TMA-N/100g</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Dimethylamine (DMA) - Secondary Degradation Marker</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Formation Pathway</p>
                    <p>
                      DMA forms from the enzymatic breakdown of TMAO by different bacterial species than those producing TMA, 
                      and also from formaldehyde reactions in frozen fish. The DMA/TMA ratio provides insights into storage 
                      history and freeze-thaw cycles.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Diagnostic Value</p>
                    <p>
                      Elevated DMA relative to TMA often indicates frozen storage followed by thawing. This helps identify 
                      seafood fraudulently sold as "fresh" when it was previously frozen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Hydrogen Sulfide (H₂S) - Protein Degradation Indicator</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Source</p>
                    <p>
                      H₂S is produced when bacteria break down sulfur-containing amino acids (cysteine, methionine). 
                      Particularly prominent in shellfish and crustaceans due to their higher sulfur amino acid content.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Characteristic Odor</p>
                    <p>
                      Rotten egg smell at very low concentrations. E-Näsa's electrochemical H₂S sensor detects levels 
                      as low as 0.05 ppm, providing early warning of anaerobic bacterial growth.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Critical for Shellfish</p>
                    <p>
                      Shrimp, crab, and lobster show H₂S elevation earlier than finfish, making it the primary freshness 
                      indicator for crustacean quality control.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ammonia (NH₃) - Deamination Product</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Formation</p>
                    <p>
                      Ammonia is released during bacterial deamination of amino acids and nucleotide breakdown. 
                      Levels increase steadily during spoilage, particularly in species with high free amino acid content.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Temperature Sensitivity</p>
                    <p>
                      Ammonia production accelerates dramatically above 4°C, making it an excellent indicator of 
                      cold-chain integrity failures. Unexpected NH₃ spikes signal temperature abuse even if product 
                      still appears fresh.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">E-Näsa Sensor Configuration for Seafood Monitoring</h2>
            
            <p className="text-muted-foreground mb-4">
              E-Näsa employs a multi-sensor approach optimized specifically for seafood volatile compound detection, 
              combining metal-oxide semiconductor (MOS) sensors with electrochemical cells for comprehensive coverage.
            </p>

            <Card className="p-6 bg-muted/50 mb-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Recommended Sensor Set for Seafood Applications</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Primary Sensors (Core Detection)</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Metal-Oxide Gas Sensor Array</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Multi-stage temperature scanning: 200°C → 320°C → 400°C → 250°C</li>
                        <li>• 20-second dwell time at each temperature for distinct VOC signatures</li>
                        <li>• Excellent sensitivity to amines (TMA, DMA) and sulfur compounds</li>
                        <li>• Generates unique fingerprint patterns for spoilage progression</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">EC-H₂S (Electrochemical Hydrogen Sulfide Sensor)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Detection range: 0.05 - 50 ppm with 0.01 ppm resolution</li>
                        <li>• Rapid response time: &lt;30 seconds to 90% reading</li>
                        <li>• Critical for shellfish and crustacean freshness assessment</li>
                        <li>• Minimal cross-sensitivity to other seafood volatiles</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">EC-NH₃ (Electrochemical Ammonia Sensor)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Detection range: 0.1 - 100 ppm</li>
                        <li>• Temperature compensation for accurate cold-storage readings</li>
                        <li>• Tracks deamination progression and protein breakdown</li>
                        <li>• Early warning of temperature abuse in cold chain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Optional Enhancement Sensor</h4>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">PID (Photoionization Detector)</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Broad-spectrum VOC detection for comprehensive spoilage profiling</li>
                      <li>• Detects aldehydes, ketones, and other oxidation products</li>
                      <li>• Useful for fatty fish species prone to lipid oxidation</li>
                      <li>• Adds additional data dimension for machine learning algorithms</li>
                      <li>• Recommended for research applications and method development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-primary/5 border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Sampling Protocol</h4>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Sampling Window:</strong> 5-10 minute measurement blocks</p>
                <p className="mb-2"><strong>Measurement Frequency:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Continuous monitoring: Every 15-30 minutes for refrigerated storage</li>
                  <li>• Quality check stations: On-demand testing during receiving/grading</li>
                  <li>• Cold-chain containers: Hourly automated readings during transport</li>
                </ul>
                <p className="mt-3">
                  <strong>Why 5-10 minutes?</strong> This duration allows complete sensor stabilization and multi-temperature 
                  gas sensor profiling while providing near-real-time monitoring suitable for rapid seafood processing workflows.
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Implementation Across Seafood Supply Chain</h2>
            
            <div className="space-y-4 mb-6">
              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">1. Fish Dock / Landing Site QA</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  First point of quality assessment immediately after catch unloading, establishing baseline freshness 
                  and determining initial value/grade.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Deployment Strategy</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Portable E-Näsa units at unloading stations</li>
                      <li>• Handheld probe for individual fish/batch sampling</li>
                      <li>• Real-time grading display for auction/pricing decisions</li>
                      <li>• Data logging for traceability and chain of custody</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Benefits</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Objective pricing based on actual freshness, not appearance</li>
                      <li>• Rapid sorting: premium vs. processing grade</li>
                      <li>• Detect spoilage from delayed icing during fishing</li>
                      <li>• Quality certification for export shipments</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">2. Cold-Chain Transport Monitoring</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Continuous quality tracking during refrigerated trucking, container shipping, and air freight—the 
                  critical period where most spoilage acceleration occurs.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Deployment Strategy</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Battery-powered E-Näsa sensors in shipping containers</li>
                      <li>• Cellular/satellite data transmission for real-time alerts</li>
                      <li>• Integration with temperature/humidity loggers</li>
                      <li>• Automated alerts to receiving facilities if thresholds exceeded</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Benefits</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Detect refrigeration failures before product loss</li>
                      <li>• Route optimization based on remaining shelf life</li>
                      <li>• Insurance claims support with documented degradation</li>
                      <li>• Prevent borderline shipments from entering retail</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">3. Processing Plant Quality Control</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Incoming inspection, in-process monitoring during filleting/packaging, and finished product verification 
                  before distribution.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Deployment Strategy</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Fixed stations at receiving docks for batch testing</li>
                      <li>• Inline sensors on processing conveyors (non-contact)</li>
                      <li>• Package integrity testing pre-sealing</li>
                      <li>• Final product certification before cold storage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Benefits</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Reject substandard raw material before processing costs</li>
                      <li>• Optimize fillet vs. minced product allocation</li>
                      <li>• Prevent cross-contamination from degraded batches</li>
                      <li>• HACCP documentation with timestamped quality data</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <h3 className="font-semibold text-foreground mb-3">4. Laboratory Analysis and Research</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bench-scale freshness studies, shelf-life validation, and correlation development with traditional 
                  microbiological methods.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Deployment Strategy</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Controlled atmosphere chambers with E-Näsa monitoring</li>
                      <li>• Time-series studies correlating VOCs with plate counts</li>
                      <li>• Species-specific spoilage pattern databases</li>
                      <li>• Modified atmosphere packaging (MAP) optimization</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Benefits</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Develop species-specific freshness models</li>
                      <li>• Validate shelf-life claims for labeling</li>
                      <li>• Research alternative preservation methods</li>
                      <li>• Support regulatory submissions with data</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed Pilot Study: Seafood Export Quality Assurance</h2>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-foreground">Air Freight Quality Monitoring Implementation</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">Target Partner Profile</p>
                  <p className="text-sm text-muted-foreground">
                    AirLytiq aims to collaborate with major seafood exporters shipping premium fresh fish via air freight to 
                    international markets. Target profile: companies exporting thousands of tonnes annually to Asia, where 
                    premium pricing depends on delivering optimal freshness after 36-48 hour transport journeys.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Industry Challenges to Address</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• 3-5% of shipments typically downgraded on arrival due to quality deterioration</li>
                    <li>• No ability to detect cold-chain failures during transport</li>
                    <li>• Disputes with freight companies over responsibility for quality loss</li>
                    <li>• Significant financial losses per downgraded shipment (€5,000-10,000 per pallet)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Proposed E-Näsa Solution</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    AirLytiq plans to deploy battery-powered E-Näsa sensors in air freight containers, 
                    programmed for frequent reading intervals with cellular data transmission for real-time monitoring.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Sensor Configuration:</strong> Gas sensor array + EC-H₂S + EC-NH₃<br/>
                    <strong>Alert Thresholds:</strong> TMA signature &gt;15% above baseline, H₂S &gt;0.3 ppm
                  </p>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="font-semibold text-foreground mb-3">Expected Validation Outcomes</p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Target Quality Improvements</p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Reduce downgrade rate by 70-80% through early quality detection</li>
                        <li>• Enable proactive shipment routing decisions based on real-time freshness data</li>
                        <li>• Improve average arrival freshness scores through process optimization</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Key Investigation Areas</p>
                      <div className="bg-background/50 p-3 rounded text-muted-foreground">
                        <p className="mb-2"><strong>Transport Chain Weak Points:</strong></p>
                        <p className="mb-3">
                          Identify where quality deterioration occurs (airport delays, transfer handling, temperature 
                          excursions) through continuous VOC monitoring throughout the transport chain. This data will 
                          help pinpoint accountability and enable targeted process improvements.
                        </p>
                        <p className="mb-2"><strong>Pre-Shipment Processing:</strong></p>
                        <p>
                          Validate correlation between pre-cooling protocols and shipment quality outcomes. Test whether 
                          VOC monitoring can optimize processing timing and identify products at risk before costly air 
                          freight commitment.
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-primary/20">
                      <p className="font-semibold text-foreground mb-2">Business Case Validation</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-background/50 p-3 rounded">
                          <p className="text-xs text-muted-foreground mb-1">Cost Avoidance Potential</p>
                          <p className="text-2xl font-bold text-primary">70-80%</p>
                          <p className="text-xs text-muted-foreground mt-1">Reduction in downgrades through early detection</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded">
                          <p className="text-xs text-muted-foreground mb-1">Premium Protection</p>
                          <p className="text-2xl font-bold text-primary">Consistent</p>
                          <p className="text-xs text-muted-foreground mt-1">Quality delivery enabling premium pricing</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Pilot study aims to quantify actual savings and validate ROI for full-scale deployment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-foreground mb-2">Quality Manager Quote</p>
                <p className="text-sm text-muted-foreground italic">
                  "E-Näsa gave us visibility we never had before. We can now prove exactly when and where quality degradation 
                  happens, which has been crucial for both preventing future issues and resolving disputes. The data is 
                  objective and irrefutable—it's transformed our relationship with logistics partners from finger-pointing 
                  to collaborative problem-solving."
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Species-Specific Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Finfish (Salmon, Cod, Tuna)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Primary marker:</strong> TMA dominates spoilage profile</li>
                  <li>• <strong>Critical control:</strong> Time-temperature abuse detection</li>
                  <li>• <strong>Application focus:</strong> Export grading, sushi-grade certification</li>
                  <li>• <strong>Shelf life:</strong> 7-14 days @ 0-2°C before TMA exceeds thresholds</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Crustaceans (Shrimp, Crab, Lobster)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Primary marker:</strong> H₂S from high sulfur amino acids</li>
                  <li>• <strong>Critical control:</strong> Post-mortem enzymatic activity</li>
                  <li>• <strong>Application focus:</strong> Processing plant receiving inspection</li>
                  <li>• <strong>Shelf life:</strong> 3-7 days @ 0-2°C before H₂S spike</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Mollusks (Oysters, Mussels, Clams)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Primary markers:</strong> NH₃ and organic acids</li>
                  <li>• <strong>Critical control:</strong> Live vs. dead detection (dead spoil rapidly)</li>
                  <li>• <strong>Application focus:</strong> Depuration plant QA, retail display</li>
                  <li>• <strong>Shelf life:</strong> 7-14 days live @ 4-8°C if properly handled</li>
                </ul>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Cephalopods (Squid, Octopus)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Primary markers:</strong> TMA and DMA (high TMAO content)</li>
                  <li>• <strong>Critical control:</strong> Rapid spoilage due to high enzyme activity</li>
                  <li>• <strong>Application focus:</strong> Immediate post-catch assessment</li>
                  <li>• <strong>Shelf life:</strong> 3-5 days @ 0-2°C, very temperature sensitive</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Elevate Your Seafood Quality Control</h2>
              <p className="text-muted-foreground mb-6">
                E-Näsa's VOC-based freshness monitoring provides objective, real-time quality assessment that traditional 
                methods simply cannot match. Whether you're managing fish docks, processing facilities, cold-chain logistics, 
                or laboratory QA, our technology detects spoilage at the earliest chemical stages—protecting product value, 
                reducing waste, and ensuring customer satisfaction. We're actively partnering with seafood industry leaders 
                to validate applications across diverse species and supply chain contexts.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/configurator">Request a Quality Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions/food-beverage">Explore Food Safety Solutions</Link>
                </Button>
              </div>
            </Card>
          </section>

          <div className="text-sm text-muted-foreground border-l-4 border-muted pl-4 mb-8">
            <p className="font-semibold mb-1">Technology Validation Status</p>
            <p>
              E-Näsa's seafood freshness monitoring technology is under active development with pilot programs across 
              Nordic fisheries and processing facilities. The sensor configurations and VOC detection capabilities are 
              validated through laboratory studies. We're continuously refining species-specific algorithms and threshold 
              values through partnerships with seafood quality research institutions. Interested in participating in 
              validation studies? Contact our food safety applications team.
            </p>
          </div>

          <NewsletterSignup />
          
          <div className="mt-12">
            <RelatedArticles currentPostId="seafood-freshness-monitoring" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default SeafoodFreshness;
