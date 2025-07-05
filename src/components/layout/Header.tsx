import React from 'react';
import styles from '/src/assets/styles/Header.module.css';
import { Link } from 'react-router-dom';

<li>
  <Link to="/not-found" className={styles.header__recruiters}>
    Для рекрутеров
  </Link>
</li>
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.header__logo}>Джобли</a>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li><Link to="/not-found" className={styles.header__recruiters}>Для рекрутеров</Link></li>
          <li><button type="button" className={styles.header__signup}>Зарегистрироваться</button></li>
          <li><button type="button" className={styles.header__login} data-modal="open">Авторизоваться</button></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;