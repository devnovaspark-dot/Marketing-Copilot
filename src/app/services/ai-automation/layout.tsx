import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Marketing & Workflow Automation in Bhubaneswar | Growth Ops',
  description: 'Automate marketing operations and customer nurturing with AI. CRM integrations, automated lead routing, and predictive analytics for businesses in Bhubaneswar.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/ai-automation',
  },
  openGraph: {
    title: 'AI Marketing & Workflow Automation in Bhubaneswar | Growth Ops',
    description: 'Automate marketing operations and customer nurturing with AI.',
    url: 'https://marketingcopilot.in/services/ai-automation',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing & Workflow Automation in Bhubaneswar | Growth Ops',
    description: 'Automate marketing operations and customer nurturing with AI.',
  },
};

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
