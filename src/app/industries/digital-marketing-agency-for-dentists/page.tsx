'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import {
  Icon3DTooth,
  Icon3DMapPin,
  Icon3DDiamond,
  Icon3DShield,
  Icon3DScale,
  Icon3DChart,
  Icon3DMeta,
  Icon3DSearch,
  Icon3DSEO,
  Icon3DContent,
  Icon3DVideo,
  Icon3DAligner,
  Icon3DImplant,
} from './_components/Dental3DIcons';
import styles from './page.module.css';

// ══════════════════════════════════════════════════
// DATA: HERO CLINICAL PHOTOGRAPHY SLIDES (PRESERVED)
// ══════════════════════════════════════════════════
const dentalHeroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    tag: 'ADVANCED CLINICAL OPERATORY',
    caption: 'Sterilized Operatory Suites Engineered for High-Ticket Procedures',
    alt: 'Modern dental operatory suite with high-tech dental chair and surgical lights',
  },
  {
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    tag: 'SMILE TRANSFORMATION STUDIO',
    caption: 'Full Arch Implants & Digital Invisalign Clear Aligner Consultations',
    alt: 'Dentist discussing digital smile makeover with smiling patient',
  },
  {
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    tag: '3D INTRAORAL SCANNING',
    caption: 'Cutting-Edge Painless Diagnostics That Build Patient Trust',
    alt: 'High tech dental diagnostic scan and computer imaging suite',
  },
];

// ══════════════════════════════════════════════════
// SECTION 02 DATA: 6 CORE SERVICES
// STRICT ORDER: Meta -> Google Ads -> SEO -> Social & YouTube -> Maps/GBP -> Content Marketing
// ══════════════════════════════════════════════════
const coreServices = [
  {
    iconType: 'meta',
    title: 'Meta Ads Marketing',
    roleBadge: 'AWARENESS & DEMAND',
    desc: 'Target local prospective patients across Instagram and Facebook with smile transformation reels that generate direct consultation inquiries.',
    tags: ['📍 Local Catchment', '🎥 Smile Reels', '💬 Direct Inquiries'],
    actionText: 'Explore Meta Funnel',
  },
  {
    iconType: 'search',
    title: 'Google Ads Management',
    roleBadge: 'HIGH-INTENT CAPTURE',
    desc: 'Capture patients actively searching for dental implants and urgent procedures, converting clicks into scheduled chair visits.',
    tags: ['🔍 High-Intent Search', '🛡️ Negative Scrubbed', '📞 Click-to-Call'],
    actionText: 'Explore Search Ads',
  },
  {
    iconType: 'seo',
    title: 'SEO + AEO/GEO',
    roleBadge: 'ORGANIC & AI DISCOVERY',
    desc: 'Dominate organic search rankings and AI summary answers across Google, Gemini, and ChatGPT for high-yield clinical treatments.',
    tags: ['📈 Top Google Ranks', '🤖 AI Search Overviews', '🌐 Compounding Traffic'],
    actionText: 'Explore Dental SEO',
  },
  {
    iconType: 'video',
    title: 'Social Media & YouTube Marketing',
    roleBadge: 'TRUST & FAMILIARITY',
    desc: 'Humanize your practice with doctor-led walkthroughs, sterilized operatory tours, and smile reveal stories that eliminate patient fear.',
    tags: ['🎬 Operatory Tours', '✨ Smile Reveals', '🤝 Patient Trust'],
    actionText: 'Explore Video Strategy',
  },
  {
    iconType: 'mappin',
    title: 'Google Business Profile & Maps',
    roleBadge: 'LOCAL 3-PACK DOMINANCE',
    desc: 'Dominate the Google Maps 3-Pack within your 5–10 km catchment to drive immediate patient phone calls, reviews, and GPS footfall.',
    tags: ['📍 Maps 3-Pack Rank', '⭐ 5-Star Reviews', '🚗 Turn-by-Turn GPS'],
    actionText: 'Explore Maps Dominance',
  },
  {
    iconType: 'content',
    title: 'Content Marketing',
    roleBadge: 'CLINICAL AUTHORITY & PR',
    desc: 'Publish doctor-verified clinical guides that resolve patient dental anxiety and build compounding local practice authority.',
    tags: ['📚 Treatment Guides', '🛡️ Alleviate Anxiety', '⭐ Doctor Authority'],
    actionText: 'Explore Content Engine',
  },
];

// ══════════════════════════════════════════════════
// SECTION 03 DATA: HIGH-VALUE DENTAL TREATMENTS
// With high-res clinical photography thumbnails
// ══════════════════════════════════════════════════
const highValueTreatments = [
  {
    iconType: 'aligner',
    title: 'Invisalign & Clear Aligners',
    targetBadge: 'AESTHETIC ORTHO',
    scope: 'Ideal: Adults & Teens Seeking Discreet Alignment',
    desc: 'Attract adults and teens seeking discreet teeth straightening with high treatment compliance.',
    impactFocus: 'Elective Aesthetic Inflow',
    impactChair: 'High Compliance',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    alt: 'Clear aligner 3D digital dental orthodontic scan',
    chips: ['3D Smile Previews', 'Instagram Ad Hooks', 'WhatsApp Booking'],
  },
  {
    iconType: 'implant',
    title: 'Dental Implants & Full Mouth',
    targetBadge: 'SURGICAL RESTORATION',
    scope: 'Ideal: Missing Teeth & Full Arch Candidates',
    desc: 'Capture patients seeking permanent single tooth replacement, bridge restorations, or All-on-4 rehabilitation.',
    impactFocus: 'Surgical Chair Saturation',
    impactChair: 'Maximum Chair Yield',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    alt: 'Surgical dental implant operatory suite',
    chips: ['CBCT Guided Surgery', 'High-Intent Search', '0% EMI Guides'],
  },
  {
    iconType: 'tooth',
    title: 'Crowns & Restorative Dentistry',
    targetBadge: 'STRUCTURAL CARE',
    scope: 'Ideal: Fractured & Post-RCT Teeth',
    desc: 'Reach patients requiring durable ceramic and zirconia crowns that build predictable family retention.',
    impactFocus: 'Predictable Restorative Flow',
    impactChair: 'Family Retention',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
    alt: 'Ceramic zirconia dental crown restoration',
    chips: ['CAD/CAM Digital Scans', 'Zirconia Longevity', 'Preventive Recall Bot'],
  },
  {
    iconType: 'diamond',
    title: 'Cosmetic Dentistry & Whitening',
    targetBadge: 'AESTHETIC ENHANCEMENT',
    scope: 'Ideal: Bridal, Executives & Smile Makeovers',
    desc: 'Attract bridal and professional patients seeking fast-turnaround whitening and composite bonding.',
    impactFocus: 'Rapid Chair Turnover',
    impactChair: 'High Referral Power',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    alt: 'In-office teeth whitening and cosmetic smile makeover',
    chips: ['Macro Before/After', 'Non-Invasive Prep', 'Event Packages'],
  },
  {
    iconType: 'scale',
    title: 'Single-Sitting Rotary RCT',
    targetBadge: 'IMMEDIATE RELIEF',
    scope: 'Ideal: Acute Toothache Searchers',
    desc: 'Capture emergency toothache searchers seeking gentle, single-sitting endodontic pain relief.',
    impactFocus: 'Emergency Local Capture',
    impactChair: 'Urgent Pain Relief',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    alt: 'Advanced clinical microscope for rotary endodontics',
    chips: ['Emergency Click-to-Call', 'Maps Open Now', 'Pain-Free Rotary'],
  },
  {
    iconType: 'shield',
    title: 'Smile Makeovers & Veneers',
    targetBadge: 'PREMIUM AESTHETICS',
    scope: 'Ideal: Comprehensive Aesthetic Design',
    desc: 'Position your clinic as the premier destination for custom ceramic veneers and smile symmetry.',
    impactFocus: 'High Clinical Prestige',
    impactChair: 'Discerning Patients',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    alt: 'Aesthetic porcelain veneers and smile transformation',
    chips: ['Ultra-HD Photography', 'Ceramist Craft', 'Digital Smile Scans'],
  },
];

