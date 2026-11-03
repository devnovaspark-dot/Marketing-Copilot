'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import DentalPatientCalculator from './_components/DentalPatientCalculator';
import styles from './page.module.css';

// ══════════════════════════════════════════════════
// DATA: HERO CLINICAL PHOTOGRAPHY SLIDES
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
// DATA: BOTTLENECKS (PUNCHY, SIMPLE, EQUAL SIZED)
// ══════════════════════════════════════════════════
const dentalBottlenecks = [
  {
    code: 'DEFECT 01',
    metricBadge: '-82% FOOTFALL LOSS',
    badgeType: 'critical',
    icon: '📍',
    title: 'Maps Invisibility Trap',
    symptom: 'Catchment Area Blindspot',
    desc: '82% of patients search "dentist near me". Ranking outside Google Maps 3-Pack loses high-margin footfalls to nearby chains.',
    solution: 'Dominant Maps 3-Pack rank with automated review velocity & local geo-tagging.',
  },
  {
    code: 'DEFECT 02',
    metricBadge: '₹200 LEADS VS ₹1.5L VALUE',
    badgeType: 'warning',
    icon: '💸',
    title: 'Low-Ticket Ad Waste',
    symptom: 'Ad Budget Hemorrhage',
    desc: 'Generic agencies waste ad spend on ₹200 routine check-ups rather than high-yield surgical implants and clear aligners.',
    solution: 'Negative-scrubbed search funnels targeted at high-intent surgical & cosmetic patients.',
  },
  {
    code: 'DEFECT 03',
    metricBadge: '35% STERILIZATION LOSS',
    badgeType: 'critical',
    icon: '🚪',
    title: '35% Clinic No-Shows',
    symptom: 'Operatory Chair Downtime',
    desc: 'Online inquiries ghost their scheduled slots, wasting sterilized operatory setups, staff hours, and practice overhead.',
    solution: '1-Tap WhatsApp token confirmation with 24-hr & 2-hr GPS turn-by-turn alerts.',
  },
  {
    code: 'DEFECT 04',
    metricBadge: 'TRUST CONVERSION DROP',
    badgeType: 'warning',
    icon: '⚖️',
    title: 'Medical Ethics Deficit',
    symptom: 'Patient Surgical Anxiety',
    desc: 'Cheap discount gimmicks erode clinical credibility, scare discerning patients away, and invite medical council scrutiny.',
    solution: 'Doctor-vetted educational proof, painless technology showcases & verified smile stories.',
  },
];

// ══════════════════════════════════════════════════
// DATA: HIGH-YIELD PROCEDURES (CONCISE & ALIGNED)
// ══════════════════════════════════════════════════
const dentalProcedures = [
  {
    badge: 'DIAMOND ASSET',
    tierClass: 'tierDiamond',
    ticket: '₹35,000 - ₹2,50,000',
    margin: '72% Margin',
    demand: '8,400/mo search',
    icon: '🦷',
    title: 'Dental Implants & Full Mouth',
    desc: 'Capture mature patients seeking single implants and All-on-4 fixed restorations.',
    deliverables: [
      'High-intent Google Search surgical funnels',
      'Before/after 3D CBCT scan proof landers',
      'Flexible 0% EMI financing packaging',
    ],
    tags: ['Single Implants', 'All-on-4', 'Full Arch'],
  },
  {
    badge: 'AESTHETIC CARE',
    tierClass: 'tierAesthetic',
    ticket: '₹45,000 - ₹1,80,000',
    margin: '68% Margin',
    demand: '14,200/mo search',
    icon: '✨',
    title: 'Clear Aligners & Invisalign',
    desc: 'Attract working professionals and teens wanting discreet teeth straightening.',
    deliverables: [
      'Instagram Reels smile makeover showcases',
      'Free 3D digital smile simulation hook',
      'Direct WhatsApp 1-tap slot scheduling',
    ],
    tags: ['Invisalign', 'Custom Aligners', 'Smile Sim'],
  },
  {
    badge: 'COSMETIC TIER',
    tierClass: 'tierCosmetic',
    ticket: '₹15,000 - ₹80,000',
    margin: '75% Margin',
    demand: '6,100/mo search',
    icon: '👑',
    title: 'Smile Design & Veneers',
    desc: 'Capture premium aesthetic demand for chipped teeth, gaps, and smile makeovers.',
    deliverables: [
      'Ultra-HD macro clinical photography landers',
      'Painless cosmetic treatment messaging',
      'Verified video patient review integration',
    ],
    tags: ['Veneers', 'Bonding', 'Whitening'],
  },
  {
    badge: 'EMERGENCY INFLOW',
    tierClass: 'tierUrgent',
    ticket: '₹3,500 - ₹12,000',
    margin: '80% Margin',
    demand: '22,000/mo search',
    icon: '⚡',
    title: 'Single-Sitting Rotary RCT',
    desc: 'Capture urgent toothache searches from patients needing immediate same-day pain relief.',
    deliverables: [
      'Emergency Google Ads click-to-call setup',
      'Google Maps "Open Now" ranking dominance',
      'Pain-free rotary endodontics messaging',
    ],
    tags: ['Rotary RCT', 'Emergency', 'Zirconia'],
  },
  {
    badge: 'SPECIALTY TECH',
    tierClass: 'tierTech',
    ticket: '₹5,000 - ₹30,000',
    margin: '82% Margin',
    demand: '4,800/mo search',
    icon: '🔬',
    title: 'Laser Dentistry & Gum Care',
    desc: 'Position your practice as a cutting-edge technological center for painless laser surgery.',
    deliverables: [
      'Advanced clinical laser tech showcase reels',
      'Zero scalpel pain & fast healing reassurance',
      'Specialist appointment scheduling funnel',
    ],
    tags: ['Diode Laser', 'Depigmentation', 'Flap'],
  },
  {
    badge: 'FAMILY RETENTION',
    tierClass: 'tierFamily',
    ticket: '₹2,000 - ₹10,000',
    margin: '60% Margin',
    demand: '18,500/mo search',
    icon: '🛡️',
    title: 'Family & Pediatric Care',
    desc: 'Build compounding lifetime patient retention with gentle, anxiety-free pediatric dentistry.',
    deliverables: [
      'Child-friendly clinic tour video showcases',
      'Preventive pit & fissure sealant packages',
      'Automated 6-month recall WhatsApp bot',
    ],
    tags: ['Pediatric', 'Family Plan', '6-Mo Recall'],
  },
];

