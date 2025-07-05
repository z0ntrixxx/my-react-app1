import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="section__CTA" id="CTA">
      <div className="CTA__all">
        <div className="CTA__tile">
          <h2 className="CTA__subtitle">Настройте свой профиль. <br /> Пусть работа сама вас найдет.</h2>
          <button className="CTA__button" type="button">Присоединяйтесь сейчас</button>
        </div>
        <img className="CTA__img" src="/images/Rest.png" alt="" />
      </div>
    </section>
  );
};

export default CTASection;