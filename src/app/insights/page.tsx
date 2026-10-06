import type { Metadata } from 'next';
import InsightsClient, { Article } from './InsightsClient';
import { sanityFetch } from '@/sanity/client';
import { postsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import { FALLBACK_ARTICLES } from '@/data/fallbackArticles';

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

interface SanityPostRecord {
  slug: string;
  title: string;
  category?: string;
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
      category: p.category || 'Digital Marketing',
      title: p.title,
      excerpt: p.excerpt || '',
      readTime: '6 min read',
      date: formattedDate,
      image: imageUrl,
      author: p.author?.name || 'Marketing Copilot Team',
      authorRole: p.author?.role || 'Growth Strategist',
      authorImage: p.author?.image?.asset
        ? urlForImage(p.author.image)?.width(100).height(100).url()
        : '/images/ceo_aarav.jpg',
      featured: idx === 0,
      takeaways: [
        'Multi-channel local marketing engine built for high-intent customer acquisition',
        'Direct synergy between Local SEO, review velocity, and Google 3-Pack prominence',
        'High-converting landing page experiences that protect customer acquisition costs',
      ],
    };
  });

  // Blend with companion editorial articles if they are not already published in Sanity
  const liveSlugs = new Set((sanityPosts || []).map((p) => p.slug));
  const companionArticles: Article[] = FALLBACK_ARTICLES.filter(
    (fa) => !liveSlugs.has(fa.slug)
  ).map((fa) => ({
    slug: fa.slug,
    category: fa.category,
    title: fa.title,
    excerpt: fa.excerpt,
    readTime: fa.readTime,
    date: fa.date,
    image: fa.image,
    author: fa.author,
    authorRole: fa.authorRole,
    authorImage: fa.authorImage,
    featured: false,
    takeaways: fa.takeaways,
  }));

  const allArticles: Article[] = [...articles, ...companionArticles];
  if (allArticles.length > 0) {
    allArticles[0].featured = true;
  }

  return <InsightsClient articles={allArticles} />;
}
