import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO Services in Bhubaneswar | Google Maps Top 3 Ranking',
  description: 'Dominate Google Local Map Pack across Bhubaneswar. Google Business Profile optimization, review acceleration, local citations, and geo-targeted authority.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/local-seo-services-in-bhubaneswar',
  },
  openGraph: {
    title: 'Local SEO Services in Bhubaneswar | Google Maps Top 3 Ranking',
    description: 'Dominate Google Local Map Pack across Bhubaneswar. Google Business Profile optimization and review acceleration.',
    url: 'https://marketingcopilot.in/services/local-seo-services-in-bhubaneswar',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in Bhubaneswar | Google Maps Top 3 Ranking',
    description: 'Dominate Google Local Map Pack across Bhubaneswar with top local SEO agency.',
  },
};

export default function LocalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
