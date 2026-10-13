'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import LinkedInCampaignSimulator from './_components/LinkedInCampaignSimulator';
import styles from './linkedin-marketing-page.module.css';

// Section 2: 5 Common LinkedIn Marketing Challenges (Balanced Bento Architecture)
const heroChallenge = {
  badge: 'Critical Bottleneck',
  title: 'Low Engagement & Blind Scrolling',
  solution:
    'Improve the relevance and consistency of your content to encourage meaningful professional interactions.',
  fix: 'Executive thought leadership, native carousels & pattern-interrupt hooks',
  statVal: '3.4X',
  statLabel: 'Higher Interaction on Value Posts',
};

const subChallengesList = [
  {
    icon: '🎯',
    badge: 'Targeting Friction',
    title: 'Difficulty Reaching Decision-Makers',
    solution:
      'Develop audience targeting strategies based on professional roles, industries, company sizes, and business interests.',
    fix: 'C-Suite & Matched Audience filters',
  },
  {
    icon: '💸',
    badge: 'Ad Spend Burn',
    title: 'High Advertising Costs',
    solution:
      'Monitor campaign performance and optimise targeting, creatives, and conversion paths to improve efficiency.',
    fix: 'Bid-cap guardrails & CPA compression',
  },
  {
    icon: '🏢',
    badge: 'Inconsistent Tone',
    title: 'Inconsistent Brand Presence',
    solution:
      'Maintain a clear brand voice and a consistent publishing schedule across company pages and leadership profiles.',
    fix: 'Weekly multi-format editorial calendars',
  },
  {
    icon: '📉',
    badge: 'Friction Funnel',
    title: 'Poor Lead Conversion',
    solution:
      'Align campaign messaging, lead forms, landing pages, and follow-up processes with your sales objectives.',
    fix: 'Pre-filled native forms & CRM pipeline hooks',
  },
];

// Section 3: 6 Services Offered with Specific Deliverables
const servicesOffered = [
  {
    icon: '🎯',
    tag: 'SPONSORED MEDIA & ADS',
    title: 'LinkedIn Ads Management',
    desc: 'Reach relevant professional audiences through strategically planned LinkedIn advertising campaigns. We help with campaign setup, audience selection, ad creative coordination, budget management, testing, and ongoing optimisation based on campaign objectives.',
    deliverables: ['Sponsored Content & Video Ads', 'Precision Matched Audiences', 'Bid Caps & CPA Guardrails'],
  },
  {
    icon: '📋',
    tag: 'QUALIFIED B2B PIPELINE',
    title: 'LinkedIn Lead Generation',
    desc: 'Build a structured approach to attracting potential business customers through targeted campaigns, relevant offers, lead generation forms, and conversion-focused landing pages. Our focus is on helping you attract prospects who fit your business objectives rather than simply increasing lead volume.',
    deliverables: ['Zero-Friction Native Lead Forms', 'Real-Time CRM & WhatsApp Sync', 'High-Intent B2B Landing Pages'],
  },
  {
    icon: '🏢',
    tag: 'COMPANY PAGE BRANDING',
    title: 'LinkedIn Company Page Management',
    desc: 'Strengthen your company\'s professional presence with an optimised LinkedIn company page, consistent brand messaging, relevant updates, and audience-focused content. We help communicate your expertise, services, and business value to potential customers and partners.',
    deliverables: ['Page SEO & Tagline Optimization', 'Custom Life & Showcase Tabs', 'Consistent Weekly Updates Cadence'],
  },
  {
    icon: '✍️',
    tag: 'AUTHORITY & THOUGHT LEADERSHIP',
    title: 'LinkedIn Content Marketing',
    desc: 'Develop useful and engaging content that demonstrates your expertise and builds professional credibility. Depending on your audience, content may include educational posts, industry insights, company updates, case studies, carousels, and thought leadership content.',
    deliverables: ['High-Retention Visual Slide Decks', 'Founder Personal Branding Frameworks', 'In-Depth B2B Case Study Breakdowns'],
  },
  {
    icon: '🤝',
    tag: 'SALES ENABLEMENT & ABM',
    title: 'LinkedIn B2B Marketing',
    desc: 'Connect your marketing activities with your business development goals. We help define target audiences, develop relevant messaging, and coordinate content and campaigns to reach potential clients, industry partners, and decision-makers.',
    deliverables: ['Account-Based Marketing (ABM) Playbooks', 'Named Enterprise Target Lists', 'Multi-Touch Executive Outreach'],
  },
  {
    icon: '📊',
    tag: 'DATA & ATTRIBUTION',
    title: 'LinkedIn Campaign Analytics and Reporting',
    desc: 'Understand how your LinkedIn marketing activities are performing through relevant metrics and regular reporting. We monitor available data such as impressions, engagement, clicks, leads, conversion rates, and cost per lead to identify opportunities for improvement.',
    deliverables: ['Full Downstream SQL Attribution', 'Cost-Per-Acquisition Optimization', 'Transparent Bi-Weekly Executive Reviews'],
  },
];

