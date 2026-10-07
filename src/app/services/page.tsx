'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '../_components/QuickConnectMapSection';
import CTASection from '../_components/CTASection';
import styles from './page.module.css';

interface ServiceItem {
  id: string;
  num: string;
  category: string;
  categoryGroup: 'search' | 'paid' | 'web' | 'scale';
  shortCategory: string;
  title: string;
  tagline: string;
  image: string;
  iconSrc: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
  color: string;
  href: string;
}

const serviceCatalog: ServiceItem[] = [
  {
    id: 'seo',
    num: '01',
    category: 'ORGANIC SERP DOMINANCE',
    categoryGroup: 'search',
    shortCategory: 'Organic Search',
    title: 'SEO & Organic Growth',
    tagline: 'Improve Google rankings across India with data-driven SEO, white-hat technical speed, schema moats, and high-intent topic authority.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/seo.svg',
    deliverables: ['Google 3-Pack Map Moat', 'Core Web Vitals < 0.9s', 'High-Intent Topic Clusters'],
    metric: '+240%',
    metricLabel: 'Organic Inquiries Lift',
    color: '#0B2093',
    href: '/services/seo-services-in-india',
  },
  {
    id: 'google-ads',
    num: '02',
    category: 'HIGH-INTENT COMMERCIAL SEARCH',
    categoryGroup: 'paid',
    shortCategory: 'Paid Search',
    title: 'Google Ads & PPC Campaigns',
    tagline: 'Capture active buyers at the exact millisecond they search with negative keyword shielding and high-converting landers.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/google-ads.svg',
    deliverables: ['Search & Performance Max', 'Zero Ad-Spend Waste', 'Click-to-Call Attribution'],
    metric: '6.8X',
    metricLabel: 'Peak Commercial ROAS',
    color: '#1D4ED8',
    href: '/services/google-ads-services-in-india',
  },
  {
    id: 'meta-ads',
    num: '03',
    category: 'INTERRUPTIVE DEMAND CREATION',
    categoryGroup: 'paid',
    shortCategory: 'Paid Social',
    title: 'Meta Ads (Facebook & Instagram)',
    tagline: 'Turn social attention into qualified sales leads with scroll-stopping commercial video hooks and frictionless forms.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/meta-ads.svg',
    deliverables: ['Dynamic Retargeting Loops', 'High-Intent Instant Forms', 'Pan-India Audience Segmentation'],
    metric: '4.2X',
    metricLabel: 'Acquisition Velocity',
    color: '#0081FB',
    href: '/services/meta-ads-services-in-india',
  },
  {
    id: 'web-dev',
    num: '04',
    category: 'SUB-SECOND CONVERSION TECH',
    categoryGroup: 'web',
    shortCategory: 'Web Engineering',
    title: 'Website & Web App Development',
    tagline: 'Sub-second Next.js web applications engineered to turn fleeting browser clicks into signed client contracts.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/web-development.svg',
    deliverables: ['Next.js React Architecture', 'PageSpeed 99/100 Mobile', 'Conversion Rate Architecture'],
    metric: '99/100',
    metricLabel: 'Google Speed SLA',
    color: '#10B981',
    href: '/services/web-development-in-india',
  },
  {
    id: 'branding',
    num: '05',
    category: 'VISUAL IDENTITY & RECALL',
    categoryGroup: 'web',
    shortCategory: 'Brand Identity',
    title: 'Branding & Creative Identity',
    tagline: 'Bespoke design systems, commercial motion graphics, and brand guidelines that command pricing power and prestige.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/branding.svg',
    deliverables: ['3D Visual Design Systems', 'Commercial Motion Graphics', 'Premium Brand Toolkits'],
    metric: '120+',
    metricLabel: 'Brand Identities Built',
    color: '#0B2093',
    href: '/services/creative-branding-services-in-india',
  },
  {
    id: 'social-media',
    num: '06',
    category: 'COMMUNITY & REELS ARCHITECTURE',
    categoryGroup: 'scale',
    shortCategory: 'Social Media',
    title: 'Social Media Marketing',
    tagline: 'High-production viral reels, commercial copywriting, and community management that builds an engaged local following.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/social-media.svg',
    deliverables: ['Viral Reels Production', 'Audience Growth Protocols', 'Multi-Platform Community'],
    metric: '+320%',
    metricLabel: 'Average Reach Lift',
    color: '#F59E0B',
    href: '/services/social-media-marketing-in-india',
  },
  {
    id: 'amazon-marketing',
    num: '07',
    category: 'AMAZON STORE REVENUE SCALE',
    categoryGroup: 'search',
    shortCategory: 'Amazon PPC',
    title: 'Amazon Marketing & PPC',
    tagline: 'Scale Amazon revenue with high-ROAS Sponsored Products, Sponsored Brands, A+ Content, and Buy Box optimization.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/ui-ux.svg',
    deliverables: ['Amazon Sponsored Ads (PPC)', 'A+ Content & Brand Store', 'Listing CRO & Buy Box Capture'],
    metric: '4.8X',
    metricLabel: 'Average Amazon ROAS',
    color: '#FF9900',
    href: '/services/amazon-marketing-services-in-india',
  },
  {
    id: 'ecommerce',
    num: '08',
    category: 'ONLINE STORE REVENUE ENGINE',
    categoryGroup: 'search',
    shortCategory: 'E-Commerce',
    title: 'E-Commerce Marketing & Scale',
    tagline: 'Scale Shopify and WooCommerce stores with automated abandoned cart sequences, dynamic catalog ads, and customer LTV growth.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/influencer-marketing.svg',
    deliverables: ['Shopify & WooCommerce CRO', 'Dynamic Product Catalogs', 'Repeat Purchase Funnels'],
    metric: '+185%',
    metricLabel: 'Average Cart Value Lift',
    color: '#06B6D4',
    href: '/services/ecommerce-marketing-services-in-india',
  },
  {
    id: 'performance',
    num: '09',
    category: 'CROSS-CHANNEL ATTRIBUTION',
    categoryGroup: 'paid',
    shortCategory: 'Full-Funnel Media',
    title: 'Full-Funnel Performance Marketing',
    tagline: 'Unified media buying across Google, Meta, and YouTube governed by strict unit economics modeling and CPA guardrails.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/digital-marketing.svg',
    deliverables: ['Multi-Touch Attribution', 'Automated Smart Bidding', 'CAC Compression Modeling'],
    metric: '8.4X',
    metricLabel: 'Peak Measured ROAS',
    color: '#0B2093',
    href: '/services/performance-marketing-in-india',
  },
  {
    id: 'automation',
    num: '10',
    category: 'LEAD PIPELINE AUTOMATION',
    categoryGroup: 'scale',
    shortCategory: 'AI Automation',
    title: 'AI & Workflow Automation',
    tagline: 'Autonomous WhatsApp conversational agents, self-healing CRM pipelines, and zero-latency lead dispatching that qualify buyers 24/7.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/content-strategy.svg',
    deliverables: ['WhatsApp Cloud API Bots', 'CRM Workflow Automation', 'Autonomous Multi-Agent Systems'],
    metric: '< 2s',
    metricLabel: 'First Response Time',
    color: '#0B2093',
    href: '/services/ai-automation-services-in-india',
  },
];

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/ns_services_graphic.png',
    alt: 'Marketing Copilot digital marketing strategy and revenue growth architecture in India',
    caption: 'Strategic Growth & Execution',
  },
  {
    id: 'slide-2',
    src: '/images/ns_services_graphic_slide_2.png',
    alt: 'Marketing Copilot performance marketing data and full-funnel digital solutions',
    caption: 'Performance & 10x ROI',
  },
  {
    id: 'slide-3',
    src: '/images/ns_services_graphic_slide_3.png',
    alt: 'Marketing Copilot creative branding, web development, and digital marketing execution',
    caption: 'Creative & Performance Marketing',
  },
];

