import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Hero from './Hero';
// import Footer from './Footer';
import styles from './page.module.css';

const landingpage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />

    </div>
  )
}

export default landingpage;
