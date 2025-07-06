import React from 'react';
import styles from '../../assets/styles/Card.module.css';
import type { CardProps } from '../../types/card.types';

const Card: React.FC<CardProps> = React.memo(({ title, text, image, cardClass }) => {
  return (
    <div className={`${styles.card} ${cardClass ? styles[cardClass] : ''}`}>
      {image && <img src={image} alt={title} className={styles['card-image']} />}
      <div className={styles['card-content']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <p className={styles['card-text']}>{text}</p>
      </div>
    </div>
  );
});

export default Card;