// ══════════════════════════════════════════════════
// SECTION 04 DATA: OUR PROCESS (5 STEPS)
// ══════════════════════════════════════════════════
const growthProcessSteps = [
  {
    step: '01',
    timeframe: 'DAYS 1–5',
    category: 'DIAGNOSTIC & AUDIT',
    title: 'Practice & Market Analysis',
    shortDesc: 'Deep audit of your clinic, catchment radius, local competitors, and chair availability.',
    objective: 'Understand the clinic, local catchment area, services, competing dental practices, and high-margin surgical chair capacity to eliminate guesswork.',
    keyMetric: 'Pin Code Demographics & Competitor Gaps',
    deliverables: [
      {
        title: '5–10 KM Catchment Radius Mapping',
        desc: 'Identify patient density, income demographics, and procedure demand in your target pin codes.',
        icon: '📍',
      },
      {
        title: 'Competitor Ranking & Blindspot Audit',
        desc: 'Uncover where rival practices rank on Google Maps and where they are wasting ad budget.',
        icon: '🔍',
      },
      {
        title: 'Operatory Chair Capacity Review',
        desc: 'Calculate exact inquiry volume needed to saturate specialized treatment operatory slots.',
        icon: '🪑',
      },
    ],
  },
  {
    step: '02',
    timeframe: 'DAYS 6–10',
    category: 'CONVERSION BLUEPRINT',
    title: 'Marketing Strategy & Planning',
    shortDesc: 'Customized digital acquisition roadmap prioritizing high-yield dental procedures.',
    objective: 'Develop a customized acquisition strategy tailored to your clinic’s treatment priorities, surgical operatory capacity, and competitive strengths.',
    keyMetric: 'Procedure Prioritization & Media Allocation',
    deliverables: [
      {
        title: 'Procedure Channel Allocation',
        desc: 'Distribute ad budget between Google Search for high intent and Meta Ads for aesthetic interest.',
        icon: '🎯',
      },
      {
        title: 'DCI-Compliant Content Scripts',
        desc: 'Doctor-led authority messaging, operatory walkthroughs, and verified smile transformation stories.',
        icon: '📝',
      },
      {
        title: 'Dedicated Landing Page Funnels',
        desc: 'High-converting mobile landers engineered specifically for dental implants and clear aligners.',
        icon: '⚡',
      },
    ],
  },
  {
    step: '03',
    timeframe: 'DAYS 11–18',
    category: 'OMNICHANNEL LAUNCH',
    title: 'Campaign Setup & Execution',
    shortDesc: 'Deploying precision Google Ads, hyper-local SEO, and Google Maps 3-Pack optimization.',
    objective: 'Launch and manage precision search advertising, local SEO, Google Maps 3-Pack optimization, and high-trust content campaigns simultaneously.',
    keyMetric: 'Live Ads & Maps Citations Active',
    deliverables: [
      {
        title: 'Negative-Scrubbed Search Ads',
        desc: 'Filter out low-margin cleanings and target high-ticket surgical and cosmetic search queries.',
        icon: '🛡️',
      },
      {
        title: 'Google Maps 3-Pack Geo-Tagging',
        desc: 'Upload optimized clinical operatory photos, schema categories, and local citation links.',
        icon: '🗺️',
      },
      {
        title: 'Hyperlocal Social Video Ads',
        desc: 'Engage local families and working professionals on Instagram with genuine smile aesthetics.',
        icon: '📱',
      },
    ],
  },
  {
    step: '04',
    timeframe: 'DAYS 19–35',
    category: 'NO-SHOW SHIELD & CRM',
    title: 'Lead Tracking & Optimization',
    shortDesc: 'Deploying automated WhatsApp token confirmations to slash clinic no-shows.',
    objective: 'Monitor inquiry quality, deploy our automated WhatsApp appointment verification to slash no-shows, and continually improve campaigns based on seated chair data.',
    keyMetric: '91.5% Patient Chair Arrival Rate',
    deliverables: [
      {
        title: 'Automated 1-Tap WhatsApp Token Bot',
        desc: 'Instantly confirm booked slots and send prep instructions directly to the patient’s phone.',
        icon: '💬',
      },
      {
        title: '24-Hour & 2-Hour GPS Navigation Alerts',
        desc: 'Send turn-by-turn clinic directions and parking guidance to prevent last-minute cancellations.',
        icon: '🚗',
      },
      {
        title: 'Clinical Feedback Keyword Scrub',
        desc: 'Refine keyword bidding weekly based on which inquiries converted into paid chair procedures.',
        icon: '🔄',
      },
    ],
  },
  {
    step: '05',
    timeframe: 'DAY 36+',
    category: 'CHAIR-TIME SCALING',
    title: 'Reporting & Practice Growth',
    shortDesc: 'Transparent chair telemetry, patient review velocity, and continuous practice expansion.',
    objective: 'Provide clear performance insights, track seated chair consultations, scale winning campaigns, and build compounding local reputation.',
    keyMetric: 'Compounding Inflow & Chair Saturation',
    deliverables: [
      {
        title: 'Live 24/7 Practice Attribution Dashboard',
        desc: 'Track inquiries, consult show-ups, patient acquisition costs, and verified ROAS in real time.',
        icon: '📊',
      },
      {
        title: 'Automated 5-Star Review Engine',
        desc: 'Prompt satisfied patients via WhatsApp post-treatment to continually strengthen Google Maps rank.',
        icon: '⭐',
      },
      {
        title: 'Adjacent Catchment Radius Scaling',
        desc: 'Expand targeting to neighboring pin codes and scale high-value full-arch restorative campaigns.',
        icon: '🚀',
      },
    ],
  },
];

// ══════════════════════════════════════════════════
// SECTION 05 DATA: VERIFIED CASE STUDIES (MIDDLE OF PAGE)
// With photorealistic clinic & patient consultation visuals
// ══════════════════════════════════════════════════
const caseStudies = [
  {
    category: 'Patient Acquisition Growth',
    clinic: 'Apex Dental & Implant Studio',
    location: 'New Delhi',
    tag: 'VERIFIED PRACTICE DATA // NEW DELHI',
    headline: 'Scaling From 28 to 94 Monthly New Patient Consultations',
    doctor: 'Dr. R. Malhotra, MDS (Prosthodontics & Implantology)',
    challenge: 'Losing high-ticket implant candidates to hospital chains with an exhausting 42% no-show rate.',
    strategy: 'Deployed negative-scrubbed Search Ads for surgical implants, local SEO, and WhatsApp 1-tap token booking.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    alt: 'Doctor discussing implant rehabilitation with patient at Apex Dental Studio',
    metrics: [
      { value: '+235%', label: 'Patient Bookings' },
      { value: '₹240', label: 'Cost Per Lead' },
      { value: '91.5%', label: 'Show-Up Rate' },
    ],
    quote: '"Our operatory chairs for dental implants and clear aligners are fully booked 3 weeks in advance."',
    telemetry: {
      badge: 'IMPLANT & ALIGNER TELEMETRY',
      growthRate: '+235% Surge',
      beforeVal: '28 / mo',
      afterVal: '94 / mo',
      progressPercent: 92,
      footers: ['✓ WhatsApp 1-Tap Booking', '✓ 0% EMI Patient Funnel', '✓ Full Operatory Booking'],
    },
  },
  {
    category: 'Local Search Visibility',
    clinic: 'Dr. SmileCraft Dental Care',
    location: 'Mumbai',
    tag: 'LOCAL CATCHMENT DOMINANCE // MUMBAI',
    headline: 'Dominating Google Maps 3-Pack Across 42 Micro-Catchments',
    doctor: 'Dr. A. Joshi, BDS (Aesthetic & Family Dentistry)',
    challenge: 'Invisible beyond 1 km; corporate chains monopolized Google Maps, suppressing family footfall.',
    strategy: 'Optimized Google Maps 3-Pack across 42 pin codes with geo-tagged operatory photos and automated 5-star WhatsApp reviews.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Dr. SmileCraft clinic consultation operatory in Mumbai',
    metrics: [
      { value: 'Top 3', label: 'Rank in 42 Pin Codes' },
      { value: '+180%', label: 'Map Directions & Calls' },
      { value: '4.9★', label: 'Over 320+ Reviews' },
    ],
    quote: '"Nearby families walking in now say they found us #1 on Google Maps without us paying for ads."',
    telemetry: {
      badge: 'MAPS 3-PACK GEO-RADAR',
      growthRate: '100% Top-3 Grid',
      beforeVal: 'Unranked (>20)',
      afterVal: 'Top 3 in 42 Zones',
      progressPercent: 96,
      footers: ['✓ 320+ Verified 5★ Reviews', '✓ Geo-Tagged Photos', '✓ +180% Navigation Calls'],
    },
  },
  {
    category: 'High-Value Treatment Campaigns',
    clinic: 'Elite Aligners & Aesthetic Studio',
    location: 'Bangalore',
    tag: 'HIGH-TICKET CASE ACQUISITION // BANGALORE',
    headline: 'Generating 68+ Monthly Qualified Clear Aligner Consultations',
    doctor: 'Dr. S. Nambiar, MDS (Orthodontics & Dentofacial)',
    challenge: 'Wasted ad budget on ₹500 scaling shoppers; zero traction for premium ₹1.5L+ clear aligners.',
    strategy: 'Engineered 3D smile simulation Instagram funnels and dedicated consultation landers with 0% EMI financing guides.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    alt: 'Patient reviewing 3D digital clear aligner smile preview at Elite Aligners',
    metrics: [
      { value: '68+', label: 'Monthly Aligner Consults' },
      { value: '4.8X', label: 'Verified ROAS' },
      { value: '62%', label: 'Chair Conversion Rate' },
    ],
    quote: '"Marketing Copilot filtered out bargain shoppers and filled our aesthetic operatory at full capacity."',
    telemetry: {
      badge: 'PREMIUM ALIGNER FUNNEL',
      growthRate: '17X Quality Shift',
      beforeVal: '4 / mo',
      afterVal: '68 / mo',
      progressPercent: 88,
      footers: ['✓ Filtered ₹500 Shoppers', '✓ 4.8X Return on Ad Spend', '✓ 62% Chair Acceptance'],
    },
  },
];

