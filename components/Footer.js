'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/faqs', label: 'FAQs' },
  { href: 'mailto:hello@brandstudios.ai', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://x.com', label: 'X', icon: '𝕏' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '○' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="BrandStudios.AI"
              width={160}
              height={26}
            />
          </Link>
          <nav className={styles.footerNav}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          <p className={styles.tagline}>Intelligence Delivered.</p>
          <p className={styles.description}>
            BrandStudios.AI is a creative intelligence platform that learns your
            brand and produces on-brand content at scale.
          </p>

          <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeBtn} disabled={status === 'loading'}>
              {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Subscribe'}
            </button>
          </form>

          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 BrandStudios.AI | All Rights Reserved</p>
        <div className={styles.legalLinks}>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
