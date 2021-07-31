import { createListEmpty } from './view/site-list-empty.js';
import { createListFilter } from './view/site-list-filter.js';
import { createListMovies } from './view/site-list.js';
import {createSiteMenuLoadingTemplate} from './view/site-loading.js';
import { createListNoExtra } from './view/site-no-extra.js';
import { createPopupAddComment } from './view/site-popup-add-comment.js';
import { createPopupWithoutComment } from './view/site-popup-without-comment.js';
import { createListSort } from './view/site-list-sort.js';
import { createPopup } from './view/site-popap.js';
import { createStat } from './view/site-stat.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

render(headerElement, createSiteMenuLoadingTemplate, 'beforeend');
render(mainElement, createListMovies, 'beforeend');
render(mainElement, createListEmpty, 'beforeend');
render(mainElement, createListNoExtra, 'beforeend');
render(mainElement, createListFilter, 'beforeend');
render(mainElement, createListSort, 'beforeend');
render(mainElement, createPopup, 'beforeend');
render(mainElement, createPopupAddComment, 'beforeend');
//render(mainElement, createPopupWithoutComment, 'beforeend');
render(mainElement, createStat, 'beforeend');
