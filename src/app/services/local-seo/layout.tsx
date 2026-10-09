import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Services in India | Marketing Copilot',
  description: 'Dominate Google Local Map Pack across India. Google Business Profile optimization, review acceleration, local citations, and geo-targeted authority.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/local-seo-services-in-india',
  },
  openGraph: {
    title: 'Local SEO Services in India | Marketing Copilot',
    description: 'Dominate Google Local Map Pack across India. Google Business Profile optimization, review acceleration, local citations, and geo-targeted authority.',
    url: 'https://marketingcopilot.in/services/local-seo-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in India | Marketing Copilot',
    description: 'Dominate Google Local Map Pack across India. Google Business Profile optimization, review acceleration, local citations, and geo-targeted authority.',
  },
};

export default function LocalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