// ══════════════════════════════════════════════════
// DATA: 4-PILLAR DENTAL ENGINE (CONCISE 2x2 MATRIX)
// ══════════════════════════════════════════════════
const dentalPillars = [
  {
    stage: '01',
    stageName: 'HYPERLOCAL DISCOVERY',
    badge: '45-DAY LOCAL 3-PACK TARGET',
    icon: '📍',
    title: 'Google Maps 3-Pack Dominance',
    desc: 'We optimize your Google Business Profile with verified dental categories, geo-tagged clinical photos, and an automated review bot to secure a Top 3 Maps position.',
    telemetry: [
      { label: 'Rank Speed', val: '30-45 Days' },
      { label: 'Call Lift', val: '+240%' },
      { label: 'Review Score', val: '4.9★ Avg' },
    ],
    deliverables: [
      'Google Maps 3-Pack Citations',
      'Geo-Tagged Clinical Photo Feeds',
      'Automated Review Generation Bot',
      'Local Catchment Landing Pages',
    ],
  },
  {
    stage: '02',
    stageName: 'PATIENT CAPTURE',
    badge: 'ZERO WASTED AD SPEND',
    icon: '🎯',
    title: 'High-Intent Treatment Google Ads',
    desc: 'Capture active searchers for "dental implants in India" and "Invisalign cost". Negative-keyword scrubbing eliminates price-shoppers and protects your budget.',
    telemetry: [
      { label: 'Avg ROAS', val: '6.2X' },
      { label: 'Focus', val: '₹50k+ Cases' },
      { label: 'Lead Cost', val: '₹180 - ₹340' },
    ],
    deliverables: [
      'Negative Keyword Surgical Scrub',
      'High-Ticket Implant Landers',
      'Call Tracking & CRM Integration',
      'Dynamic Keyword Search Ads',
    ],
  },
  {
    stage: '03',
    stageName: 'AUTHORITY & TRUST',
    badge: '100% DCI COMPLIANT',
    icon: '📱',
    title: 'Social Proof & Smile Storytelling',
    desc: 'Turn successful clinical outcomes into thumb-stopping Instagram Reels and video testimonials, highlighting sterilized operatories and authentic patient confidence.',
    telemetry: [
      { label: 'Conv Lift', val: '3.8X' },
      { label: 'Video Reach', val: '120k+ Mo' },
      { label: 'Ethics', val: '100% Compliant' },
    ],
    deliverables: [
      'Patient-Consent Video Showcases',
      'Doctor Authority Video Packaging',
      'Painless Procedure Reassurance',
      'Retargeting Social Funnels',
    ],
  },
  {
    stage: '04',
    stageName: 'RETENTION SHIELD',
    badge: '91.5% CHAIR ARRIVAL',
    icon: '🛡️',
    title: '1-Tap WhatsApp Booking & No-Show Shield',
    desc: 'Our healthcare WhatsApp bot lets patients book in under 30 seconds. Automated 24-hr and 2-hr GPS turn-by-turn navigation alerts slash no-shows by 78%.',
    telemetry: [
      { label: 'No-Shows', val: '-78%' },
      { label: 'Booking Time', val: '<30s' },
      { label: 'Recall Rate', val: '65% 6-Mo' },
    ],
    deliverables: [
      '1-Tap Appointment WhatsApp Bot',
      '24h & 2h GPS Navigation Reminders',
      'Automated Token Pre-Payment',
      '6-Month Preventive Recall Bot',
    ],
  },
];

