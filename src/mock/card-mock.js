import {
  POSTERS,
  DESCRIPTION,
  RATING,
  GENRE,
  DIRECTORS,
  WRITERS,
  ACTORS,
  COUTRIES,
  MAX_COUNT_CARDS
} from './card-constants.js';
import {
  getRandomBetween,
  getRandomIndex,
  getFilmDescription,
  generateDate
} from './utils-mock.js';
import { nanoid } from 'nanoid';

const generateCard = () => {
  const date = generateDate();
  return {
    id: nanoid(),
    filmInfo: {
      title: POSTERS[getRandomIndex(POSTERS)].replace(/.png|.jpg/, ''),
      alternativeTitle: POSTERS[getRandomIndex(POSTERS)].replace(/.png|.jpg/, ''),
      totalRating: RATING[getRandomIndex(RATING)],
      poster: `./images/posters/${  POSTERS[getRandomIndex(POSTERS)]}`,
      ageRating: getRandomBetween(0, 18),
      director: DIRECTORS[getRandomIndex(DIRECTORS)],
      writers: [WRITERS[getRandomIndex(WRITERS)]],
      actors: getFilmDescription(ACTORS),
      release: {
        date,
        releaseCoutry: [COUTRIES[getRandomIndex(COUTRIES)]],
      },
      runtime: `${getRandomBetween(1, 2)  }h${  getRandomBetween(1, 59)  }min`,
      genre: GENRE[getRandomIndex(GENRE)],
      description: getFilmDescription(DESCRIPTION),
    },
    userDetails: {
      watchlist: Boolean(getRandomBetween(0, 1)),
      alreadyWatched: Boolean(getRandomBetween(0, 1)),
      watchingDate: date,
      favorite: Boolean(getRandomBetween(0, 1)),
    },
  };
};
const CARDS_COUNT = 5;

const generateActualCards = (cardCount) => {
  let filmCards = 0;
  if (cardCount > 0){
    filmCards = new Array(CARDS_COUNT).fill().map(generateCard);
  }
  return filmCards;
};

const cards = generateActualCards(CARDS_COUNT);
const generateAllCards = () => new Array(MAX_COUNT_CARDS).fill().map(generateCard);
const maxCountCards = generateAllCards();

export {cards, CARDS_COUNT, generateCard, maxCountCards};