// ══════════════════════════════════════════════════
// SECTION 06 DATA: COMPARISON MATRIX
// ══════════════════════════════════════════════════
const dentalComparison = [
  {
    iconType: 'diamond',
    feature: 'High-Ticket Procedure Scaling',
    subtext: 'Implants, Aligners & Veneers',
    genericTitle: 'Low-Margin Cleanings Only',
    generic: 'Budget wasted on ₹500 scaling shoppers; zero traction for implants or aligners.',
    copilotTitle: 'Scalable ₹50k+ Case Pipeline',
    copilot: 'Captures pre-qualified candidates seeking surgical implants and clear aligners.',
  },
  {
    iconType: 'tooth',
    feature: 'Operatory Chair Utilization',
    subtext: 'Eliminate doctor downtime & gaps',
    genericTitle: 'Unpredictable Operatory Gaps',
    generic: 'Sporadic walk-ins and expensive operatories sitting idle during peak hours.',
    copilotTitle: 'Booked 2–3 Weeks Ahead',
    copilot: 'Continuous patient inflow keeping surgical and restorative chairs filled.',
  },
  {
    iconType: 'mappin',
    feature: 'Local Catchment Dominance',
    subtext: 'Google Maps 3-Pack (5–10 km)',
    genericTitle: 'Invisible Beyond 1 Kilometer',
    generic: 'Clinic buried below rivals on Maps; losing local neighborhood searches.',
    copilotTitle: 'Dominates Top 3 Local Pack',
    copilot: 'Hyperlocal schema & automated 5-star WhatsApp reviews capturing footfall.',
  },
  {
    iconType: 'shield',
    feature: 'Patient Show-Up Rate',
    subtext: 'Protect clinical hours from no-shows',
    genericTitle: '35%–45% Clinic No-Shows',
    generic: 'Inquiries dumped into email without follow-up, causing empty chair downtime.',
    copilotTitle: '91.5%+ Seated Attendance',
    copilot: 'Automated 1-tap WhatsApp token bot, clinic GPS directions & 2h alerts.',
  },
  {
    iconType: 'scale',
    feature: 'Doctor Authority & Ethics',
    subtext: '100% DCI compliance & trust',
    genericTitle: 'Cheap Discounts & Risk',
    generic: 'Gimmicky discount ads that damage doctor prestige and risk DCI ad bans.',
    copilotTitle: 'Premier Clinical Authority',
    copilot: '100% DCI-compliant patient education and verified smile transformation stories.',
  },
  {
    iconType: 'chart',
    feature: 'Practice Revenue Transparency',
    subtext: 'Track seated revenue & ROAS',
    genericTitle: 'Vague Vanity Clicks & Likes',
    generic: 'Superficial monthly PDF reports tracking clicks with zero revenue clarity.',
    copilotTitle: 'Live 24/7 Practice Dashboard',
    copilot: 'Real-time dashboard tracking seated consults, acquisition cost & verified ROI.',
  },
];

// ══════════════════════════════════════════════════
// SECTION 07 DATA: THE DENTAL ADVANTAGE (6 PILLARS)
// Uses 3D vector icons, balanced heights & skeuomorphic styling
// ══════════════════════════════════════════════════
const whyChoosePillars = [
  {
    iconType: 'tooth',
    title: 'Dental Industry Specialization',
    desc: 'Deep clinical understanding of dental procedures, operatory chair costs, DCI advertising ethics, and patient anxiety psychology.',
    highlight: 'Zero Generic Freelancers',
    clinicalTag: '100% Dental Code & DCI Compliant',
  },
  {
    iconType: 'meta',
    title: 'Integrated Marketing Capabilities',
    desc: 'Meta Ads, Google Search, Maps 3-Pack, SEO, and YouTube work as one synchronized patient acquisition engine.',
    highlight: 'Full Omnichannel Harmony',
    clinicalTag: 'Synchronized Patient Funnel',
  },
  {
    iconType: 'diamond',
    title: 'High-Value Treatment Focus',
    desc: 'We focus ad spend on surgical implants, aligners, and restorative cases rather than burning budget on low-margin cleanings.',
    highlight: 'Maximum Chair Yield',
    clinicalTag: 'Targeting ₹50,000+ Case Values',
  },
  {
    iconType: 'mappin',
    title: 'Hyperlocal Catchment Dominance',
    desc: 'Hyperlocal dominance on Google Maps 3-Pack across 5–10 km pin codes where nearby families live and commute.',
    highlight: '5–10 KM Catchment Dominance',
    clinicalTag: 'Dominating Local Search & Maps',
  },
  {
    iconType: 'chart',
    title: 'Transparent Performance Tracking',
    desc: 'Live 24/7 practice dashboard tracking qualified inquiries, consult show-ups, patient acquisition cost, and verified ROI.',
    highlight: 'Real Seated Telemetry',
    clinicalTag: 'Live 24/7 Practice Dashboard',
  },
  {
    iconType: 'shield',
    title: 'Continuous Optimization & No-Show Shield',
    desc: 'Automated WhatsApp token confirmations and GPS reminder alerts that slash clinic empty chair no-shows by up to 78%.',
    highlight: '91.5%+ Show-Up Rate',
    clinicalTag: 'WhatsApp Automated Token Bot',
  },
];

// ══════════════════════════════════════════════════
// SECTION 08 DATA: FAQS
// ══════════════════════════════════════════════════
const dentalFaqs = [
  {
    q: 'Why should a dental clinic hire a specialized digital marketing agency for dentists?',
    a: 'General marketing agencies lack an understanding of clinical dental terminology, procedure value, and the difference between emergency toothache searches and elective cosmetic dentistry. As a specialized agency for dentists, Marketing Copilot creates DCI-compliant patient funnels specifically tailored for dental implants, clear aligners, and family dentistry that convert searchers into seated patients.',
  },
  {
    q: 'How do SEO services for dentists in India help my clinic attract local patients?',
    a: 'Our SEO services for dentists in India focus on hyperlocal search dominance. When a prospective patient in your locality searches "dentist near me" or "best dental clinic in [area]", Google highlights the Maps 3-Pack. We optimize your citations, clinic category architecture, localized treatment landing pages, and patient review velocity to ensure your clinic ranks at the top.',
  },
  {
    q: 'What is the typical timeline to see a steady influx of dental patient inquiries?',
    a: 'High-intent Google Ads and WhatsApp booking funnels can start generating qualified patient inquiries within 5 to 7 days of launch. Hyperlocal Google Maps 3-Pack optimization and organic SEO typically achieve compounding leadership within 60 to 90 days.',
  },
  {
    q: 'How do you prevent dental appointment no-shows?',
    a: 'We implement an automated WhatsApp No-Show Shield. When a patient books an appointment, they receive an immediate token confirmation. At 24 hours and 2 hours prior to chair time, the system sends friendly reminder messages with doctor credentials, clinic Google Maps directions, and prep instructions. This drives patient attendance rates up to 91.5%+.',
  },
  {
    q: 'Are your digital marketing campaigns compliant with medical and dental advertising ethics?',
    a: 'Yes, 100%. We adhere to professional healthcare advertising standards. We never use sensationalized claims, deceptive before/after manipulation, or unethical discount promos. All content focuses on patient education, authentic smile transformations with verified patient consent, and doctor credibility.',
  },
  {
    q: 'Can you help our practice target high-value procedures like Dental Implants and Aligners?',
    a: 'Yes. That is our core specialty. Rather than burning budget on low-margin scaling checkups, we build bespoke patient funnels for single tooth implants, full mouth All-on-4 rehabilitation, and clear aligners targeted at affluent catchment zones with clear financing and consultation options.',
  },
];

// ══════════════════════════════════════════════════
// SIX-STAGE MARKETING CAPABILITIES JOURNEY DATA
// All 6 integrated capabilities clearly visible & explained
// ══════════════════════════════════════════════════
const marketingJourneyStages = [
  {
    step: '01',
    name: 'Meta Ads',
    role: 'Awareness & Audience Discovery',
    iconType: 'meta',
    desc: 'Reach local families and working professionals browsing Instagram and Facebook with aesthetic smile transformations and procedural education.',
    highlight: 'Catchment Discovery',
  },
  {
    step: '02',
    name: 'Google Ads',
    role: 'High-Intent Patient Capture',
    iconType: 'search',
    desc: 'Target people actively searching for dental clinics, emergency toothache relief, and high-ticket surgical procedures in real time.',
    highlight: 'Search Intent to Consult',
  },
  {
    step: '03',
    name: 'SEO + AEO/GEO',
    role: 'Organic Search & AI Discovery',
    iconType: 'seo',
    desc: 'Build long-term organic visibility on Google and ensure your clinic is recommended by AI-powered search engines (ChatGPT, Gemini).',
    highlight: 'Compounding Organic Moat',
  },
  {
    step: '04',
    name: 'Social Media & YouTube',
    role: 'Patient Trust & Video Authority',
    iconType: 'video',
    desc: 'Doctor video explainers, sterilized clinic walkthroughs, and treatment Reels that alleviate dental anxiety and build clinical trust.',
    highlight: 'Doctor Authority & Trust',
  },
  {
    step: '05',
    name: 'Google Business Profile & Maps',
    role: '5–10 km Catchment Dominance',
    iconType: 'mappin',
    desc: 'Dominate Google Maps 3-Pack with optimized local listings, geo-tagged photography, and automated 5-star WhatsApp review acquisition.',
    highlight: 'Local 3-Pack Rankings',
  },
  {
    step: '06',
    name: 'Content Marketing',
    role: 'Clinical Authority & PR Growth',
    iconType: 'content',
    desc: 'Clinical treatment guides, dental blog articles, and PR content that establish niche authority and convert readers into consultation candidates.',
    highlight: 'Authority & PR Growth',
  },
];

