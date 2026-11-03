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
// DATA: BOTTLENECKS
// ══════════════════════════════════════════════════
const dentalBottlenecks = [
  {
    icon: '📍',
    title: 'The Google Maps Invisibility Trap',
    desc: 'Over 82% of dental patients search "dentist near me" or "best dental clinic near me". If your clinic is outside the Google Maps 3-Pack, you lose high-margin patient footfalls to corporate dental chains.',
    solution: 'Dominant Hyperlocal Dental SEO & Google Maps 3-Pack rank with automated review velocity.',
  },
  {
    icon: '💸',
    title: 'Low-Ticket Waste vs High-Ticket Value',
    desc: 'Generic ad agencies waste ad spend generating inquiries for ₹200 routine check-ups instead of high-margin procedures like Dental Implants, Invisalign, All-on-4, and Smile Makeovers.',
    solution: 'High-intent search funnels laser-targeted at high-ticket cosmetic & implant patients.',
  },
  {
    icon: '🚪',
    title: 'The 35% Dental Clinic No-Show Crisis',
    desc: 'Unqualified online leads often fail to show up on the appointment day, leaving valuable clinical chair-time, staff hours, and sterilization prep completely wasted.',
    solution: 'Automated 1-tap WhatsApp token confirmation, 24-hr & 2-hr reminder sequence.',
  },
  {
    icon: '⚖️',
    title: 'Medical Compliance & Trust Deficit',
    desc: 'Dentistry is a high-trust, high-fear medical service. Aggressive, generic commercial ads violate medical ethics and scare discerning patients away.',
    solution: 'Doctor-vetted educational content, painless technology showcases & authentic smile transformation videos.',
  },
];

// ══════════════════════════════════════════════════
// DATA: HIGH-YIELD PROCEDURES
// ══════════════════════════════════════════════════
const dentalProcedures = [
  {
    tag: 'HIGH TICKET ASSET',
    ticket: '₹35,000 - ₹2,50,000',
    title: 'Dental Implants & Full Mouth Rehab',
    desc: 'Target mature patients with missing teeth looking for permanent restorations, single-tooth implants, and All-on-4 / All-on-6 fixed dentures.',
    deliverables: [
      'High-intent Google Search campaigns',
      'Before/after 3D CT scan proof landers',
      'Senior doctor credibility packaging',
      'EMI & flexible financing messaging',
    ],
  },
  {
    tag: 'HIGH VALUE AESTHETICS',
    ticket: '₹45,000 - ₹1,80,000',
    title: 'Clear Aligners & Invisalign',
    desc: 'Attract working professionals, brides-to-be, and teenagers seeking discreet teeth straightening without traditional metal braces.',
    deliverables: [
      'Visual Instagram Reels smile showcases',
      'Free 3D digital smile simulation hook',
      'Direct WhatsApp consultation booking',
      'Catchment area geo-targeted ads',
    ],
  },
  {
    tag: 'COSMETIC DENTISTRY',
    ticket: '₹15,000 - ₹80,000',
    title: 'Smile Makeovers & Porcelain Veneers',
    desc: 'Capture premium aesthetic demand for chipped teeth, severe discoloration, gaps, and complete smile rejuvenation.',
    deliverables: [
      'Ultra-HD macro clinical photography landers',
      'Painless cosmetic treatment reassurance',
      'Celebrity & bridal aesthetic positioning',
      'High-conversion review video integration',
    ],
  },
  {
    tag: 'HIGH VOLUME & URGENT',
    ticket: '₹3,500 - ₹12,000',
    title: 'Single-Sitting Root Canal (RCT)',
    desc: 'Capture emergency pain searches when patients need immediate pain relief and same-day dental appointments.',
    deliverables: [
      'Emergency Google Ads click-to-call setup',
      'Google Maps "Open Now" ranking dominance',
      'Pain-free rotary endodontics messaging',
      'Instant WhatsApp clinic location handoff',
    ],
  },
  {
    tag: 'SPECIALTY CARE',
    ticket: '₹5,000 - ₹30,000',
    title: 'Laser Dentistry & Gum Treatments',
    desc: 'Position your practice as a cutting-edge technological center for painless gum depigmentation, flap surgery, and frenectomy.',
    deliverables: [
      'Advanced clinical tech feature reels',
      'Minimal bleeding & zero pain reassurance',
      'Periodontal health patient education',
      'Direct specialty appointment scheduling',
    ],
  },
  {
    tag: 'LIFETIME PATIENT VALUE',
    ticket: '₹2,000 - ₹10,000 (Recurring)',
    title: 'Family & Pediatric Dentistry',
    desc: 'Build compounding generational retention by capturing young parents seeking gentle, child-friendly preventive dental care.',
    deliverables: [
      'Child-friendly clinic tour video showcases',
      'Preventive pit & fissure sealant packages',
      'School-holiday seasonal check-up ads',
      'Automated 6-month recall WhatsApp bot',
    ],
  },
];

