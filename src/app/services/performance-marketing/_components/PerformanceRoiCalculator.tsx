'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './PerformanceRoiCalculator.module.css';

export default function PerformanceRoiCalculator() {
  const [adSpend, setAdSpend] = useState<number>(150000); // 1.5 Lakhs
  const [currentCac, setCurrentCac] = useState<number>(2400); // ₹2,400
  const [dealValue, setDealValue] = useState<number>(45000); // ₹45,000 LTV
  const [multiplier, setMultiplier] = useState<number>(1.25); // 1.25x word of mouth

  // Full-funnel optimization drops CAC by ~42%
  const optimizedCac = Math.round(currentCac * 0.58);
  const baselineCustomers = Math.round(adSpend / currentCac);
  const optimizedCustomers = Math.round((adSpend / optimizedCac) * multiplier);
  const newCustomersGained = Math.max(0, optimizedCustomers - baselineCustomers);

  const totalGrossPipeline = optimizedCustomers * dealValue;
  const netContribution = totalGrossPipeline - adSpend;
  const blendedMer = adSpend > 0 ? (totalGrossPipeline / adSpend).toFixed(1) : '0';

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcGrid}>
        {/* Left: Interactive Controls */}
        <div>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Monthly Cross-Channel Ad Budget
              </span>
              <span className={styles.sliderValue}>{formatINR(adSpend)}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="10000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className={styles.slider}
              aria-label="Monthly Ad Budget"
            />
            <div className={styles.sliderHints}>
              <span>₹50,000</span>
              <span>₹5 Lakhs</span>
              <span>₹10 Lakhs</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8l-8 8M8 8l8 8" />
                </svg>
                Current Blended CAC
              </span>
              <span className={styles.sliderValue}>₹{currentCac.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="600"
              max="6000"
              step="100"
              value={currentCac}
              onChange={(e) => setCurrentCac(Number(e.target.value))}
              className={styles.slider}
              aria-label="Current Customer Acquisition Cost"
            />
            <div className={styles.sliderHints}>
              <span>₹600 (Low Ticket)</span>
              <span>₹2,500</span>
              <span>₹6,000 (High-Ticket B2B)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Customer LTV / Average Contract
              </span>
              <span className={styles.sliderValue}>{formatINR(dealValue)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="5000"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className={styles.slider}
              aria-label="Average Contract Value"
            />
            <div className={styles.sliderHints}>
              <span>₹5,000 (D2C Basket)</span>
              <span>₹75,000</span>
              <span>₹2 Lakhs+ (Commercial)</span>
            </div>
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B2093" strokeWidth="2.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                Referral &amp; Brand Equity Multiplier
              </span>
              <span className={styles.sliderValue}>{multiplier.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="1.6"
              step="0.05"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className={styles.slider}
              aria-label="Referral Multiplier"
            />
            <div className={styles.sliderHints}>
              <span>1.0x (Paid Only)</span>
              <span>1.25x (Average Organic Halo)</span>
              <span>1.6x (Viral Loyalty)</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Yield */}
        <div className={styles.resultPanel}>
          <div className={styles.resultTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Omnichannel Capital Yield
          </div>

          <div className={styles.statHighlight}>
            <div className={styles.statHighlightLabel}>Attributed Pipeline Value</div>
            <div className={styles.statHighlightValue}>{formatINR(totalGrossPipeline)}</div>
            <div className={styles.statHighlightSubtitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              Blended MER: {blendedMer}X Marketing Efficiency Ratio
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Optimized Blended CAC</div>
              <div className={styles.metricBoxVal}>₹{optimizedCac.toLocaleString('en-IN')}</div>
              <div className={styles.metricBoxDiff}>-42% cheaper customer cost</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>New Paying Customers</div>
              <div className={styles.metricBoxVal}>{optimizedCustomers}</div>
              <div className={styles.metricBoxDiff}>+{newCustomersGained} extra clients</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Net Revenue Margin</div>
              <div className={styles.metricBoxVal}>{formatINR(netContribution)}</div>
              <div className={styles.metricBoxDiff}>After ad capital deducted</div>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricBoxLabel}>Organic Halo Gain</div>
              <div className={styles.metricBoxVal}>+{Math.round((multiplier - 1) * 100)}%</div>
              <div className={styles.metricBoxDiff}>Zero-cost referral pipeline</div>
            </div>
          </div>

          <Link href="/contact#hubspot-form" className={styles.ctaBtn}>
            <span>Request Full-Funnel Growth Model</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
