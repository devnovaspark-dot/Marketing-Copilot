import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Agency in Bhubaneswar | High-ROAS Search Campaigns',
  description: 'Certified Google Ads company in Bhubaneswar. High-intent search, Performance Max, zero ad waste negative keyword shielding, and proven ROI scaling.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/google-ads',
  },
  openGraph: {
    title: 'Google Ads & PPC Agency in Bhubaneswar | High-ROAS Search Campaigns',
    description: 'Certified Google Ads company in Bhubaneswar. High-intent search, Performance Max, zero ad waste, and proven ROI scaling.',
    url: 'https://marketingcopilot.in/services/google-ads',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads & PPC Agency in Bhubaneswar | High-ROAS Search Campaigns',
    description: 'Certified Google Ads company in Bhubaneswar. High-intent search, Performance Max, zero ad waste, and proven ROI scaling.',
  },
};

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
