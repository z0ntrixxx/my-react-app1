import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, такой страницы не существует.</p>
      <Link to="/" className="back-home-link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;