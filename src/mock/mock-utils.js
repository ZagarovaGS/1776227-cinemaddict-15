import dayjs from 'dayjs';

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

const generateDate = () => dayjs("12-25-2001", [ "YYYY-MM-DD"]);

export { getRandomBetween, getRandomIndex, getFilmDescription, createTitle, generateDate };
