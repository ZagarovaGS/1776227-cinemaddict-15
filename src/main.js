import { createFilmCardTemplate } from './view/film-card.js';
import { createFilmExtraListTemplate } from './view/film-list-extra.js';
import { createMainNavigationMenu } from './view/main-navigation.js';
import { createFooter } from './view/site-footer.js';
import { createHeader } from './view/site-header.js';
import { createMoviesListTemplate } from './view/site-list.js';
import { createMoviesSortTemplate } from './view/sort-movies.js';
import { generateCard } from './mock/card-mock.js';
import { createPopupTemplate } from './view/popup.js';

console.log(generateCard());
const CARDS_COUNT = 5;

const card = new Array(CARDS_COUNT).fill().map(generateCard);
const popup = generateCard();

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');


render(mainElement, createMainNavigationMenu(), 'beforeend');
render(mainElement, createMoviesSortTemplate(), 'beforeend');
render(mainElement, createMoviesListTemplate(), 'beforeend');

const filmContainer = mainElement.querySelector('.films');
const filmListContainer = filmContainer.querySelector('.films-list__container');

for (let i=0; i < CARDS_COUNT; i++){
  render(filmListContainer, createFilmCardTemplate(card[i]), 'beforeend');
}

render(filmContainer, createFilmExtraListTemplate(card), 'beforeend');
render(filmContainer, createFilmExtraListTemplate(card), 'beforeend');


render(headerElement, createHeader(), 'beforeend');
render(footerElement, createFooter(), 'beforeend');

const cardTitle = filmContainer.querySelectorAll('.film-card__title');
const cardPoster = filmContainer.querySelectorAll('.film-card__poster');

const handleShowPopup = () => {
render(filmContainer, createPopupTemplate(popup), 'beforeend');
const popupCloseBtn = filmContainer.querySelector('.film-details__close-btn');
const popupContainer = filmContainer.querySelector('.film-details');
const closePopup = () => popupContainer.style = "display: none";

popupCloseBtn.addEventListener('click', closePopup);
};

cardTitle.forEach(title =>title.addEventListener('click', handleShowPopup));
cardPoster.forEach(poster =>poster.addEventListener('click', handleShowPopup));


