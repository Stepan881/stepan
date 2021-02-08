function render (container, template, place = `beforeend`) {
  container.insertAdjacentHTML(place, template);    
}

const cardTemplate = (card) => {
  return (`
    <article class="card">         
      <div class="card__wrapper">
        <h3 class="card__head">${card.name} </h3>
        <img class="card__front-img" src="./img/${card.avatar}" alt="${card.name}">
          <div class="card__back-content">
            <p class="card__description">${card.description} </p>
            <a class="card__btn" href="${card.link}" target="_blank">Открыть</a>
            <a class="card__btn" href="${card.git}" target="_blank">GIT-HUB</a>
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