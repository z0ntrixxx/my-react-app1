import React from 'react';
import styles from '../../assets/styles/Modal.module.css';

export type ModalType = 'login' | 'register';

export interface ModalProps {
  title: string;
  type: ModalType;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ title, type, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.window}>
        <h2 className={styles.title}>{title}</h2>

        <form>
          {type === 'register' && (
            <>
              <input className={styles.input} type="text" placeholder="Имя пользователя" required />
            </>
          )}
          <input className={styles.input} type="email" placeholder="Адрес электронной почты" required />
          <input className={styles.input} type="password" placeholder="Пароль" required />
          {type === 'register' && (
            <input className={styles.input} type="password" placeholder="Подтверждение пароля" required />
          )}

          <div className={styles.buttons}>
            <button className={styles.button} type="submit">
              {type === 'register' ? 'Зарегистрироваться' : 'Войти'}
            </button>
            <button className={`${styles.button} ${styles.cancel}`} type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;