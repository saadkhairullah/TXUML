import React from 'react'
import Image from 'next/image'
import styles from './page.module.css';

// this is where the about page frontend goes
const aboutpage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', gap: '3rem' }}>
      <h1 className={styles.headerBox}>About TXUML</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Image
          src={"/images/tunnel1.png"}
          alt="Underground Mine Tunnel"
          width={240}
          height={320}
          style={{ borderRadius: '4px' }}
        />
        <Image
          src={"/images/minemap.png"}
          alt="Texas Underground Mine Map"
          width={320}
          height={320}
          style={{ borderRadius: '4px' }}
        />
      </div>
      <div>
        <p className={styles.textBox}>
          TXUML is an interactive map that highlights the 
          locations of all underground abandoned or active 
          coal mines in the state of Texas since the late 1800s.
        </p>
      </div>
    </div>
  )
}

export default aboutpage
