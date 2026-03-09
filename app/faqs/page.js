import styles from './page.module.css';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'FAQs — BrandStudios.AI',
  description: 'Frequently asked questions about BrandStudios.AI, Brand Memory, the Brand Fidelity Index, and how our creative intelligence platform works.',
};

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

export default function FAQsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            Frequently Asked <em>Questions</em>
          </h1>
        </div>
      </section>

      <ScrollReveal>
        <section className={styles.section}>
          <div className={styles.container}>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
