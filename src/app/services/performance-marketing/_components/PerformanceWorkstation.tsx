'use client';

import React, { useState } from 'react';
import styles from './PerformanceWorkstation.module.css';

interface TabData {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: string[];
  codeLabel: string;
  codeSnippet: string;
}

const PERFORMANCE_TABS: TabData[] = [
  {
    id: 'mer',
    tabLabel: '01. Blended MER Engine',
    title: 'Marketing Efficiency Ratio (MER) Modeling',
    desc: 'Instead of relying on siloed, inflated platform-reported ROAS, we steer performance using Blended MER (Total Revenue divided by Total Ad Spend) to guarantee true business profitability.',
    features: [
      'Comprehensive accounting of Meta, Google, LinkedIn, and offline ad investments',
      'Target blended contribution margin tracking after inventory COGS and shipping',
      'Breakeven MER modeling for aggressive customer acquisition scale',
      'First-party transaction reconciliations eliminating duplicated platform attribution',
    ],
    codeLabel: 'MER & Contribution Margin Engine',
    codeSnippet: `// Marketing Copilot MER Diagnostic
Total_Gross_Revenue = ₹24,80,000
Total_Ad_Spend = ₹4,60,000 (Meta: ₹2.8L, Google: ₹1.8L)
------------------------------------------------------
BLENDED MER: 5.39X
NET CONTRIBUTION MARGIN: 34.2% (After COGS & Delivery)
STATUS: SCALING MODE ACTIVATED (Profitable Unit Economics)`,
  },
  {
    id: 'attribution',
    tabLabel: '02. Multi-Touch Attribution',
    title: 'Server-Side Cloud Attribution & Journey Mapping',
    desc: 'We map the full multi-touch customer path from initial Meta reel view to Google search verification and final WhatsApp closing, giving credit to every touchpoint.',
    features: [
      'Custom BigQuery pipeline combining Meta CAPI, Google Ads, and CRM data',
      'W-shaped attribution modeling capturing first-touch, lead-creation, and opportunity-close',
      'Cross-device identity resolution for Indian consumer buying patterns',
      'Elimination of blind spots caused by iOS 14.5+ and privacy restrictions',
    ],
    codeLabel: 'Multi-Touch Journey Event Schema',
    codeSnippet: `// BigQuery Journey Attribution
Customer_ID: "OD_BHUB_94821"
Touch_1: Meta Reel Ad ("Solar Subsidy Explainer") [First Touch: 30%]
Touch_2: Google Exact Search ("kalinga solar bhubaneswar") [Lead Gen: 30%]
Touch_3: WhatsApp Consultation Call [Opportunity Close: 40%]
------------------------------------------------------
RESULT: Full-funnel attribution without platform bias.`,
  },
  {
    id: 'reallocation',
    tabLabel: '03. Dynamic Reallocation',
    title: 'Dynamic Budget Reallocation Engine',
    desc: 'Ad platforms experience auction volatility daily. Our automated allocation rules shift budget from high-CAC fatigue campaigns into low-CPA winning ad sets in real time.',
    features: [
      'Automated kill switches halting ad creative when CPA breaches 20% tolerance',
      'Surge scaling protocols increasing budget by 25% on winning ad angles',
      'Cross-platform budget balancing between Meta demand and Google search capture',
      'Weekend vs weekday bid pacing optimized for consumer buying rhythms',
    ],
    codeLabel: 'Automated Budget Pacing Rules',
    codeSnippet: `// Automated Rule: "Scale_Winning_Angle_Campaign"
IF (ad_set.conversions >= 5 AND ad_set.cpa <= target_cpa * 0.85) {
  action: INCREASE_DAILY_BUDGET(25%);
  notify: "WhatsApp alert sent to Growth Director";
} ELSE IF (ad_set.spend >= 3 * target_cpa AND ad_set.conversions == 0) {
  action: PAUSE_AD_SET();
}`,
  },
  {
    id: 'cro',
    tabLabel: '04. Landing Page CRO',
    title: 'Conversion Rate Optimization (CRO) Velocity',
    desc: 'Traffic without conversion is vanity. We deploy continuous A/B multivariate landing page testing that doubles conversion rates and drops blended CAC in half.',
    features: [
      'Sub-800ms Next.js lightweight mobile experiences with instant load times',
      'Dynamic social proof popups customized with target location signals',
      'Micro-frictionless 1-tap WhatsApp consultation buttons',
      'Heatmap and session recording audits analyzing user drop-offs',
    ],
    codeLabel: 'A/B Multivariate Split Config',
    codeSnippet: `// Next.js Edge Middleware Split Test
Variant_A (Control): 5-field web lead form (CVR: 3.8%)
Variant_B (Challenger): 1-tap WhatsApp chat router (CVR: 12.4%)
------------------------------------------------------
LIFT: +226% Conversion Rate Increase
CAC IMPACT: Cost per customer dropped from ₹2,100 to ₹645`,
  },
];

export default function PerformanceWorkstation() {
  const [activeTab, setActiveTab] = useState<TabData>(PERFORMANCE_TABS[0]);

  return (
    <section className={styles.workstationSection}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>SCALING INFRASTRUCTURE</span>
          <h2 className={styles.title}>
            The Performance Marketing Workstation
          </h2>
          <p className={styles.sub}>
            Explore the four technical engines powering predictable revenue growth, full-funnel attribution, and CAC reduction across India.
          </p>
        </div>

        <div className={styles.workstationCard}>
          <div className={styles.tabsBar}>
            {PERFORMANCE_TABS.map((tab) => (
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
                  <span style={{ color: '#10B981' }}>● LIVE TELEMETRY</span>
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
