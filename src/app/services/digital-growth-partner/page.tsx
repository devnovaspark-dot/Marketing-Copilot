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

interface ComparisonPoint {
  id: string;
  dimension: string;
  category: 'all' | 'ownership' | 'team' | 'speed';
  traditionalTitle: string;
  traditionalDesc: string;
  copilotTitle: string;
  copilotDesc: string;
}

const comparisonPoints: ComparisonPoint[] = [
  {
    id: 'team',
    dimension: 'Account Leadership',
    category: 'team',
    traditionalTitle: 'Junior Account Managers & Fresh Interns',
    traditionalDesc: 'Handed off to 22-year-old account managers juggling 12+ other brands simultaneously. Communication gets lost in slow support ticket queues.',
    copilotTitle: 'Founders & Lead Growth Architects Directly',
    copilotDesc: 'Direct WhatsApp and Slack war room with seasoned growth engineers and founding partners. Live strategic pivots with a sub-2-hour response SLA.',
  },
  {
    id: 'metrics',
    dimension: 'North Star Metric',
    category: 'all',
    traditionalTitle: 'Vanity Impressions & Click Reports',
    traditionalDesc: '40-page PDF decks touting impressions and clicks while your executive team is left wondering why actual net sales and cash margin remain flat.',
    copilotTitle: 'Bankable GMV Pipeline & Blended ROAS',
    copilotDesc: 'Every rupee is tracked through server-side Meta CAPI and Google Enhanced Conversions directly to your CRM. Success is judged purely on verified revenue.',
  },
  {
    id: 'ownership',
    dimension: 'Data & Asset Ownership',
    category: 'ownership',
    traditionalTitle: 'Held Hostage in Agency Ad Manager',
    traditionalDesc: 'Pixels and ad accounts configured inside proprietary agency accounts. If you leave or dispute retainers, you lose years of ad pixel training.',
    copilotTitle: '100% Root Client Admin Ownership',
    copilotDesc: 'Root super-admin ownership over all ad accounts, GA4, Meta pixels, and Next.js repositories registered in your corporate name from Day 1.',
  },
  {
    id: 'speed',
    dimension: 'Execution Synergy',
    category: 'speed',
    traditionalTitle: '3 Fractured Vendors Pointing Fingers',
    traditionalDesc: 'SEO agency blames website devs, devs take 3 weeks to change a landing page, ad buyers complain about broken tracking scripts.',
    copilotTitle: 'Unified Full-Stack Pod (Code + Creatives + Ads)',
    copilotDesc: 'Sub-second Next.js code, viral UGC video production, and algorithmic media buying operate in lockstep. New high-converting pages live within 48 hours.',
  },
  {
    id: 'contracts',
    dimension: 'Contract Agility',
    category: 'speed',
    traditionalTitle: '6 to 12-Month Lock-In Retainers',
    traditionalDesc: 'Punitive minimum spend clauses and 60 to 90-day cancellation notices legally forcing you to keep paying even when campaigns flounder.',
    copilotTitle: 'Zero Lock-In; Month-to-Month Agility',
    copilotDesc: 'Month-to-month performance sprints. We earn our seat at your strategy table every single 30 days through audited revenue expansion.',
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

  // Interactive Filter & Hover State for The Copilot Advantage
  const [activeAdvantageFilter, setActiveAdvantageFilter] = useState<'all' | 'ownership' | 'team' | 'speed'>('all');
  const [hoveredAdvantageRow, setHoveredAdvantageRow] = useState<number | null>(null);

  // Interactive FAQ Accordion State (First item open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          message: data.requirement || 'Requested 360° Digital Growth Consultation',
        }),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && (json?.success || json?.message)) {
        setSuccess(true);
      } else {
        setError(json?.message || 'Failed to submit. Please WhatsApp us directly.');
      }
    } catch {
      setError('Network error. Please WhatsApp us directly at +91 94371 68434.');
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
          <div className={styles.hqSectionGrid}>
            {/* Left Card: Headquarters & Strategic Channels */}
            <div className={styles.hqCardChassis}>
              <div>
                <div className={styles.hqLiveStatusTag}>
                  <span className={styles.statusLedNeutral} />
                  <span>CLIENT DISPATCH &amp; OPERATIONS</span>
                </div>
                <h2 className={styles.titlePrimary} style={{ textAlign: 'left', marginBottom: '10px' }}>
                  Strategic Hub in Bhubaneswar.<br />
                  <span className={styles.titleAccent}>Scaling Brands Across India.</span>
                </h2>
                <p className={styles.subtitle} style={{ textAlign: 'left', margin: 0, fontSize: '14px' }}>
                  Meet our senior partners in-person for strategy sprints at our corporate office, or collaborate seamlessly through a dedicated WhatsApp war room from anywhere across India.
                </p>
              </div>

              {/* High-End Tactical Channel Grid */}
              <div className={styles.executiveChannelGrid}>
                {/* Physical Office Card */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.executiveOfficeCard}
                >
                  <div className={styles.executiveCardTop}>
                    <div className={styles.channelIconBubble}>📍</div>
                    <span className={styles.channelSmallLabel}>Registered Corporate Office</span>
                  </div>
                  <div className={styles.channelValueText}>
                    Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001
                  </div>
                  <div className={styles.cardActionFooter}>
                    <span>Open in Google Maps ↗</span>
                  </div>
                </a>

                {/* Direct Communications Dual-Column */}
                <div className={styles.executiveCommsDouble}>
                  <a href="tel:+919437168434" className={styles.executiveCommTile}>
                    <div className={styles.channelIconBubbleSmall}>📞</div>
                    <div>
                      <span className={styles.channelMicroLabel}>Direct Line</span>
                      <div className={styles.channelValueBold}>+91 94371 68434</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20partnership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.executiveCommTile} ${styles.executiveWhatsAppTile}`}
                  >
                    <div className={styles.channelIconBubbleSmall} style={{ background: '#DCFCE7', color: '#16A34A', border: '1px solid #86EFAC' }}>
                      💬
                    </div>
                    <div>
                      <span className={styles.channelMicroLabel}>WhatsApp Desk</span>
                      <div className={styles.channelValueBold} style={{ color: '#16A34A' }}>
                        Chat Founder ↗
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.hqFooterSla}>
                <span>⚡ 2-Hour Audit Response Turnaround</span>
                <span>•</span>
                <span>48-Hour Sprint Kickoff Guaranteed</span>
              </div>
            </div>

            {/* Right Card: Interactive Metro Radar & Commercial Hubs Console */}
            <div className={styles.metroRadarCard}>
              <div>
                <div className={styles.radarNeutralTag}>
                  <span className={styles.statusLedNeutral} />
                  <span>PAN-INDIA CAMPAIGN RADAR</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#0B2093', marginBottom: '8px' }}>
                  Active Commercial Hubs &amp; Metro Corridors
                </h3>
                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Click any commercial zone to inspect live campaign focus and deployment capacity:
                </p>

                {/* Interactive Metro Selector Pills */}
                <div className={styles.metroTagCloud}>
                  {Object.entries(metroHubDetails).map(([key, data]) => {
                    const isActive = activeHub === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setActiveHub(key)}
                        className={`${styles.metroPillBtn} ${isActive ? styles.metroPillBtnActive : ''}`}
                      >
                        {key === 'bhubaneswar' ? '📍' : '⚡'} {data.name.split(' (')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Live Telemetry Dossier Cockpit */}
              <div className={styles.activeHubDossier}>
                <div className={styles.hubDossierHeader}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span className={styles.hubDossierTag}>{selectedHubData.tag}</span>
                    <span className={styles.hubDossierName}>{selectedHubData.name}</span>
                  </div>
                  <span className={styles.hubDossierStatus}>● {selectedHubData.status}</span>
                </div>
                <p className={styles.hubDossierDesc}>{selectedHubData.desc}</p>
                <div className={styles.hubDossierStats}>
                  <div className={styles.hubStatTile}>
                    <span className={styles.hubStatIcon}>🎯</span>
                    <div>
                      <div className={styles.hubStatMetaLabel}>Specialization</div>
                      <div className={styles.hubStatValue}>{selectedHubData.category}</div>
                    </div>
                  </div>
                  <div className={styles.hubStatTile}>
                    <span className={styles.hubStatIcon}>⚡</span>
                    <div>
                      <div className={styles.hubStatMetaLabel}>Turnaround SLA</div>
                      <div className={styles.hubStatValue}>{selectedHubData.speed}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: 14, borderTop: '1.5px dashed #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#0B2093', fontWeight: 800 }}>
                <span>✓ Direct First-Party CAPI Attribution</span>
                <span>•</span>
                <span>Zero Account Black-Boxes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          REAL CAMPAIGNS. REAL RESULTS — 3 PERFECTLY ALIGNED CASE STUDIES
      ═════════════════════════════════════════════ */}
      <section className={styles.caseStudiesAlignedSection}>
        <div className={styles.container}>
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>Real clients, Real results we are proud of</span>
            </div>
            <h2 className={styles.titlePrimary}>Real Campaigns. Real Results.</h2>
            <p className={styles.subtitle}>
              Take an inside look at how our synchronized growth pods solve real bottlenecks and drive audited revenue for ambitious businesses.
            </p>
          </div>

          <div className={styles.caseStudiesTriadGrid}>
            {/* Card 1: D2C Apparel & Fashion */}
            <ScrollReveal delay={100}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_fashion.jpg"
                    alt="Zue Studio D2C Apparel Scaling Case Study"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>Flagship D2C Scale</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    Zue Studio: Scaling From ₹15L to ₹1.2Cr GMV
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Eliminated high iOS drop-offs and rising ad costs by deploying a UGC video creator pipeline paired with a headless sub-second checkout.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>4.1X</div>
                      <div className={styles.metricLbl}>Blended ROAS</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>-42%</div>
                      <div className={styles.metricLbl}>Cost Per Order</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> UGC Creator Engine (12 Variations/Mo)</li>
                    <li><span className={styles.greenCheck}>✓</span> Headless Next.js Checkout (+28% Conversion)</li>
                    <li><span className={styles.greenCheck}>✓</span> Meta CAPI First-Party Pixel Attribution</li>
                  </ul>
                  <Link href="/portfolio" className={styles.caseCardBlueprintBtn}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Luxury Real Estate */}
            <ScrollReveal delay={200}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_realestate.jpg"
                    alt="Utkal Heights Luxury Real Estate"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>High-Ticket Real Estate</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    Utkal Heights: 90+ Qualified HNW Buyers / Mo
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Eliminated third-party portal dependency via exact-match Google Search Ads and 35 localized micro-neighborhood landing pages.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>90+</div>
                      <div className={styles.metricLbl}>Monthly Inquiries</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>-60%</div>
                      <div className={styles.metricLbl}>Cost Per Lead</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> Exact-Match Negative Keyword Fortress</li>
                    <li><span className={styles.greenCheck}>✓</span> 35 Hyper-Local Micro Landing Pages</li>
                    <li><span className={styles.greenCheck}>✓</span> Real-Time WhatsApp CRM Lead Routing</li>
                  </ul>
                  <Link href="/portfolio" className={styles.caseCardBlueprintBtn}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Healthcare & Clinics */}
            <ScrollReveal delay={300}>
              <div className={styles.caseCardAligned}>
                <div className={styles.caseImgFrameAligned}>
                  <Image
                    src="/images/work_healthcare.jpg"
                    alt="CareFirst Multi-Specialty Clinics"
                    fill
                    sizes="(max-width: 980px) 100vw, 400px"
                    className={styles.caseImgAligned}
                  />
                  <span className={styles.casePillBadge}>Healthcare &amp; Clinics</span>
                </div>
                <div className={styles.caseBodyAligned}>
                  <h3 className={styles.caseTitleH3}>
                    CareFirst: Dominating Google Maps 3-Pack
                  </h3>
                  <p className={styles.caseSummaryText}>
                    Google Business Profile entity overhaul and automated post-visit SMS review acceleration driving a sustained surge in patient calls.
                  </p>
                  <div className={styles.caseMetricDouble}>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>+190%</div>
                      <div className={styles.metricLbl}>Direct Patient Calls</div>
                    </div>
                    <div className={styles.metricCol}>
                      <div className={styles.metricNum}>#1 Rank</div>
                      <div className={styles.metricLbl}>14 High-Intent Searches</div>
                    </div>
                  </div>
                  <ul className={styles.casePlaybookChecklist}>
                    <li><span className={styles.greenCheck}>✓</span> Local Entity Graph &amp; Schema Architecture</li>
                    <li><span className={styles.greenCheck}>✓</span> Automated Post-Visit Review System</li>
                    <li><span className={styles.greenCheck}>✓</span> Geo-Targeted High-Intent Search Ads</li>
                  </ul>
                  <Link href="/portfolio" className={styles.caseCardBlueprintBtn}>
                    Read Full Blueprint →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 6: OUR GROWTH FRAMEWORK · EXECUTION BLUEPRINT
          (Positioned directly bridging client spotlight proof to systematic execution)
      ═════════════════════════════════════════════ */}
      <StrategySection />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 7: LEADERSHIP & ACCOUNTABILITY
          "Meet the minds powering your growth."
      ═════════════════════════════════════════════ */}
      <TeamPreview eyebrow="LEADERSHIP & ACCOUNTABILITY" />

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 8: EVERYTHING YOU NEED TO GROW ONLINE — 8 ALIGNED CARDS
      ═════════════════════════════════════════════ */}
      <section className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.headerCenter}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulsingLed} />
            <span>END-TO-END GROWTH STACK</span>
          </div>
          <h2 className={styles.titlePrimary}>Everything You Need to Grow Online</h2>
          <p className={styles.subtitle}>
            A synchronized suite of performance services designed to work together without the overhead of managing multiple disconnected vendors.
          </p>
        </div>

        {/* Interactive Capability Ribbon Track */}
        <div className={styles.engineRibbonTrack}>
          {growthStackCapabilities.map((cap, idx) => {
            const isActive = activeStackService === idx;
            return (
              <button
                type="button"
                key={cap.id}
                onClick={() => setActiveStackService(idx)}
                className={`${styles.engineRibbonTab} ${isActive ? styles.engineRibbonTabActive : ''}`}
              >
                {isActive && <span className={styles.engineTabPulseGlow} />}
                <span className={styles.engineTabIcon}>{cap.icon}</span>
                <div className={styles.engineTabMeta}>
                  <span className={styles.engineTabTitle}>{cap.title}</span>
                  <span className={styles.engineTabStage}>{cap.stage}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Active Capability Cockpit Chassis */}
        {(() => {
          const activeCap = growthStackCapabilities[activeStackService] || growthStackCapabilities[0];
          return (
            <div className={styles.engineCockpitChassis}>
              {/* Cockpit Header with Telemetry Metric */}
              <div className={styles.cockpitTopBar}>
                <div className={styles.cockpitIdentity}>
                  <div className={styles.cockpitIconFrame}>{activeCap.icon}</div>
                  <div>
                    <div className={styles.cockpitMetaRow}>
                      <span className={styles.cockpitCategoryTag}>{activeCap.category}</span>
                      <span className={styles.cockpitStageTag}>{activeCap.stage}</span>
                    </div>
                    <h3 className={styles.cockpitTitleH3}>{activeCap.title}</h3>
                  </div>
                </div>

                <div className={styles.cockpitMetricGauge}>
                  <div className={styles.gaugeNumber}>{activeCap.metricNum}</div>
                  <div className={styles.gaugeSubText}>{activeCap.metricLabel}</div>
                  <div className={styles.gaugeSlaTag}>⚡ {activeCap.turnaround}</div>
                </div>
              </div>

              {/* Capability Description */}
              <p className={styles.cockpitDescription}>{activeCap.shortDesc}</p>

              {/* 3-Step Deliverable Workflow Triad */}
              <div className={styles.cockpitWorkflowArea}>
                <div className={styles.workflowSectionLabel}>
                  <span>⚙️ SPRINT EXECUTION WORKFLOW</span>
                </div>
                <div className={styles.workflowTriadGrid}>
                  {activeCap.workflow.map((w, wIdx) => (
                    <div key={wIdx} className={styles.workflowStepTile}>
                      <div className={styles.workflowStepTop}>
                        <span className={styles.workflowStepNum}>{w.step}</span>
                        <h4 className={styles.workflowStepH4}>{w.title}</h4>
                      </div>
                      <p className={styles.workflowStepDesc}>{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployed Tech Stack Bar */}
              <div className={styles.cockpitFooterTech}>
                <span className={styles.techBarLabel}>DEPLOYED STACK:</span>
                <div className={styles.techTagsCluster}>
                  {activeCap.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techTagPill}>
                      <span className={styles.techDot} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          THE COPILOT ADVANTAGE — HEAD-TO-HEAD BATTLE ARENA
      ═════════════════════════════════════════════ */}
      <section className={styles.advantageBattleSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.headerCenter}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulsingLed} />
              <span>THE COPILOT ADVANTAGE · HEAD-TO-HEAD AUDIT</span>
            </div>
            <h2 className={styles.titlePrimary}>
              The Traditional Agency Trap vs.<br />
              <span className={styles.titleAccent}>The Marketing Copilot Standard</span>
            </h2>
            <p className={styles.subtitle}>
              Why leading enterprises partner with a dedicated growth partner instead of outsourcing to bloated, slow-moving agencies.
            </p>
          </div>

          {/* Interactive Dimension Filter Bar */}
          <div className={styles.battleFilterBar}>
            <button
              type="button"
              onClick={() => setActiveAdvantageFilter('all')}
              className={`${styles.battleFilterBtn} ${activeAdvantageFilter === 'all' ? styles.battleFilterBtnActive : ''}`}
            >
              All Dimensions ({comparisonPoints.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveAdvantageFilter('ownership')}
              className={`${styles.battleFilterBtn} ${activeAdvantageFilter === 'ownership' ? styles.battleFilterBtnActive : ''}`}
            >
              Root Ownership
            </button>
            <button
              type="button"
              onClick={() => setActiveAdvantageFilter('team')}
              className={`${styles.battleFilterBtn} ${activeAdvantageFilter === 'team' ? styles.battleFilterBtnActive : ''}`}
            >
              Executive Leadership
            </button>
            <button
              type="button"
              onClick={() => setActiveAdvantageFilter('speed')}
              className={`${styles.battleFilterBtn} ${activeAdvantageFilter === 'speed' ? styles.battleFilterBtnActive : ''}`}
            >
              Speed &amp; Agility
            </button>
          </div>

          {/* Dual-Terminal Battle Arena */}
          {(() => {
            const visiblePoints = activeAdvantageFilter === 'all'
              ? comparisonPoints
              : comparisonPoints.filter((cp) => cp.category === activeAdvantageFilter);

            return (
              <div className={styles.battleArenaChassis}>
                {/* Left Terminal: Traditional Agency */}
                <div className={styles.battlePanelTraditional}>
                  <div className={styles.battlePanelTopHeader}>
                    <span className={styles.traditionalWarningBadge}>
                      ⚠️ THE STATUS QUO TRAP
                    </span>
                    <div className={styles.symbol3DItem}>
                      <span>Traditional Agency</span>
                      <button
                        type="button"
                        className={styles.symbol3DCross}
                        title="Friction Indicator (Interactable)"
                        aria-label="Traditional friction symbol"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className={styles.battleRowsContainer}>
                    {visiblePoints.map((point, pIdx) => {
                      const isHovered = hoveredAdvantageRow === pIdx;
                      return (
                        <div
                          key={point.id}
                          className={`${styles.battleRowItem} ${styles.battleRowItemTraditional} ${
                            isHovered ? styles.battleRowHoverSync : ''
                          }`}
                          onMouseEnter={() => setHoveredAdvantageRow(pIdx)}
                          onMouseLeave={() => setHoveredAdvantageRow(null)}
                        >
                          <div className={styles.rowDimensionChip}>{point.dimension}</div>
                          <div className={styles.rowLeadTitleBad}>
                            <span className={styles.rowIconBad}>✕</span>
                            <span>{point.traditionalTitle}</span>
                          </div>
                          <p className={styles.rowDescTextBad}>{point.traditionalDesc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Terminal: The Marketing Copilot */}
                <div className={styles.battlePanelCopilot}>
                  <div className={styles.battlePanelTopHeader}>
                    <span className={styles.copilotCrownBadge}>
                      <span className={styles.pulsingLed} />
                      👑 DEDICATED GROWTH PARTNER
                    </span>
                    <div className={styles.symbol3DItem}>
                      <span className={styles.copilotText}>Marketing Copilot</span>
                      <button
                        type="button"
                        className={styles.symbol3DCheck}
                        title="Verified Advantage Indicator (Interactable)"
                        aria-label="Verified Copilot advantage symbol"
                      >
                        ✓
                      </button>
                    </div>
                  </div>

                  <div className={styles.battleRowsContainer}>
                    {visiblePoints.map((point, pIdx) => {
                      const isHovered = hoveredAdvantageRow === pIdx;
                      return (
                        <div
                          key={point.id}
                          className={`${styles.battleRowItem} ${styles.battleRowItemCopilot} ${
                            isHovered ? styles.battleRowHoverSync : ''
                          }`}
                          onMouseEnter={() => setHoveredAdvantageRow(pIdx)}
                          onMouseLeave={() => setHoveredAdvantageRow(null)}
                        >
                          <div className={styles.rowDimensionChipCopilot}>{point.dimension}</div>
                          <div className={styles.rowLeadTitleGood}>
                            <span className={styles.rowIconGood}>✓</span>
                            <span>{point.copilotTitle}</span>
                          </div>
                          <p className={styles.rowDescTextGood}>{point.copilotDesc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 4 Foundational Strategic Pillars */}
          <div className={styles.storyPillarsHeader} style={{ marginTop: '54px' }}>
            <h3 className={styles.storyPillarsSubTitle}>
              Four Immutable Pillars of Growth
            </h3>
            <p className={styles.storyPillarsSubCopy}>
              The architectural bedrock supporting every sprint we run for ambitious enterprises across India.
            </p>
          </div>

          <div className={styles.pillarsQuadGrid}>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>01</div>
              <h4 className={styles.pillarTitleH3}>Direct Account Ownership</h4>
              <p className={styles.pillarBody}>
                You own 100% of your Google Ads accounts, Meta pixels, and creative IP from Day 1. Never held hostage by agency logins.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>02</div>
              <h4 className={styles.pillarTitleH3}>Founder-Led Execution</h4>
              <p className={styles.pillarBody}>
                Direct strategy and sprint oversight by our senior founders. No junior interns managing your ad spend.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>03</div>
              <h4 className={styles.pillarTitleH3}>Integrated Tech Stack</h4>
              <p className={styles.pillarBody}>
                We align high-converting engineering, creative velocity, and algorithmic media buying into one synchronized pod.
              </p>
            </div>
            <div className={styles.pillarCardAligned}>
              <div className={styles.pillarNum}>04</div>
              <h4 className={styles.pillarTitleH3}>Sub-2-Hour Response SLA</h4>
              <p className={styles.pillarBody}>
                Dedicated WhatsApp war room with real-time sprint updates, transparent metrics, and 0 lock-in contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION: FREQUENTLY ASKED QUESTIONS (ACCORDION)
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
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={styles.faqToggleBadge}>+</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswerPanel}>
                      <p className={styles.faqAnswerText}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Helpline Banner */}
            <div className={styles.faqFooterHelp}>
              <span className={styles.faqHelpPrompt}>
                Have a specific question about your market or budget?
              </span>
              <a
                href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20have%20a%20question%20regarding%20the%20digital%20growth%20partnership"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faqHelpWhatsAppLink}
              >
                <span>💬 Ask on WhatsApp</span>
              </a>
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
    </div>
  );
}