// Section 4: Who Can Benefit (6 Industry Segments)
const industriesBenefiting = [
  {
    icon: '🏢',
    sector: 'ENTERPRISE & B2B',
    title: 'B2B Companies and Enterprise Businesses',
    desc: 'Reach relevant business professionals, communicate your expertise, and support longer sales cycles with targeted campaigns and informative content.',
    roles: 'CEOs, Board Members & Procurement Heads',
    focus: 'Enterprise Retainers & Strategic Deals',
  },
  {
    icon: '💻',
    sector: 'SOFTWARE & CLOUD',
    title: 'IT and SaaS Companies',
    desc: 'Promote software solutions, share product insights, reach relevant business buyers, and generate interest among professionals evaluating technology solutions.',
    roles: 'CTOs, VP Engineering & Product Directors',
    focus: 'Software Trials & Tech Pilots',
  },
  {
    icon: '⚖️',
    sector: 'ADVISORY & SERVICES',
    title: 'Consultants and Professional Service Providers',
    desc: 'Showcase expertise, publish thought leadership content, and build credibility with businesses looking for specialised services.',
    roles: 'Managing Partners & Corporate Executives',
    focus: 'Advisory Retainers & Specialized Consults',
  },
  {
    icon: '👥',
    sector: 'TALENT & WORKFORCE',
    title: 'Recruitment and Staffing Companies',
    desc: 'Strengthen employer visibility, communicate recruitment expertise, and reach relevant professional audiences through suitable content and advertising campaigns.',
    roles: 'CHROs, Talent Heads & HR Leaders',
    focus: 'Executive Search & Employer Authority',
  },
  {
    icon: '🏭',
    sector: 'MANUFACTURING & SUPPLY',
    title: 'Manufacturers and Industrial Businesses',
    desc: 'Present your products, capabilities, and industry knowledge to relevant business audiences, procurement professionals, and potential distribution partners.',
    roles: 'Supply Chain Directors & Plant Heads',
    focus: 'Commercial Distribution & B2B Supply',
  },
  {
    icon: '🚀',
    sector: 'SCALEUPS & CAPITAL',
    title: 'Startups and Growing Businesses',
    desc: 'Build professional brand awareness, introduce your solutions to target markets, and support business development with a focused LinkedIn marketing strategy.',
    roles: 'Founders, Angel Investors & Early Adopters',
    focus: 'Category Creation & Early Revenue',
  },
];