// ══════════════════════════════════════════════════
// ══════════════════════════════════════════════════
// SECTION 05B DATA: DUAL-PANEL CLINICAL STORYTELLING
// ══════════════════════════════════════════════════
interface ClinicalStory {
  id: string;
  tabLabel: string;
  badge: string;
  procedureTag: string;
  title: string;
  hook: string;
  narrative: {
    step: string;
    phase: string;
    title: string;
    desc: string;
  }[];
  metrics: { val: string; label: string }[];
  image: string;
  imageAlt: string;
  imageTag: string;
  quote: string;
  doctor: string;
  doctorClinic: string;
}

const clinicalStories: ClinicalStory[] = [
  {
    id: 'implants',
    tabLabel: '🦷 Full-Arch Implants',
    procedureTag: 'Surgical Dental Implants',
    badge: 'HIGH-TICKET ACQUISITION',
    title: 'From Missing Teeth to Confirmed Full-Arch Restoration',
    hook: 'Negative-scrubbed Google Search funnels capturing high-ticket implant cases while screening out bargain seekers.',
    narrative: [
      {
        step: '01',
        phase: 'INTENT CAPTURE',
        title: 'High-Intent Distress Queries',
        desc: 'Targeting searches like "permanent fixed teeth near me" across affluent local catchments while filtering out cheap bargain seekers.',
      },
      {
        step: '02',
        phase: 'CLINICAL TRUST',
        title: '3D CBCT Guided Surgery Preview',
        desc: 'Custom landing pages showcasing sterilized operatory walkthroughs and transparent 0% EMI plans eliminate surgical anxiety.',
      },
      {
        step: '03',
        phase: 'CHAIR BOOKING',
        title: '1-Tap WhatsApp Slot Confirmation',
        desc: 'Frictionless WhatsApp booking assigns immediate priority operatory slots, achieving a verified 92.4% show-up rate.',
      },
    ],
    metrics: [
      { val: '₹1.85L', label: 'Avg Case Value' },
      { val: '₹220', label: 'Qualified CPL' },
      { val: '92.4%', label: 'Operatory Show-Up' },
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Maxillofacial implant surgeon reviewing 3D CBCT digital scan with surgical guide',
    imageTag: 'CBCT 3D GUIDED SURGERY',
    quote: '"Every patient scheduled in Operatory 2 is financially pre-qualified for surgical implants."',
    doctor: 'Dr. R. Malhotra, MDS (Implantology)',
    doctorClinic: 'Apex Dental & Implant Studio, New Delhi',
  },
  {
    id: 'aligners',
    tabLabel: '✨ Clear Aligners & Veneers',
    procedureTag: 'Cosmetic & Orthodontics',
    badge: 'AESTHETIC PATIENT FUNNEL',
    title: 'Turning Smile Insecurity into Premium Aesthetic Consultations',
    hook: 'High-definition 3D smile simulations converting 22–38 year-old working professionals across Instagram.',
    narrative: [
      {
        step: '01',
        phase: 'SOCIAL DISCOVERY',
        title: 'Local Catchment Social Discovery',
        desc: 'Hyper-targeted Instagram smile transformation reels reaching working professionals within a 7 km clinic radius.',
      },
      {
        step: '02',
        phase: 'EMOTIONAL HOOK',
        title: 'Interactive 3D Smile Simulator',
        desc: 'Digital before-and-after smile alignment previews transform passive social browsing into an urgent desire for clinic treatment.',
      },
      {
        step: '03',
        phase: 'CHAIR BOOKING',
        title: 'Direct Diagnostic Scan Reservation',
        desc: 'Patients claim an introductory 3D iTero diagnostic scan consultation directly with flexible monthly EMI financing options.',
      },
    ],
    metrics: [
      { val: '68+', label: 'Monthly Inquiries' },
      { val: '4.8X', label: 'Verified ROAS' },
      { val: '64%', label: 'Chair Conversion' },
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Patient smiling during digital aesthetic veneer and clear aligner consultation',
    imageTag: 'AESTHETIC SMILE STUDIO',
    quote: '"Our clear aligner chair bookings tripled in 60 days. Patients arrive already convinced about the clinical outcome."',
    doctor: 'Dr. S. Nambiar, MDS (Orthodontics)',
    doctorClinic: 'Elite Aligners & Aesthetic Studio, Bangalore',
  },
  {
    id: 'local-3pack',
    tabLabel: '📍 Local 3-Pack Catchment',
    procedureTag: 'Google Maps 3-Pack Dominance',
    badge: 'HYPERLOCAL DOMINANCE',
    title: 'Dominating Acute Dental Searches Across 42 Micro-Catchments',
    hook: 'Automated 5-star WhatsApp reviews and geo-grid SEO turning Google Maps into a 24/7 patient funnel.',
    narrative: [
      {
        step: '01',
        phase: 'LOCAL SEARCH',
        title: '#1 Google Maps 3-Pack Locking',
        desc: 'Dominating top positions for "emergency dentist near me" across all micro-catchments within 5–10 km.',
      },
      {
        step: '02',
        phase: 'SOCIAL PROOF',
        title: '320+ Verified 5★ Patient Reviews',
        desc: 'Geo-tagged operatory photography and clinical reviews ensure searchers choose your practice over competitors.',
      },
      {
        step: '03',
        phase: 'GPS FOOTFALL',
        title: 'Turn-by-Turn GPS Navigation',
        desc: 'Direct click-to-call and map navigation lead acute emergency patients straight to your clinic reception desk.',
      },
    ],
    metrics: [
      { val: 'Top 3', label: 'In 42 Catchments' },
      { val: '+180%', label: 'Directions & Calls' },
      { val: '4.9★', label: '320+ Reviews' },
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Modern sterile dental operatory clinic welcoming emergency patient',
    imageTag: 'MAPS 3-PACK DOMINANCE',
    quote: '"Nearby families walk into our clinic daily saying Google Maps recommended us #1 with glowing 5-star reviews."',
    doctor: 'Dr. A. Joshi, BDS (Aesthetic & Family Care)',
    doctorClinic: 'Dr. SmileCraft Dental Care, Mumbai',
  },
  {
    id: 'family',
    tabLabel: '👨‍👩‍👧 Family & Preventative Care',
    procedureTag: 'Family & Pediatric Care',
    badge: 'LIFETIME PATIENT RETENTION',
    title: 'Converting Anxious First-Timers into Decades of Multi-Family Loyalty',
    hook: 'Fear-free clinical branding and automated recall workflows ensuring full recurring appointment books.',
    narrative: [
      {
        step: '01',
        phase: 'FEAR-FREE',
        title: 'Sterility & Pain-Free Assurance',
        desc: 'Highlighting Class-B autoclave sterilization and gentle sedation options eliminates phobia for parents and kids.',
      },
      {
        step: '02',
        phase: 'CLINICAL TRUST',
        title: 'Doctor-Led Operatory Tours',
        desc: 'Authentic video walkthroughs build deep doctor authority and eliminate clinical dread before the first visit.',
      },
      {
        step: '03',
        phase: 'RECALL ENGINE',
        title: '6-Month Automated Recall Workflow',
        desc: 'Automated WhatsApp hygiene recall reminders maintain an 86% recurring cleaning and check-up booking rate.',
      },
    ],
    metrics: [
      { val: '86%', label: 'Recall Rate' },
      { val: '3.4X', label: 'Family Referrals' },
      { val: '₹140', label: 'Blended CPL' },
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Family dentist conducting gentle consultation with patient',
    imageTag: 'FEAR-FREE FAMILY DENTISTRY',
    quote: '"Our appointment books for hygiene cleanings and family consultations are booked solid thanks to the automated recall engine."',
    doctor: 'Dr. N. Roy, MDS (Pediatric Dentistry)',
    doctorClinic: 'Roy Family Dental Clinic, New Delhi',
  },
];

export default function DentalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isProcessPaused, setIsProcessPaused] = useState<boolean>(false);
  const [activeCase, setActiveCase] = useState<number>(0);
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const activeStory = clinicalStories[activeStoryIdx];

  // Auto rotate hero clinical slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dentalHeroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto rotate onboarding & scale process steps (2-second interval)
  useEffect(() => {
    if (isProcessPaused) return;
    const processTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % growthProcessSteps.length);
    }, 2000);
    return () => clearInterval(processTimer);
  }, [isProcessPaused]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const activeCs = caseStudies[activeCase];

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 01: HERO SECTION                           */}
      {/* Repositioned: Leads, Consultations & Growth         */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.splashCyan} aria-hidden="true" />
        <div className={styles.splashViolet} aria-hidden="true" />
        <div className={styles.splashAmber} aria-hidden="true" />
        <div className={styles.ambientMesh} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroInner}>
            <ScrollReveal className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>PRACTICE GROWTH ACCELERATOR • DENTAL SECTOR</span>
              </div>

              <h1 className={styles.heroHeadline}>
                More Qualified Patient Leads.{' '}
                <span className={styles.heroAccent}>More Dental Consultations.</span>{' '}
                Sustainable Practice Growth.
              </h1>

              <p className={styles.heroSub}>
                We help dental clinics attract high-intent patients, generate qualified enquiries, and convert digital visibility into real treatment opportunities through an integrated dental marketing strategy.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Get Your Dental Growth Strategy"
                  size="md"
                />
                <BeamButton
                  href="#services"
                  label="Explore Our Services"
                  variant="outline"
                  size="md"
                  arrow={false}
                />
              </div>

              <div className={styles.trustStrip}>
                <span className={styles.trustItem}>
                  <span className={styles.star}>★★★★★</span>
                  <span>4.9/5 Rating (45+ Dental Practices)</span>
                </span>
                <span className={styles.trustSep}>•</span>
                <span className={styles.trustItem}>
                  <span className={styles.trustDot} />
                  <span>15,000+ Booked Consultations</span>
                </span>
                <span className={styles.trustSep}>•</span>
                <span className={styles.trustItem}>
                  <span className={styles.trustDot} />
                  <span>100% HIPAA &amp; DCI Ethical</span>
                </span>
              </div>
            </ScrollReveal>

            {/* Right Visual Showcase: Clinical Photography + Floating Badges */}
            <ScrollReveal delay={120}>
              <div className={styles.visual}>
                <div className={styles.imageCard}>
                  {/* Floating Performance Glass Badges */}
                  <div className={styles.floatingBadgeTop}>
                    <div className={styles.floatingBadgeIcon}>📈</div>
                    <div className={styles.floatingBadgeText}>
                      <span className={styles.floatingBadgeVal}>+240% Inquiries</span>
                      <span className={styles.floatingBadgeSub}>High-Intent Inflow</span>
                    </div>
                  </div>

                  <div className={styles.floatingBadgeBottom}>
                    <div className={styles.floatingBadgeIcon}>🛡️</div>
                    <div className={styles.floatingBadgeText}>
                      <span className={styles.floatingBadgeVal}>91.5% Show-Up Rate</span>
                      <span className={styles.floatingBadgeSub}>WhatsApp No-Show Shield</span>
                    </div>
                  </div>

                  <div className={styles.imageViewport}>
                    {dentalHeroSlides.map((slide, idx) => (
                      <div
                        key={idx}
                        className={`${styles.slideItem} ${idx === currentSlide ? styles.slideActive : ''}`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={idx === 0}
                          className={styles.slideImage}
                          sizes="(max-width: 960px) 100vw, 560px"
                        />
                        <div className={styles.slideOverlay} />
                      </div>
                    ))}

                    {/* Slide Dots */}
                    <div className={styles.dotsWrap}>
                      {dentalHeroSlides.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          className={`${styles.dot} ${dotIdx === currentSlide ? styles.dotActive : ''}`}
                          onClick={() => setCurrentSlide(dotIdx)}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* METRICS BAR                                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.metricsBar}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricVal}>+240%</div>
              <div className={styles.metricLabel}>New Patient Inquiries</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricVal}>Top 3</div>
              <div className={styles.metricLabel}>Google Maps Local Rank</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricVal}>-78%</div>
              <div className={styles.metricLabel}>Clinic Chair No-Shows</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricVal}>6.2X</div>
              <div className={styles.metricLabel}>Average Practice ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 02: WHAT WE PROVIDE FOR YOUR DENTAL CLINIC */}
      {/* 6 Skeuomorphic Service Cards + Compact Journey     */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="services" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>CLINICAL GROWTH CAPABILITIES</span>
            </div>
            <h2 className={styles.sectionTitle}>Everything Your Dental Clinic Needs to Attract More Patients</h2>
            <p className={styles.sectionSubtitle}>
              Six integrated marketing capabilities designed to help dental clinics increase visibility, build trust, and generate qualified patient enquiries.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {coreServices.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} className={styles.serviceCol}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIconPod}>
                      {service.iconType === 'meta' && <Icon3DMeta />}
                      {service.iconType === 'search' && <Icon3DSearch />}
                      {service.iconType === 'seo' && <Icon3DSEO />}
                      {service.iconType === 'video' && <Icon3DVideo />}
                      {service.iconType === 'mappin' && <Icon3DMapPin />}
                      {service.iconType === 'content' && <Icon3DContent />}
                    </div>
                    <span className={styles.serviceRoleBadge}>{service.roleBadge}</span>
                  </div>

                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                  <p className={styles.serviceCardDesc}>{service.desc}</p>

                  <div className={styles.serviceTagsWrap}>
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.serviceTagChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className={styles.serviceActionLink}>
                    <span>{service.actionText}</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════ */}
          {/* SIX-STAGE MARKETING CAPABILITIES JOURNEY           */}
          {/* Desktop: 6 Connected Horizontal Cards (Zero Clip)  */}
          {/* Mobile: Vertical Connected 6-Step Timeline         */}
          {/* ══════════════════════════════════════════════════ */}
          <div className={styles.journeyWrapper}>
            <div className={styles.journeyHeader}>
              <div className={styles.journeyPill}>
                <span className={styles.journeyDot} />
                <span>INTEGRATED MARKETING CAPABILITIES JOURNEY</span>
              </div>
              <h3 className={styles.journeyTitle}>
                How All 6 Capabilities Connect to Acquire Dental Patients
              </h3>
              <p className={styles.journeySubtitle}>
                From initial local awareness to qualified treatment enquiries — every capability works in synchronization to build authority and fill operatory chairs.
              </p>
            </div>

            {/* Desktop Horizontal 6-Stage Journey (Visible >= 960px) */}
            <div className={styles.journeyDesktopTrack}>
              <div className={styles.journeyDesktopConnectingLine} />
              <div className={styles.journeyDesktopGrid}>
                {marketingJourneyStages.map((stage, sIdx) => {
                  const isLast = sIdx === 5;
                  return (
                    <div
                      key={sIdx}
                      className={`${styles.journeyStageCard} ${isLast ? styles.journeyStageCardFinal : ''}`}
                    >
                      <div className={styles.stageCardHeader}>
                        <span className={isLast ? styles.stageStepNumFinal : styles.stageStepNum}>
                          STEP {stage.step}
                        </span>
                        <span className={isLast ? styles.stageRoleBadgeFinal : styles.stageRoleBadge}>
                          {stage.highlight}
                        </span>
                      </div>

                      <div className={styles.stageIconSquircle}>
                        {stage.iconType === 'meta' && <Icon3DMeta />}
                        {stage.iconType === 'search' && <Icon3DSearch />}
                        {stage.iconType === 'seo' && <Icon3DSEO />}
                        {stage.iconType === 'video' && <Icon3DVideo />}
                        {stage.iconType === 'mappin' && <Icon3DMapPin />}
                        {stage.iconType === 'content' && <Icon3DContent />}
                      </div>

                      <h4 className={styles.stageCardTitle}>{stage.name}</h4>
                      <p className={styles.stageCardDesc}>{stage.desc}</p>

                      <div className={isLast ? styles.stageFooterBadgeFinal : styles.stageFooterBadge}>
                        <span className={styles.stageCheckIcon}>✓</span>
                        <span>{stage.role}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Vertical Connected Timeline (Visible < 960px) */}
            <div className={styles.journeyMobileTimeline}>
              <div className={styles.mobileTimelineLine} />
              <div className={styles.mobileTimelineSteps}>
                {marketingJourneyStages.map((stage, mIdx) => {
                  const isLast = mIdx === 5;
                  return (
                    <div key={mIdx} className={styles.mobileTimelineItem}>
                      <div className={isLast ? styles.mobileTimelineNodeFinal : styles.mobileTimelineNode}>
                        <span>{stage.step}</span>
                      </div>
                      <div className={`${styles.mobileTimelineCard} ${isLast ? styles.mobileTimelineCardFinal : ''}`}>
                        <div className={styles.mobileCardTopRow}>
                          <div className={styles.mobileCardIcon}>
                            {stage.iconType === 'meta' && <Icon3DMeta />}
                            {stage.iconType === 'search' && <Icon3DSearch />}
                            {stage.iconType === 'seo' && <Icon3DSEO />}
                            {stage.iconType === 'video' && <Icon3DVideo />}
                            {stage.iconType === 'mappin' && <Icon3DMapPin />}
                            {stage.iconType === 'content' && <Icon3DContent />}
                          </div>
                          <div className={styles.mobileCardMeta}>
                            <h4 className={styles.mobileCardTitle}>{stage.name}</h4>
                            <span className={isLast ? styles.mobileCardRoleFinal : styles.mobileCardRole}>{stage.role}</span>
                          </div>
                        </div>
                        <p className={styles.mobileCardDesc}>{stage.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 03: CLINICAL CREATIVE VAULT & ARTIFACTS    */}
      {/* Dual-Panel Storytelling & Best Clinical Visual     */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="creative-vault" className={styles.vaultSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.vaultHeader}>
            <div className={styles.vaultPill}>
              <span className={styles.vaultDot} />
              <span>CLINICAL CREATIVE VAULT • LIVE CAMPAIGN ARTIFACTS</span>
            </div>
            <h2 className={styles.vaultTitle}>
              How High-Value Patients Are Won: Clinical Storytelling &amp; Campaigns
            </h2>
            <p className={styles.vaultSubtitle}>
              Step inside the real patient journey — from the initial late-night distress search to interactive clinical education, overcome fear, and confirmed operatory chair appointments.
            </p>
          </div>

          {/* Segmented Control Procedure Tabs */}
          <div className={styles.segmentedTabsContainer}>
            <div className={styles.segmentedTabsDock}>
              {clinicalStories.map((story, idx) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`${styles.segmentedTabBtn} ${activeStoryIdx === idx ? styles.segmentedTabBtnActive : ''}`}
                  aria-label={`View Story: ${story.tabLabel}`}
                >
                  <span>{story.tabLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* DUAL PANEL: Left Side Narrative Timeline • Right Side Unobstructed Hero Image */}
          <ScrollReveal>
            <div className={styles.dualPanelContainer}>
              <div className={styles.cardTopGlowBeam} aria-hidden="true" />

              {/* LEFT PANEL: Clean Scannable Narrative */}
              <div className={styles.storyContentPanel}>
                <div className={styles.storyTopMeta}>
                  <span className={styles.storyProcedurePill}>{activeStory.procedureTag}</span>
                  <span className={styles.storyCampaignBadge}>
                    <span className={styles.storyLiveDot} />
                    {activeStory.badge}
                  </span>
                </div>

                <h3 className={styles.storyMainTitle}>{activeStory.title}</h3>
                <p className={styles.storyHookText}>{activeStory.hook}</p>

                {/* Elegant Connecting Timeline */}
                <div className={styles.storyTimelineClean}>
                  {activeStory.narrative.map((item, nIdx) => (
                    <div key={nIdx} className={styles.timelineNode}>
                      <div className={styles.timelineTrackCol}>
                        <div className={styles.timelineCircle}>{item.step}</div>
                        {nIdx < activeStory.narrative.length - 1 && (
                          <div className={styles.timelineVerticalLine} />
                        )}
                      </div>
                      <div className={styles.timelineContentCol}>
                        <div className={styles.timelineHeadingRow}>
                          <span className={styles.timelinePhaseTag}>{item.phase}</span>
                          <h4 className={styles.timelineTitle}>{item.title}</h4>
                        </div>
                        <p className={styles.timelineDesc}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sleek Metric Ribbon */}
                <div className={styles.storyMetricRibbon}>
                  {activeStory.metrics.map((m, mIdx) => (
                    <div key={mIdx} className={styles.ribbonMetricItem}>
                      <span className={styles.ribbonMetricVal}>{m.val}</span>
                      <span className={styles.ribbonMetricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Row */}
                <div className={styles.storyCtaRow}>
                  <BeamButton
                    href="/contact"
                    label="Deploy This Campaign Strategy"
                    size="md"
                  />
                  <span className={styles.storyCtaNote}>
                    ✓ Tailored to your local clinic catchment
                  </span>
                </div>
              </div>

              {/* RIGHT PANEL: Unobstructed Hero Clinical Visual & Verification Card */}
              <div className={styles.storyVisualPanel}>
                <div className={styles.heroShowcaseWrap}>
                  {/* Clean, Full-Bleed Clinical Photograph Frame */}
                  <div className={styles.heroImageFrame}>
                    <Image
                      src={activeStory.image}
                      alt={activeStory.imageAlt}
                      fill
                      className={styles.heroImage}
                      sizes="(max-width: 960px) 100vw, 620px"
                      priority
                    />

                    {/* Minimalist Glass Badges on Top Corners */}
                    <div className={styles.heroImageHeader}>
                      <span className={styles.heroTagPill}>{activeStory.imageTag}</span>
                      <span className={styles.heroLivePill}>
                        <span className={styles.heroDot} />
                        Live Patient Flow
                      </span>
                    </div>
                  </div>

                  {/* Clean Doctor Verification Card Positioned Below (Zero image blocking) */}
                  <div className={styles.heroDoctorStrip}>
                    <div className={styles.doctorQuoteRow}>
                      <span className={styles.doctorQuoteMark}>“</span>
                      <p className={styles.doctorQuoteText}>{activeStory.quote}</p>
                    </div>
                    <div className={styles.doctorMetaRow}>
                      <div>
                        <div className={styles.doctorName}>{activeStory.doctor}</div>
                        <div className={styles.doctorClinic}>{activeStory.doctorClinic}</div>
                      </div>
                      <span className={styles.doctorVerifiedBadge}>✓ Verified Practice Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* THE DENTAL ADVANTAGE • Pixel-Aligned Skeuomorphic */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="why-choose-us" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>THE DENTAL ADVANTAGE</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Dental Clinics Choose Marketing Copilot</h2>
            <p className={styles.sectionSubtitle}>
              We specialize exclusively in clinical dental growth, combining deep procedure understanding with proven digital acquisition systems.
            </p>
          </div>

          <div className={styles.whyChooseGrid}>
            {whyChoosePillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} className={styles.whyChooseCol}>
                <div className={styles.whyChooseCard}>
                  <div className={styles.whyChooseTopRow}>
                    <div className={styles.whyChooseIconPod}>
                      {pillar.iconType === 'tooth' && <Icon3DTooth />}
                      {pillar.iconType === 'meta' && <Icon3DMeta />}
                      {pillar.iconType === 'diamond' && <Icon3DDiamond />}
                      {pillar.iconType === 'mappin' && <Icon3DMapPin />}
                      {pillar.iconType === 'chart' && <Icon3DChart />}
                      {pillar.iconType === 'shield' && <Icon3DShield />}
                    </div>
                    <span className={styles.whyChooseHighlight}>{pillar.highlight}</span>
                  </div>
                  <div className={styles.whyChooseBody}>
                    <h3 className={styles.whyChooseTitle}>{pillar.title}</h3>
                    <p className={styles.whyChooseDesc}>{pillar.desc}</p>
                  </div>
                  <div className={styles.whyChooseBottomAnchor}>
                    <span className={styles.whyChooseAnchorDot} />
                    <span className={styles.whyChooseAnchorText}>{pillar.clinicalTag}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 03: HIGH-VALUE DENTAL TREATMENTS           */}
      {/* Clean Unobstructed Photos & 3D Vector Icon Pods    */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="treatments" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>SPECIALIZED CLINICAL PROCEDURES</span>
            </div>
            <h2 className={styles.sectionTitle}>Marketing for High-Value Dental Treatments</h2>
            <p className={styles.sectionSubtitle}>
              Reach patients looking for specialized dental procedures and grow your clinic's high-value treatment services.
            </p>
          </div>

          <div className={styles.treatmentsGrid}>
            {highValueTreatments.map((proc, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} className={styles.treatmentCol}>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentCardTopAccent} aria-hidden="true" />

                  {/* Card Top Header: 3D Vector Icon and Suite Badges (Above image, NOT on image) */}
                  <div className={styles.treatmentTopBar}>
                    <div className={styles.treatmentIconPod}>
                      {proc.iconType === 'aligner' && <Icon3DAligner />}
                      {proc.iconType === 'implant' && <Icon3DImplant />}
                      {proc.iconType === 'tooth' && <Icon3DTooth />}
                      {proc.iconType === 'diamond' && <Icon3DDiamond />}
                      {proc.iconType === 'scale' && <Icon3DScale />}
                      {proc.iconType === 'shield' && <Icon3DShield />}
                    </div>

                    <div className={styles.treatmentMetaBadgeWrap}>
                      <span className={styles.treatmentTargetBadge}>{proc.targetBadge}</span>
                      <span className={styles.treatmentSeqNum}>SUITE 0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Clean, unobstructed procedural photography - ZERO text above the image */}
                  <div className={styles.treatmentImageFrame}>
                    <Image
                      src={proc.image}
                      alt={proc.alt}
                      fill
                      className={styles.treatmentImage}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 360px"
                    />
                  </div>

                  <div className={styles.treatmentHeadGroup}>
                    <h3 className={styles.treatmentTitle}>{proc.title}</h3>
                    <div className={styles.treatmentCandidate}>
                      <span className={styles.candidateDot} />
                      <span>{proc.scope}</span>
                    </div>
                  </div>

                  <p className={styles.treatmentDesc}>{proc.desc}</p>

                  <div className={styles.treatmentImpactBox}>
                    <div className={styles.impactBoxHeader}>
                      <span className={styles.impactSpark}>⚡</span>
                      <span className={styles.impactBoxLabel}>Practice Outcome</span>
                    </div>
                    <div className={styles.impactBoxValue}>
                      <span className={styles.impactFocusText}>{proc.impactFocus}</span>
                      <span className={styles.impactDot}>•</span>
                      <span className={styles.impactChairText}>{proc.impactChair}</span>
                    </div>
                  </div>

                  <div className={styles.treatmentChipsWrap}>
                    {proc.chips.map((chip, cIdx) => (
                      <span key={cIdx} className={styles.treatmentChip}>
                        <span className={styles.chipCheck}>✓</span>
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className={styles.treatmentActionBtn}>
                    <span className={styles.actionBtnLabel}>Scale {proc.title.split(' ')[0]} Cases</span>
                    <span className={styles.actionBtnArrow}>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 04: OUR PROCESS                            */}
      {/* 5-Step Methodology • Auto-Rotating Console         */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="process" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>FIVE-PHASE METHODOLOGY</span>
            </div>
            <h2 className={styles.sectionTitle}>How We Turn Dental Marketing Into Patient Enquiries</h2>
            <p className={styles.sectionSubtitle}>
              A structured approach that connects strategy, marketing execution, and continuous optimization.
            </p>
          </div>

          <div
            className={styles.roadmapContainer}
            onMouseEnter={() => setIsProcessPaused(true)}
            onMouseLeave={() => setIsProcessPaused(false)}
            onTouchStart={() => setIsProcessPaused(true)}
            onTouchEnd={() => setIsProcessPaused(false)}
          >
            {/* Desktop Horizontal Highway Stepper */}
            <div className={styles.roadmapHighway}>
              <div className={styles.roadmapTrackLine} aria-hidden="true" />
              {growthProcessSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`${styles.roadmapStationBtn} ${isActive ? styles.stationActive : ''}`}
                    aria-label={`Select Phase ${step.step}: ${step.title}`}
                  >
                    <div className={styles.stationBeacon}>
                      <span className={styles.stationNumber}>{step.step}</span>
                      <span className={styles.stationPulseDot} />
                    </div>
                    <div className={styles.stationMeta}>
                      <span className={styles.stationTimeBadge}>{step.timeframe}</span>
                      <span className={styles.stationTitleText}>{step.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Desktop Executive Spotlight Cockpit Console */}
            {(() => {
              const current = growthProcessSteps[activeStep];
              return (
                <div className={styles.roadmapCockpit}>
                  <div className={styles.cockpitLeft}>
                    <div className={styles.cockpitLeftTop}>
                      <div key={`tags-${activeStep}`} className={`${styles.cockpitPhaseTagRow} ${styles.textShift}`}>
                        <span className={styles.cockpitPhasePill}>PHASE {current.step} // {current.category}</span>
                        <span className={styles.cockpitTimeframePill}>⏱️ {current.timeframe}</span>
                      </div>
                      <h3 key={`title-${activeStep}`} className={`${styles.cockpitTitle} ${styles.textShift}`}>{current.title}</h3>
                      <p key={`obj-${activeStep}`} className={`${styles.cockpitObjective} ${styles.textShift}`}>{current.objective}</p>
                      <div key={`metric-${activeStep}`} className={`${styles.cockpitMetricStrip} ${styles.textShift}`}>
                        <span>⚡ Target Output:</span>
                        <span>{current.keyMetric}</span>
                      </div>
                    </div>
                    <div>
                      <BeamButton
                        href="/contact"
                        label={`Deploy Phase ${current.step} Protocol`}
                        size="sm"
                      />
                    </div>
                  </div>

                  <div className={styles.cockpitRight}>
                    <div className={styles.cockpitDeliverablesTitleRow}>
                      <span className={styles.cockpitDeliverablesHeader}>Execution Deliverables</span>
                      <span className={styles.cockpitLiveBadge}>● Active Protocol</span>
                    </div>
                    <div className={styles.cockpitDeliverablesMatrix}>
                      {current.deliverables.map((item, dIdx) => {
                        const staggerClass = dIdx === 0 ? styles.staggerShift1 : dIdx === 1 ? styles.staggerShift2 : styles.staggerShift3;
                        return (
                          <div key={`card-${activeStep}-${dIdx}`} className={`${styles.deliverableRowCard} ${staggerClass}`}>
                            <div className={styles.deliverableIconPod}>{item.icon}</div>
                            <div className={styles.deliverableTextCol}>
                              <div className={styles.deliverableTitle}>{item.title}</div>
                              <p className={styles.deliverableDesc}>{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Mobile Continuous Subway Flow */}
            <div className={styles.mobileSubwayFlow}>
              <div className={styles.mobileSubwayTrack} aria-hidden="true" />
              {growthProcessSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.mobileStepCard} ${isActive ? styles.mobileStepCardActive : ''}`}
                  >
                    <div className={`${styles.mobileStepNode} ${isActive ? styles.mobileStepNodeActive : ''}`}>{step.step}</div>
                    <div className={styles.mobileStepHeader}>
                      <span className={styles.mobileStepCategory}>{step.category}</span>
                      <span className={styles.mobileStepTimeBadge}>{step.timeframe}</span>
                    </div>
                    <h4 className={styles.mobileStepTitle}>{step.title}</h4>
                    <p className={styles.mobileStepDesc}>{step.shortDesc}</p>
                    <div className={styles.mobileStepDeliverables}>
                      {step.deliverables.map((item, dIdx) => (
                        <span key={dIdx} className={styles.mobileDeliverableChip}>
                          {item.icon} {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 05: CASE STUDIES & REAL RESULTS            */}
      {/* VERIFIED PRACTICE TELEMETRY with Clinical Photos   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="case-studies" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>VERIFIED PRACTICE TELEMETRY</span>
            </div>
            <h2 className={styles.sectionTitle}>Real Dental Marketing. Measurable Growth.</h2>
            <p className={styles.sectionSubtitle}>
              See how strategic digital marketing helps dental practices improve visibility, attract enquiries, and grow their patient acquisition efforts.
            </p>
          </div>

          <div className={styles.caseStudiesSectionWrapper}>
            {/* Interactive Clinic Selector Tabs */}
            <div className={styles.caseStudyTabs}>
              {caseStudies.map((cs, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCase(idx)}
                  className={`${styles.caseStudyTab} ${activeCase === idx ? styles.caseStudyTabActive : ''}`}
                  aria-label={`View Case Study: ${cs.clinic}`}
                >
                  <span className={styles.tabBadge}>{cs.category}</span>
                  <span className={styles.tabClinic}>{cs.clinic}</span>
                  <span className={styles.tabLocation}>📍 {cs.location}</span>
                </button>
              ))}
            </div>

            {/* Active Case Study Spotlight Card with Clinic Photography */}
            <ScrollReveal>
              <div className={styles.caseStudyCard}>
                <div className={styles.caseInfoCol}>
                  {/* Top Eyebrow Row */}
                  <div className={styles.caseHeaderRow}>
                    <div className={styles.caseClientBadge}>
                      <span className={styles.liveTelemetryLed} />
                      <span>{activeCs.tag}</span>
                    </div>
                    <div className={styles.caseDoctorBadge}>
                      <span>👨‍⚕️ {activeCs.doctor}</span>
                    </div>
                  </div>

                  {/* Clean Prominent Headline */}
                  <h3 className={styles.caseTitle}>
                    {activeCs.headline}
                  </h3>

                  {/* Illustrated Challenge vs Deployed Playbook Badges */}
                  <div className={styles.caseChallengeSolution}>
                    <div className={styles.caseCSBlockChallenge}>
                      <div className={styles.csLabelChallenge}>
                        <span>⚠️ Practice Challenge</span>
                      </div>
                      <p className={styles.csTextChallenge}>{activeCs.challenge}</p>
                    </div>
                    <div className={styles.caseCSBlockStrategy}>
                      <div className={styles.csLabelStrategy}>
                        <span>🚀 Deployed Playbook</span>
                      </div>
                      <p className={styles.csTextStrategy}>{activeCs.strategy}</p>
                    </div>
                  </div>

                  {/* 3 High-Impact Result Metric Cards */}
                  <div className={styles.caseMetricsRow}>
                    {activeCs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={styles.caseMetricBox}>
                        <span className={styles.caseMetricVal}>{m.value}</span>
                        <span className={styles.caseMetricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote & Action Button */}
                  <div className={styles.caseBottomBar}>
                    <div className={styles.caseQuoteBox}>
                      <span className={styles.caseQuoteMark}>“</span>
                      <p className={styles.caseQuoteInline}>{activeCs.quote}</p>
                    </div>
                    <div className={styles.caseCtaWrap}>
                      <BeamButton
                        href="/contact"
                        label="Replicate Growth"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Illustrated Clinical Case Artifact & Practice Telemetry Showcase */}
                <div className={styles.caseVisualColumn}>
                  <div className={styles.caseArtifactContainer}>
                    {/* Top Status Header */}
                    <div className={styles.caseArtifactHeader}>
                      <span className={styles.caseArtifactClinic}>{activeCs.clinic}</span>
                      <span className={styles.caseArtifactLivePill}>
                        <span className={styles.caseArtifactDot} />
                        Verified Data
                      </span>
                    </div>

                    {/* Operatory Photo Frame */}
                    <div className={styles.caseImageFrame}>
                      <Image
                        src={activeCs.image}
                        alt={activeCs.alt}
                        fill
                        className={styles.caseImage}
                        sizes="(max-width: 900px) 100vw, 420px"
                      />
                    </div>

                    {/* Illustrated Growth Telemetry Card */}
                    <div className={styles.caseTelemetryOverlay}>
                      <div className={styles.telemetryEyebrowRow}>
                        <span className={styles.telemetryCategoryBadge}>{activeCs.telemetry.badge}</span>
                        <span className={styles.telemetrySurgePill}>{activeCs.telemetry.growthRate}</span>
                      </div>

                      <div className={styles.telemetryComparisonRow}>
                        <div className={styles.telemetryValCol}>
                          <span className={styles.telemetryValLabel}>Initial Baseline</span>
                          <span className={styles.telemetryValInitial}>{activeCs.telemetry.beforeVal}</span>
                        </div>
                        <span className={styles.telemetryArrow}>→</span>
                        <div className={styles.telemetryValCol}>
                          <span className={styles.telemetryValLabel}>After 90 Days</span>
                          <span className={styles.telemetryValResult}>{activeCs.telemetry.afterVal}</span>
                        </div>
                      </div>

                      {/* Visual Growth Progress Track */}
                      <div className={styles.telemetryProgressBar}>
                        <div
                          className={styles.telemetryProgressFill}
                          style={{ width: `${activeCs.telemetry.progressPercent}%` }}
                        />
                      </div>

                      {/* Clinical Verification Checklist */}
                      <div className={styles.telemetryChecklistRow}>
                        {activeCs.telemetry.footers.map((item, fIdx) => (
                          <span key={fIdx} className={styles.telemetryCheckChip}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 05B: VISUAL CREATIVE VAULT & LIVE ASSETS   */}
      {/* 100% Graphics & Image-Oriented Patient Showcase   */}
      {/* ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 06: TRADITIONAL VS. DENTAL MARKETING       */}
      {/* Minimal Single-Window Benchmark Comparison Card    */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="comparison" className={styles.sectionBlockCompact}>
        <div id="problems" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }} />
        <div className={styles.comparisonContainer}>
          <div className={styles.sectionHeaderCompact}>
            <div className={styles.sectionPillCompact}>
              <span>DENTAL PRACTICE GROWTH BENCHMARK</span>
            </div>
            <h2 className={styles.sectionTitleCompact}>Why Our Dental Marketing Approach Goes Beyond Traditional Marketing</h2>
            <p className={styles.sectionSubtitleCompact}>
              When your practice partners with Marketing Copilot, clinical growth shifts from unpredictable walk-ins to a predictable, high-value patient acquisition engine.
            </p>
          </div>

          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeaderRow}>
              <div className={styles.comparisonColTitle}>
                <span className={styles.comparisonColBadge}>BENCHMARK</span>
                <span>Practice Growth Dimension</span>
              </div>
              <div className={styles.comparisonGenericHeader}>
                <span className={styles.genericHeaderBadge}>✕</span>
                <div className={styles.headerTitleWrap}>
                  <div className={styles.genericHeaderMain}>Without Specialized Support</div>
                  <div className={styles.headerSubtext}>Traditional Agencies &amp; Guesswork</div>
                </div>
              </div>
              <div className={styles.comparisonCopilotHeader}>
                <div className={styles.copilotHeaderTop}>
                  <span className={styles.copilotPillBadge}>★ PROVEN DENTAL ACCELERATOR</span>
                </div>
                <div className={styles.copilotHeaderTitleRow}>
                  <span className={styles.copilotBrandIcon}>🦷</span>
                  <span className={styles.copilotBrandText}>With Marketing Copilot Support</span>
                </div>
              </div>
            </div>

            <div className={styles.comparisonRowsList}>
              {dentalComparison.map((row, idx) => (
                <div key={idx} className={styles.comparisonRow}>
                  <div className={styles.featureCell}>
                    <div className={styles.featureIconSquircle}>
                      {row.iconType === 'tooth' && <Icon3DTooth />}
                      {row.iconType === 'mappin' && <Icon3DMapPin />}
                      {row.iconType === 'diamond' && <Icon3DDiamond />}
                      {row.iconType === 'shield' && <Icon3DShield />}
                      {row.iconType === 'scale' && <Icon3DScale />}
                      {row.iconType === 'chart' && <Icon3DChart />}
                    </div>
                    <div className={styles.featureTextCol}>
                      <span className={styles.featureTitleText}>{row.feature}</span>
                      <span className={styles.featureSubtext}>{row.subtext}</span>
                    </div>
                  </div>

                  <div className={styles.comparisonCellsWrap}>
                    <div className={styles.genericCell}>
                      <div className={styles.genericCrossBadge}>✕</div>
                      <div className={styles.genericCellText}>
                        <span className={styles.genericRowTag}>{row.genericTitle}</span>
                        <span className={styles.genericDesc}>{row.generic}</span>
                      </div>
                    </div>

                    <div className={styles.copilotCell}>
                      <div className={styles.copilotCheckBadge}>✓</div>
                      <div className={styles.copilotCellText}>
                        <span className={styles.copilotRowTag}>{row.copilotTitle}</span>
                        <span className={styles.copilotDesc}>{row.copilot}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Proof & Guarantee Strip */}
            <div className={styles.comparisonFooterStrip}>
              <div className={styles.comparisonFooterLeft}>
                <span className={styles.footerShieldIcon}>🛡️</span>
                <span>
                  <strong>Dedicated Practice Growth Partner:</strong> Engineered to fill specialized operatory chairs and grow your dental practice sustainably.
                </span>
              </div>
              <div className={styles.comparisonBeamBtnWrap}>
                <BeamButton
                  href="/contact"
                  label="Claim Free Practice Growth Audit"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION A: ADDRESS & LOCATION                      */}
      {/* Placed Before FAQ as Requested                     */}
      {/* ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection
        id="location"
        eyebrow="CLINIC GROWTH PARTNER • OFFICE LOCATION & CONNECT"
        title={
          <>
            Visit Our Headquarters or<br />
            <span style={{ color: '#0B2093' }}>Connect With Our Dental Growth Team</span>
          </>
        }
        subtitle="Serving dental clinics, multi-specialty practices, and implant centers across India. Connect with our dental marketing strategists to review your local catchment area and discuss practice growth."
      />

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION B: FREQUENTLY ASKED QUESTIONS (FAQ)        */}
      {/* Placed Immediately After Address                   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="faq" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions About Dental Marketing</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our specialized dental marketing services, patient acquisition timelines, and ethical advertising compliance.
            </p>
          </div>

          <div className={styles.faqList}>
            {dentalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}>
                  <button
                    type="button"
                    className={styles.faqButton}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.faqQuestionGroup}>
                      <span className={styles.faqNumBadge}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className={`${styles.faqQuestionText} ${isOpen ? styles.faqQuestionTextActive : ''}`}>
                        {faq.q}
                      </span>
                    </div>
                    <div className={`${styles.faqToggleIconCircle} ${isOpen ? styles.faqToggleIconCircleActive : ''}`}>
                      {isOpen ? '✕' : '+'}
                    </div>
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION C: FINAL PRE-FOOTER CTA BANNER             */}
      {/* Placed Immediately After FAQ                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="cta" className={styles.preFooterSection}>
        <div className={styles.container}>
          <div className={styles.preFooterCard}>
            <div className={styles.preFooterEyebrow}>
              <span className={styles.heroEyebrowDot} />
              CONFIDENTIAL DENTAL PRACTICE REVIEW
            </div>

            <h2 className={styles.preFooterTitle}>
              Ready to Attract More Patients <span className={styles.heroAccent}>to Your Dental Practice?</span>
            </h2>

            <p className={styles.preFooterSub}>
              Let's build a dental marketing strategy that connects your clinic with the right patients and generates meaningful treatment enquiries.
            </p>

            <div className={styles.preFooterActions}>
              <BeamButton
                href="/contact"
                label="Get Your Dental Growth Strategy"
                size="lg"
              />
              <a
                href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20run%20a%20dental%20practice%20and%20want%20to%20discuss%20patient%20acquisition"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCtaBtn}
              >
                <span>💬 Book a Consultation</span>
              </a>
            </div>

            <div className={styles.preFooterProof}>
              <div className={styles.preFooterProofItem}>
                <span className={styles.preFooterProofNum}>+240%</span>
                <span className={styles.preFooterProofLabel}>Avg Patient Inflow</span>
              </div>
              <span className={styles.preFooterProofDot} />
              <div className={styles.preFooterProofItem}>
                <span className={styles.preFooterProofNum}>91.5%</span>
                <span className={styles.preFooterProofLabel}>Chair Arrival Rate</span>
              </div>
              <span className={styles.preFooterProofDot} />
              <div className={styles.preFooterProofItem}>
                <span className={styles.preFooterProofNum}>100%</span>
                <span className={styles.preFooterProofLabel}>DCI &amp; HIPAA Ethical</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
