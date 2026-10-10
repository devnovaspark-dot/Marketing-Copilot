import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Insights & Strategies | Marketing Copilot',
  description: 'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
  keywords: [
    'Marketing Insights and Strategies',
    'Digital Marketing Insights India',
    'Technical SEO Benchmarks',
    'Paid Media Breakdowns',
    'Growth Marketing Playbooks',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/insights',
  },
  openGraph: {
    title: 'Marketing Insights & Strategies | Marketing Copilot',
    description: 'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
    url: 'https://marketingcopilot.in/insights',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Insights & Strategies | Marketing Copilot',
    description: 'Strategic marketing playbooks, technical SEO benchmarks, paid media breakdowns, and growth research from senior operators at Marketing Copilot.',
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
