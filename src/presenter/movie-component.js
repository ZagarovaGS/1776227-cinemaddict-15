import { initPopup } from '../popup-utils.js';
import { render, RenderPosition, remove } from '../render-utils.js';
import FilmCardView from '../view/film-card.js';
import { generateCard } from '../mock/card-mock.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP',
}

export default class MovieComponent {
  constructor(filmBoard){
    this._filmBoard = filmBoard;
   // this._changeData = changeData;
   // this._changeMode = changeMode;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;
  }

  init(film){
    this._film = film;
    const mainElement = document.querySelector('.main');
    this._filmBoard = mainElement.querySelector('.films');

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    const card = generateCard();
    this._cardComponent = new FilmCardView(card);
    this._popupComponent = initPopup;


    if (prevCardComponent === null || prevPopupComponent === null){
      render(this._filmBoard, this._cardComponent, RenderPosition.BEFOREEND);
    }

    if (prevCardComponent !== null && this._filmBoard.contains((prevCardComponent.getElement())) && this._mode === Mode.DEFAULT) {
      replace(this._cardComponent, prevFilmComponent);
    }

    if (prevCardComponent !== null && this._cardComponent.contains((prevPopupComponent.getElement())) && this._mode === Mode.POPUP) {
      replace(this._popupComponent, prevPopupComponent);
      replace(this._cardComponent, prevCardComponent);
    }

  if(prevCardComponent){
    remove(prevCardComponent);
  };

  if(prevPopupComponent){
    prevPopupComponentremove();
  };
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }
}
