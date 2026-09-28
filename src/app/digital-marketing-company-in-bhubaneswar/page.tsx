import type { Metadata } from 'next';
import HeroSection from '../_components/HeroSection';
import ClientsSection from '../_components/ClientsSection';
import StoryVideoSection from '../_components/StoryVideoSection';
import QuickConnectMapSection from '../_components/QuickConnectMapSection';
import MetricsSection from '../_components/MetricsSection';
import ServicesSection from '../_components/ServicesSection';
import StrategySection from '../_components/StrategySection';
import QuotesSection from '../_components/QuotesSection';
import TeamPreview from '../_components/TeamPreview';
import WhyChooseSection from '../_components/WhyChooseSection';
import RealGrowthSection from '../_components/RealGrowthSection';
import FAQSection from '../_components/FAQSection';
import CTASection from '../_components/CTASection';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Bhubaneswar',
  description: 'Bhubaneswar’s leading digital marketing company. Drive revenue, high-intent leads, and top Google rankings with Marketing Copilot.',
  alternates: {
    canonical: 'https://marketingcopilot.in/digital-marketing-company-in-bhubaneswar',
  },
};

export default function DigitalMarketingBhubaneswarPage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <QuickConnectMapSection />
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
