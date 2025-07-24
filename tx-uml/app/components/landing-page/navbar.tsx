import React from "react";
import styles from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="" className={styles.logoName}>
        <img src="/TXUML-logo.svg" alt="TXUML Logo" />
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