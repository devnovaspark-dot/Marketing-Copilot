'use client';

import { useState, useEffect } from 'react';
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
// PHASE 2 DATA: WHAT WE PROVIDE (6 CORE SERVICES)
// ══════════════════════════════════════════════════
const coreServices = [
  {
    iconType: 'meta',
    title: 'Meta Ads Marketing',
    roleBadge: 'AWARENESS & DEMAND',
    desc: 'Generate interest and attract prospective dental patients across Instagram and Facebook. Target specific demographics, neighborhoods, and procedure interests within your clinic’s local radius.',
    tags: ['📍 Local Catchment', '🎥 Video Showcase', '💬 Direct Inquiries'],
    actionText: 'Explore Meta Funnel',
  },
  {
    iconType: 'search',
    title: 'Google Ads Management',
    roleBadge: 'HIGH-INTENT CAPTURE',
    desc: 'Reach patients actively searching for dental treatments and clinics right now. Convert urgent search queries into scheduled chair appointments with zero wasted ad spend.',
    tags: ['🔍 High-Intent Search', '🛡️ Negative Scrubbed', '📞 Click-to-Call'],
    actionText: 'Explore Search Ads',
  },
  {
    iconType: 'seo',
    title: 'SEO + AEO/GEO',
    roleBadge: 'SEARCH & AI DISCOVERY',
    desc: 'Improve organic search visibility so your clinic appears at the top for major treatment keywords across Google, Gemini AI Overviews, ChatGPT, and Perplexity.',
    tags: ['📈 Top Google Ranks', '🤖 AI Search (GEO)', '🌐 Compounding Traffic'],
    actionText: 'Explore SEO Strategy',
  },
  {
    iconType: 'content',
    title: 'Content Marketing',
    roleBadge: 'CLINICAL AUTHORITY',
    desc: 'Build undeniable authority in your dental community with educational guides, FAQs, and treatment breakdowns that alleviate patient dental fear and reinforce clinical trust.',
    tags: ['📚 Educational Guides', '🛡️ Overcome Anxiety', '⭐ Doctor Authority'],
    actionText: 'Explore Content Engine',
  },
  {
    iconType: 'video',
    title: 'Social Media & YouTube',
    roleBadge: 'TRUST & FAMILIARITY',
    desc: 'Humanize your practice with doctor-led procedural explanations, sterilized clinic walkthroughs, and genuine smile transformation reveals that build familiarity before the first visit.',
    tags: ['🎬 Operatory Tours', '✨ Smile Reveals', '🤝 Patient Community'],
    actionText: 'Explore Video Strategy',
  },
  {
    iconType: 'mappin',
    title: 'Google Business Profile & Maps',
    roleBadge: 'LOCAL 3-PACK DOMINANCE',
    desc: 'Dominate Google Maps local search to capture nearby patients looking for dentists in their immediate vicinity. Drive phone calls, map directions, and high-trust foot traffic.',
    tags: ['📍 Maps 3-Pack Rank', '⭐ 5-Star Reviews', '🚗 Turn-by-Turn GPS'],
    actionText: 'Explore Maps Dominance',
  },
];

