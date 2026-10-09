import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Website Development Agency in India | Marketing Copilot',
  description: 'Discover top-notch website development in India with Marketing Copilot. We create stunning, user-friendly sites that drive engagement and growth.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/web-development-in-india',
  },
  openGraph: {
    title: 'Best Website Development Agency in India | Marketing Copilot',
    description: 'Discover top-notch website development in India with Marketing Copilot. We create stunning, user-friendly sites that drive engagement and growth.',
    url: 'https://marketingcopilot.in/services/web-development-in-india',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Development Agency in India | Marketing Copilot',
    description: 'Discover top-notch website development in India with Marketing Copilot. We create stunning, user-friendly sites that drive engagement and growth.',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
