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
} from './mock-utils';

export const generateCard = () => {
  const date = generateDate();
  return {
    id: getRandomBetween(0, 20),
    film_info: {
      title: POSTERS[getRandomIndex(POSTERS)].replace(/.png|.jpg/),
      alternative_title: POSTERS[getRandomIndex(POSTERS)].replace(/.png|.jpg/),
      total_rating: RATING[getRandomIndex(RATING)],
      poster: './images/posters/' + POSTERS[getRandomIndex(POSTERS)],
      age_rating: getRandomBetween(0, 18),
      director: DIRECTORS[getRandomIndex(DIRECTORS)],
      writers: [WRITERS[getRandomIndex(WRITERS)]],
      actors: getFilmDescription(ACTORS),
      release: {
        date,
        release_coutry: [COUTRIES[getRandomIndex(COUTRIES)]],
      },
      runtime: getRandomBetween(1, 2) + 'h' + getRandomBetween(1, 59) + 'min',
      genre: GENRE[getRandomIndex(GENRE)],
      description: getFilmDescription(DESCRIPTION),
    },
    user_details: {
      watchlist: Boolean(getRandomBetween(0, 1)),
      already_watched: Boolean(getRandomBetween(0, 1)),
      watching_date: date,
      favorite: Boolean(getRandomBetween(0, 1)),
    },
  };
};
