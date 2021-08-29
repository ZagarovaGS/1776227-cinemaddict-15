import PopupCommentsView from './view/popup-comment.js';
import PopupFilmsTypesView from './view/popup-types-films.js';
import FilmPopupView from './view/popup.js';
import { generateCard } from './mock/card-mock.js';
import { generateComment } from './mock/comments-mock.js';
import SiteMovieList from './view/site-list.js';

const popup = generateCard();
const KEYCODE_NUMBER = 27;
const userComment = generateComment();

const initPopup = (board) => {

  const popupView = new FilmPopupView(popup);

  let countPopupParts = 0;
  const createPopup = () =>{

    countPopupParts++;
    const popupTypesView = new PopupFilmsTypesView();
    const popupCommentsView = new PopupCommentsView(userComment);
    popupView.getElement().append(popupTypesView.getElement());
    popupView.getElement().append(popupCommentsView.getElement());
    board.append(popupView.getElement());
    if (countPopupParts > 1){
      popupTypesView.getElement().remove();
      popupCommentsView.getElement().remove();
    }
  };

  new SiteMovieList().setOpenPopupByTitleHandler(()=>createPopup());
  new SiteMovieList().setOpenPopupByPosterHandler(()=>createPopup());
  new SiteMovieList().setOpenPopupByCommentsHandler(()=>createPopup());

  const removePopup = () => popupView.getElement().remove();

  popupView.setClosePopupHandler(()=>removePopup());

  const closePopupEsc = (evt) => {
    if (evt.keyCode === KEYCODE_NUMBER) {
      removePopup();
    }
  };
  document.addEventListener('keydown', closePopupEsc);
};

export { initPopup };
