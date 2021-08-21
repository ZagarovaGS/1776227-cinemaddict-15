import { createFilmCardTemplate } from './view/film-card.js';
import { createFilmExtraListTemplate } from './view/film-list-extra.js';
import { createMainNavigationMenu } from './view/main-navigation.js';
import { createFooter } from './view/site-footer.js';
import { createHeader } from './view/site-header.js';
import { createMoviesListTemplate } from './view/site-list.js';
import { createMoviesSortTemplate } from './view/sort-movies.js';
import { generateCard } from './mock/card-mock.js';
import { createPopupTemplate } from './view/popup.js';
import { EXTRA_FILM_TYPES } from './mock/card-constants.js';
import { generateComment } from './mock/comments-mock.js';

const CARDS_COUNT = 5;

const cards = new Array(CARDS_COUNT).fill().map(generateCard);
const popup = generateCard();
const userComment = generateComment();
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

render(
  mainElement,
  createMainNavigationMenu(cards),
  'beforeend',
);
render(mainElement, createMoviesSortTemplate(), 'beforeend');
render(mainElement, createMoviesListTemplate(), 'beforeend');

const filmContainer = mainElement.querySelector('.films');
const filmListContainer = filmContainer.querySelector('.films-list__container');

const generateCards = (count) => {
  for (let i = 0; i < count; i++) {
    render(filmListContainer, createFilmCardTemplate(cards[i]), 'beforeend');
  }
};
generateCards(CARDS_COUNT);

render(
  filmContainer,
  createFilmExtraListTemplate(cards[0], EXTRA_FILM_TYPES[0]),
  'beforeend',
);
render(
  filmContainer,
  createFilmExtraListTemplate(cards[1], EXTRA_FILM_TYPES[1]),
  'beforeend',
);

render(headerElement, createHeader(), 'beforeend');
render(footerElement, createFooter(), 'beforeend');

const cardTitle = filmContainer.querySelectorAll('.film-card__title');
const cardPoster = filmContainer.querySelectorAll('.film-card__poster');

const handleShowPopup = () => {
  render(filmContainer, createPopupTemplate(popup, userComment), 'beforeend');
};

cardTitle.forEach((title) => title.addEventListener('click', handleShowPopup));
cardPoster.forEach((poster) =>
  poster.addEventListener('click', handleShowPopup),
);

const showMoreBtn = mainElement.querySelector('.films-list__show-more');

let cardsCount = 0;
const MAX_COUNT = 21;

const showMoreCards = () => {
  cardsCount++;
  const totalCount = CARDS_COUNT + cardsCount*CARDS_COUNT;
  if (
    totalCount < MAX_COUNT
  ) {
    generateCards(CARDS_COUNT);
  }
  if (
    totalCount > MAX_COUNT
  ) {
    generateCards(MAX_COUNT % CARDS_COUNT);
    showMoreBtn.style = 'display: none';
  }
  if (
    totalCount === MAX_COUNT &&
    MAX_COUNT % CARDS_COUNT === 0
  ) {
    generateCards(CARDS_COUNT);
    showMoreBtn.style = 'display: none';
  }
};

showMoreBtn.addEventListener('click', showMoreCards);
