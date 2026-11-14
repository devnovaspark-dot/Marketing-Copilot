'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ReviewBadgesStrip from './ReviewBadgesStrip';
import BrandSpotlightSection from '@/app/_components/BrandSpotlightSection';
import StrategySection from '@/app/_components/StrategySection';
import TeamPreview from '@/app/_components/TeamPreview';
import RealGrowthSection from '@/app/_components/RealGrowthSection';
import CTASection from '@/app/_components/CTASection';
import IndiaMap3D from '@/components/IndiaMap3D';
import GrowthStackOrbit3D from '@/components/GrowthStackOrbit3D';
import ProofShowcaseSection from '@/app/_components/ProofShowcaseSection';
import StrategistGrowthCockpit from '@/components/StrategistGrowthCockpit';
import PerformanceAuditTerminal from '@/components/PerformanceAuditTerminal';
import ExecutiveRevenueBlueprint from '@/components/ExecutiveRevenueBlueprint';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './digital-growth-partner.module.css';

const clientLogos = [
  { name: 'Sabour', src: '/images/clients/Sabour-logo.png' },
  { name: 'Ekatraa', src: '/images/clients/ekatraa.png' },
  { name: 'Heed Health', src: '/images/clients/heed.png' },
  { name: 'Medallion House', src: '/images/clients/medallion-house.png' },
  { name: 'Praveen Electronics', src: '/images/clients/praveen-electronics.png' },
  { name: 'Sri Pandurangan', src: '/images/clients/sri-pandurangan-divine-fresh.png' },
  { name: 'Travysys', src: '/images/clients/travysys.png' },
  { name: 'Weekend Bhraman', src: '/images/clients/weekend-bhraman.png' },
  { name: 'Zue Studio', src: '/images/clients/Zue-Studio-Logo-color (1).png' },
];

const growthPartnerFaqs = [
  {
    q: 'How does a Digital Growth Partner differ from a marketing company?',
    a: 'Traditional agencies often work with contracts, separate campaigns and reports that focus on numbers that look good but don’t really matter. As your Digital Growth Partner we take a connected way—bringing together strategy, performance marketing, technology and ways to improve results to create a full growth system. Our senior team is directly involved in your campaigns and custom technology smart buying of ads and clear ownership of your account make sure every action helps your business make money and get real leads.',
  },
  {
    q: 'Do you need long-term contracts or fixed money every month?',
    a: 'No. We think a good partnership should be built on results not on long-term promises. Our digital marketing services work with month-to-month goals letting us keep improving your plan based on real business data. Every 30 days we try to show why we should stay at your table by showing growth clear reports and always being responsible.',
  },
  {
    q: 'Who actually improves your ad campaigns every day?',
    a: 'You work directly with our founders and top performance experts—not through many layers of managers or a system where you have to ask for help. We have a WhatsApp and Slack channel for your brand and we promise to reply within two hours during business hours. This helps us find chances to grow, fix problems with campaigns and make choices without waiting too long.',
  },
  {
    q: 'Who owns the ad accounts, tracking tools and creative work?',
    a: 'You own everything from the day. Google Ads accounts, Meta Pixels, Google Tag Manager containers, GA4 properties, creative work and Next.js code files are all registered under your company’s name. We think a trustworthy Digital Growth Partner should build your setup not keep it for themselves. If you ever decide to leave all your accounts, data, tracking tools and ideas stay with you.',
  },
  {
    q: 'What kind of money is needed to work with Marketing Copilot?',
    a: "Most businesses that work with us spend between ₹50,000 and ₹5,00,000+ every month on Google Ads and Meta Ads depending on their goals, the market and where they're in their growth. There is no amount that fits everyone. We adjust your spending based on your costs, profits how much it costs to get a customer how many people buy from you and how money you can make. We build a plan that helps your business grow in a way—not just spend more on ads.",
  },
  {
    q: 'What is in the Complimentary 360° Growth Audit?',
    a: "Our Complimentary 360° Growth Audit looks closely at the things that affect your growth. Our senior team checks your paid ads, how visible you're in search, where you stand against your competition how customers move through your site how you track things and where you might be losing money. Then we find the chances to grow and give you a clear 90-day growth plan followed by a 20-minute meeting, with our senior team to talk about what we found and what to do next.",
  },
];

