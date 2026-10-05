'use client';

import { useState, useEffect } from 'react';
import styles from './TableOfContents.module.css';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: HeadingItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

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

  if (!headings || headings.length < 2) return null;

  return (
    <nav className={styles.tocCard} aria-label="Table of Contents">
      <h3 className={styles.tocTitle}>On This Page</h3>
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
                }
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