// ══════════════════════════════════════════════════
// PHASE 3 DATA: MARKETING FUNNEL ARCHITECTURE
// ══════════════════════════════════════════════════
const funnelLayers = [
  {
    step: 'LAYER 01',
    name: 'GENERATE INTEREST',
    channel: 'Meta Ads Marketing',
    iconType: 'meta',
    tag: 'Catchment Awareness',
    objective: 'Attract people interested in dental treatments & generate initial inquiries around the clinic’s target location.',
    visualBadge: 'Social Feed Ads',
    visualDesc: 'Patients discover smile transformation reels & aligner simulations on Instagram.',
  },
  {
    step: 'LAYER 02',
    name: 'CAPTURE HIGH-INTENT SEARCHES',
    channel: 'Google Ads Management',
    iconType: 'search',
    tag: 'Active Search Intent',
    objective: 'Target patients actively searching for specific dental treatments and nearby clinics in and around their city.',
    visualBadge: 'Google Search Ads',
    visualDesc: 'Immediate capture of "dental implants near me" & "clear aligners cost" searches.',
  },
  {
    step: 'LAYER 03',
    name: 'DOMINATE LOCAL DISCOVERY',
    channel: 'Google Business Profile & Google Maps',
    iconType: 'mappin',
    tag: 'Hyperlocal Proximity',
    objective: 'Improve local search presence and help the practice appear in dominant Google Maps 3-Pack positions.',
    visualBadge: 'Google Maps 3-Pack',
    visualDesc: 'Instant clinic directions, tap-to-call, and automated 5-star patient review proof.',
  },
  {
    step: 'LAYER 04',
    name: 'BUILD ORGANIC SEARCH VISIBILITY',
    channel: 'SEO + AEO/GEO',
    iconType: 'seo',
    tag: 'Compounding Organic Presence',
    objective: 'Make the clinic discoverable for relevant treatment searches across traditional search and AI answer engines.',
    visualBadge: 'Organic & AI Search',
    visualDesc: 'Top organic rankings and featured snippets in Google and AI summary answers.',
  },
  {
    step: 'LAYER 05',
    name: 'BUILD AUTHORITY AND TRUST',
    channel: 'Content Marketing & YouTube',
    iconType: 'video',
    tag: 'Decision & Confidence',
    objective: 'Publish educational content and patient video stories that resolve dental anxiety and confirm doctor expertise.',
    visualBadge: 'Clinical Proof & Reels',
    visualDesc: 'Doctor procedural walkthroughs, pain-free technology tours & patient smile reveals.',
  },
];

// ══════════════════════════════════════════════════
// PHASE 4 DATA: HIGH-VALUE DENTAL TREATMENTS
// (NO FIXED PRICES OR ESTIMATED REVENUE PROMISES)
// ══════════════════════════════════════════════════
const highValueTreatments = [
  {
    iconType: 'aligner',
    title: 'Invisalign & Clear Aligners',
    targetBadge: 'AESTHETIC ORTHO',
    scope: 'Target: Working Professionals & Teens',
    desc: 'Attract adults and teens seeking discreet teeth straightening without traditional brackets. High patient compliance and recurring follow-up visits.',
    impactFocus: 'Elective Aesthetic Inflow',
    impactChair: 'High Treatment Compliance',
    chips: ['3D Digital Smile Scans', 'Smile Simulation Hooks', 'WhatsApp Booking'],
  },
  {
    iconType: 'implant',
    title: 'Dental Implants & Full Mouth',
    targetBadge: 'SURGICAL RESTORATION',
    scope: 'Target: Missing Teeth & Mature Adults',
    desc: 'Capture patients seeking permanent single tooth replacement, bridge restorations, or comprehensive All-on-4 full arch rehabilitation.',
    impactFocus: 'Surgical Operatory Saturation',
    impactChair: 'Maximum Chair Utilization',
    chips: ['CBCT Guided Surgery Proof', 'High-Intent Search Ads', 'Flexible 0% EMI Guides'],
  },
  {
    iconType: 'tooth',
    title: 'Crowns & Restorative Dentistry',
    targetBadge: 'STRUCTURAL CARE',
    scope: 'Target: Fractured & Post-RCT Teeth',
    desc: 'Reach patients requiring durable ceramic and zirconia crowns, fixed bridges, and inlays. Builds steady multi-member family retention.',
    impactFocus: 'Predictable Restorative Demand',
    impactChair: 'Compounding Family Recall',
    chips: ['Same-Day Digital CAD/CAM', 'Zirconia Longevity Proof', 'Preventive Recall Bot'],
  },
  {
    iconType: 'diamond',
    title: 'Cosmetic Dentistry & Whitening',
    targetBadge: 'AESTHETIC ENHANCEMENT',
    scope: 'Target: Bridal, Professionals & Smile Makeovers',
    desc: 'Attract patients seeking in-office whitening, diastema closure, and composite bonding. Fast turnover procedures with high emotional referral power.',
    impactFocus: 'Rapid Chair Turnover',
    impactChair: 'High Word-of-Mouth Referrals',
    chips: ['Macro Before/After Portfolios', 'Non-Invasive Prep', 'Event & Bridal Packages'],
  },
  {
    iconType: 'scale',
    title: 'Single-Sitting Rotary RCT',
    targetBadge: 'IMMEDIATE RELIEF',
    scope: 'Target: Acute Toothache Searchers',
    desc: 'Capture urgent toothache searchers seeking gentle, single-sitting endodontic therapy. Converts emergency distress into lifelong patient trust.',
    impactFocus: 'Emergency Local Capture',
    impactChair: 'Immediate Pain Relief Retention',
    chips: ['Emergency Click-to-Call Ads', 'Google Maps Open Now', 'Pain-Free Rotary Messaging'],
  },
  {
    iconType: 'shield',
    title: 'Smile Makeovers & Veneers',
    targetBadge: 'PREMIUM AESTHETICS',
    scope: 'Target: Comprehensive Smile Design',
    desc: 'Position your practice as the premier destination for custom ceramic veneers, aesthetic symmetry, and complete smile transformations.',
    impactFocus: 'High Clinical Prestige',
    impactChair: 'Discerning Aesthetic Patients',
    chips: ['Ultra-HD Clinical Photography', 'Ceramist Craftsmanship', 'Digital Smile Previews'],
  },
];

