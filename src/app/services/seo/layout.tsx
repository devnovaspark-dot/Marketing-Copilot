import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best SEO Services in India| Marketing Copilot',
  description:
    'Looking for expert SEO in India? Marketing Copilot delivers results-driven solutions to improve your search rankings and grow your business.',
  keywords: [
    'SEO Services in India',
    'SEO Agency in India',
    'Local SEO Services in India',
    'Best SEO comapny in India',
    'Best SEO Company in India',
    'Technical SEO',
    'Keyword Research',
    'Content Optimisation',
    'Link Building',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/seo-services-in-india',
  },
  openGraph: {
    title: 'Best SEO Services in India| Marketing Copilot',
    description:
      'Looking for expert SEO in India? Marketing Copilot delivers results-driven solutions to improve your search rankings and grow your business.',
    url: 'https://marketingcopilot.in/services/seo-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SEO Services in India| Marketing Copilot',
    description:
      'Looking for expert SEO in India? Marketing Copilot delivers results-driven solutions to improve your search rankings and grow your business.',
  },
};

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
