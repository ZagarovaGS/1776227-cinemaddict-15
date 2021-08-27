import { createElement } from '../utils.js';

const CountStrategy = {
  Watch: 'Watch',
  History: 'History',
  Favorite: 'Favorite',
};
const countStrategies = {
  [CountStrategy.Watch]: (cards) => {
    let count = 0;
    if (cards !==0){
      cards.forEach((card) => {
        if (card.userDetails.watchlist === true) {
          count++;
        }
      });
    }
    return count;
  },
  [CountStrategy.History]: (cards) => {
    let count = 0;
    if (cards !==0){
      cards.forEach((card) => {
        if (card.userDetails.already_watched === true) {
          count++;
        }
      });
    }
    return count;
  },
  [CountStrategy.Favorite]: (cards) => {
    let count = 0;
    if (cards !==0){
      cards.forEach((card) => {
        if (card.userDetails.favorite === true) {
          count++;
        }
      });
    }
    return count;
  },
};

const getCount = (cards, countStrategy) => countStrategies[countStrategy](cards);


const createMainNavigationMenu = (cards) =>
  `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getCount(cards, CountStrategy.Watch)}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getCount(cards, CountStrategy.History)}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getCount(cards, CountStrategy.Favorite)}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;

export default class SiteNavigation {
  constructor(cards){
    this._cards = cards;
    this._element = null;
  }

  getTemplate(){
    return createMainNavigationMenu(this._cards);
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
}
