import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Company Services in Bhubaneswar | Marketing Copilot',
  description:
    'Explore digital marketing company services in Bhubaneswar, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
  keywords: [
    'digital marketing company services Bhubaneswar',
    'digital marketing services Bhubaneswar',
    'SEO services Bhubaneswar',
    'Google Ads agency Bhubaneswar',
    'Meta ads agency Bhubaneswar',
    'social media marketing Bhubaneswar',
    'web development company Bhubaneswar',
    'branding agency Bhubaneswar',
    'AI marketing automation Bhubaneswar',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services',
  },
  openGraph: {
    title: 'Digital Marketing Company Services in Bhubaneswar | Marketing Copilot',
    description:
      'Explore digital marketing company services in Bhubaneswar, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
    url: 'https://marketingcopilot.in/services',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company Services in Bhubaneswar | Marketing Copilot',
    description:
      'Explore digital marketing company services in Bhubaneswar, including SEO, Google Ads, Meta Ads, social media, web development, branding, and AI automation.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
