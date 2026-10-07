'use client';

import React from 'react';
import styles from './BrandComparisonMatrix.module.css';

interface ComparisonRow {
  dimension: string;
  subtext: string;
  traditional: string;
  copilot: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Originality & Trademark Safety',
    subtext: 'Intellectual property and legal exclusivity',
    traditional: 'Recycled Canva / Fiverr templates vulnerable to trademark rejections and copyright lawsuits',
    copilot: '100% bespoke golden-ratio vector geometry crafted for uncontested Class 35/42 trademark registration',
  },
  {
    dimension: 'System Architecture & Scale',
    subtext: 'Beyond just a standalone JPEG image',
    traditional: 'Delivers a single PNG file that pixelates on signboards and breaks on dark backgrounds',
    copilot: 'Comprehensive design tokens, Figma component systems, and full vector master files (AI, EPS, SVG)',
  },
  {
    dimension: 'Market Pricing Power',
    subtext: 'Impact on what you can charge clients',
    traditional: 'Cheap aesthetic that forces you into low-margin price wars and endless discount haggling',
    copilot: 'Premium visual authority allowing you to command 30% to 50% higher fees with zero resistance',
  },
  {
    dimension: 'Physical Packaging & Signage',
    subtext: 'Tactile offline execution in Bhubaneswar',
    traditional: 'Zero production knowledge; dielines fail at local offset printers and foil stamps smudge',
    copilot: 'Production-ready CMYK dielines with foil stamping, spot UV, and calibrated offset printer support',
  },
  {
    dimension: 'Omnichannel Visual Consistency',
    subtext: 'From facade to Instagram feed',
    traditional: 'Mismatched fonts, erratic colors, and amateur social graphics that confuse prospective buyers',
    copilot: 'Unified visual prestige across corporate office facades, fleet livery, packaging, and digital touchpoints',
  },
  {
    dimension: 'Brand Strategy & Positioning',
    subtext: 'Emotional connection with target consumers',
    traditional: 'Superficial decorative graphics with zero understanding of consumer psychology or market competition',
    copilot: 'Deep brand positioning and messaging frameworks tailored for premium buyers across target markets',
  },
];

export default function BrandComparisonMatrix() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th className={styles.thMetric}>Growth Dimension</th>
            <th className={styles.thTraditional}>Cheap Freelancers / Canva</th>
            <th className={styles.thCopilot}>
              Marketing Copilot Brand Architecture
              <span className={styles.copilotBadge}>Leader</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_DATA.map((row, idx) => (
            <tr key={idx}>
              <td className={styles.metricCell}>
                <div>{row.dimension}</div>
                <div className={styles.metricSubtext}>{row.subtext}</div>
              </td>
              <td>
                <div className={styles.traditionalCell}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.crossIcon}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <span>{row.traditional}</span>
                </div>
              </td>
              <td>
                <div className={styles.copilotCell}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{row.copilot}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
