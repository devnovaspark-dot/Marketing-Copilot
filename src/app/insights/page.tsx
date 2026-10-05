import type { Metadata } from 'next';
import InsightsClient, { Article } from './InsightsClient';
import { sanityFetch } from '@/sanity/client';
import { postsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Insights & Research | Marketing Copilot',
  description:
    'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
  alternates: {
    canonical: 'https://marketingcopilot.in/insights',
  },
  openGraph: {
    title: 'Insights & Research | Marketing Copilot',
    description:
      'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
    url: 'https://marketingcopilot.in/insights',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
};

export default async function InsightsPage() {
  const sanityPosts = await sanityFetch<any[]>({
    query: postsQuery,
    revalidate: 0,
  });

  const articles: Article[] = (sanityPosts || []).map((p, idx) => {
    // Generate date string
    const rawDate = p.publishedAt || p._createdAt;
    const formattedDate = rawDate
      ? new Date(rawDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : 'Recently published';

    // Banner image url
    let imageUrl = '/images/dashboard_hero.jpg';
    if (p.bannerImage?.asset) {
      try {
        imageUrl =
          urlForImage(p.bannerImage)?.width(1200).height(675).fit('crop').url() ||
          '/images/dashboard_hero.jpg';
      } catch {
        imageUrl = '/images/dashboard_hero.jpg';
      }
    }

    return {
      slug: p.slug,
      category: p.category || 'General',
      title: p.title,
      excerpt: p.excerpt || '',
      readTime: '5 min read',
      date: formattedDate,
      image: imageUrl,
      author: p.author?.name || 'Marketing Copilot Team',
      authorRole: p.author?.role || 'Growth Strategist',
      authorImage: p.author?.image?.asset
        ? urlForImage(p.author.image)?.width(100).height(100).url()
        : undefined,
      featured: idx === 0,
    };
  });

  return <InsightsClient articles={articles} />;
}
