import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Digital Marketing Questions Answered | India',
  description:
    'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in India.',
  keywords: [
    'FAQ digital marketing India',
    'digital marketing questions India',
    'digital marketing cost India',
    'SEO FAQ India',
    'Google ads questions India',
    'social media marketing questions Odisha',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/faq',
  },
  openGraph: {
    title: 'FAQ – Digital Marketing Questions Answered | India | Marketing Copilot',
    description:
      'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in India.',
    url: 'https://marketingcopilot.in/faq',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ – Digital Marketing Questions Answered | India | Marketing Copilot',
    description:
      'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in India.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