// ══════════════════════════════════════════════════
// DATA: 4-PILLAR DENTAL GROWTH ENGINE
// ══════════════════════════════════════════════════
const dentalPillars = [
  {
    num: 'PILLAR 01',
    title: 'Local SEO & Google Maps 3-Pack Dominance',
    desc: 'We optimize your Google Business Profile with verified dental procedure categories, geo-tagged clinical photos, local medical schema, and an ethical patient review generation engine that ranks your clinic in the Top 3 positions across your entire city.',
    tags: ['Google Maps 3-Pack', 'Local Citations', 'Review Velocity Bot', 'Hyperlocal Catchment'],
  },
  {
    num: 'PILLAR 02',
    title: 'High-Intent Treatment Google Ads (PPC)',
    desc: 'We capture active searchers hunting for "dental implants in India", "Invisalign cost", and "root canal specialist near me". Our rigorous negative keyword scrubbing blocks job seekers and government scheme searches, protecting your marketing budget.',
    tags: ['Negative Keyword Scrubbing', 'Implant & Aligners Funnels', 'Emergency Call Campaigns', 'ROAS Tracking'],
  },
  {
    num: 'PILLAR 03',
    title: 'Social Proof & Smile Transformation Storytelling',
    desc: 'We turn your successful clinical cases into thumb-stopping Instagram Reels and video patient testimonials. Compliant with medical guidelines, these stories highlight painless treatments, sterilized operatories, and life-changing smile confidence.',
    tags: ['Patient Consent Reels', 'Before/After Showcases', 'Doctor Authority Content', '100% Ethical & DCI-Safe'],
  },
  {
    num: 'PILLAR 04',
    title: '1-Tap WhatsApp Booking & No-Show Shield',
    desc: 'Our automated healthcare bot allows patients to select slots in 30 seconds. Automated 24-hour and 2-hour WhatsApp reminder sequences with clinic navigation links decrease chair no-shows by over 75%, keeping your operatories fully booked.',
    tags: ['1-Tap Appointment Bot', 'Google Maps Direct Nav', '24h/2h Pre-Visit Reminders', 'Post-Op Review Engine'],
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
      {/* BOTTLENECK VS SOLUTION                            */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>CHALLENGES SOLVED</span>
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
                  <div className={styles.cardIconWrap}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.desc}</p>
                  <div className={styles.solutionTag}>
                    <span>✓</span>
                    <span>{item.solution}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* HIGH-YIELD PROCEDURES GRID                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock} style={{ background: '#F8FAFC' }}>
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
                  <div className={styles.procedureBadgeRow}>
                    <span className={styles.procedureTag}>{proc.tag}</span>
                    <span className={styles.procedureTicket}>{proc.ticket}</span>
                  </div>
                  <h3 className={styles.procedureTitle}>{proc.title}</h3>
                  <p className={styles.procedureDesc}>{proc.desc}</p>

                  <ul className={styles.deliverablesList}>
                    {proc.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className={styles.deliverableItem}>
                        <span className={styles.checkDot}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.procedureCardCta}>
                    <BeamButton
                      href="/contact"
                      label="Scale This Procedure"
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
      {/* 4-PILLAR DENTAL GROWTH ENGINE                      */}
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
                  <span className={styles.pillarNum}>{pillar.num}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                  <div className={styles.pillarTagList}>
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.pillarTagItem}>
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* INTERACTIVE SIMULATOR SECTION                      */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="simulator" className={styles.sectionBlock} style={{ background: '#F8FAFC' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionPill}>
              <span>PRACTICE ROI SIMULATOR</span>
            </div>
            <h2 className={styles.sectionTitle}>Simulate Your Practice Revenue Growth</h2>
            <p className={styles.sectionSubtitle}>
              Adjust your monthly ad budget and procedure mix to forecast expected patient consultations, chair conversions, and net clinic revenue.
            </p>
          </div>
          <ScrollReveal>
            <DentalPatientCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* CASE STUDY SECTION                                */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.caseStudyCard}>
              <div>
                <div className={styles.caseClientBadge}>VERIFIED DENTAL CASE STUDY</div>
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

              <div className={styles.caseMetricsRow}>
                <div>
                  <div className={styles.caseMetricNumber}>+310%</div>
                  <div className={styles.caseMetricText}>Implant Consultations</div>
                </div>
                <div>
                  <div className={styles.caseMetricNumber}>₹240</div>
                  <div className={styles.caseMetricText}>Cost Per High-Intent Lead</div>
                </div>
                <div>
                  <div className={styles.caseMetricNumber}>91.5%</div>
                  <div className={styles.caseMetricText}>Clinic Show-Up Rate</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* COMPARISON MATRIX                                  */}
      {/* ══════════════════════════════════════════════════ */}
      <section className={styles.sectionBlock} style={{ background: '#F8FAFC' }}>
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
                  <td className={styles.tableGeneric}>Generic copywriters with zero understanding of clinical procedures</td>
                  <td className={styles.tableCopilot}>Healthcare-trained strategists familiar with implants, RCT, and aligners</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Google Maps 3-Pack Mastery</td>
                  <td className={styles.tableGeneric}>Basic listing setup without clinical geo-tagging or review velocity</td>
                  <td className={styles.tableCopilot}>Guaranteed Local 3-Pack rank with automated 5-star review acquisition</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>High-Ticket Patient Targeting</td>
                  <td className={styles.tableGeneric}>Broad social ads that attract price-shoppers for ₹200 cleanings</td>
                  <td className={styles.tableCopilot}>Negative-keyword scrubbed PPC capturing ₹50k+ implants and Invisalign</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Appointment No-Show Shield</td>
                  <td className={styles.tableGeneric}>Leads emailed to clinic inbox with no follow-up automation (35%+ no-show)</td>
                  <td className={styles.tableCopilot}>Automated 1-tap WhatsApp token confirmation driving 92%+ chair arrival</td>
                </tr>
                <tr>
                  <td className={styles.tableFeature}>Medical Advertising Compliance</td>
                  <td className={styles.tableGeneric}>High risk of account bans due to unverified medical claims and discounts</td>
                  <td className={styles.tableCopilot}>100% compliant with medical ethics, patient privacy, and dental council norms</td>
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
