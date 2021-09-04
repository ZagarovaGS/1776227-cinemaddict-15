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
    super();
    this._handleLoadMoreCardsClick = this._handleLoadMoreCardsClick.bind(this);
  }

  getTemplate(){
    return createMoviesListTemplate();
  };

  _handleLoadMoreCardsClick(){

    this._callback.loadMoreCardsClick();
  };

  setLoadMoreCardsClick(callback){

    this._callback.loadMoreCardsClick = callback;
    document.querySelector('.films-list__show-more').addEventListener('click', this._handleLoadMoreCardsClick);
  }
}
