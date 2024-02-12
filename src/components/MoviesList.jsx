import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = props => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {props.data.map((movie, index) => {
          return (
            <li key={index}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
