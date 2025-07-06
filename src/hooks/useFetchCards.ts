import { useState, useEffect } from 'react';
import type { CardItem } from '../types/card.types';

export const useFetchCards = (limit = 3) => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/cards.json')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки данных');
        return res.json();
      })
      .then((data: CardItem[]) => {
        setCards(data.slice(0, limit));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  return { cards, loading, error };
};