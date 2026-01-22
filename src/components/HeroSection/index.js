import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';



// src/pages/index.js

// ... imports ...

const FlowField = () => (
  <svg className={styles.waveSvg} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* UPDATED GRADIENT: Smoother transition for Light Mode */}
      <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--wave-color-faint)" stopOpacity="0" />
        
        {/* Widen the center so lines look like 'ribbons' rather than scratches */}
        <stop offset="30%" stopColor="var(--wave-color-faint)" />
        <stop offset="50%" stopColor="var(--wave-color-core)" /> 
        <stop offset="70%" stopColor="var(--wave-color-faint)" />
        
        <stop offset="100%" stopColor="var(--wave-color-faint)" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <g className={styles.waveGroup}>
      {/* The paths stay exactly the same, they just reference the ID above */}
      <path d="M-200 750 C 300 750, 600 350, 1600 450" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      <path d="M-200 760 C 320 760, 620 360, 1600 460" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.7" />
      <path d="M-200 770 C 340 770, 640 370, 1600 470" stroke="url(#flowGrad)" strokeWidth="1.2" opacity="0.9" />
      <path d="M-200 780 C 360 780, 660 380, 1600 480" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.6" />
      <path d="M-200 790 C 380 790, 680 390, 1600 490" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      <path d="M-200 800 C 400 800, 700 400, 1600 500" stroke="url(#flowGrad)" strokeWidth="1.5" opacity="1.0" />
      <path d="M-200 810 C 420 810, 720 410, 1600 510" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.7" />
      <path d="M-200 820 C 440 820, 740 420, 1600 520" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.9" />
      <path d="M-200 830 C 460 830, 760 430, 1600 530" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.5" />
      
      <path d="M-200 700 C 300 700, 500 300, 1600 400" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.3" />
      <path d="M-200 720 C 320 720, 520 320, 1600 420" stroke="url(#flowGrad)" strokeWidth="0.6" opacity="0.4" />
      <path d="M-200 740 C 340 740, 540 340, 1600 440" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.3" />

      <path d="M-200 650 C 400 650, 800 750, 1600 250" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.2" />
      <path d="M-200 670 C 450 670, 850 770, 1600 270" stroke="url(#flowGrad)" strokeWidth="0.4" opacity="0.3" />
      <path d="M-200 690 C 500 690, 900 790, 1600 290" stroke="url(#flowGrad)" strokeWidth="0.6" opacity="0.2" />
      
      <path d="M-200 900 C 500 900, 800 550, 1600 650" stroke="url(#flowGrad)" strokeWidth="3" opacity="0.1" filter="blur(8px)" />
    </g>
  </svg>
);

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGradient} />
      
      {/* The Viewport Lock keeps everything positioned perfectly at the top */}
      <div className={styles.viewportLock}>
        
        <div className={styles.earthLayer} />
        
        <div className={styles.waveContainer}>
          <FlowField />
        </div>

        <div className={styles.content}>
          <div className={styles.monoTag}>
            <span className={styles.tagLine} />
            A REPRODUCIBILITY STANDARD.
          </div>

          <h1 className={styles.title}>
            The Open <br />
            <span className={styles.thinText}>Platform</span>
          </h1>

          <p className={styles.subtitle}>
            Towards an Integrated Capability to Explain and Predict Regional Climate Changes.
          </p>

          <div className={styles.buttonGroup}>
            <Link className={styles.btnPrimary} to="#models-section">
              Explore Models
            </Link>
            <Link className={styles.btnSecondary} to="https://expect-project.eu/">
              Expect Project ↗
            </Link>
          </div>
        </div>
      
      </div>
      <div className={styles.aboutOverlay}>
        <div className={styles.scrollLine} />
        
        <p className={styles.aboutText}>
          As a core initiative of the{' '}
          <Link className={styles.inlineLink} to="https://expect-project.eu/">
            EXPECT project
          </Link>
          , this platform bridges the gap between climate research and advanced machine learning.
          Our goal is to empower the community to not only reproduce our findings, but to build upon them.
        </p>
      </div>
      <div className={styles.bottomFade} />
    </section>
  );
}