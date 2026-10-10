import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Growth Partner in India | Marketing Copilot',
  description:
    'Ready to grow your business with digital marketing? SEO, PPC Google Ads, Meta Ads, Social Media, GEO/AEO, and Conversion Websites. Work with India’s premier digital growth partner.',
  keywords: [
    'Digital Growth Partner in India',
    'Full Stack Marketing Agency India',
    'Business Revenue Scaling',
    'Growth Marketing Partner India',
    'Digital Transformation Partner',
    'PPC and SEO Growth Partner',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/digital-growth-partner',
  },
  openGraph: {
    title: 'Digital Growth Partner in India | Marketing Copilot',
    description:
      'Ready to grow your business with digital marketing? SEO, PPC Google Ads, Meta Ads, Social Media, GEO/AEO, and Conversion Websites. Work with India’s premier digital growth partner.',
    url: 'https://marketingcopilot.in/services/digital-growth-partner',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth Partner in India | Marketing Copilot',
    description:
      'Ready to grow your business with digital marketing? SEO, PPC Google Ads, Meta Ads, Social Media, GEO/AEO, and Conversion Websites. Work with India’s premier digital growth partner.',
  },
};

export default function DigitalGrowthPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
