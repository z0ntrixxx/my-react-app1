import React from 'react';
import Slider from '../ui/Slider';

const PromoSection: React.FC = () => {
  return (
    <section className="section promo" id="promo">
      <div className="promo__content">
        <h2 className="promo__title section__title">
          Кандидаты с творческим и  <br />инженерным образованием
        </h2>
        <p className="promo__description">
          Это место, где можно проявить себя и получить работу начального уровня в передовых компаниях. Начните <br />
          свою карьеру здесь.
        </p>
        <div className="promo__buttons">
          <button className="promo__button">Присоединяйтесь сейчас</button>
          <p className="promo__button__text">
            Ищете кандидатов? <a className="promo__content__text" >Наймите сейчас</a>
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default PromoSection;