// ══════════════════════════════════════════════════
// PHASE 5 DATA: OUR PROCESS (ARCHITECTURAL ROADMAP)
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
// PHASE 7 & 8 DATA: DENTAL PRACTICE GROWTH BENCHMARK
// How Clinics Grow With Our Support vs. Others
// ══════════════════════════════════════════════════
const dentalComparison = [
  {
    iconType: 'diamond',
    feature: 'High-Ticket Procedure Scaling',
    subtext: 'Implants, Aligners & Smile Makeovers',
    genericTitle: 'Low-Margin Cleanings Only',
    generic: 'Wastes ad spend attracting ₹500 scaling shoppers; zero traction for profitable implants, veneers, or clear aligner cases.',
    copilotTitle: 'Scalable ₹50k+ Case Pipeline',
    copilot: 'Precision patient funnels capturing qualified candidates ready to invest in high-ticket surgical and cosmetic smile restorations.',
  },
  {
    iconType: 'tooth',
    feature: 'Operatory Chair Utilization',
    subtext: 'Eliminate doctor downtime & empty slots',
    genericTitle: 'Unpredictable Operatory Gaps',
    generic: 'Sporadic walk-ins, inconsistent scheduling, and expensive clinical operatories sitting idle during prime practice hours.',
    copilotTitle: 'Booked 2–3 Weeks in Advance',
    copilot: 'Continuous patient inflow keeping specialized surgical and restorative operatory chairs predictably filled weeks ahead.',
  },
  {
    iconType: 'mappin',
    feature: 'Local Catchment Dominance',
    subtext: 'Google Maps 3-Pack across 5–10 km radius',
    genericTitle: 'Invisible Beyond 1 Kilometer',
    generic: 'Unmanaged profile losing local neighborhood emergency and treatment searches to aggressive corporate dental chains.',
    copilotTitle: 'Dominates Top 3 Local Pack',
    copilot: 'Hyperlocal geo-tagging, schema categories, and automated 5-star WhatsApp review sequences that capture neighborhood footfall.',
  },
  {
    iconType: 'shield',
    feature: 'Patient Show-Up Rate',
    subtext: 'Protect valuable clinical hours from no-shows',
    genericTitle: '35%–45% Clinic No-Shows',
    generic: 'Inquiries dumped into email inbox with zero rapid response, driving high chair cancellations and wasted operatory preparation.',
    copilotTitle: '91.5%+ Seated Attendance',
    copilot: 'Automated 1-tap WhatsApp token bot, clinic GPS navigation directions, and 24h & 2h reminders that ensure patients arrive.',
  },
  {
    iconType: 'scale',
    feature: 'Doctor Authority & Ethics',
    subtext: '100% DCI compliance & patient trust',
    genericTitle: 'Cheap Discounts & Penalty Risk',
    generic: 'Gimmicky discount banners that erode clinical prestige, invite patient skepticism, and risk Dental Council advertising bans.',
    copilotTitle: 'Premier Clinical Authority',
    copilot: 'Strictly DCI-compliant patient education, procedure explainer videos, and clinical smile transformation stories that inspire trust.',
  },
  {
    iconType: 'chart',
    feature: 'Practice Revenue Transparency',
    subtext: 'Track seated chair revenue & verified ROAS',
    genericTitle: 'Vague Vanity Clicks & Likes',
    generic: 'Superficial monthly PDF reports tracking impressions and social clicks with zero clue on actual chair revenue generated.',
    copilotTitle: 'Live 24/7 Practice Dashboard',
    copilot: 'Transparent attribution dashboard tracking booked consultations, patient acquisition cost (CAC), and verified treatment ROI.',
  },
];

