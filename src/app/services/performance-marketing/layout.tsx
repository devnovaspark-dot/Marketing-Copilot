import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Bhubaneswar | Nova Spark Digital',
  description:
    'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing Agency in Bhubaneswar | Nova Spark Digital',
    description:
      'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth.',
    url: 'https://marketingcopilot.in/services/performance-marketing',
    siteName: 'Nova Spark Digital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency in Bhubaneswar | Nova Spark Digital',
    description:
      'From Google Ads and Meta Ads to landing page optimisation, remarketing, audience targeting, and conversion tracking, we build performance-driven campaigns focused on qualified leads, sales, and revenue growth.',
  },
};

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
