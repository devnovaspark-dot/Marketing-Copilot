import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Company Services in India',
  description:
    'Explore digital marketing company services in India, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
  keywords: [
    'digital marketing company services India',
    'digital marketing services India',
    'SEO services India',
    'Google Ads agency India',
    'Meta ads agency India',
    'social media marketing India',
    'web development company India',
    'branding agency India',
    'AI marketing automation India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services',
  },
  openGraph: {
    title: 'Digital Marketing Company Services in India | Marketing Copilot',
    description:
      'Explore digital marketing company services in India, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
    url: 'https://marketingcopilot.in/services',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company Services in India | Marketing Copilot',
    description:
      'Explore digital marketing company services in India, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
