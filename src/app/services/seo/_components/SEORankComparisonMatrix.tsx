'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './SEORankComparisonMatrix.module.css';

export default function SEORankComparisonMatrix() {
  const [activeTab, setActiveTab] = useState<'page1' | 'page2'>('page1');

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header - Clean, No Text Fluff */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 10px' }}>
              <span className={styles.sparkleIcon}>⚡</span>
              <span>Commercial Impact Matrix</span>
            </div>
            <h3 className={`display-lg ${styles.headline}`}>
              Rank #1 on Google vs. <span className="accent-gradient">Page 2 Invisibility</span>
            </h3>
            <p className={styles.subText}>
              Why ranking on the first screen of Google transforms unit economics and enterprise pipeline.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Toggle Switch */}
        <div className={styles.toggleRow}>
          <div className={styles.segmentedControl}>
            <button
              type="button"
              className={`${styles.segmentBtn} ${activeTab === 'page1' ? styles.segmentActive : ''}`}
              onClick={() => setActiveTab('page1')}
            >
              <span className={styles.statusDotGreen} />
              <span>Rank #1 (Marketing Copilot)</span>
            </button>
            <button
              type="button"
              className={`${styles.segmentBtn} ${activeTab === 'page2' ? styles.segmentActiveMuted : ''}`}
              onClick={() => setActiveTab('page2')}
            >
              <span className={styles.statusDotMuted} />
              <span>Buried on Page 2+</span>
            </button>
          </div>
        </div>

        {/* 4 Interactive Tactile Metric Cards */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Click-Through Rate */}
          <div className={`${styles.metricCard} ${activeTab === 'page1' ? styles.cardWinner : styles.cardDimmed}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🎯</span>
              <span className={styles.cardKpiTag}>Search Click Share</span>
            </div>
            <div className={styles.cardValueRow}>
              <span className={styles.cardValue}>
                {activeTab === 'page1' ? '39.8%' : '< 1.4%'}
              </span>
              <span className={styles.cardSubBadge}>
                {activeTab === 'page1' ? '28x Higher Traffic' : 'Zero Traction'}
              </span>
            </div>
            <div className={styles.cardBarWrap}>
              <div 
                className={styles.cardBarFill}
                style={{ 
                  width: activeTab === 'page1' ? '100%' : '5%',
                  background: activeTab === 'page1' ? '#10B981' : '#94A3B8'
                }} 
              />
            </div>
            <span className={styles.cardMetaText}>
              {activeTab === 'page1' 
                ? '92% of all Google clicks in India go to the top 3 spots.' 
                : 'Less than 2% of Google searchers ever click beyond page 1.'}
            </span>
          </div>

          {/* Card 2: Monthly Buyer Inquiries */}
          <div className={`${styles.metricCard} ${activeTab === 'page1' ? styles.cardWinner : styles.cardDimmed}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📞</span>
              <span className={styles.cardKpiTag}>Direct Buyer Inquiries</span>
            </div>
            <div className={styles.cardValueRow}>
              <span className={styles.cardValue}>
                {activeTab === 'page1' ? '45–60' : '< 3'}
              </span>
              <span className={styles.cardSubBadge}>
                {activeTab === 'page1' ? 'Verified / Month' : 'Stagnant Pipeline'}
              </span>
            </div>
            <div className={styles.cardBarWrap}>
              <div 
                className={styles.cardBarFill}
                style={{ 
                  width: activeTab === 'page1' ? '92%' : '8%',
                  background: activeTab === 'page1' ? '#0B2093' : '#94A3B8'
                }} 
              />
            </div>
            <span className={styles.cardMetaText}>
              {activeTab === 'page1' 
                ? 'Direct phone calls and WhatsApp chats from Patia, Infocity & Saheed Nagar.' 
                : 'Missing high-ticket local enterprise and retail buyer inquiries.'}
            </span>
          </div>

          {/* Card 3: Ad Spend Cost per Acquisition */}
          <div className={`${styles.metricCard} ${activeTab === 'page1' ? styles.cardWinner : styles.cardDimmed}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>💰</span>
              <span className={styles.cardKpiTag}>Customer Acquisition Cost</span>
            </div>
            <div className={styles.cardValueRow}>
              <span className={styles.cardValue}>
                {activeTab === 'page1' ? '₹0 / Click' : '₹120–₹450'}
              </span>
              <span className={styles.cardSubBadge}>
                {activeTab === 'page1' ? 'Compounding Asset' : 'Dependent on Ads'}
              </span>
            </div>
            <div className={styles.cardBarWrap}>
              <div 
                className={styles.cardBarFill}
                style={{ 
                  width: activeTab === 'page1' ? '100%' : '35%',
                  background: activeTab === 'page1' ? '#2563EB' : '#EF4444'
                }} 
              />
            </div>
            <span className={styles.cardMetaText}>
              {activeTab === 'page1' 
                ? 'Organic search produces perpetual leads without ongoing per-click media fees.' 
                : 'Inquiries stop the moment paid ad campaigns run out of daily budget.'}
            </span>
          </div>

          {/* Card 4: Bhubaneswar Brand Authority */}
          <div className={`${styles.metricCard} ${activeTab === 'page1' ? styles.cardWinner : styles.cardDimmed}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🏆</span>
              <span className={styles.cardKpiTag}>Regional Authority</span>
            </div>
            <div className={styles.cardValueRow}>
              <span className={styles.cardValue}>
                {activeTab === 'page1' ? 'Market Leader' : 'Invisible'}
              </span>
              <span className={styles.cardSubBadge}>
                {activeTab === 'page1' ? '5.0 ★ Verified' : 'Ignored by Buyers'}
              </span>
            </div>
            <div className={styles.cardBarWrap}>
              <div 
                className={styles.cardBarFill}
                style={{ 
                  width: activeTab === 'page1' ? '98%' : '12%',
                  background: activeTab === 'page1' ? '#D97706' : '#94A3B8'
                }} 
              />
            </div>
            <span className={styles.cardMetaText}>
              {activeTab === 'page1' 
                ? 'Perceived as the definitive authority in Bhubaneswar and Odisha.' 
                : 'Potential clients end up choosing competitors visible on Google 3-Pack.'}
            </span>
          </div>
        </div>

        {/* Clean Center Bottom Action */}
        <div className={styles.bottomCtaRow}>
          <div className={styles.borderBeamWrapper}>
            <div className={styles.borderGlowAmbient} />
            <div className={styles.borderBeamSpin} />
            <Link href="/contact" className={styles.btnRank}>
              <span className={styles.btnShimmer} />
              <span className={styles.btnGlassGloss} />
              <span>Claim Your #1 Bhubaneswar Spot</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
