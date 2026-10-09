'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
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
  const [activeModalItem, setActiveModalItem] = useState<ProofItem | null>(null);

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

  const openModal = (item: ProofItem) => {
    setActiveModalItem(item);
  };

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!activeModalItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, closeModal]);

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
              <span>49 LIVE PROOF TELEMETRY DASHBOARDS</span>
            </div>

            <h2 className={`display-lg ${styles.title}`}>
              Verifiable Campaign Results:{' '}
              <span className="accent-gradient">Every Metric, Number &amp; Conversion</span>
            </h2>

            <p className={styles.subtitle}>
              Actual client dashboards showing real ROAS, revenue spikes, phone call surges, and #1 local rankings.
              Hover any card to inspect and click to view full resolution.
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

        {/* Proof Grid with Skeuomorphic Tactile Depth */}
        <div className={styles.grid}>
          {displayedItems.map((item, idx) => (
            <ScrollReveal key={item.file} delay={(idx % 3) * 60} className={styles.cardWrapper}>
              <div
                className={styles.skeuomorphicCard}
                onClick={() => openModal(item)}
                title="Click to view full-resolution dashboard"
              >
                {/* Visual Image Chassis — Zero text above image; Clean hover overlay */}
                <div className={styles.cardVisualWrapper}>
                  <div className={styles.imageInnerFrame}>
                    <Image
                      src={item.webpFile || item.file}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={92}
                      className={styles.proofCardImg}
                    />

                    {/* Interactive Hover Overlay: Click to see impact */}
                    <div className={styles.hoverImpactOverlay}>
                      <span className={styles.hoverImpactBadge}>
                        <span className={styles.hoverImpactDot} />
                        Click to see impact
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tactile Beveled Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.categoryTag}>{item.category.replace(/-/g, ' ')}</span>
                    <span className={styles.verifiedPill}>
                      <span className={styles.verifiedDot} />
                      Verified Telemetry
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.telemetryTag}>Direct Platform Capture</span>
                    <button
                      type="button"
                      className={styles.inspectBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                      title="Inspect full image"
                    >
                      <span>🔍 Full Size</span>
                    </button>
                  </div>
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

      {/* ═════════════════════════════════════════════════════════════════
          HIGH-DEFINITION LIGHTBOX MODAL (CLEAN FULL RESOLUTION)
      ═════════════════════════════════════════════ */}
      {activeModalItem && (
        <div
          className={styles.modalBackdrop}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <span className={styles.modalCategoryBadge}>
                  {activeModalItem.category.replace(/-/g, ' ').toUpperCase()}
                </span>
                <h3 className={styles.modalTitle}>{activeModalItem.title}</h3>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className={styles.modalCloseBtn}
                aria-label="Close image inspection"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className={styles.modalImageStage}>
              <div className={styles.modalImageTransformWrap}>
                <Image
                  src={activeModalItem.webpFile || activeModalItem.file}
                  alt={activeModalItem.title}
                  width={1400}
                  height={900}
                  className={styles.modalImage}
                  quality={95}
                  priority
                />
              </div>
            </div>

            {/* Modal Footer — Clean, zero boring text walls; illuminated navbar-style animated BeamButton */}
            <div className={styles.modalFooter}>
              <div className={styles.modalFooterActions}>
                <BeamButton
                  href={`https://wa.me/918280788689?text=${encodeURIComponent(
                    `Hi Marketing Copilot, I saw your ${activeModalItem.title} telemetry dashboard and want to achieve similar results for my brand.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Discuss This Growth Strategy"
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
