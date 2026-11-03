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
// DATA: BOTTLENECKS (SKEUOMORPHIC CLINICAL DIAGNOSTICS)
// ══════════════════════════════════════════════════
const dentalBottlenecks = [
  {
    code: 'DEFECT 01',
    metricBadge: '-82% LOCAL FOOTFALL LOSS',
    badgeType: 'critical',
    icon: '📍',
    title: 'The Google Maps Invisibility Trap',
    symptom: 'Hyperlocal Catchment Blindspot',
    desc: 'Over 82% of dental patients search "dentist near me" or "best dental clinic near me". If your practice sits below position #3 on Google Maps, prospective patients bypass you for corporate chains just 500m away.',
    solution: 'Hyperlocal Dental SEO & Google Maps 3-Pack rank with automated review velocity & clinical geo-tagging.',
  },
  {
    code: 'DEFECT 02',
    metricBadge: '₹200 LEADS VS ₹1.5L VALUE',
    badgeType: 'warning',
    icon: '💸',
    title: 'Low-Ticket Waste vs High-Ticket Value',
    symptom: 'Ad Spend Hemorrhage on Price Shoppers',
    desc: 'Generic ad agencies burn budgets on ₹200 routine check-up leads who never convert into high-margin procedures like Dental Implants, Invisalign, All-on-4, or complete Smile Makeovers.',
    solution: 'Negative-scrubbed search funnels laser-targeted at high-intent cosmetic & surgical implant patients.',
  },
  {
    code: 'DEFECT 03',
    metricBadge: '35% CHAIR STERILIZATION WASTE',
    badgeType: 'critical',
    icon: '🚪',
    title: 'The 35% Dental Clinic No-Show Crisis',
    symptom: 'Expensive Operatory Downtime',
    desc: 'Online inquiries routinely ghost their scheduled chair slots. Every missed appointment wastes sterilized operatory prep, senior specialist hours, and thousands in practice overhead.',
    solution: 'Automated 1-tap WhatsApp token confirmation with 24-hr & 2-hr GPS turn-by-turn navigation reminders.',
  },
  {
    code: 'DEFECT 04',
    metricBadge: 'ZERO TRUST CONVERSION DROP',
    badgeType: 'warning',
    icon: '⚖️',
    title: 'Medical Compliance & Trust Deficit',
    symptom: 'Patient Surgical Anxiety & Hesitation',
    desc: 'Dentistry involves surgical fear and financial hesitation. Cheap discount gimmicks erode clinical credibility, scare affluent patients away, and invite medical council scrutiny.',
    solution: 'Doctor-vetted education, painless clinical showcases, and authentic video smile transformations.',
  },
];

