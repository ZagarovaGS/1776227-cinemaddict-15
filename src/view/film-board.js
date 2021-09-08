import AbstractView from './abstract';

const createMoviesBoard = () =>(
  `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <button class="films-list__show-more">Show more</button>
</section>
</section>`
);

export default class MovieBoard extends AbstractView {
  constructor(){
    super();
    this._handleLoadMoreCardsClick = this._handleLoadMoreCardsClick.bind(this);
  }

  getTemplate(){
    return createMoviesBoard();
  }

  _handleLoadMoreCardsClick(){

    this._callback.loadMoreCardsClick();
  }

  setLoadMoreCardsClick(callback){

    this._callback.loadMoreCardsClick = callback;
    document.querySelector('.films-list__show-more').addEventListener('click', this._handleLoadMoreCardsClick);
  }
}
