const CountStrategy = {
  Watch: 'Watch',
  History: 'History',
  Favorite: 'Favorite',
};
const countStrategies = {
  [CountStrategy.Watch]: (cards) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.user_details.watchlist === true) {
        count++;
      }
    });
    return count;
  },
  [CountStrategy.History]: (cards) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.user_details.already_watched === true) {
        count++;
      }
    });
    return count;
  },
  [CountStrategy.Favorite]: (cards) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.user_details.favorite === true) {
        count++;
      }
    });
    return count;
  },
};

const getCount = (cards, countStrategy) => countStrategies[countStrategy](cards);


export const createMainNavigationMenu = (cards) =>
  `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getCount(cards, CountStrategy.Watch)}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getCount(cards, CountStrategy.History)}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getCount(cards, CountStrategy.Favorite)}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
