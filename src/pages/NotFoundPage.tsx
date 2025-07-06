import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/NotFoundPage.module.css';
const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.nfpage}>
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, такой страницы не существует.</p>
      <Link to="/" className="back-home-link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;