'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import CTAButton from './CTAButton';

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/why', label: 'Why BrandStudios.AI' },
  { href: '/brand-fidelity', label: 'Brand Fidelity Index™' },
  { href: '/about', label: 'Resources' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            BrandStudios<span className={styles.logoDot}>.</span>AI
          </span>
        </Link>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <CTAButton text="Request a Demo" />
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton text="Request a Demo" />
        </div>
      </div>
    </nav>
  );
}
