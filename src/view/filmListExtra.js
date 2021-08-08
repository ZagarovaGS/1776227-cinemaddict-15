import { createFilmCard } from './filmCard.js';

export const createFilmListExtra = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>

  <div class="films-list__container">
  ${ createFilmCard() }
  ${ createFilmCard() }
  </div>
</section>`
)
