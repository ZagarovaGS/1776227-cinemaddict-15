import AbstractView from './abstract';

const createFilmExtraListTemplate = (card, filmType) => `<section class="films-list films-list--extra">
  <h2 class="films-list__title">${filmType}</h2>

  <div class="films-list__container">

  </div>
</section>`;

export default class ExtraFilm extends AbstractView {
  constructor(card, filmType){
    super(),
    this._card = card,
    this._filmType = filmType,
    this._element = null;
  }

  getTemplate(){
    return createFilmExtraListTemplate(this._card, this._filmType);
  }
}
