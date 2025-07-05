// src/pages/CardsPage.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import CardList from '../components/CardList/CardList';

const CardsPage: React.FC = () => {
  return (
    <section style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', }}>Карточки</h2>
      <CardList limit={3} />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/" className="back-home-link">
          На главную
        </Link>
      </div>
    </section>
  );
};

export default CardsPage;