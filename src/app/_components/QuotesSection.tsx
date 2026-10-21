'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './QuotesSection.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Marketing Copilot didn't just manage our ads — they completely re-engineered our customer acquisition architecture. Scaling from ₹5L/month to over ₹2Cr+ monthly revenue in under six months was something we didn't think was possible in our category.",
    author: 'Sameer Meher',
    role: 'Co-Founder & CEO',
    company: 'UrbanDrape E-Commerce',
    stat: '+142% Net Revenue',
    subStat: '4.8X Blended ROAS',
    avatarInitials: 'SM',
    color: '#0B2093',
    stars: 5,
    tag: 'E-Commerce Scale'
  },
  {
    id: 2,
    quote: "Finding an agency that truly understands high-ticket buyer psychology and technical SEO is rare. Marketing Copilot positioned our luxury properties at #1 on Google and generated 90+ high-net-worth inquiries every single month.",
    author: 'Alok Mohanty',
    role: 'Managing Director',
    company: 'Utkal Royal Residences',
    stat: '#1 on Google',
    subStat: '+187% Organic Inquiries',
    avatarInitials: 'AM',
    color: '#0D007F',
    stars: 5,
    tag: 'Real Estate Growth'
  },
  {
    id: 3,
    quote: "Their creative team is unstoppable. They helped us build an engaged 200,000+ organic Instagram community from scratch. Our signature seasonal collection sold out within 72 hours solely from their content hooks.",
    author: 'Tanvi Agarwal',
    role: 'Founder & Creative Head',
    company: 'Velour D2C Fashion',
    stat: '200K+ Community',
    subStat: '+320% Social Reach',
    avatarInitials: 'TA',
    color: '#F59E0B',
    stars: 5,
    tag: 'D2C Brand Velocity'
  },
  {
    id: 4,
    quote: "In the luxury hospitality space, timing and hype are everything. Marketing Copilot's local SEO and influencer drop campaigns made our dining locations the most sought-after weekend reservation spots across the state.",
    author: 'Chef Debashish Roy',
    role: 'Chief Culinary Officer',
    company: 'Noir Dining Experience',
    stat: '+400% Footfall',
    subStat: '4.9★ Google Rating',
    avatarInitials: 'DR',
    color: '#10B981',
    stars: 5,
    tag: 'Hospitality & Dining'
  },
];

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Smooth Auto-Slide every 5.5 seconds (only when visible, pauses on interaction)
  useEffect(() => {
    if (!isVisible || isPaused) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, isPaused, handleNext]);

  // Touch Swipe Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 40) {
        handleNext();
      } else if (distance < -40) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 5000);
  };

  const active = testimonials[current];

  return (
    <section 
      ref={sectionRef}
      className={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.bgGlow} />
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 10px' }}>
            <span className="eyebrow-dot" />
            Client Stories &amp; Testimonials
          </div>
          <h3 className={`display-lg ${styles.sectionHeading}`}>
            Chosen by Brands With{' '}
            <span className="accent-gradient">Big Ambitions</span>
          </h3>
          <p className={`body-lg ${styles.sectionSub}`}>
            Real stories from founders, directors, and marketing leaders who trusted Marketing Copilot to turn digital marketing into stronger visibility, better leads, and measurable results.
          </p>
        </ScrollReveal>

        <div className={styles.carouselContainer}>
          <ScrollReveal delay={100}>
            <div 
              className={styles.quoteCard}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Top Row: Stars + Category Tag */}
              <div className={styles.cardHeader}>
                <div className={styles.starsRow}>
                  <div className={styles.stars}>
                    {[...Array(active.stars)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  <span className={styles.verifiedBadge}>
                    <span className={styles.verifiedDot} />
                    Verified Partner
                  </span>
                </div>
                <span className={styles.categoryTag} style={{ color: active.color, borderColor: `${active.color}35`, background: `${active.color}0D` }}>
                  {active.tag}
                </span>
              </div>

              {/* Fixed Height Quote Body (Zero CLS layout shift) */}
              <div className={styles.quoteViewport}>
                <div className={styles.contentBody} key={active.id}>
                  <div className={styles.quoteTextWrap}>
                    <p className={styles.quoteText}>
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author & Verified Metrics */}
                  <div className={styles.footerRow}>
                    <div className={styles.authorInfo}>
                      <div 
                        className={styles.avatar} 
                        style={{ background: `linear-gradient(135deg, ${active.color} 0%, #0F172A 100%)` }}
                      >
                        {active.avatarInitials}
                      </div>
                      <div className={styles.authorMeta}>
                        <h4 className={styles.authorName}>{active.author}</h4>
                        <p className={styles.authorRole}>
                          {active.role} • <span className={styles.companyName}>{active.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className={styles.metricsBadge} style={{ borderColor: `${active.color}30` }}>
                      <div className={styles.statPrimary} style={{ color: active.color }}>
                        {active.stat}
                      </div>
                      <div className={styles.statSecondary}>{active.subStat}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Pagination & Navigation Controls (Safe from Floating WhatsApp Icon) */}
              <div className={styles.controlsRow}>
                <div className={styles.dots}>
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      className={`${styles.navDot} ${idx === current ? styles.activeDot : ''}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to review ${idx + 1}`}
                      style={{ background: idx === current ? active.color : undefined }}
                    />
                  ))}
                </div>

                <div className={styles.navButtons}>
                  <button 
                    onClick={handlePrev} 
                    className={styles.navBtn}
                    aria-label="Previous quote"
                  >
                    ←
                  </button>
                  <span className={styles.counter}>0{current + 1} / 0{testimonials.length}</span>
                  <button 
                    onClick={handleNext} 
                    className={styles.navBtn}
                    aria-label="Next quote"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Center Bottom Runway CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <BeamButton href="/contact" label="Join Our Growing Roster of Success Stories" size="md" />
        </div>
      </div>
    </section>
  );
}
