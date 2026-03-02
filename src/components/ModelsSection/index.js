import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const MODELS = [
  {
    title: 'Heatwave Quantify Driver',
    description: 'Quantifying atmospheric and land drivers of hot temperature extremes through explainable Artificial Intelligence.',
    link: '/docs/models/quantify-drivers',
    tag: 'CLIMATE DYNAMICS'
  },
  {
    title: 'Data-driven Seasonal Forecasts of European heatwaves',
    description: 'Data-driven model (DDM) for forecasting European heatwaves at seasonal timescales using machine learning techniques.',
    link: '/docs/models/forecast-hw',
    tag: 'CLIMATE DYNAMICS'
  },
];

export default function ModelsSection() {
  return (
    <section id="models-section" className={styles.section}>
      
      {/* DECORATION 1: Background Grid Pattern */}
      <div className={styles.gridPattern} />
      
      

      <div className={styles.container}>
        
        {/* Header with decorative crosshair */}
        <div className={styles.header}>
          <div className={styles.monoTag}>
            <span className={styles.tagLine} />
            OPEN REPOSITORY
          </div>
          
          <div className={styles.titleWrapper}>
             <h2 className={styles.heading}>Available Models</h2>
             
          </div>
        </div>

        <div className={styles.grid}>
          {MODELS.map((model, idx) => (
            <Link key={idx} to={model.link} className={styles.card}>
              
              {/* DECORATION 4: Tech Corners (Top Left & Bottom Right) */}
              <div className={styles.cornerTL} />
              <div className={styles.cornerBR} />

              <div className={styles.cardContent}>
                <span className={styles.modelTag}>{model.tag}</span>
                <h3 className={styles.cardTitle}>{model.title}</h3>
                <p className={styles.cardDescription}>{model.description}</p>
              </div>
              
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}