// ══════════════════════════════════════════════════
// DATA: COMPARISON MATRIX (WITH ICONS)
// ══════════════════════════════════════════════════
const dentalComparison = [
  {
    icon: '🦷',
    feature: 'Clinical Dental Expertise',
    generic: 'Generic copywriters with zero understanding of clinical dental procedures',
    copilot: 'Specialized healthcare strategists trained in implants, aligners & RCT',
  },
  {
    icon: '📍',
    feature: 'Google Maps 3-Pack Rank',
    generic: 'Basic listing without clinical geo-tagging or patient review velocity',
    copilot: 'Guaranteed Local 3-Pack rank with automated 5-star review acquisition',
  },
  {
    icon: '💎',
    feature: 'High-Ticket Procedure Focus',
    generic: 'Broad social ads that attract price-shoppers for ₹200 cleanings',
    copilot: 'Negative-keyword scrubbed PPC capturing ₹50k+ implants & Invisalign',
  },
  {
    icon: '🛡️',
    feature: 'Appointment No-Show Shield',
    generic: 'Leads emailed to clinic inbox with zero follow-up (35%+ no-show rate)',
    copilot: 'Automated 1-tap WhatsApp token confirmation driving 91.5%+ attendance',
  },
  {
    icon: '⚖️',
    feature: 'Medical & Dental Ethics',
    generic: 'High risk of ad account bans from unverified claims or illegal discounts',
    copilot: '100% compliant with DCI guidelines, patient privacy & medical ethics',
  },
  {
    icon: '📊',
    feature: 'Revenue & ROAS Tracking',
    generic: 'Vague reports tracking clicks, impressions, and vanity social likes',
    copilot: 'Live dashboard tracking booked chair revenue, consults & ROAS',
  },
];

