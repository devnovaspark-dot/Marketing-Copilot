'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import LinkedInCampaignSimulator from './_components/LinkedInCampaignSimulator';
import styles from './linkedin-marketing-page.module.css';

// ══════════════════════════════════════════════════
// 1. DATA: LINKEDIN SALES NAVIGATOR SERVICES (5 Items)
// ══════════════════════════════════════════════════
const salesNavigatorServices = [
  {
    num: '01',
    icon: '🎯',
    title: '1. Target Audience Research',
    desc: 'Identify target companies and decision-makers based on industry, company size, location, job roles, and seniority to focus your sales efforts.',
  },
  {
    num: '02',
    icon: '🔍',
    title: '2. Sales Navigator Report Building',
    desc: 'Use LinkedIn Sales Navigator filters to find potential customers and companies you are interested in connecting with that fit your business objectives.',
  },
  {
    num: '03',
    icon: '🗂️',
    title: '3. Lead Database Development',
    desc: 'Quickly develop structured prospect lists by industry, job function, company size, market, and sales priorities to manage prospects more easily.',
  },
  {
    num: '04',
    icon: '🔔',
    title: '4. Lead Tracking and Company Insights',
    desc: 'Track saved leads, company updates, and relevant alerts to understand prospect interests and identify opportunities for timely, personalised communication.',
  },
  {
    num: '05',
    icon: '💬',
    title: '5. Personalised Outreach Strategy',
    desc: 'Plan personalised messages for target prospects and align marketing and sales activities to support meaningful conversations and stronger business relationships.',
  },
];

// ══════════════════════════════════════════════════
// 2. DATA: LINKEDIN ADVERTISING SERVICES (6 Modules)
// ══════════════════════════════════════════════════
const advertisingServices = [
  {
    num: '01',
    icon: '⚙️',
    tag: 'STRATEGY & ARCHITECTURE',
    title: '1. Strategy and Setup',
    desc: 'We define campaign objectives, audience segments, ad formats, budgets, and conversion goals to build a structured advertising plan aligned with your business priorities.',
    points: [
      'Campaign objective and audience planning',
      'Campaign Manager setup and configuration',
      'Budget, bidding, and conversion tracking strategy',
    ],
  },
  {
    num: '02',
    icon: '🎯',
    tag: 'DECISION-MAKER REACH',
    title: '2. Audience Targeting',
    desc: 'Reach relevant professionals using appropriate targeting criteria such as job titles, job functions, seniority, industries, company size, and target accounts.',
    points: [
      'Decision-maker and professional audience targeting',
      'Industry and company-size segmentation',
      'Matched Audiences and account-based targeting, where applicable',
    ],
  },
  {
    num: '03',
    icon: '📋',
    tag: 'HIGH-INTENT INBOUND',
    title: '3. Lead Generation Ads',
    desc: 'Create campaigns designed to encourage potential customers to submit enquiries, request consultations, register for events, or download valuable resources.',
    points: [
      'LinkedIn Lead Gen Forms',
      'Lead magnets and consultation campaigns',
      'Landing-page and conversion-path optimisation',
    ],
  },
  {
    num: '04',
    icon: '🎥',
    tag: 'SPONSORED MEDIA',
    title: '4. Sponsored Content and Video Ads',
    desc: 'Promote useful content, business offers, product information, and brand stories through suitable LinkedIn advertising formats.',
    points: [
      'Sponsored content and single-image ads',
      'Video and carousel-style creative campaigns, where supported',
      'Thought leadership and brand awareness campaigns',
    ],
  },
  {
    num: '05',
    icon: '🔄',
    tag: 'FULL-FUNNEL NURTURE',
    title: '5. Retargeting Campaigns',
    desc: 'Reconnect with eligible audiences who have previously interacted with your business, website, or advertising content, subject to audience availability and platform requirements.',
    points: [
      'Website visitor retargeting',
      'Engagement-based audience campaigns',
      'Follow-up campaigns for relevant offers and resources',
    ],
  },
  {
    num: '06',
    icon: '📊',
    tag: 'DATA TELEMETRY & ROI',
    title: '6. LinkedIn Ads Optimisation and Reporting',
    desc: 'Monitor campaign performance and use available data to improve targeting, creative performance, budget allocation, and conversion efficiency.',
    points: [
      'Click-through rate (CTR) and cost-per-click (CPC) analysis',
      'Cost per lead (CPL) and lead-quality monitoring',
      'Conversion tracking and campaign performance reports',
    ],
  },
];

