'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './StickyContactButton.module.css';

export default function StickyContactButton() {
  const pathname = usePathname();

  // Hide on studio and on /contact page (since user is already on the contact page)
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
        {/* Top 3D Specular Bevel Line */}
        <div className={styles.tabBevelLight} />

        {/* Continuous Tactile Light Beam Shimmer */}
        <div className={styles.shimmerLightBeam} />

        {/* Pure Text - No Icons, No Arrows */}
        <span className={styles.tabText}>
          BOOK <span className={styles.goldText}>FREE</span> CONSULTATION
        </span>
      </Link>
    </aside>
  );
}
