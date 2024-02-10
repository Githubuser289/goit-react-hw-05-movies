import { Link, useLocation } from 'react-router-dom';
export const MoviesList = props => {
  const location = useLocation();
  return (
    <nav>
      <ul>
        {props.data.map((movie, index) => {
          return (
            <li key={index}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// to adapt this function in order to get a gallery filled with movie posters
function renderMoviesList(list) {
  const markup = list
    .map(({ id, poster_path, title, genres, release_year, vote_average }) => {
      // adaug elemente in markup
      return `<div>
    <img id="${id}" src="${poster_path}" alt="movie poster" loading="lazy" />
            <p class="movie-title">   ${title} </p>
            <p class="movie-short-descr"> ${genres} | ${release_year} | <span>${vote_average}</span></p>
        </div>`;
    })
    .join('');
  const moviesDivElem = document.querySelector('.movies-div');
  moviesDivElem.innerHTML = markup;
}
