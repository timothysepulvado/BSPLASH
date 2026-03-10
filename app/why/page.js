import Image from 'next/image';
import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Why BrandStudios.AI',
  description: 'Scale creative. Preserve judgment. BrandStudios.AI compounds creative quality at scale instead of degrading it.',
};

export default function WhyPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Scale Creative.<br />
            Preserve <em>Judgment.</em>
          </h1>
          <p className={styles.heroSub}>
            Most AI tools trade quality for speed. BrandStudios.AI compounds
            creative quality at scale — because intelligence should grow with use,
            not degrade.
          </p>
        </div>
      </section>

      {/* The Shift at Scale */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              The Shift at <em>Scale</em>
            </h2>
            <div className={styles.sectionImage}>
              <Image src="/images/upscale.jpg" alt="Enterprise creative scaling with brand consistency" width={800} height={450} className={styles.featureImage} />
            </div>
            <div className={styles.shiftGrid}>
              <div className={styles.shiftCard}>
                <h4>The Problem</h4>
                <p>
                  Enterprise brands need more content across more channels in more markets.
                  Traditional approaches break down: either quality suffers, or costs
                  become unsustainable, or both.
                </p>
              </div>
              <div className={styles.shiftCard}>
                <h4>The Usual Answer</h4>
                <p>
                  Generic AI tools promise speed but deliver inconsistency. They generate
                  from generic models with no brand understanding, requiring constant
                  manual correction that erases the efficiency gains.
                </p>
              </div>
              <div className={`${styles.shiftCard} ${styles.shiftHighlight}`}>
                <h4>The BrandStudios.AI Answer</h4>
                <p>
                  A creative intelligence that learns your brand and gets better with every
                  output. Brand Memory ensures consistency. Insight Loop ensures improvement.
                  Human judgment stays at the center.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Brand Memory Made Operational */}
      <ScrollReveal>
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline} style={{ color: 'var(--white)' }}>
              Brand Memory, Made <em>Operational</em>
            </h2>
            <p className={styles.sectionBody} style={{ color: 'rgba(255,255,255,0.7)' }}>
              Your brand guidelines exist. Your creative standards exist. But they live in
              PDFs, in people&apos;s heads, in institutional knowledge that doesn&apos;t scale.
              Brand Memory makes that knowledge operational — alive in every creative output,
              every time, everywhere.
            </p>
            <div className={styles.sectionImage}>
              <Image src="/icons/gears.gif" alt="Interconnected gears representing operational brand memory" width={200} height={200} unoptimized className={styles.gearsImage} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Creative That Compounds */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Creative That <em>Compounds</em>
            </h2>
            <p className={styles.sectionBody}>
              Every output teaches the system something new about your brand. Performance
              data reveals what resonates. Creative feedback refines understanding. The
              Insight Loop ensures that output number 1,000 is better than output number 1.
            </p>
            <div className={styles.sectionImage}>
              <Image src="/images/girl-working-laptop.gif" alt="Creative professional building compounding brand intelligence" width={600} height={400} unoptimized className={styles.featureImage} />
            </div>
            <div className={styles.compoundGrid}>
              <div className={styles.compoundItem}>
                <span className={styles.compoundNumber}>Output 1</span>
                <p>Strong brand alignment from day one through Brand Memory</p>
              </div>
              <div className={styles.compoundArrow}>→</div>
              <div className={styles.compoundItem}>
                <span className={styles.compoundNumber}>Output 100</span>
                <p>Refined understanding from feedback loops and performance data</p>
              </div>
              <div className={styles.compoundArrow}>→</div>
              <div className={styles.compoundItem}>
                <span className={styles.compoundNumber}>Output 1,000</span>
                <p>Deep brand intelligence that anticipates and exceeds standards</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* One Memory Many Executions */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              One Memory.<br />
              Many <em>Executions.</em>
            </h2>
            <p className={styles.sectionBody}>
              Social campaigns. Brand communications. Product launches. Market-specific
              adaptations. One Brand Memory ensures every execution is unmistakably yours —
              regardless of channel, format, or market.
            </p>
            <div style={{ marginTop: '40px' }}>
              <CTAButton text="Request a Demo" />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
