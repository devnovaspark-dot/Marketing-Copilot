'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WebDevWorkstation.module.css';

interface ArchitectureStage {
  id: string;
  stageName: string;
  stagePill: string;
  headline: string;
  subhead: string;
  objective: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  codeSample: string;
}

const archStages: ArchitectureStage[] = [
  {
    id: 'nextjs',
    stageName: '01. Core Architecture',
    stagePill: 'SUB-SECOND NEXT.JS',
    headline: 'Modern Server-Rendered React Architecture',
    subhead: 'We build on Next.js 15 App Router with React Server Components, eliminating massive client-side bundles and loading in under 800ms.',
    objective: 'Deliver sub-second page transitions, eliminate layout shifts, and guarantee 98+ PageSpeed scores on mobile 4G/5G connections.',
    deliverables: [
      'Next.js 15 App Router with zero client bundle overhead',
      'React Server Components for instant initial HTML delivery',
      'Automatic responsive WebP/AVIF image transcoding',
      'Incremental Static Regeneration (ISR) for instant dynamic pages',
    ],
    specs: [
      { label: 'Mobile LCP Target', value: '< 0.8s' },
      { label: 'Google PageSpeed SLA', value: '98–100' },
      { label: 'Edge TTFB', value: '< 40ms' },
    ],
    codeSample: `// Next.js 15 Edge SSR Configuration
export const runtime = 'edge';
export const revalidate = 3600; // 1-hour ISR cache

export default async function Page() {
  const data = await getEdgeOptimizedData();
  return <ConversionHero data={data} prioritySpeed="sub-second" />;
}`,
  },
  {
    id: 'conversion',
    stageName: '02. Conversion Funnels',
    stagePill: 'CONVERSION RATE TECH',
    headline: '1-Click Indian Payment & WhatsApp Funnels',
    subhead: 'Over 85% of mobile transactions in India occur via UPI and WhatsApp. We build friction-free conversion paths directly into your interface.',
    objective: 'Transform casual visitors into verified phone calls, customer orders, and direct UPI payments in under 3 taps.',
    deliverables: [
      'Razorpay & Cashfree 1-click UPI checkout with dynamic QR codes',
      'Sticky floating WhatsApp consultation buttons with automated pre-filled messages',
      'Instant phone call dials optimized for thumb-reach ergonomics',
      'Real-time lead webhook forwarding directly to CRM, Slack, and WhatsApp',
    ],
    specs: [
      { label: 'Checkout Duration', value: '< 25s' },
      { label: 'Form Completion Lift', value: '+310%' },
      { label: 'WhatsApp Dispatch', value: 'Instant' },
    ],
    codeSample: `// High-Speed UPI & WhatsApp Fast-Checkout
const handleOneClickCheckout = async (orderPayload) => {
  const session = await createRazorpayUpiSession(orderPayload);
  window.Razorpay.open({
    ...session,
    theme: { color: '#0B2093' },
    send_sms_hash: true
  });
};`,
  },
  {
    id: 'seo',
    stageName: '03. Native SEO',
    stagePill: 'BUILT-IN SEARCH DOMINANCE',
    headline: 'Hardcoded Schema Markup & Core Web Vitals',
    subhead: 'Google ranks websites that load fast and possess pristine structured data. We bake technical SEO into every template and component.',
    objective: 'Secure automatic Google indexing, local 3-pack visibility, and top organic rankings for commercial search queries.',
    deliverables: [
      'JSON-LD LocalBusiness & Medical/Real-Estate schema hardcoded into head tags',
      'Automated dynamic XML sitemap generation with hourly ping to Google Console',
      'OpenGraph and Twitter Card social preview cards with customized branded banners',
      'Canonical URL enforcement preventing duplicate content penalties',
    ],
    specs: [
      { label: 'Schema Match SLA', value: '100% Valid' },
      { label: 'Core Web Vitals Pass', value: '3/3 Metrics' },
      { label: 'Crawl Accessibility', value: 'IndexNow Live' },
    ],
    codeSample: `// Native LocalBusiness Schema Injection
export const generateMetadata = async () => ({
  title: 'Top Healthcare Clinic Bhubaneswar',
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Marketing Copilot Partner',
      address: { addressLocality: 'Bhubaneswar', addressRegion: 'Odisha' }
    })
  }
});`,
  },
  {
    id: 'edge',
    stageName: '04. Edge & Security',
    stagePill: 'CLOUD INFRASTRUCTURE',
    headline: 'Global Edge Caching & Ironclad DDoS Shield',
    subhead: 'Hosted on global edge nodes with instant Mumbai and Hyderabad routing, zero downtime, and automated enterprise backups.',
    objective: 'Guarantee 99.99% uptime, withstand high-volume traffic spikes, and protect customer data from unauthorized intrusion.',
    deliverables: [
      'Cloudflare Enterprise Edge CDN caching content within 5ms of Indian users',
      'Automated daily offsite cloud database backups with point-in-time recovery',
      'Free automated Let’s Encrypt wildcard SSL certificates with strict HTTPS enforcement',
      'Advanced bot protection and web application firewall (WAF) filtering malicious traffic',
    ],
    specs: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'SSL Encryption', value: 'TLS 1.3' },
      { label: 'Spike Handling', value: '100K+ Req/m' },
    ],
    codeSample: `// Cloudflare Edge Cache Header Policy
export const edgeCacheHeaders = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff'
};`,
  },
];

