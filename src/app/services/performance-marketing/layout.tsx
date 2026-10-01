import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Bhubaneswar | Full-Funnel Growth',
  description: 'Data-engineered performance marketing agency in Bhubaneswar. Multi-channel attribution, conversion rate optimization, and scalable acquisition economics.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing Agency in Bhubaneswar | Full-Funnel Growth',
    description: 'Data-engineered performance marketing agency in Bhubaneswar. Multi-channel attribution and scalable acquisition economics.',
    url: 'https://marketingcopilot.in/services/performance-marketing',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency in Bhubaneswar | Full-Funnel Growth',
    description: 'Data-engineered performance marketing agency in Bhubaneswar.',
  },
};

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
