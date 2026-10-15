import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/sanity/client';

interface SanityPostSitemapItem {
  slug: string;
  publishedAt?: string;
  _createdAt?: string;
  noIndex?: boolean;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    'linkedin-marketing-services-in-india',
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

  // Fetch real published blog articles dynamically from Sanity CMS
  const sanityPosts = await sanityFetch<SanityPostSitemapItem[]>({
    query: `*[_type == "post" && defined(slug.current) && noIndex != true] | order(coalesce(publishedAt, _createdAt) desc) {
      "slug": slug.current,
      publishedAt,
      _createdAt
    }`,
    revalidate: 3600,
  }).catch(() => []);

  const articleRoutes: MetadataRoute.Sitemap = (sanityPosts || []).map((post) => {
    const postDate = post.publishedAt || post._createdAt;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate ? new Date(postDate) : currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
  ];
}
