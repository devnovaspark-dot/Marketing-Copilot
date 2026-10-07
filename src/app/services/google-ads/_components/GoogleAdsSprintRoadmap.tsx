'use client';

import React from 'react';
import styles from './GoogleAdsSprintRoadmap.module.css';

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
    title: 'Market Recon, Keyword Architecture & Negative Shield',
    description: 'We audit search query auction data across your target Indian markets, extract competitor CPCs and ad copy, and deploy our pre-compiled negative keyword library.',
    deliverable: 'India Market Intent Map + Negative Shield Installed',
    items: [
      'Auction Insights competitor analysis across target metro & regional hubs',
      'Single-Theme Ad Group (STAG) keyword mapping',
      'Negative keyword list deployment to prevent low-intent search waste',
      'CallRail Dynamic Number Insertion & GA4 sGTM container setup',
    ],
  },
  {
    phase: 2,
    timeline: 'Days 8 – 15',
    title: '10/10 Quality Score Landing Page & Ad Creative Matrix',
    description: 'We craft high-converting mobile landing pages with sub-second load times, paired with 3 responsive search ad (RSA) variants testing 15 headlines and 4 descriptions.',
    deliverable: 'Custom High-Speed Landers + 15 RSA Headlines',
    items: [
      'Sub-800ms mobile Next.js landing page with one-tap calling',
      'Headline and description testing tailored for high-intent buyers',
      'Sitelinks, callouts, and local showroom structured snippet extensions',
      'Click-to-WhatsApp direct sales closing channel activation',
    ],
  },
  {
    phase: 3,
    timeline: 'Days 16 – 23',
    title: 'Precision Campaign Launch & Bid Strategy Calibration',
    description: 'We launch campaigns with manual CPC bid guardrails to collect initial high-intent click data before graduating to smart automated Target CPA bidding.',
    deliverable: 'Live Campaigns + First 48-Hour Inbound Calls',
    items: [
      'Live campaign activation with exact geo-radius restrictions',
      'Dayparting bid schedules aligned to your office opening hours',
      'Initial search term query harvesting and negative expansion',
      'First verified patient and client phone call recordings logged',
    ],
  },
  {
    phase: 4,
    timeline: 'Days 24 – 30',
    title: 'Target CPA Scaling & Performance Max Synergy',
    description: 'We activate Google’s machine-learning Smart Bidding, double down on winning high-converting keywords, and scale budget to maximize inbound client pipeline.',
    deliverable: 'Stable -40% Lower CPL + 24/7 Looker Telemetry',
    items: [
      'Graduation to Target CPA / Maximize Conversions bidding',
      'Performance Max asset group integration for broader Odisha reach',
      'Audience retargeting pool deployment on YouTube & Display',
      'Weekly executive ROAS and Cost Per Inbound Lead telemetry review',
    ],
  },
];

export default function GoogleAdsSprintRoadmap() {
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