// ══════════════════════════════════════════════════
// DATA: FAQS
// ══════════════════════════════════════════════════
const dentalFaqs = [
  {
    q: 'Why should a dental clinic hire a specialized digital marketing agency for dentists?',
    a: 'General marketing agencies do not understand clinical dental terminology, high-ticket treatment margins, or the difference between emergency toothache searches and elective cosmetic dentistry. As a specialized digital marketing agency for dentists, Marketing Copilot creates HIPAA and DCI-compliant patient funnels specifically tailored for dental implants, clear aligners, and family dentistry that convert searchers into seated patients.',
  },
  {
    q: 'How do SEO services for dentists in India help my clinic attract local patients?',
    a: 'Our SEO services for dentists in India focus on local search dominance. When a prospective patient in your city searches "dentist near me" or "best dental clinic in [locality]", Google displays the Maps 3-Pack. We optimize your citations, clinic category architecture, localized clinical service landing pages, and patient review velocity to ensure your clinic ranks at the top.',
  },
  {
    q: 'What is the average timeline to see a steady influx of dental patients?',
    a: 'High-intent Google Ads and WhatsApp booking funnels can start generating qualified patient inquiries within 5 to 7 days of launch. Organic SEO services for dentists in India and Google Maps 3-Pack dominance typically achieve compounding leadership within 60 to 90 days.',
  },
  {
    q: 'How do you prevent dental appointment no-shows?',
    a: 'We implement an automated WhatsApp No-Show Shield. When a patient books an appointment, they receive an immediate token confirmation. At 24 hours and 2 hours prior to chair time, the system sends friendly reminder messages with doctor credentials, clinic Google Maps directions, and prep instructions. This drives patient attendance rates up to 92%+.',
  },
  {
    q: 'Are your digital marketing campaigns compliant with medical and dental advertising ethics?',
    a: 'Yes, 100%. We adhere to professional medical standards. We never use sensationalized claims, deceptive before/after manipulation, or unethical discounts. All content focuses on patient education, authentic smile transformations with verified patient consent, and doctor credibility.',
  },
  {
    q: 'Can you help us target high-ticket procedures like Dental Implants and Invisalign?',
    a: 'Yes. That is our core specialty. Rather than burning ad spend on low-margin scaling checkups, we build bespoke patient funnels for single tooth implants, full mouth All-on-4 rehabilitation, and clear aligners targeted at affluent catchment zones with clear financing options.',
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
      {/* HERO SECTION                                      */}
      {/* Matching Global Skeuomorphic Luxury Design        */}
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
                Turn local patient searches into booked dental chair-time. We deliver end-to-end <strong>Digital Marketing for Dentists</strong> and high-performance <strong>SEO Services for Dentists in India</strong> — dominating Google Maps 3-Pack, scaling ₹50k+ implants &amp; clear aligners, and eliminating costly clinic no-shows.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Claim Free Practice Audit"
                  size="md"
                />
                <BeamButton
                  href="#simulator"
                  label="Simulate Patient ROI"
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
                  <span>₹15Cr+ Patient Revenue</span>
                </span>
                <span className={styles.trustSep}>•</span>
                <span className={styles.trustItem}>
                  <span className={styles.trustDot} />
                  <span>100% HIPAA &amp; DCI Ethical</span>
                </span>
              </div>
            </ScrollReveal>

            {/* Right Visual Showcase: Clean Photography Viewport (No Text Overlays) */}
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
      {/* Placed immediately below hero & metrics bar       */}
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
      {/* BOTTLENECK VS SOLUTION (CRISP, PUNCHY & ALIGNED)  */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>PRACTICE AUDIT PROTOCOL</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Generic Marketing Agencies Fail for Dental Practices</h2>
            <p className={styles.sectionSubtitle}>
              Patients seeking dental treatments are anxious and research-driven. Generic marketing strategies burn budget without filling chairs.
            </p>
          </div>

          <div className={styles.bottleneckGrid}>
            {dentalBottlenecks.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={styles.bottleneckCard}>
                  <div className={styles.cardTopBar}>
                    <div className={styles.cardLedBadge}>
                      <span className={item.badgeType === 'critical' ? styles.ledCritical : styles.ledWarning} />
                      <span>{item.code}</span>
                    </div>
                    <span className={styles.metricLossPill}>{item.metricBadge}</span>
                  </div>

                  <div className={styles.cardIconWrap}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.symptomTag}>{item.symptom}</span>
                  <p className={styles.cardText}>{item.desc}</p>

                  <div className={styles.solutionBox}>
                    <div className={styles.solutionBoxLabel}>
                      <span>✓</span>
                      <span>Copilot Countermeasure</span>
                    </div>
                    <p className={styles.solutionBoxText}>{item.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* HIGH-YIELD PROCEDURES (SYMMETRIC & ALIGNED)       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>CLINICAL REVENUE DRIVERS</span>
            </div>
            <h2 className={styles.sectionTitle}>High-Ticket Dental Procedures We Scale</h2>
            <p className={styles.sectionSubtitle}>
              We engineer dedicated patient acquisition campaigns around high-yield dental procedures that drive real practice profitability.
            </p>
          </div>

          <div className={styles.proceduresGrid}>
            {dentalProcedures.map((proc, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className={styles.procedureCard}>
                  <div className={styles.procedureTopHeader}>
                    <span className={`${styles.procedureTierBadge} ${styles[proc.tierClass]}`}>
                      {proc.badge}
                    </span>
                    <span className={styles.procedureDemandPill}>{proc.demand}</span>
                  </div>

                  <div className={styles.procedureTitleRow}>
                    <span className={styles.procedureIconEmoji}>{proc.icon}</span>
                    <h3 className={styles.procedureTitle}>{proc.title}</h3>
                  </div>

                  <p className={styles.procedureDesc}>{proc.desc}</p>

                  {/* Skeuomorphic Value Console Box */}
                  <div className={styles.procedureSpecConsole}>
                    <div className={styles.specValueCol}>
                      <span className={styles.specLabel}>Procedure Ticket</span>
                      <span className={styles.specTicket}>{proc.ticket}</span>
                    </div>
                    <span className={styles.specMarginPill}>{proc.margin}</span>
                  </div>

                  <div className={styles.deliverablesSectionTitle}>Core Deliverables</div>
                  <ul className={styles.deliverablesList}>
                    {proc.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className={styles.deliverableItem}>
                        <span className={styles.checkCircle}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tagsTray}>
                    {proc.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.procedureTagChip}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.procedureCardCta}>
                    <BeamButton
                      href="/contact"
                      label="Deploy This Patient Funnel"
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
      {/* 4-PILLAR DENTAL ENGINE (2x2 BALANCED CONTROL CONSOLE) */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>OUR PROVEN FRAMEWORK</span>
            </div>
            <h2 className={styles.sectionTitle}>The 4-Pillar Digital Marketing Engine for Dentists</h2>
            <p className={styles.sectionSubtitle}>
              From ranking #1 on Google Maps to driving booked chair appointments for ₹1.5L+ full mouth cases.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {dentalPillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarHeaderRow}>
                    <div className={styles.pillarStagePill}>
                      <span>{pillar.icon}</span>
                      <span>STAGE {pillar.stage} // {pillar.stageName}</span>
                    </div>
                    <span className={styles.pillarBadgePill}>{pillar.badge}</span>
                  </div>

                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>

                  {/* Recessed Telemetry Cluster */}
                  <div className={styles.pillarTelemetryCluster}>
                    {pillar.telemetry.map((t, tIdx) => (
                      <div key={tIdx} className={styles.telemetryCell}>
                        <span className={styles.telemetryCellLabel}>{t.label}</span>
                        <span className={styles.telemetryCellVal}>{t.val}</span>
                      </div>
                    ))}
                  </div>

                  <ul className={styles.pillarDeliverableList}>
                    {pillar.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className={styles.pillarDeliverableItem}>
                        <span className={styles.checkCircle}>✓</span>
                        <span>{deliv}</span>
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
      {/* INTERACTIVE SIMULATOR SECTION                      */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="simulator" className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <DentalPatientCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* CASE STUDY SECTION (DARK LUXURY GLASS COCKPIT)    */}
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
                  Apex Dental &amp; Implant Studio was losing patient volume to large corporate hospitals. Their clinic lacked local Google Maps visibility, and online inquiries suffered from a 42% no-show rate.
                  <br /><br />
                  Marketing Copilot implemented localized <strong>SEO services for dentists in India</strong>, high-intent Google Search campaigns for implants, and an automated WhatsApp appointment verification sequence.
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
                    <div className={styles.caseMetricNumber}>+310%</div>
                    <div className={styles.caseMetricText}>Implant Consults</div>
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
                    "Our chairs for dental implants and smile design are fully booked 3 weeks in advance. Marketing Copilot eliminated tire-kickers and delivered serious patients."
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
      {/* COMPARISON MATRIX (EXECUTIVE CARD WITH ICONS)     */}
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
              <span className={styles.comparisonColTitle}>Growth Capability</span>
              <span className={styles.comparisonGenericHeader}>Generic Digital Agencies</span>
              <span className={styles.comparisonCopilotHeader}>
                <span>★</span>
                <span>Marketing Copilot Dental</span>
              </span>
            </div>

            <div className={styles.comparisonRowsList}>
              {dentalComparison.map((row, idx) => (
                <div key={idx} className={styles.comparisonRow}>
                  <div className={styles.featureCell}>
                    <div className={styles.featureIconSquircle}>{row.icon}</div>
                    <span className={styles.featureTitleText}>{row.feature}</span>
                  </div>

                  <div className={styles.genericCell}>
                    <span className={styles.genericCrossIcon}>✕</span>
                    <span>{row.generic}</span>
                  </div>

                  <div className={styles.copilotCell}>
                    <span className={styles.copilotCheckIcon}>✓</span>
                    <span>{row.copilot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* FAQ SECTION (SKEUOMORPHIC INDEXED ACCENTS)         */}
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
          {/* PRE-FOOTER CTA CARD (MATCHES HOMEPAGE STANDARD)    */}
          {/* ══════════════════════════════════════════════════ */}
          <div className={styles.preFooterSection}>
            <div className={styles.preFooterCard}>
              <div className={styles.preFooterEyebrow}>
                <span className={styles.heroEyebrowDot} />
                CONFIDENTIAL DENTAL PRACTICE REVIEW
              </div>

              <h2 className={styles.preFooterTitle}>
                Ready for Dental Practice Marketing <span className={styles.heroAccent}>That Fills Chairs?</span>
              </h2>

              <p className={styles.preFooterSub}>
                Let's talk about your dental clinic growth. Claim a complimentary 30-minute practice growth assessment, Google Maps catchment audit, and 90-day patient acquisition blueprint tailored to your locality.
              </p>

              <div className={styles.preFooterActions}>
                <BeamButton
                  href="/contact"
                  label="Claim Your Practice Audit Blueprint"
                  size="lg"
                />
                <a
                  href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20run%20a%20dental%20practice%20and%20want%20to%20discuss%20patient%20acquisition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappCtaBtn}
                >
                  <span>💬 WhatsApp a Dental Strategist</span>
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
