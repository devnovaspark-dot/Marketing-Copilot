import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Services in India| Marketing Copilot',
  description: 'Discover powerful Google Ads solutions in India. Maximize your ROI and grow your business with our expert strategies.',
  keywords: [
    'Google Ads Services in India',
    'Google Ads Service',
    'Google Ads Agency in India',
    'Google PPC Management',
    'Google PPC Experts',
    'Performance Max Campaigns India',
    'Search Engine Advertising Agency',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/google-ads-services-in-india',
  },
  openGraph: {
    title: 'Google Ads Services in India| Marketing Copilot',
    description: 'Discover powerful Google Ads solutions in India. Maximize your ROI and grow your business with our expert strategies.',
    url: 'https://marketingcopilot.in/services/google-ads-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Services in India| Marketing Copilot',
    description: 'Discover powerful Google Ads solutions in India. Maximize your ROI and grow your business with our expert strategies.',
  },
};

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
