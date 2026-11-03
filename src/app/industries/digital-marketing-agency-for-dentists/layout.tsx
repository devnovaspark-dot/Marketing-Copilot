import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency for Dentists | SEO Services for Dentists in India',
  description:
    'Marketing Copilot is a specialized digital marketing agency for dentists. We deliver high-intent digital marketing for dentists, Google Maps 3-Pack rank, SEO services for dentists in India, and automated appointment booking funnels.',
  keywords: [
    'Digital marketing agency for dentists',
    'Digital Marketing for Dentists',
    'SEO Services for Dentists in India',
    'Dental clinic marketing agency India',
    'Dental SEO agency India',
    'Google Ads for dentists India',
    'Dental implant patient acquisition',
    'Invisalign marketing for dentists',
    'Dental practice patient generation',
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
        url: 'https://marketingcopilot.in/images/dashboard_hero.jpg',
        secureUrl: 'https://marketingcopilot.in/images/dashboard_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency for Dentists - Marketing Copilot',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency for Dentists | Marketing Copilot',
    description:
      'Specialized digital marketing agency for dentists. Fill empty chair-time with high-value implant, aligner, and root canal patients.',
    images: ['https://marketingcopilot.in/images/dashboard_hero.jpg'],
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
              'Specialized digital marketing agency for dentists providing SEO services for dentists in India, local Google Maps optimization, and patient appointment funnels.',
          }),
        }}
      />
      {children}
    </>
  );
}
