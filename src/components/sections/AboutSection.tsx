// src/components/AboutSection/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section__about" id="about">
      <h2 className="about__title">Все, что вы хотели знать, в одном месте.</h2>
      <div className="about__wrap">
        <div className="about__wrapper">
          <div className="about__inner">
            <div className="about__inner__war">
              <img className="about__avatar" src="/images/Ellipse.png" alt="" />
              <p className="about__subject">Пристия Чандра</p>
              <p className="about__caption">Старший дизайнер продукта</p>
              <div className="about__col">
                <p>Лос-Анджелес, США</p>
                <p className="about__slogan">Фрилансер на полный рабочий день</p>
              </div>
            </div>

            <div className="about__registertext">
              <p className="about__register">Фигма</p>
              <p className="about__register">UI Дизайн</p>
              <p className="about__register">UX Дизайн</p>
            </div>
          </div>
          
          <div>
            <p className="about__text1">Обо мне</p>
            <p className="about__slogan__text">
              Привет, я студент последнего курса, заканчивающий бакалавриат по информационным технологиям в QUT, 
              с опытом работы. Мы — компания, стоящая за невероятно успешным каналом DIY 5-Minute Crafts, 
              вдохновляющим и креативным каналом Bright Side.
            </p>
          </div>
          
          <p className="about__text">Портфолио</p>
          <div className="about__img">
            <img src="/images/Fram.png" alt="" />
            <img src="/images/Fram2.png" alt="" />
            <img src="/images/Fram3.png" alt="" />
          </div>
          
          <p className="about__ltext">Опыт работы</p>
          <div className="about__list__item">
            <div>
              <div className="about__conteiners">
                <div className="about__images">
                  <img src="/images/SMS.png" alt="#" />
                </div>
                <div className="about__email">
                  <p className="about__normol">Электронная почта</p>
                  <p className="about__normol1">pristia@gmail.com</p>
                </div>
              </div>

              <div className="about__conteiners">
                <div className="about__images">
                  <img src="/images/CALL.png" alt="" />
                </div>
                <div className="about__email">
                  <p className="about__normol2">Номер телефона</p>
                  <p className="about__normol3">0809021920139</p>
                </div>
              </div>
              
              <div>
                <button type="button" className="about__content">Скачать резюме</button>
                <button type="button" className="about__content2">Сообщение</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;