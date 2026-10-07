import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Strategy Session & Inquiries',
  description: 'Get in touch with Marketing Copilot, the leading digital marketing agency in India. Schedule a strategy session and get your custom growth roadmap.',
  alternates: {
    canonical: 'https://marketingcopilot.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Marketing Copilot India',
    description: 'Get in touch with Marketing Copilot, the leading digital marketing agency in India.',
    url: 'https://marketingcopilot.in/contact',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
