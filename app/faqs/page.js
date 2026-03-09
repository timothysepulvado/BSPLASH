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