const sprintPhases = [
  {
    step: 1,
    num: '01',
    phaseName: 'Forensic Audit',
    duration: 'Days 1–14',
    badge: 'Foundation',
    headline: 'Forensic Audit & Moat Discovery',
    summary: 'We eliminate technical crawl waste, map competitor keyword gaps, and calibrate end-to-end attribution.',
    deliverables: [
      '1,000+ page technical crawl & Schema.org JSON-LD hierarchy',
      'Target market commercial competitor keyword gap map',
      'End-to-end lead attribution tracking & pixel calibration',
    ],
    metricValue: '100%',
    metricLabel: 'Crawl Health Guaranteed',
    sla: '14-Day Delivery SLA',
  },
  {
    step: 2,
    num: '02',
    phaseName: 'Speed & Creative',
    duration: 'Days 15–30',
    badge: 'Production',
    headline: 'Next.js Speed & Creative Engine',
    summary: 'We build ultra-fast landing pages with sub-second LCP and commercial videography hooks that prevent bounce.',
    deliverables: [
      'Next.js server-rendered sub-second page performance (<0.8s LCP)',
      'High-converting commercial video hooks & viral reels production',
      'A/B tested mobile forms & high-intent WhatsApp conversion anchors',
    ],
    metricValue: '99/100',
    metricLabel: 'Mobile Speed SLA',
    sla: 'Under 0.9s LCP SLA',
  },
  {
    step: 3,
    num: '03',
    phaseName: 'SERP & Paid Scale',
    duration: 'Days 31–60',
    badge: 'Acquisition',
    headline: 'Map 3-Pack Dominance & Paid Scale',
    summary: 'We pin your Google Business Profile into the top 3 and deploy negative-shielded search ads to capture active buyers.',
    deliverables: [
      'Targeted Google Maps 3-Pack pin ranking across your service locations',
      'Negative keyword shielding on Google Search & PMax campaigns',
      'Dynamic Meta catalog retargeting & high-intent instant lead forms',
    ],
    metricValue: 'Top 3',
    metricLabel: 'Guaranteed Map 3-Pack',
    sla: 'Daily Bid Optimization',
  },
  {
    step: 4,
    num: '04',
    phaseName: 'Compounding Moat',
    duration: 'Days 61–90+',
    badge: 'Compounding',
    headline: 'Compounding Scale & Pipeline Moat',
    summary: 'Every phone call and form is tracked to the exact keyword, compounding monthly inquiries while slashing CAC.',
    deliverables: [
      'Direct phone call & WhatsApp conversion attribution tracking',
      'Real-time Looker Studio executive telemetry dashboard',
      'Topical authority clustering for perpetual organic compound lift',
    ],
    metricValue: '+240%',
    metricLabel: 'Verified Inbound Calls',
    sla: 'Weekly Retrospectives',
  },
];

const corridors = [
  {
    hub: 'National Metro Clusters (Delhi NCR, Mumbai, Bengaluru)',
    tag: 'Enterprise & High-Volume Intent',
    icon: '🏙️',
    stat: 'High-LTV Commercial Intent',
    desc: 'Dense corporate hubs, startup clusters, and competitive retail markets requiring sophisticated full-funnel paid media and organic SERP authority.',
  },
  {
    hub: 'Tier 1 Growth Engines (Hyderabad, Pune, Chennai, Kolkata)',
    tag: 'Rapidly Scaling Urban Markets',
    icon: '🚀',
    stat: 'High-ROAS Conversion Density',
    desc: 'Fast-growing commercial centers with massive digital adoption across healthcare, education, real estate, and B2B services.',
  },
  {
    hub: 'Pan-India E-Commerce & D2C Footprint',
    tag: 'Nationwide Direct-to-Consumer',
    icon: '📦',
    stat: 'Pan-India Postal Reach',
    desc: 'Nationwide customer acquisition strategies optimized for low CAC, high average order values, and automated WhatsApp repeat retention funnels.',
  },
  {
    hub: 'High-Growth Tier 2 & Tier 3 Regional Markets',
    tag: 'Untapped Opportunity Corridors',
    icon: '📈',
    stat: 'Lower CPC & Rising Digital Purchasing',
    desc: 'Emerging regional hubs with skyrocketing mobile search volumes, lower competitive saturation, and strong local buying power.',
  },
  {
    hub: 'Hyperlocal Multi-Location Service Networks',
    tag: 'Pin-Code & Map Pack Precision',
    icon: '📍',
    stat: 'Sub-3km High-Intent Radius',
    desc: 'Clinics, retail outlets, showrooms, and local institutions dominating Google Maps 3-Pack rankings across multiple designated territories.',
  },
  {
    hub: 'Bhubaneswar & Odisha Market Expertise',
    tag: 'Regional Advantage & Studio HQ',
    icon: '🏛️',
    stat: 'Deep Regional Nuance & Ground Presence',
    desc: 'Our home base and testing ground, combining deep regional consumer psychology with enterprise digital capabilities for Odisha brands.',
  },
];

const comparisonPoints = [
  {
    id: 'attribution',
    shortTab: 'Attribution & ROI',
    category: 'REVENUE GOVERNANCE',
    feature: 'Performance Accountability',
    icon: '🎯',
    traditional: 'Vanity impressions & monthly PDFs with zero bottom-line accountability',
    traditionalMetric: '0% Attributed ROI',
    traditionalTag: 'Vanity Impressions Trap',
    copilot: 'Strict phone call, WhatsApp lead, and real-time attributed revenue tracking',
    copilotMetric: '100% Attributed Pipeline',
    copilotTag: 'Looker Studio Real-Time Feed',
    slaBadge: '100% Attribution SLA',
  },
  {
    id: 'speed',
    shortTab: 'Core Web Vitals',
    category: 'CORE WEB VITALS',
    feature: 'Website & Landing Speed',
    icon: '⚡',
    traditional: 'Slow WordPress templates with 4–7 second mobile loading times',
    traditionalMetric: '4.8s Avg Mobile LCP',
    traditionalTag: 'High Mobile Bounce Rate',
    copilot: 'Hand-crafted sub-second Next.js 15 architecture (PageSpeed 95+ guaranteed)',
    copilotMetric: '<0.8s Sub-Second LCP',
    copilotTag: '99/100 Core Web Vitals',
    slaBadge: 'Sub-Second TTFB',
  },
  {
    id: 'cadence',
    shortTab: 'Sprint Cadence',
    category: 'DELIVERY CADENCE',
    feature: 'Sprint Methodology',
    icon: '🚀',
    traditional: 'Stagnant monthly retainers with unmonitored autopilot campaigns',
    traditionalMetric: 'Slow Retainer Cycles',
    traditionalTag: 'Set-and-Forget Autopilot',
    copilot: 'Agile 14-day sprints with transparent weekly milestone reviews',
    copilotMetric: '14-Day Rapid Sprints',
    copilotTag: 'Continuous Optimization',
    slaBadge: '14-Day Sprint Loop',
  },
  {
    id: 'talent',
    shortTab: 'Senior Talent',
    category: 'SENIOR TALENT',
    feature: 'Execution Team',
    icon: '🛡️',
    traditional: 'Junior account managers acting as slow middlemen',
    traditionalMetric: 'Junior Account Middlemen',
    traditionalTag: 'Communication Bottlenecks',
    copilot: 'Direct access to senior growth architects and media buyers in India',
    copilotMetric: 'Principal Architects Only',
    copilotTag: 'Direct Studio Slack Access',
    slaBadge: 'Zero Middlemen',
  },
  {
    id: 'creative',
    shortTab: 'Cinema Creative',
    category: 'CINEMATIC CREATIVE',
    feature: 'Creative Quality & Hooks',
    icon: '💎',
    traditional: 'Generic Canva templates that get scrolled past instantly',
    traditionalMetric: 'Stock Template Visuals',
    traditionalTag: 'Zero Brand Memorability',
    copilot: 'High-production commercial cinematography, 3D motion, and viral hooks',
    copilotMetric: '4K Commercial Quality',
    copilotTag: 'In-House Studio Production',
    slaBadge: 'Cinema 4K Quality',
  },
];

interface MarTechTool {
  name: string;
  category: string;
  badgeColor: string;
  status: string;
  description: string;
  iconSvg: React.ReactNode;
}

