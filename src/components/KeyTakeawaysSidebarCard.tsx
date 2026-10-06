import styles from './KeyTakeawaysSidebarCard.module.css';

interface KeyTakeawaysSidebarCardProps {
  takeaways: string[];
  title?: string;
}

export default function KeyTakeawaysSidebarCard({
  takeaways,
  title = 'Key Takeaways',
}: KeyTakeawaysSidebarCardProps) {
  if (!takeaways || takeaways.length === 0) return null;

  const validTakeaways = takeaways
    .filter((item) => typeof item === 'string' && item.trim().length > 0)
    .map((item) => item.replace(/^\d+[\.\)]\s*/, '').trim());

  if (validTakeaways.length === 0) return null;

  return (
    <div className={styles.takeawaysCard} aria-label="Key Takeaways">
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap} aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <h3 className={styles.headerTitle}>{title}</h3>
      </div>

      <ul className={styles.takeawaysList}>
        {validTakeaways.map((item, idx) => (
          <li key={idx} className={styles.takeawayItem}>
            <span className={styles.bulletCheck} aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className={styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
