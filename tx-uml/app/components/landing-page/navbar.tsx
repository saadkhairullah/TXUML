import React from "react";
import ImageLogo from "../../assets/images/TXUML-logo.svg";
import styles from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="" className={styles.logoName}>
        <img src={ImageLogo.src} alt="TXUML Logo" />
        <h3>TXUML</h3>
      </a>
      <div className={styles.navLinks}>
        <a href="">Log in</a>
        <a href="">Sign up</a>
      </div>
    </nav>
  );
};

export default navbar;