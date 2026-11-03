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
    outcomes: [
      'Targeted local radius discovery',
      'High-engagement smile video ads',
      'Direct social patient inquiries',
    ],
  },
  {
    iconType: 'search',
    title: 'Google Ads Management',
    roleBadge: 'HIGH-INTENT CAPTURE',
    desc: 'Reach patients actively searching for dental treatments and clinics right now. Convert urgent search queries into scheduled chair appointments with zero wasted ad spend.',
    outcomes: [
      'Negative keyword budget protection',
      'Immediate high-intent patient calls',
      'Procedure-focused landing pages',
    ],
  },
  {
    iconType: 'seo',
    title: 'SEO + AEO/GEO',
    roleBadge: 'SEARCH & AI DISCOVERY',
    desc: 'Improve organic search visibility so your clinic appears at the top for major treatment keywords across Google, Gemini AI Overviews, ChatGPT, and Perplexity.',
    outcomes: [
      'Compounding organic patient inflow',
      'AI search engine optimization (GEO)',
      'Treatment-specific clinical rankings',
    ],
  },
  {
    iconType: 'content',
    title: 'Content Marketing',
    roleBadge: 'CLINICAL AUTHORITY',
    desc: 'Build undeniable authority in your dental community with educational guides, FAQs, and treatment breakdowns that alleviate patient dental fear and reinforce clinical trust.',
    outcomes: [
      'Reduces patient procedure anxiety',
      'Strengthens practice organic authority',
      'Answers common patient concerns',
    ],
  },
  {
    iconType: 'video',
    title: 'Social Media & YouTube',
    roleBadge: 'TRUST & FAMILIARITY',
    desc: 'Humanize your practice with doctor-led procedural explanations, sterilized clinic walkthroughs, and genuine smile transformation reveals that build familiarity before the first visit.',
    outcomes: [
      'Doctor credibility video showcases',
      'Authentic smile journey stories',
      'Patient retention & community trust',
    ],
  },
  {
    iconType: 'mappin',
    title: 'Google Business Profile & Maps',
    roleBadge: 'LOCAL 3-PACK DOMINANCE',
    desc: 'Dominate Google Maps local search to capture nearby patients looking for dentists in their immediate vicinity. Drive phone calls, map directions, and high-trust foot traffic.',
    outcomes: [
      'Top 3 Local Map Pack ranking',
      'Automated 5-star review collection',
      'Geo-tagged clinical operatory proof',
    ],
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
    targetBadge: 'DISCREET ORTHODONTICS',
    desc: 'Attract adults, working professionals, and teens wanting discreet teeth straightening without traditional metal brackets.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'High-volume elective procedure that attracts motivated, research-driven patients with strong compliance and recurring follow-up visits.',
    deliverables: [
      'Digital 3D smile scan campaign hooks',
      'Aesthetic confidence social showcases',
      '1-Tap WhatsApp consultation booking',
    ],
  },
  {
    iconType: 'implant',
    title: 'Dental Implants & Full Mouth',
    targetBadge: 'SURGICAL RESTORATION',
    desc: 'Capture patients seeking permanent tooth replacement, single unit implants, or full-arch All-on-4 restorative procedures.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'Maximizes surgical operatory chair utilization and establishes your clinic as an advanced center for restorative excellence.',
    deliverables: [
      'High-intent surgical search campaigns',
      'Painless CBCT guided surgery reassurance',
      'Flexible financing & treatment plan guides',
    ],
  },
  {
    iconType: 'tooth',
    title: 'Dental Crowns & Restorative Dentistry',
    targetBadge: 'STRUCTURAL CARE',
    desc: 'Reach patients requiring durable ceramic and zirconia crowns, fixed bridges, and restorative inlays after fracture or decay.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'Dependable, recurring restorative demand that builds multi-member family loyalty and steady clinical chair-time revenue.',
    deliverables: [
      'Same-day digital CAD/CAM impression proof',
      'Natural aesthetic & durability messaging',
      'Automated preventive recall sequences',
    ],
  },
  {
    iconType: 'diamond',
    title: 'Cosmetic Dentistry & Teeth Whitening',
    targetBadge: 'AESTHETIC ENHANCEMENT',
    desc: 'Attract patients seeking professional in-office whitening, diastema closure, direct composite bonding, and smile touch-ups.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'Fast chair turnover procedures with high emotional satisfaction that generate word-of-mouth referrals and social proof.',
    deliverables: [
      'Macro before-and-after smile portfolios',
      'Gentle, non-invasive cosmetic messaging',
      'Specialized event & bridal smile funnels',
    ],
  },
  {
    iconType: 'scale',
    title: 'Single-Sitting Root Canal Treatment (RCT)',
    targetBadge: 'IMMEDIATE RELIEF',
    desc: 'Capture urgent toothache searches from patients seeking rapid, pain-free single-sitting endodontic therapy to preserve their teeth.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'Converts emergency dental distress into long-term patient loyalty through pain-free rotary technology and swift clinical care.',
    deliverables: [
      'Emergency click-to-call Google Search Ads',
      'Google Maps "Open Now" local dominance',
      'Pain-free rotary endodontics messaging',
    ],
  },
  {
    iconType: 'shield',
    title: 'Smile Makeovers & Porcelain Veneers',
    targetBadge: 'COMPREHENSIVE AESTHETICS',
    desc: 'Position your practice as the premier studio for custom ceramic veneers, aesthetic alignment, and complete smile transformations.',
    benefitLabel: 'Practice Growth Benefit',
    benefit: 'Attracts discerning cosmetic patients seeking artistic craftsmanship, elevating practice reputation and clinical prestige.',
    deliverables: [
      'High-definition clinical photography showcases',
      'Master ceramist craftsmanship stories',
      'Digital smile preview consultation funnels',
    ],
  },
];

// ══════════════════════════════════════════════════
// PHASE 5 DATA: OUR PROCESS (5 SEQUENTIAL STEPS)
// ══════════════════════════════════════════════════
const growthProcessSteps = [
  {
    step: '01',
    title: 'Practice & Market Analysis',
    desc: 'Understand the clinic, local catchment area, services, competing dental practices, and target patient demographics.',
    detail: 'Pin code demand audit & competitive gap mapping',
  },
  {
    step: '02',
    title: 'Marketing Strategy & Planning',
    desc: 'Develop a customized digital marketing roadmap based on the clinic’s objectives, operatory capacity, and treatment priorities.',
    detail: 'Tailored channel mix & procedure roadmap',
  },
  {
    step: '03',
    title: 'Campaign Setup & Execution',
    desc: 'Launch and manage precision search advertising, local SEO, Google Maps 3-Pack optimization, and high-trust content campaigns.',
    detail: 'DCI-compliant funnels, ad creatives & tracking',
  },
  {
    step: '04',
    title: 'Lead Tracking & Optimization',
    desc: 'Monitor inquiry quality, deploy automated WhatsApp appointment verification to slash no-shows, and continually improve campaigns.',
    detail: 'Automated WhatsApp attendance confirmation & ad scrubbing',
  },
  {
    step: '05',
    title: 'Reporting & Growth',
    desc: 'Provide clear performance insights, track booked consultations, identify new procedural opportunities, and refine for continued scale.',
    detail: 'Chair-time analytics & ongoing growth refinement',
  },
];

