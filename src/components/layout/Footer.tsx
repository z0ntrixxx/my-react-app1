import React from 'react';
import styles from '../../assets/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__logo}>Джобли.co</p>
        <p className={styles.footer__title}>Мы поддерживаем группу разнообразных молодых <br/> 
          креативных специалистов и инженеров.</p>
      </div>
      <div className={styles.footer__holder}>
        <p className={styles.footer__copy}>© 2023 Джобли.co Авторские права и все права защищены.</p>
        <p className={styles.footer__copyright}>Условия и положения · Политика конфиденциальности</p>
      </div>
    </footer>
  );
};

export default Footer;
