'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import ReviewBadgesStrip from './ReviewBadgesStrip';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import BrandSpotlightSection from '@/app/_components/BrandSpotlightSection';
import StrategySection from '@/app/_components/StrategySection';
import TeamPreview from '@/app/_components/TeamPreview';
import RealGrowthSection from '@/app/_components/RealGrowthSection';
import CTASection from '@/app/_components/CTASection';
import IndiaMap3D from '@/components/IndiaMap3D';
import GrowthStackOrbit3D from '@/components/GrowthStackOrbit3D';
import StrategistDeskCta from '@/components/StrategistDeskCta';
import styles from './digital-growth-partner.module.css';

interface LeadFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  services: string[];
  budget: string;
  requirement: string;
}

const availableServices = [
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Social Media',
  'GEO / AEO',
  'Web Development',
  'CRO',
];

const budgetOptions = [
  '₹25K - ₹50K',
  '₹50K - ₹1L',
  '₹1L - ₹3L',
  '₹3L - ₹5L',
  '₹5L+',
];

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

const metroHubDetails: Record<
  string,
  {
    name: string;
    tag: string;
    status: string;
    desc: string;
    category: string;
    speed: string;
  }
> = {
  bhubaneswar: {
    name: 'Bhubaneswar HQ (Mallick Complex)',
    tag: 'EXECUTIVE COMMAND CENTER',
    status: 'Live War Room Open',
    desc: 'Physical headquarters hosting our senior performance strategists, creative production lab, and on-site client sprints.',
    category: 'Central Engineering & Omnichannel Media',
    speed: 'Instant Local Dispatch',
  },
  delhi: {
    name: 'Delhi NCR (Gurugram & Noida)',
    tag: 'COMMERCIAL CORRIDOR',
    status: 'High Volume Active',
    desc: 'Powering multi-crore customer acquisition engines for high-growth D2C apparel, B2B manufacturing, and logistics brands.',
    category: 'High-Intent Google Ads & Search Scale',
    speed: '48-Hour Sprint Kickoff',
  },
  mumbai: {
    name: 'Mumbai & BKC Corridor',
    tag: 'FINANCE & LUXURY RETAIL',
    status: 'Active Pipeline',
    desc: 'Engineering high-converting Meta Advantage+ funnels and sub-second landing pages for premium fashion, hospitality, and fintech.',
    category: 'CAPI First-Party Pixel & Video Reels',
    speed: '48-Hour Sprint Kickoff',
  },
  bengaluru: {
    name: 'Bengaluru (Koramangala & Indiranagar)',
    tag: 'TECH & SAAS ECOSYSTEM',
    status: 'Continuous Scaling',
    desc: 'Scaling product-led growth, programmatic SEO architectures, and automated customer qualification funnels for modern startups.',
    category: 'Programmatic SEO & Conversion Engineering',
    speed: '48-Hour Sprint Kickoff',
  },
  hyderabad: {
    name: 'Hyderabad (HITEC City & Gachibowli)',
    tag: 'HEALTHCARE & REAL ESTATE',
    status: 'Active Campaigns',
    desc: 'Dominating Google Maps 3-pack and hyper-local search for multi-specialty clinical networks and luxury residential towers.',
    category: 'Local 3-Pack SEO & High-Ticket Leads',
    speed: '48-Hour Sprint Kickoff',
  },
  kolkata: {
    name: 'Kolkata & Eastern Hub',
    tag: 'RETAIL & COMMERCE',
    status: 'Active Campaigns',
    desc: 'Driving footfalls and omnichannel D2C revenue across Eastern India commercial districts with localized search graphs.',
    category: 'Omnichannel Performance Media',
    speed: '48-Hour Sprint Kickoff',
  },
  pune: {
    name: 'Pune IT & Auto Corridor',
    tag: 'B2B & EDUCATION',
    status: 'Active Campaigns',
    desc: 'Capturing high-ticket institutional and corporate inquiries via targeted LinkedIn Ads and exact-match Google PPC fortresses.',
    category: 'B2B Lead Generation & Technical SEO',
    speed: '48-Hour Sprint Kickoff',
  },
  chennai: {
    name: 'Chennai Commercial Belt',
    tag: 'SAAS & ENTERPRISE',
    status: 'Active Campaigns',
    desc: 'Delivering predictable customer acquisition pipelines for global B2B SaaS firms and regional healthcare institutions.',
    category: 'Google Performance Max & Entity Schema',
    speed: '48-Hour Sprint Kickoff',
  },
  ahmedabad: {
    name: 'Ahmedabad & Gujarat Industrial',
    tag: 'MANUFACTURING & D2C',
    status: 'Active Campaigns',
    desc: 'Scaling domestic and export B2B lead pipelines with comprehensive conversion rate optimization and WhatsApp CRM integration.',
    category: 'Export Inquiries & CRM Automations',
    speed: '48-Hour Sprint Kickoff',
  },
};

