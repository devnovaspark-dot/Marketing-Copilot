import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services for Industries in Bhubaneswar',
  description:
    'Explore industry-specific digital marketing solutions in Bhubaneswar, from SEO and paid ads to social media, branding, web development, and AI automation.',
  keywords: [
    'digital marketing services for industries Bhubaneswar',
    'industry digital marketing Bhubaneswar',
    'real estate digital marketing Bhubaneswar',
    'healthcare marketing Bhubaneswar',
    'education digital marketing Bhubaneswar',
    'hospitality marketing Bhubaneswar',
    'e-commerce marketing Odisha',
  ],
  alternates: {
    canonical: 'https://marketingcopilot.in/industries',
  },
  openGraph: {
    title: 'Digital Marketing Services for Industries in Bhubaneswar | Marketing Copilot',
    description:
      'Explore industry-specific digital marketing solutions in Bhubaneswar, from SEO and paid ads to social media, branding, web development, and AI automation.',
    url: 'https://marketingcopilot.in/industries',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services for Industries in Bhubaneswar | Marketing Copilot',
    description:
      'Explore industry-specific digital marketing solutions in Bhubaneswar, from SEO and paid ads to social media, branding, web development, and AI automation.',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
