import { createElement } from '../utils.js';

const createPopupTemplate = (popup) => {
  const { filmInfo} = popup;


  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src=${filmInfo.poster} alt="">

          <p class="film-details__age">${filmInfo.ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${filmInfo.title}</h3>
              <p class="film-details__title-original">Original: ${filmInfo.title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${filmInfo.totalRating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${filmInfo.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${filmInfo.writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${filmInfo.actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${filmInfo.release.date}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${filmInfo.runtime}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${filmInfo.release.release_coutry}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${filmInfo.genre}</td>
              <td class="film-details__cell">
                <span class="film-details__genre">Drama</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span>
              </td>
            </tr>
          </table>

          <p class="film-details__film-description">
           ${filmInfo.description}
          </p>
        </div>
      </div>
      <!-- Типы фильмов -->
    </div>

    <div class="film-details__bottom-container">

    </div>
  </form>
</section>`;
};

export default class FilmPopup {
  constructor(popup, userComment){
    this._popup = popup,
    this._userComment = userComment,
    this._element = null;
    this._menuBoard = null;
    this._commentsBoard = null;
    this._closeBtn = null;
  }

  getTemplate(){
    return createPopupTemplate(this._popup, this._userComment);
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

  getMenuBoard(){
    if(!this._menuBoard){
      this._menuBoard = this.getElement().querySelector('.film-details__inner');
    }
    return this._menuBoard;
  }

  getCommentsBoard(){
    if(!this._commentsBoard) {
      this._commentsBoard = this.getElement().querySelector('.film-details__top-container');
    }
    return this._commentsBoard;
  }

  getCloseBtn(){
    if(!this._closeBtn) {
      this._closeBtn = this.getElement().querySelector('.film-details__close-btn');
    }
    return this._closeBtn;
  }
}
