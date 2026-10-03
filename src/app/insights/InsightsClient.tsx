'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/app/_components/CTASection';
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
  featured?: boolean;
}

const cats = ['All', 'Marketing', 'SEO', 'Social', 'Branding', 'Technology'];

export default function InsightsClient({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);
  const featured = articles.find((a) => a.featured) || articles[0];

  return (
    <>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Growth Intelligence & Research
              </div>
              <h1 className={`display-xl ${styles.title}`}>
                Ideas worth<br />
                <span className="accent-gradient">thinking about.</span>
              </h1>
              <p className={`body-lg ${styles.sub}`}>
                Strategic playbooks, campaign breakdowns, and practical research from our senior operators.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="container">
          {/* Featured Article Card */}
          {active === 'All' && featured && (
            <ScrollReveal>
              <Link href={`/insights/${featured.slug}`} className={styles.featuredCard}>
                <div className={styles.featuredVisual}>
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className={styles.featuredImg}
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                  <div className={styles.featuredOverlay} />
                  <span className={styles.featuredTag}>Featured Article</span>
                </div>
                <div className={styles.featuredInfo}>
                  <div className={styles.metaTop}>
                    <span className={styles.categoryChip}>{featured.category}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.readTime}>{featured.readTime}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

                  <div className={styles.authorRow}>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{featured.author}</span>
                      <span className={styles.authorRole}>{featured.authorRole}</span>
                    </div>
                    <span className={styles.readMoreBtn}>
                      Read Article <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Filter Pills */}
          <div className={styles.filterBar}>
            {cats.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className={styles.grid}>
            {filtered.map((article, idx) => (
              <ScrollReveal key={article.slug} delay={idx * 60}>
                <Link href={`/insights/${article.slug}`} className={styles.articleCard}>
                  <div className={styles.cardVisual}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className={styles.cardImg}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className={styles.cardCategory}>{article.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span>{article.date}</span>
                      <span className={styles.dot}>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{article.title}</h3>
                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.cardAuthor}>{article.author}</span>
                      <span className={styles.cardArrow}>→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
