import type { Metadata } from 'next';
import BlogClient, { Article } from './BlogClient';
import { sanityFetch } from '@/sanity/client';
import { postsQuery } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Digital Marketing Blog: Tips & Insights | Marketing Copilot',
  description:
    'Explore digital marketing tips, SEO strategies, paid advertising insights, social media trends, and practical ideas to grow your business.',
  keywords: [
    'Digital Marketing Blog India',
    'Digital Marketing Tips and Insights',
    'SEO Strategies Blog',
    'Paid Advertising Insights',
    'Social Media Marketing Trends',
    'Growth Marketing Articles India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/blog',
  },
  openGraph: {
    title: 'Digital Marketing Blog: Tips & Insights | Marketing Copilot',
    description:
      'Explore digital marketing tips, SEO strategies, paid advertising insights, social media trends, and practical ideas to grow your business.',
    url: 'https://marketingcopilot.in/blog',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Blog: Tips & Insights | Marketing Copilot',
    description:
      'Explore digital marketing tips, SEO strategies, paid advertising insights, social media trends, and practical ideas to grow your business.',
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

export default async function BlogPage() {
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
          urlForImage(p.bannerImage)?.width(1200).fit('max').url() ||
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

  return <BlogClient articles={articles} />;
}
