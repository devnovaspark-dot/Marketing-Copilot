import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in India | Marketing Copilot',
  description:
    'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth across India.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/performance-marketing-in-india',
  },
  openGraph: {
    title: 'Performance Marketing Agency in India | Marketing Copilot',
    description:
      'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth across India.',
    url: 'https://marketingcopilot.in/services/performance-marketing-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency in India | Marketing Copilot',
    description:
      'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth across India.',
  },
};

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
