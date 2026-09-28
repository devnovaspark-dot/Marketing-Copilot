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
    tagline: 'Rank #1 on Google across Bhubaneswar with white-hat technical speed, schema moats, and geo-targeted authority.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/seo.svg',
    deliverables: ['Google 3-Pack Map Moat', 'Core Web Vitals < 0.9s', 'High-Intent Topic Clusters'],
    metric: '+240%',
    metricLabel: 'Organic Inquiries Lift',
    color: '#0B2093',
    href: '/services/seo',
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
    href: '/services/google-ads',
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
    deliverables: ['Dynamic Retargeting Loops', 'High-Intent Instant Forms', 'Odisha Audience Mapping'],
    metric: '4.2X',
    metricLabel: 'Acquisition Velocity',
    color: '#0081FB',
    href: '/services/meta-ads',
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
    href: '/services/web-development',
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
    href: '/services/creative-branding',
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
    href: '/services/social-media',
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
    href: '/services/amazon-marketing',
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
    href: '/services/ecommerce-marketing',
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
    href: '/services/performance-marketing',
  },
  {
    id: 'automation',
    num: '10',
    category: 'LEAD PIPELINE AUTOMATION',
    categoryGroup: 'scale',
    shortCategory: 'Inbound Systems',
    title: 'Content Marketing & Lead Systems',
    tagline: 'High-authority commercial topic clusters paired with automated CRM lead routing that turns dormant site visitors into booked calls.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    iconSrc: '/images/icons/content-strategy.svg',
    deliverables: ['High-Intent Topic Clusters', 'WhatsApp & CRM Routing', 'Automated Lead Qualification'],
    metric: '-55%',
    metricLabel: 'Cost Per Qualified Lead',
    color: '#14B8A6',
    href: '/services/ai-automation',
  },
];

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/ns_services_graphic.png',
    alt: 'Marketing Copilot digital marketing strategy and revenue growth architecture in Bhubaneswar',
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
      '1,000+ local page technical crawl & Schema.org JSON-LD hierarchy',
      'Patia & Saheed Nagar commercial competitor keyword gap map',
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
      'Hyperlocal Google 3-Pack pin ranking across Bhubaneswar & Cuttack',
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
    hub: 'Patia & Infocity Corridor',
    tag: 'Tech & B2B SaaS Ecosystem',
    icon: '💻',
    stat: '120K+ Monthly B2B Searches',
    desc: 'High-density IT parks, startup incubators, and corporate campuses requiring sophisticated B2B lead pipelines and Google search authority.',
  },
  {
    hub: 'Saheed Nagar & Master Canteen',
    tag: 'Commercial Retail & High-Street',
    icon: '💎',
    stat: '340K+ Hyperlocal Footfall',
    desc: 'High-footfall central retail strip, lifestyle brands, clinical practices, and jewelry showrooms driven by hyperlocal Google Maps 3-Pack dominance.',
  },
  {
    hub: 'Jaydev Vihar & Nayapalli',
    tag: 'Hospitality & Luxury Real Estate',
    icon: '🏢',
    stat: '₹4.5 Cr+ Avg HNW Lead Value',
    desc: 'Prime residential towers, boutique luxury hotels, fine dining, and major commercial complexes requiring high-ticket buyer targeting.',
  },
  {
    hub: 'Rasulgarh & Mancheswar IE',
    tag: 'Industrial & Wholesale Supply',
    icon: '🏭',
    stat: 'Statewide B2B Logistics Demand',
    desc: 'Heavy warehousing, automotive dealerships, building materials, and statewide distribution networks needing automated inbound inquiries.',
  },
  {
    hub: 'Khandagiri & Patrapada',
    tag: 'Healthcare & Higher Education',
    icon: '🏥',
    stat: '94% High-Trust Appointment Intent',
    desc: 'Multi-specialty hospitals, private medical universities, and residential townships seeking high-trust local service discovery.',
  },
  {
    hub: 'Twin-City Expressway (CTC-BBSR)',
    tag: 'Inter-City Regional Commerce',
    icon: '🛣️',
    stat: '80K+ Daily Transit Commerce',
    desc: 'The vital arterial lifeline linking Cuttack and Bhubaneswar, capturing statewide commercial transit and regional wholesale commerce.',
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
    copilot: 'Direct access to senior growth architects and media buyers in Bhubaneswar',
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
    description: 'Direct API indexing telemetry, server log crawl monitoring, and geo-targeted keyword position tracking in Odisha.',
    iconSvg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M44.5 20H24V28.5H35.8C34.7 31.4 32.5 33.8 29.5 35.2V40.8H36.7C40.9 36.9 44.5 30.6 44.5 20Z" fill="#4285F4"/>
        <path d="M24 44.5C30.2 44.5 35.4 42.4 36.7 40.8L29.5 35.2C27.9 36.3 26.1 36.9 24 36.9C18.6 36.9 14 33.2 12.4 28.3H4.9V34.1C8.7 40.4 15.8 44.5 24 44.5Z" fill="#34A853"/>
        <path d="M12.4 28.3C11.9 26.9 11.6 25.5 11.6 24C11.6 22.5 11.9 21.1 12.4 19.7V13.9H4.9C3.3 17 2.4 20.4 2.4 24C2.4 27.6 3.3 31 4.9 34.1L12.4 28.3Z" fill="#FBBC05"/>
        <path d="M24 11.1C27.5 11.1 30.6 12.3 33 14.6L39.4 8.2C35.4 4.5 30.2 2.4 24 2.4C15.8 2.4 8.7 6.5 4.9 12.8L12.4 18.6C14 13.7 18.6 11.1 24 11.1Z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: 'Google Ads Manager',
    category: 'Commercial Search & PMax',
    badgeColor: '#1A73E8',
    status: 'Smart Bidding Active',
    description: 'Automated target-CPA optimization, negative keyword shields, and click-to-call direct lead routing across Bhubaneswar.',
    iconSvg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M14.8 8.5C11.5 8.5 8.8 11.2 8.8 14.5L8.8 33.5C8.8 36.8 11.5 39.5 14.8 39.5C18.1 39.5 20.8 36.8 20.8 33.5L20.8 14.5C20.8 11.2 18.1 8.5 14.8 8.5Z" fill="#FBBC04" transform="rotate(-37 14.8 24)"/>
        <path d="M33.2 8.5C36.5 8.5 39.2 11.2 39.2 14.5L39.2 33.5C39.2 36.8 36.5 39.5 33.2 39.5C29.9 39.5 27.2 36.8 27.2 33.5L27.2 14.5C27.2 11.2 29.9 8.5 33.2 8.5Z" fill="#4285F4" transform="rotate(37 33.2 24)"/>
        <circle cx="10" cy="38" r="6" fill="#34A853"/>
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
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="metaOfficialGrad" x1="6" y1="24" x2="42" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0064E0"/>
            <stop offset="50%" stopColor="#0081FB"/>
            <stop offset="100%" stopColor="#00C6FF"/>
          </linearGradient>
        </defs>
        <path d="M12.5 33C8.9 33 6 30 6 25.5C6 20.2 9.8 15 15.5 15C20.1 15 23.5 18 26.5 22.5L27.5 24C30.5 28.5 33.9 31.5 38.5 31.5C43.1 31.5 46 28 46 23.5C46 19 43.1 15.5 38.5 15.5C35 15.5 31.8 18 29.5 21.8L28.2 23.8C25.5 19.5 22 16.5 16.5 16.5C11.5 16.5 8.2 20.2 8.2 24.8C8.2 28.5 10.3 31 13.5 31C16.8 31 19.8 28.5 22.8 24.5" stroke="url(#metaOfficialGrad)" strokeWidth="4.2" strokeLinecap="round"/>
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
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="26" width="8" height="16" rx="4" fill="#F9AB00"/>
        <rect x="20" y="16" width="8" height="26" rx="4" fill="#E37400"/>
        <rect x="32" y="7" width="8" height="35" rx="4" fill="#F29900"/>
        <circle cx="12" cy="34" r="4" fill="#F9AB00"/>
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
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#0F172A"/>
        <path d="M31 14H35V34H31V14Z" fill="#FFFFFF"/>
        <path d="M14 14H18.5L31.5 31.5V34H29.5L14 14Z" fill="#FFFFFF"/>
        <circle cx="38" cy="11" r="3" fill="#61DAFB"/>
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
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <rect x="7" y="22" width="7" height="18" rx="3.5" fill="#4285F4"/>
        <rect x="17" y="14" width="7" height="26" rx="3.5" fill="#34A853"/>
        <rect x="27" y="8" width="7" height="32" rx="3.5" fill="#FBBC04"/>
        <rect x="37" y="17" width="7" height="23" rx="3.5" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: 'Semrush & Ahrefs',
    category: 'Competitive SERP Intelligence',
    badgeColor: '#FF642D',
    status: 'Daily Rank Tracking',
    description: 'Monitors competitor keyword bidding, backlink velocity, and high-intent commercial keyword gaps in Odisha.',
    iconSvg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M24 6C24 6 29 13.5 29 18.5C29 21.5 26.8 24 24 24C21.2 24 19 21.5 19 18.5C19 13.5 24 6 24 6Z" fill="#FF642D"/>
        <path d="M33 17C33 17 38 23 38 29C38 36.7 31.7 43 24 43C16.3 43 10 36.7 10 29C10 23 15 17 15 17C15 21 17.5 24.5 20.5 24.5C23.5 24.5 24 21 24 17C24 12 19 9 19 9C27 9 33 13 33 17Z" fill="#FF642D"/>
        <path d="M24 43C29 43 33 39 33 34C33 29.5 29 26 24 26C19 26 15 29.5 15 34C15 39 19 43 24 43Z" fill="#DE1054"/>
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
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M32.8 20.5C32.2 17 29.3 14.5 25.8 14.5C23 14.5 20.5 16.1 19.3 18.6C18.6 18.3 17.9 18 17.1 18C14.5 18 12.5 20.1 12.5 22.7C12.5 23 12.5 23.3 12.6 23.6C10.6 24.4 9.1 26.4 9.1 28.7C9.1 31.7 11.6 34.2 14.6 34.2H34.8C37.3 34.2 39.3 32.2 39.3 29.7C39.3 27.4 37.6 25.5 35.5 25.2C35.5 23.7 34.4 21.1 32.8 20.5Z" fill="#F38020"/>
        <path d="M35.6 25.2C35.6 24.8 35.5 24.4 35.4 24.1L30.2 24.1C29.6 21.6 27.5 19.8 25 19.8C23.1 19.8 21.4 20.8 20.5 22.4L18.7 22.4C18.2 20.6 16.5 19.3 14.6 19.3C14.2 19.3 13.8 19.4 13.4 19.5" fill="#FAAD3F"/>
      </svg>
    ),
  },
];

