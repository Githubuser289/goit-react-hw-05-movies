import { Cast } from 'components/Cast';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Reviews } from 'components/Reviews';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/MovieDetalis';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
