import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing FAQs: Expert Answers | Marketing Copilot',
  description:
    'Find answers to common digital marketing questions about SEO, Google Ads, Meta Ads, pricing, website development, and business growth.',
  keywords: [
    'FAQ digital marketing India',
    'digital marketing questions India',
    'digital marketing cost India',
    'SEO FAQ India',
    'Google ads questions India',
    'social media marketing questions India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/faq',
  },
  openGraph: {
    title: 'Digital Marketing FAQs: Expert Answers | Marketing Copilot',
    description:
      'Find answers to common digital marketing questions about SEO, Google Ads, Meta Ads, pricing, website development, and business growth.',
    url: 'https://marketingcopilot.in/faq',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing FAQs: Expert Answers | Marketing Copilot',
    description:
      'Find answers to common digital marketing questions about SEO, Google Ads, Meta Ads, pricing, website development, and business growth.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
