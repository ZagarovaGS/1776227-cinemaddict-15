import { POSTERS, DESCRIPTION, COMMENT_TEXT, RATING, GENRE, DIRECTORS, WRITERS, ACTORS, COUTRIES, EXTRA_FILM_TYPES } from './card-constants.js';
import { getRandomBetween, getRandomIndex, getFilmDescription, createTitle, generateDate } from './mock-utils';

export const generateCard = () => {
  const date = generateDate();
  return {
    id: getRandomBetween(0,20,0),
    //comments: [$Comment.id$],
    film_info: {
    title: createTitle(POSTERS[getRandomIndex(POSTERS)]),
    alternative_title: createTitle(POSTERS[getRandomIndex(POSTERS)]),
    total_rating: RATING[getRandomIndex(RATING)],
    poster: './images/posters/'+ POSTERS[getRandomIndex(POSTERS)],
    age_rating: getRandomBetween(0, 18, 0),
    director: DIRECTORS[getRandomIndex(DIRECTORS)],
    writers: [WRITERS[getRandomIndex(WRITERS)]],
    actors:  getFilmDescription(ACTORS),
    release:{
      date,
      release_coutry: [COUTRIES[getRandomIndex(COUTRIES)]],
    },
    runtime: getRandomBetween(1, 2, 0) + 'h' + getRandomBetween(1, 59, 0) + 'min',
    genre: GENRE[getRandomIndex(GENRE)],
    description: getFilmDescription(DESCRIPTION),
    //comment_text: COMMENT_TEXT[getRandomIndex(COMMENT_TEXT)],
    },
    user_details:{
      watchlist: Boolean(getRandomBetween(0, 1, 0)),
      already_watched: Boolean(getRandomBetween(0, 1, 0)),
      watching_date: date,
      favorite: Boolean(getRandomBetween(0, 1, 0)),
    },
  };
};