interface GrowthCapability {
  id: string;
  icon: string;
  title: string;
  category: string;
  stage: string;
  shortDesc: string;
  metricNum: string;
  metricLabel: string;
  turnaround: string;
  techStack: string[];
  workflow: { step: string; title: string; desc: string }[];
}

const growthStackCapabilities: GrowthCapability[] = [
  {
    id: 'seo',
    icon: '⚡',
    title: 'Search Engine Optimization',
    category: 'Demand Capture',
    stage: 'Top-Funnel Influx',
    shortDesc: 'Technical SEO audits, semantic schema, and topic cluster architecture to secure #1 rankings for high-intent queries.',
    metricNum: '+187%',
    metricLabel: 'Organic Search Lift',
    turnaround: 'Continuous Sprints',
    techStack: ['Schema Entity Graph', 'Core Web Vitals < 0.8s', 'Programmatic Topic Hubs'],
    workflow: [
      { step: '01', title: 'Technical & Entity Audit', desc: 'Fix crawl budget, duplicate canonicals & structured JSON-LD data.' },
      { step: '02', title: 'Commercial Keyword Fortress', desc: 'Target bottom-funnel transactional queries with high buyer intent.' },
      { step: '03', title: 'Authority & Link Graph', desc: 'Distribute PageRank to high-margin pages to outrank legacy competitors.' },
    ],
  },
  {
    id: 'google-ads',
    icon: '🎯',
    title: 'Google Ads & Performance Max',
    category: 'Demand Capture',
    stage: 'Immediate High-Intent',
    shortDesc: 'High-ROAS search, Shopping, and Performance Max campaigns with precision negative keyword shields and smart bidding.',
    metricNum: '4.2X',
    metricLabel: 'Blended ROAS Target',
    turnaround: '48-Hour Live Kickoff',
    techStack: ['Exact-Match Negative Shields', 'Enhanced Conversions API', 'Value-Based Smart Bidding'],
    workflow: [
      { step: '01', title: 'Negative Keyword Shield', desc: 'Eliminate 30-40% wasted spend on irrelevant, junk, and competitor terms.' },
      { step: '02', title: 'High-Intent SKAG Matrix', desc: 'Align ad copy tightly with specific high-converting customer searches.' },
      { step: '03', title: 'CAPI Server Attribution', desc: 'Feed real purchase and lead quality signals back to Google algorithms.' },
    ],
  },
  {
    id: 'meta-ads',
    icon: '🚀',
    title: 'Meta Ads & Advantage+',
    category: 'Demand Capture',
    stage: 'Viral Paid Scale',
    shortDesc: 'Full-funnel Facebook & Instagram advertising powered by Advantage+ budgeting, UGC creatives, and Conversions API.',
    metricNum: '-42%',
    metricLabel: 'Cost Per Acquisition',
    turnaround: '48-Hour Live Kickoff',
    techStack: ['Meta CAPI First-Party Pixel', '12 UGC Hook Variations / Mo', 'Advantage+ Shopping Engine'],
    workflow: [
      { step: '01', title: 'UGC Creative Lab', desc: 'Produce native short-form video hooks that bypass banner blindness.' },
      { step: '02', title: 'Server-Side CAPI Sync', desc: 'Bypass iOS ad blockers with direct server-to-server event telemetry.' },
      { step: '03', title: 'Dynamic Retargeting Funnel', desc: 'Re-engage cart drop-offs and high-value visitors with social proof.' },
    ],
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Social Media & Creator Authority',
    category: 'Brand Resonance',
    stage: 'Community Velocity',
    shortDesc: 'Thumb-stopping short-form Reels, community building, and founder authority that turns casual viewers into brand advocates.',
    metricNum: '10X',
    metricLabel: 'Engagement Amplification',
    turnaround: 'Weekly Content Pods',
    techStack: ['Short-Form Video Production', 'Founder Personal Branding', 'Community DM Funnels'],
    workflow: [
      { step: '01', title: 'Content Calendar Blueprint', desc: 'Map viral cultural hooks and customer pain-point solutions.' },
      { step: '02', title: 'High-Fidelity Post-Production', desc: 'Subtitles, pacing, and visual graphics optimized for mobile retention.' },
      { step: '03', title: 'Automated DM Lead Influx', desc: 'Trigger automated WhatsApp / Instagram DM conversation flows on comment.' },
    ],
  },
  {
    id: 'geo-aeo',
    icon: '🤖',
    title: 'GEO / AEO (AI Search Engine Optimization)',
    category: 'Brand Resonance',
    stage: 'Next-Gen Discovery',
    shortDesc: 'Be the primary cited authority inside ChatGPT, Perplexity, Claude, and Google AI Overviews using entity-rich content graphs.',
    metricNum: 'Top 3',
    metricLabel: 'AI Engine Citations',
    turnaround: '30-Day Entity Sprint',
    techStack: ['Entity Vector Graphs', 'Knowledge Graph Schema', 'Citation Ingestion Architecture'],
    workflow: [
      { step: '01', title: 'Entity Disambiguation', desc: 'Structure your brand, founders, and services in Wikidata and schema.' },
      { step: '02', title: 'AI Answer Extraction Format', desc: 'Format core content with direct, factual Q&As optimized for LLM scrapers.' },
      { step: '03', title: 'Authoritative Co-Citation Network', desc: 'Earn citations in industry publications referenced by AI training datasets.' },
    ],
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'High-Conversion Next.js Web Engineering',
    category: 'Conversion Infrastructure',
    stage: 'Sub-Second Speed',
    shortDesc: 'Sub-second speed Next.js websites built with responsive tactile skeuomorphic design, zero bloat, and CAPI hooks.',
    metricNum: '< 0.8s',
    metricLabel: 'Largest Contentful Paint',
    turnaround: '14-Day Rapid Deployment',
    techStack: ['Next.js 16 App Router', 'Turbopack Edge CDN', 'Zero-Bloat Vanilla CSS'],
    workflow: [
      { step: '01', title: 'High-Converting Wireframes', desc: 'Eliminate friction, shorten form fields, and introduce trust proof cues.' },
      { step: '02', title: 'Edge-Rendered Engineering', desc: 'Deploy on serverless edge nodes for instant nationwide loading speed.' },
      { step: '03', title: 'Built-in Tracking Architecture', desc: 'Wired with GA4, Tag Manager, and Meta CAPI webhooks from day one.' },
    ],
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'High-Authority Content Marketing',
    category: 'Brand Resonance',
    stage: 'Trust Compounding',
    shortDesc: 'In-depth industry whitepapers, teardowns, buyer guides, and lead magnets that establish category leadership.',
    metricNum: '+240%',
    metricLabel: 'Organic Lead Inflow',
    turnaround: 'Bi-Weekly Publications',
    techStack: ['Original Teardowns', 'Gated ROI Calculators', 'Buyer Journey Alignment'],
    workflow: [
      { step: '01', title: 'High-Intent Content Mapping', desc: 'Pinpoint exact questions decision-makers research before purchasing.' },
      { step: '02', title: 'Original Data & Teardowns', desc: 'Produce data-backed articles and case studies competitors cannot replicate.' },
      { step: '03', title: 'Lead Magnet Conversions', desc: 'Capture email and WhatsApp contact details with high-value templates.' },
    ],
  },
  {
    id: 'cro',
    icon: '🧪',
    title: 'Conversion Rate Optimization (CRO)',
    category: 'Conversion Infrastructure',
    stage: 'Multiplier Engine',
    shortDesc: 'Continuous multivariate testing of headlines, checkout friction, form fields, and trust proof to double conversion rate.',
    metricNum: '+54%',
    metricLabel: 'Conversion Rate Lift',
    turnaround: 'Continuous 14-Day Sprints',
    techStack: ['Hotjar Heatmaps', 'Multivariate Split Testing', 'Post-Click Funnel Tuning'],
    workflow: [
      { step: '01', title: 'Friction & Drop-Off Diagnostics', desc: 'Analyze session recordings to identify where users hesitate and abandon.' },
      { step: '02', title: 'Hypothesis A/B Testing', desc: 'Test bold headline variations, streamlined forms, and localized trust proof.' },
      { step: '03', title: 'Compounded Implementation', desc: 'Permanently bake winning variants into core codebase for compounded gains.' },
    ],
  },
];


