import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
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
      <div style={{ marginTop: '0.5rem' }}>
        <BeamButton href={`/insights/${pillar.slug}`} label="Read Core Pillar Guide" size="sm" />
      </div>
    </aside>
  );
}
