'use client';

import React from 'react';
import styles from './PerformanceScaleRoadmap.module.css';

interface RoadmapPhase {
  phase: number;
  timeline: string;
  title: string;
  description: string;
  deliverable: string;
  items: string[];
}

const PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    timeline: 'Days 1 – 7',
    title: 'Unit Economics Audit & First-Party Cloud Attribution',
    description: 'We audit past customer acquisition costs, set up server-side Conversions API (CAPI) on Meta and Google, and build a unified Looker Studio MER dashboard.',
    deliverable: 'Audited Unit Economics + 98% Cloud Attribution Match',
    items: [
      'COGS, margin thresholds, and breakeven MER baseline modeling',
      'Meta Conversions API + Google sGTM server-side tracking pipeline',
      'Looker Studio executive dashboard with live multi-touch attribution',
      'Exclusion of previous client buyers from cold acquisition pools',
    ],
  },
  {
    phase: 2,
    timeline: 'Days 8 – 15',
    title: 'Full-Funnel Creative Flywheel & High-Speed CRO Landers',
    description: 'We script, produce, and edit 8+ high-hook performance videos while engineering sub-second mobile Next.js landing pages with direct WhatsApp chat routing.',
    deliverable: '8+ Tested Video Hooks + Next.js High-Speed Funnels',
    items: [
      'Top-of-Funnel UGC video hooks, unboxings, and expert authority angles',
      'Lightweight Next.js mobile landing pages with sub-800ms load times',
      'One-tap WhatsApp consultation flow with automated qualification',
      'Dynamic social proof and location-specific trust badges',
    ],
  },
  {
    phase: 3,
    timeline: 'Days 16 – 23',
    title: 'Omnichannel Launch & Cross-Platform Orchestration',
    description: 'We activate Meta Advantage+ broad campaigns to generate attention, synchronized with Google Search to capture high-intent research queries.',
    deliverable: 'Multi-Channel Live Campaigns + First Qualified Leads',
    items: [
      'Meta Advantage+ Shopping & Lead Gen campaign activation',
      'Google Exact-Match Search & Performance Max intent capture',
      'Dynamic retargeting pools capturing bounced website visitors',
      'Automated daily budget re-allocation rules and CPA kill-switches',
    ],
  },
  {
    phase: 4,
    timeline: 'Days 24 – 30',
    title: 'Aggressive MER Scaling & Retention Flywheel Activation',
    description: 'We pump ad capital into winning creative angles, scale daily budgets without CAC inflation, and turn on automated retention email/SMS loops.',
    deliverable: '5.2X+ Blended MER + Scaled Acquisition Machine',
    items: [
      'Surge scaling protocols on sub-₹1,800 CAC winning creative angles',
      'Klaviyo post-purchase replenishment and VIP repurchase loops',
      'Cross-sell and referral incentive automation',
      'Bi-weekly strategic growth reviews with dedicated principal director',
    ],
  },
];

export default function PerformanceScaleRoadmap() {
  return (
    <div className={styles.roadmapContainer}>
      {PHASES.map((p) => (
        <div key={p.phase} className={styles.phaseCard}>
          <div className={styles.phaseHeader}>
            <div className={styles.phaseMeta}>
              <div className={styles.phaseNumber}>0{p.phase}</div>
              <span className={styles.phaseTimeline}>{p.timeline}</span>
            </div>
            <span className={styles.deliverableBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {p.deliverable}
            </span>
          </div>

          <h3 className={styles.phaseTitle}>{p.title}</h3>
          <p className={styles.phaseDescription}>{p.description}</p>

          <div className={styles.bulletGrid}>
            {p.items.map((item, idx) => (
              <div key={idx} className={styles.bulletItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.bulletCheck}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
