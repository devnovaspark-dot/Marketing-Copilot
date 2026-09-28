import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Digital Marketing Questions Answered | Bhubaneswar | Marketing Copilot',
  description:
    'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in Bhubaneswar.',
  keywords: [
    'FAQ digital marketing Bhubaneswar',
    'digital marketing questions Bhubaneswar',
    'digital marketing cost Bhubaneswar',
    'SEO FAQ Bhubaneswar',
    'Google ads questions Bhubaneswar',
    'social media marketing questions Odisha',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/faq',
  },
  openGraph: {
    title: 'FAQ – Digital Marketing Questions Answered | Bhubaneswar | Marketing Copilot',
    description:
      'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in Bhubaneswar.',
    url: 'https://marketingcopilot.in/faq',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ – Digital Marketing Questions Answered | Bhubaneswar | Marketing Copilot',
    description:
      'FAQ covering digital marketing, SEO, social media, paid ads, web development, branding, AI automation, and other services for businesses in Bhubaneswar.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
