import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import ScrollReveal from '@/components/ScrollReveal';
import GaugeCircle from '@/components/GaugeCircle';

export const metadata = {
  title: 'Brand Fidelity Index™ — BrandStudios.AI',
  description: 'A quantitative measure of brand integrity at scale. Score, govern, and improve brand consistency across every output.',
};

const fidelityDimensions = [
  { label: 'Visual Coherence', score: 92, description: 'Color, typography, imagery consistency across outputs' },
  { label: 'Tonal Alignment', score: 88, description: 'Voice, tone, and messaging consistency' },
  { label: 'Strategic Consistency', score: 85, description: 'Alignment with brand positioning and values' },
  { label: 'Audience Fit', score: 90, description: 'Relevance and resonance with target audiences' },
];

export default function BrandFidelityPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.label}>Brand Fidelity Index™</p>
          <h1 className={styles.heroHeadline}>
            A Measure of Brand<br />
            Integrity at <em>Scale</em>
          </h1>
          <p className={styles.heroSub}>
            The Brand Fidelity Index™ gives you a quantitative measure of how consistently
            your creative output reflects your brand&apos;s core identity.
          </p>
        </div>
      </section>

      {/* Fidelity Score Preview */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.scoreCard}>
              <div className={styles.scoreMain}>
                <GaugeCircle score={89} size={180} strokeWidth={10} label="Brand Fidelity Score" />
              </div>
              <div className={styles.scoreDimensions}>
                {fidelityDimensions.map((dim) => (
                  <div key={dim.label} className={styles.dimension}>
                    <div className={styles.dimHeader}>
                      <span className={styles.dimLabel}>{dim.label}</span>
                      <span className={styles.dimScore}>{dim.score}</span>
                    </div>
                    <div className={styles.dimBar}>
                      <div className={styles.dimFill} style={{ width: `${dim.score}%` }} />
                    </div>
                    <p className={styles.dimDesc}>{dim.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              How It <em>Works</em>
            </h2>
            <div className={styles.howGrid}>
              <div className={styles.howItem}>
                <span className={styles.howNumber}>01</span>
                <h4>Baseline</h4>
                <p>Brand Memory establishes your brand&apos;s baseline identity across all dimensions — visual, tonal, strategic.</p>
              </div>
              <div className={styles.howItem}>
                <span className={styles.howNumber}>02</span>
                <h4>Score</h4>
                <p>Every creative output is scored against the baseline, measuring fidelity across each dimension.</p>
              </div>
              <div className={styles.howItem}>
                <span className={styles.howNumber}>03</span>
                <h4>Flag</h4>
                <p>Outputs below threshold are flagged before they go live, preventing brand drift at scale.</p>
              </div>
              <div className={styles.howItem}>
                <span className={styles.howNumber}>04</span>
                <h4>Improve</h4>
                <p>Feedback loops refine the scoring model, making governance more intelligent over time.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Fidelity Matters */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Why Fidelity <em>Matters</em>
            </h2>
            <div className={styles.mattersGrid}>
              <div className={styles.mattersItem}>
                <h4>Brand Equity Protection</h4>
                <p>Brand inconsistency erodes trust. The Brand Fidelity Index™ ensures every output strengthens your brand, never weakens it.</p>
              </div>
              <div className={styles.mattersItem}>
                <h4>Scalable Governance</h4>
                <p>Manual brand reviews don&apos;t scale. Automated fidelity scoring gives you governance that grows with your output volume.</p>
              </div>
              <div className={styles.mattersItem}>
                <h4>Creative Confidence</h4>
                <p>Teams move faster when they know quality is being measured. Fidelity scoring removes the anxiety from scaling creative.</p>
              </div>
              <div className={styles.mattersItem}>
                <h4>Continuous Improvement</h4>
                <p>Track fidelity trends over time. See where brand consistency is improving, and where it needs attention.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What Fidelity Reveals */}
      <ScrollReveal>
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline} style={{ color: 'var(--white)' }}>
              What Fidelity <em>Reveals</em>
            </h2>
            <p className={styles.sectionBody} style={{ color: 'rgba(255,255,255,0.7)' }}>
              Beyond a single score, the Brand Fidelity Index™ reveals patterns — which channels
              maintain consistency, which markets drift, which content types need attention.
              It turns brand judgment from subjective opinion into data-driven governance.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* From Judgment to Governance */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              From Judgment to <em>Governance</em>
            </h2>
            <p className={styles.sectionBody}>
              Brand consistency has always depended on individual judgment — the right person
              reviewing the right output at the right time. The Brand Fidelity Index™ turns
              that judgment into systematic governance that scales with your organization.
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
