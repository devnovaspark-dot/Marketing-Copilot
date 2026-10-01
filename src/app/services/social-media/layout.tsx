import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Bhubaneswar | SMM & Content Strategy',
  description: 'Build organic community and viral short-form brand authority. Bhubaneswar’s premier social media agency for Instagram Reels, YouTube Shorts, and brand storytelling.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/social-media',
  },
  openGraph: {
    title: 'Social Media Marketing Agency in Bhubaneswar | SMM & Content Strategy',
    description: 'Build organic community and viral short-form brand authority. Premier social media agency for Instagram Reels and brand storytelling.',
    url: 'https://marketingcopilot.in/services/social-media',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Bhubaneswar | SMM & Content Strategy',
    description: 'Build organic community and viral short-form brand authority.',
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