// ══════════════════════════════════════════════════
// PHASE 9 DATA: FAQS
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

export default function DentalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isProcessPaused, setIsProcessPaused] = useState<boolean>(false);

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

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 1: HERO SECTION (PRESERVED APPROVED DESIGN) */}
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
                Digital Marketing Agency{' '}
                <span className={styles.heroAccent}>for Dentists</span>
              </h1>

              <p className={styles.heroSub}>
                Turn local patient searches into booked dental chair-time. We deliver end-to-end <strong>Digital Marketing for Dentists</strong> and high-performance <strong>SEO Services for Dentists in India</strong> — dominating Google Maps 3-Pack, scaling implants &amp; clear aligners, and eliminating costly clinic no-shows.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Claim Free Practice Audit"
                  size="md"
                />
                <BeamButton
                  href="#funnel"
                  label="Explore Marketing Funnel"
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

            {/* Right Visual Showcase: Clean Photography Viewport */}
            <ScrollReveal delay={120}>
              <div className={styles.visual}>
                <div className={styles.imageCard}>
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
      {/* HYPERLOCAL MAP CATCHMENT SECTION                   */}
      {/* ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection
        id="dental-connect"
        eyebrow="HYPERLOCAL CATCHMENT RADIUS • PATIENT ACQUISITION"
        title={
          <>
            Connecting Patients to Dental Clinics<br />
            <span style={{ color: '#0B2093' }}>Across Target Localities</span>
          </>
        }
        subtitle="Patients rarely travel more than 5 to 10 kilometers for routine dental treatments, but will travel city-wide for specialized dental implants and cosmetic smile design. We engineer geo-targeted marketing funnels to capture both local footfalls and high-ticket procedure demand."
      />

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 2: WHAT WE PROVIDE FOR YOUR DENTAL CLINIC   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="services" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>INTEGRATED DENTAL MARKETING SERVICES</span>
            </div>
            <h2 className={styles.sectionTitle}>What We Provide for Your Dental Clinic</h2>
            <p className={styles.sectionSubtitle}>
              An integrated digital marketing system designed to help dental practices attract qualified patients, strengthen their online presence, and grow consistently.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {coreServices.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIconPod}>
                      {service.iconType === 'meta' && <Icon3DMeta />}
                      {service.iconType === 'search' && <Icon3DSearch />}
                      {service.iconType === 'seo' && <Icon3DSEO />}
                      {service.iconType === 'content' && <Icon3DContent />}
                      {service.iconType === 'video' && <Icon3DVideo />}
                      {service.iconType === 'mappin' && <Icon3DMapPin />}
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 3: VISUAL DENTAL MARKETING FUNNEL            */}
      {/* Integrated Architecture Diagram                    */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="funnel" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>MARKETING FUNNEL ARCHITECTURE</span>
            </div>
            <h2 className={styles.sectionTitle}>How Our Dental Marketing System Attracts More Patients</h2>
            <p className={styles.sectionSubtitle}>
              Each marketing channel plays a different role in attracting, capturing, and converting potential dental patients.
            </p>
          </div>

          <div className={styles.funnelContainer}>
            {funnelLayers.map((layer, idx) => (
              <div key={idx}>
                <ScrollReveal delay={idx * 50}>
                  <div className={styles.funnelLayerCard}>
                    <div className={styles.funnelLayerMeta}>
                      <div className={styles.funnelLayerIconPod}>
                        {layer.iconType === 'meta' && <Icon3DMeta />}
                        {layer.iconType === 'search' && <Icon3DSearch />}
                        {layer.iconType === 'mappin' && <Icon3DMapPin />}
                        {layer.iconType === 'seo' && <Icon3DSEO />}
                        {layer.iconType === 'video' && <Icon3DVideo />}
                      </div>
                      <div className={styles.funnelLayerStageWrap}>
                        <span className={styles.funnelStepBadge}>{layer.step}</span>
                        <div className={styles.funnelLayerName}>{layer.name}</div>
                      </div>
                    </div>

                    <div className={styles.funnelLayerContent}>
                      <span className={styles.funnelChannelTitle}>{layer.channel}</span>
                      <p className={styles.funnelObjectiveText}>{layer.objective}</p>
                    </div>

                    <div className={styles.funnelVisualPreview}>
                      <div className={styles.funnelPreviewBadge}>
                        <span className={styles.funnelPreviewDot} />
                        <span>{layer.visualBadge}</span>
                      </div>
                      <p className={styles.funnelPreviewDesc}>{layer.visualDesc}</p>
                    </div>
                  </div>
                </ScrollReveal>

                {idx < funnelLayers.length - 1 && (
                  <div className={styles.funnelConnector} aria-hidden="true">
                    <span>▼</span>
                  </div>
                )}
              </div>
            ))}

            {/* Final Stage Destination Card */}
            <ScrollReveal delay={300}>
              <div className={styles.funnelDestinationCard}>
                <div className={styles.funnelDestinationEyebrow}>
                  <span>FINAL DESTINATION // CONVERSION ARCHITECTURE</span>
                </div>
                <h3 className={styles.funnelDestinationTitle}>More Qualified Patient Enquiries</h3>

                <div className={styles.patientJourneyFlow}>
                  <div className={styles.journeyStepItem}>
                    <span className={styles.journeyStepIcon}>📢</span>
                    <span>Awareness</span>
                  </div>
                  <span className={styles.journeyArrow}>→</span>
                  <div className={styles.journeyStepItem}>
                    <span className={styles.journeyStepIcon}>🔍</span>
                    <span>Search &amp; Discovery</span>
                  </div>
                  <span className={styles.journeyArrow}>→</span>
                  <div className={styles.journeyStepItem}>
                    <span className={styles.journeyStepIcon}>🤝</span>
                    <span>Trust</span>
                  </div>
                  <span className={styles.journeyArrow}>→</span>
                  <div className={styles.journeyStepItem}>
                    <span className={styles.journeyStepIcon}>💬</span>
                    <span>Enquiry</span>
                  </div>
                  <span className={styles.journeyArrow}>→</span>
                  <div className={styles.journeyStepItem}>
                    <span className={styles.journeyStepIcon}>🦷</span>
                    <span>Consultation</span>
                  </div>
                </div>

                <p className={styles.funnelDestinationBenefit}>
                  We connect every marketing channel into one synchronized acquisition engine — delivering verified consultation bookings, maximum operatory utilization, and sustainable practice growth.
                </p>

                <div className={styles.funnelDestinationCta}>
                  <BeamButton
                    href="/contact"
                    label="Deploy This Marketing Funnel for Your Clinic"
                    size="md"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 4: HIGH-VALUE DENTAL TREATMENTS WE HELP GROW */}
      {/* (NO FIXED PRICES OR ESTIMATED REVENUE PROMISES)    */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="treatments" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>SPECIALIZED CLINICAL PROCEDURES</span>
            </div>
            <h2 className={styles.sectionTitle}>Marketing for High-Value Dental Treatments</h2>
            <p className={styles.sectionSubtitle}>
              Attract qualified enquiries for specialized dental procedures and help your practice grow its high-value treatment services.
            </p>
          </div>

          <div className={styles.treatmentsGrid}>
            {highValueTreatments.map((proc, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentCardTopAccent} aria-hidden="true" />

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

                  <div className={styles.treatmentHeadGroup}>
                    <h3 className={styles.treatmentTitle}>{proc.title}</h3>
                    <div className={styles.treatmentCandidate}>
                      <span className={styles.candidateDot} />
                      <span>{proc.scope.replace('Target: ', 'Ideal: ')}</span>
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
      {/* PHASE 5: PROVEN ONBOARDING & SCALE                */}
      {/* Architectural Interactive Roadmap Highway         */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="process" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>PROVEN ONBOARDING &amp; SCALE</span>
            </div>
            <h2 className={styles.sectionTitle}>Our Process: From Strategy to Patient Enquiries</h2>
            <p className={styles.sectionSubtitle}>
              A structured five-step methodology engineered to turn local clinical searches into booked operatory chair-time.
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
      {/* AGENCY COMPARISON (PLACED DIRECTLY DOWN PROCESS)   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="comparison" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>DENTAL PRACTICE GROWTH BENCHMARK</span>
            </div>
            <h2 className={styles.sectionTitle}>How We Grow Dental Clinics vs. Traditional Marketing</h2>
            <p className={styles.sectionSubtitle}>
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
                  <strong>Dedicated Practice Growth Partner:</strong> We don&apos;t just run ads — we build a compounding patient acquisition system engineered to fill specialized operatory chairs and grow your dental practice sustainably.
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
      {/* CASE STUDIES & RESULTS (VERIFIED APEX TELEMETRY)   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="case-study" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.caseStudyCard}>
              <div>
                <div className={styles.caseClientBadge}>
                  <span className={styles.liveTelemetryLed} />
                  <span>VERIFIED PRACTICE TELEMETRY // NEW DELHI</span>
                </div>
                <h3 className={styles.caseTitle}>
                  How Apex Dental Studio Scaled From 28 to 94 Monthly New Patient Bookings
                </h3>
                <p className={styles.caseStory}>
                  Apex Dental &amp; Implant Studio was losing patient volume to large corporate hospital chains. Their clinic lacked local Google Maps visibility, and online inquiries suffered from a 42% no-show rate.
                  <br /><br />
                  Marketing Copilot implemented localized <strong>SEO services for dentists in India</strong>, high-intent Google Search campaigns for implants, and an automated WhatsApp appointment verification sequence that slashed chair downtime.
                </p>
                <BeamButton
                  href="/contact"
                  label="Replicate This Success For Your Practice"
                  size="sm"
                />
              </div>

              <div className={styles.caseMetricsCluster}>
                <div className={styles.caseMetricsRow}>
                  <div>
                    <div className={styles.caseMetricNumber}>+235%</div>
                    <div className={styles.caseMetricText}>Patient Bookings</div>
                  </div>
                  <div>
                    <div className={styles.caseMetricNumber}>₹240</div>
                    <div className={styles.caseMetricText}>Cost Per Lead</div>
                  </div>
                  <div>
                    <div className={styles.caseMetricNumber}>91.5%</div>
                    <div className={styles.caseMetricText}>Show-Up Rate</div>
                  </div>
                </div>

                <div className={styles.caseQuoteCard}>
                  <p className={styles.caseQuoteText}>
                    "Our operatory chairs for dental implants and clear aligners are fully booked 3 weeks in advance. Marketing Copilot eliminated bargain-hunters and delivered serious patients who value clinical quality."
                  </p>
                  <span className={styles.caseQuoteAuthor}>
                    — Dr. R. Malhotra, MDS (Prosthodontics &amp; Implantology)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 9: FREQUENTLY ASKED QUESTIONS               */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className={styles.sectionTitle}>Got Questions About Digital Marketing for Dentists?</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our SEO services for dentists in India, patient acquisition costs, and appointment funnels.
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

          {/* ══════════════════════════════════════════════════ */}
          {/* PHASE 10: PRE-FOOTER CTA SECTION                  */}
          {/* ══════════════════════════════════════════════════ */}
          <div className={styles.preFooterSection}>
            <div className={styles.preFooterCard}>
              <div className={styles.preFooterEyebrow}>
                <span className={styles.heroEyebrowDot} />
                CONFIDENTIAL DENTAL PRACTICE REVIEW
              </div>

              <h2 className={styles.preFooterTitle}>
                Ready to Attract More Patients <span className={styles.heroAccent}>to Your Dental Practice?</span>
              </h2>

              <p className={styles.preFooterSub}>
                Let's build a predictable patient acquisition system for your clinic. Schedule a 30-minute growth strategy session, Google Maps catchment review, and custom procedural roadmap.
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
        </div>
      </section>
    </div>
  );
}
