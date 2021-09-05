import { getRandomBetween } from '../mock/utils-mock';
import AbstractView from './abstract';

const createFilmCardTemplate = (card) => {
  const { filmInfo} = card;

  return `<article class="film-card">
  <h3 class="film-card__title">${filmInfo.title}</h3>
  <p class="film-card__rating">${filmInfo.totalRating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${filmInfo.release.date}</span>
    <span class="film-card__duration">${filmInfo.runtime}</span>
    <span class="film-card__genre">${filmInfo.genre}</span>
  </p>
  <img src=${filmInfo.poster} alt="" class="film-card__poster">
  <p class="film-card__description">${filmInfo.description}</p>
  <a class="film-card__comments">Comment: ${getRandomBetween(1, 20)}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class FilmCard extends AbstractView {

  constructor(card){
    super(),
    this._card = card,
    this._element = null;
    this._openPopupClickHandler = this._openPopupClickHandler.bind(this);
  }

  getTemplate(){
    return createFilmCardTemplate(this._card);
  }

  _openPopupClickHandler(){

    this._callback.openPopupClick();
  }

  setOpenPopupByTitleHandler(callback){
    this._callback.openPopupClick = callback;
    document.querySelector('.films').querySelectorAll('.film-card__title').forEach((title)=>title.addEventListener('click', this._openPopupClickHandler));
  }

  setOpenPopupByPosterHandler(callback){
    this._callback.openPopupClick = callback;
    document.querySelector('.films').querySelectorAll('.film-card__poster').forEach((posters)=>posters.addEventListener('click', this._openPopupClickHandler));
  }

  setOpenPopupByCommentsHandler(callback){
    this._callback.openPopupClick = callback;
    document.querySelector('.films').querySelectorAll('.film-card__comments').forEach((comment)=>comment.addEventListener('click', this._openPopupClickHandler));
  }

  _addToWatchlistHandler(){

    this._callback.addToWatchlist();
  }

  setAddToWatchlist(callback){
    this._callback.addToWatchlist = callback;
    document.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this._addToWatchlistHandler);
  }

  _markAsWatchedHandler(){
    this._callback.markAsWatched();
  }

  setMarkAsWathed(callback){
    this._callback.markAsWatched = callback;
    document.querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click', this._markAsWatchedHandler);
  }

  _markAsFavoriteHandler(){
    this._callback.markAsFavorite();
  }

  setMarkAsFavorite(callback){
    this._callback.markAsWatched = callback;
    document.querySelector('.film-card__controls-item--favorite').addEventListener('click', this._markAsWatchedHandler);
  }
}
