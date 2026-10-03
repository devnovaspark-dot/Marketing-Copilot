import type { Metadata } from 'next';
import InsightsClient, { Article } from './InsightsClient';
import { sanityFetch } from '@/sanity/client';
import { postsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';

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

const fallbackArticles: Article[] = [
  {
    slug: 'future-of-performance-marketing',
    category: 'Marketing',
    title: 'The future of performance marketing in an AI-first world.',
    excerpt:
      'AI is fundamentally reshaping how campaigns are created, targeted, and optimized. Here is what every high-growth brand and CMO needs to execute right now.',
    readTime: '8 min read',
    date: 'Sep 5, 2026',
    image: '/images/dashboard_hero.jpg',
    author: 'Aarav Sharma',
    authorRole: 'CEO & Growth Strategist',
    featured: true,
  },
  {
    slug: 'seo-in-2026',
    category: 'SEO',
    title: 'SEO in 2026: What actually works and what to completely ignore.',
    excerpt:
      'The technical fundamentals are stronger than ever, but LLM search and entity mapping have changed rank algorithms completely. A practical blueprint.',
    readTime: '6 min read',
    date: 'Aug 28, 2026',
    image: '/images/work_realestate.jpg',
    author: 'Ananya Mishra',
    authorRole: 'Lead SEO Strategist',
    featured: false,
  },
  {
    slug: 'building-brand-recall',
    category: 'Branding',
    title: 'How to build unbreakable brand recall in a world of infinite content.',
    excerpt:
      'With consumer attention fragmented across a thousand screens, here is how the most durable brands build emotional moats that stick in memory.',
    readTime: '5 min read',
    date: 'Aug 20, 2026',
    image: '/images/about_hero.jpg',
    author: 'Sanjay Mohanty',
    authorRole: 'Chief Marketing Officer',
    featured: false,
  },
  {
    slug: 'social-media-strategy-2026',
    category: 'Social',
    title: 'The short-form social strategy that drove 200K followers in 9 months.',
    excerpt:
      'A complete behind-the-scenes teardown of the creative hooks, production cadence, and community loops we used to scale an Indian D2C brand.',
    readTime: '7 min read',
    date: 'Aug 12, 2026',
    image: '/images/work_fashion.jpg',
    author: 'Kavya Reddy',
    authorRole: 'Head of Social',
    featured: false,
  },
  {
    slug: 'roas-myths',
    category: 'Marketing',
    title: '5 dangerous ROAS myths that are quietly burning your media budget.',
    excerpt:
      'High blended ROAS on dashboard does not guarantee commercial net profitability. Here is a scientific framework to evaluate true incremental return.',
    readTime: '5 min read',
    date: 'Aug 5, 2026',
    image: '/images/services_performance.jpg',
    author: 'Sneha Nayak',
    authorRole: 'Head of Paid Media',
    featured: false,
  },
  {
    slug: 'website-conversion-rate',
    category: 'Technology',
    title: 'Why your website converts at 1.2% and the 6 fixes to double it.',
    excerpt:
      'Most high-traffic websites leak money at friction points. Here are the exact UX architectures, speed boosts, and psychological triggers that turn visitors into customers.',
    readTime: '6 min read',
    date: 'Jul 28, 2026',
    image: '/images/work_ecommerce.jpg',
    author: 'Rohan Senapati',
    authorRole: 'Head of Technology',
    featured: false,
  },
];

export default async function InsightsPage() {
  const sanityPosts = await sanityFetch<any[]>({ query: postsQuery });

  let combinedArticles = [...fallbackArticles];

  if (sanityPosts && sanityPosts.length > 0) {
    const formattedSanityPosts: Article[] = sanityPosts.map((p, idx) => ({
      slug: p.slug,
      category: p.category || 'Marketing',
      title: p.title,
      excerpt: p.excerpt || '',
      readTime: '5 min read',
      date: p.publishedAt
        ? new Date(p.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : 'Recent',
      image: p.bannerImage?.asset
        ? urlForImage(p.bannerImage)?.width(800).height(450).url() || '/images/dashboard_hero.jpg'
        : '/images/dashboard_hero.jpg',
      author: p.author?.name || 'Marketing Copilot',
      authorRole: p.author?.role || 'Growth Strategist',
      featured: idx === 0,
    }));

    // Prepend fresh Sanity posts
    combinedArticles = [...formattedSanityPosts, ...fallbackArticles];
  }

  return <InsightsClient articles={combinedArticles} />;
}