// ══════════════════════════════════════════════════
// DATA: HIGH-YIELD PROCEDURES (TACTILE SPEC SHEETS)
// ══════════════════════════════════════════════════
const dentalProcedures = [
  {
    badge: 'DIAMOND CLINICAL ASSET',
    tierClass: 'tierDiamond',
    ticket: '₹35,000 - ₹2,50,000',
    margin: '72% Case Margin',
    demand: '8,400+ Mo Searches',
    icon: '🦷',
    title: 'Dental Implants & Full Mouth Rehab',
    desc: 'Target mature patients seeking permanent tooth restorations, single-unit titanium implants, and All-on-4 / All-on-6 fixed full-arch dentures.',
    deliverables: [
      'High-intent Google Search surgical campaigns',
      'Before/after 3D CBCT scan proof landers',
      'Senior implantologist authority packaging',
      'Flexible 0% EMI financing funnel setup',
    ],
    tags: ['Single Implants', 'All-on-4', 'Bone Grafting', 'Full Arch'],
  },
  {
    badge: 'HIGH-VALUE AESTHETICS',
    tierClass: 'tierAesthetic',
    ticket: '₹45,000 - ₹1,80,000',
    margin: '68% Case Margin',
    demand: '14,200+ Mo Searches',
    icon: '✨',
    title: 'Clear Aligners & Invisalign',
    desc: 'Attract working professionals, brides-to-be, and teenagers wanting discreet teeth straightening without visible metal brackets or wires.',
    deliverables: [
      'Visual Instagram Reels smile transformation showcases',
      'Free 3D digital smile simulation assessment hook',
      'Direct WhatsApp 1-tap consultation scheduling',
      'Catchment radius geo-fencing around IT & college hubs',
    ],
    tags: ['Invisalign', 'Custom Aligners', 'Smile Simulation', 'Teen Aligners'],
  },
  {
    badge: 'COSMETIC EXCELLENCE',
    tierClass: 'tierCosmetic',
    ticket: '₹15,000 - ₹80,000',
    margin: '75% Case Margin',
    demand: '6,100+ Mo Searches',
    icon: '👑',
    title: 'Smile Makeovers & Porcelain Veneers',
    desc: 'Capture premium aesthetic demand for chipped teeth, deep fluorosis stains, diastema gaps, and complete cosmetic smile rejuvenation.',
    deliverables: [
      'Ultra-HD macro clinical photography landing pages',
      'Painless cosmetic treatment reassurance messaging',
      'Bridal & executive aesthetic positioning',
      'High-conversion video patient review integration',
    ],
    tags: ['Porcelain Veneers', 'Composite Bonding', 'Smile Architecture', 'Whitening'],
  },
  {
    badge: 'EMERGENCY PATIENT INFLOW',
    tierClass: 'tierUrgent',
    ticket: '₹3,500 - ₹12,000',
    margin: '80% Case Margin',
    demand: '22,000+ Mo Searches',
    icon: '⚡',
    title: 'Single-Sitting Rotary Root Canal (RCT)',
    desc: 'Capture emergency toothache searches from patients in immediate pain requiring same-day clinical relief and single-visit endodontics.',
    deliverables: [
      'Emergency Google Ads click-to-call mobile setup',
      'Google Maps "Open Now" ranking dominance',
      'Painless rotary endodontics reassurance copy',
      'Instant WhatsApp clinic location handoff',
    ],
    tags: ['Rotary RCT', 'Emergency Relief', 'Single Sitting', 'Zirconia Crowns'],
  },
  {
    badge: 'SPECIALTY TECHNOLOGY',
    tierClass: 'tierTech',
    ticket: '₹5,000 - ₹30,000',
    margin: '82% Case Margin',
    demand: '4,800+ Mo Searches',
    icon: '🔬',
    title: 'Laser Dentistry & Gum Treatments',
    desc: 'Position your practice as a cutting-edge technological center for painless gum depigmentation, crown lengthening, and frenectomy.',
    deliverables: [
      'Advanced clinical laser tech showcase reels',
      'Minimal bleeding & zero scalpel pain reassurance',
      'Periodontal health patient education funnels',
      'Direct specialist appointment scheduling',
    ],
    tags: ['Diode Laser', 'Gum Depigmentation', 'Laser Frenectomy', 'Flap Surgery'],
  },
  {
    badge: 'COMPOUNDING RETENTION',
    tierClass: 'tierFamily',
    ticket: '₹2,000 - ₹10,000 (Recurring)',
    margin: '60% Case Margin',
    demand: '18,500+ Mo Searches',
    icon: '🛡️',
    title: 'Family & Pediatric Preventive Care',
    desc: 'Build compounding lifetime patient value by capturing young parents seeking gentle, anxiety-free pediatric dental care for their families.',
    deliverables: [
      'Child-friendly clinic tour video showcases',
      'Preventive pit & fissure sealant packages',
      'School-holiday seasonal check-up ad campaigns',
      'Automated 6-month recall WhatsApp bot',
    ],
    tags: ['Pediatric Care', 'Cavity Shield', 'Family Plans', '6-Mo Recalls'],
  },
];

