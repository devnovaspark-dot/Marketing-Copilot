import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Insights, Guides & Growth Strategies | Marketing Copilot',
  description: 'Actionable performance marketing breakdowns, SEO research, branding frameworks, and algorithmic updates from the operators at Marketing Copilot in Bhubaneswar.',
  alternates: {
    canonical: 'https://marketingcopilot.in/insights',
  },
  openGraph: {
    title: 'Digital Marketing Insights, Guides & Growth Strategies | Marketing Copilot',
    description: 'Actionable performance marketing breakdowns, SEO research, and growth frameworks.',
    url: 'https://marketingcopilot.in/insights',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Insights, Guides & Growth Strategies | Marketing Copilot',
    description: 'Actionable performance marketing breakdowns and SEO research.',
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
