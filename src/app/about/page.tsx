'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './page.module.css';

interface EpochMetric {
  label: string;
  val: string;
  bad?: boolean;
  good?: boolean;
}

interface FoundingStoryEpoch {
  epoch: string;
  year: string;
  pillText?: string;
  watermarkYear?: string;
  medallionText?: string;
  title: string;
  shortTitle: string;
  codename: string;
  tagline: string;
  quote: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  color: string;
  glow: string;
  accentBg: string;
  badgeLabel: string;
  artifactType: 'autopsy' | 'terminal' | 'soundstage' | 'ledger';
  artifactTitle: string;
  artifactSubtitle: string;
  artifactMetrics: EpochMetric[];
  resolution: string;
  turningPoints: string[];
  metricHero: string;
  metricLabel: string;
}

// ─── Data: Chrono-Chamber: The Nova Spark Story (Chronological Evolution) ───
const foundingStoryEpochs: FoundingStoryEpoch[] = [
  {
    epoch: '01',
    year: '2025',
    pillText: '01 · In 2025',
    watermarkYear: '2025',
    medallionText: '2025',
    title: 'The Idea Took Shape',
    shortTitle: 'The Idea Took Shape',
    codename: 'THE MISSION',
    tagline:
      'Nova Spark was founded with the mission of being a digital marketing agency that really learns about a business before crafting marketing strategies around the business\'s goals.',
    quote:
      'We founded Nova Spark on a simple premise: deeply understand each business first, then architect strategies around real commercial objectives rather than vanity numbers.',
    author: 'Shankarsan Nayak',
    authorRole: 'Founder & CEO',
    authorAvatar: '/images/team/exec_1.png',
    color: '#0B2093',
    glow: 'rgba(11, 32, 147, 0.22)',
    accentBg: 'rgba(11, 32, 147, 0.08)',
    badgeLabel: 'THE FOUNDATION',
    artifactType: 'autopsy',
    artifactTitle: 'Goal-Aligned Strategy Architecture',
    artifactSubtitle: 'Exhibit: Crafting marketing around genuine business objectives',
    artifactMetrics: [
      { label: 'Business Model Discovery', val: '100% Deep Dive', good: true },
      { label: 'Custom Growth Strategy', val: 'Goal-Aligned', good: true },
      { label: 'Vanity Metrics Focus', val: '0% Allowed', good: true },
      { label: 'Strategic Clarity', val: '100% Transparent', good: true },
    ],
    resolution:
      'Nova Spark took root to replace empty reports and vanity impressions with digital marketing engineered entirely around business success.',
    turningPoints: [
      'Deep Business Discovery',
      'Goal-Aligned Strategy',
    ],
    metricHero: '100%',
    metricLabel: 'Goal-Driven Strategy',
  },
  {
    epoch: '02',
    year: '2025',
    pillText: '02 · Late 2025',
    watermarkYear: '2025',
    medallionText: '2025',
    title: 'Nova Spark Came to Life',
    shortTitle: 'Nova Spark Came to Life',
    codename: 'SERVICES & EXECUTION',
    tagline:
      'We began engaging with businesses and building out our services in SEO, social media marketing, content, paid advertising, and digital strategy, learning from each project.',
    quote:
      'Engaging directly with businesses helped us refine multi-channel acquisition funnels where SEO, content, social media, and paid ads work together seamlessly.',
    author: 'Pranjal Sharma',
    authorRole: 'Founding Team Member & COO',
    authorAvatar: '/images/team/exec_2.png',
    color: '#0284C7',
    glow: 'rgba(2, 132, 199, 0.22)',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badgeLabel: 'FULL-STACK SERVICES',
    artifactType: 'terminal',
    artifactTitle: 'Multi-Channel Growth Engine',
    artifactSubtitle: 'SEO, Content, Social Media & Paid Performance Marketing',
    artifactMetrics: [
      { label: 'Search Engine Optimization', val: 'High-Intent SEO', good: true },
      { label: 'Content & Social Strategy', val: 'Brand Recall', good: true },
      { label: 'Paid Ad Campaigns', val: 'Targeted ROI', good: true },
      { label: 'Project-Based Learning', val: 'Continuous', good: true },
    ],
    resolution:
      'By combining SEO, content, social media, and paid performance marketing, we engineered tailored acquisition funnels for each partner.',
    turningPoints: [
      'SEO & Social Media Marketing',
      'Content & Paid Advertising',
    ],
    metricHero: '360°',
    metricLabel: 'Full-Service Marketing',
  },
  {
    epoch: '03',
    year: '2026',
    pillText: '03 · 2026',
    watermarkYear: '2026',
    medallionText: '2026',
    title: 'We Opened Our Office',
    shortTitle: 'We Opened Our Office',
    codename: 'BHUBANESWAR HQ',
    tagline:
      'As our work grew, we brought the team together with our own office in Bhubaneswar. It gave us a dedicated space to collaborate, create, and work closely with clients.',
    quote:
      'Opening our Bhubaneswar office brought our strategists, creators, and media buyers under one roof for close collaboration and high-speed execution.',
    author: 'Praveen Kumar',
    authorRole: 'Founding Team Member & CGO',
    authorAvatar: '/images/team/exec_3.png',
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.22)',
    accentBg: 'rgba(236, 72, 153, 0.08)',
    badgeLabel: 'BHUBANESWAR HQ',
    artifactType: 'soundstage',
    artifactTitle: 'Dedicated Collaborative Hub',
    artifactSubtitle: 'Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar',
    artifactMetrics: [
      { label: 'Dedicated Bhubaneswar Studio', val: 'Unit 3 Hub', good: true },
      { label: 'Direct Client Collaboration', val: 'In-Person & Live', good: true },
      { label: 'Creative Content Production', val: 'In-House Team', good: true },
      { label: 'Speed of Iteration', val: 'High Velocity', good: true },
    ],
    resolution:
      'Our physical hub in Kharvela Nagar gave us a collaborative space to strategize, create high-converting marketing campaigns, and work shoulder-to-shoulder with clients.',
    turningPoints: [
      'Dedicated Creative Hub',
      'Close Client Collaboration',
    ],
    metricHero: 'HQ',
    metricLabel: 'Bhubaneswar Office',
  },
  {
    epoch: '04',
    year: '2026',
    pillText: '04 · TODAY · 2026',
    watermarkYear: '2026',
    medallionText: '2026',
    title: 'Growing With Bhubaneswar Businesses',
    shortTitle: 'Growing With Bhubaneswar',
    codename: 'SUSTAINED GROWTH',
    tagline:
      'Nova Spark remains a leading digital marketing agency in Bhubaneswar, empowering businesses with targeted strategies, innovative marketing solutions, and sustained digital growth.',
    quote:
      'Today, we partner with leading businesses across Bhubaneswar, delivering data-driven strategies and innovative marketing solutions that produce real business growth.',
    author: 'Shankarsan Nayak',
    authorRole: 'Founder & CEO',
    authorAvatar: '/images/team/exec_1.png',
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.22)',
    accentBg: 'rgba(16, 185, 129, 0.08)',
    badgeLabel: 'LEADING AGENCY',
    artifactType: 'ledger',
    artifactTitle: 'Commercial Impact & Client Retention',
    artifactSubtitle: 'Empowering Bhubaneswar businesses with innovative marketing solutions',
    artifactMetrics: [
      { label: 'Bhubaneswar Brands Scaled', val: '50+ Businesses', good: true },
      { label: 'Growth Strategies', val: '100% Targeted', good: true },
      { label: 'Client Retention Rate', val: '94% MoM', good: true },
      { label: 'Transparent Partnership', val: 'Zero Lock-In', good: true },
    ],
    resolution:
      'Nova Spark continues to lead digital marketing in Bhubaneswar, driving predictable revenue, sustained growth, and enduring brand equity for businesses.',
    turningPoints: [
      'Targeted Growth Strategies',
      'Sustained Digital Growth',
    ],
    metricHero: '50+',
    metricLabel: 'Brands Scaled',
  },
];

