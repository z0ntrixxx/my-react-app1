import React from 'react';
import { Link } from 'react-router-dom';
const CTASection: React.FC = () => {
  return (
    <section className="section__CTA" id="CTA">
      <div className="CTA__all">
        <div className="CTA__tile">
          <h2 className="CTA__subtitle">Настройте свой профиль. <br /> Пусть работа сама вас найдет.</h2>
          <Link to="/not-found" style={{ textDecoration: 'none' }}>
          <button className="CTA__button" type="button">Присоединяйтесь сейчас </button></Link>
        </div>
        <img className="CTA__img" src="/images/Rest.png" alt="" />
      </div>
    </section>
  );
};

export default CTASection;