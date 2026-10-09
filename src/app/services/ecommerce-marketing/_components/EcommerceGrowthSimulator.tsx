'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './EcommerceGrowthSimulator.module.css';

type EcomFunnel = 'fastcheckout' | 'pmax' | 'retention';

export default function EcommerceGrowthSimulator() {
  const [activeFunnel, setActiveFunnel] = useState<EcomFunnel>('fastcheckout');

  const funnels = {
    fastcheckout: {
      tag: '1-CLICK UPI & FRICTIONLESS CHECKOUT',
      headline: 'Eliminating the 70% Cart Abandonment Wall',
      subhead: 'Most Indian shoppers abandon carts when forced to fill 12 address fields. Our 1-click UPI checkout autofills details via WhatsApp and mobile number in under 20 seconds.',
      kpis: [
        { label: 'Checkout Duration', value: '< 22 Seconds' },
        { label: 'Checkout Drop-off', value: '-48% Reduced' },
        { label: 'UPI Share', value: '82% of Orders' },
        { label: 'Conversion Lift', value: '+310% Orders' },
      ],
      previewItem: 'Sambalpuri Silk Handloom Saree',
      previewPrice: '₹4,850',
      previewCheckout: '⚡ Buy Now with 1-Click UPI',
      summary: 'Dynamic UPI QR codes, instant address lookup via phone number, and zero password creation friction maximizing checkout velocity across India.',
    },
    pmax: {
      tag: 'GOOGLE PMAX & META ADVANTAGE+ SHOPPING',
      headline: 'Algorithmic Commercial Demand Harvesting',
      subhead: 'We feed high-margin product catalog data into machine learning algorithms that target buyers with verified purchase history for your exact category.',
      kpis: [
        { label: 'Blended ROAS', value: '5.8X Average' },
        { label: 'New Customer CAC', value: '-36% Lower' },
        { label: 'Catalog Match Rate', value: '98.5%' },
        { label: 'Dynamic Retargeting', value: 'Real-time' },
      ],
      previewItem: 'High-Margin Seasonal Collection',
      previewPrice: '₹3,200',
      previewCheckout: '🎯 Targeted to High-AOV Buyers',
      summary: 'Automated feed synchronization with Google Merchant Center and Meta Catalog, serving dynamic creative variants to users browsing competitors.',
    },
    retention: {
      tag: 'WHATSAPP POST-PURCHASE RETENTION & RTO SHIELD',
      headline: 'Slashing RTO to Under 8% & Multiplying Repeat Orders',
      subhead: 'Cash-on-delivery (COD) returns kill e-commerce margins. We deploy automated WhatsApp order confirmations, address validations, and pre-payment discounts.',
      kpis: [
        { label: 'RTO Return Rate', value: '< 8% (vs 32% Avg)' },
        { label: 'COD to Prepaid Shift', value: '44% of COD Orders' },
        { label: 'Repeat Purchase LTV', value: '+42% within 60 Days' },
        { label: 'Review Collection', value: '28% Response' },
      ],
      previewItem: 'VIP Repeat Customer Re-order',
      previewPrice: '₹5,600',
      previewCheckout: '💬 WhatsApp 1-Click Re-order',
      summary: 'Automated 3-stage WhatsApp sequence verifying COD orders before dispatch, saving lakhs in reverse logistics and courier shipping fees.',
    },
  };

  const current = funnels[activeFunnel];

  return (
    <section className={styles.section} id="ecommerce-simulator">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.pulseDot} />
            <span>Interactive D2C Revenue Simulator</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Scale Your E-Commerce GMV <span className="accent-gradient">With Zero Wasted Spend</span>
          </h2>
          <p className={styles.subhead}>
            From Google Shopping dominance to sub-second UPI checkouts and automated RTO reduction — explore our integrated D2C growth system.
          </p>
        </ScrollReveal>

        {/* Switcher */}
        <div className={styles.switcherRow}>
          <button
            type="button"
            className={`${styles.switchBtn} ${activeFunnel === 'fastcheckout' ? styles.switchBtnActive : ''}`}
            onClick={() => setActiveFunnel('fastcheckout')}
          >
            <span>⚡ 1-Click UPI Checkout</span>
            <span className={styles.badge}>Max Conversion</span>
          </button>

          <button
            type="button"
            className={`${styles.switchBtn} ${activeFunnel === 'pmax' ? styles.switchBtnActive : ''}`}
            onClick={() => setActiveFunnel('pmax')}
          >
            <span>🛍️ Advantage+ &amp; Google PMax</span>
            <span className={styles.badge}>5.8X ROAS</span>
          </button>

          <button
            type="button"
            className={`${styles.switchBtn} ${activeFunnel === 'retention' ? styles.switchBtnActive : ''}`}
            onClick={() => setActiveFunnel('retention')}
          >
            <span>🛡️ RTO Reduction &amp; Retention</span>
            <span className={styles.badge}>&lt; 8% RTO</span>
          </button>
        </div>

        {/* Console Stage */}
        <div className={styles.consoleStage}>
          {/* Left Column: Visual Mockup */}
          <div className={styles.mockupCol}>
            <div className={styles.storeCard}>
              <div className={styles.storeTop}>
                <span className={styles.liveTag}>LIVE D2C CHECKOUT ENGINE</span>
                <span className={styles.sslBadge}>🔒 256-Bit Encrypted</span>
              </div>

              <div className={styles.productBox}>
                <div className={styles.productImgMock}>🛍️</div>
                <div className={styles.productDetails}>
                  <span className={styles.productCategory}>PREMIUM HANDCRAFTED D2C</span>
                  <div className={styles.productTitle}>{current.previewItem}</div>
                  <div className={styles.priceRow}>
                    <span className={styles.currentPrice}>{current.previewPrice}</span>
                    <span className={styles.origPrice}>₹6,500</span>
                    <span className={styles.discountPill}>SAVE 25%</span>
                  </div>
                </div>
              </div>

              {/* Simulated Fast-Checkout Sheet */}
              <div className={styles.checkoutSheet}>
                <div className={styles.sheetHeader}>
                  <span>⚡ Express Mobile Checkout</span>
                  <span className={styles.upiPill}>Google Pay · PhonePe · Paytm</span>
                </div>

                <div className={styles.autoFilledRow}>
                  <div className={styles.inputMock}>
                    <span className={styles.inputLabel}>Mobile Phone</span>
                    <span className={styles.inputValue}>+91 82807 XXXXX</span>
                  </div>
                  <div className={styles.inputMock}>
                    <span className={styles.inputLabel}>Delivery Pin Code</span>
                    <span className={styles.inputValue}>751024 (Patia, BBSR)</span>
                  </div>
                </div>

                <div className={styles.ctaButtonMock}>
                  <span>{current.previewCheckout}</span>
                  <span>→</span>
                </div>

                <div className={styles.securityRow}>
                  <span>✓ Free Shipping Across Odisha</span>
                  <span>✓ 100% Authentic Handloom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Performance Matrix */}
          <div className={styles.telemetryCol}>
            <div className={styles.telemetryHeader}>
              <span className={styles.telemetryPill}>{current.tag}</span>
              <h3 className={styles.telemetryTitle}>{current.headline}</h3>
              <p className={styles.telemetryDesc}>{current.subhead}</p>
            </div>

            <div className={styles.kpiGrid}>
              {current.kpis.map((k) => (
                <div key={k.label} className={styles.kpiCard}>
                  <span className={styles.kpiKey}>{k.label}</span>
                  <span className={styles.kpiVal}>{k.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.summaryBox}>
              <span className={styles.summaryLabel}>DEPLOYED ARCHITECTURE:</span>
              <p className={styles.summaryText}>{current.summary}</p>
            </div>

            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.auditBtn}>
                <span>Claim Free E-Commerce GMV Audit</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
