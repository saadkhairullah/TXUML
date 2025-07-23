import React from "react";
import VideoBg from "./VideoBg";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <VideoBg />
      <div className={styles.heroContent}>
        <h1>
          Unearth the Data
          <br /> Build with Confidence.
        </h1>
        <p>Every Mine Has a Story. We Map Them All, from Depths to Data.</p>
        <a href="">Get started</a>
      </div>
    </div>
  );
};

export default Hero;