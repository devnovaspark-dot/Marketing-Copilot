import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Marketing Agency in Bhubaneswar | Nova Spark Digital',
  description: 'Make Google your growth channel. Build stronger search visibility with SEO strategies designed to attract relevant customers, improve rankings and generate sustainable organic traffic.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/seo-services-in-bhubaneswar',
  },
  openGraph: {
    title: 'SEO Marketing Agency in Bhubaneswar | Nova Spark Digital',
    description: 'Make Google your growth channel. Build stronger search visibility with SEO strategies designed to attract relevant customers, improve rankings and generate sustainable organic traffic.',
    url: 'https://marketingcopilot.in/services/seo-services-in-bhubaneswar',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Marketing Agency in Bhubaneswar | Nova Spark Digital',
    description: 'Make Google your growth channel. Build stronger search visibility with SEO strategies designed to attract relevant customers, improve rankings and generate sustainable organic traffic.',
  },
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