const martechTools: MarTechTool[] = [
  {
    name: 'Google Search Console',
    category: 'Crawl & Core Web Vitals',
    badgeColor: '#4285F4',
    status: 'Real-Time API Sync',
    description: 'Direct API indexing telemetry, server log crawl monitoring, and location-specific keyword position tracking across your target Indian markets.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <path fill="#FBBC04" d="m11.081 30.527-4.72 4.721a.933.933 0 0 1-1.317 0l-.292-.292a.933.933 0 0 1 0-1.316l4.72-4.721a.933.933 0 0 1 1.318 0l.291.291a.93.93 0 0 1 0 1.317"/>
        <path fill="#4285F4" d="M23.75 32.5h6.042a6.04 6.04 0 0 0 6.041-6.042v-16.25a6.04 6.04 0 0 0-6.041-6.041 6.04 6.04 0 0 0-6.042 6.041z"/>
        <path fill="#FBBC04" d="M13.75 32.5a6.04 6.04 0 0 0 6.042-6.042 6.04 6.04 0 0 0-6.042-6.041 6.04 6.04 0 0 0-6.042 6.041A6.04 6.04 0 0 0 13.75 32.5"/>
        <path fill="#34A853" d="M27.97 32.5h-5.887a6.04 6.04 0 0 1-6.041-6.042v-7.916a6.04 6.04 0 0 1 6.041-6.042 6.04 6.04 0 0 1 6.042 6.042v13.804a.154.154 0 0 1-.154.154z"/>
        <path fill="#1967D2" d="M28.125 32.346V18.542a6.04 6.04 0 0 0-4.375-5.807V32.5h4.22a.154.154 0 0 0 .155-.154"/>
        <path fill="#EA4335" d="M19.792 26.575a6.04 6.04 0 0 0-3.75-5.59v5.59c0 1.72.72 3.273 1.875 4.373a6.02 6.02 0 0 0 1.875-4.373"/>
      </svg>
    ),
  },
  {
    name: 'Google Ads Manager',
    category: 'Commercial Search & PMax',
    badgeColor: '#1A73E8',
    status: 'Smart Bidding Active',
    description: 'Automated target-CPA optimization, negative keyword shields, and click-to-call direct lead routing across your targeted service areas in India.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 250 230" fill="none">
        <path fill="#4285F4" d="M85.9 28.6c2.4-6.3 5.7-12.1 10.6-16.8c19.6-19.1 52-14.3 65.3 9.7c10 18.2 20.6 36 30.9 54c17.2 29.9 34.6 59.8 51.6 89.8c14.3 25.1-1.2 56.8-29.6 61.1c-17.4 2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8-0.3-0.6-0.7-1.1-1.1-1.6-1.6-1.3-2.3-3.2-3.3-4.9-6.7-11.8-13.6-23.5-20.3-35.2-4.3-7.6-8.8-15.1-13.1-22.7-3.9-6.8-5.7-14.2-5.5-22C83.6 36.2 84.1 32.2 85.9 28.6z"/>
        <path fill="#FBBC04" d="M85.9 28.6c-0.9 3.6-1.7 7.2-1.9 11c-0.3 8.4 1.8 16.2 6 23.5C101 82 112 101 122.9 120c1 1.7 1.8 3.4 2.8 5-6 10.4-12 20.7-18.1 31.1-8.4 14.5-16.8 29.1-25.3 43.6-0.4 0-0.5-0.2-0.6-0.5-0.1-0.8 0.2-1.5 0.4-2.3 4.1-15 0.7-28.3-9.6-39.7-6.3-6.9-14.3-10.8-23.5-12.1-12-1.7-22.6 1.4-32.1 8.9-1.7 1.3-2.8 3.2-4.8 4.2-0.4 0-0.6-0.2-0.7-0.5 4.8-8.3 9.5-16.6 14.3-24.9C45.5 98.4 65.3 64 85.2 29.7c0.2-0.4 0.5-0.7 0.7-1.1z"/>
        <path fill="#34A853" d="M11.8 158c1.9-1.7 3.7-3.5 5.7-5.1c24.3-19.2 60.8-5.3 66.1 25.1c1.3 7.3 0.6 14.3-1.6 21.3-0.1 0.6-0.2 1.1-0.4 1.7-0.9 1.6-1.7 3.3-2.7 4.9-8.9 14.7-22 22-39.2 20.9C20 225.4 4.5 210.6 1.8 191c-1.3-9.5 0.6-18.4 5.5-26.6 1-1.8 2.2-3.4 3.3-5.2C11.1 158.8 10.9 158 11.8 158z"/>
      </svg>
    ),
  },
  {
    name: 'Meta Ads Manager',
    category: 'Conversions API & Paid Social',
    badgeColor: '#0081FB',
    status: 'Server CAPI Active',
    description: 'Server-side CAPI event streaming that bypasses browser ad-blockers for 100% accurate buyer attribution.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 280 195" fill="none">
        <defs>
          <linearGradient id="metaOfficialGrad1" x1="61" y1="117" x2="259" y2="127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0064E1" offset="0"/>
            <stop stopColor="#0064E1" offset="0.4"/>
            <stop stopColor="#0073EE" offset="0.83"/>
            <stop stopColor="#0082FB" offset="1"/>
          </linearGradient>
          <linearGradient id="metaOfficialGrad2" x1="45" y1="139" x2="45" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0082FB" offset="0"/>
            <stop stopColor="#0064E0" offset="1"/>
          </linearGradient>
        </defs>
        <path fill="#0081FB" d="M31.06 125.96c0 10.98 2.41 19.41 5.56 24.51 4.13 6.68 10.29 9.51 16.57 9.51 8.1 0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07 0 41.14 12.21 56.5 35.11 16.81 25.08 24.97 56.67 24.97 89.27 0 19.38-3.82 33.62-10.32 44.87-6.28 10.88-18.52 21.75-39.11 21.75l0-31.02c17.63 0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85 0-26.8 11.2-40.23 31.17-7.14 10.61-14.47 23.54-22.7 38.13l-9.06 16.05c-18.2 32.27-22.81 39.62-31.91 51.75-15.95 21.24-29.57 29.29-47.5 29.29-21.27 0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z"/>
        <path fill="url(#metaOfficialGrad1)" d="M24.49 37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65 0 27.22 4.04 41.39 15.61 15.5 12.65 32.02 33.48 52.63 67.81l7.39 12.32c17.84 29.72 27.99 45.01 33.93 52.22 7.64 9.26 12.99 12.02 19.94 12.02 17.63 0 22.03-16.2 22.03-34.74l27.4-0.86c0 19.38-3.82 33.62-10.32 44.87-6.28 10.88-18.52 21.75-39.11 21.75-12.8 0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27 0-22.69 8.61-31.41 21.78z"/>
        <path fill="url(#metaOfficialGrad2)" d="M82.35 31.23c-12.27 0-22.69 8.61-31.41 21.78-12.33 18.61-19.88 46.33-19.88 72.95 0 10.98 2.41 19.41 5.56 24.51l-26.48 17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z"/>
      </svg>
    ),
  },
  {
    name: 'Google Analytics 4',
    category: 'Multi-Touch Revenue Attribution',
    badgeColor: '#E37400',
    status: 'Custom Event Pipeline',
    description: 'Full-funnel attribution telemetry tracking every click from initial search to closed WhatsApp client deal.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
        <path fill="#F9AB00" d="M45.3 41.6c0 3.2-2.6 5.9-5.8 5.9-0.2 0-0.5 0-0.7 0-3-0.4-5.2-3.1-5.1-6.1V6.6c-0.1-3 2.1-5.6 5.1-6.1 3.2-0.4 6.1 1.9 6.5 5.1 0 0.2 0 0.5 0 0.7V41.6z"/>
        <path fill="#E37400" d="M8.6 35.9c3.2 0 5.8 2.6 5.8 5.8 0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8c0 0 0 0 0 0-3.2-3.2-0.5-5.8 2.7-5.8zm15.3-17.7c-3.2 0.2-5.7 2.9-5.7 6.1V40c0 4.2 1.9 6.8 4.6 7.4 3.2 0.6 6.2-1.4 6.9-4.6 0.1-0.4 0.1-0.8 0.1-1.2V24.1c0-3.2-2.6-5.9-5.8-5.9-0.1 0-0.1 0-0.1 0z"/>
      </svg>
    ),
  },
  {
    name: 'Next.js 15 & React',
    category: 'Sub-Second Web Architecture',
    badgeColor: '#000000',
    status: 'PageSpeed 99/100 SLA',
    description: 'Ultra-fast server-rendered React applications with under 800ms LCP for maximum conversion momentum.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 512 512" fill="none">
        <defs>
          <linearGradient id="nextOfficialGrad1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)">
            <stop offset="0" stopColor="#FFFFFF"/>
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="nextOfficialGrad2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)">
            <stop offset="0" stopColor="#FFFFFF"/>
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <g transform="translate(0.722 0.64) scale(6.375)">
          <circle cx="40" cy="40" r="40" fill="#000000"/>
          <path d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z" fill="url(#nextOfficialGrad1)"/>
          <path fill="url(#nextOfficialGrad2)" d="M51.111 24h5.333v32h-5.333z"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Looker Studio',
    category: 'Executive Live Dashboards',
    badgeColor: '#1A73E8',
    status: '24/7 Client Transparency',
    description: 'Live interactive client dashboards with zero PDF friction—displaying every rupee spent and lead generated.',
    iconSvg: (
      <svg width="34" height="34" viewBox="-10 0 280 415" fill="none">
        <path d="M127.128 0c-13.33 0-25.572 7.354-31.838 19.127-6.265 11.766-5.534 26.028 1.902 37.092l15.414-15.392c-.51-1.535-.767-3.143-.761-4.76 0-8.405 6.813-15.218 15.218-15.218s15.218 6.813 15.218 15.218-6.813 15.218-15.218 15.218c-1.61.003-3.21-.254-4.739-.761L106.932 65.92c12.818 8.693 29.754 8.232 42.08-1.145 12.327-9.377 17.29-25.577 12.333-40.25-4.958-14.672-18.73-24.542-34.217-24.525z" fill="#34A853"/>
        <path d="M112.78 105.112c.024-12.183-3.922-24.042-11.239-33.784L81.54 91.307c6.255 11.44 4.004 25.66-5.478 34.61l10.87 26.566c16.105-10.372 25.84-28.214 25.848-47.371z" fill="#FBBC04"/>
        <path d="M56.887 133.787h-.522c-12.268 0-23.18-7.797-27.153-19.404-3.973-11.606-.128-24.455 9.567-31.972 9.695-7.517 23.096-8.04 33.347-1.301l19.805-19.805C72.674 45.612 45.478 44.408 24.915 58.257 4.352 72.106-4.754 97.761 2.475 121.475c7.23 23.714 29.098 39.926 53.89 39.949 3.826.002 7.642-.377 11.392-1.13l-10.87-26.507z" fill="#EA4335"/>
        <path d="M127.89 156.766c-12.518-.013-24.97 1.81-36.958 5.413l15.848 38.719c6.899-1.71 13.98-2.571 21.088-2.565 41.183.012 76.623 29.112 84.648 69.506 8.025 40.393-13.6 80.831-51.65 96.585-38.051 15.754-81.932 2.437-104.809-31.808-22.877-34.244-18.38-79.88 10.742-109 6.077-6.058 13.014-11.186 20.588-15.218L71.714 169.788C13.287 198.403-14.377 266.297 7.415 327.596c21.792 61.3 86.105 96.497 149.483 81.809 63.378-14.688 105.653-74.586 98.26-139.223C247.764 205.546 193.056 156.741 128 156.744l-.11.022z" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    name: 'Semrush & Ahrefs',
    category: 'Competitive SERP Intelligence',
    badgeColor: '#FF642D',
    status: 'Daily Rank Tracking',
    description: 'Monitors competitor keyword bidding, backlink velocity, and high-intent commercial keyword gaps across your target Indian markets.',
    iconSvg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path fill="#FF642D" d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/>
      </svg>
    ),
  },
  {
    name: 'Cloudflare Edge CDN',
    category: 'Sub-10ms TTFB & Security',
    badgeColor: '#F38020',
    status: 'Enterprise Edge Shield',
    description: 'Edge-cached routing, AVIF next-gen image compression, and enterprise WAF protection against DDoS traffic.',
    iconSvg: (
      <svg width="34" height="34" viewBox="50 5 49 18" fill="none">
        <path fill="#F48120" d="M84.2 20.4a2.86 2.86 0 0 0-.3-2.6 3.09 3.09 0 0 0-2.1-1.1l-17.4-.2c-.1 0-.2-.1-.3-.1a.19.19 0 0 1 0-.3c.1-.2.2-.3.4-.3L82 15.6a6.29 6.29 0 0 0 5.1-3.8l1-2.6c0-.1.1-.2 0-.3A11.4 11.4 0 0 0 66.2 7.7a5.46 5.46 0 0 0-3.6-1 5.21 5.21 0 0 0-4.6 4.6 5.46 5.46 0 0 0 .1 1.8 7.3 7.3 0 0 0-7.1 7.3 4.1 4.1 0 0 0 .1 1.1.32.32 0 0 0 .3.3H83.5c.2 0 .4-.1.4-.3z"/>
        <path fill="#FAAD3F" d="M89.7 9.2h-.5c-.1 0-.2.1-.3.2l-.7 2.4a2.86 2.86 0 0 0 .3 2.6 3.09 3.09 0 0 0 2.1 1.1l3.7.2c.1 0 .2.1.3.1a.19.19 0 0 1 0 .3c-.1.2-.2.3-.4.3l-3.8.2a6.29 6.29 0 0 0-5.1 3.8l-.2.9c-.1.1 0 .3.2.3H98.5a.27.27 0 0 0 .3-.3 10.87 10.87 0 0 0 .4-2.6 9.56 9.56 0 0 0-9.5-9.5"/>
      </svg>
    ),
  },
];

