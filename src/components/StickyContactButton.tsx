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
        className={styles.skeuomorphicTab}
        title="Book Your Free Consultation with Marketing Copilot"
      >
        <div className={styles.tabBevelLight} />
        <span className={styles.tabText}>
          BOOK <span className={styles.goldText}>FREE</span> CONSULTATION
        </span>
      </Link>
    </aside>
  );
}
