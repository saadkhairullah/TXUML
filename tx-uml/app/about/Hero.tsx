import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.heroSection}>
    <div className={styles.textContent}>
      <h2 className={styles.heading}>TXUML testing text</h2>
      <p className={styles.subtext}>TXUML is an interactive map that highlights the locations 
          of all underground abandoned or active coal mines in the 
          state of Texas since the late 1800s.
      </p>
    </div>
    <div>
    <Image
        src={"/images/tunnel1.png"}
        alt="Underground Mine Tunnel"
          width={420}
        height={480}
        style={{ borderRadius: '4px' }}
        />
    </div>
  </section>
);

export default Hero;
