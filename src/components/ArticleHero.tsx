'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import { ImageZoomModal } from '@/components/BlogImageZoom';
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
  const [isBannerZoomOpen, setIsBannerZoomOpen] = useState(false);
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
      <div className={styles.heroAmbientGlow} />
      <div className={styles.heroAmbientAmber} />
      <div className={`container ${styles.inner}`}>
        {/* Left Column: Metadata & Title */}
        <div className={styles.leftCol}>
          {/* Unified Breadcrumbs & Category Bar - Category is NOT duplicated */}
          <div className={styles.topNavigation}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSeparator}>›</span>
              <Link href="/blog" className={styles.breadcrumbLink}>
                Blog
              </Link>
              <span className={styles.breadcrumbSeparator}>›</span>
            </nav>

            <div className={styles.categoryPill}>
              <span className={styles.pillDot} />
              <span>{category}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className={styles.title}>{title}</h1>

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
                <div className={styles.authorNameWrap}>
                  <span className={styles.authorName}>By {author}</span>
                  <a
                    href="https://www.linkedin.com/in/shankarsan-nayak-74191a1b1/?isSelfProfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.authorLinkedinIcon}
                    aria-label={`${author} on LinkedIn`}
                    title={`Connect with ${author} on LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                    </svg>
                  </a>
                  <span className={styles.verifiedIcon} title="Verified Author">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0B2093">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                </div>
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
          <div
            className={styles.bannerWrap}
            onClick={() => setIsBannerZoomOpen(true)}
            role="button"
            tabIndex={0}
            style={{ cursor: 'zoom-in' }}
            title="Click to zoom image in full resolution"
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsBannerZoomOpen(true);
            }}
          >
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              priority
              className={styles.bannerImage}
              sizes="(max-width: 1024px) 100vw, 580px"
            />
            {/* Editorial Guide Badge Overlay */}
            <div className={styles.bannerBadge}>
              <span className={styles.bannerBadgeDot} />
              <span>Verified Strategic Guide • Click to Zoom</span>
            </div>
          </div>

          <ImageZoomModal
            isOpen={isBannerZoomOpen}
            onClose={() => setIsBannerZoomOpen(false)}
            src={image}
            alt={imageAlt || title}
            caption={title}
          />
        </div>
      </div>
    </section>
  );
}
