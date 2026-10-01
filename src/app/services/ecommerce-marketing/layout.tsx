import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Marketing Agency in Bhubaneswar | D2C Scaling & ROAS',
  description: 'Scale your D2C or online store revenue. Shopify optimization, high-converting funnel design, catalog ads, and retention email flows.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/ecommerce-marketing',
  },
  openGraph: {
    title: 'E-Commerce Marketing Agency in Bhubaneswar | D2C Scaling & ROAS',
    description: 'Scale your D2C or online store revenue with expert performance marketing.',
    url: 'https://marketingcopilot.in/services/ecommerce-marketing',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Marketing Agency in Bhubaneswar | D2C Scaling & ROAS',
    description: 'Scale your D2C or online store revenue with expert performance marketing.',
  },
};

export default function EcommerceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
