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
}: {
  headings: HeadingItem[];
  isMobileCollapsible?: boolean;
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

  return (
    <nav className={styles.tocCard} aria-label="Table of Contents">
      {isMobileCollapsible ? (
        <button
          type="button"
          className={styles.tocHeaderBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <div className={styles.tocHeaderLeft}>
            <span className={styles.tocDot} />
            <span className={styles.tocTitleText}>On This Page</span>
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
            <span className={styles.tocTitleText}>On This Page</span>
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
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(h.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    setActiveId(h.id);
                    // On mobile collapsible, close after clicking
                    if (isMobileCollapsible) {
                      setIsExpanded(false);
                    }
                  }
                }}
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