// Section 5: 5-Step Approach Roadmap
const approachSteps = [
  {
    step: '01',
    phase: 'PHASE 1: DISCOVERY & ICP',
    title: 'Step 1: Business and Audience Research',
    desc: 'We begin by understanding your services, target market, competitors, ideal customer profile, and business objectives. This helps establish a clear direction for your LinkedIn marketing strategy.',
    deliverable: 'Ideal Customer Profile (ICP) & Competitor Gap Analysis',
  },
  {
    step: '02',
    phase: 'PHASE 2: AUDIT & POSITIONING',
    title: 'Step 2: LinkedIn Presence and Competitor Audit',
    desc: 'We review your company page, existing content, advertising activities where applicable, and competitor positioning. The findings help identify opportunities to improve messaging, content quality, and audience engagement.',
    deliverable: 'Company Page UX Audit & Benchmark Scorecard',
  },
  {
    step: '03',
    phase: 'PHASE 3: STRATEGY & BUDGETS',
    title: 'Step 3: Strategy and Campaign Planning',
    desc: 'We develop a plan covering campaign objectives, target audiences, content themes, advertising requirements, budgets, and conversion goals. The strategy is aligned with your business priorities and available resources.',
    deliverable: 'Multi-Week Editorial Calendar & Paid Media Blueprint',
  },
  {
    step: '04',
    phase: 'PHASE 4: EXECUTION & SCALE',
    title: 'Step 4: Campaign Execution and Optimisation',
    desc: 'We implement the agreed activities, which may include company page management, content publishing, LinkedIn Ads, and lead generation campaigns. Performance data helps guide adjustments to targeting, creative assets, messaging, and budgets.',
    deliverable: 'Live Sponsored Campaigns & Form Integration',
  },
  {
    step: '05',
    phase: 'PHASE 5: ATTRIBUTION & CONTINUOUS ROI',
    title: 'Step 5: Reporting and Continuous Improvement',
    desc: 'We review campaign performance and share actionable insights. Where tracking is available, we evaluate lead quality and downstream conversions to help identify which activities contribute most effectively to your business objectives.',
    deliverable: 'Monthly Closed-Loop Sales Pipeline Attribution',
  },
];

// Section 6: Results Metrics (Bento Architecture: 1 Hero Metric + 6 KPI Tiles = 7 Symmetrical Items)
const heroResultMetric = {
  tag: 'PRIMARY COMMERCIAL NORTH STAR',
  title: 'Lead Quality and Sales Pipeline Contribution',
  desc: 'Where CRM and sales data are available, we assess whether leads match your ideal customer profile and contribute to verified business opportunities. We track pipeline value, closing rates, and downstream contract revenue.',
  statVal: '100%',
  statLabel: 'Attributed Pipeline',
};

const subResultMetrics = [
  {
    category: 'REACH & FREQUENCY',
    title: 'Audience Reach and Impressions',
    desc: 'Understand how frequently your content and advertisements reach professional audiences in your target industries.',
  },
  {
    category: 'AUDIENCE INTERACTION',
    title: 'Engagement Rate',
    desc: 'Evaluate interactions with your posts and campaigns, including comments, reposts, clicks, and page follows.',
  },
  {
    category: 'TRAFFIC INTENT',
    title: 'Click-Through Rate (CTR)',
    desc: 'Assess how effectively your ads and content encourage people to visit your landing pages or book consultations.',
  },
  {
    category: 'COMMERCIAL INBOUND',
    title: 'Lead Generation',
    desc: 'Monitor qualified enquiries and leads captured through native LinkedIn forms and dedicated conversion landers.',
  },
  {
    category: 'BUDGET EFFICIENCY',
    title: 'Cost Per Lead (CPL)',
    desc: 'Understand the advertising cost associated with acquiring each verified business lead to maintain strict unit economics.',
  },
  {
    category: 'FUNNEL VELOCITY',
    title: 'Conversion Rate',
    desc: 'Evaluate how effectively clicks and landing-page visits translate into enquiries, demo bookings, or signed contracts.',
  },
];

