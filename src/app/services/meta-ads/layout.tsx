import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth | Marketing Copilot',
  description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns across India that generate qualified leads and measurable growth.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
  },
  openGraph: {
    title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth | Marketing Copilot',
    description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns across India that generate qualified leads and measurable growth.',
    url: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth | Marketing Copilot',
    description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns across India that generate qualified leads and measurable growth.',
  },
};

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