const servicesFaqs = [
  {
    q: 'How do your 10 services work together as an integrated system?',
    a: 'Rather than running disconnected campaigns, we engineer a single unified flywheel: Next.js provides sub-second speed that Google rewards with higher rankings, creative videography lowers your cost per click on Meta and Google Ads, and targeted SEO captures high-intent customers across your designated markets in India.',
  },
  {
    q: 'How fast will my business start seeing qualified leads and phone calls?',
    a: 'Paid campaigns (Google Ads and Meta Ads) begin generating qualified phone calls and WhatsApp inquiries within 48 to 72 hours of launch. High-speed local Google Maps 3-Pack rankings typically establish dominance within 30 to 60 days, while organic SEO compounds over 60 to 90 days.',
  },
  {
    q: 'Do you require long-term binding lock-in contracts?',
    a: 'No. We operate in 90-day growth sprints backed by transparent weekly retrospectives and live Looker Studio reporting. We believe our performance and attributed revenue pipeline should be the only reason you stay with us.',
  },
  {
    q: 'Can we visit your team in Bhubaneswar for strategy sessions?',
    a: 'Yes. Our studio is located at Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar. We regularly host in-person strategy reviews, creative sprint planning, and quarterly growth roadmapping with our client partners.',
  },
  {
    q: 'How do you track and verify that leads are genuine?',
    a: 'We implement dynamic call tracking, Google Analytics 4 conversion events, and encrypted WhatsApp routing. You receive an executive dashboard showing exact recording timestamps, caller phone numbers, and the specific keyword or ad that triggered each lead.',
  },
];

