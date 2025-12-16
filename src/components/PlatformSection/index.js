import styles from './styles.module.css';

export default function PlatformSection() {
  return (
    <section id="platform" className={styles.section}>
      <div className={styles.container}>
        <h2>About the platform</h2>

        <p>
          This platform collects mathematical and computational models
          developed across different projects, focusing on clarity,
          reproducibility, and theoretical grounding.
        </p>

        <p>
          Each model is documented from theory to implementation, with
          references and links to source code.
        </p>
      </div>
    </section>
  );
}
