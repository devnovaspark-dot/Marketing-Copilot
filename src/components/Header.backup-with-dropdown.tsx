'use client';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import styles from './Header.module.css';

export interface HeaderServiceItem {
  href: string;
  label: string;
  shortLabel: string;
  icon: string;
  desc: string;
  badge?: string;
}

export interface HeaderServiceCluster {
  category: string;
  tag: string;
  services: HeaderServiceItem[];
}

// Feature flag: set to true when individual service landing pages are finalized and ready to launch
const ENABLE_SERVICES_DROPDOWN = false;

const serviceClusters: HeaderServiceCluster[] = [
  {
    category: 'Search & Performance',
    tag: 'DEMAND CAPTURE',
    services: [
      { href: '/services/seo', label: 'SEO Services', shortLabel: 'SEO', icon: '⚡', desc: 'Rank #1 on Google in Bhubaneswar', badge: 'High Intent' },
      { href: '/services/google-ads', label: 'Google Ads / PPC', shortLabel: 'Google Ads', icon: '🎯', desc: 'High-ROI paid search campaigns', badge: 'Top ROAS' },
      { href: '/services/meta-ads', label: 'Meta Ads', shortLabel: 'Meta Ads', icon: '🚀', desc: 'Facebook, Instagram & WhatsApp ads', badge: 'CAPI Ready' },
      { href: '/services/performance-marketing', label: 'Performance Marketing', shortLabel: 'Performance', icon: '📈', desc: 'Revenue attribution & unit economics', badge: 'Full-Funnel' },
    ],
  },
  {
    category: 'Brand & Experience',
    tag: 'CONVERSION & CODE',
    services: [
      { href: '/services/web-development', label: 'Website Development', shortLabel: 'Web Platform', icon: '💻', desc: 'Sub-second speed Next.js websites', badge: 'Next.js 15' },
      { href: '/services/creative-branding', label: 'Creative & Branding', shortLabel: 'Creative Brand', icon: '🎨', desc: 'Distinct visual identities & guidelines', badge: 'Identity' },
      { href: '/services/social-media', label: 'Social Media Marketing', shortLabel: 'Social Media', icon: '📱', desc: 'Thumb-stopping Reels & community', badge: 'Reels' },
      { href: '/services/ai-automation', label: 'Content Marketing', shortLabel: 'Content Copy', icon: '✍️', desc: 'Authoritative content that converts', badge: 'Authority' },
    ],
  },
  {
    category: 'Commerce & Scale',
    tag: 'D2C & RETAIL',
    services: [
      { href: '/services/ecommerce-marketing', label: 'E-commerce Marketing', shortLabel: 'E-Commerce', icon: '🛍️', desc: 'Scale online store GMV & checkout', badge: 'D2C Scale' },
      { href: '/services/amazon-marketing', label: 'Amazon Marketing & PPC', shortLabel: 'Amazon PPC', icon: '📦', desc: 'Dominate Buy Box & Sponsored Ads', badge: 'Lower ACOS' },
    ],
  },
];