const servicesFaqs = [
  {
    q: 'How do your 10 services work together as an integrated system?',
    a: 'Rather than running disconnected campaigns, we engineer a single unified flywheel: Next.js provides sub-second speed that Google rewards with higher rankings, creative videography lowers your cost per click on Meta and Google Ads, and hyperlocal SEO captures high-intent customers near your business across Bhubaneswar.',
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
                  <span>INTEGRATED REVENUE ENGINE • BHUBANESWAR GROWTH ARCHITECTURE</span>
                </div>

                <h1 className={`display-hero ${styles.heroTitle}`}>
                  Every Discipline Connected.{' '}
                  <span className={`accent-gradient ${styles.heroAccent}`}>Compounding Every Rupee.</span>
                </h1>

                <div className={styles.heroSub}>
                  <p>
                    Most agencies sell disconnected tactics. We combine search dominance, sub-second web engineering, commercial videography, and paid media into an automated growth system that multiplies your pipeline across Bhubaneswar and Odisha.
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
                  <div className={styles.trustLabel}>Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands</div>
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
                  <span className={styles.tLabel}>Bhubaneswar Scaled</span>
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
                    <Link href={service.href} className={styles.practiceExploreLink}>
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
                Fine-tune your traffic goals and average deal size to model verified inbound leads, displaced ad spend, and compounding pipeline value in Odisha.
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
                Traditional Bhubaneswar Retainers vs. <span className="accent-gradient">Marketing Copilot</span>
              </h2>
              <p className={styles.compareSub}>
                Why forward-thinking Odisha enterprises replace slow, black-box retainer contracts with our high-velocity sprint performance model.
              </p>
            </ScrollReveal>

            {/* Table-Style Comparison Card */}
            <div className={styles.copilotTableCard}>

              {/* Table Header Row */}
              <div className={styles.tableHeaderRow}>
                <div className={styles.tableHeaderFeature} />
                <div className={styles.tableHeaderTraditional}>
                  <span className={styles.tableHeaderLabel}>TRADITIONAL RETAINER</span>
                  <span className={styles.tableHeaderSub}>Bhubaneswar Agency</span>
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
            SECTION 7: BHUBANESWAR CITY COMMAND GRID
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
                <span>HYPERLOCAL REGIONAL INTELLIGENCE</span>
              </div>
              <h2 className={`display-lg ${styles.cityCommandTitle}`}>
                Bhubaneswar&apos;s 6 Commercial<br />
                <span className={styles.cityGradientText}>Zones. Precisely Mapped.</span>
              </h2>
              <p className={styles.cityCommandSub}>
                Every rupee spent, every ad creative, every search ranking — calibrated to the exact commercial DNA of each Bhubaneswar district.
              </p>
            </ScrollReveal>

            {/* Citywide Stats Strip */}
            <div className={styles.cityStatsStrip}>
              {[
                { val: '6', label: 'Commercial Corridors Mapped' },
                { val: '540K+', label: 'Monthly Local Search Intent' },
                { val: '2.5 km', label: 'Avg Geofence Radius' },
                { val: '98.4%', label: 'Maps 3-Pack Dominance Score' },
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
                        <span className={styles.zoneNumber} style={{ color }}>ZONE 0{idx + 1}</span>
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
              <BeamButton href="/contact" label="Target Your Local District" size="md" />
              <span className={styles.cityCommandNote}>Geofencing calibrated within 48 hours of onboarding</span>
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
