import dayjs from 'dayjs';

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


export {
  getRandomBetween,
  getRandomIndex,
  getFilmDescription,
  generateDate
};
