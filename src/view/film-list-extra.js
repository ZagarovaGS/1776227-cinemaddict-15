import { createElement } from '../utils.js';
import  FilmCardView  from './film-card.js';

const createFilmExtraListTemplate = (card, filmType) => {

  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">${filmType}</h2>

  <div class="films-list__container">

  </div>
</section>`;
};

export default class ExtraFilm {
  constructor(card, filmType){
    this._card = card,
    this._filmType = filmType,
    this._element = null;
  }

  getTemplate(){
    return createFilmExtraListTemplate(this._card, this._filmType);
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
