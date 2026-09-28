import type { Metadata } from 'next';
import HeroSection from './_components/HeroSection';
import ClientsSection from './_components/ClientsSection';
import StoryVideoSection from './_components/StoryVideoSection';
import QuickConnectMapSection from './_components/QuickConnectMapSection';
import MetricsSection from './_components/MetricsSection';
import BrandSpotlightSection from './_components/BrandSpotlightSection';
import ServicesSection from './_components/ServicesSection';
import StrategySection from './_components/StrategySection';
import QuotesSection from './_components/QuotesSection';
import TeamPreview from './_components/TeamPreview';
import WhyChooseSection from './_components/WhyChooseSection';
import RealGrowthSection from './_components/RealGrowthSection';
import FAQSection from './_components/FAQSection';
import CTASection from './_components/CTASection';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Bhubaneswar | Marketing Copilot',
  description: 'Top-rated digital marketing agency in Bhubaneswar. SEO, Google Ads, Meta Ads, web development and compounding revenue growth for Bhubaneswar businesses.',
  verification: {
    google: '79f0bLLJO5DmUzDFyrPHZ1vouQGfmYsHB5NZ594DHww',
  },
  alternates: {
    canonical: 'https://marketingcopilot.in/digital-marketing-company-in-bhubaneswar',
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
