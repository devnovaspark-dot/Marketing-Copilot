'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './PerformanceOmnichannelSimulator.module.css';

interface Stage {
  id: string;
  stageName: string;
  title: string;
  desc: string;
  sharePercent: number;
  channels: string;
}

const STAGES: Stage[] = [
  {
    id: 'tof',
    stageName: '01. Top of Funnel',
    title: 'Demand Creation & Attention',
    desc: 'High-hook Meta Reels & YouTube ads creating awareness across 850,000+ Odisha prospects.',
    sharePercent: 45,
    channels: 'Meta Advantage+, YouTube Bumpers',
  },
  {
    id: 'mof',
    stageName: '02. Mid of Funnel',
    title: 'Intent Capture & Validation',
    desc: 'Capturing active search queries, reviews, and high-intent Google searchers comparing alternatives.',
    sharePercent: 30,
    channels: 'Google Exact Search, PMax, GMB',
  },
  {
    id: 'bof',
    stageName: '03. Bottom of Funnel',
    title: 'Rapid Direct Closing',
    desc: 'Direct-to-WhatsApp chats, custom Next.js landing pages, and dynamic retargeting closing deals.',
    sharePercent: 15,
    channels: 'WhatsApp API, Landing Page CRO',
  },
  {
    id: 'ret',
    stageName: '04. Retention / LTV',
    title: 'Customer Lifetime Multiplication',
    desc: 'Automated post-purchase repurchase flows, referral programs, and email VIP replenishment.',
    sharePercent: 10,
    channels: 'Klaviyo, Automated SMS/WhatsApp',
  },
];

export default function PerformanceOmnichannelSimulator() {
  const [budget, setBudget] = useState<number>(200000); // 2 Lakhs

  const projectedMer = '5.4X';
  const pipelineGenerated = Math.round(budget * 5.4);
  const estCustomers = Math.round(budget / 1850); // ₹1,850 Blended CAC
  const blendedCac = '₹1,850';

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section className={styles.simSection} id="omnichannel-simulator">
      <div className="container">
        <div className={styles.simCard}>
          <div className={styles.simHeader}>
            <span className={styles.simEyebrow}>OMNICHANNEL ATTRIBUTION ENGINE</span>
            <h2 className={styles.simTitle}>
              Full-Funnel Performance Allocation Simulator
            </h2>
            <p className={styles.simSub}>
              Single-channel marketing creates fragile revenue. See how our blended Meta + Google + WhatsApp orchestration lowers customer acquisition costs while multiplying pipeline across Bhubaneswar.
            </p>
          </div>

          <div className={styles.funnelStages}>
            {STAGES.map((s) => (
              <div key={s.id} className={`${styles.stageCard} ${styles.stageCardActive}`}>
                <span className={styles.stageBadge}>{s.stageName}</span>
                <h3 className={styles.stageTitle}>{s.title}</h3>
                <p className={styles.stageDesc}>{s.desc}</p>
                <div style={{ marginTop: '12px', fontSize: '11px', color: '#0B2093', fontWeight: 700 }}>
                  Allocation: {s.sharePercent}% ({formatINR((budget * s.sharePercent) / 100)})
                </div>
              </div>
            ))}
          </div>

          <div className={styles.allocationBox}>
            <div>
              <div className={styles.sliderRow}>
                <span style={{ fontSize: '14px', fontWeight: 700 }}>
                  Monthly Blended Marketing Capital:
                </span>
                <span style={{ fontSize: '18px', fontWeight: 900, color: '#FCD34D' }}>
                  {formatINR(budget)}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1500000"
                step="25000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className={styles.sliderInput}
                aria-label="Monthly Marketing Capital"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
                <span>₹50,000 (Local Pilot)</span>
                <span>₹5 Lakhs</span>
                <span>₹15 Lakhs+ (Aggressive Scale)</span>
              </div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricTile}>
                <div className={styles.metricTileLabel}>Projected Blended MER</div>
                <div className={styles.metricTileVal} style={{ color: '#10B981' }}>{projectedMer}</div>
              </div>
              <div className={styles.metricTile}>
                <div className={styles.metricTileLabel}>Blended CAC Target</div>
                <div className={styles.metricTileVal}>{blendedCac}</div>
              </div>
              <div className={styles.metricTile}>
                <div className={styles.metricTileLabel}>Est. New Customers</div>
                <div className={styles.metricTileVal}>{estCustomers}</div>
              </div>
              <div className={styles.metricTile}>
                <div className={styles.metricTileLabel}>Attributed Pipeline</div>
                <div className={styles.metricTileVal} style={{ color: '#FCD34D' }}>{formatINR(pipelineGenerated)}</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
            <BeamButton
              href="/contact"
              label="Model Your Custom Growth Architecture →"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
