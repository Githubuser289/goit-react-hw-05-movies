import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/TheMovieDBapi';

export const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {
    async function prepareDetails() {
      const data = await fetchMovieReviews(movieId);
      console.log(data);
    }
    console.log('useEffect');
    if (!movieId) return;
    prepareDetails();
  }, [movieId]);

  return (
    <main>
      <div>
        <p>Reviews page -- p element</p>
      </div>
      {/* <Outlet /> */}
    </main>
  );
};

// return (
//   <>
//     {!movieReviews.length ? (
//       <TitlePage text="Sorry! We dont have any reviews for this movie" />
//     ) : (
//       <ul className={css.list}>
//         {movieReviews.map(({ id, author, content }) => {
//           return (
//             <li className={css.item} key={id}>
//               <b className={css.author}>{author}</b>
//               <p className={css.content}>{content}</p>
//             </li>
//           );
//         })}
//       </ul>
//     )}
//   </>
// );
