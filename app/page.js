import styles from './page.module.css';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';

const faqItems = [
  {
    question: 'What is BrandStudios.AI?',
    answer: 'The Operating System for AI Brand Creative. It brings human intelligence to every piece of work that ships. The system remembers your brand, evaluates work against that memory, and keeps human judgment attached as volume expands. It sits on top of your existing tools and becomes the layer that governs what goes out the door.',
  },
  {
    question: 'What does BrandStudios.AI produce?',
    answer: 'Real marketing work, continuously, across channels and markets. Campaign and launch copy, video and motion assets, social and channel variations, localized and regional adaptations, creative production across teams and partners. The work scales. The standard stays coherent.',
  },
  {
    question: 'What is the difference between a tool and an operating system?',
    answer: 'A tool creates output. An operating system sets the rules the output must live under. Tools can generate copy, images, or video faster. An operating system carries memory forward, measures every output against that memory, and learns from every approval so the standard holds as volume grows. Tools help teams produce more. An operating system keeps human judgment continuous.',
  },
  {
    question: 'Where does BrandStudios.AI sit in our stack?',
    answer: 'On top of it. Keep the tools you use today. Add new ones later. BrandStudios.AI connects to your creative and AI tools and governs output through a persistent memory and scoring layer. Your stack produces work. BrandStudios.AI determines whether it meets the standard.',
  },
  {
    question: 'What is Brand Memory?',
    answer: 'Brand Memory is a structured system that captures how your brand actually behaves. It holds voice, tone, visual codes, design rules, positioning guardrails, best approved work, approval patterns, and performance patterns. It is built from real work, not just documentation. And it does not reset each campaign. It carries forward, which means the system gets sharper the longer it runs. Every approval, every correction, every piece of work that ships adds to a living standard that new work is measured against.',
  },
  {
    question: 'What is Brand Fidelity?',
    answer: 'Brand Fidelity shows how well the creative standard holds as output expands. Every asset is evaluated before it reaches a human reviewer. Brand Grade compares quality to your best approved work. Brand Drift measures deviation from Brand Memory. Brand Fidelity balances grade against drift. The result is a clear, repeatable standard that can scale. Human review shifts upward. Less time fixing basics, more time deciding direction.',
  },
  {
    question: 'How does this raise the floor?',
    answer: 'In large organizations, output quality varies by team, region, and partner. BrandStudios.AI makes the standard portable. Misalignment gets caught early. Weak work does not scale. The baseline improves across everyone who touches the brand. The floor rises because human judgment is embedded into the process, not dependent on who happens to be reviewing the work.',
  },
  {
    question: 'Who is this built for?',
    answer: 'Brand leaders, creative directors, and marketing operations teams inside organizations where output volume has outpaced the ability to maintain a consistent standard. If your brand ships creative across multiple teams, regions, agencies, or partners, and you need human intelligence governing that work without slowing it down, this is built for you.',
  },
  {
    question: 'How is data handled?',
    answer: 'Brand assets, creative work, and approval data stay within your environment. BrandStudios.AI does not train general models on your brand data, share it across clients, or use it for any purpose beyond serving your brand. Enterprise-grade security, encryption, and access controls are standard. Specific compliance requirements can be addressed during onboarding.',
  },
  {
    question: 'Where does our data go, and which AI models will have access to it?',
    answer: 'BrandStudios.AI operates on a model-agnostic architecture with strict data boundaries. All client and proprietary work runs on approved U.S.-based or client-designated infrastructure. No client data is processed through offshore-hosted models. We may benchmark emerging models for research purposes using synthetic prompts only. Production workflows remain within trusted environments. Enterprises retain full control over infrastructure selection and data boundaries.',
  },
  {
    question: 'Can we download the BrandStudios.AI banger?',
    answer: 'Yes. We made a track to mark what we believe. If you build a system for creative intelligence, you should create culture too. Download it and keep it.',
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
