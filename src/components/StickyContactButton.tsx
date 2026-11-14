'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './StickyContactButton.module.css';

export default function StickyContactButton() {
  const pathname = usePathname();

  // Hide on studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on the home page, smoothly scroll to the performance audit consultation section
    if (pathname === '/') {
      const target = document.querySelector<HTMLElement>('#home-performance-audit');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <aside className={styles.stickyWrapper} aria-label="Book Free Consultation sticky button">
      <Link
        href="/#home-performance-audit"
        onClick={handleTabClick}
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
