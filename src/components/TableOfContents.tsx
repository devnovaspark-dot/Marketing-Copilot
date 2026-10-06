'use client';

import { useState, useEffect } from 'react';
import styles from './TableOfContents.module.css';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({
  headings,
  isMobileCollapsible = false,
  variant = 'sidebar',
  title,
}: {
  headings: HeadingItem[];
  isMobileCollapsible?: boolean;
  variant?: 'sidebar' | 'inline';
  title?: string;
}) {
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(!isMobileCollapsible);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const displayTitle = title || (variant === 'inline' ? 'In This Article' : 'On This Page');

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      if (isMobileCollapsible) {
        setIsExpanded(false);
      }
    }
  };

  // Inline Variant (Featured in the Left / Main Article Column)
  if (variant === 'inline') {
    return (
      <nav className={styles.inlineTocCard} aria-label="Article Table of Contents">
        <div className={styles.inlineTocHeader}>
          <div className={styles.inlineHeaderLeft}>
            <span className={styles.inlineEyebrow}>✦ TABLE OF CONTENTS</span>
            <h2 className={styles.inlineTitleText}>{displayTitle}</h2>
          </div>
          <div className={styles.inlineHeaderRight}>
            <span className={styles.inlineCountBadge}>{headings.length} Topics</span>
            {isMobileCollapsible && (
              <button
                type="button"
                className={styles.inlineMobileToggleBtn}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? 'Collapse table of contents' : 'Expand table of contents'}
              >
                <span>{isExpanded ? 'Hide' : 'Show'}</span>
                <span className={`${styles.inlineChevron} ${isExpanded ? styles.inlineChevronOpen : ''}`}>
                  ▼
                </span>
              </button>
            )}
          </div>
        </div>

        <div className={`${styles.inlineListWrapper} ${isExpanded ? styles.inlineListExpanded : styles.inlineListCollapsed}`}>
          <ul className={styles.inlineGrid}>
            {headings.map((h, idx) => {
              const numStr = (idx + 1).toString().padStart(2, '0');
              const isActive = activeId === h.id;
              return (
                <li key={idx} className={`${styles.inlineItem} ${h.level === 3 ? styles.inlineItemH3 : ''}`}>
                  <a
                    href={`#${h.id}`}
                    className={`${styles.inlineLink} ${isActive ? styles.inlineLinkActive : ''}`}
                    onClick={(e) => scrollToHeading(h.id, e)}
                  >
                    <span className={`${styles.inlineNumBadge} ${isActive ? styles.inlineNumActive : ''}`}>
                      {numStr}
                    </span>
                    <span className={styles.inlineItemText}>{h.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }

  // Sidebar Variant (Sticky Companion on Right Column - Zero Scrollbar)
  return (
    <nav className={styles.tocCard} aria-label="Sidebar Table of Contents">
      {isMobileCollapsible ? (
        <button
          type="button"
          className={styles.tocHeaderBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <div className={styles.tocHeaderLeft}>
            <span className={styles.tocDot} />
            <span className={styles.tocTitleText}>{displayTitle}</span>
            <span className={styles.tocCount}>{headings.length} topics</span>
          </div>
          <span className={`${styles.tocChevron} ${isExpanded ? styles.tocChevronOpen : ''}`}>
            ▼
          </span>
        </button>
      ) : (
        <div className={styles.tocHeader}>
          <div className={styles.tocHeaderLeft}>
            <span className={styles.tocDot} />
            <span className={styles.tocTitleText}>{displayTitle}</span>
          </div>
          <span className={styles.tocCount}>{headings.length}</span>
        </div>
      )}

      {isExpanded && (
        <ul className={styles.tocList}>
          {headings.map((h, idx) => (
            <li
              key={idx}
              className={`${styles.tocItem} ${h.level === 3 ? styles.tocItemH3 : ''}`}
            >
              <a
                href={`#${h.id}`}
                className={`${styles.tocLink} ${activeId === h.id ? styles.tocLinkActive : ''}`}
                onClick={(e) => scrollToHeading(h.id, e)}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
