import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogMetadata = {
  'meat-freshness-monitoring': {
    title: 'Meat Freshness Monitoring: Detecting Spoilage with E-Näsa VOC Analysis',
    description: 'Discover how E-Näsa\'s advanced VOC detection monitors meat freshness by detecting putrescine, cadaverine, and ammonia for retail backrooms and processing QA.',
    image: 'https://airlytiq.com/images/enasa-food.jpg',
    url: 'https://airlytiq.com/blog/meat-freshness-monitoring',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Food Safety Technology'
  },
  'airport-security-threats': {
    title: 'Securing International Airports: Real-Time Threat Detection at Scale',
    description: 'Major international airports process millions of passengers annually, creating a massive security challenge: how to detect explosives and hazardous materials rapidly without creating bottlenecks. Traditional screening methods often struggle to balance thoroughness with speed. E-Näsa\'s vapor detection technology offers a solution that achieves both.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/airport-security-threats',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Airport Security Threat Detection'
  },
  'ammonium-nitrate-detection': {
    title: 'Detecting Ammonium Nitrate: How E-Näsa Prevents Explosive Hazards | AirLytiq ENäsa',
    description: 'Ammonium nitrate is a dual-use chemical—essential for agriculture but also a potential explosive precursor. From the Beirut port explosion in 2020 to numerous industrial incidents, the dangers of improper storage and handling are well documented. AirLytiq proposes implementing advanced vapor detection technology to provide a critical layer of security for ports, warehouses, transportation hubs, and industrial facilities.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/ammonium-nitrate-detection',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Security & Defense'
  },
  'brewery-fermentation': {
    title: 'Brewery Fermentation Monitoring: Yeast Health & Quality Control | AirLytiq ENäsa',
    description: 'Discover how E-Näsa\'s advanced VOC detection optimizes brewery fermentation monitoring, ensuring yeast health, preventing contamination, and perfecting flavor profiles in real-time.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/brewery-fermentation',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Food & Beverage'
  },
  'cannabis-detection': {
    title: 'Cannabis Vapor Detection: Maintaining Drug-Free Workplaces & Schools | AirLytiq ENäsa',
    description: 'Discover how E-Näsa\'s advanced VOC detection technology provides discreet, accurate cannabis vapor detection for workplaces, schools, and facilities requiring drug-free environments.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/cannabis-detection',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Security & Safety'
  },
  'cheese-production': {
    title: 'Cheese Production Monitoring: Culture Health & Cave Air Quality | AirLytiq ENäsa',
    description: 'Discover how E-Näsa\'s VOC detection technology optimizes cheese production through starter culture monitoring, contamination prevention, and aging cave air quality management for artisan and industrial cheesemakers.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/cheese-production',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Security & Safety'
  },
  'chemical-leak-prevention': {
    title: 'Industrial Safety: Early Detection of Chemical Leaks | AirLytiq ENäsa',
    description: 'Proposed pilot study on how AirLytiq\'s multi-gas sensors could help manufacturing facilities prevent major chemical incidents through early warning systems.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/chemical-leak-prevention',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Chemical Leak Prevention Case Study'
  },
  'dairy-cow-health-monitoring': {
    title: 'Dairy Cow Health Monitoring: Early Mastitis Detection and Metabolic Disease Prevention',
    description: 'Discover how E-Näsa\'s advanced VOC detection enables early detection of mastitis, ketosis, and metabolic diseases in dairy cattle through continuous barn air monitoring.',
    image: 'https://airlytiq.com/images/enasa-security.jpg',
    url: 'https://airlytiq.com/blog/dairy-cow-health-monitoring',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Dairy Cow Health Monitoring'
  },
  'hospital-voc-monitoring': {
    title: 'Real-Time VOC Monitoring in Hospital Operating Rooms | AirLytiq ENäsa',
    description: 'Explore how continuous air quality monitoring with E-Näsa helps maintain sterile environments and detect potential contamination in critical healthcare settings.',
    image: 'https://airlytiq.com/images/enasa-healthcare-new.jpg',
    url: 'https://airlytiq.com/blog/hospital-voc-monitoring',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Hospital VOC Monitoring Case Study'
  },
  'listeria-outbreak': {
    title: 'How E-Näsa Can Help Prevent Foodborne Outbreaks Like the Stockholm Listeria Case',
    description: 'Discover how E-Näsa\'s odor and gas analytics can help restaurants and public health teams detect early contamination signals and prevent foodborne outbreaks.',
    image: 'https://airlytiq.com/images/enasa-food.jpg',
    url: 'https://airlytiq.com/blog/listeria-outbreak',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'How E-Näsa Can Help Prevent Foodborne Outbreaks'
  },
  'mold-detection': {
    title: 'Hidden Mold Detection for Homes: Early Warning for Home Buyers & Real Estate | AirLytiq ENäsa',
    description: 'Protect your home purchase with AirLytiq\'s VOC detection technology. Detect hidden mold before buying old houses, save thousands in remediation costs, and safeguard your family\'s health.',
    image: 'https://airlytiq.com/images/enasa-environmental.jpg',
    url: 'https://airlytiq.com/blog/mold-detection',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Environmental'
  },
  'pottery-kiln-monitoring': {
    title: 'Kiln Fire Safety: Real-Time Gas Monitoring for Pottery Studios | AirLytiq ENäsa',
    description: 'Discover how E-Näsa\'s advanced VOC and gas detection technology helps pottery studios and ceramic facilities prevent kiln fires, gas leaks, and ensure workshop safety.',
    image: 'https://airlytiq.com/images/enasa-industrial-lab.jpg',
    url: 'https://airlytiq.com/blog/pottery-kiln-monitoring',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Pottery Kiln Fire Safety'
  },
  'poultry-bird-flu-detection': {
    title: 'Early Bird Flu Detection in Poultry Farms with E-Näsa VOC Monitoring | AirLytiq ENäsa',
    description: 'Discover how E-Näsa\'s advanced VOC detection technology enables early detection of avian influenza (bird flu) in poultry farms through continuous health monitoring and real-time alerts.',
    image: 'https://airlytiq.com/images/enasa-food.jpg',
    url: 'https://airlytiq.com/blog/poultry-bird-flu-detection',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Poultry Bird Flu Detection'
  },
  'seafood-freshness-monitoring': {
    title: 'Seafood Freshness Monitoring: Real-Time Quality Detection with E-Näsa VOC Analysis | AirLytiq ENäsa',
    description: 'How E-Näsa\'s VOC detection monitors seafood freshness through amine, H₂S, and NH₃ detection for cold-chain QA, fish docks, and laboratory quality control.',
    image: 'https://airlytiq.com/images/enasa-food.jpg',
    url: 'https://airlytiq.com/blog/seafood-freshness-monitoring',
    datePublished: '2025-11-20T00:00:00Z',
    author: 'AirLytiq',
    section: 'Seafood Freshness Monitoring'
  },
};

