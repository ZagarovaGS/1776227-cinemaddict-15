import { createFilmCardTemplate } from './view/film-card.js';
import { createFilmExtraListTemplate } from './view/film-list-extra.js';
import { createMainNavigationMenu } from './view/main-navigation.js';
import { createFooter } from './view/site-footer.js';
import { createHeader } from './view/site-header.js';
import { createMoviesListTemplate } from './view/site-list.js';
import { createMoviesSortMenu } from './view/sort-movies.js';

const cardsCount = 5;
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');


render(mainElement, createMainNavigationMenu(), 'beforeend');
render(mainElement, createMoviesSortMenu(), 'beforeend');
render(mainElement, createMoviesListTemplate(), 'beforeend');

const filmContainer = mainElement.querySelector('.films');
const filmListContainer = filmContainer.querySelector('.films-list__container');

for (let i=0; i < cardsCount; i++){
  render(filmListContainer, createFilmCardTemplate(), 'beforeend');
}

render(filmContainer, createFilmExtraListTemplate(), 'beforeend');
render(filmContainer, createFilmExtraListTemplate(), 'beforeend');


render(headerElement, createHeader(), 'beforeend');
render(footerElement, createFooter(), 'beforeend');
