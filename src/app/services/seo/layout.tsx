import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO That Drives Traffic, Leads, and Business Growth | Marketing Copilot',
  description:
    'Search engine optimisation helps your website appear in relevant search results and connect with potential customers. At Marketing Copilot, we focus on improving online visibility, attracting quality traffic, and supporting long-term business growth.',
  keywords: [
    'SEO That Drives Traffic Leads and Business Growth',
    'Marketing Copilot SEO',
    'Technical SEO',
    'Keyword Research',
    'Content Optimisation',
    'Link Building',
    'Local SEO',
    'Best SEO Company in India',
    'SEO Services in India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/seo-services-in-india',
  },
  openGraph: {
    title: 'SEO That Drives Traffic, Leads, and Business Growth | Marketing Copilot',
    description:
      'Search engine optimisation helps your website appear in relevant search results and connect with potential customers. At Marketing Copilot, we focus on improving online visibility, attracting quality traffic, and supporting long-term business growth.',
    url: 'https://marketingcopilot.in/services/seo-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO That Drives Traffic, Leads, and Business Growth | Marketing Copilot',
    description:
      'Search engine optimisation helps your website appear in relevant search results and connect with potential customers. Tailored SEO strategies by Marketing Copilot.',
  },
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
