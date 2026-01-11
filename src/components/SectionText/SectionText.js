"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './SectionText.module.scss';

const SectionText = ({ 
  smallTitle, 
  title, 
  description, 
  buttonLabel, 
  onButtonClick, 
  align = 'center',
  maxWidth,
  customChildren // To insert filters or other elements
}) => {
  return (
    <div 
      className={`${styles.sectionTextContainer} ${styles[align]}`} 
    >
      <div className={styles.headerGroup}>
        <div className={styles.textGroup}>
            {smallTitle && <h4 className={styles.smallTitle}>{smallTitle}</h4>}
            {title && <h2 className={styles.title} style={{ maxWidth: maxWidth && maxWidth}}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
        </div> 
        
        {buttonLabel && (
            <button className={`${styles.ctaButton} ${styles.ctaButtonTop}`} onClick={onButtonClick}>
            {buttonLabel} <ArrowRight size={16} />
            </button>
        )}
      </div>

      {customChildren && <div className={styles.customContent}>{customChildren}</div>}
    </div>
  );
};

export default SectionText;
