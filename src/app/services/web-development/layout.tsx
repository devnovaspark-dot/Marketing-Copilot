import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Website Development Agency in Bhubaneswar | Nova Spark Digital',
  description: 'Create a website that keeps up with your business. Sleek designs, smooth performance, responsive and scalable websites built to grow in Bhubaneswar & Odisha.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/web-development-in-bhubaneswar',
  },
  openGraph: {
    title: 'Best Website Development Agency in Bhubaneswar | Nova Spark Digital',
    description: 'High-performance websites built to grow. Custom web development, e-commerce, WordPress, UI/UX, and web apps.',
    url: 'https://marketingcopilot.in/services/web-development-in-bhubaneswar',
    siteName: 'Nova Spark Digital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Development Agency in Bhubaneswar | Nova Spark Digital',
    description: 'High-performance websites built to grow in Bhubaneswar & Odisha.',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
