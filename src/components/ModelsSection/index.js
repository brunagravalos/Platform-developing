import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const MODELS = [
  {
    title: 'Heatwave Quantify Driver',
    description: 'Classical and modern population dynamics models.',
    link: '/docs/models/quantify-drivers',
  },
  
];

export default function ModelsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Models</h2>

        <div className={styles.grid}>
          {MODELS.map((model, idx) => (
            <Link key={idx} to={model.link} className={styles.card}>
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <p className={styles.cardDescription}>{model.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
