import dayjs from 'dayjs';
import { cards } from '../main.js';

const getRandomBetween = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

const getRandomIndex = (filmData) => getRandomBetween(0, filmData.length - 1);
const getFilmDescription = (description) => {
  const filmDescriptions = [];
  for (let i = 0; i < getRandomBetween(1, 5); i++) {
    filmDescriptions.push(description[getRandomIndex(description)]);
  }
  return filmDescriptions;
};

const generateDate = () => dayjs('12-25-2001', ['YYYY-MM-DD']);

let watchListCount = 0;
const getWatchlistCount = () =>
  cards.forEach((user) => {
    if (user.user_details.watchlist === true) {
      watchListCount++;
    }
    return watchListCount;
  });

let historyListCount = 0;
const getHistoryListCount = () =>
  cards.forEach((user) => {
    if (user.user_details.already_watched === true) {
      historyListCount++;
    }
    return historyListCount;
  });

let favoriteListCount = 0;
const getFavoriteListCount = () =>
  cards.forEach((user) => {
    if (user.user_details.favorite === true) {
      favoriteListCount++;
    }
    return favoriteListCount;
  });

export {
  getRandomBetween,
  getRandomIndex,
  getFilmDescription,
  generateDate,
  getWatchlistCount,
  watchListCount,
  getHistoryListCount,
  historyListCount,
  favoriteListCount,
  getFavoriteListCount
};
