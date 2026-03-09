'use client';

import { useState } from 'react';
import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import ScrollReveal from '@/components/ScrollReveal';

const expandableSections = [
  {
    title: 'Why We Exist',
    content: `Brands are under pressure to produce more content, across more channels, in more markets — faster than ever. The tools available either sacrifice quality for speed, or require so much human intervention that the efficiency gains disappear.

We built BrandStudios.AI because we believe there's a better way. A way to scale creative output without sacrificing the human judgment that makes brands distinctive. A way to use intelligence — both artificial and human — to produce work that is unmistakably, consistently, measurably on-brand.

We exist to prove that scale and quality are not opposing forces. They are complementary — when powered by the right intelligence.`,
  },
  {
    title: 'Our Approach',
    content: `BrandStudios.AI is built on three convictions:

First, that brand identity is too important to be left to generic AI models. Your brand's unique DNA — its tone, visual language, strategic positioning — deserves a system that truly understands it. That's why we built Brand Memory.

Second, that creative quality should compound, not degrade, at scale. Every output should make the next one better. That's why we built the Insight Loop.

Third, that humans should direct creative intelligence, not be replaced by it. The platform handles operational complexity; your team handles creative judgment. That's why we built for Creative Humans.`,
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            About <em>BrandStudios.AI</em>
          </h1>
          <p className={styles.heroSub}>
            We&apos;re building the creative intelligence platform for brands that
            refuse to choose between scale and quality.
          </p>
        </div>
      </section>

      {/* Expandable Sections */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            {expandableSections.map((section, index) => (
              <div key={section.title} className={styles.expandable}>
                <button
                  className={styles.expandableHeader}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <h2 className={styles.expandableTitle}>{section.title}</h2>
                  <span className={styles.expandableIcon}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`${styles.expandableBody} ${openIndex === index ? styles.expandableOpen : ''}`}>
                  <div className={styles.expandableContent}>
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container} style={{ textAlign: 'center' }}>
            <h2 className={styles.sectionHeadline}>
              Ready to See It in <em>Action?</em>
            </h2>
            <div style={{ marginTop: '32px' }}>
              <CTAButton text="Request a Demo" />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
