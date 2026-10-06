import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marketingcopilot.in';
  const currentDate = new Date();

  // Core High-Level Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/digital-marketing-company-in-bhubaneswar`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dedicated Service Pages (Recommended Local SEO URLs in Bhubaneswar)
  const services = [
    'seo-services-in-bhubaneswar',
    'google-ads-services-in-bhubaneswar',
    'social-media-marketing-in-bhubaneswar',
    'performance-marketing-in-bhubaneswar',
    'web-development-in-bhubaneswar',
    'ai-automation-services-in-bhubaneswar',
    'amazon-marketing-services-in-bhubaneswar',
    'creative-branding-services-in-bhubaneswar',
    'ecommerce-marketing-services-in-bhubaneswar',
    'local-seo-services-in-bhubaneswar',
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Case Studies
  const caseStudies = [
    'ecommerce-brand',
    'real-estate',
    'd2c-fashion',
    'restaurant-chain',
    'edtech-startup',
    'healthcare-brand',
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Insights Articles
  const articles = [
    'future-of-performance-marketing',
    'seo-in-2026',
    'building-brand-recall',
    'social-media-strategy-2026',
    'roas-myths',
    'website-conversion-rate',
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
  ];
}
