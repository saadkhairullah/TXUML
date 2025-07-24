import React from "react";
import Image from "../../assets/images/laptop-img.svg";
import MineLink from './MineLink';
import mine from "../../../public/mine.png";
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
          <img src={Image.src} alt="TXUML" />
        </div>
      </div>
      <div>
        <Faq/>
        {/* <MineLink
          imageSrc={mine}
          linkUrl="https://www.rrc.texas.gov/surface-mining/historical-coal-mining/mining-regions-fields-and-sites/"
          altText="Link to mine data source"
          description="Mine Data source"
        /> */}
      </div>
    </div>
  );
};

export default AboutSection;
