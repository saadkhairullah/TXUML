import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section style={{ padding: '4rem', textAlign: 'center' }}>
    <h2 className={styles.heading}>TXUML testing text</h2>
    <p className={styles.subtext}>TXUML is an interactive map that highlights the locations 
        of all underground abandoned or active coal mines in the 
        state of Texas since the late 1800s.
    </p>
    <Image
            src={"/images/tunnel1.png"}
            alt="Underground Mine Tunnel"
             width={240}
            height={320}
            style={{ borderRadius: '4px' }}
            />
  </section>
);

export default Hero;
