import React from 'react';
import type { StaticImageData } from 'next/image';
import styles from './MineLink.module.css';

interface Link {
  imageSrc: string | StaticImageData;
  linkUrl: string;
  altText?: string;
  description?: string;
}

const MineLink: React.FC<Link> = ({
  imageSrc,
  linkUrl,
  altText = 'Clickable image',
  description = '',
}) => {
  return (
    <a 
      href={linkUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.container}
    >
      <div className={styles.text}>{description}</div>
      <img src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src} alt={altText} className={styles.image} />
    </a>
  );
};

export default MineLink;
