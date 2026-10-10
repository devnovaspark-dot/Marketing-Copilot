import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amazon Marketing Agency in India | Marketing Copilot',
  description: 'Dominate Amazon search with specialized Amazon ads, A+ content, brand store development, and organic ranking optimization in India.',
  keywords: [
    'Amazon Marketing Agency in India',
    'Amazon PPC Agency India',
    'Amazon Ads Management',
    'Amazon A+ Content Development',
    'Amazon Brand Store Setup',
    'Amazon Organic Ranking Optimization',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/amazon-marketing-services-in-india',
  },
  openGraph: {
    title: 'Amazon Marketing Agency in India | Marketing Copilot',
    description: 'Dominate Amazon search with specialized Amazon ads, A+ content, brand store development, and organic ranking optimization in India.',
    url: 'https://marketingcopilot.in/services/amazon-marketing-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Marketing Agency in India | Marketing Copilot',
    description: 'Dominate Amazon search with specialized Amazon ads, A+ content, brand store development, and organic ranking optimization in India.',
  },
};

export default function AmazonMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