const services: HeaderServiceItem[] = serviceClusters.flatMap((c) => c.services);

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/industries', label: 'Industries' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navItemRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
      if (navItemRef.current && !navItemRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(true);
  }

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    dropdownTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo Lockup (Stacked) */}
        <Link href="/" className={styles.logo} aria-label="Marketing Copilot Homepage">
          <Image
            src="/images/marketing-copilot-brand.png"
            alt="Marketing Copilot — Digital Marketing Agency Bhubaneswar"
            width={200}
            height={68}
            priority
            style={{ width: 'auto', height: '32px' }}
            className={styles.logoImg}
          />
          <div className={styles.brandTaglineCol}>
            <span className={styles.brandPrimaryText}>Your Business, Our Strategies</span>
            <span className={styles.brandSubText}>
              <span className={styles.brandSparkle}>✦</span> Powered by NovaSpark
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {/* Home */}
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.engravedActive : ''}`}
          >
            Home
          </Link>

          {/* Services: Clean direct link when dropdown is paused; mega-menu when enabled */}
          {!ENABLE_SERVICES_DROPDOWN ? (
            <Link
              href="/services"
              className={`${styles.navLink} ${
                pathname.startsWith('/services') || pathname.toLowerCase().includes('digital-marketing-company-services')
                  ? styles.engravedActive
                  : ''
              }`}
            >
              Services
            </Link>
          ) : (
            <div
              ref={navItemRef}
              className={styles.navItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            <Link
              href="/services"
              className={`${styles.navLink} ${
                pathname.startsWith('/services') || pathname.toLowerCase().includes('digital-marketing-company-services')
                  ? styles.engravedActive
                  : ''
              }`}
              onClick={(e) => {
                if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                // When on a services page or clicking the toggle, toggle dropdown
                if (pathname.startsWith('/services')) {
                  e.preventDefault();
                  setServicesOpen((prev) => !prev);
                } else {
                  // On other pages, if user clicked directly on chevron or wants menu, toggle
                  setServicesOpen((prev) => !prev);
                }
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-label="Toggle Services menu or navigate to overview"
            >
              Services
              <span
                role="button"
                tabIndex={0}
                className={styles.chevronWrapper}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                  setServicesOpen((prev) => !prev);
                }}
                aria-label="Toggle services dropdown list"
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  style={{
                    marginLeft: 5,
                    transform: servicesOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              </span>
            </Link>

            <div
              className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ''}`}
              aria-hidden={!servicesOpen}
            >
              <div className={styles.dropdownCard}>
                <div className={styles.megaMenuContainer}>
                  {/* Left Area: Categorized Practice Clusters */}
                  <div className={styles.megaMenuClusters}>
                    {serviceClusters.map((cluster) => (
                      <div key={cluster.category} className={styles.clusterCol}>
                        <div className={styles.clusterHeader}>
                          <span className={styles.clusterCategory}>{cluster.category}</span>
                          <span className={styles.clusterTag}>{cluster.tag}</span>
                        </div>
                        <div className={styles.clusterList}>
                          {cluster.services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={styles.megaMenuItem}
                              onClick={() => {
                                if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                                setServicesOpen(false);
                              }}
                              tabIndex={servicesOpen ? 0 : -1}
                            >
                              <span className={styles.megaMenuIcon}>{s.icon}</span>
                              <div className={styles.megaMenuContent}>
                                <div className={styles.megaMenuTitleRow}>
                                  <span className={styles.megaMenuLabel}>{s.label}</span>
                                  {s.badge && <span className={styles.megaMenuBadge}>{s.badge}</span>}
                                </div>
                                <span className={styles.megaMenuDesc}>{s.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Area: Interactive Growth Spotlight Card */}
                  <div className={styles.megaMenuSpotlight}>
                    <div className={styles.spotlightCard}>
                      <div className={styles.spotlightTopRow}>
                        <span className={styles.spotlightPulseDot} />
                        <span className={styles.spotlightHqText}>Bhubaneswar HQ</span>
                        <span className={styles.spotlightRating}>★ 4.9/5</span>
                      </div>

                      {/* Sample Graphics Visual Frame */}
                      <div className={styles.spotlightGraphicBox}>
                        <Image
                          src="/images/ns_services_graphic.png"
                          alt="Bhubaneswar Digital Growth System Architecture"
                          width={240}
                          height={100}
                          className={styles.spotlightGraphicImg}
                          priority
                        />
                        <div className={styles.graphicOverlayGlow} />
                        <div className={styles.graphicBadge}>
                          <span className={styles.graphicBadgeDot} />
                          <span>GROWTH ENGINE</span>
                        </div>
                      </div>

                      <h4 className={styles.spotlightHeadline}>
                        Need a Tailored Growth Architecture?
                      </h4>
                      <p className={styles.spotlightSubtext}>
                        Get a free 30-min forensic audit of your Google rankings, Meta ROAS, and conversion funnel.
                      </p>

                      <Link
                        href="/contact"
                        className={styles.spotlightAuditBtn}
                        onClick={() => {
                          if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                          setServicesOpen(false);
                        }}
                        tabIndex={servicesOpen ? 0 : -1}
                      >
                        <span>Claim Free Growth Audit</span>
                        <span>→</span>
                      </Link>

                      <div className={styles.spotlightDivider} />

                      <a
                        href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20discuss%20a%20digital%20marketing%20growth%20strategy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.spotlightWhatsAppBtn}
                        tabIndex={servicesOpen ? 0 : -1}
                      >
                        <span className={styles.waOnlineDot} />
                        <span>WhatsApp a Strategist</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar Footer */}
                <div className={styles.dropdownFooter}>
                  <Link
                    href="/services"
                    className={styles.dropdownAll}
                    onClick={() => {
                      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                      setServicesOpen(false);
                    }}
                    tabIndex={servicesOpen ? 0 : -1}
                  >
                    <span>Explore all 10 specialized growth practices</span>
                    <span>→</span>
                  </Link>
                  <div className={styles.dropdownGuarantee}>
                    <span className={styles.guaranteeDot}>✓</span>
                    <span>100% Attribution &amp; Zero Black-Hat Assurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

          {/* About Us */}
          <Link
            href="/about"
            className={`${styles.navLink} ${pathname.startsWith('/about') || pathname.toLowerCase().includes('about-digital-marketing-company') ? styles.engravedActive : ''}`}
          >
            About Us
          </Link>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className={`${styles.navLink} ${pathname.startsWith('/portfolio') || pathname.toLowerCase().includes('digital-marketing-portfolio') ? styles.engravedActive : ''}`}
          >
            Portfolio
          </Link>

          {/* Industries */}
          <Link
            href="/industries"
            className={`${styles.navLink} ${pathname.startsWith('/industries') || pathname.toLowerCase().includes('digital-marketing-services-industries') ? styles.engravedActive : ''}`}
          >
            Industries
          </Link>

          {/* FAQ */}
          <Link
            href="/faq"
            className={`${styles.navLink} ${pathname === '/faq' || pathname.toLowerCase().includes('faq-digital-marketing') ? styles.engravedActive : ''}`}
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button with revolving border beam (Strictly hidden on mobile) */}
        <BeamButton
          href="/contact"
          label="Let's Talk"
          size="md"
          wrapperClassName={styles.borderBeamWrapper}
        />

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Cute & Minimal Mobile Side Card Drawer (Rendered at Body level to escape navbar bounding box) */}
      {menuOpen && mounted && createPortal(
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.mobileMenu} role="dialog" aria-modal="true">
            {/* Clean Card Header */}
            <div className={styles.mobileCardHeader}>
              <span className={styles.mobileMenuBadge}>NAVIGATION</span>
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation card"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className={styles.mobileNav}>
              {mobileLinks.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                // Services Item with Direct Page Link + Accordion Toggle (only when enabled)
                if (ENABLE_SERVICES_DROPDOWN && item.href === '/services') {
                  return (
                    <div key="services-accordion" className={styles.mobileAccordionWrapper}>
                      <div className={`${styles.mobileServicesRow} ${isActive ? styles.mobileLinkActive : ''}`}>
                        <Link
                          href="/services"
                          className={styles.mobileServicesDirectLink}
                          onClick={(e) => {
                            if (pathname.startsWith('/services')) {
                              e.preventDefault();
                              setMobileServicesOpen((prev) => !prev);
                            } else {
                              setMenuOpen(false);
                            }
                          }}
                        >
                          <span className={styles.mobileLinkLabel}>Services</span>
                        </Link>
                        <button
                          type="button"
                          className={styles.mobileServicesToggleBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileServicesOpen(!mobileServicesOpen);
                          }}
                          aria-label={mobileServicesOpen ? 'Collapse services list' : 'Expand services list'}
                          aria-expanded={mobileServicesOpen}
                        >
                          <span className={styles.servicesCountPill}>10 Practices</span>
                          <span className={`${styles.mobileChevronIcon} ${mobileServicesOpen ? styles.mobileChevronRotated : ''}`}>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      </div>

                      {/* Smooth 2-Column Compact Services Grid */}
                      <div className={`${styles.mobileServicesSubmenuWrapper} ${mobileServicesOpen ? styles.mobileServicesSubmenuOpen : ''}`}>
                        <div className={styles.mobileServicesSubmenuInner}>
                          <div className={styles.mobileServicesSubmenu}>
                            <div className={styles.mobileServicesGrid}>
                              {services.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  className={`${styles.mobileServiceChip} ${pathname === s.href ? styles.mobileServiceChipActive : ''}`}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  <span className={styles.chipIcon}>{s.icon}</span>
                                  <span className={styles.chipLabel}>{s.shortLabel}</span>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/services"
                              className={styles.mobileAllServicesBtn}
                              onClick={() => setMenuOpen(false)}
                            >
                              <span>Explore all 10 services</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Standard Nav Links
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.mobileLinkLabel}>{item.label}</span>
                    <span className={styles.mobileLinkArrow}>→</span>
                  </Link>
                );
              })}
            </nav>

            {/* Cute Minimal CTA & Contact strip */}
            <div className={styles.mobileCTA}>
              <BeamButton
                href="/contact"
                label="Let's Talk — Free Audit"
                size="sm"
                fullWidth
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
