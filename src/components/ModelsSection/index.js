import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const MODELS = [
  {
    title: 'Heatwave Quantify Driver',
    description: 'Classical and modern population dynamics models.',
    link:'/docs/models/quantify-drivers',
  },
  {
    title: 'Reaction–Diffusion Systems',
    description: 'Pattern formation and spatial dynamics.',
    link: '/docs/models/reaction-diffusion',
  },
  {
    title: 'Image Segmentation',
    description: 'Variational and computer vision models.',
    link: '/docs/models/image-segmentation',
  },
];

export default function ModelsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Models</h2>

        <div className={styles.grid}>
          {MODELS.map((model, idx) => (
            <Link
              key={idx}
              to={model.link}
              className={styles.card}
            >
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
