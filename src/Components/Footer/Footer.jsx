import React from "react";
import Mail from './img/mail.svg';
import Telegram from './img/telegram.svg';
import Skype from './img/skype.svg';
import s from './Footer.module.css';

const classTitle = `heading`;

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerWrapper}>
          <h2 className={classTitle}>Связаться со мной:</h2>
          <ul className={s.footerList}>
            <li className={s.footerItem}>
              <a className={s.footerLink} href="mailto:stepanstepanov180@gmail.com" aria-label="Почта" target='_blank' rel="nofollow noopener noreferrer">
                <span className="visually-hidden">Email</span>
                <img className={s.footerIcon} src={Mail} alt="Email"/>
              </a>
            </li>
            <li className={s.footerItem}>
              <a className={s.footerLink} href="https://telegram.me/stepan1950" aria-label="Телеграмм" target='_blank' rel="nofollow noopener noreferrer">
                <span className="visually-hidden">Telegram</span>
                <img className={s.footerIcon} src={Telegram} alt="Telegram"/>
              </a>
            </li>
            <li className={s.footerItem}>
              <a className={s.footerLink} href="skype:live:stepanstepanov180" aria-label="Скайп" target='_blank' rel="nofollow noopener noreferrer">
                <span className="visually-hidden">Skype</span>
                <img className={s.footerIcon} src={Skype} alt="Skype"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

