import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Social Media Marketing for Business Growth | Nova Spark Digital',
  description:
    'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement in Bhubaneswar & Odisha.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/social-media-marketing-in-bhubaneswar',
  },
  openGraph: {
    title: 'Strategic Social Media Marketing for Business Growth | Nova Spark Digital',
    description:
      'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement in Bhubaneswar & Odisha.',
    url: 'https://marketingcopilot.in/services/social-media-marketing-in-bhubaneswar',
    siteName: 'Nova Spark Digital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Social Media Marketing for Business Growth | Nova Spark Digital',
    description:
      'From planning and content creation to advertising and daily management, we handle your social media presence with a clear focus on growth and engagement in Bhubaneswar & Odisha.',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
