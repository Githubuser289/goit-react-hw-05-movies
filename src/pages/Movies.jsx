import { MoviesList } from 'components/MoviesList';
import Searchbar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesGenres, fetchSearchedMovies } from 'services/TheMovieDBapi';

let movieData = {
  id: 0,
  title: '',
  original_title: '',
  overview: '',
  poster_path: '',
  genres: '',
  popularity: 0,
  release_year: 0,
  vote_average: 0,
  vote_count: 0,
};
let movieArray = [];
let listOfGenres,
  counter = 0;

export const Movies = () => {
  const [flag, setFlag] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    async function renderSearchedMovies() {
      const listOfGen = await fetchMoviesGenres();
      listOfGenres = listOfGen.genres;
      const data = await fetchSearchedMovies(query, 1);
      // const spanElem = document.querySelector('.error-message');
      // if (spanElem.innerHTML !== '') return;

      //get the movie data and put them into movieData, and push them into movieArray
      data.results.map(
        ({
          id,
          title,
          original_title,
          overview,
          poster_path,
          genre_ids,
          popularity,
        }) => {
          movieData = {
            id,
            title,
            original_title,
            overview,
            popularity,
          };
          if (poster_path === null) {
            movieData.poster_path =
              'https://dummyimage.com/395x574/000/fff.jpg&amp;text=no+poster';
          } else {
            movieData.poster_path =
              'https://www.themoviedb.org/t/p/w500' + poster_path;
          }

          // transform array "genre_ids" in string "genres", property of movieData
          let genre = '';
          for (let i = 0; i < genre_ids.length; i++) {
            if (i > 0) {
              genre += ', ';
            }
            let j = 0;
            while (listOfGenres[j]['id'] !== genre_ids[i]) j++;
            genre += listOfGenres[j].name;
          }
          movieData.genres = genre;
          counter++;
          if (counter <= 20) movieArray.push(movieData);
          return movieData;
        }
      );
      setFlag(true);
    }
    if (!query) return;
    renderSearchedMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    let txt = evt.target[1].value;
    if (txt === '') return;
    movieArray = [];
    counter = 0;
    document.getElementsByName('searchInput')[0].value = '';
    setSearchParams({ query: txt });
    setFlag(false);
  };

  return (
    <main>
      <Searchbar submitCallback={handleSubmit} />
      <br />
      {flag && <MoviesList data={movieArray} />}
    </main>
  );
};
