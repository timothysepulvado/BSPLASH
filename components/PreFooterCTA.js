import styles from './PreFooterCTA.module.css';
import CTAButton from './CTAButton';

export default function PreFooterCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>
          The Future Belongs to Intelligence<br />
          <em>That Stays Human</em>
        </h2>
        <CTAButton text="Request a Demo" />
      </div>
    </section>
  );
}
