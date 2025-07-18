import React from 'react';
import styles from './Buttons.module.css';

const Buttons: React.FC = () => {
  const buttons = [
    { label: 'mapPage-button', href: './mapPage' },
    { label: 'settings-button', href: './settings'},
    { label: 'login-button', href: './login' },
    { label: 'Button4', href: './mapPage' },
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.href}
          className={styles.button}
          target={btn.external ? '_blank' : '_self'}
          rel={btn.external ? 'noopener noreferrer' : ''}
        >
          {btn.label}
        </a>
      ))}
    </div>
  );
};

export default Buttons;