// Section 7: Why Marketing Copilot (Bento Architecture: 1 Hero Pillar + 4 Pillars = 5 Symmetrical Items)
const heroWhyPillar = {
  step: 'FOUNDATIONAL PILLAR 01',
  title: 'Business-Focused Strategy: Objectives First, Spend Second',
  desc: 'We align LinkedIn marketing activities with your business objectives, whether you want to increase professional visibility, generate B2B leads, or support a longer sales cycle. Every campaign is designed with pipeline ROI in mind rather than superficial vanity likes.',
};

const subWhyPillars = [
  {
    step: 'PILLAR 02',
    title: 'Integrated Marketing Approach',
    desc: 'LinkedIn can work alongside SEO, paid advertising, content marketing, and website optimisation. Coordinating these channels helps maintain consistent messaging across your customer journey.',
  },
  {
    step: 'PILLAR 03',
    title: 'Audience-Centred Campaigns',
    desc: 'We focus on defining relevant audiences and communicating value through appropriate content, creative assets, and campaign messaging.',
  },
  {
    step: 'PILLAR 04',
    title: 'Conversion-Focused Execution',
    desc: 'We consider what happens after a prospect clicks or submits a form, including landing-page relevance, enquiry handling, and conversion tracking where available.',
  },
  {
    step: 'PILLAR 05',
    title: 'Transparent Performance Reporting',
    desc: 'We use relevant campaign metrics to explain performance, identify challenges, and recommend next steps. Our goal is to support informed decisions rather than rely on vanity metrics alone.',
  },
];

// Section 8: FAQs (with Key Takeaways)
const faqsList = [
  {
    num: '01',
    q: 'What do LinkedIn marketing services include?',
    a: 'LinkedIn marketing services may include company page management, content creation, LinkedIn Ads management, audience targeting, B2B lead generation, campaign optimisation, and performance reporting. The exact scope depends on your business requirements and selected service package.',
    takeaway: 'Custom scopes tailored to whether you need paid ads, organic company page authority, or a combined growth engine.',
  },
  {
    num: '02',
    q: 'How can LinkedIn marketing generate B2B leads?',
    a: 'LinkedIn marketing can help businesses reach relevant professionals based on factors such as job role, industry, company, and seniority. Through useful content, targeted advertising, relevant offers, and clear conversion paths, businesses can attract potential customers and encourage enquiries.',
    takeaway: 'Precision seniority and job-title filtering ensures your marketing spend only targets decision-makers.',
  },
  {
    num: '03',
    q: 'How much do LinkedIn marketing services cost in India?',
    a: 'The cost depends on the scope of work, campaign complexity, content requirements, advertising budget, and reporting needs. Agency fees and advertising spend may be charged separately. Contact Marketing Copilot to discuss a plan suited to your objectives and budget.',
    takeaway: 'Flexible engagement plans designed for emerging startups to multinational enterprise brands.',
  },
  {
    num: '04',
    q: 'What is the difference between LinkedIn organic marketing and LinkedIn Ads?',
    a: 'Organic marketing focuses on company page content, professional engagement, and brand credibility without paying for each advertisement placement. LinkedIn Ads use paid campaigns to reach selected audiences and support objectives such as website visits, lead generation, and brand awareness. Both approaches can complement each other.',
    takeaway: 'Organic compounds brand prestige; LinkedIn Ads delivers immediate, predictable pipeline velocity.',
  },
  {
    num: '05',
    q: 'How long does it take to see results from LinkedIn marketing?',
    a: 'The timeline varies by objective, audience, budget, offer, and execution. Paid campaigns can generate early engagement or enquiries after launch, while building brand authority and a consistent organic presence generally requires sustained effort. Performance should be evaluated against agreed objectives over time.',
    takeaway: 'Paid ads begin generating inquiries within days; organic topical authority builds compounding trust over 60–90 days.',
  },
  {
    num: '06',
    q: 'Can small businesses and startups benefit from LinkedIn marketing?',
    a: 'Yes. Small businesses and startups can use LinkedIn to reach professional audiences, demonstrate expertise, build relevant connections, and test demand for their services. The strategy should match the company\'s target market, budget, and available resources.',
    takeaway: 'Startups can punch above their weight by positioning founders as industry leaders and running lean, hyper-targeted campaigns.',
  },
  {
    num: '07',
    q: 'How do you measure LinkedIn marketing performance?',
    a: 'Performance can be measured using relevant metrics such as reach, engagement, clicks, leads, conversion rate, and cost per lead. When CRM and sales data are available, lead quality and pipeline contribution can also be assessed.',
    takeaway: 'We report real sales pipeline value and qualified MQLs rather than superficial vanity impressions.',
  },
];

