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

const ListeriaOutbreak = () => {
  const absoluteImageUrl = "https://airlytiq.com/images/enasa-food.jpg";
  const fullUrl = "https://airlytiq.com/blog/listeria-outbreak";
  
  const seo = generateBlogSEO({
    title: "How E-Näsa Can Help Prevent Foodborne Outbreaks Like the Stockholm Listeria Case",
    description: "Discover how E-Näsa's odor and gas analytics can help restaurants and public health teams detect early contamination signals and prevent foodborne outbreaks.",
    slug: "listeria-outbreak",
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
                <BreadcrumbPage>How E-Näsa Can Help Prevent Foodborne Outbreaks</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How E-Näsa Can Help Prevent Foodborne Outbreaks Like the Stockholm Listeria Case
            </h1>
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">
                <span>October 15, 2025</span> • <span>8 min read</span>
              </div>
              <SocialShare title="How E-Näsa Can Help Prevent Foodborne Outbreaks Like the Stockholm Listeria Case" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In late September 2025, a Listeria outbreak in Stockholm was linked to diners who visited a restaurant in Östermalm between 23–27 September.
              Multiple people were hospitalized, including cases of sepsis, and authorities initiated contact tracing and sample analysis.
              This incident underscores how vital early contamination detection could be—AirLytiq proposes a pilot study to validate how continuous gas monitoring might help restaurants and public health teams detect early warning signals and prevent such outbreaks.
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={foodImage} 
              alt="Restaurant kitchen with E-Näsa sensor monitoring" 
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              AirLytiq aims to monitor prep lines and cold storage to flag early contamination signals.
            </figcaption>
          </figure>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Proposed AirLytiq Solution</h2>
            <p className="text-muted-foreground mb-4">
              AirLytiq is developing an AI-assisted odor and gas monitoring system designed for food environments. Our proposed technology would track volatile compounds linked to microbial growth and hygiene lapses.
              The system aims to build a baseline for each site and raise alerts when the signal drifts toward patterns associated with contamination risk.
            </p>
            <Card className="p-4 bg-muted/50">
              <strong className="text-foreground">Key capabilities</strong>
              <ul className="mt-2 space-y-2 ml-4 list-disc text-muted-foreground">
                <li>Continuous monitoring in kitchens, fridges, freezers, and receiving areas</li>
                <li>Risk index that combines gas vectors into a single, easy score</li>
                <li>Instant alerts with clear actions for staff</li>
                <li>Traceable logs for audits and investigations</li>
              </ul>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How the Technology Works</h2>
            <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
              <li><strong className="text-foreground">Sensing:</strong> Multi-gas modules can read VOCs and gases such as H₂S and NH₃ on a set interval.</li>
              <li><strong className="text-foreground">Baseline:</strong> The system learns your normal profile by time of day, station, and temperature.</li>
              <li><strong className="text-foreground">Detection:</strong> AI models compare new readings to the baseline and known patterns to produce a "Contamination Risk Index."</li>
              <li><strong className="text-foreground">Alerting:</strong> Configurable thresholds can trigger on-device, SMS, email, or dashboard alerts with actionable guidance.</li>
              <li><strong className="text-foreground">Evidence:</strong> All readings and actions are logged for audits and regulatory reporting.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Recommended Sensor Placement</h2>
            <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
              <li><strong className="text-foreground">Cold rooms and fridges:</strong> Door hinges and airflow paths where odors accumulate</li>
              <li><strong className="text-foreground">Prep lines:</strong> RTE areas, slicers, and high-touch benches</li>
              <li><strong className="text-foreground">Receiving:</strong> Incoming truffles, meats, seafood, and dairy</li>
              <li><strong className="text-foreground">Dish and waste zones:</strong> Moist areas that can shift the baseline</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Response Playbook for Staff</h2>
            <ol className="space-y-3 ml-4 list-decimal text-muted-foreground">
              <li>Acknowledge the alert on the tablet or phone.</li>
              <li>Check the station noted in the alert and quarantine suspect items.</li>
              <li>Sanitize the area and tools. Log the action in the app.</li>
              <li>Re-sample after cleaning. If the index stays high, escalate to a manager and consider lab testing.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Example Data and Trend</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Illustrative sample showing how gas levels can rise before visible spoilage. The index is a unitless score from 0 to 100.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-center">Time (hrs)</th>
                    <th className="border border-border p-2 text-center">H₂S (ppm)</th>
                    <th className="border border-border p-2 text-center">VOC Index</th>
                    <th className="border border-border p-2 text-center">NH₃ (ppm)</th>
                    <th className="border border-border p-2 text-center">Contamination Risk Index</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border p-2 text-center">0</td><td className="border border-border p-2 text-center">0.2</td><td className="border border-border p-2 text-center">15</td><td className="border border-border p-2 text-center">0.1</td><td className="border border-border p-2 text-center">5</td></tr>
                  <tr><td className="border border-border p-2 text-center">6</td><td className="border border-border p-2 text-center">0.3</td><td className="border border-border p-2 text-center">18</td><td className="border border-border p-2 text-center">0.1</td><td className="border border-border p-2 text-center">8</td></tr>
                  <tr><td className="border border-border p-2 text-center">12</td><td className="border border-border p-2 text-center">0.4</td><td className="border border-border p-2 text-center">22</td><td className="border border-border p-2 text-center">0.2</td><td className="border border-border p-2 text-center">12</td></tr>
                  <tr><td className="border border-border p-2 text-center">18</td><td className="border border-border p-2 text-center">0.8</td><td className="border border-border p-2 text-center">35</td><td className="border border-border p-2 text-center">0.4</td><td className="border border-border p-2 text-center">25</td></tr>
                  <tr><td className="border border-border p-2 text-center">24</td><td className="border border-border p-2 text-center">1.4</td><td className="border border-border p-2 text-center">48</td><td className="border border-border p-2 text-center">0.7</td><td className="border border-border p-2 text-center">40</td></tr>
                  <tr><td className="border border-border p-2 text-center">30</td><td className="border border-border p-2 text-center">2.2</td><td className="border border-border p-2 text-center">60</td><td className="border border-border p-2 text-center">1.1</td><td className="border border-border p-2 text-center">68</td></tr>
                  <tr><td className="border border-border p-2 text-center">36</td><td className="border border-border p-2 text-center">3.1</td><td className="border border-border p-2 text-center">78</td><td className="border border-border p-2 text-center">1.5</td><td className="border border-border p-2 text-center">92</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Risk rises sharply after 24 hours, which would trigger an alert and a sanitation check.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Expected Benefits for Restaurants and Regulators</h2>
            <p className="text-muted-foreground mb-4">
              Through our proposed pilot study, we aim to demonstrate the following potential benefits:
            </p>
            <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
              <li><strong className="text-foreground">Early warning system</strong> that could allow staff to act before customers are affected</li>
              <li><strong className="text-foreground">Reduced investigation time</strong> through precise timestamps and station-level logs</li>
              <li><strong className="text-foreground">Enhanced training capabilities</strong> with real-world examples from participating facilities</li>
              <li><strong className="text-foreground">Audit support</strong> with comprehensive, exportable histories</li>
              <li><strong className="text-foreground">Risk reduction</strong> through continuous, automated monitoring that never takes a break</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Common Questions</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Could AirLytiq replace lab tests?</p>
                <p className="text-muted-foreground">
                  No. Our proposed technology would complement traditional microbiology by providing fast environmental signals and risk scores. The goal is to help determine when to sample, where to focus testing efforts, and how to prioritize investigations.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">What about false alarms?</p>
                <p className="text-muted-foreground">
                  The system learns a baseline for each location and uses multi-signal trends, not single spikes. You can tune thresholds and require confirmation from a second reading before an alert is sent.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">How is data handled?</p>
                <p className="text-muted-foreground">
                  Readings are tied to a device ID and location. Access control and encryption are applied in transit and at rest. Logs are exportable for audits.
                </p>
              </div>
            </div>
          </section>

          <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Join Our Pilot Study</h2>
            <p className="text-muted-foreground mb-4">
              AirLytiq is actively seeking restaurant and food service partners to participate in our pilot validation study. Whether you operate a single kitchen or manage multiple sites, 
              we can collaborate to map sensor placement, establish baselines, and integrate alerts into your existing workflow. 
              Let's work together to validate how continuous monitoring could help prevent foodborne outbreaks before they happen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/configurator">Request a Pilot Program</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/solutions/food-beverage">Learn More</Link>
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
            <RelatedArticles currentPostId="listeria-outbreak" maxArticles={2} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ListeriaOutbreak;