// ══════════════════════════════════════════════════
// 3. DATA: OUR LINKEDIN MARKETING SERVICES (6 Pillars)
// ══════════════════════════════════════════════════
const marketingServices = [
  {
    icon: '🚀',
    tag: 'PAID PERFORMANCE',
    title: 'LinkedIn Ads Management',
    desc: 'We plan and manage LinkedIn ad campaigns, select the right audience, manage budgets, test ads, and improve performance to meet your business goals.',
    deliverable: 'Audience targeting, creative testing, and CPA optimization',
  },
  {
    icon: '🎯',
    tag: 'B2B PIPELINE',
    title: 'LinkedIn Lead Generation',
    desc: 'We design campaigns to bring in potential leads that fit your business\'s parameters and goals.',
    deliverable: 'Qualified enquiries, native lead forms, and CRM handoff',
  },
  {
    icon: '🏢',
    tag: 'BRAND PRESENCE',
    title: 'LinkedIn Company Page Management',
    desc: 'We manage your LinkedIn company page, share regular updates, maintain brand consistency, and highlight your services to attract customers and business partners.',
    deliverable: 'Consistent publishing cadence, page SEO, and visual identity',
  },
  {
    icon: '✍️',
    tag: 'AUTHORITY BUILDING',
    title: 'LinkedIn Content Marketing',
    desc: 'We keep your expertise alive and build your trust with useful content, such as educational posts, industry updates, industry case study posts, and carousel posts.',
    deliverable: 'Thought leadership decks, case studies, and educational carousels',
  },
  {
    icon: '🤝',
    tag: 'PARTNERSHIP & ABM',
    title: 'LinkedIn B2B Marketing',
    desc: 'Our team strategically targets your business\' messaging, relevant content, and LinkedIn marketing campaigns to connect with industry partners, decision-makers, and potential clients.',
    deliverable: 'Strategic B2B positioning and multi-stakeholder messaging',
  },
  {
    icon: '📈',
    tag: 'ACTIONABLE TELEMETRY',
    title: 'LinkedIn Campaign Analytics and Reporting',
    desc: 'We track LinkedIn campaign results, including clicks, engagement, leads, and conversions, to understand performance and identify areas for improvement.',
    deliverable: 'Transparent attribution reports and conversion tracking',
  },
];

// ══════════════════════════════════════════════════
// 4. DATA: WHO SHOULD INVEST IN LINKEDIN ADS? (Key Segments)
// ══════════════════════════════════════════════════
const industrySegments = [
  {
    icon: '🚀',
    sector: 'SOFTWARE & SCALEUPS',
    title: 'SaaS Startups',
    desc: 'Reach technology buyers, product managers, and founders looking for innovative software tools with trial and demo sign-up campaigns.',
    roles: 'CTOs, VP Engineering & Product Directors',
    focus: 'Software Trials & Tech Pilots',
  },
  {
    icon: '💻',
    sector: 'TECHNOLOGY & CLOUD',
    title: 'IT Firms',
    desc: 'Connect with enterprise procurement teams and decision-makers evaluating custom IT engineering, cloud, and cybersecurity contracts.',
    roles: 'CIOs, IT Directors & Technical Leads',
    focus: 'Enterprise Retainers & Long-Term IT Contracts',
  },
  {
    icon: '⚖️',
    sector: 'ADVISORY & STRATEGY',
    title: 'Consultants for Hire',
    desc: 'Establish executive thought leadership, showcase specialized expertise, and attract corporate consulting retainers.',
    roles: 'Managing Partners, Directors & Business Leaders',
    focus: 'Advisory Retainers & Strategic Consultations',
  },
  {
    icon: '👥',
    sector: 'TALENT ACQUISITION',
    title: 'Recruitment Agencies',
    desc: 'Strengthen visibility with corporate hiring heads, position recruitment expertise, and build a trusted talent brand.',
    roles: 'CHROs, Talent Heads & HR Directors',
    focus: 'Executive Search & Employer Authority',
  },
  {
    icon: '🏢',
    sector: 'ENTERPRISE B2B',
    title: 'B2B Enterprise Businesses',
    desc: 'Navigate complex multi-stakeholder purchase cycles with targeted account-based marketing (ABM) and custom-matched audiences.',
    roles: 'CEOs, Board Members & Procurement Heads',
    focus: 'High-Value Enterprise Deals & Multi-Touch Pipeline',
  },
  {
    icon: '🏭',
    sector: 'MANUFACTURING & SUPPLY',
    title: 'Manufacturers & Industrial Firms',
    desc: 'Showcase production capabilities, industrial machinery, and supply-chain solutions to procurement professionals and distributors.',
    roles: 'Supply Chain Directors & Plant Heads',
    focus: 'Commercial Distribution & B2B Supply Deals',
  },
];

