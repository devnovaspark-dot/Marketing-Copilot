'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
import BlogSidebarCta from '@/components/BlogSidebarCta';
import BeamButton from '@/components/BeamButton';
import styles from './page.module.css';

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  featured?: boolean;
}

export default function InsightsClient({ articles = [] }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'latest' | 'oldest' | 'title'>('latest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<Set<string>>(new Set());

  const sortRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dynamically extract real categories from published Sanity articles
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category && a.category.trim()) {
        set.add(a.category.trim());
      }
    });
    return ['All Stories', ...Array.from(set)];
  }, [articles]);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    const list = articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All Stories' ||
        article.category.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (sortOption === 'oldest') {
      return [...list].reverse();
    }
    if (sortOption === 'title') {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [articles, activeCategory, searchQuery, sortOption]);

  // Featured article is the first one in the filtered list
  const featuredArticle = filteredArticles[0];
  const secondaryArticles = filteredArticles.slice(1);

  const toggleBookmark = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4500);
    }
  };

  return (
    <>
      <div className={styles.page}>
        {/* ================================================================= */}
        {/* 1. Hero Section with Warm Aesthetic Photography & Grand Stature   */}
        {/* ================================================================= */}
        <section className={styles.hero}>
          {/* Background Image: sunlit editorial study with vase & botanicals */}
          <div className={styles.heroBgMedia}>
            <Image
              src="/images/journal_hero_editorial_warm.jpg"
              alt="Marketing Copilot Journal & Growth Strategy Studio"
              fill
              priority
              className={styles.heroBgImg}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className={styles.heroBgGradient} />
          </div>

          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>THE MARKETING COPILOT JOURNAL</span>
                <span className={styles.heroEyebrowBadge}>EST. 2024</span>
              </div>

              <h1 className={styles.heroTitle}>
                Stories worth<br />
                <span className={styles.heroTitleAccent}>thinking about.</span>
              </h1>

              <p className={styles.heroSub}>
                Ideas, inspiration, and expert playbooks to help you create growth strategies that stay in markets forever.
              </p>

              <div className={styles.heroEditorialMeta}>
                <span className={styles.heroMetaItem}>
                  <span className={styles.heroMetaIcon}>✦</span> Field-Tested Playbooks
                </span>
                <span className={styles.heroMetaDivider}>•</span>
                <span className={styles.heroMetaItem}>
                  Zero Fluff
                </span>
                <span className={styles.heroMetaDivider}>•</span>
                <span className={styles.heroMetaItem}>
                  Senior Strategist Dispatches
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. Filter Bar with Working Dropdown & Skeuomorphic Controls       */}
        {/* ================================================================= */}
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.categoryPills}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`${styles.categoryPill} ${isActive ? styles.categoryPillActive : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Interactive Sort Dropdown with working open/close menu */}
            <div className={styles.sortWrap} ref={sortRef}>
              <button
                type="button"
                className={`${styles.sortButton} ${isSortOpen ? styles.sortButtonActive : ''}`}
                onClick={() => setIsSortOpen((prev) => !prev)}
                aria-expanded={isSortOpen}
                aria-haspopup="listbox"
                aria-label="Sort stories"
              >
                <svg
                  className={styles.sortIcon}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="17" y1="12" x2="7" y2="12" />
                  <line x1="13" y1="18" x2="11" y2="18" />
                </svg>
                <span>
                  {sortOption === 'latest'
                    ? 'Latest'
                    : sortOption === 'oldest'
                    ? 'Oldest'
                    : 'Title A-Z'}
                </span>
                <span className={`${styles.sortChevron} ${isSortOpen ? styles.sortChevronRotated : ''}`}>
                  ▾
                </span>
              </button>

              {isSortOpen && (
                <div className={styles.sortDropdown} role="listbox">
                  <button
                    type="button"
                    className={`${styles.sortOption} ${sortOption === 'latest' ? styles.sortOptionActive : ''}`}
                    onClick={() => {
                      setSortOption('latest');
                      setIsSortOpen(false);
                    }}
                    role="option"
                    aria-selected={sortOption === 'latest'}
                  >
                    <span>Latest Stories</span>
                    {sortOption === 'latest' && <span className={styles.sortCheck}>✓</span>}
                  </button>
                  <button
                    type="button"
                    className={`${styles.sortOption} ${sortOption === 'oldest' ? styles.sortOptionActive : ''}`}
                    onClick={() => {
                      setSortOption('oldest');
                      setIsSortOpen(false);
                    }}
                    role="option"
                    aria-selected={sortOption === 'oldest'}
                  >
                    <span>Oldest Stories</span>
                    {sortOption === 'oldest' && <span className={styles.sortCheck}>✓</span>}
                  </button>
                  <button
                    type="button"
                    className={`${styles.sortOption} ${sortOption === 'title' ? styles.sortOptionActive : ''}`}
                    onClick={() => {
                      setSortOption('title');
                      setIsSortOpen(false);
                    }}
                    role="option"
                    aria-selected={sortOption === 'title'}
                  >
                    <span>Title (A — Z)</span>
                    {sortOption === 'title' && <span className={styles.sortCheck}>✓</span>}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* =============================================================== */}
          {/* 3. Main 2-Column Layout Grid (Skeuomorphic & Polished)          */}
          {/* =============================================================== */}
          <div className={styles.layoutGrid}>
            {/* Left Content Column (Stories) */}
            <main className={styles.mainCol}>
              {filteredArticles.length === 0 ? (
                /* Skeuomorphic Empty State */
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>✦</div>
                  <h3 className={styles.emptyTitle}>No stories found</h3>
                  <p className={styles.emptyText}>
                    {articles.length === 0
                      ? 'Our editorial team is preparing deep-dive growth research. Please check back shortly!'
                      : `We could not find any stories matching "${searchQuery}". Try another keyword or clear your filter.`}
                  </p>
                  {articles.length > 0 && (
                    <BeamButton
                      onClick={() => {
                        setActiveCategory('All Stories');
                        setSearchQuery('');
                      }}
                      label="View All Stories"
                      size="sm"
                    />
                  )}
                </div>
              ) : (
                <>
                  {/* ======================================================= */}
                  {/* Featured Story Card (Skeuomorphic Masterpiece)          */}
                  {/* ======================================================= */}
                  {featuredArticle && (
                    <ScrollReveal>
                      <article className={styles.featuredCard}>
                        <Link
                          href={`/insights/${featuredArticle.slug}`}
                          className={styles.featuredVisual}
                          aria-label={featuredArticle.title}
                        >
                          <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            priority
                            className={styles.featuredImg}
                            sizes="(max-width: 768px) 100vw, 48vw"
                          />
                        </Link>

                        <div className={styles.featuredBody}>
                          <div className={styles.featuredCategory}>
                            {featuredArticle.category}
                          </div>

                          <h2 className={styles.featuredTitle}>
                            <Link href={`/insights/${featuredArticle.slug}`} className={styles.titleLink}>
                              {featuredArticle.title}
                            </Link>
                          </h2>

                          <div className={styles.featuredFooter}>
                            <div className={styles.authorMeta}>
                              <div className={styles.authorAvatar}>
                                {featuredArticle.authorImage ? (
                                  <Image
                                    src={featuredArticle.authorImage}
                                    alt={featuredArticle.author}
                                    width={38}
                                    height={38}
                                    className={styles.authorAvatarImg}
                                  />
                                ) : (
                                  featuredArticle.author.charAt(0).toUpperCase()
                                )}
                              </div>
                              <div className={styles.authorInfo}>
                                <span className={styles.authorName}>
                                  {featuredArticle.author.toUpperCase()}
                                </span>
                                <span className={styles.publishMeta}>
                                  {featuredArticle.date} • {featuredArticle.readTime}
                                </span>
                              </div>
                            </div>

                            {/* Same BeamButton animation as navbar */}
                            <BeamButton
                              href={`/insights/${featuredArticle.slug}`}
                              label="Read More"
                              size="sm"
                            />
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  )}

                  {/* ======================================================= */}
                  {/* Secondary 3-Column Stories Grid (When more articles exist)*/}
                  {/* ======================================================= */}
                  {secondaryArticles.length > 0 && (
                    <div className={styles.storiesSubGrid}>
                      {secondaryArticles.map((article, idx) => {
                        const isBookmarked = bookmarkedSlugs.has(article.slug);
                        return (
                          <ScrollReveal key={article.slug} delay={idx * 60}>
                            <article className={styles.storyCard}>
                              <Link
                                href={`/insights/${article.slug}`}
                                className={styles.storyVisual}
                                aria-label={article.title}
                              >
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className={styles.storyImg}
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </Link>

                              <div className={styles.storyBody}>
                                <div className={styles.storyCategory}>
                                  {article.category}
                                </div>

                                <h3 className={styles.storyTitle}>
                                  <Link href={`/insights/${article.slug}`} className={styles.titleLink}>
                                    {article.title}
                                  </Link>
                                </h3>

                                <p className={styles.storyExcerpt}>
                                  {article.excerpt}
                                </p>

                                <div className={styles.storyFooter}>
                                  <div className={styles.authorMetaCompact}>
                                    <div className={styles.authorAvatarSm}>
                                      {article.authorImage ? (
                                        <Image
                                          src={article.authorImage}
                                          alt={article.author}
                                          width={30}
                                          height={30}
                                          className={styles.authorAvatarImg}
                                        />
                                      ) : (
                                        article.author.charAt(0).toUpperCase()
                                      )}
                                    </div>
                                    <div className={styles.authorInfoCompact}>
                                      <span className={styles.authorNameCompact}>
                                        {article.author.toUpperCase()}
                                      </span>
                                      <span className={styles.publishMetaCompact}>
                                        {article.date} • {article.readTime}
                                      </span>
                                    </div>
                                  </div>

                                  <div className={styles.storyCardActions}>
                                    <button
                                      type="button"
                                      className={`${styles.bookmarkBtn} ${
                                        isBookmarked ? styles.bookmarkBtnActive : ''
                                      }`}
                                      onClick={(e) => toggleBookmark(article.slug, e)}
                                      aria-label="Save story"
                                      title={isBookmarked ? 'Bookmarked' : 'Bookmark story'}
                                    >
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill={isBookmarked ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                      </svg>
                                    </button>
                                    <BeamButton
                                      href={`/insights/${article.slug}`}
                                      label="Read Story"
                                      size="sm"
                                    />
                                  </div>
                                </div>
                              </div>
                            </article>
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  )}

                  {/* Clean Skeuomorphic Editorial Notice (When only 1 article exists) */}
                  {filteredArticles.length === 1 && (
                    <div className={styles.editorialNotice}>
                      <div className={styles.editorialNoticeTag}>✦ Editorial Dispatch</div>
                      <h3 className={styles.editorialNoticeTitle}>
                        More Research &amp; Growth Playbooks in Production
                      </h3>
                      <p className={styles.editorialNoticeText}>
                        Our senior growth operators in Bhubaneswar are currently compiling field benchmarks across Local 3-Pack SEO, Meta Ad creative velocity, and full-funnel CRO. Verified field notes and case studies are published weekly.
                      </p>
                    </div>
                  )}
                </>
              )}
            </main>

            {/* ============================================================= */}
            {/* Right Sidebar Column (Skeuomorphic & Matching Reference)     */}
            {/* ============================================================= */}
            <aside className={styles.sidebarCol}>
              {/* 1. Pill Search Box at top of sidebar */}
              <div className={styles.sidebarSearchCard}>
                <div className={styles.searchWrap}>
                  <svg
                    className={styles.searchIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stories...."
                    className={styles.searchInput}
                    aria-label="Search stories"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className={styles.clearSearchBtn}
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Categories Card */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarCardTitle}>Categories</h4>
                <div className={styles.categoriesList}>
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`${styles.categoryRowBtn} ${
                        activeCategory === cat ? styles.categoryRowBtnActive : ''
                      }`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      <span className={styles.categoryPinIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="10" r="3" />
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        </svg>
                      </span>
                      <span className={styles.categoryRowName}>{cat}</span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className={styles.viewAllCategoriesLink}
                  onClick={() => {
                    setActiveCategory('All Stories');
                    setSearchQuery('');
                  }}
                >
                  <span>View All Categories</span>
                  <span>→</span>
                </button>
              </div>

              {/* 3. Stay Inspired Every Week (Newsletter Card) */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarCardTitle}>Stay inspired every week</h4>
                <p className={styles.newsletterSub}>
                  Get the latest stories, tips &amp; ideas straight to your inbox.
                </p>

                {subscribed ? (
                  <div className={styles.subscribedMessage}>
                    ✓ Subscribed! Welcome to the Journal.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={styles.newsletterInput}
                      aria-label="Enter your email"
                    />
                    {/* BeamButton matching navbar */}
                    <BeamButton
                      type="submit"
                      label="Subscribe"
                      size="md"
                      fullWidth
                    />
                  </form>
                )}
              </div>

              {/* 4. Consultation Action Card */}
              <BlogSidebarCta />
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
