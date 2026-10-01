import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top SEO Agency in Bhubaneswar | Search Engine Optimization Services',
  description: 'Rank #1 on Google with the leading SEO agency in Bhubaneswar. Technical SEO, Google Map Pack dominance, high-intent topic authority, and compounding organic traffic.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/seo',
  },
  openGraph: {
    title: 'Top SEO Agency in Bhubaneswar | Search Engine Optimization Services',
    description: 'Rank #1 on Google with the leading SEO agency in Bhubaneswar. Technical SEO, Google Map Pack dominance, and compounding organic traffic.',
    url: 'https://marketingcopilot.in/services/seo',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top SEO Agency in Bhubaneswar | Search Engine Optimization Services',
    description: 'Rank #1 on Google with the leading SEO agency in Bhubaneswar. Technical SEO, Google Map Pack dominance, and compounding organic traffic.',
  },
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
