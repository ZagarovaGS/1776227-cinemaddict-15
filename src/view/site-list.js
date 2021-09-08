import AbstractView from './abstract';

const createMoviesListTemplate = () =>(

  `<div class="films-list__container">

  </div>`
);

export default class SiteMovieList extends AbstractView {

  getTemplate(){
    return createMoviesListTemplate();
  }
}
