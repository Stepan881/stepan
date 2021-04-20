import React from "react";
import s from './Info.module.css';

const classTitle = `${s.infoHeader} heading`;

const Info = () => {
  return (
    <section className={s.info}>
      <div className="container">
        <div className={s.infoWrapper}>
          <h2 className={classTitle}>Верстаю сайты с использованием:</h2>
          <ul className={s.infoList}>
            <li className={s.infoItem}>
              <p>Html5</p>
            </li>
            <li className={s.infoItem}>
              <p>Scss</p>
            </li>
            <li className={s.infoItem}>
              <p>JavaScript</p>
            </li>
            <li className={s.infoItem}>
              <p>БЭМ</p>
            </li>
            <li className={s.infoItem}>
              <p>Gulp</p>
            </li>
          </ul>

          <div className={s.infoContent}>
            <p className={s.infoText}>Адаптивные, кроссбраузерные.</p>
            <p className={s.infoText}>Есть опыт в командной работе. GitHub GitLab.</p>
            <p className={s.infoText}>Хорошие знания JS</p>
            <p className={s.infoText}>Основы React, PHP</p>
            <p className={s.infoText}>Отличное знание Photoshop и других редакторов (avacode figma)</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Info;
