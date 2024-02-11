import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/TheMovieDBapi';
import { useEffect, useState } from 'react';
import { Gallery } from './Cast.styled';
import Loader from 'components/Loader/Loader';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieCredits(movieId);
      let list = [...data.cast];
      list.map(actor => {
        if (actor.profile_path === null) {
          // fallback image if there is no image for this actor
          actor.profile_path =
            // 'https://bbgres.com/wp-content/uploads/2016/11/dummy-profile-pic-e1573529329780-223x300.jpg';
            'https://dummyimage.com/175x263/000/fff&text=no+photo';
        } else {
          actor.profile_path =
            'https://image.tmdb.org/t/p/w500/' + actor.profile_path;
        }
        return actor;
      });
      setCredits(list);
      setIsLoading(false);
    }
    if (!movieId) return;
    setIsLoading(true);
    prepareDetails();
  }, [movieId]);

  return (
    <Gallery>
      {isLoading && <Loader />}
      {credits.map(({ profile_path, name, character, id }) => {
        return (
          <div key={id}>
            <img src={profile_path} alt={name} />
            <span>{name}</span>
            <i>Character: {character}</i>
          </div>
        );
      })}
    </Gallery>
  );
};
