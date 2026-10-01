import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amazon Marketing Agency in Bhubaneswar | Amazon PPC & Marketplace Growth',
  description: 'Dominate Amazon search with specialized Amazon ads, A+ content, brand store development, and organic ranking optimization in Bhubaneswar.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/amazon-marketing',
  },
  openGraph: {
    title: 'Amazon Marketing Agency in Bhubaneswar | Amazon PPC & Marketplace Growth',
    description: 'Dominate Amazon search with specialized Amazon ads and marketplace scaling.',
    url: 'https://marketingcopilot.in/services/amazon-marketing',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Marketing Agency in Bhubaneswar | Amazon PPC & Marketplace Growth',
    description: 'Dominate Amazon search with specialized Amazon ads and marketplace scaling.',
  },
};

export default function AmazonMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
