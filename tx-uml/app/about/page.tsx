import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Hero from './Hero';
// import Footer from './Footer';
import styles from './page.module.css';
import Buttons from './Buttons';


const landingpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeIn}>
        <Header />
      </div>  
      <div className={styles.fadeIn}>
        <Hero />
      </div> 
      <div className={styles.fadeIn}>
        <Buttons />
      </div> 

    </div>
  )
}

export default landingpage;
