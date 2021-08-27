import PopupCommentsView from './view/popup-comment.js';
import PopupFilmsTypesView from './view/popup-types-films.js';
import FilmPopupView from './view/popup.js';
import { generateCard } from './mock/card-mock.js';
import { generateComment } from './mock/comments-mock.js';

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


  const cardTitle = board.querySelectorAll('.film-card__title');
  cardTitle.forEach((title)=>title.addEventListener('click', createPopup));
  const cardPosters = board.querySelectorAll('.film-card__poster');
  cardPosters.forEach((posters)=>posters.addEventListener('click', createPopup ));
  const cardComments = board.querySelectorAll('.film-card__comments');
  cardComments.forEach((comment)=>comment.addEventListener('click', createPopup));
  const popupCloseBtn = popupView.getCloseBtn();
  popupCloseBtn.addEventListener('click', () =>{
    popupView.getElement().remove();
  });

  const closePopupEsc = (evt) => {
    if (evt.keyCode === KEYCODE_NUMBER) {
      popupView.getElement().remove();
    }
  };

  document.addEventListener('keydown', closePopupEsc);
};

export { initPopup };