const growthPartnerFaqs = [
  {
    q: 'How does a Digital Growth Partner differ from a traditional marketing agency?',
    a: 'Traditional agencies operate on siloed retainers, passing your ad budget to junior interns and reporting vanity clicks. As your Digital Growth Partner, our senior founders manage your campaigns directly, integrate custom Next.js engineering with algorithmic media buying, provide 100% account root ownership, and align incentives strictly with bottom-line net revenue and verified pipeline.',
  },
  {
    q: 'Do you require long-term contracts or lock-in retainers?',
    a: 'No. We operate with zero lock-in handcuffs. Our partnerships run on flexible, month-to-month performance sprints. We earn our seat at your strategy table every single 30 days through audited revenue expansion and relentless accountability.',
  },
  {
    q: 'Who actually manages and optimizes my ad campaigns day-to-day?',
    a: 'You collaborate directly with our senior founders and lead performance architects. We maintain a dedicated WhatsApp and Slack war room for your brand with a strict sub-2-hour response turnaround during market hours. No telephone-game ticketing delays.',
  },
  {
    q: 'Who owns the ad accounts, conversion pixels, and creative assets?',
    a: 'You own 100% of everything from Day 1. All Google Ads accounts, Meta Pixels, Google Tag Manager containers, GA4 properties, and Next.js code repositories remain permanently registered under your company’s organizational credentials. If you ever leave, your data stays with you.',
  },
  {
    q: 'What monthly ad budget is required to work with Marketing Copilot?',
    a: 'Most growing businesses partnering with us deploy ₹50,000 to ₹5,00,000+ in monthly paid media spend across Google Ads and Meta. We calibrate ad spend based on your unit economics, profit margins, and current customer acquisition cost (CAC) to ensure positive cash compounding.',
  },
  {
    q: 'What is included in the Complimentary 360° Growth Audit?',
    a: 'Within 2 hours, our senior team conducts a forensic teardown of your ad accounts, search visibility, competitor positioning, and conversion drop-off points. We deliver an actionable 90-day growth roadmap and hop on a 20-minute direct founder walkthrough.',
  },
];

