import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Service in India | Marketing Copilot',
  description: 'Discover powerful Google Ads solutions in India with Marketing Copilot. Maximize your ROI and grow your business with our expert strategies.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/google-ads-services-in-india',
  },
  openGraph: {
    title: 'Google Ads Service in India | Marketing Copilot',
    description: 'Discover powerful Google Ads solutions in India with Marketing Copilot. Maximize your ROI and grow your business with our expert strategies.',
    url: 'https://marketingcopilot.in/services/google-ads-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Service in India | Marketing Copilot',
    description: 'Discover powerful Google Ads solutions in India with Marketing Copilot. Maximize your ROI and grow your business with our expert strategies.',
  },
};

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