export default function ServicesPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'search' | 'paid' | 'web' | 'scale'>('all');
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [activePhase, setActivePhase] = useState(1);
  const [orbAngle, setOrbAngle] = useState(0);
  const [isSprintPlaying, setIsSprintPlaying] = useState(true);
  const [trafficVal, setTrafficVal] = useState<number>(10000);
  const [dealSize, setDealSize] = useState<number>(50000);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [compareTab, setCompareTab] = useState<number | 'all'>('all');
  const [hoveredCompareIndex, setHoveredCompareIndex] = useState<number | null>(null);
  const [activeCorridorIndex, setActiveCorridorIndex] = useState<number>(0);
  const [showAllServices, setShowAllServices] = useState(false);

  // Auto-advance hero slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Living animated progression for Section 4 Sprint Framework (smooth auto rotation that never stops)
  useEffect(() => {
    if (!isSprintPlaying) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => {
        const next = (prev % sprintPhases.length) + 1;
        setOrbAngle((curr) => curr + 90);
        return next;
      });
    }, 3800);
    return () => clearInterval(interval);
  }, [isSprintPlaying, activePhase]);

  // Smoothly sends the glowing ball directly to the selected node on user click, and keeps moving itself smoothly
  const handleSelectPhase = (targetPhase: number) => {
    setActivePhase(targetPhase);
    setOrbAngle((prev) => {
      const targetMod = (targetPhase - 1) * 90;
      const currentMod = ((prev % 360) + 360) % 360;
      let diff = targetMod - currentMod;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return prev + diff;
    });
    // Keep auto-playing so the glowing ball continues moving itself smoothly after user interaction
    setIsSprintPlaying(true);
  };

  // Filtered services for Section 2 Showcase
  const filteredServices = useMemo(() => {
    if (activeCategoryFilter === 'all') return serviceCatalog;
    return serviceCatalog.filter((s) => s.categoryGroup === activeCategoryFilter);
  }, [activeCategoryFilter]);

  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 4);
  const hasMore = filteredServices.length > 4;

  // Reset active service and collapse when filter changes
  const handleCategoryChange = (cat: 'all' | 'search' | 'paid' | 'web' | 'scale') => {
    setActiveCategoryFilter(cat);
    setActiveServiceIndex(0);
    setShowAllServices(false);
  };

  const activeService = displayedServices[activeServiceIndex] || displayedServices[0];

  const currentCorridor = corridors[activeCorridorIndex] || corridors[0];
  const currentPhase = sprintPhases[activePhase - 1] || sprintPhases[0];

  // Dynamic calculations for Section 5 Calculator with deal size multiplier
  const calcStats = useMemo(() => {
    const monthlyCalls = Math.round(trafficVal * 0.048);
    const savedAdSpend = Math.max(0.2, (trafficVal * 42) / 100000);
    const estPipeline = (monthlyCalls * dealSize * 0.28) / 100000;
    const multiplier = ((estPipeline / savedAdSpend) * 1.35).toFixed(1);
    return {
      calls: monthlyCalls.toLocaleString('en-IN'),
      savedPpc: `₹${savedAdSpend.toFixed(1)} Lakhs`,
      pipeline: `₹${estPipeline.toFixed(1)} Lakhs`,
      multiplier: `${multiplier}X`,
    };
  }, [trafficVal, dealSize]);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className={styles.page}>
        {/* Soft Ambient Background Glows */}
        <div className={styles.ambientGlowTop} />
        <div className={styles.ambientGlowMid} />

        {/* ══════════════════════════════════════════════════
            SECTION 1: HERO (CENTERED CINEMATIC WITH TELEMETRY RIBBON)
           ══════════════════════════════════════════════════ */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroCenter}>
              <ScrollReveal className={styles.heroReveal}>
                <div className={styles.heroEyebrowPill}>
                  <span className={styles.emeraldPulseDot} />
                  <span>INTEGRATED REVENUE ENGINE • PAN-INDIA GROWTH ARCHITECTURE</span>
                </div>

                <h1 className={`display-hero ${styles.heroTitle}`}>
                  Every Discipline Connected.{' '}
                  <span className={`accent-gradient ${styles.heroAccent}`}>Compounding Every Rupee.</span>
                </h1>

                <div className={styles.heroSub}>
                  <p>
                    We combine search, web development, creative, paid media, and automation into an integrated growth system designed to help businesses across India generate stronger visibility, qualified leads, and measurable revenue.
                  </p>
                </div>

                {/* Revolving Glowing Border Beam CTA Buttons */}
                <div className={styles.heroCtaWrapper}>
                  <BeamButton href="/contact" label="Schedule Studio Session" size="lg" />
                  <a href="#growth-architecture" className={styles.heroSecondaryBtn}>
                    <span>Explore 10 Disciplines</span>
                    <span>↓</span>
                  </a>
                </div>

                {/* Trust Proof Strip with Avatars & 4.9/5 Rating */}
                <div className={styles.trustStrip}>
                  <div className={styles.trustAvatars}>
                    <span className={styles.trustAvatar}>MC</span>
                    <span className={styles.trustAvatar}>BB</span>
                    <span className={styles.trustAvatar}>OD</span>
                    <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                  </div>
                  <div className={styles.trustStars}>★★★★★</div>
                  <div className={styles.trustLabel}>Rated 4.9/5 by 50+ Brands Across India</div>
                </div>
              </ScrollReveal>

              {/* Horizontal Telemetry Ribbon */}
              <div className={styles.telemetryRibbon}>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>10 Practices</span>
                  <span className={styles.tLabel}>Full Stack Mastery</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>6.8X</span>
                  <span className={styles.tLabel}>Peak Commercial ROAS</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>&lt; 0.9s</span>
                  <span className={styles.tLabel}>Web Engineering SLA</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>50+ Brands</span>
                  <span className={styles.tLabel}>Scaled Across India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 2: WHAT WE DO — INTEGRATED GROWTH PRACTICES
            (Premium Split-View Interactive Showcase)
           ══════════════════════════════════════════════════ */}
        <section className={styles.architectureSection} id="growth-architecture">
          <div className="container">
            <ScrollReveal>
              {/* Section Header */}
              <div className={styles.whatWeDoHeader}>
                <div className={styles.whatWeDoLabel}>
                  <span className={styles.sectionDot} />
                  <span>PRECISION GROWTH ARCHITECTURE</span>
                </div>
                <div className={styles.whatWeDoDivider} />
                <div className={styles.whatWeDoMeta}>What We Do · Integrated Growth Practices</div>
              </div>
              <h2 className={`display-lg ${styles.sectionTitle}`}>
                10 Disciplines. <span className="accent-gradient">One Unified Growth System.</span>
              </h2>
              <p className={styles.sectionSub}>
                Every service is calibrated to compound with the next — from search authority to paid acquisition to conversion engineering. Select a practice to explore.
              </p>
            </ScrollReveal>

            {/* Category Segmented Control */}
            <div className={styles.showcaseSegmentBar}>
              {[
                { key: 'all', label: 'All Practices', count: 10, icon: '◈' },
                { key: 'search', label: 'Search & AI', count: 3, icon: '⊙' },
                { key: 'paid', label: 'Performance', count: 3, icon: '◎' },
                { key: 'web', label: 'Web & Brand', count: 2, icon: '◇' },
                { key: 'scale', label: 'Scale & Automation', count: 2, icon: '⊕' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleCategoryChange(tab.key as 'all' | 'search' | 'paid' | 'web' | 'scale')}
                  className={`${styles.segmentTab} ${activeCategoryFilter === tab.key ? styles.segmentTabActive : ''}`}
                >
                  <span className={styles.segmentTabIcon}>{tab.icon}</span>
                  <span className={styles.segmentTabLabel}>{tab.label}</span>
                  <span className={styles.segmentTabCount}>{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Vertical List Cards */}
            <div className={styles.practiceListStack}>
              {displayedServices.map((service, idx) => (
                <div
                  key={service.id}
                  className={styles.practiceListCard}
                  style={{ '--card-accent': service.color } as React.CSSProperties}
                >
                  {/* Left accent border */}
                  <div className={styles.practiceCardBorder} style={{ background: service.color }} />

                  {/* Number */}
                  <div className={styles.practiceCardNum}>
                    <span style={{ color: service.color }}>{service.num}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={styles.practiceCardIcon}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}18, ${service.color}08)`,
                      borderColor: `${service.color}30`,
                      boxShadow: `0 4px 14px ${service.color}20, inset 0 1px 0 rgba(255,255,255,0.9)`,
                    }}
                  >
                    <Image src={service.iconSrc} alt="" width={26} height={26} className={styles.practiceIconImg} />
                  </div>

                  {/* Main Content */}
                  <div className={styles.practiceCardBody}>
                    <span
                      className={styles.practiceCardCat}
                      style={{ color: service.color }}
                    >
                      {service.shortCategory.toUpperCase()} &nbsp;·&nbsp; {service.category}
                    </span>
                    <h3 className={styles.practiceCardTitle}>{service.title}</h3>
                    <p className={styles.practiceCardDesc}>{service.tagline}</p>
                    <div className={styles.practiceCardChips}>
                      {service.deliverables.map((d, i) => (
                        <span key={i} className={styles.practiceChip}>{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metric + CTA */}
                  <div className={styles.practiceCardRight}>
                    <div className={styles.practiceMetricBox}>
                      <span className={styles.practiceMetricVal} style={{ color: service.color }}>{service.metric}</span>
                      <span className={styles.practiceMetricLabel}>{service.metricLabel}</span>
                    </div>
                    <Link
                      href={service.href}
                      className={styles.practiceExploreLink}
                      aria-label={`Explore ${service.title} Practice`}
                    >
                      <span>Explore Practice</span>
                      <span className={styles.practiceExploreCaret}>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* See More / See Less toggle */}
            {hasMore && (
              <div className={styles.seeMoreBtnWrap}>
                <BeamButton
                  onClick={() => setShowAllServices((v) => !v)}
                  label={showAllServices ? 'Show Fewer Practices ↑' : `See ${filteredServices.length - 4} More Practices ↓`}
                  size="md"
                  variant="outline"
                  arrow={false}
                />
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 3: BHUBANESWAR STUDIO & PROXIMITY MAP (POSITION #3)
           ══════════════════════════════════════════════════ */}
        <QuickConnectMapSection />

        {/* ══════════════════════════════════════════════════
            SECTION 4: BATTLE-TESTED SPRINT FRAMEWORK (CIRCULAR SPRINT ENGINE)
           ══════════════════════════════════════════════════ */}
        <section className={styles.circularSprintSection} id="sprint-architecture">
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className={styles.sprintDot} />
                <span>BATTLE-TESTED SPRINT FRAMEWORK</span>
              </div>
              <h2 className={`display-lg ${styles.sprintSectionTitle}`}>
                The 4-Phase <span className="accent-gradient">Circular Sprint Engine</span>
              </h2>
              <p className={styles.sprintSectionSub}>
                A continuous 90-day growth loop engineered for predictable customer acquisition with zero guesswork.
              </p>
            </ScrollReveal>

            <div className={styles.circularSprintGrid}>
              {/* Left Column: Interactive Circular Orbital Dial */}
              <div className={styles.orbitalStageCol}>
                <div className={styles.orbitalDial}>
                  {/* SVG Orbit Track with Animated Active Progress Arc */}
                  <svg className={styles.orbitSvg} viewBox="0 0 380 380">
                    <defs>
                      <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0B2093" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#2563EB" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                    <circle cx="190" cy="190" r="135" className={styles.orbitTrackBase} />
                    <circle
                      cx="190"
                      cy="190"
                      r="135"
                      className={styles.orbitTrackActiveArc}
                      stroke="url(#orbitGradient)"
                      strokeDasharray="848.23"
                      strokeDashoffset={848.23 - (activePhase / 4) * 848.23}
                      transform="rotate(-90 190 190)"
                    />
                  </svg>

                  {/* Smooth Revolving Energy Orb Travelling Directly in the Circular Path of the Steps */}
                  <div 
                    className={styles.revolvingPathTrack}
                    style={{ transform: `rotate(${orbAngle}deg)` }}
                  >
                    <div className={styles.revolvingOrbBall}>
                      <span className={styles.orbBallCore} />
                      <span className={styles.orbBallHalo} />
                      <span className={styles.orbBallCometTail} />
                    </div>
                  </div>

                  {/* Clean Executive Telemetry Medallion Hub (Zero Clock Hands/Needles) */}
                  <div className={styles.orbitCenterHub}>
                    <div className={styles.hubInner}>
                      <span className={styles.hubPhaseTag}>PHASE {currentPhase.num} OF 04</span>
                      <span className={styles.hubMetricValue}>{currentPhase.metricValue}</span>
                      <span className={styles.hubMetricLabel}>{currentPhase.metricLabel}</span>
                      <div className={styles.hubLiveBadge}>
                        <span className={styles.hubLiveDot} />
                        <span>Active Sprint Loop</span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Circular Nodes Positioned on the Perimeter */}
                  {/* Node 1: Top (12 o'clock) */}
                  <button
                    type="button"
                    onClick={() => handleSelectPhase(1)}
                    className={`${styles.orbitNode} ${styles.orbitNodeTop} ${activePhase === 1 ? styles.orbitNodeActive : ''} ${activePhase > 1 ? styles.orbitNodePast : ''}`}
                    aria-label="Phase 1: Forensic Audit"
                  >
                    {activePhase === 1 && <span className={styles.nodeRippleWave} />}
                    <span className={styles.nodeNum}>{activePhase > 1 ? '✓' : '01'}</span>
                    <span className={styles.nodeTooltip}>01 Audit</span>
                  </button>

                  {/* Node 2: Right (3 o'clock) */}
                  <button
                    type="button"
                    onClick={() => handleSelectPhase(2)}
                    className={`${styles.orbitNode} ${styles.orbitNodeRight} ${activePhase === 2 ? styles.orbitNodeActive : ''} ${activePhase > 2 ? styles.orbitNodePast : ''}`}
                    aria-label="Phase 2: Next.js Speed"
                  >
                    {activePhase === 2 && <span className={styles.nodeRippleWave} />}
                    <span className={styles.nodeNum}>{activePhase > 2 ? '✓' : '02'}</span>
                    <span className={styles.nodeTooltip}>02 Speed</span>
                  </button>

                  {/* Node 3: Bottom (6 o'clock) */}
                  <button
                    type="button"
                    onClick={() => handleSelectPhase(3)}
                    className={`${styles.orbitNode} ${styles.orbitNodeBottom} ${activePhase === 3 ? styles.orbitNodeActive : ''} ${activePhase > 3 ? styles.orbitNodePast : ''}`}
                    aria-label="Phase 3: SERP Scale"
                  >
                    {activePhase === 3 && <span className={styles.nodeRippleWave} />}
                    <span className={styles.nodeNum}>{activePhase > 3 ? '✓' : '03'}</span>
                    <span className={styles.nodeTooltip}>03 Scale</span>
                  </button>

                  {/* Node 4: Left (9 o'clock) */}
                  <button
                    type="button"
                    onClick={() => handleSelectPhase(4)}
                    className={`${styles.orbitNode} ${styles.orbitNodeLeft} ${activePhase === 4 ? styles.orbitNodeActive : ''}`}
                    aria-label="Phase 4: Moat Scale"
                  >
                    {activePhase === 4 && <span className={styles.nodeRippleWave} />}
                    <span className={styles.nodeNum}>04</span>
                    <span className={styles.nodeTooltip}>04 Moat</span>
                  </button>
                </div>

                {/* Playback Controls under the Dial */}
                <div className={styles.circularControlsRow}>
                  <button
                    type="button"
                    onClick={() => setIsSprintPlaying((prev) => !prev)}
                    className={styles.circularPlayBtn}
                  >
                    <span>{isSprintPlaying ? '⏸ Auto-Cycling (Smooth 90-Day Loop)' : '▶ Resume Auto-Cycle'}</span>
                  </button>
                  <span className={styles.circularHintText}>Click any circular node to inspect sprint phase</span>
                </div>
              </div>

              {/* Right Column: Clean, Attractive Skeuomorphic Phase Detail Card (Rock-solid, zero vibration) */}
              <div className={styles.phaseCardCol}>
                <div className={styles.cleanPhaseCard}>

                  {/* Smooth in-place content update with ZERO container remount or vertical jumping */}
                  <div className={styles.phaseCardBody}>
                    {/* Header Row */}
                    <div className={styles.phaseCardHeader}>
                      <span className={styles.phaseStepPill}>PHASE {currentPhase.num} OF 04</span>
                      <span className={styles.phaseDurationPill}>{currentPhase.duration}</span>
                      <span className={styles.phaseBadgePill}>{currentPhase.badge}</span>
                    </div>

                    <h3 className={styles.phaseCardHeadline}>{currentPhase.headline}</h3>
                    <p className={styles.phaseCardSummary}>{currentPhase.summary}</p>

                    {/* Skeuomorphic Debossed Deliverables Tray */}
                    <div className={styles.cleanDeliverablesBox}>
                      <span className={styles.deliverablesLabel}>Verified Sprint Milestones:</span>
                      <div className={styles.deliverablesStack}>
                        {currentPhase.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className={styles.deliverablePillItem}>
                            <span className={styles.deliverableCheck}>✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Target SLA & Direct 3D Tactile CTA */}
                    <div className={styles.phaseCardFooter}>
                      <div className={styles.slaTargetBadge}>
                        <span className={styles.slaTargetIcon}>🎯</span>
                        <div className={styles.slaTargetText}>
                          <span className={styles.slaTargetLabel}>Guaranteed Milestone SLA</span>
                          <span className={styles.slaTargetVal}>{currentPhase.sla} • {currentPhase.metricValue} {currentPhase.metricLabel}</span>
                        </div>
                      </div>

                      <BeamButton
                        href="/contact"
                        label={`Initiate Phase ${currentPhase.num} Sprint`}
                        size="md"
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 5: INTERACTIVE VALUE & REVENUE PROJECTION COCKPIT
           ══════════════════════════════════════════════════ */}
        <section className={styles.calculatorSection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className={styles.calcDot} />
                <span>INTERACTIVE REVENUE PROJECTION</span>
              </div>
              <h2 className={`display-lg ${styles.calcTitle}`}>
                Estimate Your <span className="accent-gradient">Compounding Revenue Pipeline</span>
              </h2>
              <p className={styles.calcSub}>
                Fine-tune your traffic goals and average deal size to model verified inbound leads, displaced ad spend, and compounding pipeline value based on your target market and business goals across India.
              </p>
            </ScrollReveal>

            <div className={styles.calcConsole}>
              <span className={styles.calcGlassGloss} />

              {/* Deal Size Preset Selector */}
              <div className={styles.dealSelectorBlock}>
                <div className={styles.dealSelectorHeader}>
                  <span className={styles.dealSelectorTitle}>Select Average Deal / Customer Value:</span>
                  <span className={styles.dealSelectedBadge}>₹{dealSize.toLocaleString('en-IN')} Average Order Value</span>
                </div>
                <div className={styles.dealPillsRow}>
                  {[
                    { label: '₹15K Retail / Services', val: 15000 },
                    { label: '₹50K SME / Pro', val: 50000 },
                    { label: '₹1.5L B2B / Healthcare', val: 150000 },
                    { label: '₹5L+ Real Estate / High-Ticket', val: 500000 },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => setDealSize(preset.val)}
                      className={`${styles.dealPillBtn} ${dealSize === preset.val ? styles.dealPillActive : ''}`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Traffic Range Slider Controls */}
              <div className={styles.calcControls}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Target Monthly Organic &amp; Paid Visitors:</span>
                  <span className={styles.sliderValBadge}>
                    {trafficVal.toLocaleString('en-IN')} Monthly Visits
                  </span>
                </div>

                <input
                  type="range"
                  min="2500"
                  max="50000"
                  step="2500"
                  value={trafficVal}
                  onChange={(e) => setTrafficVal(Number(e.target.value))}
                  className={styles.rangeInput}
                  aria-label="Target monthly visits slider"
                />

                <div className={styles.calcTrafficPresets}>
                  <div className={styles.sliderTicks}>
                    <span>2.5K Visits</span>
                    <span>15K Visits</span>
                    <span>30K Visits</span>
                    <span>50K Visits</span>
                  </div>
                  <div className={styles.quickPresetButtons}>
                    {[5000, 15000, 30000, 50000].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTrafficVal(t)}
                        className={`${styles.trafficPresetPill} ${trafficVal === t ? styles.trafficPresetPillActive : ''}`}
                      >
                        {t / 1000}K Fast Set
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Telemetry Grid */}
              <div className={styles.calcResultsGrid}>
                <div className={styles.calcResultCard}>
                  <span className={styles.resultCardGloss} />
                  <div className={styles.resultHeaderRow}>
                    <span className={styles.resultLabel}>Verified Inquiries</span>
                    <span className={styles.livePulseDot} />
                  </div>
                  <span className={styles.resultValue}>{calcStats.calls}</span>
                  <span className={styles.resultNote}>High-intent calls &amp; WhatsApp chats/mo</span>
                </div>

                <div className={styles.calcResultCard}>
                  <span className={styles.resultCardGloss} />
                  <div className={styles.resultHeaderRow}>
                    <span className={styles.resultLabel}>Ad Spend Displaced</span>
                    <span className={styles.adPillBadge}>PPC Value</span>
                  </div>
                  <span className={styles.resultValue}>{calcStats.savedPpc}</span>
                  <span className={styles.resultNote}>Equivalent monthly Google CPC budget</span>
                </div>

                <div className={styles.calcResultCardHighlight}>
                  <span className={styles.resultCardGloss} />
                  <div className={styles.highlightHeaderRow}>
                    <span className={styles.resultLabelHighlight}>Compounding Pipeline</span>
                    <span className={styles.multiplierTag}>{calcStats.multiplier} Lift</span>
                  </div>
                  <span className={styles.resultValueHighlight}>{calcStats.pipeline}</span>
                  <span className={styles.resultNoteHighlight}>Est. quarterly pipeline generated</span>
                </div>
              </div>

              {/* Console Action Bar with Centered Animated Pill Button */}
              <div className={styles.calcConsoleFooter}>
                <div className={styles.calcBtnWrapper}>
                  <BeamButton href="/contact" label="Claim Your Custom Forecast" size="md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 6: THE COPILOT STANDARD (PREMIUM SINGLE SKEUOMORPHIC CARD)
           ══════════════════════════════════════════════════ */}
        <section className={styles.comparisonSection} id="copilot-standard">
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className={styles.compareDot} />
                <span>THE COPILOT STANDARD</span>
              </div>
              <h2 className={`display-lg ${styles.compareTitle}`}>
                Traditional Agency Retainers vs. <span className="accent-gradient">Marketing Copilot</span>
              </h2>
              <p className={styles.compareSub}>
                Why forward-thinking enterprises across India replace slow, black-box retainer contracts with our high-velocity sprint performance model.
              </p>
            </ScrollReveal>

            {/* Table-Style Comparison Card */}
            <div className={styles.copilotTableCard}>

              {/* Table Header Row */}
              <div className={styles.tableHeaderRow}>
                <div className={styles.tableHeaderFeature} />
                <div className={styles.tableHeaderTraditional}>
                  <span className={styles.tableHeaderLabel}>TRADITIONAL RETAINER</span>
                  <span className={styles.tableHeaderSub}>Traditional Agency</span>
                </div>
                <div className={styles.tableHeaderCopilot}>
                  <span className={styles.copilotRecommendedBadge}>
                    <span className={styles.recommendedStar}>★</span>
                    RECOMMENDED
                  </span>
                  <span className={styles.tableHeaderLabel}>MARKETING COPILOT</span>
                  <span className={styles.tableHeaderSub}>14-Day Sprint SLA</span>
                </div>
              </div>

              {/* Table Body Rows */}
              <div className={styles.tableBody}>
                {comparisonPoints.map((pt, idx) => (
                  <div
                    key={pt.id}
                    className={`${styles.tableRow} ${idx % 2 === 0 ? styles.tableRowEven : ''}`}
                  >
                    {/* Feature Label */}
                    <div className={styles.tableFeatureCell}>
                      <span className={styles.tableFeatureIcon}>{pt.icon}</span>
                      <div className={styles.tableFeatureText}>
                        <span className={styles.tableFeatureName}>{pt.feature}</span>
                        <span className={styles.tableFeatureDesc}>{pt.traditional.slice(0, 55)}…</span>
                      </div>
                    </div>

                    {/* Traditional: 3D Cross */}
                    <div className={styles.tableCellTraditional}>
                      <span className={styles.icon3DCross} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4L12 12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span className={styles.tableCellTag}>{pt.traditionalTag}</span>
                    </div>

                    {/* Copilot: 3D Check */}
                    <div className={styles.tableCellCopilot}>
                      <span className={styles.icon3DCheck} aria-hidden="true">
                        <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
                          <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className={styles.tableCellTagGreen}>{pt.slaBadge}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className={styles.copilotCardFooter}>
                <div className={styles.blueBtnWrapper}>
                  <BeamButton href="/contact" label="Claim Your 14-Day Sprint" size="md" />
                </div>
                <div className={styles.copilotFooterNotice}>
                  <span className={styles.reassuranceDot} />
                  <span>All 5 performance standards contractually backed by live Looker Studio telemetry and zero binding lock-ins.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 7: INDIA-WIDE MARKET & AUDIENCE INTELLIGENCE
            (Dark-Canvas Premium Zone Intelligence Cards)
           ══════════════════════════════════════════════════ */}
        <section className={styles.cityCommandSection}>
          {/* Ambient glow particles */}
          <span className={styles.cityGlowOrb1} />
          <span className={styles.cityGlowOrb2} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <ScrollReveal className="text-center">
              <div className={styles.cityCommandEyebrow}>
                <span className={styles.cityLiveDot} />
                <span>PAN-INDIA AUDIENCE &amp; MARKET STRATEGY</span>
              </div>
              <h2 className={`display-lg ${styles.cityCommandTitle}`}>
                India-Wide Market &amp;<br />
                <span className={styles.cityGradientText}>Audience Intelligence</span>
              </h2>
              <p className={styles.cityCommandSub}>
                Every campaign is planned around your target market, customer intent, competition, location, and business objectives—whether you serve one city, multiple states, or customers across India.
              </p>
            </ScrollReveal>

            {/* Citywide Stats Strip */}
            <div className={styles.cityStatsStrip}>
              {[
                { val: 'Pan-India', label: 'Custom Targeted Reach' },
                { val: '10M+', label: 'Monthly Search & Intent Volume' },
                { val: 'Tier 1 & 2', label: 'Full Geographic Footprint' },
                { val: '99.4%', label: 'Lead Attribution Precision' },
              ].map((stat, i) => (
                <div key={i} className={styles.cityStatItem}>
                  <span className={styles.cityStatVal}>{stat.val}</span>
                  <span className={styles.cityStatLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Zone Cards Grid */}
            <div className={styles.cityZoneGrid}>
              {corridors.map((corridor, idx) => {
                const zoneColors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#0D007F', '#06B6D4'];
                const color = zoneColors[idx];
                return (
                  <div
                    key={idx}
                    className={styles.cityZoneCard}
                    style={{ '--zone-color': color } as React.CSSProperties}
                  >
                    {/* Glow layer */}
                    <span className={styles.zoneGlowLayer} />

                    {/* Zone header */}
                    <div className={styles.zoneCardHeader}>
                      <div className={styles.zoneIconOrb} style={{ boxShadow: `0 0 24px ${color}40, 0 0 60px ${color}20` }}>
                        <span className={styles.zoneIconEmoji}>{corridor.icon}</span>
                        <span className={styles.zoneIconRing} style={{ borderColor: `${color}60` }} />
                      </div>
                      <div className={styles.zoneHeaderRight}>
                        <span className={styles.zoneNumber} style={{ color }}>MARKET 0{idx + 1}</span>
                        <span className={styles.zoneTagBadge} style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                          {corridor.tag}
                        </span>
                      </div>
                    </div>

                    {/* Zone name */}
                    <h3 className={styles.zoneHubName}>{corridor.hub}</h3>
                    <p className={styles.zoneDesc}>{corridor.desc}</p>

                    {/* Stat metric */}
                    <div className={styles.zoneStatRow}>
                      <span className={styles.zoneStatPing} style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                      <span className={styles.zoneStatText}>{corridor.stat}</span>
                    </div>

                    {/* Bottom border accent */}
                    <div className={styles.zoneBottomAccent} style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className={styles.cityCommandCta}>
              <BeamButton href="/contact" label="Target Your Market in India" size="md" />
              <span className={styles.cityCommandNote}>Campaign strategy calibrated within 48 hours of onboarding</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 8: ENTERPRISE MARTECH & INTELLIGENCE STACK (AUTHENTIC BRAND ICONS)
           ══════════════════════════════════════════════════ */}
        <section className={styles.techSection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className={styles.techDot} />
                <span>ENTERPRISE MARTECH &amp; INTELLIGENCE STACK</span>
              </div>
              <h2 className={`display-lg ${styles.techTitle}`}>
                Verified Platforms. <span className="accent-gradient">Zero Vanity Metrics.</span>
              </h2>
              <p className={styles.techSub}>
                Every campaign is instrumented with enterprise-grade tracking, automated bidding APIs, and real-time client telemetry.
              </p>
            </ScrollReveal>

            <div className={styles.techCardsGrid}>
              {martechTools.map((tool, idx) => (
                <div key={idx} className={styles.techCard}>
                  <span className={styles.techCardGlass} />
                  
                  {/* Top: Brand Logo Well & Live Status */}
                  <div className={styles.techTopRow}>
                    <div className={styles.techLogoContainer} style={{ boxShadow: `0 8px 24px -6px ${tool.badgeColor}30` }}>
                      {tool.iconSvg}
                    </div>
                    <div className={styles.techStatusBadge}>
                      <span className={styles.techStatusDot} />
                      <span>{tool.status}</span>
                    </div>
                  </div>

                  {/* Body: Title, Category, Description */}
                  <h3 className={styles.techCardName}>{tool.name}</h3>
                  <div className={styles.techCategoryBadge} style={{ color: tool.badgeColor, borderColor: `${tool.badgeColor}35` }}>
                    {tool.category}
                  </div>
                  <p className={styles.techCardDesc}>{tool.description}</p>
                </div>
              ))}
            </div>

            {/* Centered Action Runway for Martech Stack */}
            <div className={styles.techCtaWrap}>
              <BeamButton href="/contact" label="Audit Your Marketing Tech Stack" size="md" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 9: FREQUENTLY ASKED QUESTIONS (SKEUOMORPHIC FAQ ACCORDION)
           ══════════════════════════════════════════════════ */}
        <section className={styles.faqSection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className={styles.faqDot} />
                <span>CLEAR ANSWERS</span>
              </div>
              <h2 className={`display-lg ${styles.faqTitle}`}>
                Frequently Asked <span className="accent-gradient">Questions</span>
              </h2>
              <p className={styles.faqSub}>
                Everything you need to know about our growth disciplines, sprint milestones, and transparent reporting.
              </p>
            </ScrollReveal>

            <div className={styles.faqAccordion}>
              {servicesFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                    <button
                      type="button"
                      className={styles.faqQuestionBtn}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className={styles.faqQuestionLeft}>
                        <span className={styles.faqNumber}>{`0${idx + 1}`}</span>
                        <span className={styles.faqQuestionText}>{faq.q}</span>
                      </div>
                      <div className={`${styles.faqNavbarToggleBtn} ${isOpen ? styles.faqNavbarToggleBtnOpen : ''}`}>
                        <span>{isOpen ? '−' : '+'}</span>
                      </div>
                    </button>
                    <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ''}`}>
                      <div className={styles.faqAnswerInner}>
                        <div className={styles.faqAnswerDivider} />
                        <p className={styles.faqAnswerText}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 10: MASTER SKEUOMORPHIC CONSULTATION CTA
           ══════════════════════════════════════════════════ */}
        <CTASection />
      </div>
    </>
  );
}
