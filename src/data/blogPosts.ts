import foodImage from "@/assets/enasa-food.jpg";
import healthcareImage from "@/assets/enasa-healthcare-new.jpg";
import industrialImage from "@/assets/enasa-industrial.jpg";
import securityImage from "@/assets/enasa-security.jpg";
import cannabisImage from "@/assets/enasa-cannabis.jpg";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "mold-detection",
    title: "Hidden Mold Detection: Early Warning for Indoor Air Quality",
    description: "Discover how AirLytiq's advanced VOC detection identifies hidden mold growth before visible damage, preventing respiratory illnesses and reducing remediation costs.",
    image: foodImage,
    category: "Environmental",
    date: "November 22, 2025",
    readTime: "12 min read",
    url: "/blog/mold-detection"
  },
  {
    id: "meat-freshness-monitoring",
    title: "Meat Freshness Monitoring: Detecting Spoilage with E-Näsa VOC Analysis",
    description: "Discover how E-Näsa's advanced VOC detection monitors meat freshness by detecting putrescine, cadaverine, and ammonia for retail backrooms and processing QA.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 20, 2025",
    readTime: "10 min read",
    url: "/blog/meat-freshness-monitoring"
  },
  {
    id: "seafood-freshness-monitoring",
    title: "Seafood Freshness Monitoring: Real-Time Quality Detection with E-Näsa VOC Analysis",
    description: "How E-Näsa's VOC detection monitors seafood freshness through amine, H₂S, and NH₃ detection for cold-chain QA, fish docks, and laboratory quality control.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 20, 2025",
    readTime: "11 min read",
    url: "/blog/seafood-freshness-monitoring"
  },
  {
    id: "dairy-cow-health-monitoring",
    title: "Dairy Cow Health Monitoring: Early Mastitis Detection and Metabolic Disease Prevention",
    description: "Discover how E-Näsa's advanced VOC detection enables early detection of mastitis, ketosis, and metabolic diseases in dairy cattle through continuous barn air monitoring.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 19, 2025",
    readTime: "12 min read",
    url: "/blog/dairy-cow-health-monitoring"
  },
  {
    id: "poultry-bird-flu-detection",
    title: "Early Bird Flu Detection in Poultry Farms with E-Näsa VOC Monitoring",
    description: "Discover how E-Näsa's advanced VOC detection enables early detection of avian influenza through continuous health monitoring and real-time alerts in poultry facilities.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 18, 2025",
    readTime: "10 min read",
    url: "/blog/poultry-bird-flu-detection"
  },
  {
    id: "cheese-production",
    title: "Cheese Production Monitoring: Perfecting Quality from Culture to Cave",
    description: "Discover how E-Näsa's VOC detection technology optimizes cheese production through starter culture monitoring, contamination prevention, and aging cave air quality management.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 16, 2025",
    readTime: "11 min read",
    url: "/blog/cheese-production"
  },
  {
    id: "brewery-fermentation",
    title: "Brewery Fermentation Monitoring: Optimizing Quality with Real-Time VOC Detection",
    description: "Discover how E-Näsa's advanced VOC detection optimizes brewery fermentation monitoring, ensuring yeast health, preventing contamination, and perfecting flavor profiles in real-time.",
    image: foodImage,
    category: "Food & Beverage",
    date: "November 15, 2025",
    readTime: "10 min read",
    url: "/blog/brewery-fermentation"
  },
  {
    id: "cannabis-detection",
    title: "Cannabis Vapor Detection: Maintaining Drug-Free Workplaces & Schools",
    description: "Discover how E-Näsa's advanced VOC detection technology provides discreet, accurate cannabis vapor detection for workplaces, schools, and facilities requiring drug-free environments.",
    image: cannabisImage,
    category: "Security & Defense",
    date: "November 8, 2025",
    readTime: "9 min read",
    url: "/blog/cannabis-detection"
  },
  {
    id: "ammonium-nitrate-detection",
    title: "Detecting Ammonium Nitrate: How E-Näsa Prevents Explosive Hazards",
    description: "Learn how E-Näsa's advanced VOC detection technology identifies ammonium nitrate and other explosive precursors in real-time, helping secure critical infrastructure and prevent catastrophic incidents.",
    image: securityImage,
    category: "Security & Defense",
    date: "November 10, 2025",
    readTime: "10 min read",
    url: "/blog/ammonium-nitrate-detection"
  },
  {
    id: "listeria-outbreak",
    title: "How E-Näsa Helps Prevent Foodborne Outbreaks Like the Stockholm Listeria Case",
    description: "A practical look at how E-Näsa's odor and gas analytics can help restaurants and public health teams detect early contamination signals and prevent foodborne outbreaks.",
    image: foodImage,
    category: "Food & Beverage",
    date: "October 15, 2025",
    readTime: "8 min read",
    url: "/blog/listeria-outbreak"
  },
  {
    id: "hospital-voc-monitoring",
    title: "Real-Time VOC Monitoring in Hospital Operating Rooms",
    description: "Explore how continuous air quality monitoring helps maintain sterile environments and detect potential contamination in critical healthcare settings.",
    image: healthcareImage,
    category: "Healthcare",
    date: "September 28, 2025",
    readTime: "6 min read",
    url: "/blog/hospital-voc-monitoring"
  },
  {
    id: "chemical-leak-prevention",
    title: "Industrial Safety: Early Detection of Chemical Leaks",
    description: "Case study on how E-Näsa's multi-gas sensors helped a manufacturing facility prevent a major chemical incident through early warning systems.",
    image: industrialImage,
    category: "Industrial Safety",
    date: "September 12, 2025",
    readTime: "7 min read",
    url: "/blog/chemical-leak-prevention"
  },
  {
    id: "airport-security-threats",
    title: "Securing International Airports: Real-Time Threat Detection at Scale",
    description: "How advanced vapor detection technology helps airports detect explosives and hazardous materials with 99.7% accuracy while maintaining passenger flow.",
    image: securityImage,
    category: "Security & Defense",
    date: "August 29, 2025",
    readTime: "9 min read",
    url: "/blog/airport-security-threats"
  },
  {
    id: "pottery-kiln-monitoring",
    title: "Kiln Fire Safety: Real-Time Gas Monitoring for Pottery Studios",
    description: "How E-Näsa's advanced gas detection prevents kiln fires, detects propane leaks, and ensures safety in pottery workshops and ceramic studios.",
    image: industrialImage,
    category: "Industrial Safety",
    date: "November 12, 2025",
    readTime: "8 min read",
    url: "/blog/pottery-kiln-monitoring"
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 2): BlogPost[] => {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return [];

  // Filter out current post and prioritize same category
  const otherPosts = blogPosts.filter(post => post.id !== currentPostId);
  
  // Sort by same category first
  const sortedPosts = otherPosts.sort((a, b) => {
    const aMatchesCategory = a.category === currentPost.category ? 1 : 0;
    const bMatchesCategory = b.category === currentPost.category ? 1 : 0;
    return bMatchesCategory - aMatchesCategory;
  });

  return sortedPosts.slice(0, limit);
};
