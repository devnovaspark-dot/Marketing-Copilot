import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency for Dentists to Build Online Visibility and Grow Your Clinic',
  description:
    'Attract more patients, generate qualified enquiries, and increase dental consultations with a result-driven digital marketing agency for dentists. Specialized in SEO services for dentists in India, Google Ads for dentists, and dental clinic lead generation.',
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
    title: 'Digital Marketing Agency for Dentists | Marketing Copilot',
    description:
      'Premier digital marketing agency for dentists in India. High-intent patient acquisition, Google Maps 3-Pack dominance, and automated WhatsApp appointment funnels.',
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
        alt: 'Digital Marketing Agency for Dentists - Marketing Copilot',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency for Dentists | Marketing Copilot',
    description:
      'Specialized digital marketing agency for dentists. Fill empty chair-time with high-value implant, aligner, and root canal patients.',
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
              'Attract more patients, generate qualified enquiries, and increase dental consultations with a result-driven digital marketing agency for dentists. SEO services for dentists in India, Google Ads for dentists, and dental clinic lead generation.',
          }),
        }}
      />
      {children}
    </>
  );
}

