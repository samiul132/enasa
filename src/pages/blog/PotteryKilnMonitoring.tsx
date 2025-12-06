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
import industrialImage from "@/assets/enasa-industrial-lab.jpg";

const PotteryKilnMonitoring = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-industrial-lab.jpg";
  const fullUrl = "https://airlytiq.com/blog/pottery-kiln-monitoring";
  
  const seo = generateBlogSEO({
    title: "Kiln Fire Safety: Real-Time Gas Monitoring for Pottery Studios | AirLytiq ENäsa",
    description: "Discover how E-Näsa's advanced VOC and gas detection technology helps pottery studios and ceramic facilities prevent kiln fires, gas leaks, and ensure workshop safety.",
    slug: "pottery-kiln-monitoring",
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
        <meta property="article:section" content="Pottery Kiln Fire Safety" />
        
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
                <BreadcrumbPage>Pottery Kiln Fire Safety</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Kiln Fire Safety: Real-Time Gas Monitoring for Pottery Studios
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>November 12, 2025</span> • <span>8 min read</span>
              </div>
              <SocialShare title="Kiln Fire Safety: Real-Time Gas Monitoring for Pottery Studios" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pottery studios and ceramic facilities face unique fire and gas safety challenges. Kilns operate at extreme temperatures (up to 1,300°C), 
              many use natural gas or propane, and studios often contain flammable materials. AirLytiq proposes implementing advanced 
              gas detection and monitoring systems to enhance safety at ceramic facilities, with a pilot study at a major ceramic arts center in Gothenburg.
              comprehensive gas monitoring system after a near-miss incident involving a gas leak during a high-temperature firing.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={industrialImage} 
              alt="Pottery studio kiln with E-Näsa gas monitoring sensors" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              E-Näsa sensors provide 24/7 monitoring of kiln operations and studio air quality
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge: Hidden Hazards in Ceramic Studios</h2>
            <p className="text-muted-foreground mb-4">
              The facility operates six gas-fired kilns running multiple firings weekly. Previous safety protocols relied on manual gas leak checks 
              before each firing and basic smoke detectors. However, several safety gaps existed:
            </p>
            <ul className="space-y-2 ml-4 list-disc text-muted-foreground mb-4">
              <li>No continuous monitoring of natural gas or propane leaks during overnight firings</li>
              <li>Inability to detect incomplete combustion producing dangerous carbon monoxide levels</li>
              <li>No early warning system for overheating or thermal runaway in electric kilns</li>
              <li>Limited detection of toxic fumes from glazes and clay bodies during high-temperature firing</li>
              <li>No automated alerts when kilns were left unattended beyond safe parameters</li>
            </ul>
            <p className="text-muted-foreground">
              The incident that prompted action occurred when a faulty gas valve connection slowly leaked propane overnight. 
              By morning, dangerous concentrations had accumulated in an enclosed kiln room. The leak was only discovered by chance when 
              a staff member noticed the odor before turning on any electrical equipment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The E-Näsa Solution: Comprehensive Studio Safety</h2>
            <p className="text-muted-foreground mb-4">
              E-Näsa designed a multi-zone monitoring network tailored to the unique hazards of ceramic production:
            </p>
            
            <Card className="p-4 bg-muted/50 mb-4">
              <strong className="text-foreground">Monitored Hazards</strong>
              <ul className="mt-2 space-y-2 ml-4 list-disc text-muted-foreground">
                <li><strong className="text-foreground">Combustible Gases:</strong> Natural gas, propane, and methane from organic materials in clay</li>
                <li><strong className="text-foreground">Toxic Combustion Products:</strong> Carbon monoxide, nitrogen oxides, and sulfur compounds</li>
                <li><strong className="text-foreground">Glaze VOCs:</strong> Heavy metals and organic compounds released during high-temperature firing</li>
                <li><strong className="text-foreground">Thermal Signatures:</strong> Abnormal temperature patterns indicating kiln malfunction or fire risk</li>
                <li><strong className="text-foreground">Ventilation Efficiency:</strong> Ensures proper exhaust system operation during firings</li>
              </ul>
            </Card>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Sensor Placement Strategy</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Zone 1: Kiln Rooms</h4>
                <p className="text-sm text-muted-foreground">
                  High-sensitivity sensors positioned near gas connections and kiln vents. 
                  Immediate alerts if combustible gas exceeds 10% LEL (Lower Explosive Limit).
                </p>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Zone 2: Main Studio Floor</h4>
                <p className="text-sm text-muted-foreground">
                  Monitors general air quality and detects glaze fumes from drying greenware or bisque pieces. 
                  Alerts when VOC levels exceed safe exposure limits.
                </p>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Zone 3: Storage Areas</h4>
                <p className="text-sm text-muted-foreground">
                  Detects off-gassing from stored chemicals, glazes, and gas cylinders. 
                  Critical for identifying slow leaks in backup propane tanks.
                </p>
              </Card>

              <Card className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Zone 4: Exhaust Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Monitors ventilation effectiveness and detects backdraft conditions 
                  that could allow toxic fumes to re-enter the workspace.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed Pilot Study: Expected Safety Outcomes (18 Months)</h2>
            
            <Card className="p-6 bg-primary/5 border-primary/20 mb-4">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Projected Safety Improvements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Target: Zero gas-related incidents</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Goal</p>
                  <p className="text-sm text-muted-foreground">Gas leaks detected and prevented early</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Target</p>
                  <p className="text-sm text-muted-foreground">Kiln malfunctions caught before escalation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{"<"}5 min</p>
                  <p className="text-sm text-muted-foreground">Expected alert response time</p>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Example Scenarios AirLytiq Could Detect</h3>
            
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-yellow-500">
                <h4 className="font-semibold text-foreground mb-2">Scenario #1: Propane Leak During Raku Firing</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Scenario:</strong> 2:15 AM • <strong>Expected Detection:</strong> Within 60 seconds of leak
                </p>
                <p className="text-sm text-muted-foreground">
                  System would detect propane concentration rising rapidly in outdoor kiln shed during an overnight reduction firing. 
                  Automated alerts would notify on-call staff and trigger ventilation system. Leak could be traced to degraded rubber hose connection. 
                  <strong className="text-foreground"> Potential prevented loss: €45,000+ in fire damage.</strong>
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-orange-500">
                <h4 className="font-semibold text-foreground mb-2">Scenario #2: Carbon Monoxide Buildup</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Scenario:</strong> 6:30 PM • <strong>Expected Detection:</strong> Before dangerous levels reached
                </p>
                <p className="text-sm text-muted-foreground">
                  Incomplete combustion in a gas kiln due to blocked burner ports could create rising CO levels. 
                  System would alert staff before evacuation becomes necessary. Kiln could be shut down, burners cleaned, and firing rescheduled safely.
                  <strong className="text-foreground"> Could prevent CO poisoning of evening class students.</strong>
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-l-red-500">
                <h4 className="font-semibold text-foreground mb-2">Scenario #3: Thermal Runaway in Electric Kiln</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Scenario:</strong> 11:45 PM • <strong>Expected Detection:</strong> Abnormal VOC signature detected
                </p>
                <p className="text-sm text-muted-foreground">
                  Malfunctioning controller could cause electric kiln to continue heating past target temperature (1,260°C). 
                  AirLytiq would detect unusual VOC emissions from over-fired pottery and excessive heat signatures. 
                  Emergency shutdown could prevent kiln element damage and potential structural fire.
                  <strong className="text-foreground"> Potential savings: €8,000 in kiln repairs and building fire prevention.</strong>
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Integration with Studio Operations</h2>
            
            <Card className="p-4 bg-muted/50 mb-4">
              <strong className="text-foreground">System Features</strong>
              <ul className="mt-2 space-y-2 ml-4 list-disc text-muted-foreground">
                <li><strong className="text-foreground">Mobile Alerts:</strong> Studio manager and on-call staff receive instant SMS and app notifications</li>
                <li><strong className="text-foreground">Firing Schedules:</strong> System learns normal firing patterns and adjusts baseline thresholds automatically</li>
                <li><strong className="text-foreground">Remote Monitoring:</strong> Staff can check kiln room conditions from home during overnight firings</li>
                <li><strong className="text-foreground">Safety Logs:</strong> Automated documentation for insurance and regulatory compliance</li>
                <li><strong className="text-foreground">Ventilation Control:</strong> Triggers exhaust fans when VOC levels exceed safe thresholds</li>
              </ul>
            </Card>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Studio Manager Feedback</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
              "Before E-Näsa, I would lie awake during overnight firings worrying about gas leaks or kiln malfunctions. 
              Now I sleep soundly knowing the system is watching 24/7 and will alert me instantly if anything goes wrong. 
              The investment paid for itself the first time it caught a propane leak that could have destroyed our facility."
              <footer className="text-sm mt-2 not-italic">— Maria Andersson, Studio Director</footer>
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Best Practices for Pottery Studio Safety</h2>
            
            <div className="space-y-3">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">1. Layer Your Safety Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Combine E-Näsa's continuous monitoring with traditional safety equipment (smoke detectors, fire extinguishers, emergency shutoffs). 
                  Redundancy saves lives.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">2. Establish Clear Alert Protocols</h3>
                <p className="text-sm text-muted-foreground">
                  Define who receives alerts, escalation procedures, and response checklists. 
                  Practice emergency procedures quarterly with all staff and regular studio users.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">3. Regular Calibration and Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule quarterly sensor calibration and annual system checks. 
                  Clay dust and kiln emissions can affect sensor accuracy over time.
                </p>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">4. Document Everything</h3>
                <p className="text-sm text-muted-foreground">
                  Maintain detailed firing logs, alert histories, and maintenance records. 
                  This documentation is invaluable for insurance claims and safety audits.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-8">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Protect Your Studio?</h2>
              <p className="text-muted-foreground mb-4">
                Don't wait for a close call to implement comprehensive safety monitoring.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/configurator">Configure Your System</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions/industrial-safety">Learn More</Link>
                </Button>
              </div>
            </Card>
          </section>

          <DisclaimerFooter />

          <NewsletterSignup />
          
          <div className="mt-12">
            <RelatedArticles currentPostId="pottery-kiln-monitoring" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default PotteryKilnMonitoring;
