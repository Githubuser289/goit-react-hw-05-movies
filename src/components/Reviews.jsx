import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/TheMovieDBapi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieReviews(movieId);
      setReviewsList(data.results);
    }
    if (!movieId) return;
    prepareDetails();
  }, [movieId]);

  return (
    <>
      {!reviewsList.length ? (
        <i>   Sorry! There are no reviews for this movie. </i>
      ) : (
        <div>
          {reviewsList.map(review => {
            return (
              <div key={review.id}>
                <span>{review.author}</span>
                <p>{review.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