export default function WebDevWorkstation() {
  const [activeStage, setActiveStage] = useState<string>('nextjs');
  const current = archStages.find((s) => s.id === activeStage) || archStages[0];

  return (
    <section className={styles.section} id="workstation">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.stageDot} />
            <span>Engineering Capabilities Workstation</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            The Architecture Behind <span className="accent-gradient">High-Performance Websites</span>
          </h2>
          <p className={styles.subhead}>
            We don’t install generic drag-and-drop templates. We engineer enterprise-grade digital platforms customized for sustainable commercial growth.
          </p>
        </ScrollReveal>

        {/* Stage Selector Tabs */}
        <div className={styles.tabBar}>
          {archStages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className={styles.tabName}>{stage.stageName}</span>
                <span className={styles.tabPill}>{stage.stagePill}</span>
              </button>
            );
          })}
        </div>

        {/* Workstation Console Display */}
        <div className={styles.consoleStage}>
          {/* Left Details Column */}
          <div className={styles.detailsCol}>
            <div className={styles.badgeRow}>
              <span className={styles.stagePillHighlight}>{current.stagePill}</span>
              <span className={styles.verifiedDot}>● PRODUCTION-GRADE ENGINEERING</span>
            </div>

            <h3 className={styles.stageHeadline}>{current.headline}</h3>
            <p className={styles.stageSubhead}>{current.subhead}</p>

            <div className={styles.objectiveBox}>
              <span className={styles.objLabel}>CORE COMMERCIAL OBJECTIVE:</span>
              <p className={styles.objText}>{current.objective}</p>
            </div>

            {/* Deliverables Checklist */}
            <div className={styles.tacticsList}>
              <span className={styles.tacticsTitle}>Engineered Specifications:</span>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className={styles.tacticItem}>
                  <span className={styles.tacticIcon}>✓</span>
                  <span className={styles.tacticText}>{item}</span>
                </div>
              ))}
            </div>

            {/* Spec KPIs */}
            <div className={styles.kpiRow}>
              {current.specs.map((spec) => (
                <div key={spec.label} className={styles.kpiBox}>
                  <span className={styles.kpiVal}>{spec.value}</span>
                  <span className={styles.kpiLabel}>{spec.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.workstationCta}>
                <span>Consult Our Lead Web Engineer</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Code Architecture Terminal */}
          <div className={styles.terminalCol}>
            <div className={styles.codeTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.macDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.terminalTitle}>architecture-spec.ts · Marketing Copilot</div>
                <span className={styles.edgeBadge}>EDGE COMPLIANT</span>
              </div>
              <div className={styles.codeBody}>
                <pre>
                  <code>{current.codeSample}</code>
                </pre>
              </div>
              <div className={styles.terminalFooter}>
                <span className={styles.footItem}>⚡ PageSpeed: 99/100</span>
                <span className={styles.footItem}>🔒 TLS 1.3 Strict</span>
                <span className={styles.footItem}>🚀 Vercel Edge Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