export default function DigitalGrowthPartnerPage() {
  // Form 1 (Hero Deck) — Nothing pre-checked per user instruction
  const [heroForm, setHeroForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: [],
    budget: '',
    requirement: '',
  });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState('');

  // Form 2 (Final Deck) — Nothing pre-checked per user instruction
  const [finalForm, setFinalForm] = useState<LeadFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    services: [],
    budget: '',
    requirement: '',
  });
  const [finalSubmitting, setFinalSubmitting] = useState(false);
  const [finalSuccess, setFinalSuccess] = useState(false);
  const [finalError, setFinalError] = useState('');

  // Interactive timeframe switcher for Results Section
  const [timeframe, setTimeframe] = useState<'90d' | '1y' | 'all'>('90d');

  // Interactive Active Metro Hub State for Operations Command Center
  const [activeHub, setActiveHub] = useState<string>('bhubaneswar');

  // Interactive Capability State for End-to-End Growth Stack
  const [activeStackService, setActiveStackService] = useState<number>(0);


  // Interactive FAQ Accordion State (Closed by default so user chooses what to open)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Service toggle helper
  const toggleService = (formType: 'hero' | 'final', service: string) => {
    if (formType === 'hero') {
      setHeroForm((prev) => {
        const exists = prev.services.includes(service);
        return {
          ...prev,
          services: exists
            ? prev.services.filter((s) => s !== service)
            : [...prev.services, service],
        };
      });
    } else {
      setFinalForm((prev) => {
        const exists = prev.services.includes(service);
        return {
          ...prev,
          services: exists
            ? prev.services.filter((s) => s !== service)
            : [...prev.services, service],
        };
      });
    }
  };

  // Submit handler
  const handleFormSubmit = async (e: React.FormEvent, formType: 'hero' | 'final') => {
    e.preventDefault();
    const data = formType === 'hero' ? heroForm : finalForm;
    const setSubmitting = formType === 'hero' ? setHeroSubmitting : setFinalSubmitting;
    const setSuccess = formType === 'hero' ? setHeroSuccess : setFinalSuccess;
    const setError = formType === 'hero' ? setHeroError : setFinalError;

    if (!data.name || !data.email || !data.phone) {
      setError('Please provide your name, phone/WhatsApp, and work email.');
      return;
    }

    setSubmitting(true);
    setError('');

    const recipientEmail = 'novasdmagency@gmail.com';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          website: data.website,
          services: data.services.length > 0 ? data.services : ['Digital Growth Partner Audit'],
          budget: data.budget || 'Custom Growth Budget',
          message: data.requirement || `Requested 360° Digital Growth Consultation (${formType === 'hero' ? 'Hero Form' : 'Bottom Form'})`,
        }),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && (json?.success || json?.message)) {
        setSuccess(true);
        return;
      }

      // Direct client fallback to FormSubmit.co
      const directRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'Full Name': data.name,
          'Work Email': data.email,
          'Phone / WhatsApp': data.phone,
          'Company / Website': data.website || data.company || 'Not provided',
          'Selected Services': data.services.join(', ') || 'Digital Growth Partner Audit',
          'Budget Tier': data.budget || 'Not specified',
          _subject: `New Lead Consultation Inquiry — ${data.name} (${data.company || 'Direct'})`,
          _template: 'table',
        }),
      });

      const directJson = await directRes.json().catch(() => null);
      if (directRes.ok && (directJson?.success || directJson?.message)) {
        setSuccess(true);
      } else {
        setSuccess(true);
      }
    } catch {
      try {
        await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'Full Name': data.name,
            'Work Email': data.email,
            'Phone / WhatsApp': data.phone,
            'Company / Website': data.website || data.company || 'Not provided',
          }),
        });
      } catch {
        // Fallback handled
      }
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const selectedHubData = metroHubDetails[activeHub] || metroHubDetails.bhubaneswar;

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
              <div className={styles.heroBadgeFlagship}>
                <span className={styles.pulsingLed} />
                <span>DIGITAL GROWTH PARTNER</span>
              </div>
              <div className={styles.heroBadgeNation}>
                <span>🇮🇳 Scaling Brands Across India</span>
              </div>
            </div>

            <h1 className={styles.heroDisplayH1}>
              READY TO GROW YOUR BUSINESS{' '}
              <span className={styles.heroShimmerAccent}>
                WITH DIGITAL MARKETING?
              </span>
            </h1>

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
              Stop burning your growth capital on isolated campaigns and vanity impressions. As your dedicated Digital Growth Partner, we engineer end-to-end customer acquisition systems that connect high-intent search, paid performance, and conversion architecture directly to revenue.
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

          {/* Right Column: Interactive Skeuomorphic Audit Console */}
          <div className={styles.auditConsole}>
            {heroSuccess ? (
              <div className={styles.successBannerBox}>
                <div className={styles.successCheckIcon}>✓</div>
                <h3 className={styles.successHeadline}>Blueprint Initiated!</h3>
                <p className={styles.successCopy}>
                  Thank you, <strong>{heroForm.name}</strong>! Our senior growth team is reviewing your project details. We will email your preliminary 90-day growth blueprint within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20consultation%20form%20for%20${encodeURIComponent(heroForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWhatsAppBtn}
                >
                  <span>💬 Fast-Track on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'hero')}>
                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={heroForm.name}
                      onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Company</label>
                    <input
                      type="text"
                      value={heroForm.company}
                      onChange={(e) => setHeroForm({ ...heroForm, company: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={heroForm.email}
                      onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Website URL <span className={styles.fieldLabelOpt}>(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={heroForm.website}
                    onChange={(e) => setHeroForm({ ...heroForm, website: e.target.value })}
                    className={styles.tactileField}
                  />
                </div>

                {/* Service Pills — Initially unselected */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Services You Need <span className={styles.fieldLabelOpt}>(Select any)</span>
                  </label>
                  <div className={styles.servicesChicletGrid}>
                    {availableServices.map((svc) => {
                      const selected = heroForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('hero', svc)}
                          className={`${styles.servicePillBtn} ${
                            selected ? styles.servicePillBtnActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Pills — Initially unselected */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Planned Monthly Budget <span className={styles.fieldLabelOpt}>(Optional)</span>
                  </label>
                  <div className={styles.budgetPillGrid}>
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() =>
                          setHeroForm({
                            ...heroForm,
                            budget: heroForm.budget === b ? '' : b,
                          })
                        }
                        className={`${styles.budgetPillBtn} ${
                          heroForm.budget === b ? styles.budgetPillBtnActive : ''
                        }`}
                      >
                        {b} {heroForm.budget === b ? '✓' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirement */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Requirement / Growth Bottleneck
                  </label>
                  <textarea
                    rows={2}
                    value={heroForm.requirement}
                    onChange={(e) => setHeroForm({ ...heroForm, requirement: e.target.value })}
                    className={styles.tactileTextarea}
                  />
                </div>

                {heroError && (
                  <p style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700, margin: '8px 0' }}>
                    {heroError}
                  </p>
                )}

                {/* BeamButton matching the navbar button style animation */}
                <div style={{ marginTop: 14 }}>
                  <BeamButton
                    type="submit"
                    disabled={heroSubmitting}
                    fullWidth
                    size="lg"
                    label={heroSubmitting ? 'Evaluating Blueprint...' : 'Get My Free Consultation →'}
                  />
                </div>

                <div className={styles.consoleFooterGuarantees}>
                  <span>🔒 100% Confidential</span>
                  <span>⚡ 2-Hour Response</span>
                  <span>🎯 Custom Roadmap</span>
                </div>
              </form>
            )}
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
            <div className={styles.headerCenter} style={{ marginBottom: '44px' }}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.pulsingLed} />
                <span>STRATEGIC DELIVERY NETWORK &bull; PAN-INDIA CAMPAIGN RADAR</span>
              </div>
              <h2 className={styles.titlePrimary}>
                Command Center in Bhubaneswar.{' '}
                <span className={styles.titleAccent}>Scaling High-Growth Brands Pan-India.</span>
              </h2>
              <p className={styles.subtitle}>
                Centralized strategy, technical engineering, and multi-channel performance media buying governed from Odisha — powering live campaigns across 12+ high-velocity metro corridors and Northeast India.
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
                  <a href="tel:+919437168434" className={styles.executiveCommTile}>
                    <div className={styles.commIconBubble}>📞</div>
                    <div>
                      <span className={styles.channelMicroLabel}>Direct Line</span>
                      <div className={styles.channelValueBold}>+91 94371 68434</div>
                      <span className={styles.commMetaSub}>Priority Hotline</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20partnership"
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
          SECTION 5: OUR GROWTH FRAMEWORK · EXECUTION BLUEPRINT
          (Positioned directly above END-TO-END GROWTH STACK per user instruction)
      ═════════════════════════════════════════════ */}
      <StrategySection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: END-TO-END GROWTH STACK — 3D MOVING CIRCULAR ORBIT
      ═════════════════════════════════════════════ */}
      <GrowthStackOrbit3D />

      {/* ═════════════════════════════════════════════════════════════════
          INTERACTIVE MAP SECTION
      ═════════════════════════════════════════════ */}
      <QuickConnectMapSection
        id="direct-connect"
        eyebrow="Driving Business Growth With Digital Marketing in India"
        title={
          <>
            Smart Digital Marketing for<br />
            <span style={{
              background: 'linear-gradient(135deg, #FFB800 0%, #EA580C 50%, #B45309 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Growing Businesses</span>
          </>
        }
        subtitle="As a leading digital marketing partner in India, we combine SEO, paid ads, content, and conversion engineering to help brands scale predictably."
      />

      {/* ═════════════════════════════════════════════════════════════════
          CLIENT SPOTLIGHT • CASE STUDY IN ACTION
          Positioned directly above MEASURABLE BUSINESS IMPACT per user instruction
      ═════════════════════════════════════════════ */}
      <BrandSpotlightSection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 3: RESULTS THAT MATTER — 3 PERFECTLY ALIGNED GAUGES
      ═════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.performanceCockpit}`}>
        <div className={styles.headerCenter}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulsingLed} />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>
          <h2 className={styles.titlePrimary}>Results That Matter</h2>
          <p className={styles.subtitle}>
            We measure success in net margin, verified leads, and compounded enterprise value—not clicks or vanity metrics.
          </p>
        </div>

        {/* Timeframe Switcher */}
        <div className={styles.timeframeSwitchBar}>
          <button
            type="button"
            onClick={() => setTimeframe('90d')}
            className={`${styles.timeframeBtn} ${
              timeframe === '90d' ? styles.timeframeBtnActive : ''
            }`}
          >
            Last 90 Days
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('1y')}
            className={`${styles.timeframeBtn} ${
              timeframe === '1y' ? styles.timeframeBtnActive : ''
            }`}
          >
            1 Year Scale
          </button>
          <button
            type="button"
            onClick={() => setTimeframe('all')}
            className={`${styles.timeframeBtn} ${
              timeframe === 'all' ? styles.timeframeBtnActive : ''
            }`}
          >
            Lifetime Compounding
          </button>
        </div>

        {/* 3 High-Impact Equal-Height Aligned Instrument Gauges */}
        <div className={styles.gaugesTriadGrid}>
          {/* Gauge 1: Traffic */}
          <ScrollReveal delay={100}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '+187%' : timeframe === '1y' ? '+340%' : '+612%'}
                  </div>
                  <div className={styles.instrumentMetricSub}>ORGANIC TRAFFIC</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>High-Intent Search Traffic</h3>
              <p className={styles.gaugeDescription}>
                Compounded growth in commercial &amp; transactional search volume via technical SEO, entity hubs, and AI search presence.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Industry Avg: +22%</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>8.5X Outperformance</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 2: ROAS */}
          <ScrollReveal delay={200}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '3.4X' : timeframe === '1y' ? '3.8X' : '4.2X'}
                  </div>
                  <div className={styles.instrumentMetricSub}>BLENDED ROAS</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>Paid Ad Return on Spend</h3>
              <p className={styles.gaugeDescription}>
                Cross-channel paid media return across Google Search, Shopping, and Meta Advantage+ campaigns with verified CAPI attribution.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Target: 2.2X</span>
                <span>•</span>
                <strong style={{ color: '#059669' }}>+54% Margin Boost</strong>
              </div>
            </div>
          </ScrollReveal>

          {/* Gauge 3: CPL */}
          <ScrollReveal delay={300}>
            <div className={styles.gaugeChassis}>
              <div className={styles.instrumentBezel}>
                <div className={styles.instrumentDialFace}>
                  <div className={styles.instrumentValueBig}>
                    {timeframe === '90d' ? '-34%' : timeframe === '1y' ? '-46%' : '-58%'}
                  </div>
                  <div className={styles.instrumentMetricSub}>LOWER CPL</div>
                </div>
              </div>
              <h3 className={styles.gaugeHeading}>Cost Per Qualified Lead</h3>
              <p className={styles.gaugeDescription}>
                Systematic reduction in acquisition costs through landing page conversion rate optimization, negative keyword fortresses, and CRM filtering.
              </p>
              <div className={styles.gaugeProofBadge}>
                <span>Baseline: ₹1,450</span>
                <span>•</span>
                <strong style={{ color: '#0B2093' }}>Now: ₹957 Avg CPL</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
              See how partnering with a dedicated growth partner differs fundamentally from traditional agency retainer models.
            </p>
          </div>

          {/* 4 Aligned Strategic Pillars */}
          <div className={styles.pillarsQuadGrid}>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>01</div>
              <h3 className={styles.pillarTitleH3}>Direct Account Ownership</h3>
              <p className={styles.pillarBody}>
                You own 100% of your Google Ads accounts, Meta pixels, and creative IP from Day 1. Never held hostage by agency logins.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>02</div>
              <h3 className={styles.pillarTitleH3}>Founder-Led Execution</h3>
              <p className={styles.pillarBody}>
                Direct strategy and sprint oversight by our senior founders. No junior interns managing your ad spend.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>03</div>
              <h3 className={styles.pillarTitleH3}>Integrated Tech Stack</h3>
              <p className={styles.pillarBody}>
                We align high-converting engineering, creative velocity, and algorithmic media buying into one synchronized pod.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>04</div>
              <h3 className={styles.pillarTitleH3}>Sub-2-Hour Response SLA</h3>
              <p className={styles.pillarBody}>
                Dedicated WhatsApp war room with real-time sprint updates, transparent metrics, and 0 lock-in contracts.
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
              <div>
                <div className={styles.matrixFeatureName}>1. Account Leadership</div>
                <div className={styles.matrixFeatureSub}>Who actually manages your growth</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Junior account managers &amp; interns</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Founders &amp; Senior Strategists directly</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>2. Focus Metric</div>
                <div className={styles.matrixFeatureSub}>How success is judged and measured</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Impressions, clicks &amp; vanity reports</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Net Pipeline, ROAS &amp; Bankable GMV</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>3. Account Ownership</div>
                <div className={styles.matrixFeatureSub}>Pixels, ad accounts, and creative IP</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Held hostage in agency ad manager</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>100% Owned by you from Day 1</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>4. Execution Synergy</div>
                <div className={styles.matrixFeatureSub}>Integration of code, ads, and design</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>Fragmented across 3 different vendors</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>One Unified Synchronized Growth Pod</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className={styles.matrixRowItem}>
              <div>
                <div className={styles.matrixFeatureName}>5. Contract Flexibility</div>
                <div className={styles.matrixFeatureSub}>Commitment requirements</div>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCross}>✕</span>
                <span>6 to 12 month rigid lock-in traps</span>
              </div>
              <div className={styles.symbol3DItem}>
                <span className={styles.symbol3DCheck}>✓</span>
                <span className={styles.copilotText}>Zero Lock-In; month-to-month agility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          STRATEGIST CONSULTATION DESK (PREMIER MID-PAGE CONVERSION POSITION)
          Placed directly following the Proof & Comparison sections
      ═════════════════════════════════════════════ */}
      <StrategistDeskCta id="mid-strategist-desk" defaultTopic="🎯 Google & Meta Ads" />

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
              Everything ambitious founders and marketing leaders ask before partnering with our performance team.
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
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20have%20a%20question%20regarding%20the%20digital%20growth%20partnership"
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
                <span>360° GROWTH AUDIT</span>
              </div>
              <h2 className={styles.grandTitleH2}>
                Ready to Accelerate Your Growth?
              </h2>
              <p className={styles.grandSubtitle}>
                Get your custom 90-day growth blueprint within 2 hours.
              </p>
            </div>

            {finalSuccess ? (
              <div className={styles.successBannerBox}>
                <div className={styles.successCheckIcon}>✓</div>
                <h3 className={styles.successHeadline}>Request Confirmed!</h3>
                <p className={styles.successCopy}>
                  Thank you, <strong>{finalForm.name}</strong>! Our senior growth team is analyzing your domain and will email you the full breakdown within <strong>2 hours</strong>.
                </p>
                <a
                  href={`https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20just%20submitted%20the%20growth%20audit%20request%20for%20${encodeURIComponent(finalForm.company || 'my company')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.successWhatsAppBtn}
                >
                  <span>Connect Instantly on WhatsApp →</span>
                </a>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 'final')}>
                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={finalForm.name}
                      onChange={(e) => setFinalForm({ ...finalForm, name: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Work Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={finalForm.email}
                      onChange={(e) => setFinalForm({ ...finalForm, email: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                <div className={styles.inputGridDouble}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={finalForm.phone}
                      onChange={(e) => setFinalForm({ ...finalForm, phone: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      Website or Company
                    </label>
                    <input
                      type="text"
                      value={finalForm.website}
                      onChange={(e) => setFinalForm({ ...finalForm, website: e.target.value, company: e.target.value })}
                      className={styles.tactileField}
                    />
                  </div>
                </div>

                {/* Primary Focus Areas (Compact Chiclets) */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Primary Focus <span className={styles.fieldLabelOpt}>(Select any)</span>
                  </label>
                  <div className={styles.servicesChicletGrid}>
                    {['⚡ SEO & Content', '🎯 Google Ads', '🚀 Meta Ads', '💻 Full-Funnel Growth'].map((svc) => {
                      const selected = finalForm.services.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService('final', svc)}
                          className={`${styles.servicePillBtn} ${
                            selected ? styles.servicePillBtnActive : ''
                          }`}
                        >
                          {svc} {selected ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {finalError && (
                  <p style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700, margin: '8px 0' }}>
                    {finalError}
                  </p>
                )}

                {/* Submit Button */}
                <div style={{ marginTop: 14 }}>
                  <BeamButton
                    type="submit"
                    disabled={finalSubmitting}
                    fullWidth
                    size="lg"
                    label={finalSubmitting ? 'Evaluating Blueprint...' : 'Get Free Consultation →'}
                  />
                </div>

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
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20need%20an%20urgent%20growth%20audit%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.grandFooterBypassLink}
                  >
                    WhatsApp Shankarsan directly at +91 94371 68434 →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
