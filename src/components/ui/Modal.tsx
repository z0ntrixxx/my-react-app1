import React from 'react';
import type { FormEvent } from 'react';

const Modal:  React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Логика обработки формы
  };

  return (
    <div className="modal" id="modal">
      <div className="modal__overlay"></div>
      <div className="modal__window">
        <form className="modal__form" id="modalForm" onSubmit={handleSubmit}>
          <h2 className="modal__title">Регистрация</h2>
          <input className="modal__input" type="text" name="name" placeholder="Имя" required />
          <input className="modal__input" type="email" name="email" placeholder="Email" required />
          <div className="modal__buttons">
            <button className="modal__button" type="submit">OK</button>
            <button className="modal__button modal__button--cancel" type="button">Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;