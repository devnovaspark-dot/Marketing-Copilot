'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import CTASection from '@/app/_components/CTASection';
import styles from './ServicePage.module.css';

export interface ServiceAdvantage {
  title: string;
  desc: string;
  badge?: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
  takeaway?: string;
}

export interface ServiceCaseHighlight {
  client: string;
  location: string;
  metric: string;
  metricLabel: string;
  summary: string;
}

export interface ServiceHeroSlide {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  heroImage?: string;
  heroSlides?: ServiceHeroSlide[];
  spotlightImage?: string;
  metrics: { val: string; label: string }[];
  services: { title: string; desc: string; deliverables?: string[] }[];
  process: { step: string; title: string; desc: string }[];
  platforms?: string[];
  localAdvantages?: ServiceAdvantage[];
  caseHighlight?: ServiceCaseHighlight;
  faqs?: ServiceFAQ[];
  calculatorSection?: React.ReactNode;
  thirdSection?: React.ReactNode;
  extraSections?: React.ReactNode;
}

function getPlatformMeta(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes('search console')) {
    return {
      category: 'SERP Crawl & Indexing',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#E8F0FE" />
          <path d="M12 30L20 20L26 26L36 14" stroke="#4285F4" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="14" r="4" fill="#EA4335" />
          <path d="M26 34H36" stroke="#34A853" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M12 34H20" stroke="#FBBC05" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    };
  }
  if (lower.includes('business profile') || lower.includes('google my business') || lower.includes('gmb')) {
    return {
      category: 'Map 3-Pack & Citations',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#E8F0FE" />
          <path d="M12 18L24 12L36 18V34H12V18Z" fill="#1A73E8" />
          <path d="M18 34V22H30V34" fill="#FFFFFF" />
          <path d="M10 18H38L36 14H12L10 18Z" fill="#4285F4" />
          <circle cx="24" cy="28" r="3" fill="#FBBC04" />
        </svg>
      ),
    };
  }
  if (lower.includes('analytics') || lower.includes('ga4')) {
    return {
      category: 'Behavior & Attribution',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#FFF7ED" />
          <rect x="14" y="27" width="5.5" height="9" rx="2.5" fill="#F59E0B" />
          <rect x="22" y="19" width="5.5" height="17" rx="2.5" fill="#D97706" />
          <rect x="30" y="13" width="5.5" height="23" rx="2.5" fill="#EA580C" />
          <circle cx="32.75" cy="13" r="2.5" fill="#C2410C" />
        </svg>
      ),
    };
  }
  if (lower.includes('semrush')) {
    return {
      category: 'Keyword & Gap Matrix',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#FFF1EB" />
          <path d="M24 12C24 12 20 18 20 22C20 25.3 22.7 28 26 28C26.5 28 27 27.9 27.4 27.8C26.8 30.2 24.6 32 22 32C19.8 32 18 30.7 17.2 28.8C16.5 30.2 16 31.8 16 33.5C16 39.3 20.7 44 26.5 44C32.3 44 37 39.3 37 33.5C37 25 24 12 24 12Z" fill="#FF642D" />
        </svg>
      ),
    };
  }
  if (lower.includes('ahrefs')) {
    return {
      category: 'Backlink Authority Spider',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#EFF6FF" />
          <path d="M14 34L24 14L34 34H27.5L24 23.5L20.5 34H14Z" fill="#0058FF" />
          <path d="M21.5 27.5H26.5L24 23.5L21.5 27.5Z" fill="#FF3B30" />
        </svg>
      ),
    };
  }
  if (lower.includes('screaming frog')) {
    return {
      category: 'Technical Spider Audit',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#ECFDF5" />
          <ellipse cx="24" cy="27" rx="12" ry="10" fill="#10B981" />
          <circle cx="18" cy="18" r="4.5" fill="#059669" />
          <circle cx="30" cy="18" r="4.5" fill="#059669" />
          <circle cx="18" cy="18" r="2.2" fill="#FFFFFF" />
          <circle cx="30" cy="18" r="2.2" fill="#FFFFFF" />
          <circle cx="18.5" cy="18" r="1.1" fill="#064E3B" />
          <circle cx="30.5" cy="18" r="1.1" fill="#064E3B" />
          <path d="M19 29C21.5 31.5 26.5 31.5 29 29" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    };
  }
  if (lower.includes('looker') || lower.includes('studio')) {
    return {
      category: 'Live Executive BI',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#F8FAFC" />
          <path d="M14 16L24 22L34 16L24 10L14 16Z" fill="#4285F4" />
          <path d="M14 16V28L24 34V22L14 16Z" fill="#34A853" />
          <path d="M34 16V28L24 34V22L34 16Z" fill="#FBBC04" />
          <circle cx="24" cy="22" r="3.5" fill="#EA4335" />
        </svg>
      ),
    };
  }
  if (lower.includes('next.js') || lower.includes('vercel')) {
    return {
      category: 'Sub-Second Web Vitals',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#0F172A" />
          <path d="M16 16V32M16 16L30 32M32 16V32" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    };
  }
  if (lower.includes('meta') || lower.includes('facebook') || lower.includes('instagram')) {
    return {
      category: 'Paid Social Funnels',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#F0F7FF" />
          <path d="M13 25C13 21 16 18 20 18C23 18 25 20.5 26.5 22.5C28 20.5 30 18 33 18C37 18 40 21 40 25C40 29 37 32 33 32C30 32 28 29.5 26.5 27.5C25 29.5 23 32 20 32C16 32 13 29 13 25Z" stroke="#0081FB" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    };
  }
  if (lower.includes('google ads')) {
    return {
      category: 'Commercial Paid Intent',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#FFFBEB" />
          <path d="M17 14L29 34" stroke="#FBBC04" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M23 14L35 34" stroke="#4285F4" strokeWidth="5.5" strokeLinecap="round" />
          <circle cx="15" cy="32" r="4" fill="#34A853" />
        </svg>
      ),
    };
  }
  if (lower.includes('schema') || lower.includes('json-ld')) {
    return {
      category: 'Rich Snippets & Graph',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#EFF6FF" />
          <circle cx="18" cy="18" r="4.5" fill="#0B2093" />
          <circle cx="30" cy="18" r="4.5" fill="#3B82F6" />
          <circle cx="24" cy="30" r="4.5" fill="#10B981" />
          <path d="M18 18L30 18L24 30Z" stroke="#0B2093" strokeWidth="2.5" fill="none" />
        </svg>
      ),
    };
  }
  if (lower.includes('shopify')) {
    return {
      category: 'E-Commerce Storefront',
      icon: (
        <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#F0FDF4" />
          <path d="M30 16L28 14H20L18 16H14L16 34H32L34 16H30Z" fill="#95BF47" />
          <path d="M22 22C22 21 23 20 24.5 20C26 20 26.5 21 26 22.5C25.5 24 22 25 22 26.5C22 28 23 29 24.5 29C26 29 27 28 27 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    };
  }
  // Default Enterprise Tech Icon
  return {
    category: 'Enterprise Stack',
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#F8FAFC" />
        <circle cx="24" cy="24" r="10" stroke="#0B2093" strokeWidth="3.2" />
        <circle cx="24" cy="24" r="3.5" fill="#F59E0B" />
      </svg>
    ),
  };
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  subtitle,
  description,
  color,
  heroImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  heroSlides,
  spotlightImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  metrics,
  services,
  process,
  platforms,
  localAdvantages,
  caseHighlight,
  faqs,
  calculatorSection,
  thirdSection,
  extraSections,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroSlides || heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides]);

  const defaultAdvantages: ServiceAdvantage[] = localAdvantages || [
    {
      badge: 'Hyperlocal Intelligence',
      title: 'Bhubaneswar Market Targeting',
      desc: 'Pinpoint precision across Patia, Saheed Nagar, Infocity, Nayapalli, Rasulgarh, and the Twin City Cuttack-Bhubaneswar growth corridor.',
    },
    {
      badge: 'Direct Accountability',
      title: 'In-Person Strategic Reviews',
      desc: 'Meet our growth leads face-to-face in Bhubaneswar for transparent sprint retrospectives, live dashboard reviews, and strategic roadmapping.',
    },
    {
      badge: 'Cultural Nuance',
      title: 'Bilingual Odisha Creative Angles',
      desc: 'Campaign angles, festival activations (Raja, Durga Puja, Ratha Yatra), and consumer psychology tailored specifically for Odisha audiences.',
    },
  ];

  const defaultCase: ServiceCaseHighlight = caseHighlight || {
    client: 'Bhubaneswar Enterprise Partner',
    location: 'Patia IT Corridor, Bhubaneswar',
    metric: '+340%',
    metricLabel: 'Qualified Inquiries & Organic Conversions',
    summary: 'Restructured full-funnel digital acquisition architecture, resulting in top-3 Google rankings across high-intent local searches and 4.2X customer acquisition efficiency in under 90 days.',
  };

  const defaultFaqs: ServiceFAQ[] = faqs || [
    {
      q: 'Why should my business choose a Bhubaneswar-based digital marketing team?',
      a: 'A local Bhubaneswar partner brings immediate boots-on-the-ground understanding of local consumer behavior, regional pricing tolerance, hyperlocal search habits, and seasonal buying cycles in Odisha that generic national agencies completely miss.',
    },
    {
      q: 'How fast will we see measurable leads and traffic?',
      a: 'Paid campaigns (Google Ads and Meta Ads) begin generating qualified phone calls and inquiries within 48 to 72 hours of going live. Organic SEO and content compounding typically demonstrate rank acceleration and inbound volume within 60 to 90 days.',
    },
    {
      q: 'What makes Marketing Copilot different from traditional agencies in India?',
      a: 'Marketing Copilot eliminates agency bloat and vanity metrics. We operate with strict attribution modeling, live client reporting dashboards, and weekly performance sprints focused strictly on your bottom-line revenue and ROI.',
    },
    {
      q: 'Can Marketing Copilot handle our entire marketing stack end-to-end?',
      a: 'Yes. From high-speed Next.js web development and conversion-rate optimization to multi-channel paid ads, SEO, and local map pack dominance, our team acts as your dedicated fractional growth team in India.',
    },
  ];

  const bhubaneswarCorridors = [
    {
      hub: 'Patia & Infocity',
      focus: 'Tech & B2B SaaS Ecosystem',
      desc: 'High-density tech corridor, IT campuses, startup incubators, and modern co-working hubs requiring sophisticated enterprise lead funnels.',
    },
    {
      hub: 'Saheed Nagar & Master Canteen',
      focus: 'Commercial Retail & High-Street',
      desc: 'High-footfall central retail strip, lifestyle brands, banks, and clinical centers driven by hyper-localized high-intent Google Maps searches.',
    },
    {
      hub: 'Jaydev Vihar & Nayapalli',
      focus: 'Hospitality & Luxury Real Estate',
      desc: 'Bhubaneswar’s prime residential developments, boutique hotels, high-end dining, and major commercial complexes requiring high-ticket buyer targeting.',
    },
    {
      hub: 'Rasulgarh & Mancheswar IE',
      focus: 'Industrial & B2B Distribution',
      desc: 'Heavy commercial warehousing, automotive dealerships, industrial equipment distributors, and state-wide supply chain enterprises.',
    },
    {
      hub: 'Khandagiri & Patrapada',
      focus: 'Healthcare & Higher Education',
      desc: 'Major multi-specialty hospitals, private universities, coaching academies, and dense residential communities seeking trusted services.',
    },
    {
      hub: 'Twin City Expressway (CTC-BBSR)',
      focus: 'Inter-City Regional Commerce',
      desc: 'The vital arterial lifeline linking Cuttack and Bhubaneswar, capturing statewide wholesale trade, transit commuters, and regional buyers.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.page} style={{ '--accent': color } as React.CSSProperties}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (With Real Unsplash Photography)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>{eyebrow}</span>
              </div>

              <h1
                className={styles.heroTitle}
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <p className={styles.heroSub}>{description}</p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Grow Your Business With Us" size="lg" />
                <a href="#deliverables" className={styles.heroSecondaryBtn}>
                  <span>Explore Deliverables &amp; Roadmap</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>MC</span>
                  <span className={styles.trustAvatar}>BB</span>
                  <span className={styles.trustAvatar}>OD</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              {metrics.map((m) => (
                <div key={m.label} className={styles.telemetryCell}>
                  <span className={styles.tVal} style={{ color }}>{m.val}</span>
                  <span className={styles.tLabel}>{m.label}</span>
                </div>
              ))}
              {metrics.length < 4 && (
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal} style={{ color }}>Bhubaneswar</span>
                  <span className={styles.tLabel}>Regional Growth Hub</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. HYPERLOCAL BHUBANESWAR ADVANTAGE (3 Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.advantageSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Bhubaneswar Hyperlocal Edge
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Why Bhubaneswar Brands Win With <span className="accent-gradient">Marketing Copilot</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '10px auto 0' }}>
              We combine deep regional commercial insights across Odisha with cutting-edge national growth frameworks.
            </p>
          </ScrollReveal>

          <div className={styles.advantageGrid}>
            {defaultAdvantages.map((adv, idx) => (
              <ScrollReveal key={adv.title} delay={idx * 80}>
                <div className={styles.advantageCard}>
                  {adv.badge && <span className={styles.advantageBadge}>{adv.badge}</span>}
                  <h3 className={styles.advantageTitle}>{adv.title}</h3>
                  <p className={styles.advantageDesc}>{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. THIRD SECTION (OPTIONAL e.g. QUICK CONNECT MAP)
         ══════════════════════════════════════════════════ */}
      {thirdSection || <QuickConnectMapSection />}

      {/* ══════════════════════════════════════════════════
          4. CORE SERVICES DELIVERABLES (Skeuomorphic Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.servicesSection} id="deliverables">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Comprehensive Deliverables
            </div>
            <h2 className="display-md" style={{ color: '#0F172A', marginTop: 14 }}>
              {subtitle}
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 680, marginTop: 10 }}>
              Engineered for measurable commercial outcomes, predictable customer acquisition, and durable search dominance.
            </p>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceBar} style={{ background: color }} />
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>

                  {s.deliverables && s.deliverables.length > 0 && (
                    <div className={styles.deliverablesList}>
                      {s.deliverables.map((item) => (
                        <span key={item} className={styles.deliverablePill}>
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link href="/contact" className={styles.serviceCtaLink}>
                    <span>Request Bhubaneswar Strategy</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Interactive Calculator Section */}
      {calculatorSection}

      {/* Optional Live SERP / Interactive Showcase Sections */}
      {extraSections}

      {/* ══════════════════════════════════════════════════
          4. THE COPILOT DIFFERENCE (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              The Copilot Standard
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Traditional Bhubaneswar Agencies vs. <span className="accent-gradient">Marketing Copilot</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 660, margin: '10px auto 0' }}>
              Why forward-thinking brands in Odisha transition away from outdated retainers to our agile sprint performance model.
            </p>
          </ScrollReveal>

          <div className={styles.comparisonGrid}>
            {/* Traditional Agencies */}
            <ScrollReveal delay={60}>
              <div className={styles.comparisonCardBad}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonTitle}>Traditional Agencies</div>
                  <div className={styles.comparisonSub}>Outdated agency retainers &amp; vanity reports</div>
                </div>
                <div className={styles.comparisonRows}>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Reports vanity impressions and superficial traffic with zero pipeline impact</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Account delegated to junior interns; opaque communication loops</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Slow monthly turnaround with zero rapid creative or bid iteration</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Generic national strategies that ignore Odisha consumer psychology</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCross}>✕</span>
                    <span>Locked ad accounts; clients lose data when contracts end</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Marketing Copilot */}
            <ScrollReveal delay={120}>
              <div className={styles.comparisonCardGood}>
                <div className={styles.comparisonWinnerBadge}>★ RECOMMENDED CHOICE</div>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonTitle}>Marketing Copilot</div>
                  <div className={styles.comparisonSub}>Revenue-first fractional growth partner</div>
                </div>
                <div className={styles.comparisonRows}>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Strict attribution tied directly to phone inquiries, booked visits, and sales</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Senior growth strategists leading weekly sprints and direct Slack/WhatsApp access</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Continuous daily campaign adjustments, bid pruning, and weekly creative tests</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>Hyperlocal Odisha intelligence (Raja, Puja seasons, pin code micro-targeting)</span>
                  </div>
                  <div className={styles.comparisonRow}>
                    <span className={styles.rowIconCheck}>✓</span>
                    <span>100% ad account, pixel, and creative IP ownership stays with your business</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. VISUAL SPOTLIGHT WITH REAL PHOTOGRAPHY
         ══════════════════════════════════════════════════ */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightVisual}>
              <ScrollReveal>
                <div className={styles.spotlightImgBox}>
                  <Image
                    src={spotlightImage}
                    alt={`Strategic campaign execution in India — Marketing Copilot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className={styles.spotlightImg}
                  />
                  <div className={styles.spotlightImgOverlay} />
                  <div className={styles.spotlightFloatingBadge}>
                    <span className={styles.spotlightBadgeIcon}>📊</span>
                    <div>
                      <div className={styles.spotlightBadgeTitle}>Real-time Growth Dashboards</div>
                      <div className={styles.spotlightBadgeSub}>Transparent reporting for Bhubaneswar clients</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.spotlightContent}>
              <ScrollReveal delay={150}>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Growth Execution
                </div>
                <h2 className={`display-md ${styles.spotlightTitle}`}>
                  Data-Driven Execution Built for the{' '}
                  <span className="accent-gradient">Bhubaneswar Market.</span>
                </h2>
                <p className={styles.spotlightLead}>
                  We don&apos;t just run tactics; we engineer integrated acquisition architectures. Every campaign is monitored daily, A/B tested continuously, and tied directly to qualified revenue.
                </p>

                <div className={styles.spotlightList}>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Zero Vanity Metric Bias:</strong> We measure phone calls, showroom visits, verified form fills, and actual customer acquisitions.
                    </span>
                  </div>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Hyperlocal Geographic Segmentation:</strong> Bid adjustments tuned by pin code across Patia, Saheed Nagar, Khandagiri, and Cuttack.
                    </span>
                  </div>
                  <div className={styles.spotlightItem}>
                    <span className={styles.spotlightItemIcon}>✓</span>
                    <span className={styles.spotlightItemText}>
                      <strong>Rapid Creative Testing Velocity:</strong> High-impact hooks, regional language creative variants, and dynamic ad copy rotations.
                    </span>
                  </div>
                </div>

                {/* Animated Glowing Border Beam Button */}
                <div style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                  <BeamButton href="/contact" label="Book 1-on-1 Strategy Session" size="md" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. HYPERLOCAL BHUBANESWAR GROWTH CORRIDORS (6 HUBS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.corridorsSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Hyperlocal Reach
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Dominating Key <span className="accent-gradient">Bhubaneswar Commercial Hubs</span>
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 640, margin: '10px auto 0' }}>
              We tailor audience segments, geo-fences, and search clusters across every major commercial micro-market.
            </p>
          </ScrollReveal>

          <div className={styles.corridorsGrid}>
            {bhubaneswarCorridors.map((c, idx) => (
              <ScrollReveal key={c.hub} delay={idx * 60}>
                <div className={styles.corridorCard}>
                  <span className={styles.corridorTag}>{c.focus}</span>
                  <h3 className={styles.corridorTitle}>{c.hub}</h3>
                  <p className={styles.corridorDesc}>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. BHUBANESWAR CASE STUDY HIGHLIGHT (TACTILE SKEUOMORPHIC SHOWCASE)
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.caseCardSkeuo}>
              {/* Dynamic Atmospheric Backlight Glows */}
              <div className={styles.caseGlowAmber} />
              <div className={styles.caseGlowSapphire} />
              <div className={styles.caseCardGlassSheen} />

              {/* Top Bar inside Card */}
              <div className={styles.caseTopBar}>
                <div className={styles.caseStatusBadge}>
                  <span className={styles.caseStatusPulse} />
                  <span>VERIFIED BHUBANESWAR CLIENT CASE STUDY</span>
                </div>
                <div className={styles.caseSectorTag}>
                  <span>Patia &amp; Chandrasekharpur Corridor</span>
                </div>
              </div>

              {/* Main Split Grid: Left Details & Story, Right Visual Architecture + 3 KPI Tiles */}
              <div className={styles.caseMainGrid}>
                {/* Left Column: Client Story & Strategy */}
                <div className={styles.caseInfoCol}>
                  <h3 className={styles.caseClientTitle}>
                    {defaultCase.client}
                  </h3>
                  <div className={styles.caseLocationBadge}>
                    <span className={styles.locationPin}>📍</span>
                    <span>{defaultCase.location}</span>
                  </div>

                  <p className={styles.caseExecutiveSummary}>
                    {defaultCase.summary}
                  </p>

                  {/* Tactile Strategy Chips */}
                  <div className={styles.caseStrategyChips}>
                    <span className={styles.caseStratChip}>
                      <span className={styles.caseStratCheck}>✓</span> Local Geo-Schema Markup
                    </span>
                    <span className={styles.caseStratChip}>
                      <span className={styles.caseStratCheck}>✓</span> Patia Micro-Market Authority
                    </span>
                    <span className={styles.caseStratChip}>
                      <span className={styles.caseStratCheck}>✓</span> High-Intent Buyer Funnel
                    </span>
                  </div>

                  {/* Direct Testimonial Quote Callout Box */}
                  <div className={styles.caseQuoteBox}>
                    <div className={styles.caseQuoteIcon}>“</div>
                    <p className={styles.caseQuoteText}>
                      Marketing Copilot transformed our digital footprint. We went from completely unranked to owning the top spot across all luxury real estate queries in Bhubaneswar.
                    </p>
                    <div className={styles.caseQuoteAuthor}>
                      — Commercial Sales &amp; Growth Directorate, Utkal Royal
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className={styles.caseCtaWrapper}>
                    <BeamButton href="/portfolio" label="Explore All Client Case Studies" size="md" />
                  </div>
                </div>

                {/* Right Column: Visual Real Estate Showcase + 3 Raised Metric Cards */}
                <div className={styles.caseConsoleCol}>
                  {/* Visual Preview Window */}
                  <div className={styles.caseVisualWindow}>
                    <Image
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                      alt={defaultCase.client}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className={styles.caseWindowImg}
                    />
                    <div className={styles.caseWindowOverlay} />
                    <div className={styles.caseWindowBadgeTop}>
                      <span className={styles.googleGLogo}>G</span>
                      <span>Google SERP #1 Verified Result</span>
                    </div>
                    <div className={styles.caseWindowFooter}>
                      <span>Luxury Residential &amp; Commercial Towers</span>
                    </div>
                  </div>

                  {/* 3 Tactile Skeuomorphic KPI Stat Blocks */}
                  <div className={styles.caseKpiTilesRow}>
                    <div className={styles.caseKpiTile}>
                      <div className={styles.kpiTileIcon}>🏆</div>
                      <div className={styles.kpiTileNumber}>{defaultCase.metric}</div>
                      <div className={styles.kpiTileLabel}>Top Google Position</div>
                      <div className={styles.kpiTileSub}>18 High-Value Keywords</div>
                    </div>

                    <div className={styles.caseKpiTile}>
                      <div className={styles.kpiTileIcon}>📈</div>
                      <div className={styles.kpiTileNumber}>+340%</div>
                      <div className={styles.kpiTileLabel}>Buyer Inquiries</div>
                      <div className={styles.kpiTileSub}>90+ HNI Leads / Month</div>
                    </div>

                    <div className={styles.caseKpiTile}>
                      <div className={styles.kpiTileIcon}>⚡</div>
                      <div className={styles.kpiTileNumber}>90 Days</div>
                      <div className={styles.kpiTileLabel}>Speed to Page 1</div>
                      <div className={styles.kpiTileSub}>Zero Black-Hat Risks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. ENTERPRISE PLATFORMS WITH AUTHENTIC BRAND LOGOS
         ══════════════════════════════════════════════════ */}
      {platforms && platforms.length > 0 && (
        <section className={styles.platformsSection}>
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
                <span className="eyebrow-dot" />
                <span>Enterprise Growth Infrastructure</span>
              </div>
              <h3 className="display-sm" style={{ color: '#0F172A', marginBottom: 8 }}>
                Platforms &amp; Technologies We Master
              </h3>
              <p className="body-sm" style={{ color: '#64748B', maxWidth: 620, margin: '0 auto 28px' }}>
                Enterprise toolchains and proprietary growth stacks deployed across Bhubaneswar client campaigns.
              </p>

              <div className={styles.platformCardsGrid}>
                {platforms.map((p) => {
                  const meta = getPlatformMeta(p);
                  return (
                    <div key={p} className={styles.platformCard}>
                      <div className={styles.platformIconWrapper}>
                        {meta.icon}
                      </div>
                      <div className={styles.platformTextCol}>
                        <span className={styles.platformCardTitle}>{p}</span>
                        <span className={styles.platformCategoryTag}>{meta.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════
          9. PROVEN 4-STEP PROCESS (Numbered Cards)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Predictable Roadmap
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              How Marketing Copilot Delivers In India
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 620, margin: '10px auto 0' }}>
              A battle-tested 4-step framework engineered to eliminate guesswork and drive compounding ROI.
            </p>
          </ScrollReveal>

          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className={styles.processStep}>
                  <div
                    className={styles.stepNum}
                    style={{ background: `${color}18`, color }}
                  >
                    {p.step}
                  </div>
                  <h3 className={styles.stepTitle}>{p.title}</h3>
                  <p className={styles.stepDesc}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. SERVICE-SPECIFIC FAQ ACCORDION (Bhubaneswar Focused)
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
              <span className="eyebrow-dot" />
              Frequently Asked Questions
            </div>
            <h2 className="display-md" style={{ color: '#0F172A' }}>
              Answers for Bhubaneswar Business Leaders
            </h2>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 600, margin: '10px auto 0' }}>
              Everything you need to know about our {eyebrow} services in India.
            </p>
          </ScrollReveal>

          <div className={styles.faqList}>
            {defaultFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡 Strategic Takeaway:</span>
                        <span>{faq.takeaway || 'Engineered for measurable commercial outcomes, predictable customer acquisition, and durable search dominance.'}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          12. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div>
                <span className={styles.termPill}>SCHEDULE EXECUTIVE AUDIT</span>
                <h3 className={styles.termTitle}>
                  Ready to Capture #1 Market Share in India?
                </h3>
                <p className={styles.termSub}>
                  Claim your free 30-minute forensic growth audit. We will crawl your Core Web Vitals, analyze competitor acquisition gaps, and model your ROI roadmap across Odisha.
                </p>
                <div className={styles.termContact}>
                  <span>📞 Direct Hotline:</span>
                  <a href="tel:+918280788689" className={styles.termPhone}>
                    +91 82807 88689
                  </a>
                  <span>·</span>
                  <span>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.termActions}>
                <Link href="/contact" className={styles.termAuditBtn}>
                  <span>Grow Your Business With Us</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Principal Strategist</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
