import React, { useState } from 'react';
import styles from '../../assets/styles/Header.module.css';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<'Регистрация' | 'Вход'>('Регистрация');
  const [modalType, setModalType] = useState<'login' | 'register'>('register');

  const openRegisterModal = () => {
    setModalTitle('Регистрация');
    setModalType('register');
    setIsModalOpen(true);
  };

  const openLoginModal = () => {
    setModalTitle('Вход');
    setModalType('login');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.header__logo}>
        Джобли
      </a>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li>
            <Link to="/not-found" className={styles.header__recruiters}>
              Для рекрутеров
            </Link>
          </li>
          <li>
            <button type="button" className={styles.header__signup} onClick={openRegisterModal}>
              Зарегистрироваться
            </button>
          </li>
          <li>
            <button type="button" className={styles.header__login} onClick={openLoginModal}>
              Авторизоваться
            </button>
          </li>
        </ul>
      </nav>

      {/* Рендерим модалку с нужным типом */}
      {isModalOpen && <Modal title={modalTitle} type={modalType} onClose={closeModal} />}
    </header>
  );
};

export default Header;