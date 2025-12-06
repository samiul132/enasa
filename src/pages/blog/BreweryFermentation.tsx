import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, Beaker, Shield, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import NewsletterSignup from "@/components/NewsletterSignup";
import { generateBlogSEO } from "@/lib/seo";
import { DisclaimerFooter } from "@/components/DisclaimerFooter";
import foodImage from "@/assets/enasa-security.jpg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const BreweryFermentation = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-security.jpg";
  const fullUrl = "https://airlytiq.com/blog/brewery-fermentation";
  
  const seo = generateBlogSEO({
    title: "Brewery Fermentation Monitoring: Yeast Health & Quality Control | AirLytiq ENäsa",
    description: "Discover how E-Näsa's advanced VOC detection optimizes brewery fermentation monitoring, ensuring yeast health, preventing contamination, and perfecting flavor profiles in real-time.",
    slug: "brewery-fermentation",
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
              Brewery Fermentation Monitoring: Optimizing Quality with Real-Time VOC Detection
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <time dateTime="2025-11-15">November 15, 2025</time>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <img 
            src={foodImage} 
            alt="E-Näsa VOC detection system monitoring brewery fermentation tanks"
            className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-lg"
          />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                In the craft brewing industry, fermentation is where science meets art. A single batch of beer can 
                represent weeks of work and thousands of dollars in ingredients—making real-time monitoring of 
                fermentation chemistry critical for quality control, consistency, and profitability.
              </p>
              
              <p className="mb-6">
                Traditional fermentation monitoring relies on periodic sampling, manual sensory evaluation, and 
                laboratory analysis. But by the time contamination or yeast stress is detected through conventional 
                methods, it's often too late to save the batch. AirLytiq proposes implementing advanced VOC detection technology 
                to transform this paradigm entirely.
              </p>

              <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
                <div className="flex items-start gap-4">
                  <Beaker className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Fermentation Challenge</h3>
                    <p className="text-sm text-muted-foreground">
                      Breweries face constant pressure to maintain consistency across batches while detecting 
                      contamination early, optimizing yeast health, and developing distinctive flavor profiles. 
                      Traditional monitoring methods can't provide the real-time, comprehensive data needed to 
                      achieve all these goals simultaneously.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Key VOC Markers Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Droplets className="h-8 w-8 text-primary" />
                Critical VOC Markers in Fermentation
              </h2>
              
              <p className="mb-6">
                E-Näsa continuously monitors dozens of volatile organic compounds that indicate fermentation 
                health, yeast vitality, and potential contamination. Here are the key markers:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Healthy Fermentation
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Ethanol:</strong> Primary fermentation product (8-12% typical)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>CO₂:</strong> Indicates active yeast metabolism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Acetaldehyde:</strong> Decreases as fermentation matures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Esters:</strong> Fruity/floral compounds (ethyl acetate, isoamyl acetate)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Higher alcohols:</strong> Fusel alcohols in balanced concentrations</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-destructive/50 bg-destructive/5">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Contamination Indicators
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Acetic acid:</strong> Bacterial contamination (acetobacter)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Diacetyl:</strong> Excessive levels indicate bacterial infection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>DMS (dimethyl sulfide):</strong> Off-flavors from contamination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Butyric acid:</strong> Clostridium or anaerobic bacteria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong>Phenolic compounds:</strong> Wild yeast contamination</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Real-World Application Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                Proposed Pilot Study: Craft Brewery Validation
              </h2>

              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 mb-6">
                <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
                <p className="mb-4">
                  AirLytiq proposes to validate E-Näsa VOC monitoring at a mid-sized craft brewery to demonstrate how real-time fermentation monitoring can prevent costly contamination events and improve batch consistency. The proposed study would target facilities experiencing occasional quality issues that result in dumping entire fermentation tanks—costing €15,000-25,000 per incident.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Proposed E-Näsa Solution</h3>
                <p className="mb-4">
                  The pilot study would install E-Näsa sensors on all fermentation tanks, creating a real-time monitoring 
                  network that tracks VOC profiles continuously throughout each batch cycle. This would enable brewers to detect contamination and fermentation issues hours before traditional methods.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">Target</div>
                    <div className="text-sm text-muted-foreground">99%+ batch consistency</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">Goal</div>
                    <div className="text-sm text-muted-foreground">Earlier contamination detection</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">€78,000</div>
                    <div className="text-sm text-muted-foreground">Projected annual savings from prevented losses</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Example Detection Scenario</h3>
                <p className="mb-4">
                  In a typical scenario, AirLytiq could detect elevated acetic acid levels at just 
                  0.08 ppm—far below human detection thresholds but indicating early-stage acetobacter contamination. 
                  The system would send automatic alerts to the brewmaster's mobile device.
                </p>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h4 className="font-bold mb-3">Example Timeline of Response:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">18:45</Badge>
                      <span>AirLytiq detects acetic acid anomaly in Tank 7</span>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">18:47</Badge>
                      <span>Automated alert sent to brewmaster and quality team</span>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">19:30</Badge>
                      <span>Lab confirms early contamination via microscopy</span>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">20:00</Badge>
                      <span>Batch isolated, acid rest initiated to salvage product</span>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="shrink-0">72 hrs</Badge>
                      <span>Batch successfully salvaged with adjusted process—potential €22,000 loss prevented</span>
                    </div>
                  </div>
                </Card>
              </Card>
            </section>

            {/* Yeast Health Monitoring Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Yeast Health & Vitality Monitoring
              </h2>

              <p className="mb-6">
                Healthy yeast is the foundation of consistent, high-quality beer. E-Näsa monitors yeast metabolism 
                in real-time through specific VOC patterns:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3">Fermentation Vigor Assessment</h3>
                  <p className="text-sm mb-3">
                    By tracking CO₂ production rates and ethanol formation, E-Näsa provides instant feedback on 
                    yeast performance. Sluggish fermentation is detected within 2-3 hours versus 12-24 hours with 
                    traditional gravity measurements.
                  </p>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-xs font-mono text-muted-foreground mb-2">Example Alert:</div>
                    <div className="text-sm font-semibold text-destructive">
                      "Tank 4: CO₂ production 40% below expected rate. Possible yeast stress or underpitching."
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3">Ester Profile Optimization</h3>
                  <p className="text-sm mb-3">
                    Different beer styles require specific ester profiles. E-Näsa tracks fruity esters like ethyl 
                    acetate (pear/solvent) and isoamyl acetate (banana) to ensure flavor consistency batch-to-batch.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Belgian ales:</strong> Target high ester production (15-25 ppm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Lagers:</strong> Minimize esters for clean profile (&lt;5 ppm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>IPAs:</strong> Moderate esters to complement hop character (8-12 ppm)</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3">Diacetyl Rest Optimization</h3>
                  <p className="text-sm mb-3">
                    Diacetyl (buttery off-flavor) must be reabsorbed by yeast during conditioning. E-Näsa precisely 
                    tracks diacetyl levels, allowing brewers to end conditioning exactly when levels drop below 
                    taste threshold (typically &lt;0.1 ppm).
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg text-sm">
                    <strong>Result:</strong> Reduced conditioning time by 2-3 days on average, increasing tank 
                    turnover and production capacity by 15%.
                  </div>
                </Card>
              </div>
            </section>

            {/* Contamination Prevention Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Early Contamination Detection & Prevention</h2>

              <p className="mb-6">
                Bacterial and wild yeast contamination are constant threats in brewing. E-Näsa detects contamination 
                6-8 hours earlier than traditional methods, often before human senses can detect off-flavors.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 border-destructive/30">
                  <h3 className="font-bold mb-4 text-destructive">Lactobacillus Detection</h3>
                  <p className="text-sm mb-3">
                    Lactic acid bacteria produce distinctive VOC signatures including lactic acid, acetic acid, and 
                    specific esters.
                  </p>
                  <div className="bg-destructive/5 p-3 rounded text-xs">
                    <div className="font-semibold mb-2">Detection threshold:</div>
                    <div>Lactic acid: 0.05 ppm</div>
                    <div>Alert triggers: 6-8 hours before taste detection</div>
                  </div>
                </Card>

                <Card className="p-6 border-destructive/30">
                  <h3 className="font-bold mb-4 text-destructive">Wild Yeast (Brettanomyces)</h3>
                  <p className="text-sm mb-3">
                    "Brett" produces phenolic compounds (4-ethylphenol, 4-ethylguaiacol) that create barnyard or 
                    medicinal flavors.
                  </p>
                  <div className="bg-destructive/5 p-3 rounded text-xs">
                    <div className="font-semibold mb-2">Detection threshold:</div>
                    <div>4-EP: 0.02 ppm</div>
                    <div>Alert triggers: 12-18 hours before taste detection</div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-bold text-lg mb-3">Automated Response Protocols</h3>
                <p className="text-sm mb-4">
                  E-Näsa can integrate with brewery automation systems to trigger immediate responses:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Isolate contaminated tank from packaging line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Alert quality team and brewmaster via SMS/email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Trigger enhanced CIP (clean-in-place) protocols for affected equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Document incident with time-stamped VOC data for root cause analysis</span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* Flavor Profile Development Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Flavor Profile Optimization & Recipe Development</h2>

              <p className="mb-6">
                Beyond quality control, E-Näsa enables breweries to develop distinctive, consistent flavor profiles 
                through precise VOC monitoring and fermentation parameter optimization.
              </p>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 mb-6">
                <h3 className="text-xl font-bold mb-4">Creating a Flavor Fingerprint</h3>
                <p className="text-sm mb-4">
                  Each beer style has a characteristic VOC profile. E-Näsa creates detailed "flavor fingerprints" 
                  for each recipe, allowing brewers to:
                </p>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Reproduce award-winning batches with 99%+ consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Adjust fermentation parameters in real-time to hit target profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Experiment with new recipes while maintaining flavor control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Train AI models to predict final flavor from early fermentation data</span>
                  </li>
                </ul>

                <div className="bg-background/70 p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-2 text-muted-foreground">Example: West Coast IPA Profile</div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <div className="text-muted-foreground mb-1">Esters (fruity):</div>
                      <div>Ethyl acetate: 8-12 ppm</div>
                      <div>Isoamyl acetate: 2-4 ppm</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Higher alcohols:</div>
                      <div>Isoamyl alcohol: 45-60 ppm</div>
                      <div>Phenylethanol: 20-30 ppm</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Diacetyl:</div>
                      <div>&lt;0.08 ppm (below threshold)</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Acetaldehyde:</div>
                      <div>&lt;10 ppm (clean finish)</div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-bold mb-3">Temperature Optimization</h3>
                  <p className="text-sm mb-3">
                    By correlating temperature with VOC production, E-Näsa helps optimize fermentation temperature 
                    profiles for desired flavor outcomes.
                  </p>
                  <div className="text-xs bg-background/50 p-3 rounded">
                    <strong>Example:</strong> Raising temperature from 18°C to 20°C at 60% attenuation increased 
                    fruity esters by 35% while maintaining low diacetyl—perfect for Belgian-style ales.
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-3">Yeast Strain Selection</h3>
                  <p className="text-sm mb-3">
                    Compare VOC profiles across different yeast strains under identical conditions to select the 
                    best strain for each recipe.
                  </p>
                  <div className="text-xs bg-background/50 p-3 rounded">
                    <strong>Example:</strong> Side-by-side testing of 5 ale strains revealed Strain A produced 
                    target ester profile 20% faster, reducing fermentation time by 1.5 days.
                  </div>
                </Card>
              </div>
            </section>

            {/* Technical Implementation Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Technical Implementation for Breweries</h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Installation Options</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-semibold mb-2">1. Headspace Sampling (Recommended)</div>
                      <p className="text-muted-foreground">
                        Sensors installed in tank headspace via sampling port. Non-invasive, easy to retrofit, 
                        suitable for all tank types.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">2. Inline Gas Monitoring</div>
                      <p className="text-muted-foreground">
                        Integrated into CO₂ collection system for continuous monitoring of fermentation off-gas.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">3. Dedicated Sample Lines</div>
                      <p className="text-muted-foreground">
                        Automated sampling system with multi-port manifold for monitoring 10+ tanks with single sensor array.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">System Integration</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>SCADA Integration:</strong> Real-time data feeds to existing brewery control systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Cloud Dashboard:</strong> Remote monitoring via mobile app and web interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Alert System:</strong> Customizable SMS, email, and push notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Data Analytics:</strong> Machine learning models for predictive quality control</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Future of Brewery Quality Control</h2>

              <p className="mb-6">
                As consumer expectations for consistency and quality continue to rise, breweries need more than 
                traditional sampling and sensory evaluation. E-Näsa's real-time VOC monitoring represents a 
                fundamental shift in fermentation management—from reactive quality control to proactive optimization.
              </p>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="text-xl font-bold mb-4">Key Advantages Summary</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Quality Control</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>→ 6-8 hour earlier contamination detection</li>
                      <li>→ 99%+ batch-to-batch consistency</li>
                      <li>→ Precise flavor profile matching</li>
                      <li>→ Reduced quality testing labor by 40-60%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Operational Efficiency</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>→ 2-3 day reduction in conditioning time</li>
                      <li>→ 15-20% increase in tank utilization</li>
                      <li>→ 80-90% reduction in dumped batches</li>
                      <li>→ Automated documentation for compliance</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Fermentation?</h2>
                <p className="mb-6 text-primary-foreground/90">
                  Discover how E-Näsa can help your brewery achieve unprecedented consistency, prevent costly 
                  contamination, and develop distinctive flavor profiles that keep customers coming back.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/products">View Products</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    <Link to="/solutions/food-beverage">Explore Food & Beverage Solutions</Link>
                  </Button>
                </div>
              </Card>
            </section>

            <DisclaimerFooter />

            {/* Social Share */}
            <SocialShare 
              title="Brewery Fermentation Monitoring with E-Näsa VOC Detection"
              url="https://enasa.se/blog/brewery-fermentation"
            />
          </div>

          {/* Related Articles */}
          <RelatedArticles currentPostId="brewery-fermentation" />
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BreweryFermentation;