import SiteMovieListView from '../view/site-list.js';
import SortView from '../view/sort-movies.js';
import FilmCardView from '../view/film-card.js';
import ExtraFilmView from '../view/film-list-extra.js';
import MovieListEmptyView from '../view/list-empty.js';
import SiteNavigationView from '../view/main-navigation.js';
import FilmPopupView from '../view/popup.js';
import PopupCommentsView from '../view/popup-comment.js';
import PopupFilmsTypesView from '../view/popup-types-films.js';
import SiteFooterView from '../view/site-footer.js';
import SiteHeaderView from '../view/site-header.js';
import { render, RenderPosition } from '../render-utils.js';
import {cards, CARDS_COUNT} from '../view/render-cards.js';
import { getRandomBetween } from '../mock/utils-mock.js';
import { EXTRA_FILM_TYPES, EXTRA_CARDS_COUNT } from '../mock/card-constants.js';
import { initPopup } from '../popup-utils.js';

let cardsCount = 0;
const MAX_COUNT = 21;


export default class Movie {
  constructor(){
    this._mainElement = document.querySelector('.main');
    this._movieList = new SiteMovieListView();
    this._sortList = new SortView();
    this._filmCard = new FilmCardView();
    this._ExtraFilms = new ExtraFilmView();
    this._movieListEmpty = new MovieListEmptyView();
    this._siteNavigation = new SiteNavigationView(cards);
    this._filmPopupView = new FilmPopupView();
    this._popupComments = new PopupCommentsView();
    this._popupFilmsTypes = new PopupFilmsTypesView();
    this._siteFooter = new SiteFooterView();
    this._siteHeader = new SiteHeaderView();
    this._filmCardComponent = null;
    this._popupComponent = null;

  }
  init(){

    const headerElement = document.querySelector('.header');
    const footerElement = document.querySelector('.footer');

    render(headerElement, this._siteHeader.getElement(), RenderPosition.BEFOREEND);
    render(footerElement, this._siteFooter.getElement(), RenderPosition.BEFOREEND);

    this._renderNavigation(cards);
    this._renderSort();
    this._renderMovieList();
    if (cards === 0){
      this._renderEmptyList();
    };

    this._renderCards(CARDS_COUNT, this._movieList.getElement());
    this._renderTopRatedList(cards);
    this._renderMostCommentedList(cards);
    this._openPopup();
    this._showMoreCards(cards);
  }
//---------------------------------------------------------------------------------------------------------------
  _renderNavigation(){
    render( this._mainElement, this._siteNavigation.getElement(), RenderPosition.BEFOREEND );
  }

  _renderSort(){
    render(this._mainElement, this._sortList.getElement(), RenderPosition.BEFOREEND);
  }

  _renderMovieList(){

    render(this._mainElement, this._movieList.getElement(), RenderPosition.BEFOREEND);
  }

  _renderEmptyList(){
      render(this._renderMovieList.getElement(), this._movieListEmpty.getElement(), RenderPosition.BEFOREEND);
  }

  _renderCards(count, container){

      if (cards){
        for (let i = 0; i < count; i++) {
          const cardTemplate = new FilmCardView(cards[i]);
          render(container, cardTemplate.getElement(), RenderPosition.AFTERBEGIN);
        }
      };
  }

  _renderTopRatedList(cards){
    const filmBoard = this._mainElement.querySelector('.films');
    const topRatedElement = new ExtraFilmView(cards[getRandomBetween(0,cards.length)], EXTRA_FILM_TYPES[0]);

    render(filmBoard, topRatedElement, RenderPosition.BEFOREEND);
    const extraContainer = this._mainElement.querySelector('.films-list--extra');
    const topRatedContainer = extraContainer.querySelector('.films-list__container');
    this._renderCards(EXTRA_CARDS_COUNT, topRatedContainer);
  }

  _renderMostCommentedList(cards){
    const filmBoard = this._mainElement.querySelector('.films');
    const mostCommentedElement = new ExtraFilmView(cards[1], EXTRA_FILM_TYPES[1]);
    render(filmBoard, mostCommentedElement, RenderPosition.BEFOREEND);
    this._renderCards(EXTRA_CARDS_COUNT, mostCommentedElement.getElement().querySelector('.films-list__container'));
  }

  _openPopup(){
    const filmBoard = this._mainElement.querySelector('.films');
    const filmCardView = new FilmCardView(cards);

    filmCardView.setOpenPopupByTitleHandler(()=>initPopup(filmBoard));
    filmCardView.setOpenPopupByPosterHandler(()=>initPopup(filmBoard));
    filmCardView.setOpenPopupByCommentsHandler(()=>initPopup(filmBoard));
  }

  loadMoreCardsClick(){
    const showMoreBtn = this._movieList.getElement().querySelector('.films-list__show-more');

    cardsCount++;

    const totalCount = CARDS_COUNT + cardsCount*CARDS_COUNT;
    if (
      totalCount < MAX_COUNT
    ) {
      this._renderCards(CARDS_COUNT, this._movieList.getElement());
    }
    if (
      totalCount > MAX_COUNT
    ) {
      this._renderCards(MAX_COUNT % CARDS_COUNT, this._movieList.getElement());
      showMoreBtn.style = 'display: none';
    }
    if (
      totalCount === MAX_COUNT &&
      MAX_COUNT % CARDS_COUNT === 0
    ) {
      this._renderCards(CARDS_COUNT, this._movieList.getElement());
      showMoreBtn.style = 'display: none';
    }
    };

  _showMoreCards(cards){

    new SiteMovieListView(cards).setLoadMoreCardsClick(()=>this.loadMoreCardsClick(cards));
  }
}
