export const generateBlogSEO = ({
  title,
  description,
  slug,
  image,
  datePublished,
  category = "Article"
}) => {
  const baseUrl = "https://enasa.designcodeit.com";
  const fullUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  return {
    title: `${title} | AirLytiq ENäsa`,
    description,
    canonical: fullUrl,
    ogTitle: title,
    ogDescription: description,
    ogUrl: fullUrl,
    ogImage: imageUrl,
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      },
      "author": { 
        "@type": "Organization", 
        "name": "AirLytiq" 
      },
      "publisher": {
        "@type": "Organization",
        "name": "AirLytiq ENäsa",
        "logo": { 
          "@type": "ImageObject", 
          "url": `${baseUrl}/logo.png` 
        }
      },
      "datePublished": datePublished,
      "dateModified": datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      }
    }
  };
};