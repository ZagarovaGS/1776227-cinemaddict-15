import { getRandomBetween, getRandomIndex, generateDate } from './utils-mock.js';
import { COMMENT_TEXT, WRITERS, EMOTIONS } from './card-constants.js';

export const generateComment = () => {
  const date = generateDate();
  return {
    id: getRandomBetween(1, 100),
    author: WRITERS[getRandomIndex(WRITERS)],
    comment: COMMENT_TEXT[getRandomIndex(COMMENT_TEXT)],
    date,
    emotion: './images/emoji/' + EMOTIONS[getRandomIndex(EMOTIONS)],
  };
};