// ─── Data: Bedrock Pillars (Manifesto) ───
const manifestoPillars = [
  {
    num: '01',
    tagline: 'QUANTITATIVE COMMERCIAL RIGOR',
    title: 'Revenue Over Vanity Metrics',
    desc: 'Most traditional agencies parade impression counts, generic clicks, and social media likes while your bank account remains stagnant. At Marketing Copilot, we calibrate every campaign strictly to unit economics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and verified Qualified Sales Pipelines.',
    stat: '100%',
    statLabel: 'Revenue-Attributed Reporting',
    color: '#0B2093',
  },
  {
    num: '02',
    tagline: 'HIGH-VELOCITY EXECUTION PROTOCOL',
    title: 'Speed as an Asymmetric Advantage',
    desc: 'Markets move at algorithm speed. While legacy agencies spend 60 days in committee meetings drafting slide decks, our team deploys creative variants, sets up tracking pixels, and begins iterative media testing within 72 hours. Fast feedback loops create compounding market separation.',
    stat: '<72h',
    statLabel: 'Deployment SLA',
    color: '#D97706',
  },
  {
    num: '03',
    tagline: 'RADICAL CLIENT TRANSPARENCY',
    title: 'Zero Black-Box Reporting',
    desc: 'You should never have to wonder where your ad budget was spent or why conversions dipped. Every Marketing Copilot partner gets 24/7 direct access to live Looker Studio telemetry dashboards, unfiltered platform ad accounts, and real-time sprint logs.',
    stat: '24/7',
    statLabel: 'Live Telemetry Access',
    color: '#10B981',
  },
  {
    num: '04',
    tagline: 'LONG-TERM ASSET CREATION',
    title: 'Compounding Organic Moats',
    desc: 'Paid media generates immediate demand, but organic search and brand authority create long-term enterprise value. We engineer technical SEO architectures and local map pack dominance that systematically lower your customer acquisition cost month after month.',
    stat: '-42%',
    statLabel: 'Blended CAC Over 12 Months',
    color: '#8B5CF6',
  },
];

// ─── Data: Why Choose Us — 4 Elevated Unfair Advantages ───
const fourUnfairAdvantages = [
  {
    id: 'moat-local',
    index: '01',
    badge: 'HYPERLOCAL DOMINANCE',
    title: 'Odisha Ground Reality & Regional Nuance',
    desc: 'Deep consumer psychology across Odisha and Eastern India eliminates generic ad spend waste with cultural resonance.',
    deliverables: [
      'Dual-language Odia & English creative hooks',
      'Hyperlocal Google 3-Pack Map dominance',
    ],
    icon: '📍',
    metric: '3.2X',
    metricLabel: 'Higher Local Conversion',
    accentColor: '#0B2093',
    glowColor: 'rgba(11, 32, 147, 0.15)',
  },
  {
    id: 'moat-speed',
    index: '02',
    badge: 'SOFTWARE ENGINEERING',
    title: 'Sub-Second Next.js Performance Stacks',
    desc: 'Custom Next.js web applications engineered with sub-800ms load speeds and 99/100 Core Web Vitals to maximize conversions.',
    deliverables: [
      'Server-Side Rendering on Edge CDN',
      'Direct WhatsApp & CRM webhook lead routing',
    ],
    icon: '⚡',
    metric: '<0.8s',
    metricLabel: 'Mobile LCP SLA Guarantee',
    accentColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.15)',
  },
  {
    id: 'moat-creative',
    index: '03',
    badge: 'PRODUCTION SOUNDSTAGE',
    title: 'In-House 4K/8K Cinematic Production',
    desc: 'Dedicated in-house production soundstage delivering 4K cinematic commercials, luxury shoots, and high-retention viral reels.',
    deliverables: [
      '4K cinema cameras, pro lighting & audio bays',
      'High-retention viral video sprint hooks',
    ],
    icon: '🎬',
    metric: '4K/8K',
    metricLabel: 'Cinema Studio Standards',
    accentColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.15)',
  },
  {
    id: 'moat-freedom',
    index: '04',
    badge: 'PERFORMANCE FREEDOM',
    title: 'Zero Binding Lock-In Contracts',
    desc: 'No restrictive handcuffs or punitive retainers. We operate on month-to-month performance with mutual commercial alignment.',
    deliverables: [
      'Rolling month-to-month partnership terms',
      'Zero cancellation penalties or exit fees',
    ],
    icon: '🛡️',
    metric: '94%',
    metricLabel: 'Voluntary Client Retention',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
];

// ─── Data: Comparison Matrix (3D Evaluation) ───
const comparisonRows = [
  {
    feature: 'Primary Metric Focus',
    featureDesc: 'What the agency optimizes daily ad spend for',
    traditional: 'Impressions, Reach, Vanity Likes',
    copilot: 'Net Bank Deposits & Verified SQLs',
    highlight: true,
  },
  {
    feature: 'Reporting Cadence',
    featureDesc: 'How and when performance is communicated',
    traditional: 'Delayed monthly PDF decks (often massaged)',
    copilot: 'Live 24/7 Looker Studio real-time telemetry',
    highlight: false,
  },
  {
    feature: 'Team Allocation',
    featureDesc: 'Who actually works on your campaigns day-to-day',
    traditional: 'Pitched by directors, handed to junior interns',
    copilot: 'Seasoned senior architects & founding strategists',
    highlight: true,
  },
  {
    feature: 'Execution Speed',
    featureDesc: 'Turnaround time for ad copy & creative changes',
    traditional: 'Weeks of committee review & email delays',
    copilot: 'Iterative testing deployed within 48–72h',
    highlight: false,
  },
  {
    feature: 'Contract Terms',
    featureDesc: 'Legal obligations & partner flexibility',
    traditional: '6 to 12 months rigid lock-in handcuffs',
    copilot: 'Performance rolling terms (zero lock-in)',
    highlight: true,
  },
  {
    feature: 'Web & Tech Stack',
    featureDesc: 'Underlying infrastructure powering landing pages',
    traditional: 'Heavy WordPress templates with slow load times',
    copilot: 'Sub-second Next.js edge web architecture',
    highlight: false,
  },
  {
    feature: 'Attribution Tracking',
    featureDesc: 'How ad conversions are tracked and verified',
    traditional: 'Basic browser pixels (40%+ cookie data loss)',
    copilot: 'Server-Side Meta CAPI & Google Offline APIs',
    highlight: true,
  },
];

