import Link from 'next/link';
import styles from './PillarPostCard.module.css';

interface PillarPostCardProps {
  pillar: {
    title: string;
    slug: string;
    excerpt?: string;
  };
}

export default function PillarPostCard({ pillar }: PillarPostCardProps) {
  if (!pillar || !pillar.slug) return null;

  return (
    <aside className={styles.pillarCard} aria-label="Core Topic Cluster Pillar Guide">
      <div className={styles.pillarHeader}>
        <span className={styles.pillarIcon} aria-hidden="true">★</span>
        <span className={styles.pillarLabel}>Recommended Pillar Guide</span>
      </div>
      <h4 className={styles.pillarTitle}>{pillar.title}</h4>
      {pillar.excerpt && <p className={styles.pillarExcerpt}>{pillar.excerpt}</p>}
      <Link href={`/insights/${pillar.slug}`} className={styles.pillarLink}>
        <span>Read Core Pillar Guide</span>
        <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
