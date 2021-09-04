import {generateCard} from '../mock/card-mock.js';

const CARDS_COUNT = 5;

const generateActualCards = (cardCount) => {
  let filmCards = 0;
  if (cardCount > 0){
    filmCards = new Array(CARDS_COUNT).fill().map(generateCard);
  }
  return filmCards;
};

const cards = generateActualCards(CARDS_COUNT);
console.log(cards)

export {cards, CARDS_COUNT};
