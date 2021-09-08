import { initPopup } from '../popup-utils.js';
import { render, RenderPosition, remove, replace } from '../render-utils.js';
import FilmCardView from '../view/film-card.js';
import { generateCard } from '../mock/card-mock.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP',
};

export default class MovieComponent {
  constructor(filmBoard){
    this._filmBoard = filmBoard;
    this._container = container;
    // this._changeData = changeData;
    // this._changeMode = changeMode;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;
  }

  init(card){
    this._card = card;
    const mainElement = document.querySelector('.main');
    this._filmBoard = mainElement.querySelector('.films');
    this._filmListContainer = this._filmBoard.querySelector('.films-list__container');

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new FilmCardView(generateCard());
    this._popupComponent = initPopup;


    if (prevCardComponent !== null || prevPopupComponent === null){
      // render(this._movieList.getElement(), new FilmCardView(generateCard()), RenderPosition.BEFOREEND);
      render(this._container, this._cardComponent, RenderPosition.BEFOREEND);
    }

    if (prevCardComponent !== null && this._container.contains((prevCardComponent.getElement())) && this._mode === Mode.DEFAULT) {
      replace(this._cardComponent, prevCardComponent);
    }

    if (prevPopupComponent !== null && this._mainElement.contains((prevPopupComponent.getElement())) && this._mode === Mode.POPUP) {
      replace(this._popupComponent, prevPopupComponent);
    }

    if(prevCardComponent){
      remove(prevCardComponent);
    }

    if(prevPopupComponent){
      prevPopupComponent.remove();
    }
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }
}
