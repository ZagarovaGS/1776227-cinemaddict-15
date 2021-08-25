import SiteMovieListView from './view/site-list.js';
import SiteFooterView from './view/site-footer.js';
import SortTemplateView from './view/sort-movies.js';
import SiteNavigationView from './view/main-navigation.js';
import FilmCardView from './view/film-card.js';
import SiteHeaderView from './view/site-header.js';
import PopupCommentsView from './view/popup-comment.js';
import PopupFilmsTypesView from './view/popup-types-films.js';
import FilmPopupView from './view/popup.js';
import ExtraFilmView from './view/film-list-extra.js';
import { generateCard } from './mock/card-mock.js';
import { EXTRA_FILM_TYPES } from './mock/card-constants.js';
import { generateComment } from './mock/comments-mock.js';
import { render, RenderPosition} from './utils.js';
import { getRandomBetween } from './mock/utils-mock.js';

const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;

const cards = new Array(CARDS_COUNT).fill().map(generateCard);
const popup = generateCard();

const userComment = generateComment();


const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

render(
  mainElement,
  new SiteNavigationView(cards).getElement(),
  RenderPosition.BEFOREEND,
);
const movieList = new SiteMovieListView();
render(mainElement, new SortTemplateView().getElement(), RenderPosition.BEFOREEND);
render(mainElement, movieList.getElement(), RenderPosition.BEFOREEND);

const filmBoard = mainElement.querySelector('.films');
const filmListContainer = filmBoard.querySelector('.films-list__container');

const generateCards = (count, container) => {
  for (let i = 0; i < count; i++) {
    const cardTemplate = new FilmCardView(cards[i]);
    render(container, cardTemplate.getElement(), RenderPosition.BEFOREEND);
  }
};
generateCards(CARDS_COUNT, filmListContainer);

const topRatedElement = new ExtraFilmView(cards[getRandomBetween(0,cards.length)], EXTRA_FILM_TYPES[0]);

render(filmBoard, topRatedElement.getElement(), RenderPosition.BEFOREEND);
const extraContainer = mainElement.querySelector('.films-list--extra');
const topRatedContainer = extraContainer.querySelector('.films-list__container');
generateCards(EXTRA_CARDS_COUNT, topRatedContainer);

const mostCommentedElement = new ExtraFilmView(cards[1], EXTRA_FILM_TYPES[1]);
render(filmBoard, mostCommentedElement.getElement(), RenderPosition.BEFOREEND);

generateCards(EXTRA_CARDS_COUNT, mostCommentedElement.getElement().querySelector('.films-list__container'));

render(headerElement, new SiteHeaderView().getElement(), RenderPosition.BEFOREEND);
render(footerElement, new SiteFooterView().getElement(), RenderPosition.BEFOREEND);


const popupView = new FilmPopupView(popup);

let countPopupParts = 0;
const createPopup = () =>{

  countPopupParts++;
  const popupTypesView = new PopupFilmsTypesView();
  const popupCommentsView = new PopupCommentsView(userComment);
  popupView.getElement().append(popupTypesView.getElement());
  popupView.getElement().append(popupCommentsView.getElement());
  filmBoard.append(popupView.getElement());
  if (countPopupParts > 1){
    popupTypesView.getElement().remove();
    popupCommentsView.getElement().remove();
  }
};


const cardTitle = filmBoard.querySelectorAll('.film-card__title');
cardTitle.forEach((title)=>title.addEventListener('click', createPopup));
const cardPosters = filmBoard.querySelectorAll('.film-card__poster');
cardPosters.forEach((posters)=>posters.addEventListener('click', createPopup ));
const cardComments = filmBoard.querySelectorAll('.film-card__comments');
cardComments.forEach((comment)=>comment.addEventListener('click', createPopup));
const popupCloseBtn = popupView.getCloseBtn();
popupCloseBtn.addEventListener('click', () =>{
  popupView.getElement().remove();
});

const showMoreBtn = mainElement.querySelector('.films-list__show-more');

let cardsCount = 0;
const MAX_COUNT = 21;

const showMoreCards = () => {
  cardsCount++;
  const totalCount = CARDS_COUNT + cardsCount*CARDS_COUNT;
  if (
    totalCount < MAX_COUNT
  ) {
    generateCards(CARDS_COUNT, filmListContainer);
  }
  if (
    totalCount > MAX_COUNT
  ) {
    generateCards(MAX_COUNT % CARDS_COUNT, filmListContainer);
    showMoreBtn.style = 'display: none';
  }
  if (
    totalCount === MAX_COUNT &&
    MAX_COUNT % CARDS_COUNT === 0
  ) {
    generateCards(CARDS_COUNT, filmListContainer);
    showMoreBtn.style = 'display: none';
  }
};

showMoreBtn.addEventListener('click', showMoreCards);
