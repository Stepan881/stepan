import React, {useState} from "react";
import s from './Portfolio.module.css';
import CardItem from "../CardItem/CardItem";
import Cards from '../../db/db.js';
import Btn from "./Btn";
import { Link } from 'react-scroll'

const classTitle = `${s.portfolioHead} heading`;

const Buttons = [
  {
    id: 1,
    value: `Все`,
    siteType: ``,
    active: true
  },
  {
    id: 2,
    value: `Одностраничные сайты`,
    siteType: `onePage`,
    active: false
  },
  {
    id: 3,
    value: `Многостраничные сайты`,
    siteType: `multiPage`,
    active: false
  }
];

const Portfolio = () => {
  const [cards, setCards] = useState(Cards);
  const [buttons, setButtons] = useState(Buttons);
  const [showMore, setShowMore] = useState(false);

  const handlerNavLink = (id, siteType) => {
    setButtons(buttons.map(btn =>
      btn = {
        id: btn.id,
        value: btn.value,
        siteType: btn.siteType,
        active: btn.id === id,
      }
    ));

    if (siteType === '') {
      setCards(Cards);
    } else {
      setCards(Cards.filter(card => {
        return card.siteType === siteType;
      }));
    }

  };

  let numberOfItems = showMore ? cards.length : 3;
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={s.portfolio} id='portfolio'>
      <div className="container">
        <div className={s.portfolioWrapper}>
          <h2 className={classTitle}>Портфолио</h2>
          <nav className={s.portfolioNav}>
            <ul className={s.portfolioList}>
              {buttons.map(btn => <Btn key={btn.id} btn={btn} handlerNavLink={handlerNavLink}/>)}
            </ul>
          </nav>

          <div className={s.portfolioCardWrapper}>
            {cards.slice(0, numberOfItems).map(card => {
              return <CardItem key={card.id} card={card}/>
            })}
          </div>

            <div className={s.about}>
              <Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={0}
                to="portfolio"

                className={s.aboutBtn}
                aria-label="Развернуть все"
                onClick={() => handleClick()}
              >{showMore ? "Свернуть" : "Развернуть"}
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
