import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const MODELS = [
  {
    title: 'QALDERA',
    description: 'Quantifying the atmospheric, land, and anthropogenic drivers of hot temperature extremes through machine learning. This project utilizes a combined neural network approach and Explainable AI to measure how different environmental variables interact to trigger heat waves.',
    link: '/docs/models/quantify-drivers',
    tag: 'CLIMATE DYNAMICS'
  },
  {
    title: 'Data-driven Seasonal Forecasts of European heatwaves',
    description: 'Data-driven model (DDM) for forecasting European heatwaves at seasonal timescales using machine learning techniques, such as a Guided Hybrid Genetic Algorithm wrapped around a Random Forest to select the most relevant features.',
    link: '/docs/models/forecast-hw',
    tag: 'CLIMATE DYNAMICS'
  },
  {
    title: 'SEASgen',
    description: 'Forecasting global seasonal climate anomalies using machine learning techniques. This project combines variational inference and transformers to accurately predict temperature and rainfall while overcoming the computational limitations of traditional climate models.',
    link: '/docs/models/SEASgen',
    tag: 'CLIMATE DYNAMICS'
  },
  {
    title: 'CRAI',
    description: 'Training and evaluating a model based on a U-Net with partial convolutions to reconstruct observations of European climate extremes (warm and cold days and nights) by leveraging Earth system model data from CMIP6 through transfer learning. This allows the reconstruction of observational datasets with missing values.',
    link: 'docs/models/CRAI',
    tag: 'ATMOSPHERIC SCIENCE'
  },
  {
    title: 'RMM-VAE',
    description: 'Combining PCA analysis and probability techniques to understand atmospheric patterns in Western Europe to predict heat extremes, explain and predict interannual temperature variability using seasonal regime frequencies and quantify the dynamical contribution of circulation changes.',
    link: 'docs/models/RMM-VAE',
    tag: ''
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