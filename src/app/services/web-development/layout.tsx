import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Website Development Agency in India | Marketing Copilot',
  description: 'High-Performance Website Development for Businesses Across India. Sleek designs, smooth performance, responsive and scalable Next.js websites built to grow.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/web-development-in-india',
  },
  openGraph: {
    title: 'Best Website Development Agency in India | Marketing Copilot',
    description: 'High-performance websites built to grow. Custom web development, Next.js architecture, UI/UX, and high-converting funnels.',
    url: 'https://marketingcopilot.in/services/web-development-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Development Agency in India | Marketing Copilot',
    description: 'High-Performance Website Development for Businesses Across India.',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
