'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './StickyContactButton.module.css';

export default function StickyContactButton() {
  const pathname = usePathname();

  // Hide on studio and contact page (since user is already on contact form)
  if (pathname?.startsWith('/studio') || pathname === '/contact') {
    return null;
  }

  return (
    <aside className={styles.stickyWrapper} aria-label="Book Free Consultation sticky button">
      <Link
        href="/contact"
        className={styles.verticalStickyTab}
        title="Book Your Free Consultation with Marketing Copilot"
      >
        {/* Ambient Hover Glow */}
        <div className={styles.ambientGlow} />

        {/* Top: Live Pulse Dot & Calendar Icon */}
        <div className={styles.tabTop}>
          <span className={styles.livePulseDot} aria-hidden="true" />
          <svg
            className={styles.calendarIcon}
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>

        {/* Vertical Text Stacking */}
        <div className={styles.tabTextWrap}>
          <span className={styles.tabText}>
            BOOK <span className={styles.highlightFree}>FREE</span> CONSULTATION
          </span>
        </div>

        {/* Bottom Forward Arrow Indicator */}
        <div className={styles.tabBottom}>
          <span className={styles.arrowIcon} aria-hidden="true">→</span>
        </div>
      </Link>
    </aside>
  );
}
