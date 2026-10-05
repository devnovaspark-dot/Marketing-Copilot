import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import styles from './BlogSidebarCta.module.css';

export default function BlogSidebarCta() {
  return (
    <aside className={styles.sidebarCta} aria-label="Book Growth Strategy Consultation">
      <span className={styles.badge}>✦ Bhubaneswar Growth Team</span>
      <h3 className={styles.title}>Ready to Scale Your Revenue?</h3>
      <p className={styles.desc}>
        Get a customized performance marketing blueprint engineered for your business by senior strategists.
      </p>

      <div className={styles.btnGroup}>
        <BeamButton href="/contact" label="Book Free Consultation" size="md" fullWidth />
        <a
          href="https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20am%20reading%20your%20blog%20and%20would%20like%20to%20discuss%20a%20growth%20strategy."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryLink}
        >
          <span>Chat on WhatsApp (+91 82807 88689)</span>
        </a>
      </div>
    </aside>
  );
}