function findAssetFiles(distPath) {
  const assetsDir = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsDir);
  
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const cssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css'));
  
  return {
    js: jsFile ? `/assets/${jsFile}` : null,
    css: cssFile ? `/assets/${cssFile}` : null
  };
}

function generateBlogHTML(slug, metadata, assets) {
  const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Exo+2:wght@700;800;900&display=swap" rel="stylesheet">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${metadata.title} | AirLytiq ENäsa</title>
    <meta name="description" content="${metadata.description}" />
    <meta name="author" content="${metadata.author}" />
    
    <!-- Open Graph / LinkedIn / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="AirLytiq ENäsa" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:url" content="${metadata.url}" />
    <meta property="og:image" content="${metadata.image}" />
    <meta property="og:image:secure_url" content="${metadata.image}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${metadata.title}" />
    
    <!-- Article Meta -->
    <meta property="article:published_time" content="${metadata.datePublished}" />
    <meta property="article:modified_time" content="${metadata.datePublished}" />
    <meta property="article:author" content="${metadata.author}" />
    <meta property="article:section" content="${metadata.section}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@AirLytiq" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    <meta name="twitter:image" content="${metadata.image}" />
    <meta name="twitter:image:alt" content="${metadata.title}" />
    
    <!-- SEO -->
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${metadata.url}" />
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${metadata.title}",
      "description": "${metadata.description}",
      "image": {
        "@type": "ImageObject",
        "url": "${metadata.image}",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "name": "${metadata.author}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AirLytiq ENäsa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://airlytiq.com/logo.png"
        }
      },
      "datePublished": "${metadata.datePublished}",
      "dateModified": "${metadata.datePublished}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${metadata.url}"
      }
    }
    </script>
    ${assets.css ? `<link rel="stylesheet" crossorigin href="${assets.css}">` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${assets.js ? `<script type="module" crossorigin src="${assets.js}"></script>` : ''}
  </body>
</html>`;

  return htmlTemplate;
}

const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('🔍 Looking for built asset files...\n');
const assets = findAssetFiles(distPath);

if (!assets.js) {
  console.error('❌ Error: Could not find built JavaScript file in /dist/assets/');
  process.exit(1);
}

console.log(`✅ Found JS: ${assets.js}`);
if (assets.css) {
  console.log(`✅ Found CSS: ${assets.css}`);
}
console.log('\n🚀 Generating static HTML files for blog posts...\n');

Object.keys(blogMetadata).forEach(slug => {
  try {
    const html = generateBlogHTML(slug, blogMetadata[slug], assets);
    const blogDir = path.join(distPath, 'blog', slug);
    
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(blogDir, 'index.html'), html);
    console.log(`✅ Generated: /blog/${slug}/index.html`);
    console.log(`   Title: ${blogMetadata[slug].title}`);
    console.log(`   Image: ${blogMetadata[slug].image}\n`);
  } catch (error) {
    console.error(`❌ Error generating /blog/${slug}:`, error.message);
  }
});

console.log('✨ Static HTML generation complete!\n');