'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './BrandIdentityStudioSimulator.module.css';

interface BrandTheme {
  id: string;
  name: string;
  brandName: string;
  tagline: string;
  bgGradient: string;
  textColor: string;
  colors: string[];
  fontFamily: string;
  sampleCopy: string;
  collateral1: { type: string; title: string };
  collateral2: { type: string; title: string };
}

const BRAND_THEMES: BrandTheme[] = [
  {
    id: 'luxury',
    name: 'Royal Heritage & Fine Jewellery',
    brandName: 'MEDALLION HOUSE',
    tagline: 'JAIPUR CRAFT & FINE ARTISANAL JEWELLERY · EST. 2018',
    bgGradient: 'linear-gradient(135deg, #0F172A 0%, #0B2093 50%, #064E3B 100%)',
    textColor: '#FFFFFF',
    colors: ['#0F172A', '#D4AF37', '#064E3B', '#FFFDF7'],
    fontFamily: 'serif',
    sampleCopy: 'Born in Jaipur, crafted for today. Hand-set Kundan, polki setting, and 22kt-tone gold finishes engineered for luxury bridal celebrations and everyday elegance.',
    collateral1: { type: 'Luxury Unboxing Suite', title: 'Velvet-Lined Gold-Embossed Rigid Jewellery Case' },
    collateral2: { type: 'Certificate of Craft', title: 'Artisan Verification Stamp & Anti-Tarnish Guarantee' },
  },
  {
    id: 'tech',
    name: 'Tech & Modern SaaS',
    brandName: 'NOVASPHERE',
    tagline: 'AUTONOMOUS ENTERPRISE INFRASTRUCTURE',
    bgGradient: 'linear-gradient(135deg, #0B2093 0%, #0D007F 100%)',
    textColor: '#FFFFFF',
    colors: ['#0B2093', '#0D007F', '#10B981', '#FFFFFF'],
    fontFamily: 'sans-serif',
    sampleCopy: 'Designed for high-growth tech startups in the Infocity corridor. Precision mathematical grid with vibrant cobalt luminescence.',
    collateral1: { type: 'Digital System', title: 'Figma Tokenized Design System (80+ Components)' },
    collateral2: { type: 'Motion Package', title: '4K 60FPS Kinetic Brand Reveal Video' },
  },
  {
    id: 'heritage',
    name: 'Odisha Heritage & D2C',
    brandName: 'SAMBALPURIA',
    tagline: 'TIMELESS HANDLOOM WEAVES · CRAFTED IN ODISHA',
    bgGradient: 'linear-gradient(135deg, #FAFCFF 0%, #F1F5F9 100%)',
    textColor: '#0F172A',
    colors: ['#0B2093', '#F59E0B', '#10B981', '#0F172A'],
    fontFamily: 'sans-serif',
    sampleCopy: 'Honoring ancient Ikat weaving geometry while elevating the brand for nationwide pan-India luxury ecommerce shipping.',
    collateral1: { type: 'Packaging System', title: 'Recycled Kraft Unboxing Box with Custom Seal' },
    collateral2: { type: 'Tag & Certificate', title: 'Silk Mark Certified Hangtag & Story Booklet' },
  },
];

export default function BrandIdentityStudioSimulator() {
  const [activeTheme, setActiveTheme] = useState<BrandTheme>(BRAND_THEMES[0]);

  return (
    <section className={styles.simSection} id="identity-studio">
      <div className="container">
        <div className={styles.simCard}>
          <div className={styles.simHeader}>
            <span className={styles.simEyebrow}>BRAND ARCHITECTURE STUDIO</span>
            <h2 className={styles.simTitle}>
              Interactive Brand Identity Visualizer
            </h2>
            <p className={styles.simSub}>
              A brand is not just a logo; it is pricing power, emotional trust, and visual prestige. Switch between three distinct brand identity systems below to explore live color tokens, typography scales, and collateral assets.
            </p>
          </div>

          <div className={styles.themeSelector}>
            {BRAND_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`${styles.themeBtn} ${activeTheme.id === theme.id ? styles.themeBtnActive : ''}`}
              >
                {theme.name}
              </button>
            ))}
          </div>

          <div
            className={styles.previewCanvas}
            style={{
              background: activeTheme.bgGradient,
              color: activeTheme.textColor,
            }}
          >
            {/* Left: Brandmark & Typography */}
            <div className={styles.brandmarkBox}>
              <div
                className={styles.brandLogoDisplay}
                style={{ fontFamily: activeTheme.fontFamily }}
              >
                {activeTheme.brandName}
              </div>
              <div className={styles.brandTagline}>{activeTheme.tagline}</div>

              <div className={styles.paletteRow}>
                {activeTheme.colors.map((c, i) => (
                  <div
                    key={i}
                    className={styles.colorSwatch}
                    style={{ background: c }}
                    title={c}
                  />
                ))}
              </div>

              <p className={styles.typographySample}>{activeTheme.sampleCopy}</p>
            </div>

            {/* Right: Collateral Deliverables */}
            <div className={styles.collateralShowcase}>
              <div className={styles.collateralCard}>
                <div className={styles.cardMeta}>
                  <span>{activeTheme.collateral1.type}</span>
                  <span>PREMIUM SPEC</span>
                </div>
                <h4 className={styles.cardTitle}>{activeTheme.collateral1.title}</h4>
              </div>

              <div className={styles.collateralCard}>
                <div className={styles.cardMeta}>
                  <span>{activeTheme.collateral2.type}</span>
                  <span>PRODUCTION READY</span>
                </div>
                <h4 className={styles.cardTitle}>{activeTheme.collateral2.title}</h4>
              </div>

              <div className={styles.collateralCard}>
                <div className={styles.cardMeta}>
                  <span>Intellectual Property</span>
                  <span style={{ color: '#10B981' }}>100% TRADEMARK OWNERSHIP</span>
                </div>
                <h4 className={styles.cardTitle}>Complete Vector SVG, AI, EPS, &amp; Font License Handover</h4>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
          <BeamButton href="/contact" label="Explore Your Brand Visual Identity →" size="md" arrow={true} />
        </div>
      </div>
    </section>
  );
}
