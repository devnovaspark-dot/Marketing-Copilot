import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/sanity/client';

interface SanityPostSitemapItem {
  slug: string;
  publishedAt?: string;
  _createdAt?: string;
  _updatedAt?: string;
  noIndex?: boolean;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://marketingcopilot.in';
  const currentDate = new Date();

  // Blog Hub Page
  const blogHubRoute: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Fetch real published blog articles dynamically from Sanity CMS
  const sanityPosts = await sanityFetch<SanityPostSitemapItem[]>({
    query: `*[_type == "post" && defined(slug.current) && noIndex != true] | order(coalesce(publishedAt, _createdAt) desc) {
      "slug": slug.current,
      publishedAt,
      _createdAt,
      _updatedAt
    }`,
    revalidate: 3600,
  }).catch(() => []);

  const articleRoutes: MetadataRoute.Sitemap = (sanityPosts || []).map((post) => {
    const postDate = post._updatedAt || post.publishedAt || post._createdAt;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate ? new Date(postDate) : currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [
    ...blogHubRoute,
    ...articleRoutes,
  ];
}
