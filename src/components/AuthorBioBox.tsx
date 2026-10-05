import Image from 'next/image';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import styles from './AuthorBioBox.module.css';

interface AuthorBioBoxProps {
  name: string;
  role?: string;
  image?: string;
  bio?: string;
}

export default function AuthorBioBox({
  name,
  role,
  image,
  bio,
}: AuthorBioBoxProps) {
  const initial = name ? name.charAt(0).toUpperCase() : 'M';

  const resolvedRole =
    role && role.trim().toLowerCase() !== name.trim().toLowerCase()
      ? role
      : 'Senior Growth Strategist & Digital Operator';

  const isDuplicateOrShortBio =
    !bio ||
    bio.trim().toLowerCase() === name.trim().toLowerCase() ||
    bio.trim().length < 15;

  const resolvedBio = isDuplicateOrShortBio
    ? 'Senior digital growth strategist and campaign operator at Marketing Copilot. Specializing in high-ROI search optimization, performance customer acquisition, and technical conversion engines for ambitious Indian businesses.'
    : bio;

  return (
    <div className={styles.authorCard} aria-label="About the Author">
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          {image ? (
            <Image
              src={image}
              alt={name}
              width={68}
              height={68}
              className={styles.avatarImg}
            />
          ) : (
            <div className={styles.avatarFallback}>{initial}</div>
          )}
        </div>

        <div className={styles.authorMeta}>
          <span className={styles.label}>About the Author</span>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.role}>{resolvedRole}</span>
        </div>
      </div>

      <p className={styles.bio}>{resolvedBio}</p>

      <div className={styles.footerActions}>
        <div className={styles.socialList}>
          <a
            href="https://www.linkedin.com/company/nova-spark-digital-marketing-agency/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label={`${name} on LinkedIn`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
          </a>
        </div>

        <BeamButton href="/contact" label="Discuss Strategy" size="sm" />
      </div>
    </div>
  );
}