// ══════════════════════════════════════════════════
// 5. DATA: OUR LINKEDIN MARKETING PROCESS (5 Steps)
// ══════════════════════════════════════════════════
const processSteps = [
  {
    step: '01',
    phase: 'PHASE 1: DISCOVERY & ICP',
    tag: 'Foundation & Research',
    title: 'Step 1: Business and Audience Research',
    desc: 'We begin by understanding your services, target market, competitors, ideal customer profile, and business objectives. This helps establish a clear direction for your LinkedIn marketing strategy.',
    duration: 'Week 1',
    highlights: ['Competitor Benchmark', 'Decision-Maker Personas', 'Goal Alignment'],
    deliverable: 'Ideal Customer Profile (ICP) & Competitor Gap Analysis',
  },
  {
    step: '02',
    phase: 'PHASE 2: AUDIT & POSITIONING',
    tag: 'Audit & Analysis',
    title: 'Step 2: LinkedIn Presence and Competitor Audit',
    desc: 'We review your company page, existing content, advertising activities where applicable, and competitor positioning. The findings help identify opportunities to improve messaging, content quality, and audience engagement.',
    duration: 'Week 2',
    highlights: ['Page Scorecard', 'Content Teardown', 'Positioning White Space'],
    deliverable: 'Company Page UX Audit & Benchmark Scorecard',
  },
  {
    step: '03',
    phase: 'PHASE 3: STRATEGY & BUDGETS',
    tag: 'Blueprint & Architecture',
    title: 'Step 3: Strategy and Campaign Planning',
    desc: 'We develop a plan covering campaign objectives, target audiences, content themes, advertising requirements, budgets, and conversion goals. The strategy is aligned with your business priorities and available resources.',
    duration: 'Week 3',
    highlights: ['Editorial Calendar', 'Budget Modeling', 'Ad Funnel Architecture'],
    deliverable: 'Multi-Week Editorial Calendar & Paid Media Blueprint',
  },
  {
    step: '04',
    phase: 'PHASE 4: EXECUTION & OPTIMISATION',
    tag: 'Go-to-Market & Inbound',
    title: 'Step 4: Campaign Execution and Optimisation',
    desc: 'We implement the agreed activities, which may include company page management, content publishing, LinkedIn Ads, and lead generation campaigns. Performance data helps guide adjustments to targeting, creative assets, messaging, and budgets.',
    duration: 'Weeks 4+',
    highlights: ['Lead Form Ads', 'Thought Leadership Posts', 'Bid & Creative Testing'],
    deliverable: 'Live Sponsored Campaigns & Form Integration',
  },
  {
    step: '05',
    phase: 'PHASE 5: REPORTING & CONTINUOUS ROI',
    tag: 'Pipeline & Scaling',
    title: 'Step 5: Reporting and Continuous Improvement',
    desc: 'We review campaign performance and share actionable insights. Where tracking is available, we evaluate lead quality and downstream conversions to help identify which activities contribute most effectively to your business objectives.',
    duration: 'Ongoing',
    highlights: ['CRM Match Reports', 'Cost Per Opportunity', 'Iterative Scaling'],
    deliverable: 'Monthly Closed-Loop Sales Pipeline Attribution',
  },
];

// ══════════════════════════════════════════════════
// 6. DATA: WHY CHOOSE MARKETING COPILOT (5 Pillars)
// ══════════════════════════════════════════════════
const heroWhyPillar = {
  step: 'FOUNDATIONAL PILLAR 01',
  title: 'Business-Focused Strategy',
  desc: 'Whether your business goal is to increase brand recognition, attract B2B leads, or target decision-makers, LinkedIn marketing is aligned with your business objectives.',
};

