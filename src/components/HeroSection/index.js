import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Open Platform
        </h1>

        <p className={styles.subtitle}>
          AN EXPECT platform for reproducibility and open science.
        </p>

        <Link to="#platform" className={styles.cta}>
          Explore our models ↓
        </Link>
      </div>
    </section>
  );
}
