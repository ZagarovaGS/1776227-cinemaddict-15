import AbstractView from './abstract';

const createFilmCardTemplate = (card) => {
  const { id,  filmInfo} = card;

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
  <a class="film-card__comments">Comment: ${id}</a>
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
  }

  getTemplate(){
    return createFilmCardTemplate(this._card);
  }
}
