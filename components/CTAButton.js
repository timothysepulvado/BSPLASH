'use client';

import styles from './CTAButton.module.css';

export default function CTAButton({ text = 'Request a Demo', variant = 'primary', href = 'mailto:hello@brandstudios.ai' }) {
  return (
    <a href={href} className={`${styles.cta} ${styles[variant]}`}>
      {text}
      <span className={styles.arrow}>→</span>
    </a>
  );
}
