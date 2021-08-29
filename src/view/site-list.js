import AbstractView from './abstract';

const createMoviesListTemplate = () =>(
  `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container">

  </div>

  <button class="films-list__show-more">Show more</button>
</section>
</section>`
);

export default class SiteMovieList extends AbstractView {
  constructor(){
    super(),
    this._openPopupClickHandler = this._openPopupClickHandler.bind(this);
  }

  getTemplate(){
    return createMoviesListTemplate();
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
}
