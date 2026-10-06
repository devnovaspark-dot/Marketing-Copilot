import Link from 'next/link';
import Image from 'next/image';
import styles from './RelatedStoriesSidebar.module.css';

export interface RelatedStoryItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  date?: string;
}

interface RelatedStoriesSidebarProps {
  stories: RelatedStoryItem[];
  title?: string;
  viewAllLink?: string;
}

export default function RelatedStoriesSidebar({
  stories,
  title = 'Related Stories',
  viewAllLink = '/insights',
}: RelatedStoriesSidebarProps) {
  if (!stories || stories.length === 0) return null;

  return (
    <div className={styles.relatedCard} aria-label="Related Stories">
      <div className={styles.cardHeader}>
        <div className={styles.titleWrap}>
          <span className={styles.headerDot} />
          <h3 className={styles.headerTitle}>{title}</h3>
        </div>
        <Link href={viewAllLink} className={styles.viewAllLink}>
          <span>View All</span>
          <span className={styles.viewAllArrow}>→</span>
        </Link>
      </div>

      <div className={styles.storiesList}>
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/insights/${story.slug}`}
            className={styles.storyItem}
          >
            <div className={styles.thumbnailWrap}>
              <Image
                src={story.image}
                alt={story.title}
                width={76}
                height={76}
                className={styles.thumbnailImg}
              />
            </div>

            <div className={styles.storyContent}>
              <span className={styles.storyCategory}>{story.category}</span>
              <h4 className={styles.storyTitle}>{story.title}</h4>
              <div className={styles.storyMeta}>
                <span className={styles.readTimeIcon}>⏱</span>
                <span>{story.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
