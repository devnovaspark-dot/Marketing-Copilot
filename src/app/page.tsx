import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';
import ClientsSection from './_components/ClientsSection';
import StoryVideoSection from './_components/StoryVideoSection';
import MetricsSection from './_components/MetricsSection';
import ServicesSection from './_components/ServicesSection';
import StrategySection from './_components/StrategySection';
import TeamPreview from './_components/TeamPreview';
import CTASection from './_components/CTASection';

const QuickConnectMapSection = dynamic(() => import('./_components/QuickConnectMapSection'));
const BrandSpotlightSection = dynamic(() => import('./_components/BrandSpotlightSection'));
const QuotesSection = dynamic(() => import('./_components/QuotesSection'));
const WhyChooseSection = dynamic(() => import('./_components/WhyChooseSection'));
const RealGrowthSection = dynamic(() => import('./_components/RealGrowthSection'));
const FAQSection = dynamic(() => import('./_components/FAQSection'));

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Bhubaneswar | Marketing Copilot',
  description: 'Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.',
  verification: {
    google: '79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww',
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/',
  },
  openGraph: {
    title: 'Digital Marketing Company in Bhubaneswar | Marketing Copilot',
    description: 'Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.',
    url: 'https://marketingcopilot.in/',
    siteName: 'Marketing Copilot',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in Bhubaneswar | Marketing Copilot',
    description: 'Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <QuickConnectMapSection />
      <StoryVideoSection />
      <MetricsSection />
      <BrandSpotlightSection />
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
