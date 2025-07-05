import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section__features" id="features">
      <div className="features__content">
        <img className="features__img" src="/images/frame2.png" alt="" />
        <div className="features__wrap">
          <h2 className="features__title">Связаться с рекрутером</h2>
          <p className="features__subtitle">
            Получите мгновенный доступ к тщательно отобранному пулу лучших творческих и 
            технических талантов, которые активно ищут свою следующую работу. 
            <br /> Найдите высококвалифицированную работу!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;