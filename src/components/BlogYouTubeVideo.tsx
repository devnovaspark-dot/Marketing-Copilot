'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BlogYouTubeVideo.module.css';

export interface BlogYouTubeVideoProps {
  value?: {
    _type?: string;
    url?: string;
    title?: string;
    caption?: string;
  };
  url?: string;
  title?: string;
  caption?: string;
}

/**
 * Robust YouTube video ID extractor supporting:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - Raw 11-char ID
 */
export function extractYouTubeId(rawUrl?: string): string | null {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  const match = trimmed.match(
    /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i
  );
  if (match && match[1]) {
    return match[1];
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

export default function BlogYouTubeVideo(props: BlogYouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const rawUrl = props.value?.url || props.url || '';
  const title = (props.value?.title || props.title || '').trim();
  const caption = (props.value?.caption || props.caption || '').trim();

  const videoId = extractYouTubeId(rawUrl);
  if (!videoId) {
    return null;
  }

  const primaryPoster = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackPoster = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const currentPoster = thumbnailUrl || primaryPoster;

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  return (
    <figure className={styles.videoCardWrapper}>
      {/* Header Bar */}
      <div className={styles.headerBar}>
        <div className={styles.headerLeft}>
          <span className={styles.ytBadge}>
            <svg
              className={styles.ytBadgeIcon}
              viewBox="0 0 24 24"
              fill="#FF0000"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube Video
          </span>
          {title && <h4 className={styles.videoTitle}>{title}</h4>}
        </div>

        <div className={styles.headerRight}>
          <span className={styles.statusPill}>
            <span className={styles.statusDot} />
            <span>HD 1080p</span>
          </span>
        </div>
      </div>

      {/* 16:9 Video Player Stage */}
      <div className={styles.stageWrapper}>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          />
        ) : (
          <button
            type="button"
            className={styles.posterContainer}
            onClick={handleStartPlay}
            aria-label={`Play YouTube video: ${title || 'Watch video'}`}
          >
            {/* YouTube Poster Image */}
            <img
              src={currentPoster}
              alt={title || 'YouTube video preview'}
              loading="lazy"
              className={styles.posterImage}
              onError={() => {
                if (currentPoster !== fallbackPoster) {
                  setThumbnailUrl(fallbackPoster);
                }
              }}
            />

            {/* Dark Vignette Overlay */}
            <div className={styles.vignetteOverlay} />

            {/* Authentic Red YouTube Play Button Centered on Video */}
            <div className={styles.playButtonContainer}>
              <div className={styles.ytPlayButton}>
                <div className={styles.playTriangle} />
              </div>
              <span className={styles.playLabel}>
                <span>Click to Play</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                </svg>
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Optional Caption / Footnote Bar */}
      {(caption || rawUrl) && (
        <figcaption className={styles.captionBar}>
          {caption ? (
            <div className={styles.captionContent}>
              <span className={styles.captionDot} aria-hidden="true" />
              <span>{caption}</span>
            </div>
          ) : (
            <span />
          )}

          <Link
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytDirectLink}
          >
            <span>Watch on YouTube</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </figcaption>
      )}
    </figure>
  );
}

