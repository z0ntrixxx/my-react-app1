import React from 'react';

const CaptionSection: React.FC = () => {
  return (
    <section className="section caption" id="caption">
      <div className="caption__content">
        <div>
          <img className="background__content__img" src="/images/Mask.png" alt="кавычки" />
          <img className="caption__pic" src="/images/Eli.png" alt="фото" />
        </div>

        <div className="caption__title">
          <h2 className="caption__title__laed">
            Создание присутствия в Интернете — сложная задача. <br /> 
            Джобли позволяет рекрутерам легко вас заметить
          </h2>
          <div className="caption__subtitle">
            <h3 className="caption__subtitle__1">Чжао Цуй</h3>
            <p className="caption__subtitle__laed">Основатель Джобли.co</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptionSection;