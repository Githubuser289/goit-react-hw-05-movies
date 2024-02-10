import { BackLink } from 'components/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/TheMovieDBapi';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState({
    original_title: '',
    overview: '',
    popularity: 0,
    genres: [],
  });
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieDetails(movieId);
      data.genre = data.genres.map(m => m.name).join(', ');
      data.poster_path =
        'https://www.themoviedb.org/t/p/w500' + data.poster_path;
      setMovieData(data);
      // genre = genres.map(m => m.name).join(', ');
      // setFlag(true);
    }
    if (!movieId) return;
    prepareDetails();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back to movies list</BackLink>
      <br></br>
      <img src={movieData.poster_path} alt={movieData.original_title} />
      <div>
        <h2>{movieData.original_title}</h2>
        <p>User score: {Math.round(movieData.vote_average * 10) + '%'}</p>
        <h3>Overview</h3>
        <p>{movieData.overview}</p>
        <h3>Genres</h3>
        <p>{movieData.genre}</p>
      </div>
      <h3>Aditional information</h3>
      <Link to="cast">Cast</Link>
      <br></br>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </main>
  );
};
