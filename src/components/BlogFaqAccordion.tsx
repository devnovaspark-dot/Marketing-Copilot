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
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  if (!items || items.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={styles.faqContainer} aria-label="Frequently Asked Questions">
      <div className={styles.faqHeader}>
        <span className={styles.faqBadge}>Direct Answers</span>
        <h3 className={styles.faqTitle}>{heading}</h3>
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
                  +
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
