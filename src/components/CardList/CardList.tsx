import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import styles from '../../assets/styles/CardList.module.css';

interface Post {
  icon: string;
  title: string;
  subtitle: string;
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 3 }) => {
  const [cards, setCards] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('cards.json')
      .then((response) => {
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        return response.json();
      })
      .then((data: Post[]) => {
        setCards(data.slice(0, limit));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => {
        const cardClass = ['card1', 'card2', 'card3'][index % 3];

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
              cardClass={cardClass as any}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;