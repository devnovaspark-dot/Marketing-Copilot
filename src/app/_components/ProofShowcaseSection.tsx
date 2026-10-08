'use client';

import React, { useState, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import AutoZoomImage from '@/components/AutoZoomImage';
import { PROOF_ITEMS, ProofItem } from '@/data/proofManifest';
import styles from './ProofShowcaseSection.module.css';

type CategoryFilter = 'all' | 'google-ads' | 'meta-ads' | 'local-seo' | 'google-business-profile' | 'ecommerce-growth';

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Evidence' },
  { id: 'google-ads', label: 'Google Ads' },
  { id: 'meta-ads', label: 'Meta Ads' },
  { id: 'ecommerce-growth', label: 'E-Commerce Growth' },
  { id: 'google-business-profile', label: 'Google Business Profile' },
  { id: 'local-seo', label: 'Local SEO' },
];

export default function ProofShowcaseSection() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROOF_ITEMS.length };
    for (const item of PROOF_ITEMS) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return PROOF_ITEMS.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [activeTab, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleTabChange = (tab: CategoryFilter) => {
    setActiveTab(tab);
    setVisibleCount(9);
  };

  return (
    <section className={styles.section} id="verified-proof">
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <ScrollReveal className="text-center">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>49 Live Proof Telemetry Dashboards</span>
            </div>

            <h2 className={`display-lg ${styles.title}`}>
              Verifiable Campaign Results:{' '}
              <span className="accent-gradient">Every Metric, Number &amp; Conversion</span>
            </h2>

            <p className={styles.subtitle}>
              Actual client dashboards showing real ROAS, revenue spikes, phone call surges, and #1 local rankings.
              <strong> Hover on any dashboard to auto-zoom into numbers</strong>, or click <em>Deep Zoom</em> for high-resolution inspection.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters and Search Bar */}
        <div className={styles.filterControls}>
          <div className={styles.filterTabs}>
            {CATEGORY_TABS.map((tab) => {
              const count = categoryCounts[tab.id] || 0;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              placeholder="Search by metric (e.g. ROAS, conversions, calls, revenue)..."
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Proof Grid */}
        <div className={styles.grid}>
          {displayedItems.map((item, idx) => (
            <ScrollReveal key={item.file} delay={(idx % 3) * 60} className={styles.card}>
              <div className={styles.cardVisualWrapper}>
                <AutoZoomImage
                  src={item.file}
                  webpSrc={item.webpFile}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  aspectRatio="16 / 10"
                  zoomScale={2.2}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMetaRow}>
                  <span className={styles.categoryTag}>{item.category.replace(/-/g, ' ')}</span>
                  <span className={styles.verifiedPill}>✓ Real Client Telemetry</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.cardFooter}>
                  <span>60fps GPU Zoom Lens</span>
                  <span className={styles.inspectHint}>🔍 Click to Inspect</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((prev) => prev + 12)}
            >
              <span>Load More Proof Dashboards ({filteredItems.length - visibleCount} remaining)</span>
              <span>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
