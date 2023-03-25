import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieId } from 'services/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Movie } from 'components/Movie';
import { Loader } from 'components/Loader';

const SelectedMovie = () => {
  const { filmId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieId(filmId)
      .then(setMovie)
      .catch(error => alert(error));
  }, [filmId]);

  return (
    <>
      <Link to={backLink.current}>
        <button>go back</button>
      </Link>
      <Movie movie={movie} />

      <h2>Additional information</h2>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SelectedMovie;
