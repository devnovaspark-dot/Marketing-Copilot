import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing in India | Marketing Copilot',
  description:
    'Elevate your business with expert performance marketing in India. Marketing Copilot offers tailored strategies to maximize your online presence.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/performance-marketing-in-india',
  },
  openGraph: {
    title: 'Performance Marketing in India | Marketing Copilot',
    description:
      'Elevate your business with expert performance marketing in India. Marketing Copilot offers tailored strategies to maximize your online presence.',
    url: 'https://marketingcopilot.in/services/performance-marketing-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing in India | Marketing Copilot',
    description:
      'Elevate your business with expert performance marketing in India. Marketing Copilot offers tailored strategies to maximize your online presence.',
  },
};

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
