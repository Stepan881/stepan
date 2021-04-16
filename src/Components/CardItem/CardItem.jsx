import React from "react";
import s from "./CardItem.module.css";

const CardItem = (prop) => {
  return (
    <article className={s.card}>
      <div className={s.cardWrapper}>
        <h3 className={s.cardHead}>{prop.card.name}</h3>
        <picture>
          <source type="image/webp" srcSet={`./img/${prop.card.avatar}.webp`}/>
          <img className={s.cardFrontImg} src={`./img/${prop.card.avatar}.png`} alt={prop.card.name}/>
        </picture>

        <div className={s.cardBackContent}>
          <p className={s.cardDescription}>{prop.card.description}</p>
          <div className={s.cardWrapperBtn}>
            <a className={s.cardBtn} href={prop.card.link} target="_blank" rel="nofollow noopener noreferrer">Открыть</a>
            <a className={s.cardBtn} href={prop.card.git} target="_blank" rel="nofollow noopener noreferrer">GIT-HUB</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardItem;
