import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Digital Marketing Company in India',
  description:
    'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
  keywords: [
    'digital marketing company India',
    'about digital marketing company india',
    'digital marketing agency India',
    'best digital marketing company in India',
    'growth marketing agency Odisha',
    'marketing copilot India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/about',
  },
  openGraph: {
    title: 'About Our Digital Marketing Company in India | Marketing Copilot',
    description:
      'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
    url: 'https://marketingcopilot.in/about',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Digital Marketing Company in India | Marketing Copilot',
    description:
      'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
