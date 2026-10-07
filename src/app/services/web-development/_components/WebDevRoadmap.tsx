'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WebDevRoadmap.module.css';

interface SprintPhase {
  phase: string;
  days: string;
  title: string;
  summary: string;
  deliverables: string[];
  kpi: string;
}

const sprintPhases: SprintPhase[] = [
  {
    phase: 'PHASE 01',
    days: 'Days 1–7',
    title: 'Conversion Architecture & Wireframing',
    summary: 'We analyze your target customer personas, map frictionless sales funnels, and construct mobile-first wireframes.',
    deliverables: [
      'Buyer journey mapping & conversion funnel architecture',
      'Mobile thumb-zone ergonomics and sticky CTA placements',
      'Low-fidelity UX wireframes for all core templates',
      'Competitor speed & structural gap analysis',
    ],
    kpi: 'Figma UX Blueprint Approved',
  },
  {
    phase: 'PHASE 02',
    days: 'Days 8–15',
    title: 'Bespoke UI Design System & Prototype',
    summary: 'Crafting luxury design system tokens, tailored color palettes, modern typography, and an interactive clickable Figma prototype.',
    deliverables: [
      'Tailored design system tokens (colors, typography, spacing)',
      'Skeuomorphic tactile components with glassmorphic accents',
      'Full interactive clickable prototype for client review',
      'Responsive tablet and mobile viewport layouts',
    ],
    kpi: '100% Client Visual Sign-Off',
  },
  {
    phase: 'PHASE 03',
    days: 'Days 16–23',
    title: 'Next.js 15 Engineering & API Integrations',
    summary: 'Translating designs into clean, modular Next.js code with server components, UPI payment gateways, and instant WhatsApp hooks.',
    deliverables: [
      'Next.js 15 App Router and React Server Components build',
      'Razorpay / Cashfree UPI 1-click checkout integration',
      'WhatsApp direct consultation floating hooks with prefilled templates',
      'Headless CMS or intuitive admin panel setup',
    ],
    kpi: 'Sub-800ms Staging Build Live',
  },
  {
    phase: 'PHASE 04',
    days: 'Days 24–30',
    title: 'Core Web Vitals QA & Cloudflare Edge Launch',
    summary: 'Forensic cross-device QA, 99+ PageSpeed certification, schema markup validation, and global Cloudflare Edge DNS deployment.',
    deliverables: [
      'Google Core Web Vitals audit (LCP < 0.8s, CLS 0.00)',
      'JSON-LD LocalBusiness & schema markup validation',
      'Cloudflare enterprise edge SSL & WAF configuration',
      'Google Analytics 4 & Meta CAPI event verification',
    ],
    kpi: 'Production Handover & 99/100 SLA',
  },
];

export default function WebDevRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className={styles.section} id="roadmap">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.roadDot} />
            <span>30-Day Engineering Roadmap</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            From Concept to Sub-Second Launch in <span className="accent-gradient">30 Days</span>
          </h2>
          <p className={styles.subhead}>
            A disciplined, predictable 4-phase agile delivery sprint engineered to launch your website on time with zero technical compromises.
          </p>
        </ScrollReveal>

        {/* Phase Cards Grid */}
        <div className={styles.phasesGrid}>
          {sprintPhases.map((p, idx) => {
            const isSelected = activePhase === idx;
            return (
              <div
                key={p.phase}
                className={`${styles.phaseCard} ${isSelected ? styles.phaseCardActive : ''}`}
                onClick={() => setActivePhase(idx)}
              >
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseTag}>{p.phase}</span>
                  <span className={styles.daysTag}>{p.days}</span>
                </div>

                <h3 className={styles.phaseTitle}>{p.title}</h3>
                <p className={styles.phaseSummary}>{p.summary}</p>

                <div className={styles.delivList}>
                  {p.deliverables.map((d, i) => (
                    <div key={i} className={styles.delivItem}>
                      <span className={styles.delivCheck}>✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.kpiFooter}>
                  <span className={styles.kpiLabel}>Milestone Exit Gate:</span>
                  <span className={styles.kpiValue}>{p.kpi}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
