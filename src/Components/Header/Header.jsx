import React, {useState} from "react";
import s from './Header.module.css';
import logoWebp from './img/logo.webp';
import logoJpeg from './img/logo.jpeg';

const headerWrapper = `${s.headerWrapper} container`;


const Header = () => {

  const [burger, setBurger] = useState(false);
  const nav = `${s.nav} ${!burger ? s.navOpen : ''}`;

  const handlerMenuOpen = () => {
    setBurger(true)
    document.querySelector(`body`).style.overflowY = `hidden`;
  };

  const handlerMenuClose = () => {
    setBurger(false)
    document.querySelector(`body`).style.overflowY = `auto`;
  };

  return (
    <header className={s.header}>
      <div className={headerWrapper}>
        <a className={s.headerLogoLink} href="./index.html" aria-label="Логотип">
          <picture>
            <source type="image/webp" srcSet={logoWebp}/>
            <img className={s.headerLogo} src={logoJpeg} alt="Логотип"/>
          </picture>
        </a>

        <button
          className={s.burger}
          onClick={() => handlerMenuOpen() }
        >
          <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"/>
            <path d="M95,44H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
            <path d="M95,66H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
            <path d="M95,88H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z"/>
          </svg>
        </button>
        <nav className={nav}>
        <div className={s.overlay}
             onClick={() => handlerMenuClose()}
        />
          <button
            className={s.burgerClose}
            onClick={() => handlerMenuClose()}
          >
            <svg version="1.1" viewBox="0 0 512 512">
              <g className="st2" id="layer">
                <g className="st0">
                  <line className="st1" x1="169.449" x2="342.551" y1="169.449" y2="342.551"/>
                  <line
                className="st1" x1="342.551" x2="169.449" y1="169.449" y2="342.551"/>
                </g>
                <g className="st0">
                  <path d="M256,59c26.602,0,52.399,5.207,76.677,15.475c23.456,9.921,44.526,24.128,62.623,42.225    c18.098,18.098,32.304,39.167,42.226,62.624C447.794,203.601,453,229.398,453,256c0,26.602-5.206,52.399-15.475,76.677    c-9.922,23.456-24.128,44.526-42.226,62.623c-18.097,18.098-39.167,32.304-62.623,42.226C308.399,447.794,282.602,453,256,453    c-26.602,0-52.399-5.206-76.676-15.475c-23.457-9.922-44.526-24.128-62.624-42.226c-18.097-18.097-32.304-39.167-42.225-62.623 C64.207,308.399,59,282.602,59,256c0-26.602,5.207-52.399,15.475-76.676c9.921-23.457,24.128-44.526,42.225-62.624 c18.098-18.097,39.167-32.304,62.624-42.225C203.601,64.207,229.398,59,256,59 M256,43C138.363,43,43,138.363,43,256 s95.363,213,213,213s213-95.363,213-213S373.637,43,256,43L256,43z"/>
                </g>
              </g>
              <g id="expanded"><g><path d="M267.314,256l80.894-80.894c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256,244.686    l-80.894-80.894c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L244.686,256l-80.894,80.894    c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256,267.314l80.894,80.894    c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L267.314,256z"/>
              <path
                d="M256,59c26.602,0,52.399,5.207,76.677,15.475c23.456,9.921,44.526,24.128,62.623,42.225    c18.098,18.098,32.304,39.167,42.226,62.624C447.794,203.601,453,229.398,453,256c0,26.602-5.206,52.399-15.475,76.677    c-9.922,23.456-24.128,44.526-42.226,62.623c-18.097,18.098-39.167,32.304-62.623,42.226C308.399,447.794,282.602,453,256,453    c-26.602,0-52.399-5.206-76.676-15.475c-23.457-9.922-44.526-24.128-62.624-42.226c-18.097-18.097-32.304-39.167-42.225-62.623    C64.207,308.399,59,282.602,59,256c0-26.602,5.207-52.399,15.475-76.676c9.921-23.457,24.128-44.526,42.225-62.624    c18.098-18.097,39.167-32.304,62.624-42.225C203.601,64.207,229.398,59,256,59 M256,43C138.363,43,43,138.363,43,256    s95.363,213,213,213s213-95.363,213-213S373.637,43,256,43L256,43z"/>
              </g>
              </g>
            </svg>
          </button>
          <p>Меню</p>
          <ul className={s.navList}>
            <li>
              В разработке :(
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
