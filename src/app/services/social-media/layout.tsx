import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing in India | Marketing Copilot',
  description:
    'Unlock the potential of your business with our social media marketing services in India. Partner with Marketing Copilot for impactful results.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/social-media-marketing-in-india',
  },
  openGraph: {
    title: 'Social Media Marketing in India | Marketing Copilot',
    description:
      'Unlock the potential of your business with our social media marketing services in India. Partner with Marketing Copilot for impactful results.',
    url: 'https://marketingcopilot.in/services/social-media-marketing-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing in India | Marketing Copilot',
    description:
      'Unlock the potential of your business with our social media marketing services in India. Partner with Marketing Copilot for impactful results.',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
