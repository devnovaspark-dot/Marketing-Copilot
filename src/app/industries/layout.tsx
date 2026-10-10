import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services for Industries in India | Marketing Copilot',
  description:
    'Explore industry-specific digital marketing services in India for healthcare, real estate, education, eCommerce, and more. Drive leads and business growth.',
  keywords: [
    'Digital Marketing Services for Industries India',
    'Industry Digital Marketing India',
    'Real Estate Digital Marketing India',
    'Healthcare Marketing India',
    'Education Digital Marketing India',
    'Hospitality Marketing India',
    'E-commerce Marketing India',
    'B2B Digital Marketing India',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/industries',
  },
  openGraph: {
    title: 'Digital Marketing Services for Industries in India | Marketing Copilot',
    description:
      'Explore industry-specific digital marketing services in India for healthcare, real estate, education, eCommerce, and more. Drive leads and business growth.',
    url: 'https://marketingcopilot.in/industries',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services for Industries in India | Marketing Copilot',
    description:
      'Explore industry-specific digital marketing services in India for healthcare, real estate, education, eCommerce, and more. Drive leads and business growth.',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
