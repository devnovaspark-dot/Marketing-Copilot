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
  subtitle?: string;
}

export default function BlogFaqAccordion({
  items,
  heading = 'Frequently Asked Questions',
  subtitle = 'Strategic clarity on digital marketing ROI, performance execution, and partner selection.',
}: BlogFaqAccordionProps) {
  // Start with all items closed or first open if 1 item
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  if (!items || items.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={styles.faqSection} aria-label="Frequently Asked Questions">
      <div className={styles.faqHeaderCard}>
        <div className={styles.faqBadgeRow}>
          <div className={styles.faqPulseDot} />
          <span className={styles.faqBadgeText}>EXPERT STRATEGIC ANSWERS</span>
          <span className={styles.faqCountPill}>{items.length} Questions</span>
        </div>
        <h3 className={styles.faqTitle}>{heading}</h3>
        <p className={styles.faqSubtitle}>{subtitle}</p>
      </div>

      <div className={styles.faqList}>
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const qNum = (idx + 1).toString().padStart(2, '0');
          const panelId = `faq-panel-${idx}`;
          const btnId = `faq-btn-${idx}`;

          return (
            <div
              key={idx}
              className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
            >
              <button
                id={btnId}
                type="button"
                className={styles.faqTrigger}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className={styles.faqTriggerLeft}>
                  <span className={`${styles.qBadge} ${isOpen ? styles.qBadgeOpen : ''}`}>
                    Q{idx + 1}
                  </span>
                  <span className={styles.faqQuestionText}>{item.question}</span>
                </div>
                <div className={`${styles.faqIconBowl} ${isOpen ? styles.faqIconBowlOpen : ''}`} aria-hidden="true">
                  <svg
                    className={styles.faqSvgIcon}
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
                </div>
              </button>

              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={btnId} className={styles.faqAnswerPane}>
                  <div className={styles.answerText}>
                    {item.answer}
                  </div>
                  <div className={styles.takeawayStrip}>
                    <div className={styles.takeawayIcon}>✓</div>
                    <span className={styles.takeawayText}>
                      <strong>Copilot Strategy Insight:</strong> Focus on verified attribution, sustainable unit economics, and data-backed channel testing.
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