const subWhyPillars = [
  {
    icon: '🔄',
    step: 'PILLAR 02',
    tag: 'Omnichannel Alignment',
    title: 'Integrated Marketing Approach',
    desc: 'We sync LinkedIn with SEO, PPC, content marketing, and site optimisation to help ensure that your messages are consistent across your marketing mix.',
    highlight: 'Unified B2B Messaging & Cross-Channel Attribution',
  },
  {
    icon: '🎯',
    step: 'PILLAR 03',
    tag: 'Decision-Maker Focus',
    title: 'Audience-Centred Campaigns',
    desc: 'We identify relevant audiences and create suitable content, ad creatives, and messages to connect your business with potential customers.',
    highlight: 'C-Suite & Matched Account Intent Filtering',
  },
  {
    icon: '⚡',
    step: 'PILLAR 04',
    tag: 'Friction-Free Handover',
    title: 'Conversion-Focused Execution',
    desc: 'We improve the journey from ad clicks to inquiries by focusing on relevant landing pages, lead forms, and conversion tracking.',
    highlight: 'Zero-Dropoff Lead Gen Forms & Fast Inbound Sync',
  },
  {
    icon: '📊',
    step: 'PILLAR 05',
    tag: 'Honest Telemetry',
    title: 'Transparent Performance Reporting',
    desc: 'We track important campaign metrics, share clear reports, and suggest improvements to help you understand results and make better marketing decisions.',
    highlight: 'Real Commercial Pipeline Value Over Vanity Metrics',
  },
];

// ══════════════════════════════════════════════════
// 7. DATA: FREQUENTLY ASKED QUESTIONS (7 Exact FAQs)
// ══════════════════════════════════════════════════
const faqsList = [
  {
    num: '01',
    q: 'How can LinkedIn marketing help my business grow?',
    a: 'LinkedIn marketing helps businesses build professional credibility, reach decision-makers, generate B2B leads, and connect with potential clients through targeted campaigns and relevant content.',
    takeaway: 'Builds long-term business credibility while generating high-value qualified sales opportunities.',
  },
  {
    num: '02',
    q: 'Which LinkedIn marketing services does Marketing Copilot offer?',
    a: 'Marketing Copilot provides LinkedIn Ads management, company page management, content marketing, B2B lead generation, Sales Navigator prospect research, campaign optimization, and performance reports.',
    takeaway: 'Comprehensive full-spectrum LinkedIn growth from paid advertising to organic company authority.',
  },
  {
    num: '03',
    q: 'Is LinkedIn marketing suitable for small businesses?',
    a: 'Yes, small businesses can use LinkedIn marketing to reach niche audiences, showcase their expertise, build industry connections, and attract potential customers within their budget.',
    takeaway: 'Hyper-focused targeting allows small teams to compete directly with enterprise brands without waste.',
  },
  {
    num: '04',
    q: 'How do LinkedIn Ads help generate qualified leads?',
    a: 'Businesses can create LinkedIn ads targeted to specific industries, job types, company sizes, and seniority levels, and share offers that match their ideal customer profile.',
    takeaway: 'Precision filters ensure your advertising investment is only shown to verified decision-makers.',
  },
  {
    num: '05',
    q: 'How much should a business invest in LinkedIn marketing?',
    a: 'Investment is based on campaign goals, target market, content needs, and campaign spending. With a customized strategy, you can ensure that your marketing efforts are aligned with your budget and growth objectives.',
    takeaway: 'Budgets are calibrated to your customer acquisition value and pipeline goals for maximum ROI.',
  },
  {
    num: '06',
    q: 'How long does it take for LinkedIn marketing to produce success?',
    a: 'Paid can create leads quickly after launch, but organic campaigns take time for both engagement and content. Outcomes depend on your audience, budget, and strategy.',
    takeaway: 'LinkedIn Ads produce fast early pipeline traction; organic authority compounds sustainably over time.',
  },
  {
    num: '07',
    q: 'How can I measure the ROI of LinkedIn marketing?',
    a: 'Know the value of a lead, conversion rates, cost per lead, customer acquisition costs, and the revenue generated from LinkedIn to determine ROI.',
    takeaway: 'We track closed sales revenue and qualified opportunities rather than superficial engagement metrics.',
  },
];

