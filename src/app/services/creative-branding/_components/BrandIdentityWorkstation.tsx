'use client';

import React, { useState } from 'react';
import styles from './BrandIdentityWorkstation.module.css';

interface TabData {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: string[];
  codeLabel: string;
  codeSnippet: string;
}

const BRAND_WORKSTATION_TABS: TabData[] = [
  {
    id: 'symbolism',
    tabLabel: '01. Brandmark Geometry',
    title: 'Vector Brandmark & Mathematical Grid Geometry',
    desc: 'We construct timeless logo symbols and monograms engineered with strict golden ratio geometry, optical balance corrections, and infinite vector scalability.',
    features: [
      'Golden-ratio circle grid construction ensuring immaculate visual balance',
      'Optical kerning adjustments for responsive 16px favicon to 40ft billboard usage',
      'Primary horizontal, secondary stacked, and isolated monogram variations',
      'Class 35 & 42 Indian Trademark registration compliance documentation',
    ],
    codeLabel: 'SVG Vector Geometry Definition',
    codeSnippet: `// Master Brandmark: Golden Ratio Construct
<svg viewBox="0 0 500 500" fill="none">
  <!-- Primary Geometric Nodes (Fibonacci Circle Spiral) -->
  <circle cx="250" cy="250" r="161.8" stroke="#0B2093" strokeWidth="8"/>
  <circle cx="250" cy="250" r="100.0" stroke="#F59E0B" strokeWidth="6"/>
  <!-- Optical Alignment Guides -->
  <line x1="88" y1="250" x2="412" y2="250" stroke="rgba(11,32,147,0.3)"/>
  <text x="250" y="390" textAnchor="middle" fontFamily="Outfit">MEDALLION</text>
</svg>`,
  },
  {
    id: 'tokens',
    tabLabel: '02. Design Tokens',
    title: 'Tokenized Design Systems & Brand Standards Book',
    desc: 'We deliver a 60+ page comprehensive Brand Bible documenting HSL color tokens, typography hierarchy, negative space rules, and photographic art direction.',
    features: [
      'Strict HSL/HEX color systems with primary, secondary, and semantic status shades',
      'Typography pairing licenses for digital web applications and physical print',
      'Exclusion zones and minimum clearance specifications preventing logo misuse',
      'Figma token library exportable directly to React & CSS variables',
    ],
    codeLabel: 'CSS Design Tokens & Variables',
    codeSnippet: `:root {
  /* Brand Core Tokens */
  --brand-navy-primary: #0B2093;
  --brand-navy-deep: #0D007F;
  --brand-amber-gold: #F59E0B;
  --brand-surface-light: #F8FAFC;
  --brand-charcoal-dark: #0F172A;
  
  /* Typography Scale */
  --font-display: 'Outfit', 'Cabinet Grotesk', sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
}`,
  },
  {
    id: 'packaging',
    tabLabel: '03. Packaging Architecture',
    title: 'Tactile Physical Packaging & Unboxing Architecture',
    desc: 'For retail, D2C, and hospitality clients, we design bespoke physical packaging: structural dielines, embossing, gold foil stamping, and eco-certified materials.',
    features: [
      'Custom vector dielines for rigid boxes, corrugated mailers, and pouches',
      'Specialty print finishing: UV spot gloss, blind debossing, and foil stamping',
      'Eco-friendly sustainable material specifications with FSC certifications',
      'Factory-ready CMYK print proofs with printer color-calibration support',
    ],
    codeLabel: 'Dieline Structural Specs',
    codeSnippet: `// Package Dieline: Rigid Box 220x160x55mm
structural_board: "1200 GSM Greyboard Wrapped in 157 GSM Art Paper"
finish: "Soft-Touch Matte Lamination + Micro-Embossed Gold Foil"
color_profile: "Pantone 281 C (Deep Navy) + Metallic 871 C (Rich Gold)"
dieline_bleed: "3.0mm all edges | Crease line: Magenta dotted"`,
  },
  {
    id: 'collateral',
    tabLabel: '04. High-Converting Kits',
    title: 'High-Converting Advertising & Corporate Collateral',
    desc: 'Your visual identity applied consistently across digital and physical touchpoints: social media templates, commercial pitch decks, vehicle wraps, and showroom signage.',
    features: [
      'Editable Canva & Figma social media post and story templates',
      'Executive pitch deck templates in PowerPoint and Google Slides',
      'High-impact architectural showroom signboards and acrylic 3D lettering',
      'Stationery suite: luxury business cards, letterheads, and invoice templates',
    ],
    codeLabel: 'Collateral Asset Registry',
    codeSnippet: `// Deployed Corporate Collateral Assets
- 3D Exterior Acrylic Signboard (Saheed Nagar HQ)
- 600 GSM Cotton Letterpress Visiting Cards
- 24 Editable Instagram Story & Reel Hook Templates
- Investor Pitch Deck (Keynote / PPT / PDF)
- Vehicle Fleet Decal Graphics & Uniform Apparel`,
  },
];

export default function BrandIdentityWorkstation() {
  const [activeTab, setActiveTab] = useState<TabData>(BRAND_WORKSTATION_TABS[0]);

  return (
    <section className={styles.workstationSection}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>IDENTITY ENGINEERING</span>
          <h2 className={styles.title}>
            The Creative Brand Architecture Workstation
          </h2>
          <p className={styles.sub}>
            Explore the four foundational pillars we deploy to build unforgettable corporate identities that command market prestige across India.
          </p>
        </div>

        <div className={styles.workstationCard}>
          <div className={styles.tabsBar}>
            {BRAND_WORKSTATION_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabBtn} ${activeTab.id === tab.id ? styles.tabBtnActive : ''}`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.textCol}>
              <h3 className={styles.tabTitle}>{activeTab.title}</h3>
              <p className={styles.tabDesc}>{activeTab.desc}</p>

              <div className={styles.featuresList}>
                {activeTab.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.codePanel}>
                <div className={styles.codeHeader}>
                  <span>{activeTab.codeLabel}</span>
                  <span style={{ color: '#10B981' }}>● ASSET READY</span>
                </div>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  <code>{activeTab.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