// ─── Data: Real Executive Leadership Team ───
const executiveArchitects = [
  {
    name: 'Shankarsan Nayak',
    role: 'Founder & Chief Executive Officer',
    dept: 'EXECUTIVE LEADERSHIP & VISION',
    bio: 'Founder driving quantitative innovation, digital transformation, and sustainable business growth through mathematically rigorous strategy, creative prestige, and audited cash flow.',
    quote: 'We drive innovation, digital transformation, and sustainable business growth through strategy, creativity, and measurable results.',
    image: '/images/team/exec_1.png',
    imagePosition: '50% 10%',
    color: '#0B2093',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Pranjal Sharma',
    role: 'Founding Team Member & COO',
    dept: 'OPERATIONS & SCALING PROTOCOLS',
    bio: 'Leading digital marketing operations with 12+ years of experience, focused on seamless sprint execution, operational excellence, and delivering consistent client success across multi-channel campaigns.',
    quote: 'Focused on seamless execution, operational excellence and delivering consistent client success.',
    image: '/images/team/exec_2.png',
    imagePosition: '50% 12%',
    color: '#0284C7',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Praveen Kumar',
    role: 'Founding Team Member & CGO',
    dept: 'GROWTH & STRATEGIC ENTERPRISE',
    bio: 'Spearheading commercial growth, strategic enterprise partnerships, and high-value brand acquisitions to expand Marketing Copilot’s high-performance market footprint across India.',
    quote: 'Building high-leverage growth partnerships that unlock compounding market valuation for ambitious brands.',
    image: '/images/team/exec_3.png',
    imagePosition: '50% 12%',
    color: '#D97706',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Bikram Keshari Sahu',
    role: 'Operation Executive',
    dept: 'CAMPAIGN DELIVERY & ANALYTICS',
    bio: 'Orchestrating campaign delivery pipelines, cross-channel technical infrastructure, and strict SLA compliance for predictable client ROI and operational excellence.',
    quote: 'Operational rigor and precision delivery ensure every campaign produces audited business results.',
    image: '/images/team/exec_4.jpg',
    imagePosition: '50% 10%',
    color: '#10B981',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sasmita Pal',
    role: 'HR Admin Executive',
    dept: 'PEOPLE, CULTURE & TALENT',
    bio: 'Fostering high-performance agency culture, talent acquisition, people development, and seamless organizational administration across our Bhubaneswar studio and growth lab.',
    quote: 'Empowering world-class creative and engineering talent to build the next generation of growth systems.',
    image: '/images/team/exec_5.png',
    imagePosition: '50% 2%',
    color: '#8B5CF6',
    linkedin: 'https://linkedin.com',
  },
];

// ─── Data: 5-Phase Nova Spark Growth Process Roadmap ───
const operatingPhases = [
  {
    num: '01',
    name: 'Understanding Your Bhubaneswar Market',
    time: '',
    focus: 'Local Market & Marketing Audit',
    desc: 'We study your business, local audience, competitors, website, and existing marketing to find opportunities to reach more customers across Bhubaneswar and Odisha.',
    color: '#0B2093',
    deliverables: [
      'Business Model & Growth Objective Study',
      'Bhubaneswar & Odisha Target Audience Analysis',
      'Competitor Digital Footprint & SERP Audit',
      'Website, Funnel & Conversion Review',
    ],
    tools: ['Google Search Console', 'Meta Ads Library', 'Google Analytics', 'Local Market Insights'],
    outcomeMetric: 'Clear Local Market & Competitive Roadmap',
  },
  {
    num: '02',
    name: 'Building Your Digital Foundation',
    time: '',
    focus: 'Digital Marketing Setup',
    desc: 'We set up the right foundation across SEO, analytics, conversion tracking, Google Business Profile, social media, and reporting to make your marketing easier to measure.',
    color: '#0284C7',
    deliverables: [
      'Google Business Profile Full Optimization',
      'Google Analytics 4 & Conversion Event Tracking',
      'On-Page SEO & Structured Data Architecture',
      'Multi-Channel Performance Reporting Hub',
    ],
    tools: ['Google Tag Manager', 'Google Analytics 4', 'Google Business Profile', 'Meta Pixel'],
    outcomeMetric: '100% Transparent & Measurable Infrastructure',
  },
  {
    num: '03',
    name: 'Creating Content That Connects',
    time: '',
    focus: 'Local Content & Campaign Testing',
    desc: 'We create SEO content, social media creatives, ad campaigns, and local messaging designed to connect with your target customers and strengthen your brand presence in Bhubaneswar.',
    color: '#EC4899',
    deliverables: [
      'Targeted SEO Articles & High-Intent Copy',
      'High-Impact Social Media Visuals & Video Reels',
      'Multi-Channel Paid Ad Campaigns & Testing',
      'Local Bhubaneswar Trust & Credibility Messaging',
    ],
    tools: ['Creative Design Lab', 'Meta Ads Manager', 'Short-Form Video', 'Search Intent Engine'],
    outcomeMetric: 'Compelling Brand Presence & High Customer Enquiries',
  },
  {
    num: '04',
    name: 'Scaling What Works',
    time: '',
    focus: 'Performance Optimisation',
    desc: 'We analyse campaign and SEO performance, refine targeting, improve content, and focus on strategies that bring stronger visibility, engagement, enquiries, and customers for your business.',
    color: '#F59E0B',
    deliverables: [
      'Campaign Telemetry & Cost Per Acquisition Review',
      'Audience Segmentation & Ad Budget Rebalancing',
      'High-Performing Creative & Keyword Scaling',
      'Lead Quality & Conversion Rate Maximization',
    ],
    tools: ['Ad Analytics', 'Google Ads', 'Meta Ads Manager', 'Conversion Funnel Optimizers'],
    outcomeMetric: 'Maximized Enquiries & Lower Customer Acquisition Cost',
  },
  {
    num: '05',
    name: 'Building Long-Term Digital Growth',
    time: '',
    focus: 'Continuous Growth & Optimisation',
    desc: 'We continuously improve your SEO, local search presence, content, social media, and paid campaigns to help your Bhubaneswar business build sustainable online growth.',
    color: '#10B981',
    deliverables: [
      'Long-Term Technical & Local Search Dominance',
      'Ongoing High-Value Content & Social Expansion',
      'Systematic Paid Channel Refinement',
      'Sustained Brand Equity & Market Leadership',
    ],
    tools: ['SEO Intelligence', 'Local Map Pack Suite', 'Growth Dashboard', 'Continuous Optimization'],
    outcomeMetric: 'Compounding Visibility & Long-Term Revenue Growth',
  },
];

// ─── Data: The Future We’re Building (Mission, Vision, Values & Commitment) ───
const revenuePipelineStages = [
  {
    id: 'future-mission',
    num: '01',
    title: 'Our Mission',
    category: 'PURPOSE & DRIVE',
    badge: 'SMART DIGITAL MARKETING',
    desc: 'Our mission is to help businesses grow through smart and practical digital marketing. We concentrate on establishing robust brands, enhancing online visibility, targeting the right viewers, and developing marketing plans that provide real outcomes and long-term business growth.',
    metrics: 'Real Outcomes · Long-Term Business Growth',
    tech: ['Robust Brands', 'Online Visibility', 'Targeted Audience', 'Practical Marketing'],
    color: '#0B2093',
  },
  {
    id: 'future-vision',
    num: '02',
    title: 'Our Vision',
    category: 'FUTURE HORIZON',
    badge: 'BHUBANESWAR & BEYOND',
    desc: 'Our vision is to become a trusted digital marketing partner for growing businesses in Bhubaneswar and beyond. Our goal is to develop compelling digital moments that enable brands to engage customers, earn trust, remain competitive, and be confident in a changing digital landscape.',
    metrics: 'Trusted Growth Partner · Compelling Digital Moments',
    tech: ['Customer Engagement', 'Brand Trust', 'Market Confidence', 'Digital Excellence'],
    color: '#0284C7',
  },
  {
    id: 'future-values',
    num: '03',
    title: 'Our Values',
    category: 'CORE PRINCIPLES',
    badge: 'ETHICAL & TRANSPARENT',
    desc: 'Our values inform our thinking, our working, and our relationship with our clients. We believe in honest communication, creative thinking, transparency, consistent improvement, and meaningful results. Each strategy and campaign we develop is designed to provide our client with true value.',
    metrics: 'Honest Communication · Meaningful Results',
    tech: ['Honest Communication', 'Creative Thinking', '100% Transparency', 'True Client Value'],
    color: '#EC4899',
  },
  {
    id: 'future-commitment',
    num: '04',
    title: 'Our Commitment',
    category: 'PARTNERSHIP PLEDGE',
    badge: 'GENUINE ACCOUNTABILITY',
    desc: 'Our commitment is to treat your business with the care and focus of a true growth partner. We align our strategies with your genuine revenue goals, delivering honest communication, zero vanity metrics, and compounding digital growth that moves your business forward.',
    metrics: 'Zero Vanity Metrics · Compounding Business ROI',
    tech: ['True Partnership', 'Goal Alignment', 'Continuous Execution', 'Measurable ROI'],
    color: '#10B981',
  },
];

