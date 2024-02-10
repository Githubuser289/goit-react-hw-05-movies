import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/TheMovieDBapi';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieCredits(movieId);
      let list = [...data.cast];
      list.map(actor => {
        if (actor.profile_path === null) {
          console.log(actor.name);
          console.log(actor.profile_path);
          actor.profile_path =
            'https://bbgres.com/wp-content/uploads/2016/11/dummy-profile-pic-e1573529329780-223x300.jpg';
        } else {
          actor.profile_path =
            'https://image.tmdb.org/t/p/w500/' + actor.profile_path;
        }
        return actor;
      });
      setCredits(list);
    }
    if (!movieId) return;
    prepareDetails();
  }, [movieId]);

  return (
    <main>
      <div>
        <p>Cast page -- p element</p>
        {credits.map(({ profile_path, name, character, id }) => {
          return <img key={id} src={profile_path} alt={name} />;
        })}
      </div>
    </main>
  );
};
