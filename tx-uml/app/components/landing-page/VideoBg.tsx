import React from "react";
import styles from "./VideoBg.module.css";


const VideoBg = () => {
  return (
    <video controls autoPlay muted loop className={styles.video}>
      <source src="/videos/intro.webm" type="video/webm" />
      <source src="/videos/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBg;