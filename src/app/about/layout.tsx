import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Marketing Copilot | Digital Growth Experts',
  description:
    'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
  keywords: [
    'Digital Marketing Company India',
    'About Marketing Copilot',
    'Digital Marketing Agency India',
    'Best Digital Marketing Company in India',
    'Growth Marketing Agency India',
    'Digital Growth Experts India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/about',
  },
  openGraph: {
    title: 'About Marketing Copilot | Digital Growth Experts',
    description:
      'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
    url: 'https://marketingcopilot.in/about',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marketing Copilot | Digital Growth Experts',
    description:
      'Discover who we are, what we do, and how our digital marketing company in India helps businesses grow with SEO, ads, branding, web development, and AI.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
