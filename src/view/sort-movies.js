import AbstractView from './abstract';

export const createMoviesSortTemplate = () => (
  `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);
export default class Sort extends AbstractView {

  getTemplate(){
    return createMoviesSortTemplate();
  }
}
