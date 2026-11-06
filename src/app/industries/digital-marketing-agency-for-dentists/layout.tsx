import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital marketing agency for dentists in India | Marketing Copilot',
  description:
    'Attract more patients with digital marketing for dentists in India. Discover tailored SEO, paid ads, and social media services to grow your practice.',
  keywords: [
    'Digital marketing agency for dentists',
    'Digital Marketing for Dentists',
    'SEO Services for Dentists in India',
    'Dental Marketing Agency',
    'Google Ads for Dentists',
    'Dental Clinic Lead Generation',
    'Digital Marketing for Dentist in India',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/industries/digital-marketing-agency-for-dentists',
  },
  openGraph: {
    title: 'Digital marketing agency for dentists in India | Marketing Copilot',
    description:
      'Attract more patients with digital marketing for dentists in India. Discover tailored SEO, paid ads, and social media services to grow your practice.',
    url: 'https://marketingcopilot.in/industries/digital-marketing-agency-for-dentists',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://marketingcopilot.in/images/social-share-og-banner.webp',
        secureUrl: 'https://marketingcopilot.in/images/social-share-og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Digital marketing agency for dentists in India - Marketing Copilot',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital marketing agency for dentists in India | Marketing Copilot',
    description:
      'Attract more patients with digital marketing for dentists in India. Discover tailored SEO, paid ads, and social media services to grow your practice.',
    images: ['https://marketingcopilot.in/images/social-share-og-banner.webp'],
  },
};

export default function DentalIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Digital marketing agency for dentists',
            provider: {
              '@type': 'Organization',
              name: 'Marketing Copilot',
              url: 'https://marketingcopilot.in',
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            description:
              'Attract more patients with digital marketing for dentists in India. Discover tailored SEO, paid ads, and social media services to grow your practice.',
          }),
        }}
      />
      {children}
    </>
  );
}

