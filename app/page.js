import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';

const faqItems = [
  {
    question: 'What is BrandStudios.AI?',
    answer: 'BrandStudios.AI is a creative intelligence platform that learns your brand\'s unique identity and produces on-brand creative content at enterprise scale — while keeping human judgment at the center of every decision.',
  },
  {
    question: 'How is this different from other AI creative tools?',
    answer: 'Most AI tools generate content from generic models. BrandStudios.AI builds a living Brand Memory that understands your specific brand DNA — tone, visual identity, strategic positioning — and ensures every output is unmistakably yours.',
  },
  {
    question: 'What is Brand Memory?',
    answer: 'Brand Memory is our proprietary system that captures and operationalizes your brand\'s identity. It learns from every interaction, building a deeper understanding of what makes your brand unique — and applying that knowledge to every creative output.',
  },
  {
    question: 'What is the Brand Fidelity Index™?',
    answer: 'The Brand Fidelity Index™ is a quantitative measure of how consistently your creative output reflects your brand\'s core identity. It scores content across multiple dimensions — visual coherence, tonal alignment, strategic consistency — giving you governance over brand integrity at scale.',
  },
  {
    question: 'Who is BrandStudios.AI built for?',
    answer: 'BrandStudios.AI is built for creative teams, brand managers, and marketing leaders at enterprise organizations who need to scale creative output without sacrificing brand quality or creative judgment.',
  },
  {
    question: 'Does BrandStudios.AI replace creative teams?',
    answer: 'No. BrandStudios.AI amplifies creative teams. It handles the operational complexity of producing on-brand content at scale, freeing human creatives to focus on strategy, innovation, and the judgment calls that machines can\'t make.',
  },
  {
    question: 'How does the platform learn my brand?',
    answer: 'Through a structured onboarding process and ongoing interaction. BrandStudios.AI ingests your brand guidelines, analyzes existing creative assets, and continuously refines its understanding through feedback loops with your creative team.',
  },
  {
    question: 'What types of content can BrandStudios.AI produce?',
    answer: 'The platform supports a wide range of creative outputs including campaign assets, social content, brand communications, visual design, copywriting, and more — all calibrated to your brand\'s unique identity and standards.',
  },
  {
    question: 'How does BrandStudios.AI ensure brand consistency?',
    answer: 'Every output is measured against your Brand Memory using the Brand Fidelity Index™. Content that doesn\'t meet your brand\'s standards is flagged before it goes live, creating a governance layer that scales with your organization.',
  },
  {
    question: 'Can BrandStudios.AI integrate with our existing tools?',
    answer: 'Yes. BrandStudios.AI is designed to integrate with existing creative workflows, DAM systems, and marketing platforms. We work with your team to ensure seamless adoption without disrupting established processes.',
  },
  {
    question: 'How do I get started?',
    answer: 'Request a demo and our team will walk you through the platform, discuss your brand\'s specific needs, and outline a tailored implementation plan. We typically have teams up and running within weeks, not months.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            AI for Brand Creative.<br />
            Powered by <em>Human Intelligence.</em>
          </h1>
          <p className={styles.heroSub}>
            BrandStudios.AI is the creative intelligence platform that learns your brand
            and produces on-brand content at scale.
          </p>
          <CTAButton text="Request a Demo" />
        </div>
      </section>

      {/* Built for Creative Humans */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Built for Creative Humans</p>
            <h2 className={styles.sectionHeadline}>
              The Operating System for<br />
              <em>Brand Creative</em>
            </h2>
            <p className={styles.sectionBody}>
              A single connected platform where brand memory, creative production,
              and performance insight work as one — so your team creates with
              intelligence, not guesswork.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Three Pillars */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>🧠</div>
                <h3>Brand Memory</h3>
                <p>
                  A living record of your brand&apos;s identity — tone, visual language,
                  strategic positioning — that grows smarter with every interaction.
                </p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>🎨</div>
                <h3>Creative Studio</h3>
                <p>
                  Produce on-brand content at scale. Every asset is guided by Brand Memory,
                  ensuring consistency across channels and campaigns.
                </p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>🔄</div>
                <h3>Insight Loop</h3>
                <p>
                  Performance data feeds back into Brand Memory, creating a closed loop
                  where every output makes the next one better.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Creative Output Unified */}
      <ScrollReveal>
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline} style={{ color: 'var(--white)' }}>
              Creative Output, <em>Unified</em>
            </h2>
            <p className={styles.sectionBody} style={{ color: 'rgba(255,255,255,0.7)' }}>
              One platform. One brand memory. Every channel, every campaign, every market —
              consistently, unmistakably yours.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Where Others Automate */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Where Others Automate,<br />
              We <em>Learn</em>
            </h2>
            <div className={styles.comparisonGrid}>
              <div className={styles.comparisonCol}>
                <h4 className={styles.comparisonLabel}>Generic AI Tools</h4>
                <ul className={styles.comparisonList}>
                  <li>Generate from generic models</li>
                  <li>No brand context</li>
                  <li>Output degrades at scale</li>
                  <li>Requires constant manual correction</li>
                  <li>No learning between outputs</li>
                </ul>
              </div>
              <div className={`${styles.comparisonCol} ${styles.comparisonHighlight}`}>
                <h4 className={styles.comparisonLabel}>BrandStudios.AI</h4>
                <ul className={styles.comparisonList}>
                  <li>Generates from your Brand Memory</li>
                  <li>Deep brand understanding</li>
                  <li>Quality improves at scale</li>
                  <li>Self-correcting through Insight Loop</li>
                  <li>Every output makes the next one better</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* The Difference That Matters */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              The Difference That <em>Matters</em>
            </h2>
            <div className={styles.diffTable}>
              <div className={styles.diffRow}>
                <div className={styles.diffLabel}>Brand Understanding</div>
                <div className={styles.diffGeneric}>Generic prompts</div>
                <div className={styles.diffBs}>Living Brand Memory</div>
              </div>
              <div className={styles.diffRow}>
                <div className={styles.diffLabel}>Creative Quality</div>
                <div className={styles.diffGeneric}>Degrades at scale</div>
                <div className={styles.diffBs}>Compounds at scale</div>
              </div>
              <div className={styles.diffRow}>
                <div className={styles.diffLabel}>Consistency</div>
                <div className={styles.diffGeneric}>Manual enforcement</div>
                <div className={styles.diffBs}>Automated governance</div>
              </div>
              <div className={styles.diffRow}>
                <div className={styles.diffLabel}>Learning</div>
                <div className={styles.diffGeneric}>Static model</div>
                <div className={styles.diffBs}>Continuous improvement</div>
              </div>
              <div className={styles.diffRow}>
                <div className={styles.diffLabel}>Human Role</div>
                <div className={styles.diffGeneric}>Correction</div>
                <div className={styles.diffBs}>Creative direction</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Brand Fidelity Index */}
      <ScrollReveal>
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <p className={styles.sectionLabel} style={{ color: 'var(--orange)' }}>
              Brand Fidelity Index™
            </p>
            <h2 className={styles.sectionHeadline} style={{ color: 'var(--white)' }}>
              Measure What Matters.<br />
              <em>Brand Integrity at Scale.</em>
            </h2>
            <p className={styles.sectionBody} style={{ color: 'rgba(255,255,255,0.7)' }}>
              The Brand Fidelity Index™ gives you a quantitative measure of how consistently
              your creative output reflects your brand&apos;s core identity — turning subjective
              brand judgment into objective governance.
            </p>
            <CTAButton text="Learn More" href="/brand-fidelity" variant="secondary" />
          </div>
        </section>
      </ScrollReveal>

      {/* Measured Impact */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Measured Impact at<br />
              <em>Enterprise Scale</em>
            </h2>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>70%</span>
                <span className={styles.metricLabel}>Reduction in Creative Production Time</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>+500%</span>
                <span className={styles.metricLabel}>Creative Output Lift</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>40%</span>
                <span className={styles.metricLabel}>Improvement in Brand Consistency</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>3x</span>
                <span className={styles.metricLabel}>More Output, Same Team</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQs */}
      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeadline}>
              Frequently Asked <em>Questions</em>
            </h2>
            <div className={styles.faqWrapper}>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
