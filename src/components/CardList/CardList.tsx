import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from '../../assets/styles/CardList.module.css';

interface Post {
  icon: string;
  title: string;
  subtitle: string;
}

const CardList: React.FC = () => {
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
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => {
        const cardClass = ['card1', 'card2', 'card3'][index % 3]; 

        return (
          <Card
            key={card.icon}
            title={card.title}
            text={card.subtitle}
            image={`/${card.icon}`}
            cardClass={cardClass as any}
          />
        );
      })}
    </div>
  );
};

export default CardList;