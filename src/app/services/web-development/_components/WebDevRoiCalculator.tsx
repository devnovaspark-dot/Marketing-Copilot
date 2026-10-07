'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './WebDevRoiCalculator.module.css';

export default function WebDevRoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(6000);
  const [dealValue, setDealValue] = useState<number>(12000);
  const [currentSpeed, setCurrentSpeed] = useState<number>(4.2);

  const results = useMemo(() => {
    // Speed penalty: for every second above 1s, bounce rate increases significantly
    const currentBounceRate = Math.min(85, Math.max(15, 20 + (currentSpeed - 1) * 14));
    const nextjsBounceRate = 14;
    const retainedVisitorsCurrent = monthlyVisitors * (1 - currentBounceRate / 100);
    const retainedVisitorsNextjs = monthlyVisitors * (1 - nextjsBounceRate / 100);
    const gainedVisitors = Math.round(retainedVisitorsNextjs - retainedVisitorsCurrent);

    // Conversion rate assumed at 2.8% on fast site vs 1.1% on slow site
    const currentInquiries = Math.round(retainedVisitorsCurrent * 0.012);
    const nextjsInquiries = Math.round(retainedVisitorsNextjs * 0.028);
    const additionalInquiries = Math.max(0, nextjsInquiries - currentInquiries);

    // 25% close rate on qualified inquiries
    const additionalDeals = Math.round(additionalInquiries * 0.22);
    const monthlyRevenueGain = additionalDeals * dealValue;
    const annualRevenueGain = monthlyRevenueGain * 12;

    return {
      currentBounceRate: Math.round(currentBounceRate),
      nextjsBounceRate,
      gainedVisitors,
      additionalInquiries,
      monthlyRevenueGain,
      annualRevenueGain,
    };
  }, [monthlyVisitors, dealValue, currentSpeed]);

  const formatRupees = (amt: number) => {
    if (amt >= 10000000) return `₹${(amt / 10000000).toFixed(2)} Cr`;
    if (amt >= 100000) return `₹${(amt / 100000).toFixed(2)} Lakhs`;
    return `₹${amt.toLocaleString('en-IN')}`;
  };

  return (
    <section className={styles.section} id="speed-roi">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.calcDot} />
            <span>Interactive Speed &amp; Revenue Engine</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            How Much Revenue Is A Slow Website <span className="accent-gradient">Costing Your Business?</span>
          </h2>
          <p className={styles.subhead}>
            Model how sub-second Next.js page speeds reduce visitor bounce rates and multiply monthly inquiries for your business.
          </p>
        </ScrollReveal>

        {/* Interactive Engine Console */}
        <div className={styles.engineConsole}>
          {/* Controls Column */}
          <div className={styles.controlsCol}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>Monthly Website Visitors</label>
                <span className={styles.sliderValue}>{monthlyVisitors.toLocaleString()} visits/mo</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderScale}>
                <span>1,000</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>Average Customer / Order Value (AOV)</label>
                <span className={styles.sliderValue}>{formatRupees(dealValue)}</span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={2000}
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderScale}>
                <span>₹2,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label className={styles.sliderLabel}>Current Mobile Load Speed</label>
                <span className={styles.sliderValue} style={{ color: currentSpeed > 3 ? '#EF4444' : '#10B981' }}>
                  {currentSpeed.toFixed(1)} seconds
                </span>
              </div>
              <input
                type="range"
                min={1.0}
                max={7.0}
                step={0.2}
                value={currentSpeed}
                onChange={(e) => setCurrentSpeed(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.sliderScale}>
                <span style={{ color: '#10B981' }}>1.0s (Fast)</span>
                <span>3.5s (Average)</span>
                <span style={{ color: '#EF4444' }}>7.0s (Critical)</span>
              </div>
            </div>

            {/* Diagnostic Note */}
            <div className={styles.speedDiagnostic}>
              <div className={styles.diagIcon}>⚠️</div>
              <div className={styles.diagText}>
                At {currentSpeed.toFixed(1)}s load time, <strong>{results.currentBounceRate}%</strong> of your visitors leave before seeing your offer. Next.js reduces bounce to <strong>14%</strong>.
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className={styles.resultsCol}>
            <div className={styles.resultsGlow} />
            <div className={styles.resultsHeader}>
              <span className={styles.resBadge}>PROJECTED SPEED REVENUE ROI</span>
              <div className={styles.resHeadline}>Recovered Pipeline Value</div>
            </div>

            <div className={styles.primaryMetricBlock}>
              <span className={styles.primLabel}>Estimated Additional Annual Revenue:</span>
              <span className={styles.primValue}>{formatRupees(results.annualRevenueGain)}</span>
              <span className={styles.primSub}>({formatRupees(results.monthlyRevenueGain)} / month)</span>
            </div>

            <div className={styles.outputGrid}>
              <div className={styles.outputCard}>
                <span className={styles.outKey}>Visitors Saved / Month</span>
                <span className={styles.outVal}>+{results.gainedVisitors.toLocaleString()}</span>
                <span className={styles.outSub}>Browsing your services</span>
              </div>

              <div className={styles.outputCard}>
                <span className={styles.outKey}>Extra Inquiries / Month</span>
                <span className={styles.outVal}>+{results.additionalInquiries}</span>
                <span className={styles.outSub}>Calls &amp; WhatsApp forms</span>
              </div>
            </div>

            <div className={styles.resCtaBox}>
              <Link href="/contact" className={styles.claimAuditBtn}>
                <span>Claim Free Speed &amp; Revenue Audit</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
