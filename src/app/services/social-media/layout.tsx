import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Social Media Marketing for Business Growth | Marketing Copilot',
  description:
    'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement across India.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/social-media-marketing-in-india',
  },
  openGraph: {
    title: 'Strategic Social Media Marketing for Business Growth | Marketing Copilot',
    description:
      'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement across India.',
    url: 'https://marketingcopilot.in/services/social-media-marketing-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Social Media Marketing for Business Growth | Marketing Copilot',
    description:
      'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement across India.',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
