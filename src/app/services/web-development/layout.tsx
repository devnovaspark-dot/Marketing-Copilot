import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company in Bhubaneswar | Next.js & Custom Web Design',
  description: 'Bhubaneswar’s high-performance web development agency. Next.js, lightning-fast Core Web Vitals, headless CMS, and conversion-optimized architectures.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/web-development',
  },
  openGraph: {
    title: 'Web Development Company in Bhubaneswar | Next.js & Custom Web Design',
    description: 'High-performance web development agency. Next.js, sub-second load times, and conversion-optimized architectures.',
    url: 'https://marketingcopilot.in/services/web-development',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Bhubaneswar | Next.js & Custom Web Design',
    description: 'High-performance web development agency in Bhubaneswar.',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