export default function LinkedInMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Enquiry Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMessage('Please fill in your name, work email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim() || 'Not specified',
      services: ['LinkedIn Marketing & B2B Lead Generation'],
      message: form.message.trim() || 'Requested LinkedIn Marketing Plan from LinkedIn Service Page',
    };

    try {
      // 1. Next.js API Route Handler
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        return;
      }

      // 2. Direct fallback to FormSubmit
      const recipientEmail = 'novasdmagency@gmail.com';
      const directRes = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Full Name': payload.name,
            'Work Email': payload.email,
            'Phone / WhatsApp': payload.phone,
            'Company Name': payload.company,
            'Service Requested': 'LinkedIn Marketing Services in India',
            'Project Details / Message': payload.message,
            _subject: `New LinkedIn Marketing Plan Inquiry — ${payload.name} (${payload.company})`,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      const directData = await directRes.json().catch(() => null);

      if (directRes.ok && (directData?.success === 'true' || directData?.success === true || directData?.message)) {
        setIsSubmitted(true);
      } else {
        setErrorMessage('Unable to send enquiry. Please contact us directly at +91 82807 88689.');
      }
    } catch {
      setErrorMessage('Connection error. Please call or WhatsApp us directly at +91 82807 88689.');
    } finally {
      setIsSubmitting(false);
    }
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

              <p className={styles.heroSub} style={{ marginTop: '-16px', marginBottom: '32px' }}>
                From LinkedIn company page management and content marketing to paid advertising and lead generation, we help you turn LinkedIn into a strategic channel for business growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="#enquiry-section"
                  label="Get Your LinkedIn Marketing Strategy"
                  size="lg"
                />
                <BeamButton
                  href="tel:+918280788689"
                  label="Talk to Our Team"
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
          SECTION 2: LINKEDIN SALES NAVIGATOR SERVICES
         ══════════════════════════════════════════════════ */}
      <section className={styles.salesNavSection} id="sales-navigator-services">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Targeted B2B Prospecting</span>
            </div>
            <h2 className={styles.sectionTitle}>
              LinkedIn Sales Navigator Services for{' '}
              <span className="accent-gradient">Targeted B2B Prospecting</span>
            </h2>
          </ScrollReveal>

          <div className={styles.salesNavIntroBox}>
            <p>
              Find the right companies and decision-makers for your business with LinkedIn Sales Navigator. Marketing Copilot helps B2B teams define their ideal customer profiles, research target accounts, identify relevant prospects and organise lead lists to support more focused sales outreach.
            </p>
            <p>
              Our LinkedIn Sales Navigator services help align prospect research with your sales goals, so your team can spend less time searching for potential customers and more time building relevant business relationships.
            </p>
          </div>

          <h3 className={styles.salesNavSubhead}>
            Our LinkedIn Sales Navigator Services
          </h3>

          <div className={styles.salesNavGrid}>
            {salesNavigatorServices.map((svc, idx) => (
              <ScrollReveal key={svc.title} delay={idx * 0.07}>
                <div className={styles.salesNavCard}>
                  <div>
                    <div className={styles.salesNavCardHeader}>
                      <div className={styles.salesNavIconBowl}>{svc.icon}</div>
                      <span className={styles.salesNavNumBadge}>{svc.num}</span>
                    </div>
                    <h4 className={styles.salesNavTitle}>{svc.title}</h4>
                    <p className={styles.salesNavDesc}>{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="#enquiry-section"
              label="Deploy Sales Navigator Prospecting"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3: OUR LINKEDIN ADVERTISING SERVICES
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection} id="linkedin-advertising-services">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Paid Acquisition &amp; High-Intent Ads</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our LinkedIn <span className="accent-gradient">Advertising Services</span>
            </h2>
            <p className={styles.sectionDesc} style={{ fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              Reach Decision-Makers and Generate Qualified B2B Leads with LinkedIn Ads
            </p>
            <p className={styles.sectionDesc}>
              Target qualified prospects with LinkedIn advertising campaigns. Marketing Copilot allows businesses in the Indian market to plan, create, manage, and optimize LinkedIn Ads for a given audience, goal, and budget.
            </p>
          </ScrollReveal>

          {/* 6 Advertising Services Grid */}
          <div className={styles.servicesGrid}>
            {advertisingServices.map((ad, idx) => (
              <ScrollReveal key={ad.title} delay={idx * 0.07}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.serviceCardHeader}>
                      <div className={styles.serviceIconBowl}>{ad.icon}</div>
                      <span className={styles.serviceTag}>{ad.tag}</span>
                    </div>
                    <h3 className={styles.serviceCardTitle}>{ad.title}</h3>
                    <p className={styles.serviceCardDesc}>{ad.desc}</p>
                  </div>
                  <div className={styles.serviceDeliverables}>
                    {ad.points.map((pt) => (
                      <div key={pt} className={styles.deliverableRow}>
                        <span className={styles.checkBullet}>✓</span>
                        <span>{pt}</span>
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

          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="#enquiry-section"
              label="Launch Your LinkedIn Ads Campaign"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INTERACTIVE LINKEDIN CAMPAIGN SIMULATOR
         ══════════════════════════════════════════════════ */}
      <LinkedInCampaignSimulator />

      {/* ══════════════════════════════════════════════════
          SECTION 4: OUR LINKEDIN MARKETING SERVICES
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection} id="our-linkedin-marketing-services" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our LinkedIn Marketing <span className="accent-gradient">Services</span>
            </h2>
            <p className={styles.sectionDesc}>
              Every business has different marketing goals. Our LinkedIn marketing services support brand awareness, professional engagement, lead generation, and long-term B2B growth.
            </p>
          </ScrollReveal>

          {/* 6 Marketing Services in 3x2 Grid */}
          <div className={styles.servicesGrid}>
            {marketingServices.map((svc, idx) => (
              <ScrollReveal key={svc.title} delay={idx * 0.07}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.serviceCardHeader}>
                      <div className={styles.serviceIconBowl}>{svc.icon}</div>
                      <span className={styles.serviceTag}>{svc.tag}</span>
                    </div>
                    <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
                    <p className={styles.serviceCardDesc}>{svc.desc}</p>
                  </div>
                  <div className={styles.serviceDeliverables}>
                    <div className={styles.deliverableRow}>
                      <span className={styles.checkBullet}>💎</span>
                      <span>{svc.deliverable}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="#enquiry-section"
              label="Explore Full-Spectrum LinkedIn Marketing"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5: WHO SHOULD INVEST IN LINKEDIN ADS?
         ══════════════════════════════════════════════════ */}
      <section className={styles.industriesSection} id="who-should-invest">
        <div className="container">
          <ScrollReveal className={styles.sectionHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Target Sectors &amp; Markets</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Who Should Invest in <span className="accent-gradient">LinkedIn Ads?</span>
            </h2>
            <p className={styles.sectionDesc}>
              Businesses can rely on LinkedIn Ads to reach professionals who impact their growth, right from a SaaS startup to an IT firm, and right from a consultant for hire to a recruitment agency.
            </p>
          </ScrollReveal>

          <div className={styles.industriesGrid}>
            {industrySegments.map((ind, idx) => (
              <ScrollReveal key={ind.title} delay={idx * 0.08}>
                <div className={styles.industryCard}>
                  <div className={styles.industryCardBody}>
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

          {/* Callout Banner: Find Your Next Business Opportunity */}
          <ScrollReveal>
            <div className={styles.whoCalloutBanner}>
              <h3 className={styles.whoCalloutTitle}>
                Find Your Next Business Opportunity with LinkedIn Ads!
              </h3>
              <p className={styles.whoCalloutDesc}>
                Let&apos;s create a LinkedIn advertising strategy tailored to your target audience, budget, and business objectives. Connect with our team to get started.
              </p>
              <BeamButton
                href="#enquiry-section"
                label="Start Your LinkedIn Strategy"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6: OUR LINKEDIN MARKETING PROCESS
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
            {/* Quick Milestone Breadcrumb Rail */}
            <div className={styles.roadmapBreadcrumbs}>
              {processSteps.map((s, i) => (
                <div key={s.step} className={styles.breadcrumbItem}>
                  <span className={styles.breadcrumbNum}>{s.step}</span>
                  <span className={styles.breadcrumbName}>{s.phase.split(':')[1]?.trim() || s.phase}</span>
                  {i < processSteps.length - 1 && <span className={styles.breadcrumbArrow}>→</span>}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className={styles.processTimeline}>
            <div className={styles.timelineSpine} />
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.08} className={styles.processStepReveal}>
                <div className={styles.processStepCard}>
                  {/* Left Column: Number Node connected to vertical spine */}
                  <div className={styles.stepNumCol}>
                    <div className={styles.stepNumNode}>
                      <span className={styles.nodeHalo} />
                      <span className={styles.nodeNumber}>{step.step}</span>
                    </div>
                  </div>

                  {/* Right Column: Rich Card Content */}
                  <div className={styles.stepContentCol}>
                    <div className={styles.stepCardHeader}>
                      <span className={styles.stepPhasePill}>{step.phase}</span>
                      <span className={styles.stepDurationBadge}>{step.duration}</span>
                    </div>

                    <h3 className={styles.stepTitle}>
                      {step.title.replace(/^Step \d+:\s*/, '')}
                    </h3>

                    <p className={styles.stepDesc}>{step.desc}</p>

                    {step.highlights && (
                      <div className={styles.stepHighlightsRow}>
                        {step.highlights.map((hl) => (
                          <span key={hl} className={styles.stepHighlightChip}>
                            <span className={styles.chipDot} /> {hl}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Deliverable Capsule */}
                    <div className={styles.stepDeliverableCapsule}>
                      <div className={styles.deliverableIconBox}>💎</div>
                      <div className={styles.deliverableTextBox}>
                        <span className={styles.deliverableLabel}>VERIFIED DELIVERABLE</span>
                        <strong className={styles.deliverableValue}>{step.deliverable}</strong>
                      </div>
                      <span className={styles.deliverableCheck}>✓</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="#enquiry-section"
              label="Launch Your LinkedIn 5-Step Sprint"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7: WHY CHOOSE MARKETING COPILOT?
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
              Marketing Copilot focuses on business goals, targeted campaigns, and performance tracking to help businesses improve their LinkedIn marketing efforts.
            </p>
          </ScrollReveal>

          {/* Symmetrical Bento Grid: 1 Hero Pillar + 4 Sub-Pillars = 5 Items */}
          <div className={styles.whyBentoGrid}>
            <ScrollReveal className={styles.heroRevealWrapper}>
              <div className={styles.whyCardHero}>
                <div className={styles.whyHeroContent}>
                  <div className={styles.whyHeroHeader}>
                    <span className={styles.whyCardHeroStep}>{heroWhyPillar.step}</span>
                    <span className={styles.whyHeroPriorityTag}>Strategic North Star</span>
                  </div>
                  <h3 className={styles.whyCardHeroTitle}>{heroWhyPillar.title}</h3>
                  <p className={styles.whyCardHeroDesc}>{heroWhyPillar.desc}</p>
                  <div className={styles.whyHeroHighlights}>
                    <span className={styles.highlightPill}>✓ Commercial ROI Focus</span>
                    <span className={styles.highlightPill}>✓ Zero Vanity Metrics</span>
                    <span className={styles.highlightPill}>✓ Verified Pipeline Velocity</span>
                  </div>
                </div>

                <div className={styles.whyHeroDeck}>
                  <div className={styles.whyHeroDeckItem}>
                    <span className={styles.whyHeroDeckIcon}>🎯</span>
                    <div>
                      <strong>Pipeline Over Impressions</strong>
                      <span>Every rupee spent is mapped to business revenue</span>
                    </div>
                  </div>
                  <div className={styles.whyHeroDeckItem}>
                    <span className={styles.whyHeroDeckIcon}>⚡</span>
                    <div>
                      <strong>Sales Qualified Opportunities</strong>
                      <span>Connecting directly with ICP decision-makers</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {subWhyPillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.step} delay={idx * 0.08} className={styles.whyCardWrapper}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardHeader}>
                    <div className={styles.whyStep}>{pillar.step}</div>
                    <span className={styles.whyPillarTag}>{pillar.tag}</span>
                    <div className={styles.whyCardIcon}>{pillar.icon}</div>
                  </div>
                  <h3 className={styles.whyTitle}>{pillar.title}</h3>
                  <p className={styles.whyDesc}>{pillar.desc}</p>
                  <div className={styles.whyHighlightBadge}>
                    <span>✓</span> {pillar.highlight}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.sectionCtaRow}>
            <BeamButton
              href="#enquiry-section"
              label="Work With B2B LinkedIn Specialists"
              size="lg"
            />
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
              Everything you need to know about LinkedIn marketing services, ad budgets, Sales Navigator, and measuring B2B performance.
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

          <div className={styles.faqCtaBox}>
            <p className={styles.faqCtaNote}>Still have unanswered questions regarding LinkedIn B2B acquisition?</p>
            <BeamButton
              href="#enquiry-section"
              label="Consult Our LinkedIn B2B Strategist"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9: READY TO TURN LINKEDIN INTO A B2B GROWTH CHANNEL?
          (Enquiry Form & Verified Business Contact Details)
         ══════════════════════════════════════════════════ */}
      <section className={styles.enquirySectionWrapper} id="enquiry-section">
        <div className="container">
          <ScrollReveal className={styles.enquiryHeaderCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Direct Commercial Access</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Ready to Turn LinkedIn Into a{' '}
              <span className="accent-gradient">B2B Growth Channel?</span>
            </h2>
            <p className={styles.sectionDesc}>
              Briefly invite businesses to discuss their audience, lead-generation objectives, and marketing budget with our team to create a targeted LinkedIn strategy that accelerates your sales pipeline.
            </p>
          </ScrollReveal>

          <div className={styles.enquiryGrid}>
            {/* Left Column: Verified Business Contact Details */}
            <ScrollReveal delay={0.05}>
              <div className={styles.contactInfoCard}>
                <div>
                  <div className={styles.contactCardTop}>
                    <div className={styles.verifiedPill}>
                      <span>✓</span>
                      <span>Verified Business Details</span>
                    </div>
                    <h3 className={styles.contactCardHeading}>
                      Talk to Our LinkedIn Team
                    </h3>
                    <p className={styles.contactCardSub}>
                      Connect directly with our senior B2B strategists. We answer inquiries within 4 business hours.
                    </p>
                  </div>

                  <div className={styles.contactDetailsList}>
                    {/* Phone */}
                    <div className={styles.contactItemRow}>
                      <span className={styles.contactItemIcon}>📞</span>
                      <div className={styles.contactItemContent}>
                        <span className={styles.contactItemLabel}>Direct Phone &amp; Strategy Line</span>
                        <a href="tel:+918280788689" className={styles.contactItemLink}>
                          +91 82807 88689
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className={styles.contactItemRow}>
                      <span className={styles.contactItemIcon}>✉️</span>
                      <div className={styles.contactItemContent}>
                        <span className={styles.contactItemLabel}>Official Email</span>
                        <a href="mailto:info@marketingcopilot.in" className={styles.contactItemLink}>
                          info@marketingcopilot.in
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className={styles.contactItemRow}>
                      <span className={styles.contactItemIcon}>💬</span>
                      <div className={styles.contactItemContent}>
                        <span className={styles.contactItemLabel}>WhatsApp Quick Connect</span>
                        <a
                          href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20LinkedIn%20Marketing%20Services%20for%20my%20business."
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contactItemLink}
                        >
                          Chat on WhatsApp (+91 82807 88689)
                        </a>
                      </div>
                    </div>

                    {/* Office Address */}
                    <div className={styles.contactItemRow}>
                      <span className={styles.contactItemIcon}>📍</span>
                      <div className={styles.contactItemContent}>
                        <span className={styles.contactItemLabel}>Office Headquarters</span>
                        <span className={styles.contactItemText}>
                          Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.contactAssuranceNote}>
                  <span>🔒</span>
                  <span>Confidentiality guaranteed. Zero spam or cold pitches.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Simple Enquiry Form */}
            <ScrollReveal delay={0.1}>
              <div className={styles.enquiryFormCard}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formHeaderTitle}>
                    Get Your LinkedIn Marketing Plan
                  </h3>
                  <p className={styles.formHeaderSub}>
                    Fill in your details below and our team will analyze your target market and send a customized proposal.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className={styles.formSuccessAlert}>
                    <strong>✓ Your Plan Request Has Been Received!</strong>
                    <p>
                      Thank you for contacting Marketing Copilot. Our B2B growth strategists will review your business profile and reach out via phone/WhatsApp within 4 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className={styles.formGrid}>
                    <div className={styles.formTwoCol}>
                      <div className={styles.formFieldGroup}>
                        <label className={styles.formFieldLabel}>
                          Your Name <span className={styles.formRequiredStar}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={styles.formFieldInput}
                        />
                      </div>

                      <div className={styles.formFieldGroup}>
                        <label className={styles.formFieldLabel}>
                          Work Email <span className={styles.formRequiredStar}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={styles.formFieldInput}
                        />
                      </div>
                    </div>

                    <div className={styles.formTwoCol}>
                      <div className={styles.formFieldGroup}>
                        <label className={styles.formFieldLabel}>
                          Phone / WhatsApp <span className={styles.formRequiredStar}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={styles.formFieldInput}
                        />
                      </div>

                      <div className={styles.formFieldGroup}>
                        <label className={styles.formFieldLabel}>
                          Company / Website
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Acme SaaS / acme.com"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className={styles.formFieldInput}
                        />
                      </div>
                    </div>

                    <div className={styles.formFieldGroup}>
                      <label className={styles.formFieldLabel}>
                        Target Audience, Goals &amp; Monthly Budget
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your target customer roles, key objectives (e.g. Sales Navigator prospecting, LinkedIn Ads, or brand authority), and estimated budget."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={styles.formFieldTextarea}
                      />
                    </div>

                    {errorMessage && (
                      <div className={styles.formErrorAlert}>
                        ⚠️ {errorMessage}
                      </div>
                    )}

                    <div className={styles.formSubmitBtnWrapper}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.formSubmitButton}
                      >
                        {isSubmitting ? 'Submitting Your Request...' : 'Get Your LinkedIn Marketing Plan →'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
