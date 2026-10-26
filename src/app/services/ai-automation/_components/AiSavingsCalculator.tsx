'use strict';
'use client';

import React, { useState } from 'react';
import styles from './AiSavingsCalculator.module.css';

export default function AiSavingsCalculator() {
  const [inquiries, setInquiries] = useState<number>(1200);
  const [responseTimeHours, setResponseTimeHours] = useState<number>(4);
  const [averageDeal, setAverageDeal] = useState<number>(18000);

  // Math models:
  // Speed-to-lead data shows leads responding in < 5 mins convert 3.5x higher than after 4 hours.
  // With 4hr delay, approx 35% of inbound inquiries drop off / choose competitor.
  // AI drops response time to < 2 seconds, reclaiming ~28% of those lost leads.
  const dropOffRate = Math.min(0.55, 0.15 + (responseTimeHours * 0.06));
  const lostInquiries = Math.round(inquiries * dropOffRate);
  const recoveredInquiries = Math.round(lostInquiries * 0.38);
  const conversionRate = 0.08; // 8% average closed won from qualified inquiries
  const additionalDeals = Math.round(recoveredInquiries * conversionRate);
  const revenueLift = additionalDeals * averageDeal;

  // Time saved: approx 12 mins per inquiry handled, qualified, and CRM populated manually
  const hoursSaved = Math.round((inquiries * 12) / 60);

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calcHeader}>
        <div className={styles.kicker}>ROI & Revenue Recovery Engine</div>
        <h2 className={styles.title}>Calculate Your Inbound Lead Loss vs. AI Recovery Lift</h2>
        <p className={styles.description}>
          Every hour your sales desk takes to respond to an inbound WhatsApp, web form, or ad message drops conversion rates by over 50%.
          See how much revenue our autonomous AI responders recapture for your business every month.
        </p>
      </div>

      <div className={styles.calcGrid}>
        <div className={styles.slidersCard}>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Monthly Inbound Inquiries</span>
              <span className={styles.sliderVal}>{inquiries.toLocaleString()} leads</span>
            </div>
            <input
              type="range"
              min={200}
              max={8000}
              step={100}
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Average Human Response Delay</span>
              <span className={styles.sliderVal}>{responseTimeHours} Hours</span>
            </div>
            <input
              type="range"
              min={1}
              max={24}
              step={1}
              value={responseTimeHours}
              onChange={(e) => setResponseTimeHours(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderGroup}>
            <div className={styles.sliderLabelRow}>
              <span>Average Order / Deal Value</span>
              <span className={styles.sliderVal}>₹{averageDeal.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={2000}
              max={150000}
              step={1000}
              value={averageDeal}
              onChange={(e) => setAverageDeal(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>
        </div>

        <div className={styles.outputCard}>
          <div className={styles.primaryResult}>
            <div className={styles.primaryLabel}>Est. Monthly Revenue Reclaimed</div>
            <div className={styles.primaryNumber}>₹{revenueLift.toLocaleString()}</div>
            <div className={styles.primarySub}>+{additionalDeals} Closed Customers Recovered Every Month</div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Operational Hours Saved</div>
              <div className={styles.metricVal}>{hoursSaved} hrs/mo</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>New AI Latency</div>
              <div className={styles.metricVal}>&lt; 2.0 sec</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Reclaimed Inquiries</div>
              <div className={styles.metricVal}>+{recoveredInquiries}</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricLabel}>Speed Conversion Lift</div>
              <div className={styles.metricVal}>+380%</div>
            </div>
          </div>

          <a href="/contact" className={styles.ctaBtn}>
            Deploy Your Custom AI Automation Stack &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
