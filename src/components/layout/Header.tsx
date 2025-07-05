import React from 'react';
import styles from '/src/assets/styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>Джобли</p>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li><button type="button" className={styles.header__recruiters}>Для рекрутеров</button></li>
          <li><button type="button" className={styles.header__signup}>Зарегистрироваться</button></li>
          <li><button type="button" className={styles.header__login} data-modal="open">Авторизоваться</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;