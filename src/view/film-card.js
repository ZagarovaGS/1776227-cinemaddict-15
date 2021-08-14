export const createFilmCardTemplate = (card) => {
  const { year, poster, description, comment_text, title, total_rating, genre, duration} = card;

  return` <article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${total_rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src=${poster} alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">Comment: ${comment_text}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`
};

