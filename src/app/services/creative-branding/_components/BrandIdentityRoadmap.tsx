'use client';

import React from 'react';
import styles from './BrandIdentityRoadmap.module.css';

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
    title: 'Brand Archetype Discovery & Competitive Positioning',
    description: 'We conduct executive stakeholder interviews, analyze visual aesthetics across industry competitors, and establish your brand positioning thesis.',
    deliverable: 'Brand Strategy Brief + Moodboard Architecture',
    items: [
      'Founder vision & customer psychographic profile mapping',
      'Competitive landscape visual audit across target markets',
      'Archetype definition (Vanguard, Minimalist Luxury, Heritage)',
      'Tone of voice & core value proposition articulation',
    ],
  },
  {
    phase: 2,
    timeline: 'Days 8 – 15',
    title: 'Logo Concept Exploration & Mathematical Vector Geometry',
    description: 'We develop 3 distinct creative directions for your primary brandmark, refining typography, golden-ratio geometry, and optical kerning balance.',
    deliverable: '3 Master Concept Directions + Vector Geometry Grid',
    items: [
      'Golden-ratio geometric symbol and monogram development',
      'Custom typography pairing and wordmark lettering',
      'Trademark availability screening (India Class 35 & 42)',
      'Black & white contrast and micro-size scalability stress testing',
    ],
  },
  {
    phase: 3,
    timeline: 'Days 16 – 23',
    title: 'Design Tokens, Packaging Dielines & Physical Collateral',
    description: 'We expand the winning brandmark into a living design system with complete color tokens, physical packaging dielines, and corporate stationery.',
    deliverable: 'Figma Token System + Packaging Production Dielines',
    items: [
      'HSL & HEX digital color tokens and Pantone matching codes',
      'Production-ready packaging dielines with foil & UV finishing specs',
      'Executive stationery suite (business cards, letterheads, invoices)',
      'Showroom exterior 3D signage and architectural facade specs',
    ],
  },
  {
    phase: 4,
    timeline: 'Days 24 – 30',
    title: '60+ Page Master Brand Standards Book & IP Handover',
    description: 'We compile your comprehensive Brand Guidelines Bible and deliver all master vector assets with 100% intellectual property ownership.',
    deliverable: 'Master Brand Bible (PDF) + 100% Vector Asset Vault',
    items: [
      '60+ page Master Brand Identity Guidelines manual',
      'Vector master asset archive (AI, EPS, SVG, PDF, PNG)',
      'Editable Figma & Canva social media template kits',
      'Formal intellectual property and commercial copyright transfer',
    ],
  },
];

export default function BrandIdentityRoadmap() {
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
