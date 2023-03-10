import { getfilmsGenresUl } from '../filmsListMarkup';
import { trimMovieTitle } from '../filmsListMarkup';
import defaultImage from '../../defaultImage.jpg';

export const makemovieForKeywordMarkup = results => {
  return results
    .map(
      ({ id, title, poster_path, genre_ids, vote_average, release_date }) => {
        const filmsGenresList = genre_ids.length > 0 ? getfilmsGenresUl(genre_ids).join(', ') : 'no genres';
        const imageUrl = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : defaultImage;
        const releaseDate = release_date ? release_date.slice(0, 4) : 'no release date';
        return `<div class="movie__card" id=${id}>
    <img class="movie__poster" src="${imageUrl}" alt="${title}" loading="lazy">
    <div class="movie__info">
       <p class="movie__name">${trimMovieTitle(title)}</p>
      <div class="movie__data">
       <span class="movie__genre">${filmsGenresList}</span>
       <span class="movie__year">${releaseDate}</span>
       <span class="movie__rating">${vote_average.toFixed(1)}</span>
       </div>
       </div>
       </div>
       `;
      }
    )
    .join('');
};
