import Movie from './presenter/movie.js';
import MovieComponent from './presenter/movie-component.js';
import { cards } from './mock/card-mock.js';

/*const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;

const generateActualCards = (cardCount) => {
  let filmCards = 0;
  if (cardCount > 0){
    filmCards = new Array(CARDS_COUNT).fill().map(generateCard);
  }
  return filmCards;
};

const cards = generateActualCards(CARDS_COUNT);

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

render(
  mainElement,
  new SiteNavigationView(cards).getElement(),
  RenderPosition.BEFOREEND,
);
const movieList = new SiteMovieListView();
render(mainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
render(mainElement, movieList.getElement(), RenderPosition.BEFOREEND);

const filmBoard = mainElement.querySelector('.films');
const filmListContainer = filmBoard.querySelector('.films-list__container');

const generateEmptyList = () => {
  render(filmListContainer, new MovieListEmptyView().getElement(), RenderPosition.BEFOREEND);
};
if (cards === 0){
  generateEmptyList();
}

const generateCards = (count, container) => {
  if (cards){
    for (let i = 0; i < count; i++) {
      const cardTemplate = new FilmCardView(cards[i]);
      render(container, cardTemplate.getElement(), RenderPosition.BEFOREEND);
    }
  }
};
generateCards(CARDS_COUNT, filmListContainer);

const topRatedElement = new ExtraFilmView(cards[getRandomBetween(0,cards.length)], EXTRA_FILM_TYPES[0]);

render(filmBoard, topRatedElement, RenderPosition.BEFOREEND);
const extraContainer = mainElement.querySelector('.films-list--extra');
const topRatedContainer = extraContainer.querySelector('.films-list__container');
generateCards(EXTRA_CARDS_COUNT, topRatedContainer);


const mostCommentedElement = new ExtraFilmView(cards[1], EXTRA_FILM_TYPES[1]);

render(filmBoard, mostCommentedElement, RenderPosition.BEFOREEND);

generateCards(EXTRA_CARDS_COUNT, mostCommentedElement.getElement().querySelector('.films-list__container'));

render(headerElement, new SiteHeaderView(), RenderPosition.BEFOREEND);
render(footerElement, new SiteFooterView(), RenderPosition.BEFOREEND);


const filmCardView = new FilmCardView(cards);

filmCardView.setOpenPopupByTitleHandler(()=>initPopup(filmBoard));
filmCardView.setOpenPopupByPosterHandler(()=>initPopup(filmBoard));
filmCardView.setOpenPopupByCommentsHandler(()=>initPopup(filmBoard));


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

showMoreBtn.addEventListener('click', showMoreCards);*/

new Movie().init();
new MovieComponent().init();


