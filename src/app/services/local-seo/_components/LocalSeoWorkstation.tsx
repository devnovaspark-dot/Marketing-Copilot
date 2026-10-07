'use client';

import React, { useState } from 'react';
import styles from './LocalSeoWorkstation.module.css';

interface TabData {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: string[];
  codeLabel: string;
  codeSnippet: string;
}

const LOCAL_SEO_TABS: TabData[] = [
  {
    id: 'gmb-tuning',
    tabLabel: '01. GMB Category Tuning',
    title: 'Primary Category & Secondary Attribute Optimization',
    desc: 'Google Maps algorithms assign 65%+ ranking weight to your primary GMB category and custom localized service attributes. We select high-value categorical taxonomy that unlocks Map 3-Pack placement.',
    features: [
      'Primary category selection mapped against top-performing Bhubaneswar competitors',
      'Secondary category clustering expanding keyword eligibility across 40+ related terms',
      'Localized service menu architecture with exact pricing and booking links',
      'Continuous weekly GMB Google Post updates informing the algorithm of active business hours',
    ],
    codeLabel: 'Google Business Profile Taxonomy Schema',
    codeSnippet: `// GMB API v4.9 Category Architecture
primary_category: "gcid:organic_food_store"
secondary_categories: [
  "gcid:fresh_food_market", "gcid:grocery_delivery_service",
  "gcid:gourmet_grocery_store", "gcid:supermarket"
]
attributes: {
  has_wheelchair_accessible_entrance: true,
  offers_curbside_pickup: true,
  languages_spoken: ["Odia", "English", "Hindi"],
  service_area_radius: "15km around Nayapalli, Bhubaneswar"
}`,
  },
  {
    id: 'geo-media',
    tabLabel: '02. Geo-Tagged EXIF Media',
    title: 'Geo-Tagged EXIF Photos & 360 Virtual Tours',
    desc: 'We inject exact GPS latitude and longitude metadata into high-resolution photography before uploading to Google Maps, proving physical geographic presence to search crawlers.',
    features: [
      'Storefront, interior, team, and product photos tagged with exact Bhubaneswar GPS coordinates',
      'Google Street View 360 virtual walk-throughs increasing user dwell time by 3.2X',
      'EXIF IPTC copyright and keyword schema embedded inside image metadata',
      'Scheduled weekly uploads training Google image recognition AI on your branding',
    ],
    codeLabel: 'EXIF GPS Metadata Payload',
    codeSnippet: `// Image EXIF GPS Payload (Nayapalli Hub)
GPSLatitude: 20° 17' 42.18" N (20.29505)
GPSLongitude: 85° 48' 56.24" E (85.81562)
GPSAltitude: 45 meters above sea level
IPTC_Headline: "Sri Panduranga Divine Fresh Organic Market Nayapalli"
Keywords: ["organic groceries", "nayapalli market", "bhubaneswar fresh vegetables"]`,
  },
  {
    id: 'citations',
    tabLabel: '03. Local Citations & NAP',
    title: 'Hyperlocal Bhubaneswar Citations & NAP Lockdown',
    desc: 'Inconsistent Name, Address, and Phone numbers (NAP) destroy Map 3-Pack rankings. We synchronize your data across 60+ Tier-1 directories with zero duplicate listings.',
    features: [
      '100% NAP consistency across Google Maps, Apple Maps, Justdial, Sulekha, and Bing',
      'Hyperlocal Bhubaneswar trade portals and Chamber of Commerce directory listings',
      'Automated duplicate listing suppression preventing confusion in Google crawlers',
      'Structured LocalBusiness JSON-LD schema deployed directly onto your primary website',
    ],
    codeLabel: 'Schema.org LocalBusiness JSON-LD',
    codeSnippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  "name": "Sri Panduranga Divine Fresh",
  "telephone": "+91-94371-68434",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No 482, Nayapalli Spine",
    "addressLocality": "Bhubaneswar",
    "postalCode": "751012",
    "addressRegion": "Odisha"
  }
}
</script>`,
  },
  {
    id: 'review-funnels',
    tabLabel: '04. Review Funnels',
    title: 'Automated 5-Star Review Generation Funnels',
    desc: 'Review frequency and positive keyword mentions are the #1 direct ranking signal for Google Maps. We automate WhatsApp review invites that turn satisfied buyers into 5-star ratings.',
    features: [
      'Automated post-purchase WhatsApp review links sending buyers straight to the Google review box',
      'Keyword-prompted review templates encouraging customers to mention Bhubaneswar locations',
      'AI sentiment analysis flagging negative feedback privately before it reaches Google',
      'Professional owner responses to 100% of reviews written within 2 hours',
    ],
    codeLabel: 'Review Request Automation Flow',
    codeSnippet: `// WhatsApp API Review Trigger
webhook: "Customer_Checkout_Complete" {
  customer_phone: "+91987654XXXX"
  delay: "45 minutes"
  message: "Hi Priya! How was your organic produce from Sri Panduranga Nayapalli? 
  Tap to share your quick 5-star feedback: g.page/r/panduranga-review"
}`,
  },
];

export default function LocalSeoWorkstation() {
  const [activeTab, setActiveTab] = useState<TabData>(LOCAL_SEO_TABS[0]);

  return (
    <section className={styles.workstationSection}>
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>MAP 3-PACK INFRASTRUCTURE</span>
          <h2 className={styles.title}>
            The Hyperlocal Local SEO Workstation
          </h2>
          <p className={styles.sub}>
            Explore the four proprietary mechanisms we deploy to achieve permanent Google Map 3-Pack rankings across India.
          </p>
        </div>

        <div className={styles.workstationCard}>
          <div className={styles.tabsBar}>
            {LOCAL_SEO_TABS.map((tab) => (
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
