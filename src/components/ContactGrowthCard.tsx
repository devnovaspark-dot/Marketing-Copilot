'use client';

import { useState } from 'react';
import styles from './ContactGrowthCard.module.css';

interface StrategyPillar {
  label: string;
  desc: string;
  nodeX: number;
  nodeY: number;
}

const CORE_STRATEGIES: StrategyPillar[] = [
  {
    label: 'Performance Media',
    desc: 'Data-backed Google & Meta campaigns engineered for qualified demand and sustainable ROI.',
    nodeX: 18,
    nodeY: 29,
  },
  {
    label: 'Search & AI Visibility',
    desc: 'High-intent SEO and AI search positioning that builds compounding organic authority.',
    nodeX: 54,
    nodeY: 17,
  },
  {
    label: 'Conversion & AI Systems',
    desc: 'High-speed web experiences and smart automation designed to turn traffic into growth.',
    nodeX: 90,
    nodeY: 6,
  },
];

/**
 * Compact, fixed-height strategy showcase card styled after AI-First Approach.
 * Uses general core strategies with zero layout shift during form interaction.
 */
export default function ContactGrowthCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CORE_STRATEGIES[activeIndex];

  return (
    <div className={styles.card}>
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.glowOrbCyan} aria-hidden="true" />

      <div className={styles.topRow}>
        <span className={styles.badgeAi}>
          <span className={styles.pulseDot} />
          <span>AI-First Growth Strategy</span>
        </span>
      </div>

      <div className={styles.heroRow}>
        <div>
          <h3 className={styles.title}>
            Strategy, AI &amp; <span className={styles.titleAccent}>Compounding Growth</span>
          </h3>
          <p className={styles.subtitle}>
            Customized full-funnel strategies built for visibility, leads, and long-term scale.
          </p>
        </div>

        <div className={styles.graphicBox} aria-hidden="true">
          <span className={styles.graphicLabel}>Growth Curve</span>
          <svg viewBox="0 0 100 34" className={styles.chartSvg}>
            <defs>
              <linearGradient id="contactStrategyGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="contactStrategyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.34)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M 4 32 C 24 30, 38 23, 54 17 C 70 11, 80 8, 94 5 L 94 34 L 4 34 Z"
              fill="url(#contactStrategyFill)"
            />
            <path
              d="M 4 32 C 24 30, 38 23, 54 17 C 70 11, 80 8, 94 5"
              fill="none"
              stroke="url(#contactStrategyGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx={current.nodeX} cy={current.nodeY} r="5.5" fill="rgba(0, 212, 255, 0.28)" />
            <circle
              cx={current.nodeX}
              cy={current.nodeY}
              r="2.8"
              fill="#FFFFFF"
              stroke="#00D4FF"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className={styles.tabsRow} role="tablist" aria-label="Core growth strategies">
        {CORE_STRATEGIES.map((pillar, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={pillar.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
            >
              {pillar.label}
            </button>
          );
        })}
      </div>

      <div className={styles.detailBox} role="tabpanel">
        <p className={styles.detailDesc}>{current.desc}</p>
      </div>

      <div className={styles.footerTags}>
        <span className={styles.tag}>
          <span className={styles.tagDot} />
          <span>Data Insights</span>
        </span>
        <span className={styles.tag}>
          <span className={styles.tagDot} />
          <span>Predictive Automation</span>
        </span>
        <span className={styles.tag}>
          <span className={styles.tagDot} />
          <span>Campaign Efficiency</span>
        </span>
      </div>
    </div>
  );
}
