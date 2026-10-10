import type { Metadata } from 'next';
import InsightsPage from '@/app/insights/page';

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

export default InsightsPage;
