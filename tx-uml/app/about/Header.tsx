import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>TXUML</h1>
  </header>
);

export default Header;
