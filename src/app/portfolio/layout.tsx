import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Portfolio & Projects in Bhubaneswar | Marketing Copilot',
  description:
    'Explore our digital marketing portfolio and successful projects across SEO, social media, paid ads, web development, branding, and AI-powered marketing.',
  keywords: [
    'digital marketing portfolio Bhubaneswar',
    'digital marketing case studies Bhubaneswar',
    'SEO portfolio Bhubaneswar',
    'marketing projects Bhubaneswar',
    'client results Bhubaneswar',
    'performance marketing case studies Odisha',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/portfolio',
  },
  openGraph: {
    title: 'Digital Marketing Portfolio & Projects in Bhubaneswar | Marketing Copilot',
    description:
      'Explore our digital marketing portfolio and successful projects across SEO, social media, paid ads, web development, branding, and AI-powered marketing.',
    url: 'https://marketingcopilot.in/portfolio',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Portfolio & Projects in Bhubaneswar | Marketing Copilot',
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
