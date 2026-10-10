import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Portfolio & Case Studies | Marketing Copilot',
  description:
    'Explore Marketing Copilot’s portfolio, campaign strategies, and project highlights across SEO, paid ads, social media, and digital growth.',
  keywords: [
    'Digital Marketing Portfolio India',
    'Digital Marketing Case Studies India',
    'SEO Portfolio India',
    'Marketing Projects India',
    'Client Growth Results India',
    'Performance Marketing Case Studies India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/portfolio',
  },
  openGraph: {
    title: 'Digital Marketing Portfolio & Case Studies | Marketing Copilot',
    description:
      'Explore Marketing Copilot’s portfolio, campaign strategies, and project highlights across SEO, paid ads, social media, and digital growth.',
    url: 'https://marketingcopilot.in/portfolio',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Portfolio & Case Studies | Marketing Copilot',
    description:
      'Explore Marketing Copilot’s portfolio, campaign strategies, and project highlights across SEO, paid ads, social media, and digital growth.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
