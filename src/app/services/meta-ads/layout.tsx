import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Services in India | Marketing Copilot',
  description: 'Discover effective Meta Ads services in India with Marketing Copilot. Maximize your online presence and reach your target audience today!',
  keywords: [
    'Meta Ads Services in India',
    'Facebook Ads Agency India',
    'Instagram Advertising Agency',
    'Meta Ads Management India',
    'Paid Social Media Campaigns',
    'High-Converting Social Ads',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
  },
  openGraph: {
    title: 'Meta Ads Services in India | Marketing Copilot',
    description: 'Discover effective Meta Ads services in India with Marketing Copilot. Maximize your online presence and reach your target audience today!',
    url: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Services in India | Marketing Copilot',
    description: 'Discover effective Meta Ads services in India with Marketing Copilot. Maximize your online presence and reach your target audience today!',
  },
};

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
