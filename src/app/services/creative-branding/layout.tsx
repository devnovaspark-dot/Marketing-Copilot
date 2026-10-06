import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative Branding Agency in Bhubaneswar | Visual Identity & Strategy',
  description: 'Build memorable brand recall. Brand positioning, visual design systems, packaging, and high-converting storytelling crafted in Bhubaneswar.',
  alternates: {
    canonical: 'https://marketingcopilot.in/services/creative-branding-services-in-bhubaneswar',
  },
  openGraph: {
    title: 'Creative Branding Agency in Bhubaneswar | Visual Identity & Strategy',
    description: 'Build memorable brand recall. Visual design systems and storytelling.',
    url: 'https://marketingcopilot.in/services/creative-branding-services-in-bhubaneswar',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Branding Agency in Bhubaneswar | Visual Identity & Strategy',
    description: 'Build memorable brand recall with premium visual identity.',
  },
};

export default function CreativeBrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
