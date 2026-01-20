import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// The "Flow Field" - High Density & White
const FlowField = () => (
  <svg className={styles.waveSvg} viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Updated Gradient: White Core, Fading to Transparent */}
      <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.0)" />
        <stop offset="20%" stopColor="rgba(255, 255, 255, 0.2)" />
        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" /> {/* Pure Bright White Center */}
        <stop offset="80%" stopColor="rgba(255, 255, 255, 0.2)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
      </linearGradient>
    </defs>
    
    <g className={styles.flowGroup}>
      {/* --- CORE STREAM (High Density) --- */}
      <path d="M-200 600 C 300 600, 600 200, 1600 300" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      <path d="M-200 610 C 320 610, 620 210, 1600 310" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.7" />
      <path d="M-200 620 C 340 620, 640 220, 1600 320" stroke="url(#flowGrad)" strokeWidth="1.2" opacity="0.9" />
      <path d="M-200 630 C 360 630, 660 230, 1600 330" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.6" />
      <path d="M-200 640 C 380 640, 680 240, 1600 340" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      <path d="M-200 650 C 400 650, 700 250, 1600 350" stroke="url(#flowGrad)" strokeWidth="1.5" opacity="1.0" />
      <path d="M-200 660 C 420 660, 720 260, 1600 360" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.7" />
      <path d="M-200 670 C 440 670, 740 270, 1600 370" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.9" />
      <path d="M-200 680 C 460 680, 760 280, 1600 380" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.5" />
      
      {/* --- UPPER ECHO (Creating Volume) --- */}
      <path d="M-200 550 C 300 550, 500 150, 1600 250" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.3" />
      <path d="M-200 570 C 320 570, 520 170, 1600 270" stroke="url(#flowGrad)" strokeWidth="0.6" opacity="0.4" />
      <path d="M-200 590 C 340 590, 540 190, 1600 290" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.3" />

      {/* --- CROSS CURRENTS (The "Physics Net" look) --- */}
      {/* These lines curve slightly differently to create intersections */}
      <path d="M-200 500 C 400 500, 800 600, 1600 100" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.2" />
      <path d="M-200 520 C 450 520, 850 620, 1600 120" stroke="url(#flowGrad)" strokeWidth="0.4" opacity="0.3" />
      <path d="M-200 540 C 500 540, 900 640, 1600 140" stroke="url(#flowGrad)" strokeWidth="0.6" opacity="0.2" />
      
      {/* --- BOTTOM GLOW --- */}
      <path d="M-200 700 C 500 700, 800 350, 1600 450" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.1" filter="blur(4px)" />
    </g>
  </svg>
);

/*
const FlowField = () => (
  <svg className={styles.waveSvg} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.0)" />
        <stop offset="20%" stopColor="rgba(255, 255, 255, 0.2)" />
        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
        <stop offset="80%" stopColor="rgba(255, 255, 255, 0.2)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
      </linearGradient>
    </defs>
    
    <g className={styles.flowGroup}>
      
      
     
      <path d="M-200 750 C 300 750, 600 350, 1600 450" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      <path d="M-200 760 C 320 760, 620 360, 1600 460" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.7" />
      <path d="M-200 770 C 340 770, 640 370, 1600 470" stroke="url(#flowGrad)" strokeWidth="1.2" opacity="0.9" />
      <path d="M-200 780 C 360 780, 660 380, 1600 480" stroke="url(#flowGrad)" strokeWidth="0.8" opacity="0.6" />
      <path d="M-200 790 C 380 790, 680 390, 1600 490" stroke="url(#flowGrad)" strokeWidth="1" opacity="0.8" />
      
      <path d="M-200 680 C 300 680, 500 280, 1600 380" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.3" />
      <path d="M-200 700 C 320 700, 520 300, 1600 400" stroke="url(#flowGrad)" strokeWidth="0.6" opacity="0.4" />

      <path d="M-200 650 C 400 650, 800 750, 1600 250" stroke="url(#flowGrad)" strokeWidth="0.5" opacity="0.2" />
      <path d="M-200 670 C 450 670, 850 770, 1600 270" stroke="url(#flowGrad)" strokeWidth="0.4" opacity="0.3" />
      
      <path d="M-200 850 C 500 850, 800 500, 1600 600" stroke="url(#flowGrad)" strokeWidth="2" opacity="0.1" filter="blur(4px)" />
    </g>
  </svg>
);
*/

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      
      {/* LAYER 1: Deep Blue Space Gradient */}
      <div className={styles.bgGradient} />

      {/* LAYER 2: The Earth (Natural Colors) */}
      <div className={styles.earthLayer} />

      {/* LAYER 3: The High Density Flow Lines */}
      <div className={styles.waveContainer}>
        <FlowField />
      </div>

      {/* LAYER 4: Content (Manrope Font) */}
      <div className={styles.content}>
        
        <div className={styles.monoTag}>
          <span className={styles.tagLine} />
            A REPRODUCIBLITY STANDARD.
        </div>

        <h1 className={styles.title}>
          The Open <br />
          <span className={styles.thinText}>Platform   </span>
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
    </section>
  );
}