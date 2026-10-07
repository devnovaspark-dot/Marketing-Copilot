'use client';

import React, { useState } from 'react';
import styles from './GoogleAdsWorkstation.module.css';

interface TabData {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: string[];
  codeLabel: string;
  codeSnippet: string;
}

const WORKSTATION_TABS: TabData[] = [
  {
    id: 'exact-match',
    tabLabel: '01. Intent Harvest Bidding',
    title: 'High-Intent Exact Match Bidding Architecture',
    desc: 'We structure single-theme ad groups (STAGs) around commercial-intent queries with exact and phrase match modifiers, capturing buyers ready to transact in India.',
    features: [
      'Pinpoint geographical radius targeting (5–12 km around your Bhubaneswar clinic/store)',
      'Dayparting bid schedules aligned strictly with your sales team calling hours',
      'Device-level bid modifiers boosting high-converting mobile phone inquiries',
      'Algorithmic Target CPA and Value-Based Smart Bidding calibration',
    ],
    codeLabel: 'Google Ads Intent Routing Config',
    codeSnippet: `// Campaign: "Bhubaneswar_HighIntent_Exact"
geo_target {
  criteria_id: 1007797 // Bhubaneswar, Odisha
  radius: "10km", center: "Saheed Nagar Corridor"
  presence_only: true // Excludes out-of-state clickers
}
bidding_strategy: "MAXIMIZE_CONVERSIONS_TARGET_CPA" {
  target_cpa_micros: 350000000 // ₹350 Target CPL
  bid_modifier_mobile: 1.35   // +35% on mobile calls
}`,
  },
  {
    id: 'negatives',
    tabLabel: '02. 400+ Negative Firewalls',
    title: 'Zero-Waste Negative Keyword Firewalls',
    desc: 'Up to 45% of Google Ads budget is wasted on accidental clicks, job seekers, and academic research. We install pre-compiled negative keyword libraries on day 1.',
    features: [
      'Comprehensive Odisha student & academic query exclusion lists',
      'Government scheme, free service, and DIY project term blocking',
      'Irrelevant regional city negative lists (excluding non-serviceable pin codes)',
      'Daily search term query harvesting to block fresh search waste continuously',
    ],
    codeLabel: 'Negative Keyword Firewall Script',
    codeSnippet: `// Shared Negative List: "Bhubaneswar_AdWaste_Shield"
negative_keywords = [
  "free", "syllabus", "internship", "jobs", "govt",
  "salary", "vacancy", "exam date", "course fees",
  "meaning in odia", "pdf download", "bhadrak",
  "rourkela", "sambalpur" // Block non-serviceable districts
];
apply_to_all_search_campaigns(negative_keywords);`,
  },
  {
    id: 'quality-score',
    tabLabel: '03. 10/10 Quality Score Stack',
    title: 'Landing Pages Engineered for 10/10 Quality Scores',
    desc: 'Google rewards high ad relevance and fast landing pages with massive discounts on cost-per-click. Our sub-800ms landing pages slash your advertising costs.',
    features: [
      'Dynamic Keyword Insertion (DKI) synchronizing ad copy to page H1 headlines',
      'Zero bloated page builders; lightweight Next.js static generation',
      'One-tap mobile click-to-call and WhatsApp consultation buttons',
      'Verified local Bhubaneswar schema markup and doctor/expert credentials',
    ],
    codeLabel: 'Quality Score & Page Speed Metric',
    codeSnippet: `// Google Ads Quality Score Audit
Expected_CTR: "Above Average" (Top 5% in Bhubaneswar)
Ad_Relevance: "Above Average" (100% Keyword Sync)
Landing_Page_Experience: "Above Average" (LCP: 0.62s)
------------------------------------------------------
FINAL QUALITY SCORE: 10 / 10
EFFECTIVE CPC DISCOUNT: 42.8% LOWER THAN LOCAL COMPETITORS`,
  },
  {
    id: 'attribution',
    tabLabel: '04. Server-Side Call Attribution',
    title: 'GA4 Server-Side Phone Call & WhatsApp Attribution',
    desc: 'We track every phone call, WhatsApp chat initiation, and form submission back to the exact keyword that triggered the sale for bulletproof ROI reporting.',
    features: [
      'Dynamic Number Insertion (DNI) tracking call duration and recording audio',
      'Offline conversion imports sending qualified patient/client values back into Google',
      'Server-side Google Tag Manager (sGTM) bypassing ad blockers & iOS drops',
      'Looker Studio executive dashboard with live Cost Per Inbound Lead',
    ],
    codeLabel: 'Call Conversion Webhook Event',
    codeSnippet: `// CallRail -> Google Ads Server-Side Conversion API
event: "Qualified_Phone_Lead" {
  caller_location: "Patia, Bhubaneswar"
  call_duration: "348 seconds"
  matched_keyword: "dental implants saheed nagar"
  gclid: "Cj0KCQjw_xyz123_bhubaneswar_hub"
  conversion_value: "INR 25,000" // Case value
}`,
  },
];

export default function GoogleAdsWorkstation() {
  const [activeTab, setActiveTab] = useState<TabData>(WORKSTATION_TABS[0]);

  return (
    <section className={styles.workstationSection}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>PPC TECHNICAL INFRASTRUCTURE</span>
          <h2 className={styles.title}>
            The Marketing Copilot Google Ads Workstation
          </h2>
          <p className={styles.sub}>
            Explore the four technical pillars powering high-intent search conversions and minimal click waste across India.
          </p>
        </div>

        <div className={styles.workstationCard}>
          <div className={styles.tabsBar}>
            {WORKSTATION_TABS.map((tab) => (
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
                  <span style={{ color: '#10B981' }}>● LIVE COMPILED</span>
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
