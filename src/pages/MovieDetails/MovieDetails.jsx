import { BackLink } from 'components/BackLink';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/TheMovieDBapi';
import { InfoDiv, MainDiv, MovieData } from './MovieDetails.styled';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({
    original_title: '',
    overview: '',
    popularity: 0,
    genres: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieDetails(movieId);
      data.genre = data.genres.map(m => m.name).join(', ');
      if (data.poster_path === null) {
        data.poster_path =
          'https://dummyimage.com/500x750/000/fff&text=no+photo';
      } else {
        data.poster_path =
          'https://www.themoviedb.org/t/p/w500' + data.poster_path;
      }
      setMovieData(data);
      setIsLoading(false);
    }
    if (!movieId) return;
    setIsLoading(true);
    prepareDetails();
  }, [movieId]);

  console.log('movieDetails + location=', location);
  return (
    <MainDiv>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {isLoading && <Loader />}
      <MovieData>
        <img src={movieData.poster_path} alt={movieData.original_title} />
        <div>
          <h2>{movieData.original_title}</h2>
          <p>User score: {Math.round(movieData.vote_average * 10) + '%'}</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <p>{movieData.genre}</p>
        </div>
      </MovieData>
      <h3>Aditional information</h3>
      <InfoDiv>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </InfoDiv>
      <Outlet />
    </MainDiv>
  );
};

export default MovieDetails;