// ─── Data: Live Telemetry Numbers ───
const telemetryNumbers = [
  { value: 25, prefix: '₹', suffix: 'Cr+', label: 'Media Capital Managed', tag: 'PORTFOLIO VOLUME', sub: 'Verified ad spend managed across clients', icon: '💎', color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.25)' },
  { value: 4, prefix: '', suffix: '.8X', label: 'Average Blended ROAS', tag: 'NET EFFICIENCY', sub: 'Across e-commerce, real estate & clinics', icon: '🚀', color: '#10B981', glow: 'rgba(16, 185, 129, 0.25)' },
  { value: 94, prefix: '', suffix: '%', label: 'Client Retention Rate', tag: 'PARTNER LOYALTY', sub: 'Voluntary rolling monthly agreements', icon: '🛡️', color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.25)' },
  { value: 50, prefix: '', suffix: '+', label: 'Market Leaders Scaled', tag: 'REGIONAL MOAT', sub: 'High-growth brands across Eastern India', icon: '👑', color: '#FBBF24', glow: 'rgba(251, 191, 36, 0.25)' },
];

// ─── Data: About Us FAQs ───
const aboutFaqs = [
  {
    q: 'How is your digital marketing company in Bhubaneswar different from traditional agencies?',
    a: 'We aim to provide businesses in Bhubaneswar with practical solutions, measurable outcomes, and clear visibility, rather than a one-size-fits-all approach, and help them achieve leads and online growth.',
  },
  {
    q: 'Do you require a long-term contract for digital marketing services in Bhubaneswar?',
    a: 'Our digital marketing services in Bhubaneswar are based on your business requirements. Clear scope, goals, timelines, and deliverables are discussed beforehand and are flexible.',
  },
  {
    q: 'What industries does your digital marketing company in Bhubaneswar work with?',
    a: 'We work with businesses across different industries, creating customized SEO, social media, content marketing, and performance marketing strategies based on their audience, goals, and market.',
  },
  {
    q: 'Can we meet your digital marketing team in Bhubaneswar?',
    a: 'Yes, you can reach out to our team in Bhubaneswar to discuss your business vision, marketing needs, existing pain points, and possible digital marketing strategies for your brand.',
  },
  {
    q: 'How soon can we expect results from digital marketing in Bhubaneswar?',
    a: 'The results you receive are based on your objectives, industry, competition, and services selected. Generally, SEO takes longer to deliver results and build traction, but paid campaigns can deliver earlier.',
  },
];

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/About us page.png',
    alt: 'Marketing Copilot digital marketing company strategy and campaigns in Bhubaneswar',
    caption: 'Strategic Growth & Execution',
  },
];

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [activeEpoch, setActiveEpoch] = useState<number>(0);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);
  const [spineProgress, setSpineProgress] = useState<number>(12);
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);
  const heroSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    heroSlideTimerRef.current = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => {
      if (heroSlideTimerRef.current) clearInterval(heroSlideTimerRef.current);
    };
  }, []);

  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const countersStarted = useRef(false);
  const storySectionRef = useRef<HTMLElement | null>(null);
  const timelineTrackRef = useRef<HTMLDivElement | null>(null);

  // Track active chapter as user scrolls through the living timeline
  useEffect(() => {
    const chapters = document.querySelectorAll('[data-epoch-index]');
    if (!chapters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-epoch-index'));
            if (!isNaN(idx)) {
              setActiveEpoch(idx);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: '-10% 0px -40% 0px' }
    );

    chapters.forEach((ch) => observer.observe(ch));
    return () => observer.disconnect();
  }, []);

  // Continuous smooth scroll progress down the straight timeline spine
  useEffect(() => {
    const handleSpineScroll = () => {
      if (!timelineTrackRef.current) return;
      const rect = timelineTrackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = viewportHeight * 0.70;
      const progressPx = startPoint - rect.top;
      const totalHeight = rect.height;
      if (totalHeight > 0) {
        const pct = Math.min(100, Math.max(0, (progressPx / (totalHeight * 0.85)) * 100));
        setSpineProgress(pct);
      }
    };

    window.addEventListener('scroll', handleSpineScroll, { passive: true });
    window.addEventListener('resize', handleSpineScroll, { passive: true });
    handleSpineScroll();
    return () => {
      window.removeEventListener('scroll', handleSpineScroll);
      window.removeEventListener('resize', handleSpineScroll);
    };
  }, []);

  const scrollToChapter = (idx: number, year: string) => {
    setActiveEpoch(idx);
    const targetId = `chapter-${year}`;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted.current) {
          countersStarted.current = true;
          counterRefs.current.forEach((el, idx) => {
            if (!el) return;
            const target = telemetryNumbers[idx].value;
            const duration = 1800;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(ease * target).toString();
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = target.toString();
              }
            };
            setTimeout(() => requestAnimationFrame(step), idx * 100);
          });
        }
      },
      { threshold: 0.25 }
    );

    const sectionEl = document.getElementById('about-telemetry-section');
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutPageWrapper}>
      {/* ══════════════════════════════════════════════════════
          SECTION 1: DUAL-PANE HERO & AGENCY COCKPIT
         ══════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroAmbientGlow1} />
        <div className={styles.heroAmbientGlow2} />
        <div className={styles.heroGridLines} />

        <div className="container">
          <div className={styles.heroDualGrid}>
            {/* Left Pane: Narrative, Title, CTAs, Trust Strip */}
            <div className={styles.heroLeftCol}>
              <ScrollReveal direction="up">
                <div className={styles.heroEyebrow}>
                  <span className={styles.heroEyebrowDot} />
                  <span>BHUBANESWAR’S DIGITAL GROWTH PARTNER</span>
                </div>

                <h1 className={`display-hero ${styles.heroTitle}`}>
                  Your Growth Partner for{' '}
                  <span className={`accent-gradient ${styles.heroAccent}`}>Digital Marketing in Bhubaneswar.</span>
                </h1>

                <div className={styles.heroSub}>
                  <p>
                    We help brands in Bhubaneswar grow with practical, data-driven digital marketing strategies that turn online attention into real leads, customers, and high revenue.
                  </p>
                </div>

                <div className={styles.heroActionsRow}>
                  <BeamButton href="/contact" label="Get Your Free Growth Audit" size="lg" />
                  <BeamButton
                    href="#war-room-section"
                    label="Explore Our Approach"
                    size="lg"
                    variant="outline"
                  />
                </div>

                {/* Tactile Skeuomorphic Trust Strip */}
                <div className={styles.heroTrustStrip}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustGreenDot} />
                    <span>₹25Cr+ Managed</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustStar}>★</span>
                    <span>4.9/5 Rating (50+ Brands)</span>
                  </div>
                  <span className={styles.trustSep}>•</span>
                  <div className={styles.trustItem}>
                    <span className={styles.trustCheck}>✓</span>
                    <span>94% Retention</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Pane: Clean Photography Showcase (Exact same as Home Hero) */}
            <div className={styles.visual}>
              <div className={styles.imageCard}>
                <div className={styles.imageViewport}>
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`${styles.slideItem} ${idx === currentHeroSlide ? styles.slideActive : ''}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        unoptimized={true}
                        sizes="(max-width: 900px) 100vw, 680px"
                        quality={95}
                        className={styles.slideImage}
                      />
                      <div className={styles.slideOverlay} />
                    </div>
                  ))}

                  {/* Minimalist Floating Status Badge */}
                  <div className={styles.floatingBadge}>
                    <span className={styles.badgePulse} />
                    <span className={styles.badgeText}>Executive Studio &bull; Bhubaneswar</span>
                  </div>

                  {/* Minimalist Tactile Dot Indicators */}
                  {heroSlides.length > 1 && (
                    <div className={styles.dotsWrap}>
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`${styles.dot} ${idx === currentHeroSlide ? styles.dotActive : ''}`}
                          onClick={() => setCurrentHeroSlide(idx)}
                          aria-label={`Switch to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2: MEET US · EXECUTIVE ARCHITECTS & LEADERSHIP TEAM
          (Positioned directly below the hero section for immediate human connection & trust)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.leadershipSection} id="leadership-team">
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>MEET US · LEADERSHIP TEAM</span>
            </div>
            <h2 className={`display-lg ${styles.sectionHeadline}`}>
              Your Growth Is{' '}
              <span className="accent-gradient">Our Shared Goal</span>
            </h2>
            <p className={`body-lg ${styles.sectionSub}`}>
              Get direct support from experienced digital marketing professionals who understand your goals and turn them into clear, practical marketing strategies.
            </p>
          </ScrollReveal>

          {/* 5 Real Executive Cards */}
          <div className={styles.leadershipGrid}>
            {executiveArchitects.map((leader, idx) => (
              <ScrollReveal key={leader.name} delay={idx * 80} className={styles.leaderRevealWrap}>
                <div
                  className={styles.leaderCard}
                  style={{ '--leader-accent': leader.color } as React.CSSProperties}
                >
                  <div className={styles.leaderPhotoWrap}>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      priority={true}
                      unoptimized={true}
                      className={styles.leaderPhoto}
                      style={{ objectPosition: leader.imagePosition }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    />
                    <div className={styles.leaderOverlay} />
                    <span
                      className={styles.leaderDeptBadge}
                      style={{ color: leader.color, borderColor: `${leader.color}40` }}
                    >
                      {leader.dept}
                    </span>
                  </div>

                  <div className={styles.leaderInfo}>
                    <div className={styles.leaderHeaderRow}>
                      <div>
                        <h3 className={styles.leaderName}>{leader.name}</h3>
                        <p className={styles.leaderRole} style={{ color: leader.color }}>
                          {leader.role}
                        </p>
                      </div>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.leaderSocial}
                        aria-label={`${leader.name} LinkedIn Profile`}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
                        </svg>
                      </a>
                    </div>

                    <p className={styles.leaderBio}>{leader.bio}</p>

                    <blockquote className={styles.leaderQuote}>
                      &ldquo;{leader.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Executive Leadership CTA Card down the cards */}
          <ScrollReveal delay={120}>
            <div className={styles.leadershipCtaCard}>
              <div className={styles.leaderCtaGlow} />
              <div className={styles.leaderCtaMesh} />

              <div className={styles.leaderCtaLeft}>
                <span className={styles.leaderCtaBadge}>⚡ WORK DIRECTLY WITH OUR TEAM</span>
                <h3 className={styles.leaderCtaTitle}>
                  Get Experienced Digital Marketers Working on Your Growth
                </h3>
                <p className={styles.leaderCtaSub}>
                  We keep our client list focused so our senior team stays involved in your strategy, campaigns, and marketing decisions from start to finish.
                </p>
              </div>

              <div className={styles.leaderCtaRight}>
                <div className={styles.leaderCtaBtnGroup}>
                  <BeamButton href="/contact" label="Book a Strategy Call →" size="md" />
                  <BeamButton href="/about/team" label="Meet Our Team →" size="md" variant="outline" />
                </div>
                <div className={styles.leaderCtaMeta}>
                  <span className={styles.leaderCtaBeacon} />
                  <span>Direct Strategic Partnership &amp; Focused Execution</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3: HOME MAP SECTION (YOUR TRUSTED DIGITAL MARKETING COMPANY IN BHUBANESWAR)
         ══════════════════════════════════════════════════════ */}
      <QuickConnectMapSection id="war-room-section" />

      {/* ══════════════════════════════════════════════════════
          SECTION 4: THE FOUNDING STORY (LIVING DOCUMENTARY TIMELINE)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.documentaryStorySection} id="founding-story" ref={storySectionRef}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>THE NOVA SPARK STORY · OUR BEGINNING</span>
            </div>
            <h2 className={`display-lg ${styles.cleanStoryHeadline}`}>
              Why We Started Nova Spark:{' '}
              <span className="accent-gradient">A Better Way to Do Digital Marketing</span>
            </h2>
            <p className={`body-lg ${styles.cleanStorySub}`}>
              Nova Spark began in late 2025 with a simple idea: businesses deserve digital marketing that is practical, transparent, and focused on real growth, not just reports, reach, and vanity numbers.
            </p>
          </ScrollReveal>

          {/* Living Documentary Track with Central Liquid Spine */}
          <div className={styles.documentaryTrackContainer} ref={timelineTrackRef}>
            {/* Luminous Liquid Progress Spine */}
            <div className={styles.documentarySpineWrap}>
              <div className={styles.documentarySpineLine} />
              <div
                className={styles.documentarySpineProgress}
                style={{ height: `${spineProgress}%` }}
              />
              <div
                className={styles.spineLeadingOrb}
                style={{ top: `${spineProgress}%` }}
              />
            </div>

        {/* Chapters Flow (Alternating Zigzag Layout) */}
        <div className={styles.chaptersFlowList}>
          {foundingStoryEpochs.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const chapterId = `chapter-${item.epoch}-${item.year}`;
            return (
              <div
                key={item.epoch}
                id={chapterId}
                data-epoch-index={idx}
                className={`${styles.chapterBlock} ${isEven ? styles.chapterEven : styles.chapterOdd}`}
              >
                {/* Giant Ghost Watermark Year */}
                <div className={styles.ghostYearWatermark}>
                  {item.watermarkYear || item.year}
                </div>

                {/* Colorful 3D Skeuomorphic Year Medallion on Spine */}
                <div className={styles.chapterBeaconWrap}>
                  <div className={styles.skeuoYearMedallion} style={{ '--medallion-color': item.color, '--medallion-glow': item.glow } as React.CSSProperties}>
                    <span className={styles.medallionChromeRing} />
                    <span className={styles.medallionInnerBevel}>
                      <span className={styles.medallionYearDigit}>{item.medallionText || item.year}</span>
                    </span>
                  </div>
                </div>

                {/* Alternating Single 3D Skeuomorphic Milestone Card */}
                <div className={styles.chapterInnerGrid}>
                  {/* Left Column for Odd (Act 1, 3), Spacer for Even */}
                  {!isEven ? (
                    <div className={styles.skeuoMilestoneCard} style={{ '--accent-glow': item.glow, '--card-accent': item.color } as React.CSSProperties}>
                      <div className={styles.cardBevelHighlight} />
                      <span className={`${styles.cardRivet} ${styles.rivetTL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetTR}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBR}`} />
                      
                      <div className={styles.skeuoCardTopRow}>
                        <div className={styles.skeuoCardYearPill}>
                          <span className={styles.skeuoPillDot} style={{ background: item.color }} />
                          <span className={styles.skeuoPillYear}>{item.pillText || `${item.year} • ACT 0${idx + 1}`}</span>
                        </div>
                        <span className={styles.skeuoBadgeTag} style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}0D` }}>
                          {item.badgeLabel}
                        </span>
                      </div>

                      <h3 className={styles.skeuoCardHeadline}>{item.title}</h3>
                      <p className={styles.skeuoCardSummary}>{item.tagline}</p>

                      <div className={styles.skeuoMetricTray}>
                        <div className={styles.skeuoMetricHeroCell}>
                          <span className={styles.skeuoMetricHeroVal} style={{ color: item.color }}>{item.metricHero}</span>
                          <span className={styles.skeuoMetricHeroLbl}>{item.metricLabel}</span>
                        </div>
                        <div className={styles.skeuoMetricDivider} />
                        <div className={styles.skeuoPillsList}>
                          {item.turningPoints.slice(0, 2).map((pt, pIdx) => (
                            <div key={pIdx} className={styles.skeuoPointChip}>
                              <span className={styles.skeuoPointCheck}>✓</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.skeuoGridSpacer} />
                  )}

                  {/* Right Column for Even (Act 2, 4), Spacer for Odd */}
                  {isEven ? (
                    <div className={styles.skeuoMilestoneCard} style={{ '--accent-glow': item.glow, '--card-accent': item.color } as React.CSSProperties}>
                      <div className={styles.cardBevelHighlight} />
                      <span className={`${styles.cardRivet} ${styles.rivetTL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetTR}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBL}`} />
                      <span className={`${styles.cardRivet} ${styles.rivetBR}`} />
                      
                      <div className={styles.skeuoCardTopRow}>
                        <div className={styles.skeuoCardYearPill}>
                          <span className={styles.skeuoPillDot} style={{ background: item.color }} />
                          <span className={styles.skeuoPillYear}>{item.pillText || `${item.year} • ACT 0${idx + 1}`}</span>
                        </div>
                        <span className={styles.skeuoBadgeTag} style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}0D` }}>
                          {item.badgeLabel}
                        </span>
                      </div>

                      <h3 className={styles.skeuoCardHeadline}>{item.title}</h3>
                      <p className={styles.skeuoCardSummary}>{item.tagline}</p>

                      <div className={styles.skeuoMetricTray}>
                        <div className={styles.skeuoMetricHeroCell}>
                          <span className={styles.skeuoMetricHeroVal} style={{ color: item.color }}>{item.metricHero}</span>
                          <span className={styles.skeuoMetricHeroLbl}>{item.metricLabel}</span>
                        </div>
                        <div className={styles.skeuoMetricDivider} />
                        <div className={styles.skeuoPillsList}>
                          {item.turningPoints.slice(0, 2).map((pt, pIdx) => (
                            <div key={pIdx} className={styles.skeuoPointChip}>
                              <span className={styles.skeuoPointCheck}>✓</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.skeuoGridSpacer} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

{/* ══════════════════════════════════════════════════════
          TRANSITIONAL HIGH-CONVERTING CTA ABOVE MANIFESTO
         ══════════════════════════════════════════════════════ */}
      <section className={styles.transitionalCtaSection}>
    <div className="container">
      <ScrollReveal>
        <div className={styles.transitionalCtaCard}>
          <div className={styles.transCtaGlow} />
          <div className={styles.transCtaLeft}>
            <span className={styles.transCtaBadge}>⚡ LET’S FIND YOUR GROWTH GAPS</span>
            <h3 className={styles.transCtaTitle}>
              From Digital Reach to Real Business Results
            </h3>
            <p className={styles.transCtaSub}>
              Let our team review your current marketing efforts and uncover practical opportunities to improve visibility, leads, conversions, and overall online performance.
            </p>
          </div>

          <div className={styles.transCtaRight}>
            <div className={styles.transCtaButtons}>
              <BeamButton href="/contact" label="Claim Free Growth Audit" size="md" />
              <BeamButton href="#principles-section" label="Our Marketing Principles" size="md" variant="outline" />
            </div>
            <div className={styles.transCtaTrust}>
              <span>✓ 48-Hour Turnaround</span>
              <span>•</span>
              <span>✓ Zero Lock-In</span>
              <span>•</span>
              <span>✓ 100% Confidential</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 5: THE COPILOT MANIFESTO & CORE PILLARS
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.manifestoSection } id = "principles-section" >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>THE COPILOT MANIFESTO</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Four Principles Behind{' '}
          <span className="accent-gradient">Everything We Do</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          We believe good digital marketing should be simple, transparent, and focused on business growth. These four principles guide every strategy, campaign, piece of content, and decision we make.
        </p>
      </ScrollReveal>

      {/* Horizontal Kinetic Stream of Principles */}
      <div className={styles.manifestoStream}>
        {manifestoPillars.map((pillar, idx) => (
          <ScrollReveal key={pillar.num} delay={idx * 80}>
            <div className={styles.streamItem} style={{ '--pillar-accent': pillar.color } as React.CSSProperties}>
              <div className={styles.streamLeftCol}>
                <span className={styles.ambientIndex}>{pillar.num}</span>
                <span className={styles.pillarTagline} style={{ color: pillar.color }}>
                  {pillar.tagline}
                </span>
              </div>

              <div className={styles.streamMidCol}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>

              <div className={styles.streamRightCol}>
                <div className={styles.streamStatBox}>
                  <span className={styles.streamStatNumber} style={{ color: pillar.color }}>
                    {pillar.stat}
                  </span>
                  <span className={styles.streamStatLabel}>{pillar.statLabel}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 6: 4 ELEVATED UNFAIR ADVANTAGES (WHY CHOOSE US)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.whyChooseSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>UNFAIR ADVANTAGES</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Why Market Leaders Choose{' '}
          <span className="accent-gradient">Marketing Copilot</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          Four proprietary structural moats that give our partners an unshakeable competitive edge in market positioning, unit economics, and client acquisition.
        </p>
      </ScrollReveal>

      {/* 4 Luxury Architectural Advantage Cards */}
      <div className={styles.fourAdvantagesGrid}>
        {fourUnfairAdvantages.map((moat, i) => (
          <ScrollReveal key={moat.id} delay={i * 90}>
            <div
              className={styles.advantageLuxuryCard}
              style={
                {
                  '--adv-accent': moat.accentColor,
                  '--adv-glow': moat.glowColor,
                } as React.CSSProperties
              }
            >
              <div className={styles.advCardGlow} />

              <div className={styles.advCardHeader}>
                <span className={styles.advIndexNum}>{moat.index}</span>
                <span className={styles.advBadge}>{moat.badge}</span>
              </div>

              <h3 className={styles.advTitle}>{moat.title}</h3>
              <p className={styles.advDesc}>{moat.desc}</p>

              <div className={styles.advDeliverablesList}>
                {moat.deliverables.map((item) => (
                  <div key={item} className={styles.deliverableItem}>
                    <span className={styles.checkIconBullet} style={{ color: moat.accentColor }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.advCardFooter}>
                <div className={styles.advMetricBox}>
                  <span className={styles.advMetricVal} style={{ color: moat.accentColor }}>{moat.metric}</span>
                  <span className={styles.advMetricLabel}>{moat.metricLabel}</span>
                </div>
                <Link href="/contact" className={styles.advAuditLink}>
                  <span>Explore Moat</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
      </section >

      {/* ══════════════════════════════════════════════════════
          MINIMAL TRANSITIONAL CTA ABOVE TRANSPARENT EVALUATION
         ══════════════════════════════════════════════════════ */}
      <section className={styles.evaluationCtaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.evaluationCtaCard}>
              <div className={styles.evalCtaGlow} />
              <div className={styles.evalCtaLeft}>
                <span className={styles.evalCtaBadge}>⚡ ELEVATE YOUR REVENUE</span>
                <h3 className={styles.evalCtaTitle}>
                  Ready to Turn These Unfair Advantages Into Profit?
                </h3>
                <p className={styles.evalCtaSub}>
                  Claim a complimentary 20-minute diagnostic session with our founding growth architects. Zero lock-in, zero fluff.
                </p>
              </div>

              <div className={styles.evalCtaRight}>
                <BeamButton href="/contact" label="Claim Free Growth Audit" size="md" />
                <div className={styles.evalCtaTrust}>
                  <span>✓ 100% Free</span>
                  <span>•</span>
                  <span>✓ Zero Lock-In</span>
                  <span>•</span>
                  <span>✓ 24h Turnaround</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7: TRANSPARENT EVALUATION (3D COMPARISON MATRIX)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.comparisonSection}>
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>TRANSPARENT EVALUATION</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Old Traditional Agencies{' '}
          <span className="accent-gradient">vs. The Copilot Standard</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          Compare side-by-side. See why forward-thinking enterprises are leaving antiquated retainer contracts behind.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className={styles.matrixContainer}>
          <div className={styles.matrixHeader}>
            <div className={styles.matrixColFeature}>CRITICAL PERFORMANCE CAPABILITY</div>
            <div className={`${styles.matrixColAgency} ${styles.matrixBad}`}>
              <span>TRADITIONAL AGENCIES</span>
            </div>
            <div className={`${styles.matrixColCopilot} ${styles.matrixGood}`}>
              <span>MARKETING COPILOT ARCHITECTURE</span>
            </div>
          </div>

          <div className={styles.matrixBody}>
            {comparisonRows.map((row, idx) => (
              <div
                key={row.feature}
                className={`${styles.matrixRow} ${row.highlight ? styles.rowHighlight : ''} ${idx % 2 === 0 ? styles.rowEven : ''}`}
              >
                <div className={styles.cellFeature}>
                  <div className={styles.featureTitleWrap}>
                    <span className={styles.featureBullet}>✦</span>
                    <span className={styles.featureNameText}>{row.feature}</span>
                  </div>
                  <span className={styles.featureSubText}>{row.featureDesc}</span>
                </div>

                <div className={`${styles.cellAgency} ${styles.cellBad}`}>
                  {/* 3D Interactive Skeuomorphic Cross Sign Token */}
                  <span className={styles.token3dCross} title="Antiquated Retainer / High Vulnerability" aria-label="Not guaranteed">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className={styles.agencyText}>{row.traditional}</span>
                </div>

                <div className={`${styles.cellCopilot} ${styles.cellGood}`}>
                  {/* 3D Interactive Skeuomorphic Check Sign Token */}
                  <span className={styles.token3dCheck} title="Verified Quantitative SLA Telemetry" aria-label="Verified SLA">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.copilotText}>{row.copilot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Single CTA Button down the card */}
      <div className={styles.comparisonCtaRow}>
        <BeamButton href="/contact" label="Switch to The Copilot Standard" size="md" />
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 8: 5-PHASE GROWTH OS (INTERACTIVE SINUSOIDAL ROADMAP)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.roadmapSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>THE NOVA SPARK GROWTH PROCESS</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          How We Help Bhubaneswar Brands{' '}
          <span className="accent-gradient">Grow Online</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          As a digital marketing company in Bhubaneswar, we understand the local market, customer behaviour, and competitive landscape. Our five-step process turns your digital presence into a focused growth channel.
        </p>
      </ScrollReveal>

      {/* Connected Desktop Roadmap */}
      <div className={styles.roadmapDesktopWrap}>
        {/* Central Connecting Conduit */}
        <div className={styles.roadmapSvgTrack}>
          <svg viewBox="0 0 1200 48" fill="none" preserveAspectRatio="none" className={styles.roadmapSvg}>
            {/* Ambient Guide Wire */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="rgba(11, 32, 147, 0.16)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            {/* Smooth Glowing Laser Conduit (Phase 1 to Phase 5) */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="url(#roadmapGradLaser)"
              strokeWidth="4.5"
              strokeDasharray="36 18"
              strokeLinecap="round"
              className={styles.animatedRoadmapPath}
            />
            {/* Smooth Energy Spark Tracer */}
            <line
              x1="50"
              y1="24"
              x2="1150"
              y2="24"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="20 220"
              strokeLinecap="round"
              className={styles.animatedRoadmapSpark}
            />
            <defs>
              <linearGradient id="roadmapGradLaser" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B2093" />
                <stop offset="25%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 5-Column Grid with Central Numbers & Alternating Cards */}
        <div className={styles.roadmapColumnsGrid}>
          {operatingPhases.map((phase, idx) => {
            const isAbove = idx % 2 === 0;
            const isSelected = activePhase === idx;
            const colIndex = idx + 1;
            return (
              <div
                key={phase.num}
                onClick={() => setActivePhase(idx)}
                className={`${styles.roadmapCol} ${isAbove ? styles.colTop : styles.colBottom} ${isSelected ? styles.roadmapColSelected : ''}`}
                style={
                  {
                    gridColumn: colIndex,
                    gridRow: isAbove ? '1 / 3' : '2 / 4',
                    '--phase-accent': phase.color,
                    cursor: 'pointer',
                  } as React.CSSProperties
                }
              >
                {isAbove ? (
                  <>
                    <div className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}>
                      <div className={styles.phaseHeaderRow}>
                        <span
                          className={styles.phaseBadge}
                          style={{
                            color: phase.color,
                            borderColor: `${phase.color}35`,
                            background: `${phase.color}12`,
                          }}
                        >
                          PHASE {phase.num}
                        </span>
                        {phase.time ? <span className={styles.phaseTime}>⏱ {phase.time}</span> : null}
                      </div>

                      <h4 className={styles.phaseName}>{phase.name}</h4>
                      <p className={styles.phaseDesc}>{phase.desc}</p>

                      <div className={styles.phaseFocusRow}>
                        <span className={styles.focusDot} style={{ background: phase.color }} />
                        <span className={styles.focusText} style={{ color: phase.color }}>
                          {phase.focus}
                        </span>
                      </div>
                    </div>

                    <div className={styles.phaseStem} style={{ background: phase.color }} />

                    <div
                      className={`${styles.phaseNodeCircle} ${isSelected ? styles.nodeCircleActive : ''}`}
                      style={{ borderColor: phase.color }}
                    >
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${styles.phaseNodeCircle} ${isSelected ? styles.nodeCircleActive : ''}`}
                      style={{ borderColor: phase.color }}
                    >
                      <span className={styles.phaseNodeCore} style={{ background: phase.color }}>
                        {phase.num}
                      </span>
                    </div>

                    <div className={styles.phaseStem} style={{ background: phase.color }} />

                    <div className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}>
                      <div className={styles.phaseHeaderRow}>
                        <span
                          className={styles.phaseBadge}
                          style={{
                            color: phase.color,
                            borderColor: `${phase.color}35`,
                            background: `${phase.color}12`,
                          }}
                        >
                          PHASE {phase.num}
                        </span>
                        {phase.time ? <span className={styles.phaseTime}>⏱ {phase.time}</span> : null}
                      </div>

                      <h4 className={styles.phaseName}>{phase.name}</h4>
                      <p className={styles.phaseDesc}>{phase.desc}</p>

                      <div className={styles.phaseFocusRow}>
                        <span className={styles.focusDot} style={{ background: phase.color }} />
                        <span className={styles.focusText} style={{ color: phase.color }}>
                          {phase.focus}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 9: REAL-TIME REVENUE & ATTRIBUTION PIPELINE
          (REPLACES BASIC TOOLING & AUTOMATION TECH STACK)
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.revenuePipelineSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
          <span className="eyebrow-dot" />
          <span>The Future We’re Building</span>
        </div>
        <h2 className={`display-lg ${styles.sectionHeadline}`}>
          Better Marketing for{' '}
          <span className="accent-gradient">Growing Businesses</span>
        </h2>
        <p className={`body-lg ${styles.sectionSub}`}>
          We help businesses navigate digital marketing with simple strategies, clear communication, and consistent execution focused on meaningful growth.
        </p>
      </ScrollReveal>

      {/* Interactive Pipeline Architecture */}
      <div className={styles.pipelineStagesGrid}>
        {revenuePipelineStages.map((stage, idx) => (
          <ScrollReveal key={stage.id} delay={idx * 80} className={styles.pipelineRevealWrap}>
            <div
              onClick={() => setActivePipelineStage(idx)}
              className={`${styles.pipelineCard} ${activePipelineStage === idx ? styles.pipelineCardActive : ''}`}
              style={{ '--stage-accent': stage.color } as React.CSSProperties}
            >
              <div className={styles.pipelineCardTop}>
                <div className={styles.stageNumBadge}>
                  <span>{stage.num}</span>
                </div>
                <span className={styles.stageCategoryTag}>{stage.category}</span>
              </div>

              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.desc}</p>

              <div className={styles.stageBottomGroup}>
                <div className={styles.stageTechRow}>
                  {stage.tech.map((t) => (
                    <span key={t} className={styles.stageTechBadge}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.stageFooter}>
                  <span className={styles.stagePulseBeacon} style={{ background: stage.color }} />
                  <span className={styles.stageMetricsText}>{stage.metrics}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <BeamButton href="/contact" label="Start Growing With Nova Spark" size="md" />
      </div>
    </div>
      </section >

{/* ══════════════════════════════════════════════════════
          SECTION 10: QUANTIFIED MILESTONES (LIVE NUMBERS COCKPIT)
         ══════════════════════════════════════════════════════ */}
      <section className={styles.telemetrySection} id="about-telemetry-section">
        <div className={styles.telemetryMesh} />
        <div className={styles.telemetryAmbientGlow} />
        <div className="container">
          <ScrollReveal className="text-center">
            <div className={styles.telemetryEyebrow}>
              <span className={styles.telemetryLiveDot} />
              <span>Built Around Real Results</span>
            </div>
            <h2 className={styles.telemetryTitle}>
              Data-Driven Digital Marketing for{' '}
              <span className="accent-gradient">Growing Brands</span>
            </h2>
            <p className={styles.telemetrySub}>
              Every campaign is measured against clear business goals, giving you a transparent view of performance, growth, leads, advertising returns, and marketing progress.
            </p>
          </ScrollReveal>

          {/* 4 Compact Milestone Cards Directly on Net Grid */}
          <div className={styles.telemetryGrid}>
            {telemetryNumbers.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 70}>
                <div
                  className={styles.statBox}
                  style={{ '--stat-accent': stat.color, '--stat-glow': stat.glow } as React.CSSProperties}
                >
                  <div className={styles.statCardTop}>
                    <span
                      className={styles.statTag}
                      style={{ color: stat.color, borderColor: `${stat.color}40`, background: `${stat.color}15` }}
                    >
                      {stat.tag}
                    </span>
                  </div>

                  <div className={styles.statValueRow}>
                    {stat.prefix && <span className={styles.counterPrefix}>{stat.prefix}</span>}
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                      className={styles.counterNum}
                    >
                      0
                    </span>
                    <span className={styles.counterSuffix} style={{ color: stat.color }}>
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statSubText}>{stat.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 12: FREQUENTLY ASKED QUESTIONS (MATCHES HOME PAGE LUXURY ACCORDION)
         ══════════════════════════════════════════════════════ */}
        <section className={`section ${styles.faqSection}`} id="faq-section">
          <div className="container-sm">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
                <span className="eyebrow-dot" />
                COMMON QUESTIONS
              </div>
              <h2 className="display-lg" style={{ marginTop: 16 }}>
                Digital Marketing <span className="accent-gradient">FAQs</span>
              </h2>
              <p className={`body-lg ${styles.sectionSub}`}>
                Your Guide to Smarter Digital Marketing
              </p>
            </ScrollReveal>

            <div className={styles.faqList}>
              {aboutFaqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <ScrollReveal key={faq.q} delay={i * 40}>
                    <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : i)}
                        className={styles.faqQuestion}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                      </button>

                      <div
                        className={styles.faqAnswer}
                        style={{
                          maxHeight: isOpen ? '600px' : '0',
                        }}
                      >
                        <p className={styles.faqAnswerText}>{faq.a}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Center Bottom FAQ Action */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 44 }}>
              <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Still have questions about our digital marketing services?</p>
              <BeamButton href="/contact" label="Talk to Our Growth Team" size="md" />
            </div>
          </div>
        </section>

{/* ══════════════════════════════════════════════════════
          SECTION 13: GRAND FINALE CTA COMMAND CARD
         ══════════════════════════════════════════════════════ */}
  < section className = { styles.ctaFinaleSection } >
    <div className="container">
      <ScrollReveal className="text-center">
        <div className={styles.finaleCard}>
          <div className={styles.finaleGlowBg} />
          <div className={styles.finaleMesh} />

          <div className={styles.finaleBadgeWrap}>
            <span className={styles.finaleBadge}>
              <span className={styles.finaleBadgeDot} />
              <span>TAILORED GROWTH STRATEGY · BHUBANESWAR &amp; BEYOND</span>
            </span>
          </div>

          <h2 className={styles.finaleHeadline}>
            Your Business Deserves an Agency That{' '}
            <span className="accent-gradient">Acts Like an Owner.</span>
          </h2>

          <p className={styles.finaleDesc}>
            Stop settling for disconnected marketing tactics and vague monthly reports. Partner with Marketing Copilot to build an integrated customer acquisition engine engineered for compounding cash flow.
          </p>

          <div className={styles.finaleActions}>
            <BeamButton href="/contact" label="Claim Free Growth Audit" size="lg" />
            <BeamButton href="/portfolio" label="View Client Case Studies" size="lg" variant="outline" />
          </div>
        </div>
      </ScrollReveal>
    </div>
      </section >
    </div >
  );
}
