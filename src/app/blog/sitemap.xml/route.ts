import { sanityFetch } from '@/sanity/client';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

interface SanityPostItem {
  slug: string;
  publishedAt?: string;
  _createdAt?: string;
  _updatedAt?: string;
  noIndex?: boolean;
}

export async function GET() {
  const baseUrl = 'https://marketingcopilot.in';
  const currentDate = new Date().toISOString();

  // Fetch published blog articles dynamically from Sanity CMS
  const sanityPosts = await sanityFetch<SanityPostItem[]>({
    query: `*[_type == "post" && defined(slug.current) && noIndex != true] | order(coalesce(publishedAt, _createdAt) desc) {
      "slug": slug.current,
      publishedAt,
      _createdAt,
      _updatedAt
    }`,
    revalidate: 3600,
  }).catch(() => [] as SanityPostItem[]);

  const entries: string[] = [
    `  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  ];

  (sanityPosts || []).forEach((post) => {
    const postDate = post._updatedAt || post.publishedAt || post._createdAt || currentDate;
    const isoDate = new Date(postDate).toISOString();
    entries.push(`  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
