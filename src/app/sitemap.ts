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
      url: `${baseUrl}/digital-marketing-company-in-india`,
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
      url: `${baseUrl}/blog`,
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

  // Dedicated Service Pages (Recommended URLs in India)
  const services = [
    'seo-services-in-india',
    'google-ads-services-in-india',
    'social-media-marketing-in-india',
    'performance-marketing-in-india',
    'web-development-in-india',
    'ai-automation-services-in-india',
    'amazon-marketing-services-in-india',
    'creative-branding-services-in-india',
    'ecommerce-marketing-services-in-india',
    'local-seo-services-in-india',
    'digital-growth-partner',
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
