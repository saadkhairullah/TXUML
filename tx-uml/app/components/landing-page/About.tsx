import React from "react";


import styles from "./About.module.css";
import Faq from './Faq';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <h2>About Us</h2>
      <div className={styles.aboutContent}>
        <p>
          TXUML is an interactive map that highlights the locations of all
          underground abandoned or active coal mines in the state of Texas since
          the late 1800s.
        </p>
        <div className={styles.imageContainer}>
          <img src="/laptop-img.svg" alt="TXUML" />
        </div>
      </div>
      <div>
        <Faq/>
       
      </div>
    </div>
  );
};

export default AboutSection;
