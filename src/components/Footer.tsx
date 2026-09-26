'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact Us', href: '/contact' },
  ];

  // Point to main /services overview while individual sub-pages are finalized for Phase 2
  const ourServices = [
    { label: 'SEO & Search', href: '/services' },
    { label: 'Google & Meta Ads', href: '/services' },
    { label: 'Social Media', href: '/services' },
    { label: 'Creative & Branding', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'AI Automation', href: '/services' },
  ];

  return (
    <footer className={styles.footer} id="footer">
      {/* Ambient Lighting & Atmosphere */}
      <div className={styles.ambientTopGlow} />
      <div className={styles.ambientTopLine} />
      <div className={styles.ambientTopBeam} />
      <div className={styles.ambientGlowGold} />
      <div className={styles.ambientGlowBlue} />
      <div className={styles.ambientMesh} />

      {/* Main Footer Container */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* ══════════════════════════════════════════════════
                COLUMN 1: ABOUT US & BRANDING
               ══════════════════════════════════════════════════ */}
            <div className={styles.colAbout}>
              <div className={styles.logoRow}>
                <Link href="/" className={styles.logoAnchor}>
                  <div className={styles.logoPlate}>
                    <Image
                      src="/images/marketing-copilot-brand.png"
                      alt="Marketing Copilot Digital Marketing Agency"
                      width={200}
                      height={68}
                      style={{ width: 'auto', height: '42px' }}
                      className={styles.logoImg}
                    />
                    <div className={styles.footerBrandTaglineCol}>
                      <span className={styles.footerBrandPrimaryText}>Your Business, Our Strategies</span>
                      <span className={styles.footerBrandSubText}>
                        <span className={styles.footerBrandSparkle}>✦</span> Powered by NovaSpark
                      </span>
                    </div>
                  </div>
                </Link>

                <div className={styles.statusPill}>
                  <span className={styles.statusDot} />
                  <span>Bhubaneswar · Pan-India</span>
                </div>
              </div>

              <h3 className={styles.colHeading}>About Marketing Copilot</h3>
              
              <p className={styles.aboutText}>
                We are a results-driven digital marketing agency in Bhubaneswar specializing in full-funnel customer acquisition, SEO, high-ROAS paid media, UI/UX design, and web development.
              </p>
            </div>

            {/* ══════════════════════════════════════════════════
                COLUMN 2: QUICK LINKS
               ══════════════════════════════════════════════════ */}
            <div className={styles.colLinks}>
              <h3 className={styles.colHeading}>
                <span>Quick Links</span>
                <span className={styles.headingSpark} />
              </h3>

              <ul className={styles.linkList}>
                {quickLinks.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.navLink}>
                      <span className={styles.linkBullet}>›</span>
                      <span className={styles.linkText}>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ══════════════════════════════════════════════════
                COLUMN 3: OUR SERVICES
               ══════════════════════════════════════════════════ */}
            <div className={styles.colServices}>
              <h3 className={styles.colHeading}>
                <span>Our Services</span>
                <span className={styles.headingSpark} />
              </h3>

              <ul className={styles.linkList}>
                {ourServices.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.navLink}>
                      <span className={styles.linkBullet}>›</span>
                      <span className={styles.linkText}>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ══════════════════════════════════════════════════
                COLUMN 4: CONTACT US & CONNECT
               ══════════════════════════════════════════════════ */}
            <div className={styles.colContact}>
              <h3 className={styles.colHeading}>
                <span>Get In Touch</span>
                <span className={styles.headingSpark} />
              </h3>

              <div className={styles.contactDetails}>
                {/* Phone */}
                <a href="tel:+918280788689" className={styles.contactItem} title="Call us directly">
                  <div className={`${styles.contactIconBox} ${styles.iconPhone}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.contactVal}>
                    <span className={styles.contactLabel}>Direct Call</span>
                    <span className={styles.contactText}>+91 8280788689</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:novasparkdmagency@gmail.com" className={styles.contactItem} title="Email proposals & inquiries">
                  <div className={`${styles.contactIconBox} ${styles.iconEmail}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className={styles.contactVal}>
                    <span className={styles.contactLabel}>Official Email</span>
                    <span className={styles.contactText}>novasparkdmagency@gmail.com</span>
                  </div>
                </a>

                {/* Address */}
                <div className={`${styles.contactItem} ${styles.contactItemAddress}`}>
                  <div className={`${styles.contactIconBox} ${styles.iconLocation}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.contactVal}>
                    <span className={styles.contactLabel}>Headquarters</span>
                    <span className={styles.contactText}>Bhubaneswar, 751015, Odisha, India</span>
                  </div>
                </div>
              </div>

              {/* Social Media Icons Strip */}
              <div className={styles.socialRow}>
                <a
                  href="https://www.facebook.com/share/19cD1qU1cV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Facebook"
                  title="Follow Marketing Copilot on Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/nsdigitalmarketing.agency?stkn=aWZpOWwzZWdzcG1j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                  title="Follow Marketing Copilot on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/nova-spark-digital-marketing-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                  title="Connect with Marketing Copilot on LinkedIn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                  </svg>
                </a>

                <a
                  href="https://youtube.com/@ns-digitalmarketingagency?si=E5vtm6XamnVtQ-tB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="YouTube"
                  title="Subscribe to Marketing Copilot on YouTube"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SUB-FOOTER: COPYRIGHT & LEGAL
         ══════════════════════════════════════════════════ */}
      <div className={styles.subFooter}>
        <div className="container">
          <div className={styles.subFooterInner}>
            <p className={styles.copyrightText}>
              © {currentYear} Marketing Copilot. All rights reserved.
            </p>

            <div className={styles.legalAndTop}>
              <div className={styles.legalLinks}>
                <Link href="/privacy" className={styles.legalAnchor}>Privacy Policy</Link>
                <span className={styles.legalDivider}>•</span>
                <Link href="/terms" className={styles.legalAnchor}>Terms &amp; Conditions</Link>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className={styles.backToTopBtn}
                aria-label="Scroll to top of page"
              >
                <span>Back to Top</span>
                <span className={styles.topArrow}>↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
