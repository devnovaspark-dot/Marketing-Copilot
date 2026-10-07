import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth',
  description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns in India and Odisha that generate qualified leads and measurable growth.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
  },
  openGraph: {
    title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth',
    description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns in India and Odisha that generate qualified leads and measurable growth.',
    url: 'https://marketingcopilot.in/services/meta-ads-services-in-india',
    siteName: 'Nova Spark Digital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Agency In India | Facebook & Instagram Ads Growth',
    description: 'Make every Meta ad work harder. Targeted Facebook and Instagram ad campaigns in India and Odisha that generate qualified leads and measurable growth.',
  },
};

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
