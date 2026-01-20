import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function PlatformSection() {
  return (
    <section id="platform" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About the platform</h2>

        <div className={styles.textBlock}>
          <p>
            As a core initiative of the{' '}
            <Link
              to="https://expect-project.eu/about/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              EXPECT project
            </Link>
            , this platform bridges the gap between climate research and advanced
            machine learning. Our goal is to empower the community to not only
            reproduce our findings, but to build upon them.
          </p>

          <p>
            We provide a comprehensive ecosystem of open resources: code
            repositories for data processing and model training, pre-trained
            models, standardized benchmarks, and rigorous evaluation protocols.
          </p>
        </div>
      </div>
    </section>
  );
}

