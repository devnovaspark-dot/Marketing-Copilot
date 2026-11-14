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

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if current page contains an on-page consultation form
    const formSection = document.querySelector<HTMLElement>(
      '#home-performance-audit, #about-consultation, #growth-strategy-cockpit, #performance-audit-terminal, #executive-revenue-blueprint, [id*="consultation"], [id*="cockpit"], [id*="blueprint"], [id*="audit-terminal"]'
    );
    if (formSection) {
      e.preventDefault();
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className={styles.stickyWrapper} aria-label="Book Free Consultation sticky button">
      <Link
        href="/contact"
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
