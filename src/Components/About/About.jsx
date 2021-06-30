import React from "react";
import s from './About.module.css';
import bgWebp from './img/bg-head.webp';
import bgJpeg from './img/bg-head.jpeg';
import { Link } from 'react-scroll'


const About = () => {
  return(
    <section className={s.about} id="about">
      <picture>
        <source type="image/webp" srcSet={bgWebp} />
        <img className={s.aboutBg} src={bgJpeg} alt="Логотип" />
      </picture>
      <div className="container">
        <div className={s.aboutWrapper}>
          <div className={s.aboutContent}>
            <h1 className="visually-hidden">Колчин Степан Создание сайтов</h1>
            <span className={s.aboutHead}>Колчин Степан</span>
            <p className={s.aboutProfession}>Frontend разработчик</p>
            <ul className={s.aboutList}>
              <li className={s.aboutItem}>Landing page</li>
              <li className={s.aboutItem}>Одностраничные сайты</li>
              <li className={s.aboutItem}>Многостраничные сайты</li>
              <li className={s.aboutItem}>Верстка сайтов по макетам</li>
            </ul>
            <Link className={s.aboutBtn}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={0}
                  to="portfolio"
            >Посмотреть портфолио</Link>
          </div>
          <Link
            className={s.aboutArrowBottom}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
            to="portfolio"
          />
        </div>
      </div>
    </section>

  );
};

export default About;
