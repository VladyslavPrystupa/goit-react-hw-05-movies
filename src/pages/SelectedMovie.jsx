import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieId } from 'services/api';
import { useEffect, useState } from 'react';
import { Movie } from 'components/Movie';

export const SelectedMovie = () => {
  const { filmId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieId(filmId)
      .then(setMovie)
      .catch(error => alert(error));
  }, [filmId]);

  return (
    <>
      <Link to={backLink}>Go back</Link>
      <Movie movie={movie} />

      <Link to="reviews">Reviews</Link>
      <br />
      <Link to="cast">Cast</Link>

      <Outlet />
    </>
  );
};
