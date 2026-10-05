'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import styles from './ArticleHero.module.css';

interface ArticleHeroProps {
  title: string;
  category: string;
  excerpt?: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  authorImage?: string;
}

export default function ArticleHero({
  title,
  category,
  excerpt,
  author,
  date,
  readTime,
  image,
  imageAlt,
  authorImage,
}: ArticleHeroProps) {
  const [copied, setCopied] = useState(false);
  const authorInitial = author ? author.charAt(0).toUpperCase() : 'M';

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({
            title,
            text: excerpt || title,
            url,
          });
        } catch {
          // Fallback to clipboard
          copyToClipboard(url);
        }
      } else {
        copyToClipboard(url);
      }
    }
  };

  const copyToClipboard = (url: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroAmbientAmber} />
      <div className={`container ${styles.inner}`}>
        {/* Left Column: Metadata & Title */}
        <div className={styles.leftCol}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/insights" className={styles.breadcrumbLink}>
              Blog
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{category}</span>
          </nav>

          {/* Category Pill */}
          <div className={styles.categoryPill}>
            <span className={styles.pillDot} />
            <span>{category}</span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>{title}</h1>

          {/* Excerpt */}
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

          {/* Author Bar & Share */}
          <div className={styles.metaRow}>
            <div className={styles.authorBlock}>
              <div className={styles.avatar}>
                {authorImage ? (
                  <Image
                    src={authorImage}
                    alt={author}
                    width={46}
                    height={46}
                    className={styles.avatarImg}
                  />
                ) : (
                  <div className={styles.avatarInitials}>{authorInitial}</div>
                )}
              </div>
              <div className={styles.authorText}>
                <span className={styles.authorName}>By {author}</span>
                <span className={styles.dateReadTime}>
                  {date} • {readTime}
                </span>
              </div>
            </div>

            <BeamButton
              type="button"
              onClick={handleShare}
              size="sm"
              variant="outline"
              arrow={false}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              }
              label={copied ? 'Copied Link!' : 'Share Article'}
            />
          </div>
        </div>

        {/* Right Column: Hero Banner Image */}
        <div className={styles.rightCol}>
          <div className={styles.bannerWrap}>
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              priority
              className={styles.bannerImage}
              sizes="(max-width: 1024px) 100vw, 580px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
