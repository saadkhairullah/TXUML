import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section style={{ padding: '4rem', textAlign: 'center' }}>
    <h2 className={styles.heading}>TXUML testing text</h2>
    <p className={styles.subtext}>TXUML is an interactive map that highlights the locations 
        of all underground abandoned or active coal mines in the 
        state of Texas since the late 1800s.
    </p>
  </section>
);

export default Hero;
