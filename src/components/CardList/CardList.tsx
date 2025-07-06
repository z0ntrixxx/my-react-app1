import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import styles from '../../assets/styles/CardList.module.css';
import { useFetchCards } from '../../hooks/useFetchCards';
import type { CardItem } from '../../types/card.types';
import type { CardListProps } from '../../types/card.types.ts';


const CardList: React.FC<CardListProps> = ({ limit = 3 }) => {
  const { cards, loading, error } = useFetchCards(limit);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card: CardItem, index) => {
        const cardClass = ['card1', 'card2', 'card3'][index % 3] as 'card1' | 'card2' | 'card3';

        return (
          <Link
            to="/cards"
            key={card.icon}
            className={styles.cardLink}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Card
              title={card.title}
              text={card.subtitle}
              image={`/${card.icon}`}
              cardClass={cardClass}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;