'use strict';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './AmazonPpcCalculator.module.css';

export default function AmazonPpcCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(650000);
  const [currentAcos, setCurrentAcos] = useState<number>(38);
  const [targetAcos, setTargetAcos] = useState<number>(18);

  // Math models:
  // Paid ad revenue is typically 45% of total revenue for scaling Amazon sellers
  const adRevenue = monthlyRevenue * 0.45;
  const currentAdSpend = adRevenue * (currentAcos / 100);
  const optimizedAdSpend = adRevenue * (targetAcos / 100);
  const monthlySavings = Math.round(currentAdSpend - optimizedAdSpend);

  // Organic Halo Effect: Every ₹1 spent profitably on Top-of-Search PPC boosts organic rank velocity by 1.65x
  const organicHaloLift = Math.round(monthlyRevenue * 0.22);
  const netMonthlyProfitExpansion = monthlySavings + Math.round(organicHaloLift * 0.28);

  // TACoS (Total Advertising Cost of Sales)
  const currentTacos = ((currentAdSpend / monthlyRevenue) * 100).toFixed(1);
  const projectedTacos = ((optimizedAdSpend / (monthlyRevenue + organicHaloLift)) * 100).toFixed(1);

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calcHeader}>
        <div className={styles.kicker}>TACoS &amp; Margin Expansion Engine</div>
        <h2 className={styles.title}>Calculate Your Amazon PPC Bleed &amp; Profit Recovery</h2>
        <p className={styles.description}>
          High ACoS is usually caused by unharvested broad-match search queries and lack of negative sculpting.
          See how optimizing your campaigns to a strict target ACoS expands your monthly net profit.
        </p>
      </div>

      <div className={styles.calcGrid}>
        <div className={styles.slidersCard}>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Monthly Amazon Gross Sales</span>
              <span className={styles.sliderVal}>₹{monthlyRevenue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={5000000}
              step={50000}
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Current Campaign ACoS</span>
              <span className={styles.sliderVal}>{currentAcos}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={65}
              step={1}
              value={currentAcos}
              onChange={(e) => setCurrentAcos(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Target Copilot ACoS</span>
              <span className={styles.sliderVal}>{targetAcos}%</span>
            </div>
            <input
              type="range"
              min={12}
              max={25}
              step={1}
              value={targetAcos}
              onChange={(e) => setTargetAcos(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>
        </div>

        <div className={styles.outputCard}>
          <div className={styles.primaryResult}>
            <div className={styles.primaryLabel}>Net Monthly Profit Expansion</div>
            <div className={styles.primaryNumber}>₹{netMonthlyProfitExpansion.toLocaleString()}</div>
            <div className={styles.primarySub}>Direct Ad Spend Savings + Organic Best Seller Halo</div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Direct Ad Savings</div>
              <div className={styles.metricVal}>₹{monthlySavings.toLocaleString()}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Organic Halo Lift</div>
              <div className={styles.metricVal}>+₹{organicHaloLift.toLocaleString()}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Current TACoS</div>
              <div className={styles.metricVal}>{currentTacos}%</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Optimized TACoS</div>
              <div className={styles.metricVal}>{projectedTacos}%</div>
            </div>
          </div>

          <Link href="/contact#hubspot-form" className={styles.ctaBtn}>
            Request Seller Central Growth Audit &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
