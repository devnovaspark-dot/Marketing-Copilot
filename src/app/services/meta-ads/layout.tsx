import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta & Facebook Ads Agency in Bhubaneswar | Instagram Ads Growth',
  description: 'Scale direct-response sales with Bhubaneswar’s top Meta Ads agency. High-velocity creative sprints, Advantage+ AI targeting, and first-party data tracking.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/meta-ads',
  },
  openGraph: {
    title: 'Meta & Facebook Ads Agency in Bhubaneswar | Instagram Ads Growth',
    description: 'Scale direct-response sales with Bhubaneswar’s top Meta Ads agency. High-velocity creative sprints and Advantage+ AI targeting.',
    url: 'https://marketingcopilot.in/services/meta-ads',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta & Facebook Ads Agency in Bhubaneswar | Instagram Ads Growth',
    description: 'Scale direct-response sales with Bhubaneswar’s top Meta Ads agency. High-velocity creative sprints and Advantage+ AI targeting.',
  },
};

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