export default function LinkedInMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          SECTION 1: HERO SECTION
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.bluePulseDot} />
                <span>LinkedIn Marketing Agency · India</span>
              </div>

              <h1 className={styles.heroTitle}>
                LinkedIn Marketing Services in <span className="accent-gradient">India</span>
              </h1>

              <p className={styles.heroSub}>
                Reach the right professionals, build meaningful business connections, and generate quality leads with strategic LinkedIn marketing. Marketing Copilot helps businesses strengthen their professional presence, connect with decision-makers, and create targeted marketing campaigns aligned with their business objectives.
              </p>

              <p className={styles.heroSecondaryText}>
                From LinkedIn company page management and content marketing to paid advertising and lead generation, we help you turn LinkedIn into a strategic channel for business growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="#enquiry-section"
                  label="Get Your LinkedIn Marketing Strategy →"
                  size="lg"
                />
                <BeamButton
                  href="tel:+918280788689"
                  label="Talk to Our Team →"
                  size="lg"
                  variant="outline"
                />
              </div>
            </ScrollReveal>

            {/* Skeuomorphic Telemetry Performance Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>85%+</span>
                <span className={styles.tLabel}>Decision-Maker Reach</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4.8X</span>
                <span className={styles.tLabel}>Pipeline Velocity</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>₹0 Waste</span>
                <span className={styles.tLabel}>ABM Matched Filters</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>100%</span>
                <span className={styles.tLabel}>C-Suite Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          REGIONAL ASSURANCE MAP STRIP
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          SECTION 2: BUSINESS CHALLENGES (BENTO ARCHITECTURE)
         ══════════════════════════════════════════════════ */}
      <section className={styles.challengesSection} id="business-challenges">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Overcoming Platform Friction</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Struggling to Generate Leads and Build Authority on{' '}
              <span className="accent-gradient">LinkedIn?</span>
            </h2>
            <p className={styles.sectionDesc}>
              LinkedIn offers businesses an opportunity to reach professionals, decision-makers, and potential customers. However, simply publishing posts or running advertisements does not guarantee meaningful engagement or qualified leads.
            </p>
          </ScrollReveal>

          <div className={styles.challengesNarrativeBox}>
            <p>
              Without a clear strategy, businesses may struggle to reach the right audience, communicate their value, or convert professional engagement into business opportunities.
            </p>
            <p>
              Marketing Copilot helps address these challenges through a structured LinkedIn marketing approach focused on audience relevance, consistent communication, campaign optimisation, and measurable outcomes.
            </p>
          </div>

          {/* Symmetrical Bento Grid: 1 Hero Card + 4 Sub-Cards */}
          <div className={styles.bentoChallengesGrid}>
            {/* Hero Card: Low Engagement */}
            <ScrollReveal className={styles.challengeCardHero}>
              <div className={styles.challengeHeroContent}>
                <span className={styles.challengeHeroBadge}>{heroChallenge.badge}</span>
                <h3 className={styles.challengeHeroTitle}>{heroChallenge.title}</h3>
                <p className={styles.challengeHeroDesc}>{heroChallenge.solution}</p>
                <div className={styles.challengeHeroFix}>
                  <span>✓ Solution:</span> {heroChallenge.fix}
                </div>
              </div>
              <div className={styles.challengeHeroStatBox}>
                <div className={styles.heroStatVal}>{heroChallenge.statVal}</div>
                <div className={styles.heroStatLabel}>{heroChallenge.statLabel}</div>
              </div>
            </ScrollReveal>

            {/* 4 Balanced Complementary Cards */}
            {subChallengesList.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <div className={styles.challengeCard}>
                  <div>
                    <div className={styles.challengeHeader}>
                      <div className={styles.challengeIconBowl}>{item.icon}</div>
                      <span className={styles.challengeStatusPill}>{item.badge}</span>
                    </div>
                    <h3 className={styles.challengeTitle}>{item.title}</h3>
                    <p className={styles.challengeSolution}>{item.solution}</p>
                  </div>
                  <div className={styles.challengeFixPill}>
                    <span>✓ Solution:</span> {item.fix}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INTERACTIVE LINKEDIN CAMPAIGN SIMULATOR
         ══════════════════════════════════════════════════ */}
      <LinkedInCampaignSimulator />

      {/* ══════════════════════════════════════════════════
          SECTION 3: SERVICES OFFERED
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection} id="services-offered">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Full-Spectrum Practice</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our LinkedIn Marketing <span className="accent-gradient">Services</span>
            </h2>
            <p className={styles.sectionDesc}>
              Every business has different marketing goals. Our LinkedIn marketing services are designed to support brand awareness, professional engagement, lead generation, and long-term B2B growth.
            </p>
          </ScrollReveal>

          {/* 6 Services in 3x2 Grid */}
          <div className={styles.servicesGrid}>
            {servicesOffered.map((svc, idx) => (
              <ScrollReveal key={svc.title} delay={idx * 0.07}>
                <div className={styles.serviceCard}>
                  <div>
                    <div className={styles.serviceCardHeader}>
                      <div className={styles.serviceIconBowl}>{svc.icon}</div>
                      <span className={styles.serviceTag}>{svc.tag}</span>
                    </div>
                    <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                    <p className={styles.serviceCardDesc}>{svc.desc}</p>
                  </div>
                  <div className={styles.serviceDeliverables}>
                    {svc.deliverables.map((d) => (
                      <div key={d} className={styles.deliverableRow}>
                        <span className={styles.checkBullet}>✓</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual Showcase Feature Frame */}
          <ScrollReveal>
            <div className={styles.showcaseBanner}>
              <div className={styles.showcaseImgWrapper}>
                <Image
                  src="/images/linkedin_b2b_dashboard.jpg"
                  alt="LinkedIn B2B Campaign Analytics & Decision Maker Targeting Dashboard"
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  className={styles.showcaseImg}
                />
              </div>
              <div className={styles.showcaseContent}>
                <div className={styles.showcaseBadge}>
                  <span>⚡ EXECUTIVE AUDIENCE TARGETING</span>
                </div>
                <h3 className={styles.showcaseTitle}>
                  Full-Funnel LinkedIn Ads &amp; Lead Generation Architecture
                </h3>
                <p className={styles.showcaseDesc}>
                  We combine precision job title filtering, seniority segmentation, high-converting Sponsored Content, and zero-dropoff instant lead forms to turn LinkedIn into an automated enterprise client pipeline.
                </p>
                <div className={styles.showcaseChecklist}>
                  <div className={styles.showcaseCheckRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Verified C-Suite, VP, and Director targeting without bot waste</span>
                  </div>
                  <div className={styles.showcaseCheckRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Custom Matched Audiences &amp; CRM contact list retargeting</span>
                  </div>
                  <div className={styles.showcaseCheckRow}>
                    <span className={styles.checkDot}>✓</span>
                    <span>Downstream SQL pipeline tracking and transparent cost-per-lead reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4: WHO CAN BENEFIT? (6 SECTORS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.industriesSection} id="who-can-benefit">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Target Sectors &amp; Markets</span>
            </div>
            <h2 className={styles.sectionTitle}>
              LinkedIn Marketing Solutions for{' '}
              <span className="accent-gradient">Different Businesses</span>
            </h2>
            <p className={styles.sectionDesc}>
              LinkedIn marketing can support businesses that need to reach professional audiences, build industry credibility, or develop a predictable approach to B2B customer acquisition.
            </p>
          </ScrollReveal>

          <div className={styles.industriesGrid}>
            {industriesBenefiting.map((ind, idx) => (
              <ScrollReveal key={ind.title} delay={idx * 0.08}>
                <div className={styles.industryCard}>
                  <div>
                    <div className={styles.industryCardTop}>
                      <div className={styles.industryIconBowl}>{ind.icon}</div>
                      <span className={styles.industrySectorPill}>{ind.sector}</span>
                    </div>
                    <h3 className={styles.industryTitle}>{ind.title}</h3>
                    <p className={styles.industryDesc}>{ind.desc}</p>
                  </div>
                  <div className={styles.industryMetaRow}>
                    <div className={styles.industryMetaItem}>
                      <strong>Key Roles:</strong> {ind.roles}
                    </div>
                    <div className={styles.industryMetaItem}>
                      <strong>Focus:</strong> {ind.focus}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.industriesClosingNote}>
            Our approach adapts to your audience, industry, resources, and business goals rather than applying the same campaign structure to every company.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5: APPROACH (CONNECTED ROADMAP)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection} id="our-process">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>5-Step Execution Roadmap</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our LinkedIn Marketing <span className="accent-gradient">Process</span>
            </h2>
            <p className={styles.sectionDesc}>
              Successful LinkedIn marketing requires a clear understanding of your business, relevant audience targeting, consistent execution, and ongoing performance analysis.
            </p>
          </ScrollReveal>

          <div className={styles.processTimeline}>
            {approachSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.08}>
                <div className={styles.processStepCard}>
                  <div className={styles.stepNumCol}>
                    <div className={styles.stepNumBowl}>{step.step}</div>
                  </div>
                  <div className={styles.stepContentCol}>
                    <span className={styles.stepPhasePill}>{step.phase}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                    <div className={styles.stepDeliverableTag}>
                      <span>✓ Deliverable:</span> {step.deliverable}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6: RESULTS (BENTO TELEMETRY)
         ══════════════════════════════════════════════════ */}
      <section className={styles.resultsSection} id="results">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Clear Telemetry &amp; KPIs</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Measure What Matters in{' '}
              <span className="accent-gradient">LinkedIn Marketing</span>
            </h2>
            <p className={styles.sectionDesc}>
              LinkedIn marketing performance should be evaluated against your business goals, not just impressions or likes. We focus on the metrics that help you understand audience engagement, lead quality, and campaign efficiency.
            </p>
          </ScrollReveal>

          {/* Symmetrical Bento Grid: 1 Hero Result Card + 6 KPI Tiles = 7 Items */}
          <div className={styles.resultsBentoGrid}>
            <ScrollReveal className={styles.heroResultCard}>
              <div>
                <div className={styles.heroResultHeader}>
                  <span className={styles.heroResultTag}>{heroResultMetric.tag}</span>
                </div>
                <h3 className={styles.heroResultTitle}>{heroResultMetric.title}</h3>
                <p className={styles.heroResultDesc}>{heroResultMetric.desc}</p>
              </div>
              <div className={styles.heroResultBadgePill}>
                <strong>{heroResultMetric.statVal}</strong>
                <span>{heroResultMetric.statLabel}</span>
              </div>
            </ScrollReveal>

            {subResultMetrics.map((metric, idx) => (
              <ScrollReveal key={metric.title} delay={idx * 0.06}>
                <div className={styles.metricCard}>
                  <div>
                    <div className={styles.metricCardTop}>
                      <span className={styles.metricDot} />
                      <span className={styles.metricCategoryPill}>{metric.category}</span>
                    </div>
                    <h3 className={styles.metricCardTitle}>{metric.title}</h3>
                    <p className={styles.metricCardDesc}>{metric.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.resultsSummaryBox}>
            <p>
              We use these insights to identify improvement opportunities, refine campaign decisions, and keep marketing activities aligned with your business objectives.
            </p>
            <p>
              Results depend on factors such as audience demand, offer quality, budget, competition, and sales follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7: WHY MARKETING COPILOT? (BENTO ARCHITECTURE)
         ══════════════════════════════════════════════════ */}
      <section className={styles.whySection} id="why-marketing-copilot">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Agency Advantage</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Why Choose Marketing Copilot for{' '}
              <span className="accent-gradient">LinkedIn Marketing?</span>
            </h2>
            <p className={styles.sectionDesc}>
              Choosing a LinkedIn marketing partner means finding a team that understands both the platform and your business goals. Marketing Copilot approaches digital marketing with a focus on strategy, relevant audience targeting, performance measurement, and continuous improvement.
            </p>
          </ScrollReveal>

          {/* Symmetrical Bento Grid: 1 Hero Pillar + 4 Sub-Pillars = 5 Items */}
          <div className={styles.whyBentoGrid}>
            <ScrollReveal className={styles.whyCardHero}>
              <div className={styles.whyCardHeroStep}>{heroWhyPillar.step}</div>
              <h3 className={styles.whyCardHeroTitle}>{heroWhyPillar.title}</h3>
              <p className={styles.whyCardHeroDesc}>{heroWhyPillar.desc}</p>
            </ScrollReveal>

            {subWhyPillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.step} delay={idx * 0.08}>
                <div className={styles.whyCard}>
                  <div className={styles.whyStep}>{pillar.step}</div>
                  <h3 className={styles.whyTitle}>{pillar.title}</h3>
                  <p className={styles.whyDesc}>{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8: FREQUENTLY ASKED QUESTIONS
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection} id="faq-section">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Answers &amp; Clarity</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <span className="accent-gradient">Questions</span>
            </h2>
            <p className={styles.sectionDesc}>
              Everything you need to know about LinkedIn marketing services, ad budgets, organic strategy, and measuring B2B performance.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {faqsList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${idx}`}
                    aria-controls={`faq-pane-${idx}`}
                  >
                    <div className={styles.faqQuestionRow}>
                      <span className={styles.faqNumPill}>{faq.num}</span>
                      <span className={styles.faqQuestion}>{faq.q}</span>
                    </div>
                    <span className={styles.faqIconBowl}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className={styles.faqPane}
                      id={`faq-pane-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                    >
                      <p className={styles.faqAnswer}>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡 Key Takeaway:</span> {faq.takeaway}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9: FINAL PRE-FOOTER CTA CARD
          * Matches Homepage CTASection / .innerBox *
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeStyleCtaSection} id="enquiry-section">
        <div className="container">
          <div className={styles.homeStyleCtaBox}>
            <ScrollReveal className="text-center">
              <div className="eyebrow eyebrow-center">
                <span className="eyebrow-dot" />
                <span>Turn Connections Into Clients</span>
              </div>

              <h2 className={`display-xl ${styles.homeCtaHeadline}`}>
                Ready to Turn LinkedIn Into a{' '}
                <span className="accent-gradient">B2B Growth Channel?</span>
              </h2>

              <p className={`body-lg ${styles.homeCtaSub}`}>
                Discuss your target audience, lead-generation objectives, and marketing budget with our specialist team. We build custom campaigns aligned with your sales pipeline.
              </p>

              <div className={styles.ctaActions}>
                <BeamButton
                  href="/contact"
                  label="Get Your LinkedIn Marketing Plan →"
                  size="lg"
                />
                <BeamButton
                  href="tel:+918280788689"
                  label="Talk to Our Team (+91 82807 88689)"
                  size="lg"
                  variant="outline"
                />
              </div>

              <div className={styles.ctaBrandPunchline}>
                Marketing Copilot — Strategy. Connections. Pipeline.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
