import {
  POSTERS,
  DESCRIPTION,
  RATING,
  GENRE,
  DIRECTORS,
  WRITERS,
  ACTORS,
  COUTRIES
} from './card-constants.js';
import {
  getRandomBetween,
  getRandomIndex,
  getFilmDescription,
  generateDate
} from './utils-mock.js';
import { nanoid } from 'nanoid';
export const generateCard = () => {
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
