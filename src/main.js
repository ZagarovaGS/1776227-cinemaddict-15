
import { createFilmCard } from './view/filmCard.js';
import { createFilmListExtra } from './view/filmListExtra.js';
import { createMainNavigation } from './view/main-navigation.js';
import { createFooter } from './view/site-footer.js';
import { createHeader } from './view/site-header.js';
import { createListMovies } from './view/site-list.js';
import { createSortMovies } from './view/sort-movies.js';

const countCards = 5;
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

for (let i=0; i < countCards; i++){
render(filmListContainer, createFilmCard(), 'beforeend');
}

render(filmContainer, createFilmListExtra(), 'beforeend');
render(filmContainer, createFilmListExtra(), 'beforeend');


render(headerElement, createHeader(), 'beforeend');
render(footerElement, createFooter(), 'beforeend');






