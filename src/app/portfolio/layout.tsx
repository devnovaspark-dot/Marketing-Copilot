import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Portfolio & Projects in India',
  description:
    'Explore our digital marketing portfolio and successful projects across SEO, social media, paid ads, web development, branding, and AI-powered marketing.',
  keywords: [
    'digital marketing portfolio India',
    'digital marketing case studies India',
    'SEO portfolio India',
    'marketing projects India',
    'client results India',
    'performance marketing case studies Odisha',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/portfolio',
  },
  openGraph: {
    title: 'Digital Marketing Portfolio & Projects in India | Marketing Copilot',
    description:
      'Explore our digital marketing portfolio and successful projects across SEO, social media, paid ads, web development, branding, and AI-powered marketing.',
    url: 'https://marketingcopilot.in/portfolio',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Portfolio & Projects in India | Marketing Copilot',
    description:
      'Explore our digital marketing portfolio and successful projects across SEO, social media, paid ads, web development, branding, and AI-powered marketing.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
