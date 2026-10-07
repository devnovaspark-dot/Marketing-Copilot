import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';
import ClientsSection from './_components/ClientsSection';

const QuickConnectMapSection = dynamic(() => import('./_components/QuickConnectMapSection'));
const StoryVideoSection = dynamic(() => import('./_components/StoryVideoSection'));
const MetricsSection = dynamic(() => import('./_components/MetricsSection'));
const BrandSpotlightSection = dynamic(() => import('./_components/BrandSpotlightSection'));
const ServicesSection = dynamic(() => import('./_components/ServicesSection'));
const StrategySection = dynamic(() => import('./_components/StrategySection'));
const QuotesSection = dynamic(() => import('./_components/QuotesSection'));
const TeamPreview = dynamic(() => import('./_components/TeamPreview'));
const WhyChooseSection = dynamic(() => import('./_components/WhyChooseSection'));
const RealGrowthSection = dynamic(() => import('./_components/RealGrowthSection'));
const FAQSection = dynamic(() => import('./_components/FAQSection'));
const CTASection = dynamic(() => import('./_components/CTASection'));

export const metadata: Metadata = {
  title: 'Digital Marketing Company in India | Marketing Copilot',
  description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
  verification: {
    google: '79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww',
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/',
  },
  openGraph: {
    title: 'Digital Marketing Company in India | Marketing Copilot',
    description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
    url: 'https://marketingcopilot.in/',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in India | Marketing Copilot',
    description: 'Top-rated digital marketing agency in India. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for businesses across India.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickConnectMapSection />
      <BrandSpotlightSection />
      <ClientsSection />
      <StoryVideoSection />
      <MetricsSection />
      <ServicesSection />
      <StrategySection />
      <QuotesSection />
      <TeamPreview />
      <WhyChooseSection />
      <RealGrowthSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
