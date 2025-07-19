import React from 'react';
import styles from './Buttons.module.css';

const Buttons: React.FC = () => {
  const buttons = [
    { label: 'Button1', href: 'https://github.com', external: true },
    { label: 'Button2', href: 'https://github.com', external: true },
    { label: 'Button3', href: 'https://github.com', external: true },
    { label: 'Button4', href: 'https://github.com', external: true },
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