// ══════════════════════════════════════════════════
// PHASE 7 & 8 DATA: AGENCY COMPARISON
// ══════════════════════════════════════════════════
const dentalComparison = [
  {
    iconType: 'tooth',
    feature: 'Clinical Dental Expertise',
    subtext: 'High-ticket treatment psychology & margins',
    genericTitle: 'Generalist Freelancers',
    generic: 'Zero understanding of clinical procedures, treatment margins, or patient anxiety.',
    copilotTitle: 'Dedicated Dental Team',
    copilot: 'Specialized strategists trained in implants, aligners & restorative full-mouth cases.',
  },
  {
    iconType: 'mappin',
    feature: 'Google Maps 3-Pack Dominance',
    subtext: 'Hyperlocal pin codes & emergency footfall',
    genericTitle: 'Unmanaged Profile',
    generic: 'Basic static listing without geo-tagging, review velocity, or schema moats.',
    copilotTitle: 'Guaranteed 3-Pack Engine',
    copilot: 'Top Local 3-Pack ranking with automated 5-star review acquisition sequences.',
  },
  {
    iconType: 'diamond',
    feature: 'High-Ticket Case Focus',
    subtext: 'Specialized surgical & aesthetic procedures',
    genericTitle: 'Low-Margin Shoppers',
    generic: 'Broad ads burning budget attracting bargain hunters for routine cleanings.',
    copilotTitle: 'High-Margin Pipeline',
    copilot: 'Negative-keyword scrubbed PPC capturing qualified implant & aligner candidates.',
  },
  {
    iconType: 'shield',
    feature: 'Appointment No-Show Shield',
    subtext: 'Eliminate empty chairs & lost clinic time',
    genericTitle: '35%+ No-Show Rate',
    generic: 'Inquiries dumped into email inbox with zero rapid response, driving high no-shows.',
    copilotTitle: '91.5%+ Attendance',
    copilot: 'Automated 1-tap WhatsApp token confirmation, Google Maps directions & calendar sync.',
  },
  {
    iconType: 'scale',
    feature: 'Medical & Dental Ethics',
    subtext: '100% DCI compliance & ad account safety',
    genericTitle: 'Suspension Risk',
    generic: 'Ad account bans from unverified claims or non-compliant discount promotions.',
    copilotTitle: '100% Regulatory Safe',
    copilot: 'Strictly compliant with DCI guidelines, patient privacy standards & clinical ethics.',
  },
  {
    iconType: 'chart',
    feature: 'Chair-Time Attribution',
    subtext: 'Track exact chair consultations & ROAS',
    genericTitle: 'Vanity Metrics Only',
    generic: 'Vague PDF reports tracking impressions, social clicks, and meaningless vanity likes.',
    copilotTitle: 'Live Practice Dashboard',
    copilot: 'Transparent 24/7 dashboard tracking booked chair consultations, inquiries & campaign ROAS.',
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

  // Auto rotate hero clinical slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dentalHeroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

                  <ul className={styles.serviceOutcomesList}>
                    {service.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className={styles.serviceOutcomeItem}>
                        <span className={styles.serviceOutcomeCheck}>✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
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
                  <div className={styles.treatmentTopBar}>
                    <div className={styles.treatmentIconPod}>
                      {proc.iconType === 'aligner' && <Icon3DAligner />}
                      {proc.iconType === 'implant' && <Icon3DImplant />}
                      {proc.iconType === 'tooth' && <Icon3DTooth />}
                      {proc.iconType === 'diamond' && <Icon3DDiamond />}
                      {proc.iconType === 'scale' && <Icon3DScale />}
                      {proc.iconType === 'shield' && <Icon3DShield />}
                    </div>
                    <span className={styles.treatmentTargetBadge}>{proc.targetBadge}</span>
                  </div>

                  <h3 className={styles.treatmentTitle}>{proc.title}</h3>
                  <p className={styles.treatmentDesc}>{proc.desc}</p>

                  <div className={styles.treatmentBenefitBox}>
                    <div className={styles.treatmentBenefitLabel}>
                      <span>★</span>
                      <span>{proc.benefitLabel}</span>
                    </div>
                    <p className={styles.treatmentBenefitText}>{proc.benefit}</p>
                  </div>

                  <ul className={styles.treatmentDeliverablesList}>
                    {proc.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className={styles.treatmentDeliverableItem}>
                        <span className={styles.serviceOutcomeCheck}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.treatmentCtaWrap}>
                    <BeamButton
                      href="/contact"
                      label="Scale This Treatment"
                      variant="outline"
                      size="sm"
                      fullWidth
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 5: OUR PROCESS – HOW WE WORK                */}
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

          <div className={styles.processTimeline}>
            {growthProcessSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={styles.processStepCard}>
                  <div className={styles.processStepTop}>
                    <span className={styles.processStepNumber}>{step.step}</span>
                    <span className={styles.processStepPill}>PHASE {step.step}</span>
                  </div>

                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>

                  <div className={styles.processStepDetail}>
                    <span>⚡</span>
                    <span>{step.detail}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PHASE 6: CASE STUDIES & RESULTS                    */}
      {/* Apex Dental Studio Verified Practice Cockpit       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
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
      {/* PHASE 7 & 8: AGENCY COMPARISON                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>AGENCY COMPARISON</span>
            </div>
            <h2 className={styles.sectionTitle}>Generic Marketing Agencies vs. Marketing Copilot</h2>
            <p className={styles.sectionSubtitle}>
              Why dental clinic owners and multi-specialty practices choose our dedicated clinical growth model over generic social media retainers.
            </p>
          </div>

          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeaderRow}>
              <div className={styles.comparisonColTitle}>
                <span className={styles.comparisonColBadge}>BENCHMARK</span>
                <span>Growth Capability</span>
              </div>
              <div className={styles.comparisonGenericHeader}>
                <span className={styles.genericHeaderBadge}>✕</span>
                <div className={styles.headerTitleWrap}>
                  <div className={styles.genericHeaderMain}>Generic Digital Agencies</div>
                  <div className={styles.headerSubtext}>Generalist Freelancers &amp; Social Retainers</div>
                </div>
              </div>
              <div className={styles.comparisonCopilotHeader}>
                <div className={styles.copilotHeaderTop}>
                  <span className={styles.copilotPillBadge}>★ HIGH-CONVERTING STANDARD</span>
                </div>
                <div className={styles.copilotHeaderTitleRow}>
                  <span className={styles.copilotBrandIcon}>🦷</span>
                  <span className={styles.copilotBrandText}>Marketing Copilot Dental</span>
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
                  <strong>Full Practice Attribution &amp; No-Show Shield:</strong> We engineer end-to-end patient acquisition systems that fill specialized treatment chairs with measurable ROI.
                </span>
              </div>
              <div className={styles.comparisonBeamBtnWrap}>
                <BeamButton
                  href="/contact"
                  label="Switch to Dedicated Dental Growth"
                  size="sm"
                />
              </div>
            </div>
          </div>
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
