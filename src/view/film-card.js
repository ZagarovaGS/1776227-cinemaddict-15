import { createElement } from '../utils.js';

const createFilmCardTemplate = (card) => {
  const { id, film_info} = card;

  return `<article class="film-card">
  <h3 class="film-card__title">${film_info.title}</h3>
  <p class="film-card__rating">${film_info.total_rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${film_info.release.date}</span>
    <span class="film-card__duration">${film_info.runtime}</span>
    <span class="film-card__genre">${film_info.genre}</span>
  </p>
  <img src=${film_info.poster} alt="" class="film-card__poster">
  <p class="film-card__description">${film_info.description}</p>
  <a class="film-card__comments">Comment: ${id}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class FilmCard {

  constructor(card){
    this._card = card,
    this._element = null;
  }

  getTemplate(){
    return createFilmCardTemplate(this._card);
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
