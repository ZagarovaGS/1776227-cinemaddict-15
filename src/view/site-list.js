import AbstractView from './abstract';

const createMoviesListTemplate = () =>(
  `<div class="films-list__container">

  </div>`
);

export default class SiteMovieList extends AbstractView {
  constructor(){
    super();
    this._handleLoadMoreCardsClick = this._handleLoadMoreCardsClick.bind(this);
  }

  getTemplate(){
    return createMoviesListTemplate();
  }

  _handleLoadMoreCardsClick(){

    this._callback.loadMoreCardsClick();
  }

  setLoadMoreCardsClick(callback){

    this._callback.loadMoreCardsClick = callback;
    document.querySelector('.films-list__show-more').addEventListener('click', this._handleLoadMoreCardsClick);
  }
}
