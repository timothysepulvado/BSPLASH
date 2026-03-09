import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Platform — BrandStudios.AI',
  description: 'One system. Three connected dimensions. Brand Memory, Creative Studio, and Insight Loop — working as one living intelligence.',
};

const steps = [
  { number: '01', title: 'Ingest', description: 'Your brand guidelines, assets, and creative history are absorbed into Brand Memory.' },
  { number: '02', title: 'Understand', description: 'The platform builds a deep model of your brand\'s identity — tone, visual language, strategic positioning.' },
  { number: '03', title: 'Create', description: 'Creative Studio produces on-brand content guided by Brand Memory, at any scale you need.' },
  { number: '04', title: 'Measure', description: 'Every output is scored against the Brand Fidelity Index™ for consistency and quality.' },
  { number: '05', title: 'Learn', description: 'Performance data and creative feedback flow back into Brand Memory, making every output better than the last.' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            One System.<br />
            Three Connected <em>Dimensions.</em>
          </h1>
          <p className={styles.heroSub}>
            BrandStudios.AI operates as a single intelligence — where brand memory,
            creative production, and performance insight work as one closed loop.
          </p>
        </div>
      </section>

      {/* Closed Loop */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              BrandStudios.AI Operates as a <em>Closed Loop</em>
            </h2>
            <p className={styles.sectionBody}>
              Every creative output feeds data back into Brand Memory. Every insight
              sharpens the next execution. The system doesn&apos;t just produce — it compounds.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Three Cards */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🧠</div>
                <h3>Brand Memory</h3>
                <p>
                  The foundation. A living intelligence that captures your brand&apos;s DNA —
                  tone, visual identity, strategic positioning, audience understanding —
                  and makes it operational.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Brand guideline ingestion</li>
                  <li>Creative asset analysis</li>
                  <li>Continuous learning from feedback</li>
                  <li>Cross-channel consistency engine</li>
                </ul>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🎨</div>
                <h3>Creative Studio</h3>
                <p>
                  The engine. Produce on-brand creative at enterprise scale — every asset
                  guided by Brand Memory, every output measured for fidelity.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Multi-format content generation</li>
                  <li>Campaign asset production</li>
                  <li>Brand Fidelity scoring</li>
                  <li>Human-in-the-loop workflows</li>
                </ul>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🔄</div>
                <h3>Insight Loop</h3>
                <p>
                  The intelligence. Performance data from every channel feeds back into
                  Brand Memory, creating a system that learns and improves automatically.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Performance analytics integration</li>
                  <li>Creative effectiveness scoring</li>
                  <li>Automated optimization signals</li>
                  <li>Strategic pattern recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>How BrandStudios.AI Works</p>
            <h2 className={styles.sectionHeadline}>
              One Living <em>Intelligence</em>
            </h2>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.number} className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Built for Creative Humans */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Built for <em>Creative Humans</em>
            </h2>
            <p className={styles.sectionBody}>
              BrandStudios.AI doesn&apos;t replace your creative team — it amplifies them.
              Human judgment stays at the center. The platform handles operational complexity
              so your people can focus on what they do best: create.
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
