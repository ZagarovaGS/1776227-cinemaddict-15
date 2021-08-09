import { createFilmCardTemplate } from './film-card.js';

export const createFilmExtraListTemplate = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>

  <div class="films-list__container">
  ${ createFilmCardTemplate() }
  ${ createFilmCardTemplate() }
  </div>
</section>`
);