export default function DigitalGrowthPartnerPage() {
  // Interactive FAQ Accordion State (Closed by default so user chooses what to open)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      {/* Dynamic Ambient Background Elements */}
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />
      <div className={styles.ambientGridBg} />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 1: HERO & INTERACTIVE AUDIT CONSOLE
      ═════════════════════════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.heroSection}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Vision & Proposition */}
          <div className={styles.heroColLeft}>
            <div className={styles.heroBadgeCluster}>
              <h1 className={styles.heroBadgeFlagship}>
                <span className={styles.pulsingLed} />
                <span>Digital Growth Partner in India</span>
              </h1>
              <div className={styles.heroBadgeNation}>
                <span>🇮🇳 Scaling Brands Across India</span>
              </div>
            </div>

            <h2 className={styles.heroDisplayH1}>
              READY TO SCALE YOUR BUSINESS{' '}
              <span className={styles.heroShimmerAccent}>
                WITH A DIGITAL GROWTH PARTNER?
              </span>
            </h2>

            {/* Tactile Channel Chiclets */}
            <div className={styles.heroChicletsRow}>
              <span className={styles.heroChiclet}>⚡ SEO</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🎯 PPC</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🚀 META ADS</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>📱 SOCIAL</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>🤖 GEO / AEO</span>
              <span className={styles.heroChicletDot}>•</span>
              <span className={styles.heroChiclet}>💻 WEB</span>
            </div>

            <p className={styles.heroLeadParagraph}>
              Stop spending growth capital on vanity metrics. As your Digital Growth Partner in India, we engineer full-funnel customer acquisition systems — connecting high-intent search, high-ROAS paid media, and conversion-focused architecture directly to profitable revenue.
            </p>

            {/* 3 Hero Metrics Requested By User */}
            <div className={styles.heroProofStrip}>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>₹14.8Cr+</div>
                <div className={styles.heroProofLabel}>Tracked Client Pipeline &amp; GMV</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>&lt; 2 Hours</div>
                <div className={styles.heroProofLabel}>Audit Response SLA</div>
              </div>
              <div className={styles.heroProofTile}>
                <div className={styles.heroProofNum}>100%</div>
                <div className={styles.heroProofLabel}>Direct Account &amp; Data Ownership</div>
              </div>
            </div>

            {/* Review Badges Strip: Capterra (5.0), GoodFirms (4.9), Google (4.9), DesignRush (4.7), UpCity (5.0) - GetApp Omitted */}
            <ReviewBadgesStrip />
          </div>

          {/* Right Column: Interactive HubSpot Audit Console */}
          <div className={styles.auditConsole}>
            <div className={styles.consoleHeaderStrip}>
              <div className={styles.consoleTitleGroup}>
                <span className={styles.consolePulseDot} />
                <span className={styles.consoleTitle}>Rapid Strategic Growth Audit</span>
              </div>
              <span className={styles.consoleBadge}>SLA &lt; 2 Hrs</span>
            </div>

            <HubSpotLeadForm formLocation="/services/digital-growth-partner" />

            <div className={styles.consoleFooterGuarantees}>
              <span>🔒 100% Confidential</span>
              <span>⚡ 2-Hour Response</span>
              <span>🎯 Custom Roadmap</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SLIDING BRAND ICONS MARQUEE (COLORFUL & VIBRANT AS LIKE HOME PAGE)
      ═════════════════════════════════════════════ */}
      <section className={styles.slidingBrandSection}>
        <div className={styles.container}>
          <div className={styles.marqueeHeader}>
            <div className={styles.marqueeHeaderLabel}>
              <span className={styles.pulsingLed} />
              <span>Trusted by Ambitious Brands &amp; Growing Enterprises Across India</span>
            </div>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeFadeLeft} />
          <div className={styles.marqueeTrack}>
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className={styles.marqueeLogoCard} title={logo.name}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} Partner`}
                  width={150}
                  height={48}
                  className={styles.marqueeLogoImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.marqueeFadeRight} />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          OPERATIONS COMMAND CENTER (HEADQUARTERS & NATIONWIDE RADAR)
          Positioned directly above the map section per user instruction
      ═════════════════════════════════════════════ */}
      <section className={styles.commandCenterSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <ScrollReveal>
            <div className={styles.headerCenter} style={{ marginBottom: '36px' }}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.pulsingLed} />
                <span>PAN-INDIA CAMPAIGN RADAR</span>
              </div>
              <h2 className={styles.titlePrimary}>
                Scaling Brands Across India
              </h2>
              <p className={styles.subtitle} style={{ maxWidth: '760px', margin: '0 auto' }}>
                We help businesses across India scale with data‑driven marketing strategies, high‑performance campaigns and conversion‑focused solutions that fit each business’s growth goals.
                <span style={{ display: 'block', marginTop: '10px' }}>
                  From strategy, to execution we combine performance marketing, SEO and technology to deliver results and sustainable business growth across the nation.
                </span>
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.hqSectionGrid}>
            {/* Left Card: Executive Operations Cockpit */}
            <div className={styles.hqCardChassis}>
              <div>
                <div className={styles.hqCardHeaderRow}>
                  <div className={styles.hqLiveStatusTag}>
                    <span className={styles.statusLedLive} />
                    <span>BHUBANESWAR HQ · PAN-INDIA</span>
                  </div>
                  <span className={styles.hqActivePill}>ACTIVE DESK</span>
                </div>

                <h3 className={styles.hqCardTitle}>
                  National Growth Corridors
                </h3>
                <p className={styles.hqCardSubtitle}>
                  Centralized strategic orchestration, high-ROAS performance engineering, and full-funnel CRO managed directly from our registered corporate headquarters in Odisha.
                </p>

                {/* Tactical Metric Ticker */}
                <div className={styles.hqStatsTriplet}>
                  <div className={styles.hqStatItem}>
                    <div className={styles.hqStatValue}>12+</div>
                    <div className={styles.hqStatLabel}>Active Metros</div>
                  </div>
                  <div className={styles.hqStatItem}>
                    <div className={styles.hqStatValue}>100%</div>
                    <div className={styles.hqStatLabel}>In-House Ops</div>
                  </div>
                  <div className={styles.hqStatItem}>
                    <div className={styles.hqStatValue}>&lt;15m</div>
                    <div className={styles.hqStatLabel}>Founder SLA</div>
                  </div>
                </div>
              </div>

              {/* Tactical Communication Channels */}
              <div className={styles.executiveChannelGrid}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.executiveOfficeCard}
                >
                  <div className={styles.executiveCardTop}>
                    <div className={styles.channelIconBadge}>📍</div>
                    <div>
                      <span className={styles.channelSmallLabel}>Registered Corporate Office</span>
                      <div className={styles.channelValueText}>
                        Mallick Complex, Kharvela Nagar, Bhubaneswar 751001
                      </div>
                    </div>
                  </div>
                  <div className={styles.officeMapLink}>
                    <span>View on Google Maps</span>
                    <span style={{ fontSize: '13px' }}>↗</span>
                  </div>
                </a>

                <div className={styles.executiveCommsDouble}>
                  <a href="tel:+918280788689" className={styles.executiveCommTile}>
                    <div className={styles.commIconBubble}>📞</div>
                    <div>
                      <span className={styles.channelMicroLabel}>Direct Line</span>
                      <div className={styles.channelValueBold}>+91 82807 88689</div>
                      <span className={styles.commMetaSub}>Priority Hotline</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20partnership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.executiveCommTile} ${styles.executiveWhatsAppTile}`}
                  >
                    <div className={`${styles.commIconBubble} ${styles.commIconBubbleWa}`}>💬</div>
                    <div>
                      <span className={styles.channelMicroLabel}>WhatsApp Desk</span>
                      <div className={styles.channelValueBold} style={{ color: '#16A34A' }}>
                        Chat Founder ↗
                      </div>
                      <span className={styles.commMetaSub} style={{ color: '#059669' }}>Fastest Reply</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.hqFooterSla}>
                <div className={styles.hqSlaBadge}>
                  <span className={styles.slaDotAmber} />
                  <span>15m WhatsApp SLA</span>
                </div>
                <div className={styles.hqSlaBadge}>
                  <span className={styles.slaDotBlue} />
                  <span>48h Sprint Kickoff</span>
                </div>
                <div className={styles.hqSlaBadge}>
                  <span className={styles.slaDotGreen} />
                  <span>100% In-House</span>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive 3D Pan-India Performance Deployment Map */}
            <IndiaMap3D />
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          CTA CARD REPEAT #1 (After Section 3)
      ═════════════════════════════════════════════ */}
      <StrategistGrowthCockpit
        id="desk-cta-1"
        eyebrow="DIGITAL GROWTH PARTNER • 1-ON-1 STRATEGY"
        title="Book Your Free Growth Partnership Session"
        subtitle="Connect directly with our senior growth strategists to audit acquisition channels and map high-margin expansion."
        formLocation="/services/digital-growth-partner"
      />

      {/* ═════════════════════════════════════════════════════════════════
          49 LIVE PROOF TELEMETRY DASHBOARDS
          (Positioned directly above Our Growth Framework per user instruction)
      ═════════════════════════════════════════════ */}
      <ProofShowcaseSection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 5: OUR GROWTH FRAMEWORK · EXECUTION BLUEPRINT
          (Positioned directly above END-TO-END GROWTH STACK per user instruction)
      ═════════════════════════════════════════════ */}
      <StrategySection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: END-TO-END GROWTH STACK — 3D MOVING CIRCULAR ORBIT
      ═════════════════════════════════════════════ */}
      <GrowthStackOrbit3D />

      {/* ═════════════════════════════════════════════════════════════════
          CTA CARD REPEAT #2 (After Section 6)
      ═════════════════════════════════════════════ */}
      <PerformanceAuditTerminal
        id="desk-cta-2"
        eyebrow="PERFORMANCE AUDIT LAB • ₹0 BENCHMARK"
        title="Claim Your Free Omnichannel Performance Audit"
        subtitle="Submit your details below. Our media team will analyze your ad spend, attribution, and CAC to unlock higher ROAS."
        formLocation="/services/digital-growth-partner"
      />

      {/* ═════════════════════════════════════════════════════════════════
          CLIENT SPOTLIGHT • CASE STUDY IN ACTION
          Positioned directly above MEASURABLE BUSINESS IMPACT per user instruction
      ═════════════════════════════════════════════ */}
      <BrandSpotlightSection />



      {/* ═════════════════════════════════════════════════════════════════
          CTA CARD REPEAT #3 (After Section 9)
      ═════════════════════════════════════════════ */}
      <ExecutiveRevenueBlueprint
        id="desk-cta-3"
        eyebrow="EXECUTIVE REVENUE BLUEPRINT • 90-DAY SCALE"
        title="Request Your 90-Day Compounding Growth Blueprint"
        subtitle="Collaborate directly with our growth principals. Formulate a milestone-driven scaling roadmap engineered for your market."
        formLocation="/services/digital-growth-partner"
      />

      {/* ═════════════════════════════════════════════════════════════════
          PROVEN RESULTS & CASE STUDIES (FROM HOMEPAGE WITH AUTO-ZOOM)
      ═════════════════════════════════════════════ */}
      <RealGrowthSection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 7: LEADERSHIP & ACCOUNTABILITY
          "Meet the minds powering your growth."
      ═════════════════════════════════════════════ */}
      <TeamPreview eyebrow="LEADERSHIP & ACCOUNTABILITY" />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 9: THE COPILOT ADVANTAGE — 4 ALIGNED PILLARS + INTERACTIVE MATRIX
      ═════════════════════════════════════════════ */}
      <section className={styles.comparisonMatrixSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>THE COPILOT ADVANTAGE</span>
            </div>
            <h2 className={styles.titlePrimary}>Why Work With Us?</h2>
            <p className={styles.subtitle}>
              See how working with a Digital Growth Partner is completely different, from old-style agency retainer setups. We bring together strategy, technology, creative work and results-driven marketing into one growth system that is centered on your business goals.
            </p>
          </div>

          {/* 4 Aligned Strategic Pillars */}
          <div className={styles.pillarsQuadGrid}>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>01</div>
              <h3 className={styles.pillarTitleH3}>Direct Account Ownership</h3>
              <p className={styles.pillarBody}>
                You own 100% of your Google Ads accounts, Meta pixels, data, and creative IP from Day 1. Your digital assets stay under your control — never locked behind agency logins or third-party access.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>02</div>
              <h3 className={styles.pillarTitleH3}>Founder-Led Execution</h3>
              <p className={styles.pillarBody}>
                Get direct strategy and sprint oversight from our senior founders and growth strategists. No junior interns managing your ad spend — your campaigns are guided by experienced decision-makers focused on measurable business growth.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>03</div>
              <h3 className={styles.pillarTitleH3}>Integrated Tech Stack</h3>
              <p className={styles.pillarBody}>
                We bring high-converting website engineering, creative production, digital marketing services, and algorithmic media buying together in one synchronized growth pod. Every channel works together instead of operating in isolated silos.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>04</div>
              <h3 className={styles.pillarTitleH3}>Sub-2-Hour Response SLA</h3>
              <p className={styles.pillarBody}>
                Stay connected through a dedicated WhatsApp war room with real-time sprint updates, transparent performance metrics, and rapid communication. No unnecessary delays, no rigid lock-ins — just an agile partnership focused on continuous growth.
              </p>
            </div>
          </div>

          {/* Head-to-Head Comparison Matrix With Interactive Tactile Badges */}
          <div className={styles.comparisonTableWrap}>
            <div className={styles.matrixRowHeader}>
              <div>Growth Dimension</div>
              <div className={styles.matrixColTraditional}>Traditional Agencies</div>
              <div style={{ color: '#0B2093' }}>Marketing Copilot</div>
            </div>

            {/* Row 1 */}
            <div className={styles.matrixRowItem}>
              <div className={styles.matrixFeatureBlock}>
                <div className={styles.matrixFeatureName}>1. Account Leadership</div>
                <div className={styles.matrixFeatureSub}>Who actually manages your growth</div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixTradCol}`}>
                <span className={styles.symbol3DCross}>✕</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagTrad}>Traditional: </span>
                  <span className={styles.tradText}>Junior account managers &amp; interns</span>
                </div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixCopilotCol}`}>
                <span className={styles.symbol3DCheck}>✓</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagCopilot}>Marketing Copilot: </span>
                  <span className={styles.copilotText}>Founders &amp; Senior Strategists directly</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.matrixRowItem}>
              <div className={styles.matrixFeatureBlock}>
                <div className={styles.matrixFeatureName}>2. Focus Metric</div>
                <div className={styles.matrixFeatureSub}>How success is judged and measured</div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixTradCol}`}>
                <span className={styles.symbol3DCross}>✕</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagTrad}>Traditional: </span>
                  <span className={styles.tradText}>Impressions, clicks &amp; vanity reports</span>
                </div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixCopilotCol}`}>
                <span className={styles.symbol3DCheck}>✓</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagCopilot}>Marketing Copilot: </span>
                  <span className={styles.copilotText}>Net Pipeline, ROAS &amp; Bankable GMV</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.matrixRowItem}>
              <div className={styles.matrixFeatureBlock}>
                <div className={styles.matrixFeatureName}>3. Account Ownership</div>
                <div className={styles.matrixFeatureSub}>Pixels, ad accounts, and creative IP</div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixTradCol}`}>
                <span className={styles.symbol3DCross}>✕</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagTrad}>Traditional: </span>
                  <span className={styles.tradText}>Held hostage in agency ad manager</span>
                </div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixCopilotCol}`}>
                <span className={styles.symbol3DCheck}>✓</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagCopilot}>Marketing Copilot: </span>
                  <span className={styles.copilotText}>100% Owned by you from Day 1</span>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className={styles.matrixRowItem}>
              <div className={styles.matrixFeatureBlock}>
                <div className={styles.matrixFeatureName}>4. Execution Synergy</div>
                <div className={styles.matrixFeatureSub}>Integration of code, ads, and design</div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixTradCol}`}>
                <span className={styles.symbol3DCross}>✕</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagTrad}>Traditional: </span>
                  <span className={styles.tradText}>Fragmented across 3 different vendors</span>
                </div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixCopilotCol}`}>
                <span className={styles.symbol3DCheck}>✓</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagCopilot}>Marketing Copilot: </span>
                  <span className={styles.copilotText}>One Unified Synchronized Growth Pod</span>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className={styles.matrixRowItem}>
              <div className={styles.matrixFeatureBlock}>
                <div className={styles.matrixFeatureName}>5. Contract Flexibility</div>
                <div className={styles.matrixFeatureSub}>Commitment requirements</div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixTradCol}`}>
                <span className={styles.symbol3DCross}>✕</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagTrad}>Traditional: </span>
                  <span className={styles.tradText}>6 to 12 month rigid lock-in traps</span>
                </div>
              </div>
              <div className={`${styles.symbol3DItem} ${styles.matrixCopilotCol}`}>
                <span className={styles.symbol3DCheck}>✓</span>
                <div className={styles.matrixOutcomeText}>
                  <span className={styles.matrixColTagCopilot}>Marketing Copilot: </span>
                  <span className={styles.copilotText}>Zero Lock-In; month-to-month agility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          CTA CARD REPEAT #4 (After Section 12)
      ═════════════════════════════════════════════ */}
      <StrategistGrowthCockpit
        id="mid-strategist-desk"
        eyebrow="GROWTH DESK • INDIA ADVISORY"
        title="Talk Directly With a Growth Principal"
        subtitle="Ready for marketing that compounds revenue? Connect directly with our on-duty strategist."
        formLocation="/services/digital-growth-partner"
      />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION: FREQUENTLY ASKED QUESTIONS (SKEUOMORPHIC ACCORDION)
      ═════════════════════════════════════════════ */}
      <section className={styles.faqSection} id="growth-faq">
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>GROWTH PARTNERSHIP · FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className={styles.titlePrimary}>Got Questions? We Have Direct Answers.</h2>
            <p className={styles.subtitle}>
              Everything ambitious founders and marketing leaders need to know before partnering with a Digital Growth Partner to build, scale, and optimize their digital growth strategy.
            </p>
          </div>

          <div className={styles.faqAccordionContainer}>
            {growthPartnerFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItemCard} ${isOpen ? styles.faqItemCardOpen : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={styles.faqQuestionBtn}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.faqQuestionLeft}>
                      <span className={styles.faqNumberBadge}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.faqQuestionText}>{faq.q}</span>
                    </div>
                    <span className={styles.faqToggleBadge}>+</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswerPanel}>
                      <div className={styles.faqAnswerInner}>
                        <p className={styles.faqAnswerText}>{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Interactive Circular / Round Halo Concierge Hub */}
            <div className={styles.faqConciergeHalo}>
              <div className={styles.faqHaloLeft}>
                <div className={styles.faqRadarOrb}>
                  <div className={styles.faqRadarOrbDot} />
                </div>
                <div className={styles.faqHaloMeta}>
                  <div className={styles.faqHaloTag}>
                    <span>● LIVE FOUNDER DISPATCH</span>
                  </div>
                  <span className={styles.faqHaloTagSub}>
                    Got a question about budgets or timelines? Chat with leadership directly
                  </span>
                </div>
              </div>

              {/* Compact Revolving Glowing Border Beam WhatsApp Button (Navbar Style, Green) */}
              <div className={styles.compactGreenBeamWrapper}>
                <div className={styles.compactGreenBeamSpin} />
                <a
                  href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20have%20a%20question%20regarding%20the%20digital%20growth%20partnership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.compactGreenBeamBtn}
                  aria-label="Direct founder chat on WhatsApp"
                >
                  <svg className={styles.compactWhatsAppIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.499 1.345 5.025L2 22l5.086-1.334a10.009 10.009 0 0 0 4.945 1.365h.004c5.535 0 10.03-4.495 10.03-10.031C22.065 6.495 17.568 2 12.031 2zm0 18.375c-1.505 0-2.98-.405-4.267-1.168l-.306-.182-3.17.832.846-3.09-.2-.317A8.324 8.324 0 0 1 3.688 12.03c0-4.6 3.743-8.343 8.343-8.343 4.601 0 8.344 3.743 8.344 8.343 0 4.601-3.743 8.344-8.344 8.344zm4.573-6.248c-.25-.125-1.482-.731-1.712-.815-.23-.083-.396-.125-.563.125-.167.25-.646.815-.792.982-.146.167-.292.188-.542.063-.25-.125-1.056-.39-2.012-1.242-.744-.664-1.247-1.484-1.393-1.734-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.356-.771-1.856-.203-.487-.41-.421-.563-.429l-.48-.008c-.166 0-.437.063-.666.313-.23.25-.875.856-.875 2.087s.896 2.42 1.021 2.587c.125.167 1.764 2.694 4.275 3.778.597.258 1.064.412 1.428.528.6.191 1.146.164 1.578.1.48-.072 1.482-.605 1.69-1.189.208-.584.208-1.085.146-1.189-.063-.104-.23-.167-.48-.292z"/>
                  </svg>
                  <span>Chat on WhatsApp →</span>
                  <span className={styles.compactSlaBadge}>&lt; 15m SLA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 11: TAKE THE NEXT LEAP — CLEAN, LIGHT & COMPACT SKEUOMORPHIC CARD
      ═════════════════════════════════════════════ */}
      <section className={styles.grandCtaSection} id="audit-form">
        <div className={styles.container}>
          <div className={styles.grandCardChassis}>
            <div className={styles.grandHeader}>
              <div className={styles.grandEyebrow}>
                <span>COMPLIMENTARY STRATEGIC REVIEW</span>
              </div>
              <h2 className={styles.grandTitleH2}>
                Get Direct Answers From Our Strategists.
              </h2>
              <p className={styles.grandSubtitle}>
                Share your challenge below for a complimentary strategic review. Your next stage of growth starts here.
              </p>
            </div>

            <HubSpotLeadForm formLocation="/services/digital-growth-partner" />

            <div className={styles.grandCompactTrust}>
              <span>🔒 Strict NDA</span>
              <span>•</span>
              <span>⚡ 2-Hour Response SLA</span>
              <span>•</span>
              <span>💬 Direct Founder Call</span>
            </div>

            <div className={styles.grandFooterBypass}>
              <span>Need an immediate audit?</span>
              <a
                href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20need%20an%20urgent%20growth%20audit%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.grandFooterBypassLink}
              >
                WhatsApp directly at +91 82807 88689 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