// ══════════════════════════════════════════════════
// DATA: 4-PILLAR DENTAL GROWTH ENGINE (CONTROL MATRIX)
// ══════════════════════════════════════════════════
const dentalPillars = [
  {
    stage: '01',
    stageName: 'HYPERLOCAL DISCOVERY',
    badge: '45-DAY LOCAL 3-PACK TARGET',
    icon: '📍',
    title: 'Local SEO & Google Maps 3-Pack Dominance',
    desc: 'We optimize your Google Business Profile with verified dental procedure categories, geo-tagged clinical operatory photography, medical schema, and an ethical review acquisition engine that puts your clinic in the Top 3 positions across your target 5-10km catchment.',
    telemetry: [
      { label: 'Rank Speed', val: '30-45 Days' },
      { label: 'Call Volume', val: '+240%' },
      { label: 'Review Score', val: '4.9★ Average' },
    ],
    deliverables: [
      'Google Maps 3-Pack Local Citations',
      'Geo-Tagged Clinical Photo Ingestion',
      'Automated 5-Star WhatsApp Review Engine',
      'Local Catchment Landing Pages',
    ],
  },
  {
    stage: '02',
    stageName: 'HIGH-INTENT PATIENT CAPTURE',
    badge: 'ZERO WASTED AD SPEND',
    icon: '🎯',
    title: 'High-Intent Treatment Google Ads (PPC)',
    desc: 'We capture active searchers hunting for "dental implants in India", "Invisalign cost", and "root canal specialist near me". Our rigorous negative keyword scrubbing blocks job seekers and government scheme searches, protecting your marketing budget.',
    telemetry: [
      { label: 'Avg ROAS', val: '6.2X' },
      { label: 'High-Ticket Focus', val: '₹50k+' },
      { label: 'Cost Per Lead', val: '₹180 - ₹340' },
    ],
    deliverables: [
      'Negative Keyword Surgical Shield',
      'High-Ticket Landing Page Funnels',
      'Call Tracking & CRM Attribution',
      'Dynamic Keyword Insertion Ads',
    ],
  },
  {
    stage: '03',
    stageName: 'AUTHORITY & CONVERSION',
    badge: '100% DCI & MEDICAL ETHICS SAFE',
    icon: '📱',
    title: 'Social Proof & Smile Transformation Storytelling',
    desc: 'We turn your successful clinical cases into thumb-stopping Instagram Reels and video patient testimonials. Compliant with medical guidelines, these stories highlight painless treatments, sterilized operatories, and life-changing smile confidence.',
    telemetry: [
      { label: 'Conversion Lift', val: '3.8X' },
      { label: 'Video Reach', val: '120k+ Mo' },
      { label: 'Trust Rating', val: '100% Compliant' },
    ],
    deliverables: [
      'Patient-Consent Transformation Stories',
      'Doctor Credibility & Case Showcases',
      'Painless Procedure Video Reassurance',
      'Brand Retargeting Video Sequences',
    ],
  },
  {
    stage: '04',
    stageName: 'RETENTION & CHAIR REVENUE',
    badge: '91.5% APPOINTMENT ATTENDANCE',
    icon: '🛡️',
    title: '1-Tap WhatsApp Booking & No-Show Shield',
    desc: 'Our automated healthcare bot allows patients to select slots in 30 seconds. Automated 24-hour and 2-hour WhatsApp reminder sequences with clinic navigation links decrease chair no-shows by over 75%, keeping your operatories fully booked.',
    telemetry: [
      { label: 'No-Show Drop', val: '-78%' },
      { label: 'Booking Time', val: '<30 Seconds' },
      { label: 'Recall Rate', val: '65% 6-Mo' },
    ],
    deliverables: [
      '1-Tap Slot Booking WhatsApp Bot',
      '24h & 2h Turn-by-Turn GPS Reminders',
      'Automated Token Pre-Payment Option',
      '6-Month Preventive Recall Engine',
    ],
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

            {/* Right Visual Showcase: Clinical Photography Carousel with Badges */}
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
                        <div className={styles.slideCaption}>
                          <span className={styles.slideCaptionTag}>{slide.tag}</span>
                          <p className={styles.slideCaptionText}>{slide.caption}</p>
                        </div>
                      </div>
                    ))}

                    {/* Floating Top GMB Badge */}
                    <div className={styles.floatingBadgeTop}>
                      <span className={styles.gmbIcon}>📍</span>
                      <span className={styles.gmbBadgeText}>#1 ON GOOGLE MAPS 3-PACK</span>
                    </div>

                    {/* Floating Bottom Inbound Pulse Alert */}
                    <div className={styles.floatingAlertBottom}>
                      <div className={styles.alertPulseDot} />
                      <div className={styles.alertText}>
                        <span className={styles.alertHighlight}>Live Booking:</span> New patient booked "Full Arch Implant Consultation" via WhatsApp
                      </div>
                    </div>

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
      {/* BOTTLENECK VS SOLUTION (SKEUOMORPHIC DIAGNOSTICS) */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>PRACTICE AUDIT PROTOCOL</span>
            </div>
            <h2 className={styles.sectionTitle}>Why Generic Marketing Agencies Fail for Dental Practices</h2>
            <p className={styles.sectionSubtitle}>
              Patients seeking dental treatments are anxious, research-driven, and looking for immediate clinical credibility. Generic marketing strategies burn budget without filling chairs.
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
                      <span>Copilot Clinical Countermeasure</span>
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
      {/* HIGH-YIELD PROCEDURES (TACTILE SPEC SHEETS)       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlockAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>CLINICAL REVENUE DRIVERS</span>
            </div>
            <h2 className={styles.sectionTitle}>High-Ticket Dental Procedures We Scale</h2>
            <p className={styles.sectionSubtitle}>
              We engineer dedicated patient acquisition campaigns around high-yield dental procedures that drive real practice valuation and profitability.
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

                  <div className={styles.deliverablesSectionTitle}>Growth Architecture Deliverables</div>
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
      {/* 4-PILLAR DENTAL ENGINE (SKEUOMORPHIC CONTROL CONSOLE) */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>OUR PROVEN FRAMEWORK</span>
            </div>
            <h2 className={styles.sectionTitle}>The 4-Pillar Digital Marketing Engine for Dentists</h2>
            <p className={styles.sectionSubtitle}>
              From ranking #1 for "dentist near me" to driving booked chair appointments for ₹1.5L+ full mouth cases, here is how our full-funnel system works.
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
                  Apex Dental &amp; Implant Studio was losing patient volume to large corporate hospital dental departments. Their clinic lacked local Google Maps visibility, and online inquiries suffered from a 42% no-show rate.
                  <br /><br />
                  Marketing Copilot implemented localized <strong>SEO services for dentists in India</strong>, high-intent Google Search campaigns for single-tooth and All-on-4 implants, and an automated WhatsApp appointment verification sequence.
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
      {/* COMPARISON MATRIX (SKEUOMORPHIC EXECUTIVE MATRIX)  */}
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

          <div className={styles.tableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Growth Capability</th>
                  <th>Generic Digital Agencies</th>
                  <th>Marketing Copilot Dental Practice Accelerator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableFeature}>Dental Industry Expertise</td>
                  <td className={styles.tableGeneric}>✕ Generic copywriters with zero understanding of clinical procedures</td>
                  <td className={styles.tableCopilot}>✓ Healthcare-trained strategists familiar with implants, RCT, and aligners</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Google Maps 3-Pack Mastery</td>
                  <td className={styles.tableGeneric}>✕ Basic listing setup without clinical geo-tagging or review velocity</td>
                  <td className={styles.tableCopilot}>✓ Guaranteed Local 3-Pack rank with automated 5-star review acquisition</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>High-Ticket Patient Targeting</td>
                  <td className={styles.tableGeneric}>✕ Broad social ads that attract price-shoppers for ₹200 cleanings</td>
                  <td className={styles.tableCopilot}>✓ Negative-keyword scrubbed PPC capturing ₹50k+ implants and Invisalign</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Appointment No-Show Shield</td>
                  <td className={styles.tableGeneric}>✕ Leads emailed to clinic inbox with no follow-up automation (35%+ no-show)</td>
                  <td className={styles.tableCopilot}>✓ Automated 1-tap WhatsApp token confirmation driving 92%+ chair arrival</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Medical Advertising Compliance</td>
                  <td className={styles.tableGeneric}>✕ High risk of account bans due to unverified medical claims and discounts</td>
                  <td className={styles.tableCopilot}>✓ 100% compliant with medical ethics, patient privacy, and dental council norms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* FAQ SECTION                                       */}
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
                <div key={idx} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqButton}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>

          {/* CTA STRIP */}
          <div className={styles.ctaStrip}>
            <h3 className={styles.ctaTitle}>Ready to Fill Your Empty Dental Chairs With High-Value Patients?</h3>
            <p className={styles.ctaText}>
              Get a complimentary 30-minute Dental Practice Growth Audit. We will analyze your Google Maps ranking, competitor implant volume, and provide a clear patient acquisition roadmap.
            </p>
            <div className={styles.ctaActions}>
              <BeamButton
                href="/contact"
                label="Request Free Practice Audit"
                size="md"
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
          </div>
        </div>
      </section>
    </div>
  );
}
