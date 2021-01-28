function render (container, template, place = `beforeend`) {
  container.insertAdjacentHTML(place, template);    
}

const cardTemplate = (card) => {
  return (`
    <article class="card">
      <div class="card__wrapper">
        <div class="card__face card__front">
          <h3 class="card__head">${card.name}</h3>
          <img class="card__front-img" src="./img/${card.avatar}" alt="${card.name}">
        </div>
        <div class="card__face card__back">
          <div class="card__back-content">
            <img class="card__front-img card__back-img" src="./img/${card.avatar}" alt="${card.name}">
            <h3 class="card__head">${card.name}</h3>
            <p class="card__description">${card.description}</p>
            <a class="card__btn" href="${card.link}" target="_blank">Открыть</a>
            <a class="card__btn" href="${card.git}" target="_blank">GIT-HUB</a>
            <button class="card__btn js-card__btn">Смотреть в окне</button>
          </div>  
        </div>
      </div>
    </article>
  `);
}


const portfolioCardWrapper = document.querySelector(`.portfolio__card-wrapper`);
let cardAll = [];

const windowWidth = window.innerWidth;

const widthPage = () => {
  if (windowWidth >= 1440) return 7;
  if (windowWidth >= 768) return 5;
  return 2;
}
const visivleCardBtn = document.querySelector(`.portfolio .about__btn`);

const renderCard = (data , link = `Все`) => {
  portfolioCardWrapper.querySelectorAll(`.card`).forEach(el=> el.remove());
  if (link === 'Все') {
    data.forEach((card, i) => {
      render(portfolioCardWrapper, cardTemplate(card));

    });
  } else {
    let newData = data.filter(name => name.siteType === link);
    newData.forEach(data => {
      render(portfolioCardWrapper, cardTemplate(data));
    });
  }
  visivleCardBtn.style.display = `flex`;
  const cards = document.querySelectorAll(`.portfolio__card-wrapper .card`).forEach((el, i) => {
    if (i > widthPage()) {
      el.style.display = `none`;
    }
  });
  
}

visivleCardBtn.addEventListener(`click`, () => {
  portfolioCardWrapper.querySelectorAll(`.card`).forEach(el => el.style.display = `block`);
  visivleCardBtn.style.display = `none`;
})


const get = () => {
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
  });

  fetch("./db/db.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      cardAll = data;
      renderCard(data);
      sortLink(data);
    });
}
get();

function sortLink (data) {
  const links = document.querySelectorAll(`.portfolio__link`);
  links.forEach(link => {
    link.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      links.forEach(el => {
        el.classList.remove(`portfolio__link--active`);
      });
      link.classList.add(`portfolio__link--active`);

      renderCard(data, link.textContent);
    });
   
  });
}

const footer = document.querySelector(`.footer`);

const result = (num) => {
  let res = [];
  switch(num) {
    case -1: 
      res = [400, 1];
      break;
    case 0: 
      res = [800, 1];
      break;
    case 1: 
      res = [1440, 1];
      break;
    case 2: 
      res = [100, 1];
      break;
    default: res = [800, 1];
  }

  return res;
}

const openClosePopup = () => {
  const cardPopup = document.querySelector(`.card-popup`);
  const popupIframe = cardPopup.querySelector(`.card-popup__iframe`);
  portfolioCardWrapper.addEventListener(`click`, (evt) => {    
    if (evt.target.matches(`.js-card__btn`)) {
      evt.preventDefault();
      let name = evt.target.closest(`.card`).querySelector(`.card__head`).textContent;
      renamePopup(name);
      cardPopup.classList.add(`card-popup--open`);
      document.querySelector(`body`).style.cssText = `overflow: hidden`;
      popupIframe.style.cssText = `
      max-width: 100%;
      min-width: 100%;
    `;
    }
  })


  cardPopup.addEventListener(`click`, evt => {


    window.onpopstate = function(event) {
      console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
    }


    if (evt.target.matches(`.card-popup__close`)) {
      evt.preventDefault();
      cardPopup.classList.remove(`card-popup--open`);
      document.querySelector(`body`).style.cssText = `overflow: auto`;
    }
    if (evt.target.matches(`.card-popup--open`)) {
      evt.preventDefault();
      cardPopup.classList.remove(`card-popup--open`);
      document.querySelector(`body`).style.cssText = `overflow: auto`;
    }

    if (evt.target.matches(`.card-popup__btn`)) {

      if (evt.target.dataset.scale === `link`) return;

      evt.preventDefault();
      let zoom = evt.target.dataset.scale;

      let size = `px`;
      let res = result(+zoom);

      if (+zoom === 2) {
        size = `%`;
      }
      popupIframe.style.cssText = `
        max-width: ${res[0]}${size};
        min-width: ${res[0]}${size};
        height: 100%;
        transform:scale(${res[1]});
      `;
    }

  });

  document.addEventListener(`keydown`, (e) => {
    if(e.keyCode === 27 && cardPopup.matches(`.card-popup--open`)) {
      cardPopup.classList.remove(`card-popup--open`);
      document.querySelector(`body`).style.cssText = `overflow: auto`;
    }
  });

}
openClosePopup();

function renamePopup(name) {
  let card = cardAll.filter(n => n.name === name);
  const cardPopup = document.querySelector(`.card-popup`);
  
  let cardBtns = cardPopup.querySelectorAll(`.card-popup__btn`);
  cardPopup.querySelector(`.card-popup__iframe`).src = card[0].link;
  cardBtns[0].href = card[0].link;

}

const scroll = () => {
  const smoothLinks = document.querySelectorAll('.js-scroll');
  
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
     
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };
}
scroll();