import dayjs from 'dayjs';
import { POSTERS, DESCRIPTION, COMMENT_TEXT, RATING, GENRE, DIRECTORS, WRITERS, ACTORS } from './card-constants.js';


const getRandomBetween = (min, max, dec) => {

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};

const getRandomIndex = (filmData) => getRandomBetween(0, filmData.length-1, 0);
const getFilmDescription = (description) => {
  const filmDescriptions = [];
  for (let i = 0; i < getRandomBetween(1, 5, 0); i++){

   filmDescriptions.push(description[getRandomIndex(description)]);
  }
  return filmDescriptions;
}

const createTitle = (title) => title.replace((/.png|.jpg|-/g), ' ');

const generateDate = () => {

const MAX_DAY_GAP = 7;
const yearGap = getRandomBetween(-MAX_DAY_GAP, 0, 0);
return dayjs().add(yearGap, 'year').toDate();
};

export const generateCard = () => {
  const date = generateDate();
  return {
    id: getRandomBetween(0,20,0),
    title: createTitle(POSTERS[getRandomIndex(POSTERS)]),
    alternative_title: createTitle(POSTERS[getRandomIndex(POSTERS)]),
    total_rating: RATING[getRandomIndex(RATING)],
    poster: './images/posters/'+ POSTERS[getRandomIndex(POSTERS)],
    age_rating: getRandomBetween(0, 18, 0),
    director: DIRECTORS[getRandomIndex(DIRECTORS)],
    writers: [WRITERS[getRandomIndex(WRITERS)]],
    actors:  getFilmDescription(ACTORS),
    duration: getRandomBetween(1, 2, 0) + 'h' + getRandomBetween(1, 59, 0) + 'min',
    genre: GENRE[getRandomIndex(GENRE)],
    description: getFilmDescription(DESCRIPTION),
    year: getRandomBetween(1895, 2021, 0),
    comment_text: COMMENT_TEXT[getRandomIndex(COMMENT_TEXT)],
    date,
    isWatchlist: Boolean(getRandomBetween(0, 1, 0)),
    isHistory: Boolean(getRandomBetween(0, 1, 0)),
    isFavorites: Boolean(getRandomBetween(0, 1, 0)),
  };
};
