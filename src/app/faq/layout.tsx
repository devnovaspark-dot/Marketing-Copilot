import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing FAQs: Expert Answers | Marketing Copilot',
  description:
    'Find answers to common digital marketing questions about SEO, Google Ads, Meta Ads, pricing, website development, and business growth.',
  keywords: [
    'Digital Marketing FAQ India',
    'Digital Marketing Questions Answered',
    'Digital Marketing Cost India',
    'SEO FAQ India',
    'Google Ads Questions India',
    'Social Media Marketing Questions India',
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
