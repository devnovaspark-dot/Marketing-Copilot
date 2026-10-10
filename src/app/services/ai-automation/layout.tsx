import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing & Workflow Automation in India | Marketing Copilot',
  description: 'Discover how AI marketing and workflow automation can transform your business in India. Boost efficiency and drive results with Marketing Copilot today!',
  keywords: [
    'AI Marketing Automation India',
    'Workflow Automation Services India',
    'AI Marketing Agency',
    'CRM Automation India',
    'Automated Lead Routing',
    'AI Growth Ops India',
    'Predictive Analytics Marketing',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/services/ai-automation-services-in-india',
  },
  openGraph: {
    title: 'AI Marketing & Workflow Automation in India | Marketing Copilot',
    description: 'Discover how AI marketing and workflow automation can transform your business in India. Boost efficiency and drive results with Marketing Copilot today!',
    url: 'https://marketingcopilot.in/services/ai-automation-services-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing & Workflow Automation in India | Marketing Copilot',
    description: 'Discover how AI marketing and workflow automation can transform your business in India. Boost efficiency and drive results with Marketing Copilot today!',
  },
};

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
