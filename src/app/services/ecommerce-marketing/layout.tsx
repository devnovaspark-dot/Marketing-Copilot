import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Marketing in India | Marketing Copilot',
  description: 'Elevate your e-commerce business in India with expert marketing solutions from Marketing Copilot. Drive traffic and increase conversions now!',
  keywords: [
    'E-commerce Marketing in India',
    'D2C Marketing Agency India',
    'Shopify Marketing Services',
    'E-commerce PPC Ads',
    'E-commerce ROAS Scaling',
    'Retention Marketing India',
    'Online Store Growth Agency',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/ecommerce-marketing-services-in-india',
  },
  openGraph: {
    title: 'E-commerce Marketing in India | Marketing Copilot',
    description: 'Elevate your e-commerce business in India with expert marketing solutions from Marketing Copilot. Drive traffic and increase conversions now!',
    url: 'https://marketingcopilot.in/services/ecommerce-marketing-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Marketing in India | Marketing Copilot',
    description: 'Elevate your e-commerce business in India with expert marketing solutions from Marketing Copilot. Drive traffic and increase conversions now!',
  },
};

export default function EcommerceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
