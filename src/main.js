
import { createFilmCard } from './view/film-card.js';
import { createFilmListExtra } from './view/film-list-extra.js';
import { createMainNavigation } from './view/main-navigation.js';
import { createFooter } from './view/site-footer.js';
import { createHeader } from './view/site-header.js';
import { createListMovies } from './view/site-list.js';
import { createSortMovies } from './view/sort-movies.js';

const cardsCount = 5;
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');


render(mainElement, createMainNavigation(), 'beforeend');
render(mainElement, createSortMovies(), 'beforeend');
render(mainElement, createListMovies(), 'beforeend');

const filmContainer = mainElement.querySelector('.films');
const filmListContainer = filmContainer.querySelector('.films-list__container');

for (let i=0; i < cardsCount; i++){
  render(filmListContainer, createFilmCard(), 'beforeend');
}

render(filmContainer, createFilmListExtra(), 'beforeend');
render(filmContainer, createFilmListExtra(), 'beforeend');


render(headerElement, createHeader(), 'beforeend');
render(footerElement, createFooter(), 'beforeend');
