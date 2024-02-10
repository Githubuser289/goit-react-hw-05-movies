import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies, fetchMoviesGenres } from 'services/TheMovieDBapi';

let searchQuery = '',
  listOfGenres,
  counter = 0;
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

export const Home = () => {
  const [flag, setFlag] = useState(false);

  async function renderTrendingMovies() {
    const listOfGen = await fetchMoviesGenres();
    listOfGenres = listOfGen.genres;

    const data = await fetchTrendingMovies(1);
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
      }
    );
    setFlag(true);
  }

  useEffect(() => {
    renderTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList data={movieArray} />
    </main>
  );
};
