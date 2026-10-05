'use client';

import { useState } from 'react';
import styles from './BlogFaqAccordion.module.css';

export interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFaqAccordionProps {
  items: FAQItem[];
  heading?: string;
}

export default function BlogFaqAccordion({
  items,
  heading = 'Frequently Asked Questions',
}: BlogFaqAccordionProps) {
  // Start with all items CLOSED by default as requested
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  if (!items || items.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={styles.faqContainer} aria-label="Frequently Asked Questions">
      <div className={styles.faqHeader}>
        <span className={styles.faqBadge}>✦ DIRECT STRATEGIC ANSWERS</span>
        <h3 className={styles.faqTitle}>{heading}</h3>
        <p className={styles.faqSubtitle}>
          Clear answers to common questions about executing growth marketing in Bhubaneswar and beyond.
        </p>
      </div>

      <div className={styles.faqList}>
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
            >
              <button
                type="button"
                className={styles.faqButton}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
              >
                <span className={styles.faqQuestion}>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
