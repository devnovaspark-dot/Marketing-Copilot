import type { Metadata } from 'next';
import InsightsClient, { Article } from './InsightsClient';
import { sanityFetch } from '@/sanity/client';
import { postsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Marketing Insights & Strategies | Marketing Copilot',
  description:
    'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
  keywords: [
    'Marketing Insights and Strategies',
    'Digital Marketing Insights India',
    'Technical SEO Benchmarks',
    'Paid Media Breakdowns',
    'Growth Marketing Playbooks',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/insights',
  },
  openGraph: {
    title: 'Marketing Insights & Strategies | Marketing Copilot',
    description:
      'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
    url: 'https://marketingcopilot.in/insights',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Insights & Strategies | Marketing Copilot',
    description:
      'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
  },
};

interface SanityPostRecord {
  slug: string;
  title: string;
  category?: string | { title?: string };
  excerpt?: string;
  publishedAt?: string;
  _createdAt?: string;
  bannerImage?: {
    asset?: {
      _ref?: string;
    };
  };
  author?: {
    name?: string;
    role?: string;
    image?: {
      asset?: {
        _ref?: string;
      };
    };
  };
}

export default async function InsightsPage() {
  const sanityPosts = await sanityFetch<SanityPostRecord[]>({
    query: postsQuery,
    revalidate: 0,
  }).catch(() => []);

  const articles: Article[] = (sanityPosts || []).map((p, idx) => {
    const rawDate = p.publishedAt || p._createdAt;
    const formattedDate = rawDate
      ? new Date(rawDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : 'Recently published';

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

    const categoryTitle =
      typeof p.category === 'object' && p.category !== null
        ? p.category.title || 'Digital Marketing'
        : p.category || 'Digital Marketing';

    return {
      slug: p.slug,
      category: categoryTitle,
      title: p.title,
      excerpt: p.excerpt || '',
      readTime: '7 min read',
      date: formattedDate,
      image: imageUrl,
      author: p.author?.name || 'Sankarsan Nayak',
      authorRole: p.author?.role || 'Founder & CEO',
      authorImage: p.author?.image?.asset
        ? urlForImage(p.author.image)?.width(100).height(100).url()
        : '/images/team/exec_1.png',
      featured: idx === 0,
    };
  });

  return <InsightsClient articles={articles} />;
}
